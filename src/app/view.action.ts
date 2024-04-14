"use server";

import { prisma } from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const addPostAction = async (e: FormData) => {
  "use server";

  const good = "https://api.ipify.org/?format=json";
  const good2 = "https://geolocation-db.com/json/";
  const req2 = await fetch(good2, {
    method: "GET",
    cache: "no-cache",
  });
  const dataIp = await req2.json();

  const req = await fetch(`${process.env.BASE_API_URL}/api/view`, {
    method: "POST",
    body: JSON.stringify({
      addressIp: dataIp?.IPv4 ?? "",
      isDownload: true,
      country:
        `${dataIp?.country_name} - ${dataIp?.state} @${dataIp?.country_code}` ??
        "",
    }),
    cache: "no-cache",
  });

  return {
    message: "Ajout effectuer avec succes",
  };
};
