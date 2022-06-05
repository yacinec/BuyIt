import bcrypt from "bcrypt";

import { BCRYPT_SALT } from "../config";

/**
 * Returns hashed password.
 * @param password {string}
 * @returns {string}
 */
export const hashPassword = (password: string): string => {
  return bcrypt.hashSync(password, Number(BCRYPT_SALT));
};

/**
 * Returns true if 'password' corresponds to 'hashedPassword', false otherwise.
 * @param password {string}
 * @param hashedPassword {string}
 * @return {boolean}
 */
export const passwordIsCorrect = (
  password: string,
  hashedPassword: string
): boolean => {
  return bcrypt.compareSync(password, hashedPassword);
};
