import { AccessTokenEntity } from "./../entities/AccessTokenEntity";
import { UserModel } from "../models";
import { ApiError } from "../errors";
import { AuthUserDto, RefreshTokenDto } from "../dtos";
import { UserEntity, SignInUserEntity } from "../entities";
import { ACCESS_TOKEN_INFO, REFRESH_TOKEN_INFO } from "../config";
import {
  hashPassword,
  passwordIsCorrect,
  generateToken,
  convertToSeconds,
  verifyToken,
} from "../utils";
import {
  toUserEntity,
  toSignInUserEntity,
  toAccessTokenEntity,
} from "../mappers";

/**
 * Appends new user with hashed password to database.
 * @param authUserDto {AuthUserDto}
 * @returns {Promise<ApiError | UserEntity>}
 */
const signUp = async (
  authUserDto: AuthUserDto
): Promise<ApiError | UserEntity> => {
  try {
    const userExists = await UserModel.findOne({
      username: authUserDto.get_username(),
    });

    if (userExists) {
      return ApiError.conflict("Username is already used.");
    }

    const hashedPassword = hashPassword(authUserDto.get_password());
    const user = await UserModel.create({
      username: authUserDto.get_username(),
      password: hashedPassword,
    });

    return toUserEntity(user._id, user.username);
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 * Returns existing user data with new access and refresh tokens.
 * @param authUserDto {AuthUserDto}
 * @returns {Promise<ApiError | SignInUserEntity>}
 */
const signIn = async (
  authUserDto: AuthUserDto
): Promise<ApiError | SignInUserEntity> => {
  try {
    const user = await UserModel.findOne({
      username: authUserDto.get_username(),
    });

    if (!user) {
      return ApiError.notFound("User does not exist.");
    }

    if (!passwordIsCorrect(authUserDto.get_password(), user.password)) {
      return ApiError.unauthorized("Username and password do not match.");
    }

    const userEntity = toUserEntity(user._id, user.username);
    const accessToken = generateToken(userEntity, ACCESS_TOKEN_INFO);
    const refreshToken = generateToken(userEntity, REFRESH_TOKEN_INFO);
    const expiresIn = convertToSeconds(
      `${ACCESS_TOKEN_INFO.options.expiresIn}`
    );

    return toSignInUserEntity(userEntity, accessToken, expiresIn, refreshToken);
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 * Returns new user access token.
 * @param refreshTokenDto {RefreshTokenDto}
 * @returns {AccessTokenEntity | ApiError}
 */
const refreshToken = (
  refreshTokenDto: RefreshTokenDto
): AccessTokenEntity | ApiError => {
  try {
    const user = verifyToken(
      refreshTokenDto.get_refreshToken(),
      REFRESH_TOKEN_INFO
    );

    if (!user) {
      return ApiError.unauthorized("Token invalid.");
    }

    const newToken = generateToken(
      toUserEntity(user._id, user.username),
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

export default { signUp, signIn, refreshToken };
