import { Router } from "express";
import { protect } from "../middleware/authController.js";

const authRoutes = Router();
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  loginUser,
  updateUser,
  updateUserRole,
} from "../controller/userController.js";

authRoutes.post("/register", createUser);
authRoutes.post("/login", loginUser);
authRoutes.get("/users", protect, getAllUsers);
authRoutes.get("/users/:id", protect, getUserById);
authRoutes.put("/users/:id", protect, updateUser);
authRoutes.put("/users/:id/role", protect, updateUserRole);
authRoutes.delete("/users/:id", protect, deleteUser);

export default authRoutes;
