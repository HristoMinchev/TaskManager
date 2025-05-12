import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import UserNav from './assets/Components/UserNav.jsx'
import Boards from './assets/Components/Boards.jsx'
import Login from './assets/Components/Login.jsx'
import Register from './assets/Components/Register.jsx'

function App() {
  const [boards, setBoards] = useState([])
  const [selectedBoardId, setSelectedBoardId] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false) 

  const handleAddBoard = (newBoard) => {
    setBoards([...boards, { ...newBoard, tasks: [] }])
    setSelectedBoardId(newBoard.id)
  }

  const handleAddTask = (boardId, task) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        board.id === boardId
          ? { ...board, tasks: [...board.tasks, task] }
          : board
      )
    )
  }

  const selectedBoard = boards.find((b) => b.id === selectedBoardId)

  const handleLogin = () => {
    setIsAuthenticated(true) 
  }

  const handleRegister = () => {
    setIsAuthenticated(true) 
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Register onRegister={handleRegister} />
            )
          }
        />

        <Route
          path="/"
          element={
            isAuthenticated ? (
              <div className="flex h-screen w-screen">
                <UserNav
                  boards={boards}
                  onAddBoard={handleAddBoard}
                  onSelectBoard={setSelectedBoardId}
                  selectedBoardId={selectedBoardId}
                />
                {selectedBoard ? (
                  <Boards
                    tasks={selectedBoard.tasks}
                    onAddBoard={(task) => handleAddTask(selectedBoardId, task)}
                  />
                ) : (
                  <div className="flex-1 flex items-center justify-center text-gray-400">
                    Select or create a board to get started
                  </div>
                )}
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  )
}

export default App
