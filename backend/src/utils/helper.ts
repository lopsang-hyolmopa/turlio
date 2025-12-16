import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";

import { config } from "../config/index.js";

export const signToken = (payload: { id: string }) => {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, config.jwtSecret);
};

export const generateNanoId = (size: number) => {
  return nanoid(size);
};
