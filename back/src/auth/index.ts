import { Router } from "express";

import AuthController from "./controller.auth";
import { authMiddleware, refreshTokenMiddleware } from "../middlewares";

const authRouter = Router();

authRouter.post("/signup", authMiddleware, AuthController.signUp);

authRouter.post("/signin", authMiddleware, AuthController.signIn);

authRouter.post("/token", refreshTokenMiddleware, AuthController.refreshToken);

export default authRouter;
