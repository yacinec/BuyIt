import { Router } from "express";
import { OrderController } from "../controllers";
import { ApiError } from "../errors";
import {
  orderCreateMiddleware,
  idMiddleware,
  apiMiddleware,
} from "../middlewares";

const orderRouter = Router();
orderRouter.use(apiMiddleware);

orderRouter.post("/create", orderCreateMiddleware, async (req, res, next) => {
  const data = await OrderController.create(
    req.body.articles,
    req.body.address,
    req.body.userId
  );

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

orderRouter.get("/find-all", async (req, res, next) => {
  const data = await OrderController.findAll();

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

orderRouter.get("/find-one", idMiddleware, async (req, res, next) => {
  const data = await OrderController.findOne(req.body._id);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

orderRouter.patch("/update", idMiddleware, async (req, res, next) => {
  const data = await OrderController.update(
    req.body._id,
    req.body.articlesId,
    req.body.address,
    req.body.userId
  );

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

orderRouter.delete("/remove", idMiddleware, async (req, res, next) => {
  const data = await OrderController.remove(req.body._id);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

orderRouter.get("/find-all-user", idMiddleware, async (req, res, next) => {
  const data = await OrderController.findAllUser(req.body._id);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

export { orderRouter };
