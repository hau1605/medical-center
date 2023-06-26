import express from "express";
import cors from "cors";
import { connectDB } from "./db/connection.js";
import { PORT } from "./config/config.js";

const start = async () => {
  const app = express();
  connectDB();
  // Middleware
  app.use(express.json());
  app.use(cors());
  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

start();