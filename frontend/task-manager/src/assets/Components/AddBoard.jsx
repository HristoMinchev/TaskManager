import React, { useState } from 'react'

export default function AddBoard() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("Backlog")
  const options = ["Backlog", "In Progress", "In Review", "Completed"]

  return (
    <div className="p-6 bg-[#242424] rounded-lg border-1 h-110 w-90">
      <h1 className="text-2xl font-bold text-white mb-6">Task Details</h1>
      
      <div className="mb-4">
        <form>
          <label htmlFor="Name" className="block text-sm font-medium text-gray-300 mb-2">
            Task Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter task name"
          />
        </form>
      </div>

      <div className="relative inline-block text-left mb-4">
        <p className="text-s font-semibold text-gray-300 mb-2">Status</p>
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-between w-full rounded-lg border border-gray-600 shadow-md px-4 py-2 bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {selectedOption}
            <svg
              className={`ml-2 h-5 w-5 transform transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div
            className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-gray-600 focus:outline-none z-10"
          >
            <div className="py-1">
              {options.map((option) => (
                <p
                  key={option}
                  onClick={() => {
                    setSelectedOption(option)
                    setIsOpen(false)
                  }}
                  className={`block px-4 py-2 text-sm cursor-pointer ${
                    selectedOption === option
                      ? "bg-blue-500 text-white"
                      : "text-gray-300 hover:bg-gray-600 hover:text-white"
                  }`}
                >
                  {option}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <form>
          <label htmlFor="Tag" className="block text-sm font-medium text-gray-300 mb-2">
            Info
          </label>
          <input
            type="text"
            name="tag"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter information"
          />
        </form>
      </div>
            <div className="flex items-center justify-center">
                <button
                  className="flex items-center justify-center text-white rounded-md px-4 py-2 text-lg cursor-pointer gap-2 bg-blue-500 hover:bg-blue-600 mt-5"
                >
                 Save
                </button>
            </div>
    </div>
  )
}
