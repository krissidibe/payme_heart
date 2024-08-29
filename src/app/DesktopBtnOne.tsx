"use client"
import React, { useRef } from 'react'
import { FaWindows } from 'react-icons/fa6'
import { RiAppleFill } from 'react-icons/ri'
import { addPostAction } from './view.action'
import { Download } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DesktopBtnTwo from './DesktopBtnTwo'
 
function DesktopBtnOne() {
  const windowsLinkRef = useRef<any>(null)
  const macLinkRef = useRef<any>(null)
  const good = "https://api.ipify.org/?format=json";
       const good2 = "https://geolocation-db.com/json/";
  return (
    <div className='z-50'>


<DropdownMenu>
  <DropdownMenuTrigger className='hidden ring-0 focus:right-0 md:block '>
  <div onClick={()=>{


 


}} className="inline-flex gap-1  px-2   w-[250px]  cursor-pointer    cursor-pointer  h-[45px]  border-2  animate-shimmer items-center justify-center rounded-md   border-[#f7f7c9] bg-[linear-gradient(110deg,#00000051,45%,#636363,55%,#00000051)] bg-[length:200%_100%]    font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">

 

<p className="mr-2 font-bold text-[17px]" > Télécharger l'application</p> 

</div>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='w-[250px] bg-[#0e0e0e81] p-0 m-0'>
  <DesktopBtnTwo/>
  </DropdownMenuContent>
</DropdownMenu>



    
    </div>
  )
  return (
    <>
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
       
        
      }}   className=" w-[220px]  bg-[#0E0E0E] relative  border-2   h-[45px] hover:brightness-110  cursor-pointer border-[#bbbc8b] hover:text-white flex justify-center  rounded-md items-center  ">
      
       {/*   <Download className="mr-2" /> */}
      Télécharger l'application
         
      </a>
    </>
  )
}

export default DesktopBtnOne