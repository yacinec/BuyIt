import { Request, Response, NextFunction } from "express";

import { ApiError } from "../../../errors";
import { toArticleDto } from "../../../mappers";
import { ArticleService } from "../services";

/**
 * Appends a new article with request data.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const create = async (req: Request, res: Response, next: NextFunction) => {
  const articleDto = toArticleDto(
    req.params.id,
    req.body.name,
    req.body.price,
    req.body.img,
    req.body.description,
    req.body.brand
  );
  const data = await ArticleService.create(articleDto);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
};

/**
 * Retrieves all existing articles.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const findAll = async (req: Request, res: Response, next: NextFunction) => {
  const data = await ArticleService.findAll();

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
};

/**
 * Retrieves the article corresponding to the specified id.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const findOne = async (req: Request, res: Response, next: NextFunction) => {
  const data = await ArticleService.findOne(req.params.id);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
};

/**
 * Updates the article corresponding to the specified id with the request data.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const update = async (req: Request, res: Response, next: NextFunction) => {
  const articleDto = toArticleDto(
    req.params.id,
    req.body.name,
    req.body.price,
    req.body.img,
    req.body.description,
    req.body.brand
  );
  const data = await ArticleService.update(req.params.id, articleDto);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
};

/**
 * Deletes the article corresponding to the specified id.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const remove = async (req: Request, res: Response, next: NextFunction) => {
  const data = await ArticleService.remove(req.params.id);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
};

export default { create, findAll, findOne, update, remove };
