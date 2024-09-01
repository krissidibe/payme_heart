"use server";

import { prisma } from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const addPostAction = async (e: FormData) => {


 
  const req = await fetch(`${process.env.BASE_API_URL}/api/view`, {
    method: "POST",
    body: JSON.stringify({
      addressIp:  "",
      isDownload: true,
      country: "",
    }),
    cache: "no-cache",
  });

  return {
    message: "Ajout effectuer avec succes",
  };
};
