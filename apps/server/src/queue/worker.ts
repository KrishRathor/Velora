import type { Job } from "bullmq";
import { prisma } from "../db/db";
import { WorkflowNodeConfigSchema, type IWorkflowNodeConfig } from "../types/workflow.type";
import { addCommentToPR, getPRDetails } from "../integrations/github";
import { nodeQueue } from ".";
import { number } from "zod";

export const proccessJob = async (job: Job) => {

  console.log("inside job worker => ", job.data);
  try {
    const { node } = job.data;

    const nodeObject = await prisma.workflowNode.findFirst({
      where: {
        id: node
      }
    })

    if (!nodeObject) {
      console.error("node not found inside q");
      return
    }

    const parsedConfig = WorkflowNodeConfigSchema.safeParse(nodeObject.config);

    if (parsedConfig.error) {
      console.error("can't parse config of ndoe");
      return
    }

    const { integration, operation } = parsedConfig.data;

    switch (integration) {
      case "github":
        await handleGithubJobs(job.data, operation, parsedConfig.data);
        break
    }

  } catch (error) {
    console.error("Node execution failed:", error);
  }

}

//"create_pr_trigger",
//  "create_issue_trigger",
//  "get_pr_details",
//  "add_comment_to_pr",
//  "merge_pr",
//  "create_issue",
//  "list_user_repo",

const handleGithubJobs = async (payload: any, operation: any, config: IWorkflowNodeConfig) => {

  const { accessToken, prevNodeOperation, result, workflowId, node } = payload;
  let edges = await prisma.workflowEdge.findMany({
    where: {
      sourceNodeId: node
    }
  })

  switch (operation) {

    case "get_pr_details":

      if (prevNodeOperation !== "create_pr_trigger") {
        console.error(operation, " is only supported after ", prevNodeOperation);
        return
      }

      console.log("inside queue operation ", operation, " ", result);

      const repoFullName = config.repo!;
      const prNumber = result.prNumber;

      const res: any = await getPRDetails(repoFullName, prNumber, accessToken);

      const prDetails = {
        prNumber: res.number,
        prUrl: res.url,
        state: res.state,
        title: res.title,
        body: res.body,
        createdAt: res.createdAt,
        user: {
          name: res.user.login,
          avatar: res.user.avatar_url,
          url: res.user.url
        }
      }



      edges.map(edge => {
        const payload = {
          accessToken,
          workflowId,
          prevNode: node,
          prevNodeOperation: operation,
          node: edge.targetNodeId,
          result: prDetails
        }
        console.log("adding to queue ", payload);
        nodeQueue.add("node", payload);

      })
      break;
    case "add_comment_to_pr":

      const repo = config.repo!;
      const prnumber = result.prNumber!;
      const comment = config.comment!;

      await addCommentToPR(repo, Number(prnumber), comment + " after " + result.title, accessToken)

      edges.map(edge => {
        const payload = {
          accessToken,
          workflowId,
          prevNode: node,
          prevNodeOperation: operation,
          node: edge.targetNodeId,
          result: {}
        }
        console.log("adding to queue ", payload);
        nodeQueue.add("node", payload);

      })

      break;
    case "merge_pr":
      break;
    case "create_issue":
      break;
    case "list_user_repo":
      break;
    default:
      return

  }

}
