import { Request, Response, NextFunction } from "express";

import { ApiError } from "../errors";
import { retrieveRequestToken } from "../utils";

/**
 * Checks the username and password existence in the request.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 * @returns {void}
 */
export const authMiddleware = (
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

/**
 * Checks the refresh token existence in the request.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 * @returns {void}
 */
export const refreshTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!retrieveRequestToken(req)) {
    next(ApiError.badRequest("Bad request."));
    return;
  }

  next();
};
