import express from "express";
import mongoose from "mongoose";
import PostRouter from "./PostRouter.js";
import { config } from "dotenv";

config();
const app = new express();

app.use(express.json());
app.use("/post", PostRouter);

mongoose.connect(process.env.DB_URI);

app.listen(process.env.PORT, function () {
  console.log("서버 실행됨");
});
