import { Router, type Response, type Request } from "express";
import { HttpStatus } from "../types";
import { createIssueTrigger, createPRTrigger } from "../integrations/github";
import {
  createGmailWatch,
  createPubSubSubscription,
} from "../integrations/gmail";
import { prisma } from "../db/db";
import {
  Ops,
  WorkflowNodeConfigSchema,
  type NodeQueuePayload,
} from "../types/workflow.type";
import { nodeQueue } from "../queue";
import { getAuth, requireAuth } from "@clerk/express";
import { config } from "dotenv";
import { google } from "googleapis";

config();

const BACKEND_URL = process.env.BACKEND_URL;
const clientId = process.env.GOOGLE_CLIENT_ID!;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET!;

const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  `http://localhost:3000/api/v1/integrations/connect/google/callback`
);


export const triggerRouter = Router();

triggerRouter.post("/set/:id", requireAuth() ,async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid body type",
        response: null,
      });
      return;
    }

    const node = await prisma.workflowNode.findFirst({
      where: {
        id,
      },
    });

    if (!node) {
      res.status(HttpStatus.NOT_FOUND).json({
        message: "Node Not Found",
        response: null,
      });
      return;
    }

    const config = node.config;

    const parsedConfig = WorkflowNodeConfigSchema.safeParse(config);

    if (parsedConfig.error) {
      console.log(parsedConfig.error);
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid body",
        response: config,
      });
      return;
    }

    const { operation, repo, integration } = parsedConfig.data;

    switch (integration) {
      case "github":
        const reponame = repo?.type === "static" && repo.value;
        if (!reponame) {
          res.status(HttpStatus.BAD_REQUEST).json({
            message: `${integration} not supported`,
            response: null,
          });
          return;
        }
        //@ts-ignore
        await handleGithubTriggers(req, res, reponame, operation, node.id);
        break;
      case "gmail":
        //@ts-ignore
        await handleGmailTriggers(req, res, operation, node.id);
        break;
      default:
        res.status(HttpStatus.BAD_REQUEST).json({
          message: `${integration} not supported`,
          response: null,
        });
    }
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null,
    });
  }
});

const handleGithubTriggers = async (
  req: Request,
  res: Response,
  repo: string,
  operation: Ops,
  nodeId: string
) => {
  const { userId } = getAuth(req);

  if (!userId) {
    res.status(HttpStatus.UNAUTHORIZED).json({
      message: "UNAUTHORIZED",
      response: null,
    });
    return;
  }

  const integration = await prisma.integrationConnection.findFirst({
    where: {
      userId,
      provider: "github",
    },
  });

  if (!integration) {
    res.status(HttpStatus.UNAUTHORIZED).json({
      message: "UNAUTHORIZED",
      response: null,
    });
    return;
  }
  switch (operation) {
    // @ts-ignore
    case "create_pr_trigger":
      await createPRTrigger(
        repo,
        `${BACKEND_URL}/api/v1/trigger/get/github/${nodeId}`,
        integration.accessToken
      );
      res.status(HttpStatus.OK);
      break;
    // @ts-ignore
    case "create_issue_trigger":
      await createIssueTrigger(
        repo,
        `${BACKEND_URL}/api/v1/trigger/get/github/${nodeId}`,
        integration.accessToken
      );
      res.status(HttpStatus.OK);
      break;
    default:
      res.status(HttpStatus.BAD_REQUEST).json({
        message: `${operation} not supported`,
        response: null,
      });
  }
};

triggerRouter.post("/get/github/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid body type",
        response: null,
      });
      return;
    }

    const node = await prisma.workflowNode.findFirst({
      where: {
        id,
      },
    });

    if (!node) {
      res.status(HttpStatus.NOT_FOUND).json({
        message: "Node Not Found",
        response: null,
      });
      return;
    }

    const workflowId = node.workflowId;
    const config = node.config;

    const workflow = await prisma.workflow.findFirst({
      where: {
        id: workflowId,
      },
      include: {
        user: true,
      },
    });

    const integration = await prisma.integrationConnection.findFirst({
      where: {
        userId: workflow?.user.id,
        provider: "github",
      },
    });

    if (!integration) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "integration not found",
        response: null,
      });
      return;
    }

    const parsedConfig = WorkflowNodeConfigSchema.safeParse(config);

    if (parsedConfig.error) {
      console.log(parsedConfig.error);
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid body",
        response: null,
      });
      return;
    }

    const execution = await prisma.workflowExecution.create({
      data: {
        workflowId,
        status: "PENDING",
        logs: [],
      },
    });

    const operation = parsedConfig.data.operation;
    const accessToken = integration.accessToken;

    let payload = {};

    switch (operation) {
      case "create_pr_trigger":
        if (req.body.action !== "opened") {
          res.status(HttpStatus.OK);
          return;
        }

        const edges = await prisma.workflowEdge.findMany({
          where: {
            sourceNodeId: node.id,
          },
        });

        if (!edges) {
          console.error("no edges found");
          res.status(HttpStatus.OK);
          return;
        }

        edges.map((edge) => {
          const prNumber = req.body.pull_request.number;
          const prUrl = req.body.pull_request.url;
          const prId = req.body.pull_request.id;

          const payload = {
            accessToken,
            workflowId,
            prevNode: node.id,
            prevNodeOperation: operation,
            node: edge.targetNodeId,
            result: {
              prNumber,
              prUrl,
              prId,
            },
          };
          if (id === "d5c99be2-a331-4a4b-aba1-674b186bba9d")
            console.log("adding to queue ", payload);
          nodeQueue.add("node", payload);
        });
        break;
      case "create_issue_trigger":
        payload = {
          accessToken,
          workflowId,
          prevNode: node.id,
        };
    }

    res.status(HttpStatus.OK).json({
      message: "created",
      response: execution.id,
    });
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null,
    });
  }
});

const handleGmailTriggers = async (
  req: Request,
  res: Response,
  operation: Ops,
  nodeId: string
) => {
  console.log("inside gmail triggers");
  const { userId } = getAuth(req);

  if (!userId) {
    res.status(HttpStatus.UNAUTHORIZED).json({
      message: "UNAUTHORIZED",
      response: null,
    });
    return;
  }

  const integration = await prisma.integrationConnection.findFirst({
    where: {
      userId,
      provider: "gmail",
    },
  });

  if (!integration) {
    res.status(HttpStatus.UNAUTHORIZED).json({
      message: "Gmail Integration UNAUTHORIZED",
      response: null,
    });
    return;
  }

  const webhookUrl = `${BACKEND_URL}/api/v1/trigger/get/gmail/${nodeId}`;

  try {
    await createPubSubSubscription(nodeId);
    await createGmailWatch(webhookUrl, integration.accessToken, operation);
    res.status(HttpStatus.OK).json({
      message: `Gmail trigger ${operation} set successfully.`,
      response: null,
    });
  } catch (error) {
    console.error("Error setting up Gmail watch:", error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "Failed to set up Gmail watch.",
      response: null,
    });
  }
};

triggerRouter.post("/get/gmail/:id", async (req: Request, res: Response) => {
  try {
    console.log("hi jkgjfkgf, ", req.body.message.data);
    let from = "";
    let subject = "";
    let body = "";

    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid node ID type",
        response: null,
      });
      return;
    }

    const messageData = JSON.parse(
      Buffer.from(req.body.message.data, "base64").toString("utf8")
    );
    const { emailAddress, historyId } = messageData;
    console.log(emailAddress, historyId);
    const shid = Number(historyId)-1;

    const node = await prisma.workflowNode.findFirst({
      where: {
        id,
      },
    });

    if (!node) {
      res.status(HttpStatus.NOT_FOUND).json({
        message: "Node Not Found",
        response: null,
      });
      return;
    }

    const workflowId = node.workflowId;
    const config = node.config;

    const workflow = await prisma.workflow.findFirst({
      where: { id: workflowId },
      include: { user: true },
    });
    const integration = await prisma.integrationConnection.findFirst({
      where: {
        userId: workflow?.user.id,
        provider: "gmail",
      },
    });
    const accessToken = integration?.accessToken;
    const refreshToken = integration?.refreshToken;

    if (!accessToken || !refreshToken) {
      res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: "Gmail integration token not found." });
      return;
    }


    const parsedConfig = WorkflowNodeConfigSchema.safeParse(config);

    if (parsedConfig.error) {
      console.log(parsedConfig.error);
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid node config",
        response: null,
      });
      return;
    }

    const operation = parsedConfig.data.operation;
    let requiredFromEmail = "";
    if (parsedConfig.data.fromEmail?.type === "static") {
      requiredFromEmail = parsedConfig.data.fromEmail.value;
    }

    let shouldTrigger = false;

    switch (operation) {
      case "recieve_email":
        // Trigger for any new email
        shouldTrigger = true;
        break;

      case "recieve_email_from_specific_account":
        // Trigger only if 'from' email matches a configured value
        if (
          requiredFromEmail &&
          from.toLowerCase() === requiredFromEmail.toLowerCase()
        ) {
          shouldTrigger = true;
        }
        break;

      default:
        // Operation is not a valid Gmail trigger for this endpoint
        console.warn(`Operation ${operation} not handled for Gmail webhook.`);
        res.status(HttpStatus.OK).end(); // Acknowledge and return
        return;
    }

    if (shouldTrigger) {
      const execution = await prisma.workflowExecution.create({
        data: {
          workflowId,
          status: "PENDING",
          logs: [],
        },
      });

      const edges = await prisma.workflowEdge.findMany({
        where: {
          sourceNodeId: node.id,
        },
      });

      if (edges.length === 0) {
        console.error("No edges found for workflow node", node.id);
        res.status(HttpStatus.OK).end();
        return;
      }

      // Get access token for downstream nodes (if needed, though it's better to pass it from the workflow's user integration)

      edges.map((edge) => {
        const payload = {
          accessToken, // Passed to subsequent nodes
          workflowId,
          prevNode: node.id,
          prevNodeOperation: operation,
          node: edge.targetNodeId,
          result: {
            email_from: from,
            email_body: body,
            email_subject: subject,
          },
        };
        nodeQueue.add("node", payload);
      });

      res.status(HttpStatus.OK).json({
        message: "Workflow triggered and queued",
        executionId: execution.id,
      });
    } else {
      res
        .status(HttpStatus.OK)
        .json({ message: "Condition not met, workflow not triggered" });
    }
  } catch (error) {
    console.log("Gmail Webhook Error:", error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR in Gmail Webhook",
      response: null,
    });
  }
});
