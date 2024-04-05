import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {



    const data: any = await request.json();

   console.log("PayTest");
   console.log(data);
   console.log("PayTest");
   

    return new Response(JSON.stringify(data))
}