import { Router, type Request, type Response } from "express";
import { HttpStatus } from "../types";
import { SolanaTriggerSetSchema } from "../types/solana.type";
import fetch from "node-fetch";
import { config } from "dotenv";
import { prisma } from "../db/db";
import { WorkflowNodeConfigSchema, type IWorkflowNodeConfig, type NodeQueuePayload } from "../types/workflow.type";
import { nodeQueue } from "../queue";
import { requireAuth } from "@clerk/express";

config();

const APIKEY = process.env.HELIUS_API_KEY
const BACKEND_URL = process.env.BACKEND_URL

export const solanaTriggerRouter = Router();

solanaTriggerRouter.post("/set/:nodeId", requireAuth() ,async (req: Request, res: Response) => {
  try {
    console.log(APIKEY);

    const { nodeId } = req.params;

    if (typeof nodeId !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "invalid node id type",
        response: null
      })
      return
    }

    const parsedData = SolanaTriggerSetSchema.safeParse(req.body);

    if (parsedData.error) {
      console.log(parsedData.error);
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invlaid type",
        response: parsedData.error
      })
      return
    }

    const { transactionTypes, accountAddresses } = parsedData.data;

    const node = await prisma.workflowNode.findFirst({
      where: {
        id: nodeId
      }
    })

    if (!node) {
      console.log("node not found");
      res.status(HttpStatus.NOT_FOUND).json({
        message: "Node not found",
        response: null
      })
      return
    }

    const url = `https://api.helius.xyz/v0/webhooks?api-key=${APIKEY}`;
    const body = {
      webhookURL: `${BACKEND_URL}/api/v1/solana/trigger/get/${nodeId}`,
      transactionTypes: Array.isArray(transactionTypes)
        ? transactionTypes
        : [transactionTypes],
      accountAddresses: Array.isArray(accountAddresses)
        ? accountAddresses
        : [accountAddresses],
      webhookType: "enhancedDevnet",
      authHeader: "my-secret-token",
      encoding: "jsonParsed",
      txnStatus: "all",
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    res.status(HttpStatus.OK).json({
      message: "ok",
      response: data
    })

  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null,
    });
  }
});

solanaTriggerRouter.post("/get/:nodeId", async (req: Request, res: Response) => {
  try {

    console.log(req.body);

    const { nodeId } = req.params;

    if (typeof nodeId !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "invalid node id type",
        response: null
      })
      return
    }

    const type = req.body[0].type;

    switch (type) {
      case "TRANSFER":
        handleTransferTriggers(req.body[0], nodeId);
        break;
      default:
        console.log(type)
    }

  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null,
    });

  }
})

const handleTransferTriggers = async (payload: any, nodeId: string) => {

  try {

    const { nativeTransfers, tokenTransfers } = payload;

    const node = await prisma.workflowNode.findFirst({
      where: {
        id: nodeId
      }
    })

    if (!node) {
      return
    }

    const config = node.config;

    const parsedConfig = WorkflowNodeConfigSchema.safeParse(config);
    if (parsedConfig.error) {
      return;
    }

    if (nativeTransfers && nativeTransfers.length > 0) {
      nativeTransfers.forEach((transfer: any) => {
        console.log(`💰 SOL Transfer detected`);
        console.log(`From: ${transfer.fromUserAccount}`);
        console.log(`To:   ${transfer.toUserAccount}`);
        console.log(`Amount (in SOL): ${transfer.amount / 1e9}`);
      });

      const edges = await prisma.workflowEdge.findMany({
        where: {
          sourceNodeId: nodeId
        }
      })

      edges.map(edge => {
        const newPayload = {
          workflowId: node.workflowId,
          prevNode: node.id,
          prevNodeOperation: "sol_transfer_trigger",
          node: edge.targetNodeId,
          integration: "solana",
          accessToken: '',
          config: parsedConfig.data,
          result: {
            sol_transfer_from: nativeTransfers[0].fromUserAccount,
            sol_transfer_to: nativeTransfers[0].toUserAccount,
            sol_transfer_balance: nativeTransfers[0].balance,
          }
        }
        console.log("adding to queue from sol transfer trigger ", newPayload);
        nodeQueue.add("node", newPayload);
      })

    }

    if (tokenTransfers && tokenTransfers.length > 0) {
      tokenTransfers.forEach((transfer: any) => {
        console.log(`🪙 Token Transfer detected`);
        console.log(`Token: ${transfer.mint}`);
        console.log(`From: ${transfer.fromUserAccount}`);
        console.log(`To:   ${transfer.toUserAccount}`);
        console.log(`Amount: ${transfer.tokenAmount}`);
      });


      const edges = await prisma.workflowEdge.findMany({
        where: {
          sourceNodeId: nodeId
        }
      })

      edges.map(edge => {
        const newPayload = {
          workflowId: node.workflowId,
          prevNode: node.id,
          prevNodeOperation: "sol_transfer_trigger",
          node: edge.targetNodeId,
          integration: "solana",
          accessToken: '',
          config: parsedConfig.data,
          result: {
            token_transfer_from: nativeTransfers[0].fromUserAccount,
            token_transfer_to: nativeTransfers[0].toUserAccount,
            token_transfer_amount: nativeTransfers[0].tokenAmount,
          }
        }
        console.log("adding to queue from sol transfer trigger ", newPayload);
        nodeQueue.add("node", newPayload);
      })
    }

  } catch (error) {
    console.log(error);
  }

}
