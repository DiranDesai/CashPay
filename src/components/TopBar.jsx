import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

function TopBar() {
  return (
    <div>
      <ArrowLeftIcon className="h-6 w-6 font-bold text-gray-500 rounded-full p-2 hover:bg-red" />
    </div>
  )
}

export default TopBar