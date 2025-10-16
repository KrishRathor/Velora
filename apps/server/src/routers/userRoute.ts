import { Router, type Response, type Request } from "express";

export const userRouter = Router();

userRouter.post("/user", async (req: Request, res: Response) => {

  try {



  } catch (error) {
    console.log(error);
  }

})
