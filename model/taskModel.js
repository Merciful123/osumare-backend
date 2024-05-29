let tasks = [];
let currentId = 1;



//  getting all task
export const getAllTasks = () => tasks;

//  getting a task by id

export const getTaskById = (id) =>
  tasks.find((task) => task.id === parseInt(id));


//  creating a task 

export const createTask = (
  title,
  description,
  priority ,
  status
) => {
  const newTask = { id: currentId++, title, description, priority, status };
  tasks.push(newTask);
  return newTask;
};


//  updating a task 

export const updateTask = (id, title, description, priority, status) => {
  const task = getTaskById(id);
  if (task) {
    task.title = title;
    task.description = description;
    task.priority = priority;
    task.status = status;
    return task;
  }
  return null;
};



//  deleting a task

export const deleteTask = (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    return true;
  }
  return false;
};


