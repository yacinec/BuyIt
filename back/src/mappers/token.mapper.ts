import { AccessTokenEntity } from "../entities";

/**
 * Builds 'AccessTokenEntity' object.
 * @param accessToken {string}
 * @param expiresIn {number}
 * @returns {AccessTokenEntity}
 */
export const toAccessTokenEntity = (
  accessToken: string,
  expiresIn: number
): AccessTokenEntity => {
  return { accessToken: accessToken, expiresIn: expiresIn };
};
