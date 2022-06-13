import { ROLES } from "../config";
import { UserModel } from "../models";

/**
 * Returns true if the user has admin role, false otherwise.
 * @param id {string}
 * @returns {Promise<boolean>}
 */
export const isAdmin = async (id: string): Promise<boolean> => {
  const user = await UserModel.findById(id).select("role");
  return user.role === ROLES.ADMIN;
};

/**
 * Returns true if 'currUserId' correspond to 'requestId', false otherwise.
 * @param currUserId {string}
 * @param id {string}
 * @returns {Promise<boolean>}
 */
export const isCurrUser = (currUserId: string, requestId: string): boolean => {
  return currUserId === requestId;
};
