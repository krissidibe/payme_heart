import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Payme',
  description: 'Simplifier votre gestion financière avec Payme',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="fr" className='!scroll-smooth no-scrollbar w-full h-full no-scrollbar' >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
