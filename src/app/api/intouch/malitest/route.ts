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
  }/api/paytest?userId=${searchParams.get("userId")!}&month=${
    dataPayment.month
  }&amount=${dataPayment.amount}&type=${dataPayment.country} - ${dataPayment.operateur}`

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
      recipientEmail: "assowlovesss@gmail.com",
      recipientFirstName: "Aboubacar Sidikiss",
      recipientLastName: "Sidibess",
      destinataire: dataPayment.number,
    },
    amount: 100,
    callback: callback,
    recipientNumber: dataPayment.number,
    serviceCode: "ML_PAIEMENTMARCHAND_OM_TP",
  };
  const bodyMaliMoov = 
  {
    idFromClient: new Date().getTime().toString(),
      additionnalInfos: {
      recipientEmail: "tapha.seck@hubsocial.org",
      recipientFirstName: "Moustapha",
      recipientLastName: "SECK",
      destinataire: dataPayment.number
    },
    amount: 100,
    callback: callback,
    recipientNumber: dataPayment.number,
    serviceCode: "ML_PAIEMENTMARCHAND_MOOV_TP"
  }

  let bodyMali = {};
  switch (dataPayment.operateur) {
    case "OrangeMoney":
      bodyMali = bodyMaliOR
      break;
    case "Moov":
      bodyMali =  bodyMaliMoov
      break;
  
    
  }





  

  if (dataPayment.country == "Mali") {


    
    const client = new DigestClient(
      "ba612227c93cb1e42a25b91243a8b185266f6dc8b179c71ad3e87a851a095f29",
      "b96aa59aaa01731bf197e4c09e42b1680bfc10057fd5397007a44e6e9f7f529e",
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

    
   /* 99999235 */


 const result = await dataRequest.json();

    if (dataRequest.status != 200) {
      console.log("Not 200");
      
      
      return new Response(
        JSON.stringify({
          status:dataRequest.status,
          message: `Payment en cours  ....  Not  ${JSON.stringify(result)}   `,
        }),
        {
          status: 200,
        }
      );
    }

    if (dataRequest.status == 200) {
      console.log("IS 200");
 

      return new Response(
        JSON.stringify({
          status:dataRequest.status,
          message: `Payment en cours  ....  ${JSON.stringify(result)}      `,
        }),
        {
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({
        status:401,
        message: `Error`,
      }),
      {
        status: 200,
      }
    );
  }
  /* EndMali */
  /* CI */




  const bodyCiOR = {	
    idFromClient: new Date().getTime().toString(),
	  additionnalInfos: {
		recipientEmail: "JUNIOR@hubsocial.org",
		recipientFirstName: "Moustapha",
		recipientLastName: "SECK",
		destinataire: dataPayment.number,
		otp: dataPayment.otp
	},
	amount: 100,
	callback: callback,
	recipientNumber: dataPayment.number,
	serviceCode: "PAIEMENTMARCHANDOMPAYCIDIRECT"
}

  const bodyCiMoov ={
    idFromClient: new Date().getTime().toString(),
	  additionnalInfos: {
		recipientEmail: "JUNIOR@hubsocial.org",
		recipientFirstName: "Moustapha",
		recipientLastName: "SECK",
		destinataire: dataPayment.number
		
	},
	amount: 100,
	callback: callback,
	recipientNumber: dataPayment.number,
	serviceCode: "PAIEMENTMARCHAND_MOOV_CI"
}

  const bodyCiMTN ={
    idFromClient: "15487171111111669723",
	  additionnalInfos: {
		recipientEmail: "JUNIOR@hubsocial.org",
		recipientFirstName: "Moustapha",
		recipientLastName: "SECK",
		destinataire: dataPayment.number
		
	},
	amount: 100,
	callback: callback,
	recipientNumber: dataPayment.number,
	serviceCode: "PAIEMENTMARCHAND_MTN_CI"
}



  let bodyCi = {};
  switch (dataPayment.operateur) {
    case "OrangeMoney":
      bodyCi = bodyCiOR
      break;
    case "Moov":
      bodyCi =  bodyCiMoov
      break;
    case "MTN":
      bodyCi =  bodyCiMTN
      break;
  
    
  }












  if (dataPayment.country == "Côte d'Ivoire") {

 
    const client = new DigestClient(
      "8ad4041d5c41b8af9fecc5856a4b0f29dbadca53fbd53c9fe6d55fac4ce3050e",
      "9829080684812e132d12d02326e303d797360359039a4241d8f57f414859e3af"
    );
    const dataRequest = await client.fetch(
      "https://apidist.gutouch.net/apidist/sec/touchpayapi/MEECI10889/transaction?loginAgent=2373382636&passwordAgent=e52aGamwGc",
      {
        method: "PUT",
        body: JSON.stringify(bodyCi),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await dataRequest.json();
      console.log(result);
    if (dataRequest.status != 200) {
      return new Response(
        JSON.stringify({
           status:dataRequest.status,
          message: `Payment en cours  ....  Not  ${JSON.stringify(result)}   `,
        }),
        {
          status: 200,
        }
      );
    }

    if (dataRequest.status == 200) {

      return new Response(
        JSON.stringify({
           status:dataRequest.status,
          message: `Payment en cours  ....  ${JSON.stringify(result)}    `,
        }),
        {
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({
        status:401,
        message: `Error`,
      }),
      {
        status: 401,
      }
    );
  }















  const bodyGNOR = {
    idFromClient: new Date().getTime().toString(),
	additionnalInfos: {
		recipientEmail: "JUNIOR@hubsocial.org",
		recipientFirstName: "Moustapha",
		recipientLastName: "SECK",
		destinataire:  dataPayment.number
		
	},
	amount: 10000,
	callback: callback,
	recipientNumber:  dataPayment.number,
	serviceCode: "PAIEMENTMARCHANDOMPAYGNDIRECT"
}

  const bodyGNMTN ={	
    idFromClient: new Date().getTime().toString(),
	  additionnalInfos: {
		recipientEmail: "JUNIOR@hubsocial.org",
		recipientFirstName: "Moustapha",
		recipientLastName: "SECK",
		destinataire: dataPayment.number
		
	},
	amount: 10000,
	callback: callback,
	recipientNumber: dataPayment.number,
	serviceCode: "PAIEMENTMARCHAND_MTN_GN"
}



  let bodyGN = {};
  switch (dataPayment.operateur) {
    case "OrangeMoney":
      bodyGN = bodyGNOR
      break;
    case "Moov":
      bodyGN =  bodyGNMTN
      break;
  
    
  }


  if (dataPayment.country == "Guinée conakry") {

 
    const client = new DigestClient(
      "41e4ae1b44e4514168dadefe0046e01a755c73ac911ee96e3e08395fb006a404",
      "b76105a42a5ac51a5fe1b11f52b09b9abaca33b83c86c10224852234b28e7226"
    );
    const dataRequest = await client.fetch(
      "https://apidist.gutouch.net/apidist/sec/touchpayapi/MEEGN4700/transaction?loginAgent=223733826&passwordAgent=l3E9ZwF3",
      {
        method: "PUT",
        body: JSON.stringify(bodyGN),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  
    
    const result = await dataRequest.json();

  
    if (dataRequest.status != 200) {
      return new Response(
        JSON.stringify({
           status:dataRequest.status,
          message: `GN ->   ${JSON.stringify(result)} -    `,
        }),
        {
          status: 200,
        }
      );
    }

    if (dataRequest.status == 200) {

      return new Response(
        JSON.stringify({
           status:dataRequest.status,
          message: `GN ->  ${JSON.stringify(result)}  -    `,
        }),
        {
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({
        status:401,
        message: `Error`,
      }),
      {
        status: 401,
      }
    );
  }
}
