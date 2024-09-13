import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";






export async function GET(req:NextRequest,res:NextResponse) {
    const { searchParams } = new URL(req.url);
    const userId  = searchParams.get("userId")?.toString()
 
 
 const datas = await prisma.tutos.findMany({
      where:{
         public:true
      },
      orderBy:{
         index:"asc"
      }
   
 })

 

   return new Response(JSON.stringify(datas));
  
  }



  export async function POST(req:NextRequest,res:NextResponse) {
   const { searchParams } = new URL(req.url);
   const userId  = searchParams.get("userId")?.toString()


const datas =  await prisma.tutoVideoView.create({
  data:{
     userId:userId,
     initial:true
  },
  
})


  return new Response(JSON.stringify(datas));
 
 }

