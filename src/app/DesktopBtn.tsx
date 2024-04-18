"use client"
import React from 'react'
import { FaWindows } from 'react-icons/fa6'
import { RiAppleFill } from 'react-icons/ri'
import { addPostAction } from './view.action'

function DesktopBtn() {
  return (
    <>
    <form onSubmit={async (e)=>{
            e.preventDefault()
            
            const form = e.currentTarget
            const formData = new FormData(form)
          const result =  await addPostAction(formData);

           
            
         }}   className="relative hidden md:flex">
      
       
      <a href='/public/PaymeSetupWin-1.0.0.zip'  className=" w-[160px]  bg-[#0E0E0E] relative  border-2   h-[45px] hover:brightness-110  cursor-pointer border-[#bbbc8b] hover:text-white flex justify-center  rounded-md items-center  ">
         <button className='flex items-center justify-center w-full'>
         <FaWindows className="mr-2" />
      Windows
         </button>
      </a>
    </form>
   <form
   
   onSubmit={async (e)=>{
    e.preventDefault()
    
    const form = e.currentTarget
    const formData = new FormData(form)
  const result =  await addPostAction(formData);

   
    
 }}  
   
   className="relative hidden md:flex">
     
      <a  href='/public/PaymeSetupMac-1.0.0.zip' className=" w-[160px] bg-[#0E0E0E] relative  border-2   h-[45px] hover:brightness-110  cursor-pointer border-[#bbbc8b] hover:text-white flex justify-center  rounded-md items-center  ">
     <button className='flex items-center justify-center w-full'>
     <RiAppleFill className="mr-2" />
      Mac
     </button>
      </a>
    </form>
    </>
  )
}

export default DesktopBtn