import React from 'react'
import google from "../assets/google.png";
import twitter from "../assets/twitter.png";
import phone from "../assets/phone.png";

function SocialIcons() {
  return (
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
  )
}

export default SocialIcons