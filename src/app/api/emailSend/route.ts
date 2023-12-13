import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma"; 
import nodemailer from 'nodemailer'; 
//import HelloEmail from "../../../../emails/HelloEmail";



export async function POST(req:NextRequest,res:NextResponse) {

  
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'assowlove@gmail.com',
          pass: 'bciy bsvi ygcf ephh',
        },
      });
      
  //const emailHtml = render(HelloEmail());
      
      const options = {
        from: 'assowlove@gmail.com',
        to: 'assowlove@gmail.com',
        subject: 'hello world email',
        html:"emailHtml" ,
      };


    const data =  await transporter.sendMail(options);

  
   return new Response(JSON.stringify(data));
  
 }
 