import { Request } from "express";

import { UserDocument } from "./User.ts";

declare global {
  namespace Express {
    interface Request {
      user?: UserDocument;
    }
  }
} 
