import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../model/taskModel.js";
import { filterTasks, sortTasks } from "../utils/filterAndSort.js";


export const getTasks = (req, res) => {
  
  let tasks = getAllTasks();

  // Filter tasks
  tasks = filterTasks(tasks, req.query);
    
  
  // Sort tasks
  tasks = sortTasks(tasks, req.query);

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedTasks = tasks.slice(startIndex, endIndex);

  res.status(200).json({
    page,
    limit,
    total: tasks.length,
    tasks: paginatedTasks,
  });
};

export const getTask = (req, res) => {
  const task = getTaskById(req.params.id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};


export const addTask = (req, res) => {
  const { title, description, priority , status  } = req.body;
  if (!title || !description, !priority, !status) {
    return res
      .status(400)
      .json({ error: "All fields are required" });
  }
  const newTask = createTask(title, description, priority, status);
  res.status(201).json(newTask);
};


export const updateTaskDetails = (req, res) => {
    const { title, description, priority, status } = req.body;
      

  if ((!title || !description, !priority, !status)) {
    return res
      .status(400)
      .json({ error: "All fields are required" });
  }
  const updatedTask = updateTask(
    req.params.id,
    title,
    description,
    priority,
    status
    );
    
  if (updatedTask) {
    res.status(200).json(updatedTask);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};

export const removeTask = (req, res) => {
  if (deleteTask(req.params.id)) {
    res.status(204).json("task deleted successfully");
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};
