import { Response, Request, NextFunction } from 'express';

import { ApiError } from '.';

/**
 * Sends HTTP error response.
 * @param err {ApiError}
 * @param req {Request}
 * @param res {Response}
 */
export const apiErrorHandling = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.code, err.message);

  if (err instanceof ApiError) {
    next();
    res.status(err.code).json(err.message);
  } else {
    next();
    res.status(500).json('Something went wrong.');
  }
};
