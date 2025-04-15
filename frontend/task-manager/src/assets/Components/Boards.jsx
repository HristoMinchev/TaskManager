import React, { useState } from 'react'
import { IoAddCircle } from "react-icons/io5"
import AddBoard from './AddBoard'

export default function Boards({ tasks, onAddBoard }) {
  const [clicked, isClicked] = useState(false)

  return (
    <div className="flex-1 h-[calc(100vh-2rem)] m-5 p-5 border-1 rounded-xl text-white overflow-auto relative">
      <div className="flex flex-row gap-4">
        <div className="flex-1 border border-gray-600 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 bg-blue-500 rounded-full"></span>
            <h2>Backlogs</h2>
          </div>
        </div>
        <div className="flex-1 border border-gray-600 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 bg-yellow-500 rounded-full"></span>
            <h2>In Progress</h2>
          </div>
        </div>
        <div className="flex-1 border border-gray-600 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 bg-purple-500 rounded-full"></span>
            <h2>In Review</h2>
          </div>
        </div>
        <div className="flex-1 border border-gray-600 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 bg-green-500 rounded-full"></span>
            <h2>Completed</h2>
          </div>
        </div>
      </div>
      <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task.name}, {task.info}</li>
            ))}
        </ul>

      <button
        onClick={() => isClicked(true)}
        className="absolute bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 flex items-center justify-center cursor-pointer"
      >
        <IoAddCircle size={34} />
      </button>

      {clicked && (
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-10">
          <div className="relative">
            <AddBoard onAdd={(newBoard) => {
              onAddBoard(newBoard) // Pass the new board to App.jsx
              isClicked(false) // Close the modal
            }} />
            <button
              onClick={() => isClicked(false)}
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
