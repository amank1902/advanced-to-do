import React from "react"
import { useSelector } from "react-redux"
import "./TaskProgress.css"

const TaskProgress = () => {
  const tasks = useSelector((state) => state.todos)
  const totalTasks = tasks.length
  const completedTasks = tasks.filter((task) => task.completed).length
  const progress = totalTasks ? (completedTasks / totalTasks) * 100 : 0

  return (
    <div className="task-progress">
      <svg viewBox="0 0 36 36" className="circular-chart">
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#E5E9E7"
          strokeWidth="3"
        />
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#36B37E"
          strokeWidth="3"
          strokeDasharray={`${progress}, 100`}
        />
      </svg>
      <div className="progress-legend">
        <span className="pending">Pending</span>
        <span className="done">Done</span>
      </div>
    </div>
  )
}

export default TaskProgress

