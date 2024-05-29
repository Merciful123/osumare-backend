let tasks = [];
let currentId = 1;

export const getAllTasks = () => tasks;

export const getTaskById = (id) =>
  tasks.find((task) => task.id === parseInt(id));

export const createTask = (title, description) => {
  const newTask = { id: currentId++, title, description };
  tasks.push(newTask);
  return newTask;
};

export const updateTask = (id, title, description) => {
  const task = getTaskById(id);
  if (task) {
    task.title = title;
    task.description = description;
    return task;
  }
  return null;
};

export const deleteTask = (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    return true;
  }
  return false;
};


console.log(getAllTasks());
