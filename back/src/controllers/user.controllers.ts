import { UserEntity } from "../entities";
import { ApiError } from "../errors";
import { toUserDto } from "../mappers";
import { UserService } from "../services";

const create = async (username: string): Promise<ApiError | UserEntity> => {
  return await UserService.create(toUserDto(username));
};

const findAll = async (): Promise<ApiError | UserEntity[]> => {
  return await UserService.findAll();
};

const findOne = async (_id: string): Promise<ApiError | UserEntity> => {
  return await UserService.findOne(_id);
};

const update = async (
  _id: string,
  username: string
): Promise<ApiError | UserEntity> => {
  return await UserService.update(_id, toUserDto(username));
};

const remove = async (_id: string): Promise<ApiError | UserEntity> => {
  return await UserService.remove(_id);
};

export default { create, findAll, findOne, update, remove };
