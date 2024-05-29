import express from "express";
import {
  getTasks,
  getTask,
  addTask,
  updateTaskDetails,
  removeTask,
} from "../controller/taskController.js";

const router = express.Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", addTask);
router.put("/tasks/:id", updateTaskDetails);
router.delete("/tasks/:id", removeTask);

export default router;
