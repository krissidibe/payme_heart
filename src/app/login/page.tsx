"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import {signIn, useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
function Login() {
  const router = useRouter()
  return (
    <div className='flex items-center justify-center h-full '>

    <form 
    onSubmit={ async (e)=>{
      e.preventDefault()
  
  
  
              
      
      
      const form = e.currentTarget
      const formData = new FormData(form) 
  
      console.log(formData.get("email") as string);

       
      const result = await   signIn("credentials",{
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        redirect: false
      })
      

  
      
      if(result?.error){
        toast.error(result.error);
        return;
      }
      console.log(result);
      

      window.localStorage.setItem("accessToken","yoPMFApxOC1V9Vr4456cGkSb7AUeKckOF4xGgBed0ks");
     
       
      router.push("/admin")
      //router.push("/home")
  
      return;
 
     }}
    className="flex flex-col w-full max-w-md gap-4 mx-auto">
    <img className='self-center mb-4' src={"/images/logo-payme-complet.png"} width={300} height={100} />
    
     
    <Input name="email" placeholder="Email" />
      <Input name="password" placeholder="Mot de passe" type='password' />
      <Button>Se connecter</Button>
    </form>
    </div>
  )
}

export default Login