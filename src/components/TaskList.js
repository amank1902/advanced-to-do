import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleTask, deleteTask } from "../actions/todoActions"
import "./TaskList.css"

const TaskList = () => {
  const tasks = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleToggle = (id) => {
    dispatch(toggleTask(id))
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
          <div className="task-checkbox">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
              id={`task-${task.id}`}
            />
            <label htmlFor={`task-${task.id}`} className="custom-checkbox">
              <svg viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </label>
          </div>
          <span className="task-text">{task.text}</span>
          <span className={`priority-badge ${task.priority}`}>{task.priority}</span>
          <button className="delete-btn" onClick={() => dispatch(deleteTask(task.id))}>
            ×
          </button>
        </div>
      ))}
    </div>
  )
}

export default TaskList

