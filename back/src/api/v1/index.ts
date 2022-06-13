import { Router } from "express";

import {
  idMiddleware,
  articleAttExistMiddleware,
  orderAttExistMiddleware,
} from "../../middlewares";
import {
  ArticleController,
  OrderController,
  UserController,
} from "./controllers";

// User routes.
const userRoutes = Router();
userRoutes.get("/", UserController.findAll);
userRoutes.get("/:id", idMiddleware, UserController.findOne);
userRoutes.put("/:id", idMiddleware, UserController.update);
userRoutes.delete("/:id", idMiddleware, UserController.remove);
userRoutes.get("/:id/orders/", UserController.findAllOrders);
userRoutes.post(
  "/:id/orders/",
  [idMiddleware, orderAttExistMiddleware],
  UserController.createOrder
);

// Article routes.
const articleRoutes = Router();
articleRoutes.post("/", articleAttExistMiddleware, ArticleController.create);
articleRoutes.get("/", ArticleController.findAll);
articleRoutes.get("/:id", idMiddleware, ArticleController.findOne);
articleRoutes.put("/:id", idMiddleware, ArticleController.update);
articleRoutes.delete("/:id", idMiddleware, ArticleController.remove);

// Order routes.
const orderRoutes = Router();
orderRoutes.get("/:id", idMiddleware, OrderController.findOne);
orderRoutes.put("/:id", idMiddleware, OrderController.update);
orderRoutes.delete("/:id", idMiddleware, OrderController.remove);

// Api routes.
const apiRoutes = Router();
apiRoutes.use("/users", userRoutes);
apiRoutes.use("/articles", articleRoutes);
apiRoutes.use("/orders", orderRoutes);

export default apiRoutes;
