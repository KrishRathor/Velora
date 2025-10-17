import { Router, type Response, type Request } from "express";
import { HttpStatus } from "../types";
import { createPRTrigger } from "../integrations/github";
import { prisma } from "../db/db";
import { Ops, WorkflowNodeConfigSchema, } from "../types/workflow.type";
import { nodeQueue } from "../queue";

export const triggerRouter = Router();

triggerRouter.post("/set/:id", async (req: Request, res: Response) => {
  try {

    const { id } = req.params;

    console.log("inside set fxn", id);

    if (typeof id !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid body type",
        response: null,
      })
      return;
    }

    const node = await prisma.workflowNode.findFirst({
      where: {
        id
      }
    })

    if (!node) {
      res.status(HttpStatus.NOT_FOUND).json({
        message: "Node Not Found",
        response: null
      })
      return
    }

    const config = node.config;

    const parsedConfig = WorkflowNodeConfigSchema.safeParse(config);

    if (parsedConfig.error) {
      console.log(parsedConfig.error);
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid body",
        response: null
      })
      return;
    }

    const {
      operation,
      repo,
      integration
    } = parsedConfig.data;

    if (!repo) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: `${integration} not supported`,
        response: null
      })
      return
    }

    switch (integration) {
      case "github":
        //@ts-ignore
        await handleGithubTriggers(res, repo, operation, node.id);
        break
      case "gmail":
      default:
        res.status(HttpStatus.BAD_REQUEST).json({
          message: `${integration} not supported`,
          response: null
        })
    }

  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null
    })
  }
})

const handleGithubTriggers = async (res: Response, repo: string, operation: Ops, nodeId: string) => {

  switch (operation) {
    // @ts-ignore
    case "create_pr_trigger":

      console.log("creating pr trigger on repo", repo);

      const userId = "a9acd259-4b26-4a32-9d67-35138c462889";

      const integration = await prisma.integrationConnection.findFirst({
        where: {
          userId,
          provider: "github"
        }
      })

      if (!integration) {
        res.status(HttpStatus.UNAUTHORIZED).json({
          message: "UNAUTHORIZED",
          response: null
        })
        return
      }

      const a = await createPRTrigger(repo, `https://603fded0779c.ngrok-free.app/api/v1/trigger/get/github/${nodeId}`, integration.accessToken);
      res.status(HttpStatus.OK).json({
        a
      })
      break;
    case Ops.create_issue_trigger:
    case Ops.get_pr_details:
    case Ops.add_comment_to_pr:
    case Ops.merge_pr:
    case Ops.create_issue:
    case Ops.list_user_repo:
    default:
      res.status(HttpStatus.BAD_REQUEST).json({
        message: `${operation} not supported`,
        response: null
      })
  }

}

triggerRouter.post("/get/github/:id", async (req: Request, res: Response) => {
  try {

    console.log("got webhook")

    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid body type",
        response: null,
      })
      return;
    }

    const node = await prisma.workflowNode.findFirst({
      where: {
        id
      }
    })

    if (!node) {
      res.status(HttpStatus.NOT_FOUND).json({
        message: "Node Not Found",
        response: null
      })
      return
    }

    const workflowId = node.workflowId;
    const config = node.config;

    const workflow = await prisma.workflow.findFirst({
      where: {
        id: workflowId
      },
      include: {
        user: true
      }
    });

    const integration = await prisma.integrationConnection.findFirst({
      where: {
        userId: workflow?.user.id,
        provider: "github"
      }
    })

    if (!integration) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "integration not found",
        response: null
      })
      return;
    }

    const parsedConfig = WorkflowNodeConfigSchema.safeParse(config);

    if (parsedConfig.error) {
      console.log(parsedConfig.error);
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid body",
        response: null
      })
      return;
    }

    console.log(req.body);

    const execution = await prisma.workflowExecution.create({
      data: {
        workflowId,
        status: "PENDING",
        logs: []
      }
    })

    nodeQueue.add("node", {
      workflowId: execution.id,
      nodeId: node.id,
      payload: req.body,
      accessToken: integration.accessToken,
      retries: 0
    })

    res.status(HttpStatus.OK).json({
      message: "created",
      response: execution.id
    })

  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null
    })
  }
})


