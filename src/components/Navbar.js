import React from "react"
import { Search, Grid, Sun, Moon } from "react-feather"
import "./Navbar.css"

const Navbar = ({ isDark, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-button">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <img src="/logo.svg" alt="DoIt" className="logo" />
      </div>

      <div className="navbar-right">
        <button className="nav-button">
          <Search size={20} />
        </button>
        <button className="nav-button">
          <Grid size={20} />
        </button>
        <button className="nav-button" onClick={toggleTheme}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar

