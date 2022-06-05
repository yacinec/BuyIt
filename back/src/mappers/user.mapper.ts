import { UserEntity, SignInUserEntity, ConnectUserEntity } from "../entities";

/**
 * Builds 'ConnectUserEntity' object.
 * @param username {string}
 * @param password {string}
 * @returns {ConnectUserEntity}
 */
export const toConnectUserEntity = (
  username: string,
  password: string
): ConnectUserEntity => {
  return { username: username, password: password };
};

/**
 * Builds 'UserEntity' object.
 * @param _id {string}
 * @param username {string}
 * @returns {UserEntity}
 */
export const toUserEntity = (_id: string, username: string): UserEntity => {
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
