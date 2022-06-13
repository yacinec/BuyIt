import { Request, Response, NextFunction } from "express";

import { ApiError } from "../../../errors";
import { OrderService } from "../services";
import { toOrderDto } from "../../../mappers";

/**
 * Retrieves the order corresponding to the specified id.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const findOne = async (req: Request, res: Response, next: NextFunction) => {
  const data = await OrderService.findOne(req.params.id);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
};

/**
 * Updates the order corresponding to the specified id with the request data.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const update = async (req: Request, res: Response, next: NextFunction) => {
  const orderDto = toOrderDto(
    req.params.id,
    req.body.articlesRef,
    req.body.createdAt,
    req.body.modifiedAt,
    req.body.progression,
    req.body.address,
    req.body.userRef
  );
  const data = await OrderService.update(orderDto);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
};

/**
 * Deletes the order corresponding to the specified id.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const remove = async (req: Request, res: Response, next: NextFunction) => {
  const data = await OrderService.remove(req.params.id);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
};

export default { findOne, update, remove };
