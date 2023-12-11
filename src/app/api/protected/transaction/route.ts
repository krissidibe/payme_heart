import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { CustomerType, ProjectType } from "@prisma/client";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);


  
  if (searchParams.get("userId") != null && searchParams.get("startAt") && searchParams.get("endAt")  ) {
    
    const transaction = await prisma.transaction.findMany({
      where: {
       userId: searchParams.get("userId")!,
       // userId: "clktbv4pl00116wg2uebnn1w6",
        createdAt: {
         
          gte: new Date(  new Date(searchParams.get("startAt")!).getTime()   ) ,
          lte: new Date(  new Date(searchParams.get("endAt")!).getTime() + (3600 * 1000 * 24) ) ,
          //lte: new Date(Date.now() + (3600 * 1000 * 24)) ,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    
    });
   
      return new Response(JSON.stringify(transaction));
    
  }
   

  if (searchParams.get("userId") != null && searchParams.get("date")  ) {
    
    const transaction = await prisma.transaction.findMany({
      where: {
        userId: searchParams.get("userId")!,
       // userId: "clktbv4pl00116wg2uebnn1w6",
      },
      orderBy: {
        createdAt: "desc",
      },
    
    });
   
      return new Response(JSON.stringify(transaction));
    
  }
   
}
 


export async function POST(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  // const id = searchParams.get("id")

  const transactionData: Transaction = await req.json(); 

  const transaction = await prisma.transaction.create({
    data: { 
      userId: searchParams.get("userId")!.toString(),
      projectName: transactionData.projectName,
      client: transactionData.client,
      amountTotal: transactionData.amountTotal,
      type:transactionData.type,
      createdAt: new Date(Date.now()),
      taxe:transactionData.taxe,
    },
  });

  return new Response(JSON.stringify(transaction));
}