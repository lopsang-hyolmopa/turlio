import { Request, Response } from "express";

import { updateUser } from "../dao/user.dao.js";
import { updatePassword } from "../services/user.service.js";
import { getUserId } from "../utils/helper.js";

export const getCurrentUser = (req: Request, res: Response) => {
  res.status(200).json({ user: req.user });
};

export const editUser = async (req: Request, res: Response) => {
  const userId = getUserId(req);
  const { fullName } = req.body;

  const updatedUser = await updateUser(userId, fullName);

  res.status(200).json({
    message: "User edited successfully!",
    user: updatedUser,
  });
};

export const editUserPassword = async (req: Request, res: Response) => {
  const { currentPassword, newPassword } = req.body;
  const userId = getUserId(req);

  await updatePassword(userId, currentPassword, newPassword);
  res.status(200).json({
    message: "Password updated successfully!",
  });
};
