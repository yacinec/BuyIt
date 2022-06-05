import { Request, Response, NextFunction } from "express";

import { ApiError } from "../errors";

/**
 * Checks if the username and password passed are correct.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 * @returns {void}
 */
export const connectMiddlewares = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { username, password } = req.body;

  if (!username || !password) {
    next(ApiError.badRequest("Username or password is empty."));
    return;
  }

  next();
};
