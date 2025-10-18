import type { Job } from "bullmq";
import { prisma } from "../db/db";
import { WorkflowNodeConfigSchema, type IWorkflowNodeConfig } from "../types/workflow.type";
import { addCommentToPR, createIssue, getPRDetails, listUserRepos, mergePR } from "../integrations/github";
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
  const repo = config.repo!;

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
      const prNumber = result.prNumber;

      const res: any = await getPRDetails(repo, prNumber, accessToken);

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
        nodeQueue.add("node", payload);

      })
      break;
    case "add_comment_to_pr":

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
        nodeQueue.add("node", payload);
      })
      break;
    case "merge_pr":

      await mergePR(repo, Number(result.prNumber!), accessToken)

      edges.map(edge => {
        const payload = {
          accessToken,
          workflowId,
          prevNode: node,
          prevNodeOperation: operation,
          node: edge.targetNodeId,
          result: {}
        }
        nodeQueue.add("node", payload);
      })

      break;
    case "create_issue":

      const title = config.issueTitle!;
      const body = config.issueBody!;

      await createIssue(repo, title, body, accessToken)

      edges.map(edge => {
        const payload = {
          accessToken,
          workflowId,
          prevNode: node,
          prevNodeOperation: operation,
          node: edge.targetNodeId,
          result: {}
        }
        nodeQueue.add("node", payload);
      })

      break;
    case "list_user_repo":

      await listUserRepos(accessToken);

      edges.map(edge => {
        const payload = {
          accessToken,
          workflowId,
          prevNode: node,
          prevNodeOperation: operation,
          node: edge.targetNodeId,
          result: {}
        }
        nodeQueue.add("node", payload);
      })

      break;
    default:
      return

  }

}
