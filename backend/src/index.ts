// import dotenv/config to get all env values.
import "dotenv/config";

import app from "./app.js";
import { SERVER_PORT } from "./constants.js";
import connectDB from "./db/index.js";

// first connect database and run server
connectDB()
  .then(() => {
    const server = app.listen(SERVER_PORT, () => {
      console.log(`Server is running at http://localhost:${SERVER_PORT}`);
    });

    server.on("error", (err) => {
      console.log("Server err", err);
      process.exit(1);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed! ", err);
  });
