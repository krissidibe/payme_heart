import '../../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from './_components/Sidebar'
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/lib/authOption';
import { redirect } from 'next/navigation';
import Provider from '@/lib/AuthContext';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Payme Admin',
  
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);

  return (

    <Provider session={session}>


<div  className="w-screen min-w-full  h-screen flex min-h-screen bg-[#060606] text-white">
      <Sidebar/>
        <main className='w-full p-10 '>

        {children}
        </main>
        </div>

    </Provider>
    
      
   
  )
}
