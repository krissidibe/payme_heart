import { signJwtAccessToken } from "@/utils/jwt";
import {prisma} from "@/utils/prisma";
import * as bcrypt from "bcrypt";
import DigestClient from "digest-fetch"
import { NextRequest } from "next/server";

interface RequestBody {
  email: string;
  password: string;
}


export async function GET() {
  return new Response(JSON.stringify("LOGIN GET"));
 }


 /* 
 ba612227c93cb1e42a25b91243a8b185266f6dc8b179c71ad3e87a851a095f29
 b96aa59aaa01731bf197e4c09e42b1680bfc10057fd5397007a44e6e9f7f529e
 */
export async function POST(request: NextRequest) {
  const  dataPayment:Payment = await request.json();
  const { searchParams } = new URL(request.url);


/*   `${
    process.env.BASE_API_URL
  }/api/payment?userId=${searchParams.get("userId")!}&data=${JSON.stringify(dataPayment)!}`
  return new Response(
    JSON.stringify({
      message: `Payment en cours   `,
    }),
    {
      status: 200,
    }
  );
 */

 


 
 
 const body = {
	"idFromClient":  "ekdsdks2239023jdjd323",
	"additionnalInfos": {
		"recipientEmail": "assowlove@gmail.com",
		"recipientFirstName": "Aboubacar Sidiki",
		"recipientLastName": "Sidibe",
		"destinataire": dataPayment.number
	},
	"amount":dataPayment.amount,
	"callback":  `${
    process.env.BASE_API_URL
  }/api/payment?userId=${searchParams.get("userId")!}&data=${JSON.stringify(dataPayment)!}`,
	"recipientNumber": dataPayment.number,
	"serviceCode": "ML_PAIEMENTMARCHAND_OM_TP"
}

const client = new DigestClient('ba612227c93cb1e42a25b91243a8b185266f6dc8b179c71ad3e87a851a095f29', 'b96aa59aaa01731bf197e4c09e42b1680bfc10057fd5397007a44e6e9f7f529e')
 const dataRequest = await  client.fetch("https://apidist.gutouch.net/apidist/sec/touchpayapi/MEEEN6554/transaction?loginAgent=73382636&passwordAgent=KVa8HskLLM", {
  method: "PUT",
  body: JSON.stringify(body),
  headers: {
   "Content-Type": "application/json",
   
  }
});

 if (dataRequest.status == 200) {

const dataResponse = await dataRequest.json()

 
 
  

  return new Response(
    JSON.stringify({
      message: `Payment en cours  ${JSON.stringify(dataResponse)}`,
    }),
    {
      status: 200,
    }
  );
 }



return new Response(
  JSON.stringify({
    message: `${process.env.BASE_API_URL}   error`,
  }),
  {
    status: 401,
  }
);

 const requestFetch = await fetch("https://api.gutouch.com/dist/api/touchpayapi/v1/MEEEN6554/transaction?loginAgent=73382636&passwordAgent=KVa8HskLLM", {
  method: "PUT",
  body: JSON.stringify(body),
  
  headers: {
   "Content-Type": "application/json",
   Authorization :" ",
   
 },});

 if (requestFetch.status == 200) {

    return new Response(
        JSON.stringify( await  requestFetch.json()),
        {
          status: 401,
        }
      );
    
 }
 
 const response = await requestFetch.json()
    return new Response(
      JSON.stringify({
        message: `${process.env.BASE_API_URL}  ${response.description}`,
      }),
      {
        status: 401,
      }
    );
}