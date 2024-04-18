"use client"
import { Button } from '@/components/ui/button'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'
 
 export default function Deconnexion({children}:{children:React.ReactNode}) {
  if (localStorage.getItem("accessToken") != "yoPMFApxOC1V9Vr4456cGkSb7AUeKckOF4xGgBed0ks") {
    redirect("/");
 }  
    const router = useRouter()
   return (
      
    <Button  variant="outline" className='text-white' onClick={()=>{
   
        window.localStorage.removeItem("accessToken")
        router.push("/")
      }}>
 <p>Deconnexion</p>
      
      </Button>
   )
 }
 