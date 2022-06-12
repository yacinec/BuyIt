import bcrypt from "bcrypt";

import { BCRYPT_SALT, PWD_PATTERN } from "../config";

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
export const comparePassword = (
  password: string,
  hashedPassword: string
): boolean => {
  return bcrypt.compareSync(password, hashedPassword);
};

/**
 * Returns true if 'password' corresponds to the password
 * requirements below, false otherwise :
 * - with at least 12 characters;
 * - contains a mixture of both uppercase and lowercase letters;
 * - contains mixture of letters and numbers;
 * - includes at least one special character, e.g., ! @ # ? ].
 * @param password {string}
 * @return {boolean}
 */
export const passwordIsCorrect = (password: string): boolean => {
  return !!password.match(PWD_PATTERN);
};
