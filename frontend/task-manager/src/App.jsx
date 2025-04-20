import { useState } from 'react'
import './App.css'
import UserNav from './assets/Components/UserNav.jsx'
import Boards from './assets/Components/Boards.jsx'

function App() {
  const [boards, setBoards] = useState([]) // State to manage boards

  const handleAddBoard = (newBoard) => {
    setBoards([...boards, newBoard]) // Add the new board to the list
  }

  return (
    <div className="flex h-screen w-screen">
      <UserNav />
      <Boards tasks={boards} onAddBoard={handleAddBoard} />
    </div>
  )
}

export default App