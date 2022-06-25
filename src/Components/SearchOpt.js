import React from 'react'

export default function SearchOpt() {

  return (
    <div>
        <div className=' md:w-2/3 md:mr-[15%] md:ml-[15%] md:flex md:justify-between md:items-center border border-gray-200 md:p-5 rounded-md  md:bg-white md:drop-shadow-2xl'>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[28%] h-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue="US">Full Time</option>
        <option value="CA">Part Time</option>
        <option value="FR">College</option>
        </select>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[28%] h-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue="US">Remote</option>
        <option value="CA">In office</option>
        <option value="FR">On site</option>
        </select>
        <button className=' bg-[#ff7951] w-[28%] h-12 rounded-md text-center text-xl '>Search</button>
        </div>
    </div>
  )
}
