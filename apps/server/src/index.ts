import express, { Router } from "express";
import cors from "cors";
import { logger } from "./middlewares/logger";
import { userRouter } from "./routers/userRoute";
import { workflowRouter } from "./routers/workflowRoute";
import { workflowNodeRouter } from "./routers/workflowNodeRoute";

const app = express();

app.use(cors());
app.use(logger);


const router = Router()

router.use("/users", userRouter);
router.use("/workflow", workflowRouter);
router.use("/workflow/node", workflowNodeRouter);

app.use("/api/v1", router);

app.listen(3000, () => {
  console.log(`Server listening on port 3000...`);
})

