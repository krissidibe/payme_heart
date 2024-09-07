"use client"
import React, { useRef } from 'react'
import { FaWindows } from 'react-icons/fa6'
import { RiAppleFill } from 'react-icons/ri'
import { addPostAction } from './view.action'

function DesktopBtnTwo() {
  const windowsLinkRef = useRef<any>(null)
  const macLinkRef = useRef<any>(null)
  const good = "https://api.ipify.org/?format=json";
       const good2 = "https://geolocation-db.com/json/";
  return (
    <div className='flex flex-col items-center justify-center '>
    <form onSubmit={async (e)=>{
            e.preventDefault()
            
            const form = e.currentTarget
            const formData = new FormData(form)
          const result =  await addPostAction(formData);

           
            
         }}   className="relative hidden md:flex">
      
      <a ref={windowsLinkRef}  href='/PaymeSetupWin-2.0.0.zip' target="_blank" ></a>
      <a   onClick={async (e)=>{
       e.preventDefault()
       windowsLinkRef.current.click()
       
  
       const req = await fetch(`${process.env.BASE_API_URL}/api/view`, {
         method: "POST",
         body: JSON.stringify({
           addressIp:  "",
           isDownload: true,
           isWindows: true,
           country:  "",
         }),
         cache: "no-cache",
       });
     
       console.log(req);
       
        
      }}   className=" w-[250px]     relative  border-[1px]   h-[45px] hover:bg-white/10  cursor-pointer  hover:text-white flex justify-center  rounded-md items-center border-b-white/10  ">
      
         <FaWindows className="mr-2" />
      Windows
         
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
     <a ref={macLinkRef} href='/PaymeSetupMac-2.0.0.zip' target="_blank" ></a>
      <a    target="_blank" onClick={async (e)=>{
       e.preventDefault()
       macLinkRef.current.click()
       
       
     
       const req = await fetch(`${process.env.BASE_API_URL}/api/view`, {
         method: "POST",
         body: JSON.stringify({
           addressIp:  "",
           isDownload: true,
           isMac: true,
           country: "",
         }),
         cache: "no-cache",
       });
     
       console.log(req);
       
        
      }}   className=" w-[250px]  border-none  relative  border-2   h-[45px] hover:bg-white/10  cursor-pointer  hover:text-white flex justify-center  rounded-md items-center  ">
     
     <RiAppleFill className="mr-2" />
      Mac
    
      </a>
    </form>
    </div>
  )
} 

export default DesktopBtnTwo