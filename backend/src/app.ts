import express, { Request, Response } from "express";

import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.use(errorHandler);

export default app;
