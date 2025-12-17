import { Request, Response } from "express";

import {
  registerUserService,
  loginUserService,
} from "../services/auth.service.js";
import { cookieOptions } from "../config/cookies.js";

export const registerUser = async (req: Request, res: Response) => {
  const { fullName, email, password } = req.body;

  await registerUserService(fullName, email, password);

  res.status(200).json({
    message: "User registered!",
  });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { token } = await loginUserService(email, password);
  res.cookie("accessToken", token, cookieOptions);

  res.status(200).json({
    message: "Login sucess!",
  });
};

export const logoutUser = (req: Request, res: Response) => {
  res.clearCookie("accessToken");
  res.status(200).json({
    message: "Logged out successfully!",
  });
};
