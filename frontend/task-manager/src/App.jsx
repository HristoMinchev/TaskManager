import { useState } from 'react'
import './App.css'
import UserNav from './assets/Components/UserNav.jsx'
import Boards from './assets/Components/Boards.jsx'

function App() {
  const [boards, setBoards] = useState([]) // Initialize with an empty array
  const [selectedBoardId, setSelectedBoardId] = useState(null) // No board selected initially

  const handleAddBoard = (newBoard) => {
    setBoards([...boards, { ...newBoard, tasks: [] }]) // Add the new board with an empty tasks array
    setSelectedBoardId(newBoard.id) // Switch to the newly created board
  }

  const handleAddTask = (boardId, task) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        board.id === boardId
          ? { ...board, tasks: [...board.tasks, task] } // Add the task to the selected board
          : board
      )
    )
  }

  const selectedBoard = boards.find((b) => b.id === selectedBoardId)

  return (
    <div className="flex h-screen w-screen">
      {/* Pass boards, handleAddBoard, and setSelectedBoardId to UserNav */}
      <UserNav
          boards={boards}
          onAddBoard={handleAddBoard}
          onSelectBoard={setSelectedBoardId}
          selectedBoardId={selectedBoardId} // Pass the selected board ID
      />
      {/* Pass selectedBoard and handleAddTask to Boards */}
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
  )
}

export default App
