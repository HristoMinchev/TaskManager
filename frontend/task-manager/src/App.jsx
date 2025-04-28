import { useState } from 'react'
import './App.css'
import UserNav from './assets/Components/UserNav.jsx'
import Boards from './assets/Components/Boards.jsx'

function App() {
  const [boards, setBoards] = useState([]) 
  const [selectedBoardId, setSelectedBoardId] = useState(null) 

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

  return (
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
  )
}

export default App
