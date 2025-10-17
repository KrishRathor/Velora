import { Router, type Response, type Request } from "express";
import { HttpStatus } from "../types";
import { createWorkflowEdgeSchema } from "../types/workflow.type";
import { prisma } from "../db/db";

export const workflowEdgeRouter = Router();

workflowEdgeRouter.post("/create", async (req: Request, res: Response) => {
  try {

    const parsedBody = createWorkflowEdgeSchema.safeParse(req.body);

    if (parsedBody.error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid body type",
        response: parsedBody.error
      })
      return;
    }

    const {
      sourceNodeId,
      targetNodeId,
      label,
      workflowId
    } = parsedBody.data;

    const createedge = await prisma.workflowEdge.create({
      data: {
        sourceNodeId,
        targetNodeId,
        label,
        workflowId
      }
    })

    res.status(HttpStatus.OK).json({
      message: "Ok",
      response: createedge.id
    })

  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null
    })
  }
})

workflowEdgeRouter.post("workflowedgeRouter/delete/:id", async (req: Request, res: Response) => {
  try {

    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid body type",
        response: null,
      })
      return;
    }

    const deledge = await prisma.workflowEdge.delete({
      where: {
        id
      }
    });

    res.status(HttpStatus.OK).json({
      message: "Ok",
      response: deledge.id
    })
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null
    })
  }
})
