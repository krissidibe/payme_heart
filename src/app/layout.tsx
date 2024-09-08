import { TooltipProvider } from '@/components/ui/tooltip'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Payme',
  description: 'Simplifier votre gestion financière avec Payme',
  icons: {
    icon: '/icon.png', // /public path
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="fr" className='!scroll-smooth no-scrollbar w-full h-full no-scrollbar' >

      <body className={inter.className}>
      <TooltipProvider>
        {children}
      </TooltipProvider>
        </body>
    </html>
  )
}

/*  window.localStorage.getItem("appversion") */