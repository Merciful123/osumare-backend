import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../model/taskModel.js";

export const getTasks = (req, res) => {
  res.status(200).json(getAllTasks());
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
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }
  const newTask = createTask(title, description);
  res.status(201).json(newTask);
};

export const updateTaskDetails = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }
  const updatedTask = updateTask(req.params.id, title, description);
  if (updatedTask) {
    res.status(200).json(updatedTask);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};

export const removeTask = (req, res) => {
  if (deleteTask(req.params.id)) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};
