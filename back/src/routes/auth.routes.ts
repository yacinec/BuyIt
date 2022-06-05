import { Router, Request, Response, NextFunction } from "express";

import { ApiError } from "../errors";
import { AuthController } from "../controllers";
import { authMiddleware, refreshTokenMiddleware } from "../middlewares";

const authRouter = Router();

authRouter.post(
  "/sign-up",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await AuthController.signUp(
      req.body.username.toLowerCase(),
      req.body.password
    );

    if (data instanceof ApiError) {
      next(data);
      return;
    }

    res.send(data);
  }
);

authRouter.post("/sign-in", authMiddleware, async (req, res, next) => {
  const data = await AuthController.signIn(
    req.body.username.toLowerCase(),
    req.body.password
  );

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

authRouter.post("/refresh-token", refreshTokenMiddleware, (req, res, next) => {
  const data = AuthController.refreshToken(req.body.token);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

export { authRouter };
