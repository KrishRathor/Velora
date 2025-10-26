import { errorObject, type Job } from "bullmq";
import { prisma } from "../db/db";
import { addCommentToPR, createIssue, getPRDetails, listUserRepos, mergePR } from "../integrations/github";
import { nodeQueue } from ".";
import { WorkflowNodeConfigSchema, type NodeQueuePayload } from "../types/workflow.type";

export const proccessJob = async (job: Job) => {

  console.log("inside job worker => ", job.data);
  try {
    const payload = job.data as NodeQueuePayload;

    const nodeObject = await prisma.workflowNode.findFirst({
      where: {
        id: payload.node
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

    const newpayload = {
      ...payload,
      config: parsedConfig.data,
      operation,
      integration
    }

    switch (integration) {
      case "github":
        await handleGithubJobs(newpayload);
        break
    }

  } catch (error) {
    console.error("Node execution failed:", error);
  }

}

const handleGithubJobs = async (payload: NodeQueuePayload) => {

  try {
    const { node, workflowId, config, operation, accessToken, result } = payload;

    let prNumber;
    if (config.prNumber?.type === "static") {
      prNumber = config.prNumber.value;
    } else {
      if (config.prNumber?.field && result) {
        prNumber = result[config.prNumber?.field];
      }
    }

    let repo;
    if (config.repo?.type === "static") {
      repo = config.repo.value;
    } else {
      if (config.repo?.field && result) {
        repo = result[config.repo.field];
      }
    }

    let comment;
    if (config.comment?.type === "static") {
      comment = config.comment.value;
    } else {
      if (config.comment?.field && result) {
        comment = result[config.comment.field];
      }
    }

    let edges = await prisma.workflowEdge.findMany({
      where: {
        sourceNodeId: node
      }
    })

    switch (operation) {

      case "get_pr_details":

        if (payload.prevNodeOperation !== "get_pr_details") {
          console.error(operation, " is only supported after ", payload.prevNodeOperation);
          return
        }

        if (!prNumber) {
          throw new Error(`No Pr Number ${config.prNumber}`)
        }

        if (!repo) {
          throw new Error(`No repo provided ${config.repo}`);
        }

        const prDetails = await getPRDetails(repo, Number(prNumber), accessToken);

        edges.forEach(edge => {
          nodeQueue.add("node", {
            workflowId,
            node: edge.targetNodeId,
            prevNode: node,
            prevNodeOperation: operation,
            result: {
              ...result,
              prDetails
            },
            integration: "github",
            operation: operation,
            accessToken,
            config
          });
        });
        break;
      case "add_comment_to_pr":

        if (!repo) {
          throw new Error(`No repo provided ${config.repo}`);
        }

        if (!comment) {
          throw new Error(`No repo provided ${config.comment}`);
        }

        await addCommentToPR(repo, Number(prNumber), comment, accessToken)

        edges.map(edge => {
          const payload: NodeQueuePayload = {
            accessToken,
            workflowId,
            prevNode: node,
            prevNodeOperation: operation,
            node: edge.targetNodeId,
            result: {
              ...result
            },
            integration: "github",
            operation,
            config
          }
          nodeQueue.add("node", payload);
        })
        break;
      case "merge_pr":

        await mergePR(repo, Number(result?.prNumber!), accessToken)

        edges.map(edge => {
          const payload: NodeQueuePayload = {
            accessToken,
            workflowId,
            prevNode: node,
            prevNodeOperation: operation,
            node: edge.targetNodeId,
            result: {
              ...result
            },
            integration: "github",
            config,
            operation
          }
          nodeQueue.add("node", payload);
        })

        break;
      case "create_issue":

        const title = config.issueTitle!;
        const body = config.issueBody!;

        await createIssue(repo, title, body, accessToken)

        edges.map(edge => {
          const payload: NodeQueuePayload = {
            accessToken,
            workflowId,
            prevNode: node,
            prevNodeOperation: operation,
            node: edge.targetNodeId,
            config,
            result: {
              ...result
            },
            integration: "github",
            operation
          }
          nodeQueue.add("node", payload);
        })

        break;
      case "list_user_repo":

        await listUserRepos(accessToken);

        edges.map(edge => {
          const payload: NodeQueuePayload = {
            accessToken,
            workflowId,
            prevNode: node,
            prevNodeOperation: operation,
            node: edge.targetNodeId,
            config,
            result: {
              ...result
            },
            integration: "github",
            operation
          }
          nodeQueue.add("node", payload);
        })

        break;
      default:
        return


    }
  } catch (error) {
    console.log(error)
  }

}
