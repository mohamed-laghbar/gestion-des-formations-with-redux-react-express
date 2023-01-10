import express from "express";
import ErrorHandler from "./middlewares/ErrorHandler.js";
const app = express();
import "dotenv/config";
import cookieParser from "cookie-parser";
import { Configuration, OpenAIApi } from "openai";

import "./config/db.js";
import authRoute from "./routes/AuthRoutes.js";
app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/auth", authRoute);

app.use(ErrorHandler);

const port = process.env.PORT || 5000;

app.listen(port);
console.log(`Running on Port ${port}`);
