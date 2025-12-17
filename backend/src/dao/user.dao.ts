import { User } from "../models/user.model.js";

interface FindUserOptions {
  includePassword?: boolean;
}

export const findUserByEmail = async (
  email: string,
  options: FindUserOptions = {}
) => {
  const query = User.findOne({ email });

  if (options.includePassword) {
    query.select("+password");
  }
  return await query;
};

export const findUserById = async (
  id: string,
  options: FindUserOptions = {}
) => {
  const query = User.findById(id);

  if (options.includePassword) {
    query.select("+password");
  }
  return await query;
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

export const updateUser = async (id: string, fullName: string) => {
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { fullName },
    {
      new: true,
      runValidators: true,
    }
  );
  return updatedUser;
};
