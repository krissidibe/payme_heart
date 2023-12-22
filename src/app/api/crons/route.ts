import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma"; 
import nodemailer from 'nodemailer';   
import Welcome from "@/emails/Welcome";
import CodeOTP from "@/emails/CodeOTP";
import transporter from "@/lib/emailSend";
import { render } from "@react-email/components"; 

export async function GET(req: NextRequest, res: NextResponse) {
    const { searchParams } = new URL(req.url);
  
  
  
  
      console.log("data");
      
      return new Response(JSON.stringify("data"));
  
   // return new Response(JSON.stringify("ENTERPRISE GET"));
  }
  