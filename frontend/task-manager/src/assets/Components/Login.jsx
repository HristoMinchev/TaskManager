import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim() && password.trim()) {
      onLogin({ email, password })
      navigate('/') 
    } else {
      alert('Please fill in both fields.')
    }
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: '#242424' }} 
    >
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-gray-700 rounded-lg shadow-md w-80"
      >
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Login
        </h1>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Login
        </button>

        <div className="mt-4 text-center">
          <span className="text-gray-300">Don't have an account? </span>
          <Link
            to="/register"
            className="text-blue-400 hover:underline"
          >
            Register here
          </Link>
        </div>
      </form>
    </div>
  )
}