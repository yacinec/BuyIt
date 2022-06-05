import { AuthUserDto } from "../dtos";
import { ApiError } from "../errors";
import { AuthService } from "../services";
import { UserEntity, SignInUserEntity, AccessTokenEntity } from "../entities";
import { toRefreshTokenDto } from "../mappers";

/**
 * Signs up the user.
 * @param username {string}
 * @param password {string}
 * @returns {Promise<ApiError | UserEntity>}
 */
const signUp = async (
  username: string,
  password: string
): Promise<ApiError | UserEntity> => {
  return await AuthService.signUp(new AuthUserDto(username, password));
};

/**
 * Signs in the user.
 * @param username {string}
 * @param password {string}
 * @returns {Promise<ApiError | SignInUserEntity>}
 */
const signIn = async (
  username: string,
  password: string
): Promise<ApiError | SignInUserEntity> => {
  return await AuthService.signIn(new AuthUserDto(username, password));
};

/**
 * Refreshes user access token.
 * @param refreshToken {string}
 * @returns {AccessTokenEntity | ApiError}
 */
const refreshToken = (
  refreshTokenDto: string
): AccessTokenEntity | ApiError => {
  return AuthService.refreshToken(toRefreshTokenDto(refreshTokenDto));
};

export default { signUp, signIn, refreshToken };
