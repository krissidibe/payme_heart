import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { FolderType } from "@prisma/client";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
 

  const project = await prisma.invoiceList.findMany({
   
    orderBy: {
      invoiceFileName: "asc",
    },
    include:{category:true}
  });

  return new Response(JSON.stringify(project));
}
 
export async function PATCH(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const dataNew: any = await req.json();
 

  const project = await prisma.invoice.upsert({
    where: {
      userId: searchParams.get("userId")!,
    },
    update: {
      name: dataNew.name,
      invoiceFileName:dataNew.invoiceFileName,
      primaryColor:dataNew.primaryColor,
      secondaryColor:dataNew.secondaryColor,
      primaryTextColor:dataNew.primaryTextColor,
      secondaryTextColor:dataNew.secondaryTextColor,
       
    },
    create: {
      userId:searchParams.get("userId")!,
      name: dataNew.name,
      invoiceFileName:dataNew.invoiceFileName,
      primaryColor:dataNew.primaryColor,
      secondaryColor:dataNew.secondaryColor,
      primaryTextColor:dataNew.primaryTextColor,
      secondaryTextColor:dataNew.secondaryTextColor,
    },
  })
  return new Response(JSON.stringify(project));
}
 