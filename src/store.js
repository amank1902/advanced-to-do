import { createStore, applyMiddleware, combineReducers } from "redux"
import { thunk } from "redux-thunk"
import authReducer from "./reducers/authReducer"
import todoReducer from "./reducers/todoReducer"
import weatherReducer from "./reducers/weatherReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todoReducer,
  weather: weatherReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

