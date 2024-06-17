import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 8000;

const url = "";
mongoose
  .connect(url, { dbName: "cardmate" })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
