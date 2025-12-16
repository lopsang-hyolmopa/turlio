import jwt from "jsonwebtoken";

import { config } from "../config/index.js";

export const signToken = (payload: { id: string }) => {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, config.jwtSecret);
};
