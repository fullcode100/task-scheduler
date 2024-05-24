import express from "express";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes";

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/tasks";

app.use(express.json());
app.use("/api/tasks", taskRoutes);

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

export default app;
