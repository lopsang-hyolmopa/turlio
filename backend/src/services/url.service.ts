import { saveUrl } from "../dao/url.dao.js";
import { generateNanoId } from "../utils/helper.js";

export const createShortUrl = async (originalUrl: string) => {
  const shortCode = generateNanoId(7);

  await saveUrl(originalUrl, shortCode);
  return shortCode;
};
