import { NotFoundError } from "../errors/NotFoundError.js";

const requiredEnv = ["JWT_SECRET_KEY"];

for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new NotFoundError(`Missing env variable: ${key}`);
  }
}

export const config = {
  jwtSecret: process.env.JWT_SECRET_KEY!,
};
