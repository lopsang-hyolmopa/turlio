import { axiosInstance } from "../utils/axios";

export const registerUser = async (
  fullName: string,
  email: string,
  password: string
) => {
  const { data } = await axiosInstance.post("/auth/register", {
    fullName,
    email,
    password,
  });
  return data;
};

export const loginUser = async (email: string, password: string) => {
  const { data } = await axiosInstance.post("/auth/login", { email, password });
  return data;
};
