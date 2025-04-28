import React, { useState } from 'react'
import { IoAddCircle } from "react-icons/io5"
import AddBoard from './AddBoard'

export default function Boards({ tasks, onAddBoard }) {
  const [clicked, isClicked] = useState(false)
  
  const backlogs = tasks.filter((task) => task.status === 'Backlog')
  const inProgress = tasks.filter((task) => task.status === 'In Progress')
  const inReview = tasks.filter((task) => task.status === 'In Review')
  const completed = tasks.filter((task) => task.status === 'Completed')

  return (
    <div className="flex-1 h-[calc(100vh-2rem)] m-5 p-5 border-1 rounded-xl text-white overflow-auto relative">
      <div className="flex flex-row gap-4">
        <div className="flex-1 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-4 border border-gray-600 p-4 rounded-lg">
            <span className="h-4 w-4 bg-blue-500 rounded-full"></span>
            <h2 className="text-lg font-bold">Backlogs</h2>
          </div>
          <div className="space-y-2">
            {backlogs.map((task, index) => (
              <div
                key={index}
                className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl mb-2 font-semibold">{task.name}</h3>
                <p className="text-sm text-gray-300">{task.info}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-4 border border-gray-600 p-4 rounded-lg">
            <span className="h-4 w-4 bg-yellow-500 rounded-full"></span>
            <h2 className="text-lg font-bold">In Progress</h2>
          </div>
          <div className="space-y-2">
            {inProgress.map((task, index) => (
              <div
                key={index}
                className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl mb-2 font-semibold">{task.name}</h3>
                <p className="text-sm text-gray-300">{task.info}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-4 border border-gray-600 p-4 rounded-lg">
            <span className="h-4 w-4 bg-purple-500 rounded-full"></span>
            <h2 className="text-lg font-bold">In Review</h2>
          </div>
          <div className="space-y-2">
            {inReview.map((task, index) => (
              <div
                key={index}
                className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl mb-2 font-semibold">{task.name}</h3>
                <p className="text-sm text-gray-300">{task.info}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-4 border border-gray-600 p-4 rounded-lg">
            <span className="h-4 w-4 bg-green-500 rounded-full"></span>
            <h2 className="text-lg font-bold">Completed</h2>
          </div>
          <div className="space-y-2">
            {completed.map((task, index) => (
              <div
                key={index}
                className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl mb-2 font-semibold">{task.name}</h3>
                <p className="text-sm text-gray-300">{task.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
              onAddBoard(newBoard) 
              isClicked(false) 
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
