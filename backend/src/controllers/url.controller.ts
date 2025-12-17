import { Request, Response } from "express";

import { createShortUrl } from "../services/url.service.js";
import { getUrl } from "../dao/url.dao.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { SERVER_URL } from "../constants.js";

export const generateShortUrl = async (req: Request, res: Response) => {
  const { originalUrl, customShortCode } = req.body;
  const userId = req.userId;

  if (!userId) throw new NotFoundError("UserId not found!");

  const shortCode = await createShortUrl(userId, originalUrl, customShortCode);

  res.status(200).json({ link: `${SERVER_URL}/${shortCode}` });
};

export const redirectFromShortUrl = async (req: Request, res: Response) => {
  const { shortCode } = req.params;

  if (!shortCode) throw new NotFoundError("No short code found!");

  const url = await getUrl(shortCode);
  if (!url) throw new NotFoundError("Url does not exit!");

  res.redirect(url.originalUrl);
};
