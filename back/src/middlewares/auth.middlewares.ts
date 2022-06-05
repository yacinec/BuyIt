import { Request, Response, NextFunction } from "express";

import { ACCESS_TOKEN_INFO } from "../config";
import { ApiError } from "../errors";
import { verifyToken } from "../utils";

/**
 * Authenficates the user with a given token.
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
    const user = verifyToken(token, ACCESS_TOKEN_INFO);
    req.body.user = user;
    req.body.tokenData = token;
    next();
  } catch (err) {
    next(ApiError.unauthorized("Token is expired."));
  }
};
