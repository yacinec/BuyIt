import { sign, verify } from "jsonwebtoken";

import { TokenInfoEntity, UserEntity } from "../entities";

/**
 * Returns new jwt generated.
 * @param user {UserEntity}
 * @param TokenInfoEntity {TokenInfoEntity}
 * @return {string}
 */
export const generateToken = (
  user: UserEntity,
  tokenInfoEntity: TokenInfoEntity
): string => {
  return sign(user, tokenInfoEntity.privateKey, tokenInfoEntity.options);
};

/**
 * Returns user data with valid token.
 * @param token {string}
 * @param tokenInfoEntity {TokenInfoEntity}
 * @return {UserEntity}
 */
export const verifyToken = (
  token: string,
  tokenInfoEntity: TokenInfoEntity
): UserEntity => {
  const user = verify(token, tokenInfoEntity.privateKey) as UserEntity;
  return { _id: user._id, username: user.username };
};
