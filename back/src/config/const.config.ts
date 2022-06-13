import { Algorithm, Secret } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Server Management Data.
const PORT = parseInt(process.env.PORT as string, 10);
const DATABASE_URL = process.env.DATABASE_URI;

// Hashing Data.
const BCRYPT_SALT = process.env.BCRYPT_SALT;

// Authentification Data Requirements .
const PWD_PATTERN =
  /(?=.{12,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.\W)|(?=.*_)|(?=.*\*))^[^ ]+$/;
const USERNAME_PATTERN =
  /^(?=.{8,16}$)(?![_])(?!.*[_]{2})[a-zA-Z0-9_]+(?<![_])$/;

// JWT Data.
const JWT_ALGO: Algorithm | undefined = process.env.JWT_ALGO as Algorithm;

// Access Token Data.
const ACCESS_TOKEN_PRIVATE_KEY: Secret | undefined =
  process.env.ACCESS_TOKEN_PRIVATE_KEY;
const ACCESS_TOKEN_PUBLIC_KEY: Secret | undefined =
  process.env.ACCESS_TOKEN_PUBLIC_KEY;
const ACCESS_TOKEN_EXPIRES_IN: Secret | undefined =
  process.env.ACCESS_TOKEN_EXPIRES_IN;

// Refresh Token Data.
const REFRESH_TOKEN_PRIVATE_KEY: Secret | undefined =
  process.env.ACCESS_TOKEN_PRIVATE_KEY;
const REFRESH_TOKEN_PUBLIC_KEY: Secret | undefined =
  process.env.ACCESS_TOKEN_PUBLIC_KEY;
const REFRESH_TOKEN_EXPIRES_IN: Secret | undefined =
  process.env.REFRESH_TOKEN_EXPIRES_IN;

const ROLES = {
  ADMIN: "ADMIN",
  MEMBER: "MEMBER",
};

export {
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
