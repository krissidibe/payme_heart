import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { FolderType } from "@prisma/client";
import { checkPayment } from "@/lib/queries/paymentCheck";

export async function GET(req: NextRequest, res: NextResponse) {
  
  const { searchParams } = new URL(req.url);
  const checkPaymentValue =  await checkPayment(searchParams.get("userId")!)
 
  if(!checkPaymentValue){
     return new Response(JSON.stringify([]));
    }
  
   
    const planning = await prisma.planning.findMany({
      where: {
        userId: searchParams.get("userId")!,
        
     
       
      },
      include: {
        _count: {
          select: { PlanningItems: {
            where:{
             isCompleted: false
            }
          } },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return new Response(JSON.stringify(planning));
 
 
}

export async function POST(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  const dataNew: Planning = await req.json();

  const planning = await prisma.planning.create({
    data: {
      name: dataNew.name,
      color: dataNew.color,
       
      createdAt: new Date(Date.now()),
      userId: searchParams.get("userId")!,
    },
  });

  return new Response(JSON.stringify(planning));
}

export async function PATCH(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  if (
    searchParams.get("planningId") != null &&
    searchParams.get("name") != null
  ) {

    console.log(searchParams.get("color")!.toString(),);
    console.log(searchParams.get("color")!.toString(),);
    

    const folder = await prisma.planning.update({
      where: {
        id: searchParams.get("planningId")!,
      },
      data: {
        name: searchParams.get("name")!,
        color: searchParams.get("color")!.toString(),
      },
    });

    return new Response(JSON.stringify(folder));
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  if (searchParams.get("planningId") != null) {
    const planning = await prisma.planning.delete({
      where: {
        id: searchParams.get("planningId")!,
      },
    });

    return new Response(JSON.stringify(planning));
  }
}
