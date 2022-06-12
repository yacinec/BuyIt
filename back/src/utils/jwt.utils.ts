import { Secret, sign, verify } from "jsonwebtoken";

import { JWT_ALGO } from "../config";
import { UserEntity } from "../entities";

/**
 * Returns new jwt generated.
 * @param user {UserEntity}
 * @param privateKey {Secret | undefined}
 * @param expiresIn {Secret | undefined}
 * @return {string}
 */
export const generateToken = (
  user: UserEntity,
  privateKey: Secret | undefined,
  expiresIn: Secret | undefined
): string => {
  return sign(user, `${privateKey}`, {
    algorithm: JWT_ALGO,
    expiresIn: `${expiresIn}`,
  });
};

/**
 * Returns user data with valid token.
 * @param token {string}
 * @param privateKey {Secret | undefined}
 * @return {UserEntity}
 */
export const verifyToken = (
  token: string,
  privateKey: Secret | undefined
): UserEntity => {
  const { _id, username } = verify(token, `${privateKey}`) as UserEntity;
  return { _id: _id, username: username };
};
