import { Request, Response } from "express";
import { registerUserService, loginUserService } from "../services/auth.service.js";

export const registerUser = async (req: Request, res: Response) => {
  const { fullName, email, password } = req.body;

  const user = await registerUserService(fullName, email, password);

  res.status(200).json({
    message: "User registered!",
    user,
  });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await loginUserService(email, password);

  res.status(200).json({
    message: "Login sucess!",
    user,
  });
};
