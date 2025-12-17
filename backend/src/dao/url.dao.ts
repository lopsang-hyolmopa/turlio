import { Url } from "../models/url.model.js";

export const saveUrl = async (userId: string, originalUrl: string, shortCode: string) => {
  const newUrl = new Url({ title: shortCode, originalUrl, shortCode, user: userId });
  await newUrl.save();

  return newUrl;
};

export const getUrl = async (shortCode: string) => {
  return await Url.findOneAndUpdate(
    { shortCode },
    {
      $inc: { clicks: 1 },
    }
  );
};
