import { UserModel } from "../models";
import { ApiError } from "../errors";
import { AuthUserDto, UserTokenDto, UserDto } from "../dtos";
import {
  ACCESS_TOKEN_EXPIRES_IN,
  ACCESS_TOKEN_PRIVATE_KEY,
  REFRESH_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_PRIVATE_KEY,
} from "../config";
import {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
  passwordIsCorrect,
  usernameIsCorrect,
} from "../utils";
import { AuthUserEntity, UserEntity } from "../entities";
import { toUserDto } from "../mappers";

/**
 * Appends a new user with hashed password to database.
 * @param authUserDto {AuthUserDto}
 * @returns {Promise<ApiError | UserDto>}
 */
const signUp = async (
  authUserDto: AuthUserDto
): Promise<ApiError | UserDto> => {
  const username = authUserDto.get_username();

  try {
    const userExists = await UserModel.findOne({
      username: username,
    }).select("username");

    if (userExists) {
      return ApiError.conflict("Username is already used.");
    }

    if (!usernameIsCorrect(username)) {
      return ApiError.unauthorized(
        "Username does not follow the pattern requirements."
      );
    }

    if (!passwordIsCorrect(authUserDto.get_password())) {
      return ApiError.unauthorized(
        "Password does not follow the security requirements."
      );
    }

    const newUser: AuthUserEntity = {
      username: username,
      password: hashPassword(authUserDto.get_password()),
    };
    const user = await UserModel.create(newUser);

    return toUserDto(user._id, user.username);
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 * Returns an existing user data with new access and refresh tokens.
 * @param authUserDto {AuthUserDto}
 * @returns {Promise<ApiError | UserTokenDto>}
 */
const signIn = async (
  authUserDto: AuthUserDto
): Promise<ApiError | UserTokenDto> => {
  try {
    const user = await UserModel.findOne({
      username: authUserDto.get_username(),
    }).select("_id username password");

    if (!user) {
      return ApiError.notFound("User does not exist.");
    }

    if (!comparePassword(authUserDto.get_password(), user.password)) {
      return ApiError.unauthorized("Username and password do not match.");
    }

    const userToken: UserEntity = {
      _id: user._id,
      username: user.username,
    };
    const accessToken = generateToken(
      userToken,
      ACCESS_TOKEN_PRIVATE_KEY,
      ACCESS_TOKEN_EXPIRES_IN
    );
    const refreshToken = generateToken(
      userToken,
      REFRESH_TOKEN_PRIVATE_KEY,
      REFRESH_TOKEN_EXPIRES_IN
    );

    return new UserTokenDto(user._id, user.username, accessToken, refreshToken);
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 * Returns new user access token.
 * @param refreshTokenDto {string}
 * @returns {ApiError | string}
 */
const refreshToken = (refreshTokenDto: string): ApiError | string => {
  try {
    const user = verifyToken(refreshTokenDto, REFRESH_TOKEN_PRIVATE_KEY);

    if (!user) {
      return ApiError.unauthorized("Token invalid.");
    }

    const newAccessToken = generateToken(
      user,
      ACCESS_TOKEN_PRIVATE_KEY,
      ACCESS_TOKEN_EXPIRES_IN
    );

    return newAccessToken;
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

export default { signUp, signIn, refreshToken };
