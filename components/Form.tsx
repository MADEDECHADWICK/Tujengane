"use client"
import { createPost } from './actions'
 
export function Form() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4"
    style={{
      backgroundImage: 'url(/images/wall4.PNG)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    >
      <h1 className="text-3xl font-bold text-grey-800 mb-4">Great Minds Meet Here</h1>
      <h1 className="text-3xl font-bold text-white mb-4">Register</h1>
      <form
    action={createPost}
    className="flex flex-col items-center justify-center p-6 bg-blue-800 rounded-lg shadow-lg"
  >
    
    <input
      type="text"
      name="username"
      placeholder="Username"
      className="w-full max-w-md p-2 mb-4 text-black bg-gray-200 rounded focus:outline-none focus:ring focus:ring-blue-500"
      required
    />
    <input
      type="email"
      id="email"
      placeholder="Email Address"
      className="w-full max-w-md p-2 mb-4 text-black bg-gray-200 rounded focus:outline-none focus:ring focus:ring-blue-500"
      required
    />
     <input
      type="password"
      id="password"
      placeholder='Password'
      className="w-full max-w-md p-2 mb-4 text-black bg-gray-200 rounded focus:outline-none focus:ring focus:ring-blue-500"
      required
    />
     <input
      type="password"
      id="confirmPassword"
      placeholder='Confirm Password'
      className="w-full max-w-md p-2 mb-4 text-black bg-gray-200 rounded focus:outline-none focus:ring focus:ring-blue-500"
      required
    />
    <button
      type="submit"
      className="w-full max-w-md px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
    >
      Create
    </button>
  </form>
</div>
    
  )
}