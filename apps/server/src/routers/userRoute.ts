import { Router, type Response, type Request } from "express";
import { HttpStatus } from "../types";
import { getAuth, requireAuth } from "@clerk/express";
import { prisma } from "../db/db";

export const userRouter = Router();

userRouter.post("/user/create", async (req: Request, res: Response) => {

  try {



  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null,
    });
  }

})

userRouter.post("/addWallet/:wallet", requireAuth(), async (req: Request, res: Response) => {
  try {

    const { userId } = getAuth(req);
    const { wallet } = req.params;

    if (typeof wallet !== "string") {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: "Invalid wallet type",
        response: null,
      });
      return;
    }

    if (typeof userId !== "string") {
      res.status(HttpStatus.UNAUTHORIZED).json({
        message: "Unauthorised",
        response: null,
      });
      return;
    }

    const updateUser = await prisma.user.update({
      data: {
        walletAdress: wallet
      },
      where: {
        id: userId
      }
    })

    res.status(HttpStatus.OK).json({
      message: "OK",
      response: updateUser.id
    })

  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "INTERNAL_SERVER_ERROR",
      response: null,
    });
  }
})
