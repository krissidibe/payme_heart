import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";






export async function GET(req:NextRequest,res:NextResponse) {
    const { searchParams } = new URL(req.url);







    if (searchParams.get("startAt") != null && searchParams.get("endAt")  ) {
    
    
     
        
     
    
     
    
      const dataWithTwoDate = await prisma.webView.findMany({
        where: {
          
          createdAt: {
            gte: new Date(searchParams.get("startAt")!).toISOString().substring(0,10) +"T00:00:00.026Z"  ,
            lte: new Date(searchParams.get("endAt")!).toISOString().substring(0,10) +"T23:59:00.026Z"  ,
            //lte: new Date(Date.now() + (3600 * 1000 * 24)) ,
          },
        },
        orderBy: {
          createdAt: "asc",
        },
         
      });
  
      return new Response(JSON.stringify(dataWithTwoDate));
  
    }
 


 
 
 const datas = await prisma.webView.findMany({
      
    where: { 
        isDownload:searchParams.get("download") ? true :  false
      },
 })

 

  
   return new Response(JSON.stringify(datas));
  
  }



export async function POST(req:NextRequest,res:NextResponse) {
    const { searchParams } = new URL(req.url);
    const  dataGet:any = await req.json();
 
 
      const enterprise = await prisma.webView.create({
      
         data: { 
            addressIp:dataGet.addressIp ?? "",
            country:dataGet?.country ?? "",
            isDownload:dataGet?.isDownload ? true : false,
            isWindows:dataGet?.isWindows ? true : false,
            isMac:dataGet?.isMac ? true : false,
            
           },
      })
  
     
      
  
   return new Response(JSON.stringify("enterprise"));
  
  }