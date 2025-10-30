import express, { Router } from "express";
import cors from "cors";
import { logger } from "./middlewares/logger";
import { userRouter } from "./routers/userRoute";
import { workflowRouter } from "./routers/workflowRoute";
import { workflowNodeRouter } from "./routers/workflowNodeRoute";
import { workflowEdgeRouter } from "./routers/workflowEdgeRouter";
import { integrationsConnectRouter } from "./routers/integrationsConnect";
import { triggerRouter } from "./routers/triggersRouter";
import { clerkMiddleware, requireAuth } from '@clerk/express'
import { solanaTriggerRouter } from "./routers/solanaTriggerRouter";

const app = express();

app.use(cors());
app.use(logger);
app.use(express.json());
app.use(clerkMiddleware());

const router = Router()

app.use("/api/v1", router);

router.use("/users", userRouter);

router.use("/workflow", requireAuth() ,workflowRouter);
router.use("/workflow/edges", requireAuth(), workflowEdgeRouter)
router.use("/workflow/node", requireAuth(), workflowNodeRouter);

router.use("/integrations", requireAuth(), integrationsConnectRouter);
router.use("/trigger", triggerRouter);

router.use("/solana/trigger", solanaTriggerRouter);

app.listen(3000, () => {
  console.log(`Server listening on port 3000...`);
})

