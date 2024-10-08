import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import storeImage from "@/utils/imageStorage";



export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
 

 return new Response(JSON.stringify("ENTERPRISE GET"));
}



export async function POST(req: NextRequest, res: NextResponse) {
  //const { searchParams } = new URL(req.url);
  const formData = await req.formData();
  const file = formData.get("image") as Blob | null;
console.log("file",  formData);



 const data = await storeImage(file,formData.get("name") as string);
  
 
    return new Response(JSON.stringify(data));

 // return new Response(JSON.stringify("ENTERPRISE GET"));
}


 