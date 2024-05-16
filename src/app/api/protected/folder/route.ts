import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { FolderType } from "@prisma/client";
import { checkPayment } from "@/lib/queries/paymentCheck";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const checkPaymentValue =  await checkPayment(searchParams.get("userId")!)
 
  if(!checkPaymentValue){
    return new Response(JSON.stringify("Payment is not valid"));
    }
  

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
  return new Response(JSON.stringify("FOLDER GET"));
}

export async function POST(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  const dataNew: Folder = await req.json();

  const enterprise = await prisma.folder.create({
    data: {
      name: dataNew.name,
      type:
        dataNew.type.toString() == "PROVIDER"
          ? FolderType.PROVIDER
          :  dataNew.type.toString() == "PERSONAL" ? FolderType.PERSONAL :  FolderType.SUPPLIER,
      createdAt: new Date(Date.now()),
      userId: searchParams.get("userId")!,
    },
  });

  return new Response(JSON.stringify(enterprise));
}

export async function PATCH(req: NextRequest, res: NextResponse) {
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
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  if (searchParams.get("folderId") != null) {
    const project = await prisma.folder.delete({
      where: {
        id: searchParams.get("folderId")!,
      },
    });

    return new Response(JSON.stringify(project));
  }
}
