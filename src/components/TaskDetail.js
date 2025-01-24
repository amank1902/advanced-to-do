import React, { useState } from "react"
import { X, Plus, Bell, Calendar, RotateCcw, Clock } from "react-feather"
import "./TaskDetail.css"

const TaskDetail = ({ task, onClose, onUpdate }) => {
  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <div className="task-detail">
      <div className="task-detail-header">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onUpdate({ ...task, completed: !task.completed })}
        />
        <input
          type="text"
          value={task.text}
          onChange={(e) => onUpdate({ ...task, text: e.target.value })}
          className="task-title-input"
        />
        <button className="close-button" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <div className="task-detail-content">
        <button className="detail-button">
          <Plus size={18} />
          <span>Add Step</span>
        </button>

        <button className="detail-button">
          <Bell size={18} />
          <span>Set Reminder</span>
        </button>

        <button className="detail-button" onClick={() => setShowCalendar(!showCalendar)}>
          <Calendar size={18} />
          <span>Add Due Date</span>
        </button>

        {showCalendar && <div className="calendar-popup">{/* Calendar implementation */}</div>}

        <button className="detail-button">
          <RotateCcw size={18} />
          <span>Repeat</span>
        </button>
      </div>

      <div className="task-detail-footer">
        <div className="created-info">
          <Clock size={16} />
          <span>Created Today</span>
        </div>
      </div>
    </div>
  )
}

export default TaskDetail

