import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import CodeOTPFinance from "@/emails/CodeOTPFinance";
import transporter from "@/lib/emailSend";
import { render } from "@react-email/components";
import DeleteUser from "@/emails/DeleteUser";
import DeleteUserUser from "@/emails/DeleteUserUser";
import bcrypt from "bcryptjs";

export async function GET(req: NextRequest, res: NextResponse) {
 const { searchParams } = new URL(req.url);
 
 
  
    const data = await prisma.user.findFirst({
      where: {
        id: searchParams.get("userId")!,
         
      },
   include:{
    enterprise:{
      include:{
        creditIA:true
      }
    },
    customers:true, 
    subscribe:{
      include:{
         payment:true 
        }
      },
    payments:{
      include:{
        subscribe:true,
        creditIA:true
      }
    } ,
    invoice:true
  
  }
    });
  
    return new Response(JSON.stringify(data));

 // return new Response(JSON.stringify("ENTERPRISE GET"));
}



 

 


export async function PATCH(req:NextRequest,res:NextResponse) {
  const { searchParams } = new URL(req.url);



  if (searchParams.get("stripeCustomerId") != null) {
    
    const  userData:any = await req.json();
 
 
    const enterprise = await prisma.user.update({
      where: {
        id: searchParams.get("userId")!,
      },
       data: {
        stripeCustomerId : userData.stripeCustomerId, 
         },
    })

   
    

 return new Response(JSON.stringify(enterprise));
   }

 



}

 
