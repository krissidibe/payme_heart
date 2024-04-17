"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
 
 export default function Deconnexion({children}:{children:React.ReactNode}) {
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
 