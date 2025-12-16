import { CookieOptions } from "express";

export const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "prod",
  sameSite: "lax",
  maxAge: 1000 * 60 * 60, // 1hr
};
