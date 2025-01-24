import React from "react"
import { List, Calendar, Star, Layout, Users, Plus } from "react-feather"
import TaskProgress from "./TaskProgress"
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yulTwp0TvDyQA65IiLNsGR8DqQnjhp.png"
          alt="Profile"
          className="profile-image"
        />
        <h2>Hey, ABCD</h2>
      </div>

      <nav className="nav-menu">
        <a href="#" className="nav-item">
          <List size={20} />
          <span>All Tasks</span>
        </a>
        <a href="#" className="nav-item active">
          <Calendar size={20} />
          <span>Today</span>
        </a>
        <a href="#" className="nav-item">
          <Star size={20} />
          <span>Important</span>
        </a>
        <a href="#" className="nav-item">
          <Layout size={20} />
          <span>Planned</span>
        </a>
        <a href="#" className="nav-item">
          <Users size={20} />
          <span>Assigned to me</span>
        </a>
      </nav>

      <button className="add-list-button">
        <Plus size={20} />
        <span>Add list</span>
      </button>

      <div className="progress-section">
        <div className="progress-header">
          <span>Today Tasks</span>
          <span className="task-count">11</span>
        </div>
        <TaskProgress />
      </div>
    </aside>
  )
}

export default Sidebar

