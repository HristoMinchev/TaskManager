import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserNav from './assets/Components/UserNav.jsx'
import Boards from './assets/Components/Boards.jsx'
import AddBoard from './assets/Components/AddBoard.jsx'

function App() {
  return (
    <div className="flex h-screen w-screen">
      <UserNav />
      <Boards />
    </div>
  )
}

export default App
