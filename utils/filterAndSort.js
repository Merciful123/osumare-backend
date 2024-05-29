// for filtering tasks
export const filterTasks = (tasks, query) => {
  if (query.priority) {
    tasks = tasks.filter((task) => task.priority === query.priority);
  }
  if (query.status) {
    tasks = tasks.filter((task) => task.status === query.status);
  }
  return tasks;
};

// function for sorting tasks
export const sortTasks = (tasks, query) => {
  if (query.sortBy) {
    tasks.sort((a, b) => {
      if (a[query.sortBy] < b[query.sortBy]) return -1;
      if (a[query.sortBy] > b[query.sortBy]) return 1;
      return 0;
    });
  }
  return tasks;
};
