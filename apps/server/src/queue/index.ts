import { Queue, Worker, Job } from "bullmq";
import IORedis from "ioredis";
import { proccessJob } from "./worker";

export const connection = new IORedis({
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: null
});

export const nodeQueue = new Queue("nodeQueue", { connection });

export interface NodeJob {
  workflowExecutionId: string;
  nodeId: string;
  payload: any;
  accessToken: string;
  retries?: number;
}

export const nodeWorker = new Worker(
  "nodeQueue",
  async (job: Job) => {
    proccessJob(job);
  },
  {
    connection
  }
)

nodeWorker.on("ready", () => {
  console.log("ready")
})


nodeWorker.on("failed", () => {
  console.log("failed")
})
