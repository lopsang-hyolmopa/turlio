import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import urlRoutes from "./routes/url.route.js";
import userRoutes from "./routes/user.route.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { asyncHandler } from "./utils/asyncHandler.js";
import { redirectFromShortUrl } from "./controllers/url.controller.js";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true, limit: "4kb" }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/url", urlRoutes);
app.use("/api/user", userRoutes);
app.get("/:shortCode", asyncHandler(redirectFromShortUrl));

app.use(errorHandler);

export default app;
