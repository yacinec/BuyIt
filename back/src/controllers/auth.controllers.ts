import { ConnectUserDto, UserDto } from "../dtos";
import { ApiError } from "../errors";
import { AuthService } from "../services";
import { UserEntity, SignInUserEntity, AccessTokenEntity } from "../entities";

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
  return await AuthService.saveNewUser(new ConnectUserDto(username, password));
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
  return await AuthService.connectUser(new ConnectUserDto(username, password));
};

/**
 * Refreshes user token.
 * @param username {string}
 * @param password {string}
 * @returns {AccessTokenEntity | ApiError}
 */
const refreshToken = (
  _id: string,
  username: string
): AccessTokenEntity | ApiError => {
  return AuthService.generateNewAccessToken(new UserDto(_id, username));
};

export default { signUp, signIn, refreshToken };
