import { findUserById } from "../dao/user.dao.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { UnauthorizedError } from "../errors/UnauthorizedError.js";

export const updatePassword = async (
  userId: string,
  currentPassword: string,
  newPassword: string
) => {
  const user = await findUserById(userId, { includePassword: true });
  if (!user) throw new NotFoundError("User not found!");

  const isPasswordValid = await user.comparePassword(currentPassword);
  if (!isPasswordValid)
    throw new UnauthorizedError("Current password is incorrect!");

  // findByIdAndUpdate won't work since the new password need to be hashed
  user.password = newPassword;
  await user.save();

  return user;
};
