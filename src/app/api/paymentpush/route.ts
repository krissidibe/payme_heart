import { NextRequest } from "next/server";

export async function POST(request: NextRequest,) {

    const { searchParams } = new URL(request.url);

    const data: any = await request.json();

   console.log("=====");
   console.log(data);
   console.log("=====");


   const callbackPushPayment = `${
    process.env.BASE_API_URL
  }/api/payment?userId=${searchParams.get("userId")!}&month=${
    searchParams.get("month")
  }&amount=${searchParams.get("amount")}&type=${searchParams.get("type")}`;

 




  console.log(data);
  

   if(data.status == 'SUCCESSFUL'){
    console.log("SUCCESSFUL");
    
    const dataRequest = await fetch(callbackPushPayment, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
      })
      console.log(await dataRequest.json());
      
      return new Response(JSON.stringify("Payment Successful"));
   }
   

    return new Response(JSON.stringify("Payment not Successful"));
}