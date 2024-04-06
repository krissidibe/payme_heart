"use client"
import React from 'react'
import ToggleButton from './ToggleButton'
import { useState } from 'react'
import Image from 'next/image'

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
  return (


<div className={`fixed z-50  ${isOpen ?" h-[220px]" : "h-[60px]" }  md:items-center  xl:h-[92px] flex  justify-center  w-screen bg-zinc-950/30 backdrop-blur-lg`}>
<div className="h-[52px] px-10 flex md:hidden relative    md:text-[14px]  xl:text-[16px] font-semibold max-w-7xl w-full    mt-0 items-center xl:px-0 md:px-14 justify-between ">
  <div className='flex flex-row justify-between flex-1 w-full'>

  
   
   <img src={"/images/logo-payme-complet.png"} width={140} height={50} />
    
    <ToggleButton isOpen={isOpen} handleClick={()=>{
         
         setIsOpen(x=>!x)
        }} />  
        </div>


        <div className={`${isOpen ? "scale-100 right-0 transition-all duration-300" :"scale-0 rotate-0 transition-all duration-300"} absolute z-50 flex flex-col h-[200px] w-full gap-2 px-10 py-4 rounded-md right-0   top-10`}>
          <p onClick={()=> setIsOpen(x=>!x)}  className="cursor-pointer hover:text-white">Acceuil</p>
          <p onClick={()=> setIsOpen(x=>!x)}  className="cursor-pointer hover:text-white">Caractéristiques</p>
          <p onClick={()=> setIsOpen(x=>!x)}  className="cursor-pointer hover:text-white">Cible</p>
          <p onClick={()=> setIsOpen(x=>!x)}  className="cursor-pointer hover:text-white">FAQ</p>
          <p onClick={()=> setIsOpen(x=>!x)}  className="cursor-pointer hover:text-white">Télécharger</p>
          <a  href={`mailto:contact@paymefinance.com?subject=${"object"}&body=${"message"}`}  className="cursor-pointer hover:text-white">Contactez-nous</a>
        </div>

     
  </div>
 <div className="h-[52px] hidden md:flex   md:text-[14px]  xl:text-[16px] font-semibold max-w-7xl w-full    mt-0 items-center xl:px-14 md:px-14 justify-between ">
    
   <img src={"/images/logo-payme-complet.png"} width={140} height={50} />
   <div className="flex gap-8 ">
     <a href="#index"  className="text-white">Acceuil</a>
     <a href="#caracteristique"  className="cursor-pointer hover:text-white">Caractéristiques</a>
     <a href="#cible"  className="cursor-pointer hover:text-white">Cible</a>
     <a href="#faq" className="cursor-pointer hover:text-white">FAQ</a>
     <a  href={`mailto:contact@paymefinance.com?subject=${"object"}&body=${"message"}`}  className="cursor-pointer hover:text-white">Contactez-nous</a>
   </div>

   <a href="#telecharger" className="w-[180px] border cursor-pointer hover:border-[#999A5B] hover:text-white flex justify-center   h-[45px] rounded-md items-center border-white/40 ">
   <p className="mr-2">  Obtenez l’app ici</p> <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1C9 0.447715 8.55228 -2.41412e-08 8 0C7.44772 2.41412e-08 7 0.447715 7 1L9 1ZM7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071L15.0711 7.34315C15.4616 6.95262 15.4616 6.31946 15.0711 5.92893C14.6805 5.53841 14.0474 5.53841 13.6569 5.92893L8 11.5858L2.34315 5.92893C1.95262 5.53841 1.31946 5.53841 0.928932 5.92893C0.538408 6.31946 0.538408 6.95262 0.928932 7.34315L7.29289 13.7071ZM7 1L7 13L9 13L9 1L7 1Z" fill="white" fill-opacity="0.7"/>
</svg>

   </a>
 </div>
 </div>
   
  )
}

export default MobileMenu


/*  */

