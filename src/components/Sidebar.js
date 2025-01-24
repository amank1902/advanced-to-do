import React, { useState } from "react"
import { List, Calendar, Star, Layout, Users, Plus } from "react-feather"
import TaskProgress from "./TaskProgress"
import "./Sidebar.css"

const Sidebar = ({ activeView, onViewChange, tasks, lists = [], onAddList, username }) => {
  const [newListName, setNewListName] = useState("")
  const [isAddingList, setIsAddingList] = useState(false)

  const handleAddList = () => {
    if (newListName.trim()) {
      onAddList(newListName.trim())
      setNewListName("")
      setIsAddingList(false)
    }
  }

  return (
    <aside className="sidebar">
      <div className="profile">
        <img
          src="/image.png"
          alt="Profile"
          className="profile-image"
        />
        <h2>Hey, {username || "User"}</h2>
      </div>

      <nav className="nav-menu">
        <a href="#" className={`nav-item ${activeView === "All" ? "active" : ""}`} onClick={() => onViewChange("All")}>
          <List size={20} />
          <span>All Tasks</span>
        </a>
        <a
          href="#"
          className={`nav-item ${activeView === "Today" ? "active" : ""}`}
          onClick={() => onViewChange("Today")}
        >
          <Calendar size={20} />
          <span>Today</span>
        </a>
        <a
          href="#"
          className={`nav-item ${activeView === "Important" ? "active" : ""}`}
          onClick={() => onViewChange("Important")}
        >
          <Star size={20} />
          <span>Important</span>
        </a>
        <a
          href="#"
          className={`nav-item ${activeView === "Planned" ? "active" : ""}`}
          onClick={() => onViewChange("Planned")}
        >
          <Layout size={20} />
          <span>Planned</span>
        </a>
        <a
          href="#"
          className={`nav-item ${activeView === "Assigned" ? "active" : ""}`}
          onClick={() => onViewChange("Assigned")}
        >
          <Users size={20} />
          <span>Assigned to me</span>
        </a>
      </nav>

      <div className="custom-lists">
        {lists.map((list) => (
          <a
            key={list}
            href="#"
            className={`nav-item ${activeView === list ? "active" : ""}`}
            onClick={() => onViewChange(list)}
          >
            <List size={20} />
            <span>{list}</span>
          </a>
        ))}
      </div>

      {isAddingList ? (
        <div className="add-list-form">
          <input
            type="text"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            placeholder="New list name"
          />
          <button onClick={handleAddList}>Add</button>
          <button onClick={() => setIsAddingList(false)}>Cancel</button>
        </div>
      ) : (
        <button className="add-list-button" onClick={() => setIsAddingList(true)}>
          <Plus size={20} />
          <span>Add list</span>
        </button>
      )}

      <div className="progress-section">
        <div className="progress-header">
          <span>Today Tasks</span>
          <span className="task-count">{tasks.filter((task) => !task.completed).length}</span>
        </div>
        <TaskProgress tasks={tasks} />
      </div>
    </aside>
  )
}

export default Sidebar

