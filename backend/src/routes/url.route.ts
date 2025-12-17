import express from "express";

import { asyncHandler } from "../utils/asyncHandler.js";
import { generateShortUrl } from "../controllers/url.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, asyncHandler(generateShortUrl));

export default router;
