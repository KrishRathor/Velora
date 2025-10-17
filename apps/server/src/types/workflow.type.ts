import z from "zod";

export const createWorkflowSchema = z.object({
  name: z.string(),
  description: z.string(),
})

const WorkflowNodeType = z.enum([
  "Trigger",
  "Action",
  "Condition",
  "Http",
]);

export const createWorkflowNodeSchema = z.object({
  workflowId: z.string(),
  type: WorkflowNodeType,
  name: z.string(),
  positionX: z.number(),
  positionY: z.number(),
  config: z.json()
})

export const createWorkflowEdgeSchema = z.object({
  workflowId: z.string(),
  sourceNodeId: z.string(),
  targetNodeId: z.string(),
  label: z.enum([
    "onSuccess",
    "onFaliure"
  ])

})
