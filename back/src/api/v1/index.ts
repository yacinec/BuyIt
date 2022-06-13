import { Router } from "express";

import {
  idMiddleware,
  articleAttExistMiddleware,
  orderAttExistMiddleware,
  adminMiddleware,
  userIdMiddleware,
  userIdAdminMiddleware,
} from "../../middlewares";
import {
  ArticleController,
  OrderController,
  UserController,
} from "./controllers";

// User routes.
const userRoutes = Router();
userRoutes.get("/", adminMiddleware, UserController.findAll);
userRoutes.get(
  "/:id",
  [idMiddleware, userIdMiddleware],
  UserController.findOne
);
userRoutes.put(
  "/:id",
  [idMiddleware, userIdAdminMiddleware],
  UserController.update
);
userRoutes.delete(
  "/:id",
  [idMiddleware, userIdAdminMiddleware],
  UserController.remove
);
userRoutes.post(
  "/:id/orders/",
  [idMiddleware, userIdMiddleware, orderAttExistMiddleware],
  UserController.createOrder
);
userRoutes.get(
  "/:id/orders/",
  userIdAdminMiddleware,
  UserController.findAllOrders
);

// Article routes.
const articleRoutes = Router();
articleRoutes.post(
  "/",
  [adminMiddleware, articleAttExistMiddleware],
  ArticleController.create
);
articleRoutes.get("/", ArticleController.findAll);
articleRoutes.get("/:id", idMiddleware, ArticleController.findOne);
articleRoutes.put(
  "/:id",
  [adminMiddleware, idMiddleware],
  ArticleController.update
);
articleRoutes.delete(
  "/:id",
  [adminMiddleware, idMiddleware],
  ArticleController.remove
);

// Order routes.
const orderRoutes = Router();
orderRoutes.get("/", adminMiddleware, OrderController.findAll);
orderRoutes.get(
  "/:id",
  [idMiddleware, userIdAdminMiddleware],
  OrderController.findOne
);
orderRoutes.put(
  "/:id",
  [idMiddleware, userIdAdminMiddleware],
  OrderController.update
);
orderRoutes.delete(
  "/:id",
  [idMiddleware, userIdAdminMiddleware],
  OrderController.remove
);

// Api routes.
const apiRoutes = Router();
apiRoutes.use("/users", userRoutes);
apiRoutes.use("/articles", articleRoutes);
apiRoutes.use("/orders", orderRoutes);

export default apiRoutes;
