import { USERNAME_PATTERN } from "../config";

/**
 * Returns true if 'username' corresponds to the username
 * requirements below, false otherwise :
 * - with between 8 and 16 characters;
 * - does not contains _ at the beginning of at the end;
 * - does not contains .. __ _. ._ inside;
 * - can have a mixture of letters, numbers, . and _;
 * - does not contain more than 7 numbers;
 * - does not include at least one special character, e.g., % ! @ # ? ].
 * @param username {string}
 * @return {boolean}
 */
export const usernameIsCorrect = (username: string): boolean => {
  return !!username.match(USERNAME_PATTERN);
};
