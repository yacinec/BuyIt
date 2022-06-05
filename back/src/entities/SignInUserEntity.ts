import { UserEntity } from ".";

/**
 * Corresponds to returned sign-in user structure.
 */
export type SignInUserEntity = {
  user: UserEntity;
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
};
