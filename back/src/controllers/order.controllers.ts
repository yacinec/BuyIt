import { OrderEntity } from "../entities";
import { ApiError } from "../errors";
import { toArticleDto, toOrderDto, toUserDto } from "../mappers";
import { OrderService } from "../services";

const create = async (
  articlesId: [{ _id: string }],
  address: string,
  userId: string
): Promise<ApiError | OrderEntity> => {
  return await OrderService.create(
    toOrderDto(
      articlesId.map((article) => toArticleDto(article._id)),
      address,
      toUserDto(userId)
    )
  );
};

const findAll = async (): Promise<ApiError | OrderEntity[]> => {
  return await OrderService.findAll();
};

const findOne = async (_id: string): Promise<ApiError | OrderEntity> => {
  return await OrderService.findOne(_id);
};

const update = async (
  _id: string,
  articlesId: [{ _id: string }],
  address: string,
  userId: string
): Promise<ApiError | OrderEntity> => {
  return await OrderService.update(
    _id,
    toOrderDto(
      articlesId.map((article) => toArticleDto(article._id)),
      address,
      toUserDto(userId)
    )
  );
};

const remove = async (_id: string): Promise<ApiError | OrderEntity> => {
  return await OrderService.remove(_id);
};

const findAllUser = async (_id: string): Promise<ApiError | OrderEntity[]> => {
  return await OrderService.findAllUser(_id);
};

export default { create, findAll, findOne, update, remove, findAllUser };
