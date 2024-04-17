'use client'

import { SessionProvider } from "next-auth/react"
import { redirect } from "next/navigation";

export default function Provider ({
  children,
  session
}: {
  children: React.ReactNode
  session: any
}): React.ReactNode {

  if ( window.localStorage.getItem("accessToken") != "yoPMFApxOC1V9Vr4456cGkSb7AUeKckOF4xGgBed0ks") {
    redirect("/");
 }  

  return <SessionProvider session={session}>
    {children}
  </SessionProvider>
}