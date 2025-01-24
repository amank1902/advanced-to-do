import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../actions/todoActions"
import "./TaskInput.css"

const TaskInput = () => {
  const [task, setTask] = useState("")
  const [priority, setPriority] = useState("medium")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.trim()) {
      dispatch(
        addTask({
          text: task,
          priority,
          completed: false,
          id: Date.now(),
        }),
      )
      setTask("")
      setPriority("medium")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <div className="input-group">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input-field"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)} className="priority-select">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className="add-task-btn">
          Add Task
        </button>
      </div>
    </form>
  )
}

export default TaskInput

