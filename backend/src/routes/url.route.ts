import express from "express";

import { asyncHandler } from "../utils/asyncHandler.js";
import { generateShortUrl } from "../controllers/url.controller.js";

const router = express.Router();

router.post("/", asyncHandler(generateShortUrl));

export default router;
