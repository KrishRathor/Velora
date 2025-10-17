import { Queue } from "bullmq";
import IORedis from "ioredis";

export const connection = new IORedis({
  host: "127.0.0.1",
  port: 6379,
  password: process.env.REDIS_PASSWORD || undefined,
});

export const nodeQueue = new Queue("nodeQueue", { connection });

export interface NodeJob {
  workflowExecutionId: string;
  nodeId: string;
  payload: any;
  accessToken: string;
  retries?: number;
}

