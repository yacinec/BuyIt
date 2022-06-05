import { RefreshTokenDto } from "../dtos";
import { AccessTokenEntity } from "../entities";

/**
 * Builds 'RefresTokenDto' object.
 * @param refreshToken {string}
 * @returns {RefreshTokenDto}
 */
export const toRefreshTokenDto = (refreshToken: string): RefreshTokenDto => {
  return new RefreshTokenDto(refreshToken);
};

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
