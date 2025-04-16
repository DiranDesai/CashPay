import React from 'react'
import logo from '../assets/logo.png'

function Login() {
  return (
    <div className="px-4 py-2">
        <div className="flex flex-col justify-center items-center">
            <img src={logo} alt="" className="" />
        </div>
        <form>
            <div className="mt-4">
                <label htmlFor="email" className="font-medium">Email</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="mt-5">
                <label htmlFor="password" className="font-medium">Password</label>
                <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <button type="button" className="bg-red-700 w-full mt-10 text-white">Login</button>
        </form>
    </div>
  )
}

export default Login