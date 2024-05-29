import express from "express";
import {
  getTasks,
  getTask,
  addTask,
  updateTaskDetails,
  removeTask,
} from "../controller/taskController.js";

import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/tasks", authenticateToken, getTasks);
router.get("/tasks/:id", authenticateToken, getTask);
router.post("/tasks", authenticateToken, addTask);
router.put("/tasks/:id", authenticateToken, updateTaskDetails);
router.delete("/tasks/:id", authenticateToken, removeTask);

export default router;
