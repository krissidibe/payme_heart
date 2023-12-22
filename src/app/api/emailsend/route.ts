import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma"; 
import nodemailer from 'nodemailer';   
import Welcome from "@/emails/Welcome";
import CodeOTP from "@/emails/CodeOTP";
import transporter from "@/lib/emailSend";
import { render } from "@react-email/components";
import CodeOTPFinance from "@/emails/CodeOTPFinance";
import ConfirmPassword from "@/emails/ConfirmPassword";


export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);


  const user = await prisma.user.findFirst({
    where: {
      email: searchParams.get("email")!,
      },
 })
  
    const data = await prisma.codeOTP.findFirst({
      where: {
        userId: user!.id,
        code:searchParams.get("code")!,
         
      },
   
    });  

    console.log(data);
    
    return new Response(JSON.stringify(data));

 // return new Response(JSON.stringify("ENTERPRISE GET"));
}

 




export async function POST(req:NextRequest,res:NextResponse) {
  
  const dataInfo:any = await req.json(); 
      const user = await prisma.user.findFirst({
        where: {
          email: dataInfo.email.toString(),
          },
     })

     if(user == null){

      return new Response(JSON.stringify(null));
    }
     

     
 
     //manager@paymefinance.com
    
     const emailHtml = render(ConfirmPassword({username:user!.name.toString()}));


      
      const options = {
        from: 'support@paymefinance.com',
        to:dataInfo.email!.toString(),
        subject: `Confirmation de Réinitialisation de Votre Mot de Passe`,
        html: emailHtml,
      };


    const data =  await transporter.sendMail(options);


  
   return new Response(JSON.stringify(user));
  
 }
 













 /* const transporter = nodemailer.createTransport({
        host: 'mail67.lwspanel.com',
        port: 465,
        secure: true,
        auth: {
          user: 'info@concours-fama.com',
          pass: 'Famaconc@2023',
        },
      });   */