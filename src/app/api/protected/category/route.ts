import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { FolderType } from "@prisma/client";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  const project = await prisma.category.findMany({
   
    orderBy: {
      name: "asc",
    },
  });

  return new Response(JSON.stringify(project));
}
 