import React from 'react'

export default function Dialog() {
  return (
    <div className='bg-zinc-200 opacity-80  fixed  inset-0 z-50 flex justify-center items-center'>
        <div className='bg-white p-5 space-y-4 md:w-5/12 rounded-md opacity-100'>
        <div className='flex justify-between'>
            <p className='text-2xl font-semibold md:mb-10'>Frontend Developer @ Google</p>
            <a href="#">x</a>
        </div>
        <div className='space-y-1'>
            <p><span className='text-sm'>Posted on:</span> 25/Aug/2020 7:08</p>
            <p><span className='text-sm'>Job type:</span> Full time</p>
            <p><span className='text-sm'>Job location:</span> Remote</p>
            <p><span className='text-sm'>Company: </span>Google</p>
            <p><span className='text-sm'>Salary: </span>1cr pa</p>
            <p><span className='text-sm'>Skills: </span>sth</p>
        </div>
        <div className='flex justify-end'>
        <a href="#">
        <button class="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span class="px-2 py-1.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                  Apply
              </span>
            </button>
            </a>
        </div>
        </div>
    </div>
  )
}
