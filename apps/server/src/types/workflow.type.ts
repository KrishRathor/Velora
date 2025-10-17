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


const IntegrationsEnum = z.enum(["github", "gmail"]);
export const OperationsEnum = z.enum([
  "create_pr_trigger",
  "create_issue_trigger",
  "get_pr_details",
  "add_comment_to_pr",
  "merge_pr",
  "create_issue",
  "list_user_repo",
]);

export const WorkflowNodeConfigSchema = z.object({
  integration: IntegrationsEnum,
  operation: OperationsEnum,

  repo: z.string().optional(),
  prNumber: z.string().optional(),
  comment: z.string().optional(),
  issueTitle: z.string().optional(),
  issueBody: z.string().optional(),

  condition: z.string().optional(),
});

export enum Ops {
  "create_pr_trigger",
  "create_issue_trigger",
  "get_pr_details",
  "add_comment_to_pr",
  "merge_pr",
  "create_issue",
  "list_user_repo",
}
