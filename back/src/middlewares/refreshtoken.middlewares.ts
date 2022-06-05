import { Request, Response, NextFunction } from "express";

import { REFRESH_TOKEN_INFO } from "../config";
import { ApiError } from "../errors";
import { verifyToken } from "../utils";

/**
 * Checks if the token passed is correct.
 */
export const refreshTokenMiddlewares = (
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

  try {
    const user = verifyToken(token, REFRESH_TOKEN_INFO);
    req.body = user;
    next();
  } catch (err) {
    next(ApiError.unauthorized("Token is expired."));
  }
};
