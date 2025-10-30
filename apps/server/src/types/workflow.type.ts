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

const IntegrationsEnum = z.enum(["github", "gmail", "solana"]);
export const OperationsEnum = z.enum([
  "create_pr_trigger",
  "create_issue_trigger",
  "get_pr_details",
  "add_comment_to_pr",
  "merge_pr",
  "create_issue",
  "list_user_repo",
  "sol_transfer_trigger",
  "sol_get_balance",
  "recieve_email",
  "recieve_email_from_specific_account",
  "send_mail"
]);

const ValueOrDynamicSchema = z.union([
  z.object({ type: z.literal("static"), value: z.any() }),
  z.object({
    type: z.literal("dynamic"), nodeId: z.string(), field: z.enum(["prNumber", "prId", "prUrl", "sol_transfer_from",
      "sol_transfer_to",
      "sol_transfer_balance",
      "token_transfer_from",
      "token_transfer_to",
      "token_transfer_amount"])
  }),
]);

export const WorkflowNodeConfigSchema = z.object({
  integration: IntegrationsEnum,
  operation: OperationsEnum,

  repo: ValueOrDynamicSchema.optional(),
  prNumber: ValueOrDynamicSchema.optional(),
  comment: ValueOrDynamicSchema.optional(),
  issueTitle: ValueOrDynamicSchema.optional(),
  issueBody: ValueOrDynamicSchema.optional(),

  condition: ValueOrDynamicSchema.optional(),
  walletAddress: ValueOrDynamicSchema.optional(),
  mode: ValueOrDynamicSchema.optional(),

  fromEmail: ValueOrDynamicSchema.optional(),
  toEmail: ValueOrDynamicSchema.optional(),
  subject: ValueOrDynamicSchema.optional(),
  message: ValueOrDynamicSchema.optional(),
});

export enum Ops {
  "create_pr_trigger",
  "create_issue_trigger",
  "get_pr_details",
  "add_comment_to_pr",
  "merge_pr",
  "create_issue",
  "list_user_repo",
  "sol_transfer_trigger",
  "recieve_email",
  "recieve_email_from_specific_account",
  "send_mail"
}

export type ValueOrDynamic<T = any> =
  | { type: "static"; value: T }
  | { type: "dynamic"; nodeId: string; field: keyof NodeQueuePayload["result"] };


export interface IWorkflowNodeConfig {
  integration: "github" | "gmail" | "solana";
  operation:
  | "create_pr_trigger"
  | "create_issue_trigger"
  | "get_pr_details"
  | "add_comment_to_pr"
  | "merge_pr"
  | "create_issue"
  | "list_user_repo"
  | "sol_transfer_trigger"
  | "sol_get_balance"
  | "recieve_email"
  | "recieve_email_from_specific_account"
  | "send_mail";
  repo?: ValueOrDynamic<string>;
  prNumber?: ValueOrDynamic<string>;
  comment?: ValueOrDynamic<string>;
  issueTitle?: ValueOrDynamic<string>;
  issueBody?: ValueOrDynamic<string>;
  condition?: ValueOrDynamic<string>;
  walletAddress?: ValueOrDynamic<string>;
  mode?: ValueOrDynamic<"devnet" | "mainnet">;
  fromEmail?: ValueOrDynamic<string>;
  toEmail?: ValueOrDynamic<string>;
  subject: ValueOrDynamic<string>;
  message: ValueOrDynamic<string>
}

export interface GetPRDetailsResult {
  prNumber: number;
  title: string;
  url: string;
  id: number;
}

export interface AddCommentResult {
  prNumber: number;
  title: string;
}

export interface MergePRResult {
  prNumber: number;
}

export interface CreateIssueResult {
  issueId: number;
  url: string;
}

export interface ListUserRepoResult {
  repos: { name: string; full_name: string; url: string }[];
}

export type GithubResultMap = {
  [Ops.get_pr_details]: GetPRDetailsResult;
  [Ops.add_comment_to_pr]: AddCommentResult;
  [Ops.merge_pr]: MergePRResult;
  [Ops.create_issue]: CreateIssueResult;
  [Ops.list_user_repo]: ListUserRepoResult;
  [Ops.create_pr_trigger]: { prNumber: number; prUrl: string; prId: number }; // from webhook
};

export interface NodeQueuePayload {
  workflowId: string;
  node: string;
  prevNode?: string;
  prevNodeOperation?: | "create_pr_trigger"
  | "create_issue_trigger"
  | "get_pr_details"
  | "add_comment_to_pr"
  | "merge_pr"
  | "create_issue"
  | "list_user_repo"
  | "sol_transfer_trigger"
  | "sol_get_balance"
  | "recieve_email"
  | "recieve_email_from_specific_account"
  | "send_mail";
  integration: "github" | "gmail" | "solana";
  operation: | "create_pr_trigger"
  | "create_issue_trigger"
  | "get_pr_details"
  | "add_comment_to_pr"
  | "merge_pr"
  | "create_issue"
  | "list_user_repo"
  | "sol_transfer_trigger"
  | "sol_get_balance"
  | "recieve_email"
  | "recieve_email_from_specific_account"
  | "send_mail";
  accessToken: string;
  refreshToken?: string;
  config: IWorkflowNodeConfig;
  result?: {
    prNumber?: number,
    prId?: string | number,
    prUrl?: string,
    sol_transfer_from?: string,
    sol_transfer_to?: string,
    sol_transfer_balance?: number,
    token_transfer_from?: string,
    token_transfer_to?: string,
    token_transfer_amount?: number,
    current_sol_balance?: number,
    email_from?: string,
    email_subject?: string,
    email_body?: string
  };
}
