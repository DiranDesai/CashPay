import React from 'react'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'
import google from '../assets/google.png'
import twitter from '../assets/twitter.png'
import phone from '../assets/phone.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="px-4 py-2">
        <div className="flex flex-col justify-center items-center">
            <img src={logo2} alt="" className="mr-6" />
        </div>
        <form>
            <div className="mt-2">
                <label htmlFor="email" className="font-medium">Email</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="mt-5">
                <label htmlFor="password" className="font-medium">Password</label>
                <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="flex justify-end mt-2">
                <span className="text-sm font-medium"><Link>forgot password</Link></span>
            </div>
            <button type="button" className="w-full mt-10 text-white">Login</button>
            <div className="flex justify-center items-center mt-4 space-x-7 mt-10">
                <div className="bg-white p-5 shadow-md w-15 rounded-full h-15">
                    <img src={google} alt="" />
                </div>
                <div className="bg-white p-5 shadow-md w-15 rounded-full h-15">
                <img src={phone} alt="" />
                </div>
                <div className="bg-white p-5 shadow-md w-15 rounded-full h-15">
                <img src={twitter} alt="" />
                </div>
            </div>
            <div className="flex justify-center items-center mt-4 space-x-2 font-sm">
                <p className="text-sm">Don't have an account?</p>
                <Link to="/signup" className="text-blue-700">Sign Up</Link>
            </div>
        </form>
    </div>
  )
}

export default Login