import { UserDto } from "../dtos";

/**
 * Builds a 'UserDto' object.
 * @param _id {string}
 * @param username {string}
 * @returns {UserDto}
 */
export const toUserDto = (_id = "", username = ""): UserDto => {
  return new UserDto(_id, username);
};
