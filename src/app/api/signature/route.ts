import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import fs from "fs";
import path, { join } from "path";


 


export async function GET(req:NextRequest,res:NextResponse) {
    const { searchParams } = new URL(req.url);
 
  let signature;

  if (process.env.NODE_ENV=="development") {
    
    
    signature =`${process.env.BASE_API_URL}/files/signature-${searchParams.get("id")}.png`  
  }else{
   
    signature =`https://paymefinance.com/files/signature-${searchParams.get("id")}.png` 
  }
 

 //const dd = await fetch(signature)
 const relativeUploadDir = `/${"files" }/`;
 const uploadDir = join(process.cwd(), "public", relativeUploadDir);
 if (fs.existsSync(`${uploadDir}/signature-${searchParams.get("id")}.png`)) {
    console.log('file exists');
    return new Response(JSON.stringify("file exists"));
} else{
    
    console.log('file not exists');

    return new Response(JSON.stringify("null"));
  }
  
 
  
 
  
  }