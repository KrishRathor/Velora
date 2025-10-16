import z from "zod";

export const createWorkflowSchema = z.object({
  name: z.string(),
  description: z.string(),
})

export const createWorkflowNodeSchema = z.object({
  workflowId: z.string(),
  type: z.string(),
  name: z.string(),
  positionX: z.number(),
  positionY: z.number(),
  config: z.json()
})
