import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma"; 
import nodemailer from 'nodemailer';   
import { render } from "@react-email/components";
import Welcome from "@/emails/Welcome";



export async function POST(req:NextRequest,res:NextResponse) {

  
 // host: 'smtp.gmail.com',
   const transporter = nodemailer.createTransport({
        host: 'mail.paymefinance.com',
        port: 465,
        secure: true,
        auth: {
          user: 'contact@paymefinance.com',
          pass: 'hE2@T14GUB4pqV*',
        },
      });    
     
       
  const emailHtml = render(Welcome({username:"Aly boubacar gatta"}));
 
  const numbers = '0123456789';
 
  let numbersPart = '';
    
    for (let i = 0; i < 4; i++) {
      numbersPart += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }


    //manager@paymefinance.com
      
      const options = {
        from: 'contact@paymefinance.com',
        to: 'alyboubacargatta@gmail.com',
        subject: `Confirmation de votre nouvel abonnement`,
        html: emailHtml,
      };


    const data =  await transporter.sendMail(options);
console.log(data);

  
   return new Response(JSON.stringify(data));
  
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