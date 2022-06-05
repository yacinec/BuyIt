import { ArticleEntity } from "../entities";
import { ApiError } from "../errors";
import { toArticleDetailDto } from "../mappers";
import { ArticleService } from "../services";

const create = async (
  name: string,
  price: number,
  img: string,
  description: string,
  brand: string
): Promise<ApiError | ArticleEntity> => {
  return await ArticleService.create(
    toArticleDetailDto(name, price, img, description, brand)
  );
};

const findAll = async (): Promise<ApiError | ArticleEntity[]> => {
  return await ArticleService.findAll();
};

const findOne = async (_id: string): Promise<ApiError | ArticleEntity> => {
  return await ArticleService.findOne(_id);
};

const update = async (
  _id: string,
  name: string,
  price: number,
  img: string,
  description: string,
  brand: string
): Promise<ApiError | ArticleEntity> => {
  return await ArticleService.update(
    _id,
    toArticleDetailDto(name, price, img, description, brand)
  );
};

const remove = async (_id: string): Promise<ApiError | ArticleEntity> => {
  return await ArticleService.remove(_id);
};

export default { create, findAll, findOne, update, remove };
