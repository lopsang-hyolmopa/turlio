import express, { json, Request, Response, urlencoded } from "express";

import authRoutes from "./routes/auth.route.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true, limit: "4kb" }));

app.use("/api/auth", authRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.use(errorHandler);

export default app;
