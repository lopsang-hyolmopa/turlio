import express from "express";

import { asyncHandler } from "../utils/asyncHandler.js";
import { generateShortUrl, getAllUrls } from "../controllers/url.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, asyncHandler(generateShortUrl));
router.get("/", authMiddleware, asyncHandler(getAllUrls))

export default router;
