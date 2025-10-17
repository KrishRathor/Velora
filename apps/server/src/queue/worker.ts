import { Worker, Job } from "bullmq";
import { nodeQueue, type NodeJob } from ".";
import { prisma } from "../db/db";
import { WorkflowNodeConfigSchema } from "../types/workflow.type";

export const nodeWorker = new Worker(
  "nodeQueue",
  async (job: Job) => {

    console.log("inside job worker => ", job.data);

    const { workflowExecutionId, nodeId, payload, retries } = job.data;

    const node = await prisma.workflowNode.findUnique({
      where: { id: nodeId },
      include: { workflow: true }
    });

    if (!node) throw new Error("Node not found");

    try {

      const result = await executeNode(node, payload);

      const edges = await prisma.workflowEdge.findMany({
        where: { sourceNodeId: nodeId }
      });

      console.log("edges: ", edges);

      for (const edge of edges) {
        if (edge.label === "onSuccess") {
          await nodeQueue.add("node", {
            workflowExecutionId,
            nodeId: edge.targetNodeId,
            payload: result,
            retries: 0
          });
        }
      }

    } catch (error) {
      console.error("Node execution failed:", error);
    }

  }
)

const executeNode = async (node: any, payload: any) => {

  console.log("inside exec node")

  const parsedConfig = WorkflowNodeConfigSchema.safeParse(node.config);

  if (parsedConfig.error) {
    console.log(parsedConfig.error);
    return
  }

  const { integration, operation } = parsedConfig.data;

  if (integration === "github") {
    switch (operation) {
      case "create_pr_trigger":

      case "create_issue_trigger":
      case "get_pr_details":
      case "add_comment_to_pr":
      case "merge_pr":
      case "create_issue":
      case "list_user_repo":
    }
  }

}
