import React, { useState } from 'react'
import { IoAddCircle } from "react-icons/io5"

export default function UserNav({ boards, onAddBoard, onSelectBoard, selectedBoardId }) {
  const [inputValue, setInputValue] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const handleAddClick = () => {
    setIsAdding(true)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSave = () => {
    if (inputValue.trim() !== '') {
      const newBoard = { id: Date.now().toString(), name: inputValue }
      onAddBoard(newBoard) 
      setInputValue('') 
      setIsAdding(false) 
    }
  }

  return (
    <div className="h-[calc(100vh-2rem)] w-[300px] m-4 border-1 text-white flex flex-col items-center justify-start pt-8 rounded-2xl overflow-auto">
      <div className="w-full px-4 flex flex-col items-center">
        {boards.map((board) => (
          <h2
            key={board.id}
            onClick={() => onSelectBoard(board.id)} 
            className={`text-lg font-medium m-2 text-center border border-gray-600 w-60 h-12 rounded-lg cursor-pointer flex items-center justify-center bg-gray-700 text-white hover:bg-gray-600 hover:shadow-md transition-all overflow-hidden ${
              selectedBoardId === board.id ? 'outline outline-2 outline-white' : ''
            }`}
          >
            {board.name}
          </h2>
        ))}

        {isAdding && (
          <div className="flex items-center mb-4">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter board name"
              className="flex-1 px-2 py-1 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSave}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
            >
              Save
            </button>
          </div>
        )}

        <button
          onClick={handleAddClick}
          className="flex items-center text-white rounded-md px-4 py-2 text-lg cursor-pointer gap-2 bg-blue-500 hover:bg-blue-600"
        >
          <IoAddCircle /> Add new board
        </button>
      </div>
    </div>
  )
}
