import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { FolderType } from "@prisma/client";

export async function POST(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

 


//const dataNew: any  = JSON.parse(searchParams.get("data")!)
   

//const dataNew2: Payment = await req.json();

const monthValue = parseInt(searchParams.get("month")!)

if(monthValue != 3 && monthValue != 6 && monthValue != 12){
  return new Response(JSON.stringify("Error"));
}
 
let amount = "";
  switch (monthValue) {
    case 3:
      amount = "9850"
      break;
    case 6:
      amount = "18950"
      break;
    case 12:
      amount = "34950"
      break;
  
    default:
      break;
  }

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  let lettersPart = '';
  let numbersPart = '';
    for (let i = 0; i < 4; i++) {
      lettersPart += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 4; i++) {
      numbersPart += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

  const payment = await prisma.payment.create({
    data: {
      reference:`${lettersPart}-${numbersPart}`,
      type: "Orange Money",
      month: parseInt(searchParams.get("month")!),
      amount: parseInt(searchParams.get("amount")!),
      currency: "FCFA",
     
      userId: searchParams.get("userId")!,
    },
  });


  let currentDate = Date.now();
  new Date(currentDate).toLocaleDateString()
  let dateEdit = new Date();
  dateEdit.setHours(0,0,0)
  dateEdit.setMonth(dateEdit.getMonth() + monthValue)
 
 

  const subscribe = await prisma.subscribe.create({
    data: {
      startAt: new Date(Date.now()).toISOString(),
      endAt: new Date(dateEdit ),

     
      paymentId: payment.id,
    },
  });

  const user = await prisma.user.update({
    where: {
      id: searchParams.get("userId")!,
    },
     data: {
         subscribeId : subscribe.id ,
         
       },
  })

  return new Response(JSON.stringify(payment));
  return new Response(JSON.stringify("Payment GET"));

  if (searchParams.get("folderType") != null) {
    const project = await prisma.folder.findMany({
      where: {
        userId: searchParams.get("userId")!,
        type:
          searchParams.get("folderType")! == "PROVIDER"
          ? FolderType.PROVIDER
          : searchParams.get("folderType")! == "PERSONAL" ? FolderType.PERSONAL :  FolderType.SUPPLIER,

            
        deletedAt: null,
      },
      orderBy: {
        name: "asc",
      },
    });

    return new Response(JSON.stringify(project));
  }
 
}

export async function PUT(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);



  
  
  const dataNew: Payment = await req.json();

  if(dataNew.month != 3 && dataNew.month != 6 && dataNew.month != 12){
    return new Response(JSON.stringify("Error"));
  }
let amount = "";
  switch (dataNew.month) {
    case 3:
      amount = "9850"
      break;
    case 6:
      amount = "18950"
      break;
    case 12:
      amount = "34950"
      break;
  
    default:
      break;
  }

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  let lettersPart = '';
  let numbersPart = '';
    for (let i = 0; i < 4; i++) {
      lettersPart += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 4; i++) {
      numbersPart += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

  const payment = await prisma.payment.create({
    data: {
      reference:`${lettersPart}-${numbersPart}`,
      type: "Orange Money",
      month: dataNew.month,
      amount: parseInt(amount),
      currency: "FCFA",
     
      userId: searchParams.get("userId")!,
    },
  });


  let currentDate = Date.now();
  new Date(currentDate).toLocaleDateString()
  let dateEdit = new Date();
  dateEdit.setHours(0,0,0)
  dateEdit.setMonth(dateEdit.getMonth() + dataNew.month)
 
 

  const subscribe = await prisma.subscribe.create({
    data: {
      startAt: new Date(Date.now()).toISOString(),
      endAt: new Date(dateEdit ),

     
      paymentId: payment.id,
    },
  });

  const user = await prisma.user.update({
    where: {
      id: searchParams.get("userId")!,
    },
     data: {
         subscribeId : subscribe.id ,
         
       },
  })

  return new Response(JSON.stringify(payment));
}

/* export async function PATCH(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  if (
    searchParams.get("folderId") != null &&
    searchParams.get("name") != null
  ) {
    const folder = await prisma.folder.update({
      where: {
        id: searchParams.get("folderId")!,
      },
      data: {
        name: searchParams.get("name")!,
      },
    });

    return new Response(JSON.stringify(folder));
  }
} */

/* export async function DELETE(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  if (searchParams.get("folderId") != null) {
    const project = await prisma.folder.delete({
      where: {
        id: searchParams.get("folderId")!,
      },
    });

    return new Response(JSON.stringify(project));
  }
} */
