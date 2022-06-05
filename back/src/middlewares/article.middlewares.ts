import { Request, Response, NextFunction } from "express";

import { ApiError } from "../errors";

export const articleCreateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { name, price, img, description, brand } = req.body;

  if (!name || !price || !img || !description || !brand) {
    next(ApiError.badRequest("Wrong parameters."));
    return;
  }

  next();
};
