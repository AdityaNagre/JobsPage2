import React, {useState,  useEffect} from 'react'
import SearchOpt from './SearchOpt'
import MobSearchOpt from './MobSearchOpt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function NavBar() {
  const [mob, setmob] = useState(window.innerWidth)

  const handleChange=()=>{
    setmob(window.innerWidth)
  }

  useEffect(() => {
    handleChange();
  }, [window.innerWidth])
  
  return (
    <>
    <div className='bg-[#bdeae7] md:sticky md:top-0 bg-auto bg-no-repeat bg-center space-y-5 h-16 md:h-[11.3rem]'>
        <div className=' flex justify-evenly items-center pt-4 md:pt-8  '>
            <a href='https://getjob-six.vercel.app/' className='text-3xl md:text-4xl font-semibold' target="_blank"><FontAwesomeIcon  icon={["far", "jedi"]}/>Get a Job Homie</a>
            <div className="hidden md:block">
                <form className="md:flex items-center pt-5 pr-10 pl-10  ">
                <label for="voice-search" className="sr-only">Search</label>
                <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <div className='flex bg-gray-50 dark:bg-gray-700 h-[2.8rem] md:h-[3rem] mb-4 md:mb-0 items-center rounded-l-lg rounded-r-lg'>
                <input type="text" id="voice-search" className="bg-white border  text-gray-900 text-sm rounded-lg block h-[2.7rem] md:h-[3rem] w-1/2 pl-10 p-2.5 rounded-r-none " placeholder="Job title, skills/companies" required="*"/>
                <input type="text" id="voice-search" className="bg-white h-[2.7rem] md:h-[3rem]  text-gray-900 text-sm rounded-lg  block  w-1/2 border-r-0 border-l-px border-t-0 border-b-0 rounded-l-none p-2.5 " placeholder="Enter Location" required="*"/>
                </div>
                <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
                </button>
                </div>
                <button type="submit" className="h-12 inline-flex items-center rounded-lg py-2.5 px-3 ml-2 text-md font-medium text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </form>
            </div>
        </div>
        {mob>768 && <SearchOpt/>}
    </div>
    {mob<=768 && <MobSearchOpt/>}
    </>
  )
}
