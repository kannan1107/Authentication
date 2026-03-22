import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connect } from "mongoose";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/router/userRouter.js";

const app = express();

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});
app.use("/api", authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
