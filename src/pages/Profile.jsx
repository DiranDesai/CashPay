import React from 'react'
import { ArrowLeftIcon, CheckBadgeIcon, LockClosedIcon, UserGroupIcon, InformationCircleIcon, ShoppingBagIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import TopBar from '../components/TopBar'
import profilePic from '../assets/profile.avif'
import ProfileMenu from '../components/ProfileMenu';

function Profile() {
  return (
    <div className="px-4 py-2">
        <TopBar />
        <ArrowLeftIcon className="h-6 w-6 font-bold text-gray-500" />
        <div className="flex justify-center items-center mt-4">
            <div className="flex flex-col justify-center items-center space-y-1">
                <h2 className="text-xl font-[500]">My profile</h2>
                <img src={profilePic} className="w-25 h-25 mt-5 rounded-full" alt="" />
                <h2 className="text-md font-[500]">Oladele Joshua</h2>
                <p className="font-bold text-sm">Teacher</p>
            </div>
        </div>
        <ProfileMenu Icon={<CheckBadgeIcon />} title="Credit limit"/>
        <ProfileMenu Icon={<CalendarDaysIcon />} title="Bank cards"/>
        <ProfileMenu Icon={<UserGroupIcon />} title="Invite friends"/>
        <ProfileMenu Icon={<LockClosedIcon />} title="Account settings"/>
        <ProfileMenu Icon={<InformationCircleIcon />} title="Help and feedback"/>
        <ProfileMenu Icon={<ShoppingBagIcon />} title="Online services"/>
        <button className="bg-blue-600 text-white p-4 rounded-sm w-full my-10">Sign Out</button>
    </div>
  )
}

export default Profile