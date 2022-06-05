import { Request, Response, NextFunction } from "express";

import { ApiError } from "../errors";

export const orderCreateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { articlesId, address, userId } = req.body;

  if (!articlesId || !address || !userId) {
    next(ApiError.badRequest("Wrong parameters."));
    return;
  }

  next();
};
