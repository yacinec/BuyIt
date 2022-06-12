import { Request, Response, NextFunction } from "express";

import { ApiError } from "../errors";

/**
 * Checks the article attribute existence in the request.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 * @returns {void}
 */
export const articleAttExistMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { name, price, img, description, brand } = req.body;

  if (!name || !price || !img || !description || !brand) {
    next(ApiError.badRequest("Wrong parameters."));
    return;
  }

  next();
};
