import { connectDB } from "./connectDB.config";

import {
  PORT,
  DATABASE_URL,
  BCRYPT_SALT,
  PWD_PATTERN,
  JWT_ALGO,
  ACCESS_TOKEN_PRIVATE_KEY,
  ACCESS_TOKEN_PUBLIC_KEY,
  REFRESH_TOKEN_PRIVATE_KEY,
  REFRESH_TOKEN_PUBLIC_KEY,
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN,
  ROLES,
  USERNAME_PATTERN,
} from "./const.config";

export {
  connectDB,
  PORT,
  DATABASE_URL,
  BCRYPT_SALT,
  PWD_PATTERN,
  USERNAME_PATTERN,
  JWT_ALGO,
  ACCESS_TOKEN_PRIVATE_KEY,
  ACCESS_TOKEN_PUBLIC_KEY,
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_PRIVATE_KEY,
  REFRESH_TOKEN_PUBLIC_KEY,
  REFRESH_TOKEN_EXPIRES_IN,
  ROLES,
};
