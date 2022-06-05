import { Request, Response, NextFunction } from "express";

import { ApiError } from "../errors";

export const userCreateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { username } = req.body;

  if (!username) {
    next(ApiError.badRequest("Wrong parameters."));
    return;
  }

  next();
};
