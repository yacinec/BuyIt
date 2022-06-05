import { Router, Request, Response, NextFunction } from "express";

import { ApiError } from "../errors";
import { AuthController } from "../controllers";
import { connectMiddlewares, refreshTokenMiddlewares } from "../middlewares";

const authRouter = Router();

authRouter.post(
  "/sign-up",
  connectMiddlewares,
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await AuthController.signUp(
      req.body.username,
      req.body.password
    );

    if (data instanceof ApiError) {
      next(data);
      return;
    }

    res.send(data);
  }
);

authRouter.post("/sign-in", connectMiddlewares, async (req, res, next) => {
  const data = await AuthController.signIn(
    req.body.username,
    req.body.password
  );

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

authRouter.post("/refresh-token", refreshTokenMiddlewares, (req, res, next) => {
  const data = AuthController.refreshToken(req.body._id, req.body.username);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

export { authRouter };
