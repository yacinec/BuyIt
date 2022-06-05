import { UserDto } from "../dtos";
import { UserEntity } from "../entities";
import { ApiError } from "../errors";
import { toUserEntity } from "../mappers";
import { UserModel } from "../models";

/**
 *
 * @param userDto
 * @returns
 */
const create = async (userDto: UserDto): Promise<ApiError | UserEntity> => {
  try {
    const user = await UserModel.create({
      username: userDto.get_username(),
    });

    return toUserEntity(user._id, user.username);
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 *
 * @returns
 */
const findAll = async (): Promise<ApiError | UserEntity[]> => {
  try {
    const users = await UserModel.find();

    return users.map((user) => toUserEntity(user._id, user.username));
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 *
 * @param _id
 * @returns
 */
const findOne = async (_id: string): Promise<ApiError | UserEntity> => {
  try {
    const user = await UserModel.findById(_id);

    if (!user) {
      return ApiError.notFound("User does not exist.");
    }

    return toUserEntity(user._id, user.username);
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 *
 * @param _id
 * @param userDto
 * @returns
 */
const update = async (
  _id: string,
  userDto: UserDto
): Promise<ApiError | UserEntity> => {
  try {
    const user = await UserModel.findById(_id);

    if (!user) {
      return ApiError.notFound("User does not exist.");
    }

    const userEntity = toUserEntity(user._id, userDto.get_username());

    await user.update({ _id: _id }, userEntity);

    return userEntity;
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 *
 * @param _id
 * @returns
 */
const remove = async (_id: string): Promise<ApiError | UserEntity> => {
  try {
    const user = await UserModel.findById(_id);

    if (!user) {
      return ApiError.notFound("User does not exist.");
    }

    await user.remove();

    return toUserEntity(user._id, user.username);
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

export default { create, findAll, findOne, update, remove };
