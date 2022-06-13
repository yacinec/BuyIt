import { Request, Response, NextFunction } from "express";

import { ACCESS_TOKEN_PRIVATE_KEY } from "../config";
import { ApiError } from "../errors";
import { isAdmin, retrieveRequestToken, verifyToken } from "../utils";

/**
 * Checks if the user is an admin.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 * @returns {Promise<void>}
 */
export const adminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const accessToken = retrieveRequestToken(req);
    const userToken = verifyToken(accessToken, ACCESS_TOKEN_PRIVATE_KEY);

    if (!isAdmin(userToken._id)) {
      next(ApiError.unauthorized("Access not allowed."));
      return;
    }

    next();
  } catch (err) {
    next(ApiError.unauthorized("Internal server error."));
  }
};

/**
 * Checks if the requesting user corresponds to the request uri id.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 * @returns {Promise<void>}
 */
export const userIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  try {
    const accessToken = retrieveRequestToken(req);
    const userToken = verifyToken(accessToken, ACCESS_TOKEN_PRIVATE_KEY);

    if (id !== userToken._id) {
      next(ApiError.unauthorized("Access not allowed."));
      return;
    }

    next();
  } catch (err) {
    next(ApiError.unauthorized("Internal server error."));
  }
};

/**
 * Checks if the requesting user is an admin or corresponds
 * to the request uri id.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 * @returns {Promise<void>}
 */
export const userIdAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  try {
    const accessToken = retrieveRequestToken(req);
    const userToken = verifyToken(accessToken, ACCESS_TOKEN_PRIVATE_KEY);

    if (id !== userToken._id && !isAdmin(userToken._id)) {
      next(ApiError.unauthorized("Access not allowed."));
      return;
    }

    next();
  } catch (err) {
    next(ApiError.unauthorized("Internal server error."));
  }
};
