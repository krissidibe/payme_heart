import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { CustomerType, ProjectType } from "@prisma/client";
import { checkPayment } from "@/lib/queries/paymentCheck";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const checkPaymentValue =  await checkPayment(searchParams.get("userId")!)
 
  if(!checkPaymentValue){
    return new Response(JSON.stringify([]));
    }
  
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
    

    console.log(new Date(searchParams.get("date")!).toISOString().substring(0,10) +"T00:00:00.026Z" );
    

    const transaction = await prisma.transaction.findMany({
      where: {
        userId: searchParams.get("userId")!,
        createdAt: {
          gte: new Date(searchParams.get("date")!).toISOString().substring(0,10) +"T00:00:00.026Z"  ,
          lte: new Date(searchParams.get("dateEnd")!).toISOString().substring(0,10) +"T23:59:00.026Z"  ,
          //lte: new Date(Date.now() + (3600 * 1000 * 24)) ,
        },
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
      amountTva: transactionData.amountTva ?? "0",
      type:transactionData.type,
      createdAt: new Date(Date.now()),
      taxe:transactionData.taxe,
    },
  });

  return new Response(JSON.stringify(transaction));
}