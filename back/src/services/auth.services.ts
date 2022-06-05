import { AccessTokenEntity } from "./../entities/AccessTokenEntity";
import { UserModel } from "../models";
import { ApiError } from "../errors";
import { ConnectUserDto, UserDto } from "../dtos";
import { UserEntity, SignInUserEntity } from "../entities";
import { ACCESS_TOKEN_INFO, REFRESH_TOKEN_INFO } from "../config";
import {
  hashPassword,
  passwordIsCorrect,
  generateToken,
  convertToSeconds,
} from "../utils";
import {
  toUserEntity,
  toSignInUserEntity,
  toConnectUserEntity,
  toAccessTokenEntity,
} from "../mappers";

/**
 * Appends new user with hashed password to database.
 * @param connectUserDto {ConnectUserDto}
 * @returns {Promise<ApiError | UserEntity>}
 */
const saveNewUser = async (
  connectUserDto: ConnectUserDto
): Promise<ApiError | UserEntity> => {
  const userExists = await UserModel.findOne({
    username: connectUserDto.get_username(),
  });

  if (userExists) {
    return ApiError.conflict("Username is already used.");
  }

  try {
    const hashedPassword = hashPassword(connectUserDto.get_password());
    const connectUserEntity = toConnectUserEntity(
      connectUserDto.get_username(),
      hashedPassword
    );
    const user = await UserModel.create(connectUserEntity);

    return toUserEntity(user._id, user.username);
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 * Returns existing user data with new access and refresh tokens.
 * @param connectUserDto {ConnectUserDto}
 * @returns {Promise<ApiError | SignInUserEntity>}
 */
const connectUser = async (
  connectUserDto: ConnectUserDto
): Promise<ApiError | SignInUserEntity> => {
  const user = await UserModel.findOne({
    username: connectUserDto.get_username(),
  });

  if (!user) {
    return ApiError.notFound("User does not exist.");
  }

  if (!passwordIsCorrect(connectUserDto.get_password(), user.password)) {
    return ApiError.unauthorized("Username and password do not match.");
  }

  const userEntity = toUserEntity(user._id, user.username);
  const accessToken = generateToken(userEntity, ACCESS_TOKEN_INFO);
  const refreshToken = generateToken(userEntity, REFRESH_TOKEN_INFO);
  const expiresIn = convertToSeconds(`${ACCESS_TOKEN_INFO.options.expiresIn}`);

  return toSignInUserEntity(userEntity, accessToken, expiresIn, refreshToken);
};

/**
 * Returns new user access token.
 * @param user {UserDto}
 * @returns {AccessTokenEntity | ApiError}
 */
const generateNewAccessToken = (
  user: UserDto
): AccessTokenEntity | ApiError => {
  try {
    const newToken = generateToken(
      toUserEntity(user.get__id(), user.get_username()),
      ACCESS_TOKEN_INFO
    );
    const expiresIn = convertToSeconds(
      `${ACCESS_TOKEN_INFO.options.expiresIn}`
    );

    return toAccessTokenEntity(newToken, expiresIn);
  } catch (err) {
    return ApiError.unauthorized("Token invalid.");
  }
};

export default { saveNewUser, connectUser, generateNewAccessToken };
