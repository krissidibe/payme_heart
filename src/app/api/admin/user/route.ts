import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma"; 
 
export async function GET(req: NextRequest, res: NextResponse) {
    const { searchParams } = new URL(req.url);
  
 const datas = prisma.user.findMany();
  
  
      console.log("data");
      
      return new Response(JSON.stringify(datas));
  
   // return new Response(JSON.stringify("ENTERPRISE GET"));
  }
  