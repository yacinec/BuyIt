import { Request, Response, NextFunction } from "express";

import { ACCESS_TOKEN_PRIVATE_KEY } from "../config";
import { ApiError } from "../errors";
import { retrieveRequestToken, verifyToken } from "../utils";

/**
 * Checks the user authentication with a given token.
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
  const accessToken = retrieveRequestToken(req);

  if (!accessToken) {
    next(ApiError.unauthorized("Token is expired."));
    return;
  }

  try {
    const user = verifyToken(accessToken, ACCESS_TOKEN_PRIVATE_KEY);

    if (!user) {
      next(ApiError.unauthorized("Token is expired."));
    }

    next();
  } catch (err) {
    next(ApiError.internal("Token is expired."));
  }
};

/**
 * Checks the object id existence in the request.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 * @returns {void}
 */
export const idMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { id } = req.params;

  if (!id) {
    next(ApiError.badRequest("Object id is missing."));
    return;
  }

  next();
};
