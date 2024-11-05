import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";






export async function GET(req:NextRequest,res:NextResponse) {
    const { searchParams } = new URL(req.url);
 
 
 const datas = await prisma.movileVersion.findFirst({
      
   
 })

 

  
   return new Response(JSON.stringify(datas));
  
  }


/* 
  export async function POST(req:NextRequest,res:NextResponse) {
    const { searchParams } = new URL(req.url);
    const  dataGet:any = await req.json();
 
 
      const enterprise = await prisma.movileVersion.create({
      
         data: { 
      
            
           },
      })
  
     
      
  
   return new Response(JSON.stringify("enterprise"));
  
  }  */