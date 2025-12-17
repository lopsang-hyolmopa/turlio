import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import { Request } from "express";

import { config } from "../config/index.js";
import { AuthTokenPayload } from "../types/AuthToken.js";
import { UnauthorizedError } from "../errors/UnauthorizedError.js";

export const signToken = (payload: AuthTokenPayload) => {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token: string): AuthTokenPayload => {
  return jwt.verify(token, config.jwtSecret) as AuthTokenPayload;
};

export const generateNanoId = (size: number) => {
  return nanoid(size);
};

export const getUserId = (req: Request) => {
  if (!req.user) throw new UnauthorizedError("User not authenticated!");
  return req.user._id.toString();
};
