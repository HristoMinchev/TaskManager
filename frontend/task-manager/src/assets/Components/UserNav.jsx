import React from 'react'
import { IoAddCircle } from "react-icons/io5"

export default function UserNav() {
  return (
    <div 
      className="h-[calc(100vh-2rem)] w-[300px] m-4 border-1 text-white flex flex-col items-center justify-start py-4 rounded-2xl overflow-auto"
    >
      <div>
        <button 
          className="flex items-center text-white rounded-md px-4 py-2 text-lg cursor-pointer gap-2 bg-blue-500 hover:bg-blue-600"
        >
          <IoAddCircle /> Add new board
        </button>
      </div>
    </div>
  )
}
