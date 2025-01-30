"use client"
import React from 'react';


const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-blue-800 bg-opacity-70 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-500">Login</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-white">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 text-black bg-gray-200 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 text-black bg-gray-200 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-white">
          Don&apos;t have an account? <a href="/registration" className="text-blue-500">Register</a>
        </p>
      </div>
    </div>

  )
}

export default Login