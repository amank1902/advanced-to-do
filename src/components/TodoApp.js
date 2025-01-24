import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Bell, Calendar, RotateCcw } from "react-feather"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import TaskDetail from "./TaskDetail"
import { toggleTask, updateTask, addTask, setTaskImportant } from "../actions/todoActions"
import "./TodoApp.css"

const TodoApp = () => {
  const [isDark, setIsDark] = useState(false)
  const [activeView, setActiveView] = useState("today")
  const [selectedTask, setSelectedTask] = useState(null)
  const [newTask, setNewTask] = useState("")
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.todos)

  useEffect(() => {
    document.body.className = isDark ? "dark" : "light"
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const handleTaskClick = (task) => {
    setSelectedTask(task)
  }

  const handleTaskUpdate = (updatedTask) => {
    dispatch(updateTask(updatedTask))
  }

  const handleAddTask = (e) => {
    e.preventDefault()
    if (newTask.trim()) {
      dispatch(
        addTask({
          id: Date.now(),
          text: newTask,
          completed: false,
          important: false,
        }),
      )
      setNewTask("")
    }
  }

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId))
  }

  const handleSetTaskImportant = (taskId) => {
    dispatch(setTaskImportant(taskId))
  }

  const filteredTasks = tasks.filter((task) => {
    switch (activeView) {
      case "all":
        return true
      case "today":
        return true // Show all tasks in 'today' view
      case "important":
        return task.important
      case "planned":
        return task.dueDate
      case "assigned":
        return task.assignedTo
      default:
        return true
    }
  })

  return (
    <div className="app-container">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <div className="main-container">
        <Sidebar activeView={activeView} onViewChange={setActiveView} tasks={tasks} />

        <main className="content">
          <div className="content-header">
            <div className="dropdown">
              <button className="dropdown-toggle">To Do ▼</button>
            </div>
          </div>

          <div className="task-input-container">
            <form onSubmit={handleAddTask}>
              <input
                type="text"
                placeholder="Add A Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="task-input"
              />
              <div className="task-input-actions">
                <button type="button" className="icon-button">
                  <Bell size={18} />
                </button>
                <button type="button" className="icon-button">
                  <RotateCcw size={18} />
                </button>
                <button type="button" className="icon-button">
                  <Calendar size={18} />
                </button>
                <button type="submit" className="add-task-button">
                  ADD TASK
                </button>
              </div>
            </form>
          </div>

          <div className="tasks-list">
            {filteredTasks
              .filter((task) => !task.completed)
              .map((task) => (
                <div key={task.id} className="task-item">
                  <label className="checkbox-container">
                    <input type="checkbox" checked={task.completed} onChange={() => handleToggleTask(task.id)} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="task-text" onClick={() => handleTaskClick(task)}>
                    {task.text}
                  </span>
                  <button
                    className={`star-button ${task.important ? "important" : ""}`}
                    onClick={() => handleSetTaskImportant(task.id)}
                  >
                    ★
                  </button>
                </div>
              ))}

            {filteredTasks.some((task) => task.completed) && (
              <div className="completed-section">
                <h3>Completed</h3>
                {filteredTasks
                  .filter((task) => task.completed)
                  .map((task) => (
                    <div key={task.id} className="task-item completed">
                      <label className="checkbox-container">
                        <input type="checkbox" checked={task.completed} onChange={() => handleToggleTask(task.id)} />
                        <span className="checkmark"></span>
                      </label>
                      <span className="task-text" onClick={() => handleTaskClick(task)}>
                        {task.text}
                      </span>
                      <button
                        className={`star-button ${task.important ? "important" : ""}`}
                        onClick={() => handleSetTaskImportant(task.id)}
                      >
                        ★
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </main>

        {selectedTask && (
          <TaskDetail task={selectedTask} onClose={() => setSelectedTask(null)} onUpdate={handleTaskUpdate} />
        )}
      </div>
    </div>
  )
}

export default TodoApp

