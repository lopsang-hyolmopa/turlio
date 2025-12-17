import express from "express";

import { asyncHandler } from "../utils/asyncHandler.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  getCurrentUser,
  editUser,
  editUserPassword,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/me", authMiddleware, getCurrentUser);
router.put("/me", authMiddleware, asyncHandler(editUser));
router.put("/me/password", authMiddleware, asyncHandler(editUserPassword));

export default router;
