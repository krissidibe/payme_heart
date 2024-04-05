import { signJwtAccessToken } from "@/utils/jwt";
import { prisma } from "@/utils/prisma";
import * as bcrypt from "bcrypt";
import DigestClient from "digest-fetch";
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
  const dataPayment: Payment = await request.json();
  const { searchParams } = new URL(request.url);

  const callback = `${
    process.env.BASE_API_URL
  }/api/payment?userId=${searchParams.get("userId")!}&month=${
    dataPayment.month
  }&amount=${dataPayment.amount}`;

  /*   return new Response(
    JSON.stringify({
      message: `Payment en cours  ....   ${callback} `,
    }),
    {
      status: 200,
    }
  );
  */

  //dataPayment.amount

  /* Mali */
  const bodyMaliOR = {
    idFromClient: new Date().getTime().toString(),
    additionnalInfos: {
      recipientEmail: "assowlove@gmail.com",
      recipientFirstName: "Aboubacar Sidiki",
      recipientLastName: "Sidibe",
      destinataire: dataPayment.number,
    },
    amount: 100,
    callback: callback,
    recipientNumber: dataPayment.number,
    serviceCode: "ML_PAIEMENTMARCHAND_OM_TP",
  };
  const bodyMaliMoov = {
    idFromClient: new Date().getTime().toString(),
    additionnalInfos: {
      recipientEmail: "JUNIOR@hubsocial.org",
      recipientFirstName: "Moustapha",
      recipientLastName: "SECK",
      destinataire: dataPayment.number,
    },
    amount: 100,
    callback: callback,
    recipientNumber: dataPayment.number,
    serviceCode: "PAIEMENTMARCHAND_MOOV_CI",
  };

  let bodyMali = {};
  switch (dataPayment.operateur) {
    case "OrangeMoney":
      bodyMali = bodyMaliOR
      break;
    case "Moov":
      bodyMali =  bodyMaliMoov
      break;
  
    
  }

  /* EndMali */

  if (dataPayment.country == "MALI") {
    const client = new DigestClient(
      "ba612227c93cb1e42a25b91243a8b185266f6dc8b179c71ad3e87a851a095f29",
      "b96aa59aaa01731bf197e4c09e42b1680bfc10057fd5397007a44e6e9f7f529e"
    );
    const dataRequest = await client.fetch(
      "https://apidist.gutouch.net/apidist/sec/touchpayapi/MEEEN6554/transaction?loginAgent=73382636&passwordAgent=KVa8HskLLM",
      {
        method: "PUT",
        body: JSON.stringify(bodyMali),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (dataRequest.status != 200) {
      return new Response(
        JSON.stringify({
          message: `Error`,
        }),
        {
          status: 401,
        }
      );
    }

    if (dataRequest.status == 200) {
      const dataResponse = await dataRequest.json();

      return new Response(
        JSON.stringify({
          message: `Payment en cours  ....   ${callback} `,
        }),
        {
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({
        message: `Error`,
      }),
      {
        status: 401,
      }
    );
  }
}
