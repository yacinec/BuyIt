import { Request, Response, NextFunction } from "express";

import { ApiError } from "../errors";

export const orderCreateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { articles, address, userId } = req.body;

  if (!articles || !address || !userId) {
    next(ApiError.badRequest("Wrong parameters."));
    return;
  }

  next();
};
