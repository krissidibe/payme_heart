import { NextRequest } from "next/server";
import { prisma } from "@/utils/prisma";
export async function POST(request: NextRequest,) {

    const { searchParams } = new URL(request.url);

    const data: any = await request.json();

 
   const callbackOld = `${
    process.env.BASE_API_URL
  }/api/payment?userId=${searchParams.get("userId")!}&month=${
    searchParams.get("month")
  }&amount=${searchParams.get("amount")}&type=${searchParams.get("type")}`;

 



   if(data.status == 'SUCCESSFUL'){
    const dataRequest = await fetch(callbackOld, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
      })
      console.log(await dataRequest.json());

  const user = await  prisma.user.findUnique({
      where: {
        id:   searchParams.get("userId")!
      }
    })
user?.email

      
      return new Response(JSON.stringify("Payment Successful"));
   }
   

    return new Response(JSON.stringify("Payment not Successful"));
}