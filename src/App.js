import React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import Login from "./components/Login"
import TodoApp from "./components/TodoApp"
import PrivateRoute from "./components/PrivateRoute"
import "./styles/theme.css"
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App light">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <TodoApp />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App

