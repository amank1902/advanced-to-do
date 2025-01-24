const initialState = [
  { id: 1, text: "Buy groceries", completed: false, important: false, list: "today" },
  { id: 2, text: "Finish project report", completed: false, important: true, list: "today" },
  { id: 3, text: "Call the bank", completed: false, important: false, list: "today" },
  { id: 4, text: "Schedule dentist appointment", completed: false, important: false, list: "today" },
  { id: 5, text: "Plan weekend trip", completed: false, important: false, list: "today" },
  { id: 6, text: "Read a book", completed: true, important: false, list: "today" },
  { id: 7, text: "Clean the house", completed: true, important: false, list: "today" },
  { id: 8, text: "Prepare presentation", completed: true, important: true, list: "today" },
  { id: 9, text: "Update blog", completed: true, important: false, list: "today" },
]

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload]

    case "TOGGLE_TASK":
      return state.map((task) => (task.id === action.payload ? { ...task, completed: !task.completed } : task))

    case "UPDATE_TASK":
      return state.map((task) => (task.id === action.payload.id ? action.payload : task))

    case "SET_TASK_IMPORTANT":
      return state.map((task) => (task.id === action.payload ? { ...task, important: !task.important } : task))

    default:
      return state
  }
}

export default todoReducer

