import { NextFunction, Response, Request } from "express";

import { ApiError } from "../../../errors";
import { toOrderDto, toUserDto } from "../../../mappers";
import { UserService } from "../services";

/**
 * Retrieves all existing users.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const findAll = async (req: Request, res: Response, next: NextFunction) => {
  const data = await UserService.findAll();

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
};

/**
 * Retrieves the user corresponding to the specified id.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const findOne = async (req: Request, res: Response, next: NextFunction) => {
  const data = await UserService.findOne(req.params.id);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
};

/**
 * Updates the user corresponding to the specified id with the request data.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const update = async (req: Request, res: Response, next: NextFunction) => {
  const userDto = toUserDto(req.params.id, req.body.username);
  const data = await UserService.update(req.params.id, userDto);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
};

/**
 * Deletes the user corresponding to the specified id.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const remove = async (req: Request, res: Response, next: NextFunction) => {
  const data = await UserService.remove(req.params.id);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
};

/**
 * Appends a new order with request data.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  const orderDto = toOrderDto(
    "",
    req.body.articles,
    req.body.totalPrice,
    req.body.createdAt,
    req.body.modifiedAt,
    req.body.progression,
    req.body.address,
    { _id: req.params.id, username: "" }
  );
  const data = await UserService.createOrder(orderDto);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
};

/**
 * Retrieves all existing orders corresponding to the specified user id.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const findAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = await UserService.findAllOrders(req.params.id);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
};

export default { findAll, findOne, update, remove, createOrder, findAllOrders };
