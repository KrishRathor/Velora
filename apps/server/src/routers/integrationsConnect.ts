import { Router, type Request, type Response } from "express";
import { HttpStatus } from "../types";
import { prisma } from "../db/db";
import { config } from "dotenv";
import { getAuth } from "@clerk/express";

config();

export const integrationsConnectRouter = Router();

integrationsConnectRouter.get("/:id", async (req: Request, res: Response) => {
  try {

    const id = getAuth(req).userId;

    if (typeof id !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "invalid body type",
        response: null,
      })
      return;
    }

    const integrations = await prisma.integrationConnection.findMany({
      where: {
        userId: id
      }
    })

    res.status(HttpStatus.OK).json({
      message: "Ok",
      response: integrations.map(integration => {
        return {
          id: integration.id,
          accessToken: integration.accessToken,
          provider: integration.provider,
          scopes: integration.scopes
        }
      })
    })

  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null
    })
  }
})

integrationsConnectRouter.post("/connect/github", async (req: Request, res: Response) => {
  try {

    console.log("here");

    const clientId = process.env.GITHUB_CLIENT_ID;
    const redirectUri = process.env.GITHUB_REDIRECT_URL;

    console.log(clientId, redirectUri);

    const scopes = "repo,read:org,admin:repo_hook";

    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&allow_signup=true`;

    res.status(HttpStatus.OK).json({
      url: githubAuthUrl
    })

  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null
    })
  }
})

integrationsConnectRouter.get("/connect/github/callback", async (req: Request, res: Response) => {
  try {

    const code = req.query.code as string;

    if (!code) {
      res.status(HttpStatus.BAD_REQUEST).send("Missing code");
      return
    }

    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new URLSearchParams({
        client_id: process.env.GITHUB_CLIENT_ID!,
        client_secret: process.env.GITHUB_CLIENT_SECRET!,
        code,
        redirect_uri: process.env.GITHUB_REDIRECT_URL!,
      }),
    });

    const data = await tokenResponse.json();
    const accessToken = data.access_token;
    const tokenType = data.token_type;
    const scopes = data.scope;

    //     const userId = req.body.userId;

    const { userId } = getAuth(req);

    if (typeof userId !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "userid not found",
        response: null
      })
      return
    }

    const existingIntegration = await prisma.integrationConnection.findFirst({
      where: {
        userId,
        provider: "github"
      }
    })

    if (existingIntegration) {
      const update = await prisma.integrationConnection.update({
        where: {
          id: existingIntegration.id
        },
        data: {
          accessToken,
          scopes,
          tokenType,
          updatedAt: new Date()
        }
      })
      res.status(HttpStatus.OK).json({
        message: "Tokens updated",
        response: update.id
      })
      return
    }

    const create = await prisma.integrationConnection.create({
      data: {
        accessToken,
        scopes,
        tokenType,
        userId,
        provider: "github"
      }
    })

    res.status(HttpStatus.OK).json({
      message: "Created",
      response: create.id
    })


  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null
    })
  }
})

integrationsConnectRouter.post("/delete/:integrationId", async (req: Request, res: Response) => {
  try {
    const { integrationId } = req.params;

    if (typeof integrationId !== "string" || !integrationId.trim()) {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid integration ID",
        response: null,
      });
      return;
    }

    const integration = await prisma.integrationConnection.findUnique({
      where: { id: integrationId },
    });

    if (!integration) {
      res.status(HttpStatus.NOT_FOUND).json({
        message: "Integration not found",
        response: null,
      });
      return;
    }

    await prisma.integrationConnection.delete({
      where: { id: integrationId },
    });

    res.status(HttpStatus.OK).json({
      message: "Integration deleted successfully",
      response: integrationId,
    });
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null,
    });
  }
});
