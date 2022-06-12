import { Request, Response, NextFunction } from "express";

import { ApiError } from "../errors";

/**
 * Checks the order attribute existence in the request.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 * @returns {void}
 */
export const orderAttExistMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { articlesRef, address, userRef } = req.body;

  if (!articlesRef || !address || !userRef) {
    next(ApiError.badRequest("Wrong parameters."));
    return;
  }

  next();
};
