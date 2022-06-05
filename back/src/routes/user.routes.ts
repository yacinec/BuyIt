import { Router } from "express";
import { UserController } from "../controllers";
import { ApiError } from "../errors";
import {
  userCreateMiddleware,
  idMiddleware,
  apiMiddleware,
} from "../middlewares";

const userRouter = Router();
userRouter.use(apiMiddleware);

userRouter.post("/create", userCreateMiddleware, async (req, res, next) => {
  const data = await UserController.create(req.body.username);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

userRouter.get("/find-all", async (req, res, next) => {
  const data = await UserController.findAll();

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

userRouter.get("/find-one", idMiddleware, async (req, res, next) => {
  const data = await UserController.findOne(req.body._id);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

userRouter.patch("/update", idMiddleware, async (req, res, next) => {
  const data = await UserController.update(req.body._id, req.body.username);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

userRouter.delete("/remove", idMiddleware, async (req, res, next) => {
  const data = await UserController.remove(req.body._id);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

export { userRouter };
