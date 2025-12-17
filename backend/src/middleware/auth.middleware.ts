import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/helper.js";
import { findUserById } from "../dao/user.dao.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { UnauthorizedError } from "../errors/UnauthorizedError.js";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies?.accessToken;
    if (!token) throw new UnauthorizedError("Unauthorized!");

    const decoded = verifyToken(token);

    const user = await findUserById(decoded.id);
    if (!user) throw new NotFoundError("User not found!");

    req.userId = user._id.toString();
    next();
  } catch (error) {
    next(error);
  }
};
