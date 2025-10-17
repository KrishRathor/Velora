import express, { Router } from "express";
import cors from "cors";
import { logger } from "./middlewares/logger";
import { userRouter } from "./routers/userRoute";
import { workflowRouter } from "./routers/workflowRoute";
import { workflowNodeRouter } from "./routers/workflowNodeRoute";
import { workflowEdgeRouter } from "./routers/workflowEdgeRouter";
import { integrationsConnectRouter } from "./routers/integrationsConnect";

const app = express();

app.use(cors());
app.use(logger);


const router = Router()

router.use("/users", userRouter);

router.use("/workflow", workflowRouter);
router.use("/workflow/edges", workflowEdgeRouter)
router.use("/workflow/node", workflowNodeRouter);

router.use("/integrations/connect", integrationsConnectRouter);

app.use("/api/v1", router);

app.listen(3000, () => {
  console.log(`Server listening on port 3000...`);
})

