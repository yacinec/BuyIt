import { Request, Response, NextFunction } from "express";

import { ApiError } from "../errors";

/**
 * Checks if the refresh token passed is correct.
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
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    next(ApiError.unauthorized("Token is expired."));
    return;
  }

  const token = authHeader.substring(7, authHeader.length);

  if (!token) {
    next(ApiError.unauthorized("Token is expired."));
    return;
  }

  req.body = token;
  next();
};
