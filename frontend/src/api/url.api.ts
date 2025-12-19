import { axiosInstance } from "../utils/axios";

export const createShortUrl = async (
  originalUrl: string,
  customShortCode?: string
) => {
  const { data } = await axiosInstance.post("/urls", {
    originalUrl,
    customShortCode,
  });
  return data;
};

export const fetchAllUrls = async () => {
  const { data } = await axiosInstance.get("/urls");
  return data;
};
