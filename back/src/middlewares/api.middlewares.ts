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
export const apiMiddleware = (
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

    if (!user) {
      next(ApiError.unauthorized("Token is expired."));
    }

    next();
  } catch (err) {
    next(ApiError.internal("Internal Server Error."));
  }
};

export const idMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { _id } = req.body;

  if (!_id) {
    next(ApiError.badRequest("Object id is missing."));
    return;
  }

  next();
};
