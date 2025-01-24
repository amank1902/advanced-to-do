export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
})

export const toggleTask = (id) => ({
  type: "TOGGLE_TASK",
  payload: id,
})

export const updateTask = (task) => ({
  type: "UPDATE_TASK",
  payload: task,
})

export const setTaskImportant = (id) => ({
  type: "SET_TASK_IMPORTANT",
  payload: id,
})

