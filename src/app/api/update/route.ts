import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";






export async function GET(req:NextRequest,res:NextResponse) {
    const { searchParams } = new URL(req.url);
 
 
 const datas = await prisma.appVersion.findFirst({
      
   
 })

 

  
   return new Response(JSON.stringify(datas));
  
  }



/* export async function POST(req:NextRequest,res:NextResponse) {
    const { searchParams } = new URL(req.url);
    const  dataGet:any = await req.json();
 
 
      const enterprise = await prisma.webView.create({
      
         data: { 
            addressIp:dataGet.addressIp ?? "",
            country:dataGet?.country ?? "",
            isDownload:dataGet?.isDownload ? true : false,
            
           },
      })
  
     
      
  
   return new Response(JSON.stringify("enterprise"));
  
  } */