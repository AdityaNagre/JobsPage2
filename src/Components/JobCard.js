import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-regular-svg-icons'

export default function JobCard(props) {

  return (
    <>
        <a href={props.link} className='md:w-2/3 md:mr-[15%] md:ml-[15%] flex justify-between items-center bg-[#bdeae7] rounded-md mt-5 md:mt-14 md:p-5 p-3 shadow-xl md:hover:shadow-xl md:hover:shadow-gray-400 md:hover:border-l-4 md:hover:border-stone-800'>
          <div className='flex-col space-y-2 w-3/12  md:p-1'>
            <p className='text-md md:text-2xl text-black font-medium'>{props.job}</p>
            <p className='text-sm md:text-xl text-black '>{props.company}</p>
          </div>
          <div className='flex justify-center flex-wrap space-x-2 w-1/3 h-16 md:h-auto overflow-auto scrollbar py-3 md:py-2 '>
          {props.tags.map((e, index)=>{
            return <button key={index} className="bg-black rounded-sm md:rounded-md text-sm text-white p-0.5 md:p-1 md:mb-1 mb-0.5">{e}</button>
          })}
          </div>
          <div className='space-y-2 w-1/4'>
            <div className='flex items-center justify-end '>
              <img src={props.logo} alt="logo"  className='h-14 rounded-md'/>
            </div>
            <p className='hidden text-sm text-black md:flex justify-end md:items-center'><FontAwesomeIcon icon={faAddressBook}/> {props.timing} | <FontAwesomeIcon icon={faLocationPin}/> {props.site}</p>
            <p className='md:hidden text-sm text-black flex justify-end items-center'> <FontAwesomeIcon icon={faAddressBook}/>{props.timing}</p>
            <p className='md:hidden text-sm text-black flex justify-end items-center'> <FontAwesomeIcon icon={faLocationPin}/>{props.site}</p>
            <p className='text-md text-black flex justify-end'>{props.salary.replace('annually',"")} </p>
          </div>
        </a>
    </>
  )
}
export {  }
