import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";



export async function GET(req:NextRequest,res:NextResponse) {
 
  return new Response(JSON.stringify("Video"));
 
 }



export async function POST(req:NextRequest,res:NextResponse) {
    const { searchParams } = new URL(req.url);

 
    const userId  = searchParams.get("userId")?.toString()
    const videoId  = searchParams.get("videoId")?.toString()
 

      const enterprise = await prisma.tutoVideoView.create({
      
         data: { 
            userId: userId,
            tutosId: videoId,

            
           },
      })
  
     
      
  
   return new Response(JSON.stringify(enterprise));
  
  }