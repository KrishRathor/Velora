import { Router, type Response, type Request, response } from "express";
import { createWorkflowSchema } from "../types/workflow.type";
import { HttpStatus } from "../types";
import { prisma } from "../db/db";

export const workflowRouter = Router()

workflowRouter.post("workflow", async (req: Request, res: Response) => {
  try {

    const parsedBody = createWorkflowSchema.safeParse(req.body);

    if (parsedBody.error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "invalid body type",
        response: null,
      })
      return;
    }

    const { name, description } = parsedBody.data;

    const createWorkflow = await prisma.workflow.create({
      data: {
        name,
        description,
        userId: '1'
      }
    })

    res.status(HttpStatus.CREATED).json({
      message: "create workflow",
      response: createWorkflow.id
    })

  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null
    })
  }
})

workflowRouter.get("workflow/:id", async (req: Request, res: Response) => {
  try {

    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "invalid body type",
        response: null,
      })
      return;
    }

    const workflow = await prisma.workflow.findFirst({
      where: {
        id
      }
    })

    res.status(HttpStatus.OK).json({
      message: "OK",
      response: workflow
    })

  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null
    })
  }
})

workflowRouter.get("/workflow/user/:id", async (req: Request, res: Response) => {
  try {

    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "invalid body type",
        response: null,
      })
      return;
    }

    const workflows = await prisma.workflow.findMany({
      where: {
        userId: id
      }
    })

    res.status(HttpStatus.OK).json({
      message: "OK",
      response: workflows
    })


  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null
    })
  }
})

workflowRouter.post("deleteWorkflow/:id", async (req: Request, res: Response) => {
  try {

    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "invalid body type",
        response: null,
      })
      return;
    }

    const deleteWorkflow = await prisma.workflow.delete({
      where: {
        id
      }
    })

    res.status(HttpStatus.OK).json({
      message: "ok",
      response: deleteWorkflow.id
    })


  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null
    })
  }

})
