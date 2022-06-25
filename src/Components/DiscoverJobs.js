import React, {useState, useEffect} from 'react'
import DiscoverJobsCard from './DiscoverJobsCard'

export default function DiscoverJobs() {
    // const [toggle, settoggle] = useState(false)

    // const fetchAPI=async ()=>{
    //   let url="https://remotive.com/api/remote-jobs?category=software-dev"
    //   const data=await fetch(url)
    //   const parsedData= await data.json();
    // }
  
  
    // useEffect(() => {
    //   fetchAPI();
    // }, [])
  return (
    <div>
        <div className='md:hidden flex justify-center items-center pt-4 rounded-t-xl bg-[#bdeae7] '>
        <img src="https://drive.google.com/uc?export=view&id=1K9IFRdQZdZN43PZOOsVi1nHoi5BNG2NP" alt="" className='h-10 w-10'/>
        <p>Discover Jobs Across Roles</p>
        </div>
        <div className='flex justify-around  bg-[#bdeae7] pt-4 pb-4 md:h-[20rem] md:mb-20 md:mt-20 md:w-2/3 md:ml-[15%] md:mr-[15%] md:rounded-xl border-none md:p-20 md:items-center rounded-xl rounded-t-none '>
            <div className='hidden md:block w-1/4'>
                <img src="https://drive.google.com/uc?export=view&id=1K9IFRdQZdZN43PZOOsVi1nHoi5BNG2NP" alt="" className='h-24 w-24'/>
                <p className='text-xl font-semibold'>Discover jobs across popular roles</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">Select a role and we'll show you relevant jobs for it!</p>
            </div>
            <DiscoverJobsCard/>
        </div>

    </div>
  )
}
