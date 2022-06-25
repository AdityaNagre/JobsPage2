import React from 'react'                             

export default function DiscoverJobsCard() {
    return (
        <>
        <div className='h-[250px] w-80 md:h-[22rem] md:w-2/3 overflow-auto md:p-[3rem] border border-gray-200 rounded-xl md:bg-white scrollbar'>
            <div className='md:flex md:p-2 md:justify-between'>
                <div className='md:w-[48.5%] pb-2 md:p-0'>
                    <a href="#" className="block p-2 md:p-3 max-w-sm bg-red-100 rounded-lg border border-gray-100 shadow-md hover:bg-red-200 ">
                    <p className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">Full Stack Developer</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">21.7K+ Jobs</p>
                    </a>
                </div>
                <div className='md:w-[48.5%] pb-2 md:p-0'>
                    <a href="#" className="block p-2 md:p-3 max-w-sm bg-cyan-100 rounded-lg border border-gray-100 shadow-md hover:bg-cyan-200 ">
                    <p className="mb-1 text-lg font-semibold tracking-tight text-gray-900 ">Full Stack Developer</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">21.7K+ Jobs</p>
                    </a>
                </div>
            </div>
        </div>
        </>
      )
}
