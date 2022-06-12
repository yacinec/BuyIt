import { NextFunction, Response, Request } from "express";

import { AuthUserDto } from "../dtos";
import { ApiError } from "../errors";
import AuthService from "./service.auth";

/**
 * Signs up the user.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const authUserDto = new AuthUserDto(
    req.body.username.toLowerCase(),
    req.body.password
  );
  const data = await AuthService.signUp(authUserDto);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.send(data);
};

/**
 * Signs in the user.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const signIn = async (req: Request, res: Response, next: NextFunction) => {
  const authUserDto = new AuthUserDto(
    req.body.username.toLowerCase(),
    req.body.password
  );
  const data = await AuthService.signIn(authUserDto);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json(data);
};

/**
 * Refreshes user access token.
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
const refreshToken = (req: Request, res: Response, next: NextFunction) => {
  const data = AuthService.refreshToken(req.body.refreshToken);

  if (data instanceof ApiError) {
    next(data);
    return;
  }

  res.json({ accessToken: data });
};

export default { signUp, signIn, refreshToken };
