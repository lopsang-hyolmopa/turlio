import { saveUrl } from "../dao/url.dao.js";
import { generateNanoId } from "../utils/helper.js";

export const createShortUrl = async (userId:string, originalUrl: string, customShortCode?: string) => {
  const shortCode = customShortCode || generateNanoId(7);

  await saveUrl(userId, originalUrl, shortCode);
  return shortCode;
};
