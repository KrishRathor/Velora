import morgan from "morgan";
import { type RequestHandler } from "express";

export const logger: RequestHandler = morgan("dev");

