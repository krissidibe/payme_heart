"use client"
import React, { useRef } from 'react'
import { FaWindows } from 'react-icons/fa6'
import { RiAppleFill } from 'react-icons/ri'
import { addPostAction } from './view.action'

function DesktopBtn() {
  const windowsLinkRef = useRef<any>(null)
  const macLinkRef = useRef<any>(null)
  const good = "https://api.ipify.org/?format=json";
       const good2 = "https://geolocation-db.com/json/";
  return (
    <>
    <form onSubmit={async (e)=>{
            e.preventDefault()
            
            const form = e.currentTarget
            const formData = new FormData(form)
          const result =  await addPostAction(formData);

           
            
         }}   className="relative hidden md:flex">
      
      <a ref={windowsLinkRef}  href='/PaymeSetupWin-1.0.0.zip' target="_blank" ></a>
      <a   onClick={async (e)=>{
       e.preventDefault()
       windowsLinkRef.current.click()
       
       const req2 = await fetch(good2, {
         method: "GET",
         cache: "no-cache",
       });
       const dataIp = await req2.json();
     
       const req = await fetch(`${process.env.BASE_API_URL}/api/view`, {
         method: "POST",
         body: JSON.stringify({
           addressIp: dataIp?.IPv4 ?? "",
           isDownload: true,
           isWindows: true,
           country:
             `${dataIp?.country_name} - ${dataIp?.state} @${dataIp?.country_code}` ??
             "",
         }),
         cache: "no-cache",
       });
     
       console.log(req);
       
        
      }}   className=" w-[160px]  bg-[#0E0E0E] relative  border-2   h-[45px] hover:brightness-110  cursor-pointer border-[#bbbc8b] hover:text-white flex justify-center  rounded-md items-center  ">
      
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
     <a ref={macLinkRef} href='/PaymeSetupMac-1.0.0.zip' target="_blank" ></a>
      <a    target="_blank" onClick={async (e)=>{
       e.preventDefault()
       macLinkRef.current.click()
       
       const req2 = await fetch(good2, {
         method: "GET",
         cache: "no-cache",
       });
       const dataIp = await req2.json();
     
       const req = await fetch(`${process.env.BASE_API_URL}/api/view`, {
         method: "POST",
         body: JSON.stringify({
           addressIp: dataIp?.IPv4 ?? "",
           isDownload: true,
           isMac: true,
           country:
             `${dataIp?.country_name} - ${dataIp?.state} @${dataIp?.country_code}` ??
             "",
         }),
         cache: "no-cache",
       });
     
       console.log(req);
       
        
      }}   className=" w-[160px] bg-[#0E0E0E] relative  border-2   h-[45px] hover:brightness-110  cursor-pointer border-[#bbbc8b] hover:text-white flex justify-center  rounded-md items-center  ">
     
     <RiAppleFill className="mr-2" />
      Mac
    
      </a>
    </form>
    </>
  )
}

export default DesktopBtn