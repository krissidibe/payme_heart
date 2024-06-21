import '../../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from './_components/Sidebar'
import { Toaster } from "@/components/ui/sonner" 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Payme Admin',
  
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
   
  return (

   
<div  className="w-screen min-w-full  h-screen flex min-h-screen bg-[#060606] text-white">
   {/*  */}
  <Sidebar/>  
  <Toaster />
        <main className='w-full p-10 '>

        {children}
        </main>
        </div>

  
    
      
   
  )
}
