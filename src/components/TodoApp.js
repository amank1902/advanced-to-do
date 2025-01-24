import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Bell, Calendar, RotateCcw } from "react-feather"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import TaskDetail from "./TaskDetail"
import { toggleTask, updateTask, addTask, setTaskImportant, addList } from "../actions/todoActions"
import "./TodoApp.css"

const TodoApp = () => {
  const [isDark, setIsDark] = useState(false)
  const [activeView, setActiveView] = useState("Today")
  const [selectedTask, setSelectedTask] = useState(null)
  const [newTask, setNewTask] = useState("")
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.todos)
  const lists = useSelector((state) => state.lists)
  const username = useSelector((state) => state.auth.user?.username)

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
          list: activeView,
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

  const handleAddList = (listName) => {
    dispatch(addList(listName))
  }

  const filteredTasks = tasks.filter((task) => {
    switch (activeView) {
      case "All":
        return true
      case "Today":
        return true 
      case "Important":
        return task.important
      case "Planned":
        return task.dueDate
      case "Assigned":
        return task.assignedTo
      default:
        return task.list === activeView
    }
  })

  const uncompletedTasks = filteredTasks.filter((task) => !task.completed)
  const completedTasks = filteredTasks.filter((task) => task.completed)

  return (
    <div className="app-container">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <div className="main-container">
        <Sidebar
          activeView={activeView}
          onViewChange={setActiveView}
          tasks={tasks}
          lists={lists}
          onAddList={handleAddList}
          username={username}
        />

        <main className="content">
          <div className="content-header">
            <div className="dropdown">
              <button className="dropdown-toggle">{activeView} ▼</button>
            </div>
          </div>

          {filteredTasks.length === 0 ? (
            <div className="empty-state">
              <h2>No tasks in this list</h2>
              <p>Add a task to get started!</p>
            </div>
          ) : (
            <>
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
                {uncompletedTasks.map((task) => (
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

                {completedTasks.length > 0 && (
                  <div className="completed-section">
                    <h3>Completed</h3>
                    {completedTasks.map((task) => (
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
            </>
          )}
        </main>

        {selectedTask && (
          <TaskDetail task={selectedTask} onClose={() => setSelectedTask(null)} onUpdate={handleTaskUpdate} />
        )}
      </div>
    </div>
  )
}

export default TodoApp

