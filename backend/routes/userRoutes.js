// routes/userRoutes.js
import express from "express";
import {
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/users", createUser);
router.post("/users/login", getUser);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

export default router;
