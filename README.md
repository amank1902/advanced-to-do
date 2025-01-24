# Advanced Todo Application

## Project Overview

This project is an advanced Todo application built with React and Redux. It features a responsive design, user authentication, task management with various views, and a dark/light theme toggle.

## Tech Stack

- **Frontend Framework**: React
- **State Management**: Redux with Redux Thunk
- **Routing**: React Router
- **Styling**: CSS with custom variables for theming
- **Icons**: Feather Icons

## Libraries and Dependencies

- react
- react-dom
- react-redux
- redux
- redux-thunk
- react-router-dom
- react-feather

## Features

1. User Authentication (mock implementation)
2. Task Management
   - Add, edit, delete tasks
   - Mark tasks as complete/incomplete
   - Mark tasks as important
3. Multiple Views
   - All Tasks
   - Today
   - Important
   - Planned
   - Assigned to me
4. Custom Lists
   - Create new lists
   - Add tasks to specific lists
5. Task Filtering
6. Responsive Design
7. Dark/Light Theme Toggle
8. Task Progress Tracking

## Project Structure

- `src/`
  - `components/`: React components
  - `actions/`: Redux actions
  - `reducers/`: Redux reducers
  - `styles/`: CSS files
  - `App.js`: Main application component
  - `index.js`: Entry point
  - `store.js`: Redux store configuration

## Key Components

1. `TodoApp`: Main component that renders the application
2. `Sidebar`: Navigation and list management
3. `TaskList`: Displays tasks based on the current view
4. `TaskInput`: Form for adding new tasks
5. `TaskDetail`: Detailed view and editing of a task
6. `Login`: User authentication form

## State Management

The application uses Redux for state management. The main slices of state are:

- `auth`: User authentication state
- `todos`: List of all tasks
- `lists`: Custom user-created lists

## Styling

The application uses custom CSS with variables for easy theming. The theme (light/dark) can be toggled by the user.

## Authentication

The current implementation uses a mock authentication system. In a production environment, this should be replaced with a proper backend authentication service.

## API Integration

This project currently does not use any external APIs for data fetching. All data is managed locally using Redux. However, it's designed in a way that makes it easy to integrate with a backend API in the future.

## Getting Started

1. Clone the repository
2. Install dependencies:
   `npm install`
3. Start the development server:
 `npm start`

## Future Improvements

- Integrate with a backend API for data persistence
- Implement real authentication
- Add due dates and reminders for tasks
- Implement drag-and-drop for task reordering
- Add data visualization for task completion statistics


