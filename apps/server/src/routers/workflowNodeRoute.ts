import { Router, type Response, type Request, response } from "express";
import { HttpStatus } from "../types";
import { createWorkflowNodeSchema } from "../types/workflow.type";
import { prisma } from "../db/db";
import { Param } from "@prisma/client/runtime/library";
import { workflowRouter } from "./workflowRoute";

export const workflowNodeRouter = Router();

workflowNodeRouter.post("/workflownode", async (req: Request, res: Response) => {
  try {

    const parsedBody = createWorkflowNodeSchema.safeParse(req.body);

    if (parsedBody.error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid body type",
        response: parsedBody.error
      })
      return;
    }

    const {
      workflowId,
      name,
      positionX,
      positionY,
      config,
      type
    } = parsedBody.data;

    if (!config) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Config is null",
        response: null
      })
      return;

    }

    const createNode = await prisma.workflowNode.create({
      data: {
        name,
        positionY,
        positionX,
        config,
        type,
        workflowId
      }
    })

    res.status(HttpStatus.CREATED).json({
      message: "Created Node",
      response: createNode.id
    })

  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null
    })
  }

})

workflowNodeRouter.get("/workflownode/:id", async (req: Request, res: Response) => {
  try {

    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "invalid body type",
        response: null,
      })
      return;
    }

    const node = await prisma.workflowNode.findFirst({
      where: {
        id
      }
    })

    res.status(HttpStatus.OK).json({
      message: "OK",
      response: node
    })

  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null
    })
  }
})

workflowRouter.post("/workflownode/delete/:id", async (req: Request, res: Response) => {
  try {

    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid body type",
        response: null,
      })
      return;
    }

    const delnode = await prisma.workflowNode.delete({
      where: {
        id
      }
    });

    res.status(HttpStatus.OK).json({
      message: "Ok",
      response: delnode.id
    })

  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null
    })
  }
})
