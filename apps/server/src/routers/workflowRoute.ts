import { Router, type Response, type Request, response } from "express";
import { createWorkflowSchema } from "../types/workflow.type";
import { HttpStatus } from "../types";
import { prisma } from "../db/db";

export const workflowRouter = Router()

workflowRouter.post("/create", async (req: Request, res: Response) => {
  try {

    const parsedBody = createWorkflowSchema.safeParse(req.body);

    if (parsedBody.error) {
      console.log(parsedBody.error);
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
        userId: 'a9acd259-4b26-4a32-9d67-35138c462889'
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

workflowRouter.get("/:id", async (req: Request, res: Response) => {
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

workflowRouter.get("/user/:id", async (req: Request, res: Response) => {
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

workflowRouter.post("/delete/:id", async (req: Request, res: Response) => {
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


workflowRouter.get("/:workflowId/edges", async (req: Request, res: Response) => {
  try {
    const { workflowId } = req.params;

    if (typeof workflowId !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid workflowId type",
        response: null,
      });
      return;
    }

    const edges = await prisma.workflowEdge.findMany({
      where: {
        workflowId,
      },
    });

    res.status(HttpStatus.OK).json({
      message: "OK",
      response: edges,
    });
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null,
    });
  }
});


workflowRouter.get("/:workflowId/nodes", async (req: Request, res: Response) => {
  try {
    const { workflowId } = req.params;
    console.log(workflowId, typeof workflowId)

    if (typeof workflowId !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid workflowId type",
        response: null,
      });
      return;
    }

    const nodes = await prisma.workflowNode.findMany({
      where: {
        workflowId,
      }
    });

    res.status(HttpStatus.OK).json({
      message: "OK",
      response: nodes,
    });
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null,
    });
  }
});
