import {
  createNewUser,
  findUserByEmail
} from "../dao/user.dao.js";
import { ConflictError } from "../errors/ConflictError.js";
import { UnauthorizedError } from "../errors/UnauthorizedError.js";
import { signToken } from "../utils/helper.js";

export const registerUserService = async (
  fullName: string,
  email: string,
  password: string
) => {
  const user = await findUserByEmail(email);
  if (user) throw new ConflictError("User already exists!");

  const newUser = await createNewUser(fullName, email, password);
  return newUser;
};

export const loginUserService = async (email: string, password: string) => {
  const user = await findUserByEmail(email, { includePassword: true });
  if (!user) throw new UnauthorizedError("Invalid credentails!");

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) throw new UnauthorizedError("Invalid credentails!");

  const token = signToken({ id: user._id.toString() });
  return { user, token };
};
