import { SignOptions } from "jsonwebtoken";

/**
 * Corresponds to token information structure.
 */
export type TokenInfoEntity = {
  privateKey: string;
  publicKey: string;
  options: SignOptions;
};
