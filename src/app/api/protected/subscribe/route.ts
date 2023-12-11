import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { CustomerType, ProjectType } from "@prisma/client";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

 

    return new Response(JSON.stringify("project"));
  }
 

 
export async function PATCH(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  // const id = searchParams.get("id")



  if (searchParams.get("subscribeId") !=null && searchParams.get("startAt") !=null) {

      
    const data = await prisma.subscribe.update({
       where:{
          id : searchParams.get("subscribeId")!,
       },
         data: {
         
          
           startAt : new Date(searchParams.get("startAt")!),
            
           },
      })
 
      

       return new Response(JSON.stringify(data));
   }


  if (searchParams.get("subscribeId") !=null && searchParams.get("endAt") !=null) {

      
    const data = await prisma.subscribe.update({
       where:{
          id : searchParams.get("subscribeId")!,
       },
         data: {
         
          
           endAt : new Date(searchParams.get("endAt")!),
            
           },
      })
 
      

       return new Response(JSON.stringify(data));
   }
   
}






 