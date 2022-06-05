import dotenv from "dotenv";
import { TokenInfoEntity } from "../entities";

dotenv.config();

// Server management data.
const PORT = parseInt(process.env.PORT as string, 10);
const DATABASE_URL = process.env.DATABASE_URI;

// Hashing data.
const BCRYPT_SALT = process.env.BCRYPT_SALT;

// Token data.
const ACCESS_TOKEN_INFO: TokenInfoEntity = {
  privateKey: `${process.env.ACCESS_TOKEN_PRIVATE_KEY}`,
  publicKey: `${process.env.ACCESS_TOKEN_PUBLIC_KEY}`,
  options: { algorithm: "HS256", expiresIn: "1h" },
};

const REFRESH_TOKEN_INFO: TokenInfoEntity = {
  privateKey: `${process.env.REFRESH_TOKEN_PRIVATE_KEY}`,
  publicKey: `${process.env.REFRESH_TOKEN_PUBLIC_KEY}`,
  options: { algorithm: "HS256", expiresIn: "1y" },
};

export {
  PORT,
  DATABASE_URL,
  BCRYPT_SALT,
  ACCESS_TOKEN_INFO,
  REFRESH_TOKEN_INFO,
};
