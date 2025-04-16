import React from "react";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";


function SignUp() {
  return (
    <div className="signup px-4 py-2">
      <div className="flex flex-col justify-center items-center">
        <img src={logo2} alt="" className="mr-6" />
        <div className="text-center relative bottom-10">
            <h2 className="text-2xl font-bold">Create Account</h2>
            <p>Lendsia. Quick loans, no hassle. </p>
        </div>
      </div>
      <form className="p-4">
      <div className="mt-2">
          <label htmlFor="email" className="font-medium">
            Username
          </label>
          <input
            type="text"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="text"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="email" className="font-medium">
            Phone number
          </label>
          <input
            type="text"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
        <button type="button" className="w-full mt-10 text-white bg-blue-500 p-2 rounded-sm hover:bg-blue-600 transition duration-200 ease-in-out">
          Signup
        </button>
      </form>
      <SocialIcons />
    </div>
  );
}

export default SignUp;
