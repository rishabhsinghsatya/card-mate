import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT || 5000;
const URL = "mongodb://127.0.0.1:27017/";

// Connect to MongoDB
mongoose
  .connect(URL, {
    dbName: "card-mate",
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
