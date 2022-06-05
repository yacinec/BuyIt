import { SignOptions } from "jsonwebtoken";

/**
 * Corresponds to token structure.
 */
export type TokenInfoEntity = {
  privateKey: string;
  publicKey: string;
  options: SignOptions;
};
