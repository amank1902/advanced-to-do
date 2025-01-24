import { combineReducers } from "redux"
import authReducer from "./authReducer"
import todoReducer from "./todoReducer"
import listReducer from "./listReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todoReducer,
  lists: listReducer,
})

export default rootReducer

