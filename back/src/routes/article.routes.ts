import { Router } from "express";
import { ArticleController } from "../controllers";
import { ApiError } from "../errors";
import {
  apiMiddleware,
  articleCreateMiddleware,
  idMiddleware,
} from "../middlewares";

const articleRouter = Router();
articleRouter.use(apiMiddleware);

articleRouter.post(
  "/create",
  articleCreateMiddleware,
  async (req, res, next) => {
    const data = await ArticleController.create(
      req.body.name,
      req.body.price,
      req.body.img,
      req.body.description,
      req.body.brand
    );

    if (data instanceof ApiError) {
      next(data);
      return;
    }

    res.json(data);
  }
);

articleRouter.get("/find-all", async (req, res, next) => {
  const data = await ArticleController.findAll();

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

articleRouter.get("/find-one", idMiddleware, async (req, res, next) => {
  const data = await ArticleController.findOne(req.body._id);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

articleRouter.patch("/update", idMiddleware, async (req, res, next) => {
  const data = await ArticleController.update(
    req.body._id,
    req.body.name,
    req.body.price,
    req.body.img,
    req.body.description,
    req.body.brand
  );

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

articleRouter.delete("/remove", idMiddleware, async (req, res, next) => {
  const data = await ArticleController.remove(req.body._id);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
});

export { articleRouter };
