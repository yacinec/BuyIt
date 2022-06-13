import { Request } from "express";

/**
 * Returns the request token if it exists, an empty string otherwise.
 * @param req {Request}
 * @returns {string}
 */
export const retrieveRequestToken = (req: Request): string => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return "";
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return "";
  }
  return token;
};
