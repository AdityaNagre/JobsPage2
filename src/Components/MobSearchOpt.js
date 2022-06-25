import React from 'react'

export default function MobSearchOpt() {

  return (
    <>
    <div className='bg-white flex flex-wrap justify-center my-4'>
    <select id="small" class="block p-2 mb-2 w-2/3 text-sm text-gray-900 bg-gray-50 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option defaultValue="US">Full Time</option>
    <option value="CA">Part Time</option>
    <option value="FR">College</option>
    </select>
    <select id="default" class="bg-gray-50 w-2/3 border border-gray-300 text-gray-900 mb-2 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option defaultValue="US">Full Time</option>
    <option value="CA">Part Time</option>
    <option value="FR">College</option>
    </select>
    <button className=' bg-[#ff7951] w-2/3 text-xl rounded-md p-0.5'>Search</button>
    </div>
    </>
  )
}

