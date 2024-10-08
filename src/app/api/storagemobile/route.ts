import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import storeImage from "@/utils/imageStorage";
import storeImageMobile from "@/utils/imageStorageMobile";



export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
 

 return new Response(JSON.stringify("ENTERPRISE GET"));
}


function dataURLtoFile(dataurl:any, filename:string) {
  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1], 
      bstr = atob(arr[arr.length - 1]), 
      n = bstr.length, 
      u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type:mime});
}



export async function POST(req: NextRequest, res: NextResponse) {
  //const { searchParams } = new URL(req.url);
  const formData = await req.formData();
  const file = formData.get("image") as Blob | null;

  let fileTest  = dataURLtoFile("data:image/png;base64,"+formData.get("image"),formData.get("name")!.toString());

  const blobNew =   new Blob([fileTest], {  type: "image/png"  })
console.log("file",  fileTest);



 const data = await storeImageMobile(fileTest,formData.get("name") as string);
  
 
    return new Response(JSON.stringify(data));

 // return new Response(JSON.stringify("ENTERPRISE GET"));
}


 