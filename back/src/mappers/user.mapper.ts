import { UserDto } from "../dtos";
import { UserEntity, SignInUserEntity } from "../entities";

/**
 * Builds 'UserDto' object.
 * @param _id {string}
 * @param username {string}
 * @returns {UserDto}
 */
export const toUserDto = (_id: string, username = ""): UserDto => {
  return new UserDto(_id, username);
};

/**
 * Builds 'UserEntity' object.
 * @param _id {string}
 * @param username {string}
 * @returns {UserEntity}
 */
export const toUserEntity = (_id: string, username = ""): UserEntity => {
  return { _id: _id, username: username };
};

/**
 * Builds 'SignInUserEntity' object.
 * @param userEntity {UserEntity}
 * @param accessToken {string}
 * @param expiresIn {number}
 * @param refreshToken {string}
 * @returns {SignInUserEntity}
 */
export const toSignInUserEntity = (
  userEntity: UserEntity,
  accessToken: string,
  expiresIn: number,
  refreshToken: string
): SignInUserEntity => {
  return {
    user: userEntity,
    accessToken: accessToken,
    expiresIn: expiresIn,
    refreshToken: refreshToken,
  };
};
