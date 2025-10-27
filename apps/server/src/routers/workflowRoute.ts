import { Router, type Response, type Request, response } from "express";
import { createWorkflowSchema } from "../types/workflow.type";
import { HttpStatus } from "../types";
import { prisma } from "../db/db";
import { getAuth } from "@clerk/express";

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
    const userId = getAuth(req).userId;

    if (userId === null) {
      res.status(HttpStatus.UNAUTHORIZED).json({
        message: "user token not found",
        response: null
      })
      return
    }

    const createWorkflow = await prisma.workflow.create({
      data: {
        name,
        description,
        userId
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

workflowRouter.get("/workflow/:id", async (req: Request, res: Response) => {
  try {

    console.log("here in id");

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

workflowRouter.get("/user", async (req: Request, res: Response) => {
  try {


    const id = getAuth(req).userId;
    console.log(id);

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
    console.log(workflows);

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
