import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { FolderType } from "@prisma/client";
import { link } from "fs";

export async function GET() {
  /* 
price_1PlEjOAsHfMtGG8D9YRzNtgE
price_1PlE0fAsHfMtGG8DQrVqgvyp
PaymentIA
*/
  const plans = [
    {
      type: "Pack Access",
      price: {
        id:  process.env.NODE_ENV === "development" ? "price_1Ps72wAsHfMtGG8DtJkGw5cV" : "price_1PskMUAsHfMtGG8DS86KQmhL",
      },
    },
    {
      type: "Pack Premium",

      price: {
        id:  process.env.NODE_ENV === "development" ? "price_1Ps73kAsHfMtGG8DPO1kcGuw" : "price_1PskNBAsHfMtGG8DyvLLsdp6",
      },
    },
    {
      type: "Pack Gold",

      price: {
        id:  process.env.NODE_ENV === "development" ? "price_1Ps752AsHfMtGG8DkiLLZV6h" : "price_1PskNxAsHfMtGG8DZygXhCwU",
      },
    },

    //Pack IA

    {
      type: "Pack Mini",
      price: {
        id:  process.env.NODE_ENV === "development" ? "price_1Ps7QlAsHfMtGG8Dlnf8XTWl" : "price_1PskONAsHfMtGG8DeczF5czm",
      },
    },
    {
      type: "Pack Semi",

      price: {
        id:  process.env.NODE_ENV === "development" ? "price_1Ps7SUAsHfMtGG8DXci0mNZi" : "price_1PskPOAsHfMtGG8DdfoF4hGn",
      },
    },
    {
      type: "Pack Hot",

      price: {
        id:  process.env.NODE_ENV === "development" ? "price_1Ps7TKAsHfMtGG8DPaGnxqxZ" : "price_1PskQTAsHfMtGG8DKt0EwUGQ",
      },
    },
  ];
  return new Response(JSON.stringify(plans));
}
