import { User } from "../models/user.model.js";

export const findUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};

export const findUserByEmailWithPassword = async (email: string) => {
  return await User.findOne({ email }).select("+password");
};

export const findUserById = async (id: string) => {
  return await User.findById(id);
};

export const createNewUser = async (
  fullName: string,
  email: string,
  password: string
) => {
  const newUser = new User({ fullName, email, password });
  await newUser.save();

  return newUser;
};
