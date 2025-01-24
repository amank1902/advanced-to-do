import React from "react"
import "./CircularProgress.css"

const CircularProgress = ({ percentage }) => {
  const circumference = 2 * Math.PI * 45 // radius = 45
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="circular-progress">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle className="progress-bg" cx="50" cy="50" r="45" fill="none" stroke="#e5e5e5" strokeWidth="10" />
        <circle
          className="progress-bar"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#36B37E"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
        />
        <text x="50" y="50" className="progress-text">
          {Math.round(percentage)}%
        </text>
      </svg>
    </div>
  )
}

export default CircularProgress

