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

  const typePayment =
    `${dataPayment.country}-${dataPayment.operateur}`.replaceAll(" ", "");

  const callback = `https://paymefinance.com/api/paymentpush?userId=${searchParams.get(
    "userId"
  )!}&month=${dataPayment.month}&amount=${
    dataPayment.amount
  }&type=${typePayment}`;

  /*   const callbackOld = `https://paymefinance.com/api/paytest?userId=${searchParams.get("userId")!}&month=${
    dataPayment.month
  }&amount=${dataPayment.amount}&type=${typePayment}`
 */

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
  const bodyMaliMoov = {
    idFromClient: new Date().getTime().toString(),
    additionnalInfos: {
      recipientEmail: "tapha.seck@hubsocial.org",
      recipientFirstName: "Moustapha",
      recipientLastName: "SECK",
      destinataire: dataPayment.number,
    },
    amount: 100,
    callback: callback,
    recipientNumber: dataPayment.number,
    serviceCode: "ML_PAIEMENTMARCHAND_MOOV_TP",
  };

  let bodyMali = {};
  switch (dataPayment.operateur) {
    case "OrangeMoney":
      bodyMali = bodyMaliOR;
      break;
    case "Moov":
      bodyMali = bodyMaliMoov;
      break;
  }

  if (dataPayment.country == "Mali") {
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

    /* 99999235 */

    const result = await dataRequest.json();

    if (dataRequest.status != 200) {
      console.log("Not 200");

      return new Response(
        JSON.stringify({
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
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
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
        }),
        {
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({
        status: 401,
        message: `Error`,
      }),
      {
        status: 200,
      }
    );
  }
  /* EndMali */
  /* CI */

  if (dataPayment.country == "Côte d'Ivoire") {
    const bodyCiOR = {
      idFromClient: new Date().getTime().toString(),
      additionnalInfos: {
        recipientEmail: "JUNIOR@hubsocial.org",
        recipientFirstName: "Moustapha",
        recipientLastName: "SECK",
        destinataire: dataPayment.number,
        otp: dataPayment.otp,
      },
      amount: 100,
      callback: callback,
      recipientNumber: dataPayment.number,
      serviceCode: "PAIEMENTMARCHANDOMPAYCIDIRECT",
    };

    const bodyCiMoov = {
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

    const bodyCiMTN = {
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
      serviceCode: "PAIEMENTMARCHAND_MTN_CI",
    };

    const bodyCiWave = {
      idFromClient: "1651089293",
      additionnalInfos: {
        recipientEmail: "tester@gmail.com",
        recipientFirstName: "Testeur",
        recipientLastName: "lastname",
        destinataire: dataPayment.number,
        partner_name: "Le nom de votre structure",
        return_url: "https://successurl.com",
        cancel_url: "https://failedurl.com",
      },
      amount: 100,
      callback: callback,
      recipientNumber: dataPayment.number,
      serviceCode: "CI_PAIEMENTWAVE_TP",
    };

    let bodyCi = {};
    switch (dataPayment.operateur) {
      case "OrangeMoney":
        bodyCi = bodyCiOR;
        break;
      case "Moov":
        bodyCi = bodyCiMoov;
        break;
      case "MTN":
        bodyCi = bodyCiMTN;
        break;
      case "Wave":
        bodyCi = bodyCiWave;
        break;
    }

    const client = new DigestClient(
      "8ad4041d5c41b8af9fecc5856a4b0f29dbadca53fbd53c9fe6d55fac4ce3050e",
      "9829080684812e132d12d02326e303d797360359039a4241d8f57f414859e3af"
    );

    const dataRequest = await client.fetch(
      "https://apidist.gutouch.net/apidist/sec/touchpayapi/MEECI10889/transaction?loginAgent=2373382636&passwordAgent=YvC97d9KC8",
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
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
        }),
        {
          status: 200,
        }
      );
    }

    if (dataRequest.status == 200) {
      return new Response(
        JSON.stringify({
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
        }),
        {
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({
        status: 401,
        message: `Error`,
      }),
      {
        status: 401,
      }
    );
  }

  if (dataPayment.country == "Guinée Conakry") {
    const bodyGNOR = {
      idFromClient: new Date().getTime().toString(),
      additionnalInfos: {
        recipientEmail: "JUNIOR@hubsocial.org",
        recipientFirstName: "Moustapha",
        recipientLastName: "SECK",
        destinataire: dataPayment.number,
        otp: "",
      },
      amount: 100,
      callback: callback,
      recipientNumber: dataPayment.number,
      serviceCode: "PAIEMENTMARCHANDOMPAYGNDIRECT",
    };

    const bodyGNMTN = {
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
      serviceCode: "PAIEMENTMARCHAND_MTN_GN",
    };

    let bodyGN = {};
    switch (dataPayment.operateur) {
      case "OrangeMoney":
        bodyGN = bodyGNOR;
        break;
      case "MTN":
        bodyGN = bodyGNMTN;
        break;
    }

    /* https://apidist.gutouch.net/apidist/sec/touchpayapi/MEEGN4700/transaction?loginAgent=223733826&passwordAgent=PHRaYfeA6F */

    /* https://api.gutouch.com/dist/api/touchpayapi/v1/MEEGN4700/transaction?loginAgent=223733826&passwordAgent=PHRaYfeA6F */

    const client = new DigestClient(
      "41e4ae1b44e4514168dadefe0046e01a755c73ac911ee96e3e08395fb006a404",
      "b76105a42a5ac51a5fe1b11f52b09b9abaca33b83c86c10224852234b28e7226"
    );
    const dataRequest = await client.fetch(
      "https://api.gutouch.com/dist/api/touchpayapi/v1/MEEGN4700/transaction?loginAgent=223733826&passwordAgent=PHRaYfeA6F",
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
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
        }),
        {
          status: 200,
        }
      );
    }

    if (dataRequest.status == 200) {
      return new Response(
        JSON.stringify({
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
        }),
        {
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({
        status: 401,
        message: `Error`,
      }),
      {
        status: 401,
      }
    );
  }

  /* Sénégal */

  if (dataPayment.country == "Sénégal") {
    const bodyOrange = {
      idFromClient: new Date().getTime().toString(),
      additionnalInfos: {
        recipientEmail: "assowlove@gmail.com",
        recipientFirstName: "Moustapha",
        recipientLastName: "SECK",
        destinataire: dataPayment.number,
        otp: dataPayment.otp,
      },
      amount: 100,
      callback: callback,
      recipientNumber: dataPayment.number,
      serviceCode: "PAIEMENTMARCHANDOMSN2",
    };
    const bodyWave = {
      idFromClient: new Date().getTime().toString(),
      additionnalInfos: {
        recipientEmail: "assowlove@gmail.com",
        recipientFirstName: "Testeur",
        recipientLastName: "lastname",
        destinataire: dataPayment.number,
        partner_name: "Diallo Banana",
        return_url: callback,
        cancel_url: "https://failedurl.com",
        currency: "XOF",
      },
      amount: 100,
      callback: callback,
      recipientNumber: dataPayment.number,
      serviceCode: "SNPAIEMENTWAVE",
    };
    const bodyFreeMoney = {
      idFromClient: new Date().getTime().toString(),
      additionnalInfos: {
        recipientEmail: "assowlove@gmail.com",
        recipientFirstName: "Moustapha",
        recipientLastName: "SECK",
        destinataire: dataPayment.number,
      },
      amount: 100,
      callback: callback,
      recipientNumber: dataPayment.number,
      serviceCode: "PAIEMENTMARCHANDTIGO",
    };

    let body = {};
    switch (dataPayment.operateur) {
      case "OrangeMoney":
        body = bodyOrange;
        break;
      case "Wave":
        body = bodyWave;
        break;
      case "FreeMoney":
        body = bodyFreeMoney;
        break;
    }

    const client = new DigestClient(
      "1bbd12343b8438f93214d7b6b504f6ee2373ccf34edff031014a705df6ad5b94",
      "b3a50651897fb27437e5077bf55a3ca1e1bdf96ce8b1c0375354e15d2a5e997f"
    );
    const dataRequest = await client.fetch(
      "https://apidist.gutouch.net/apidist/sec/touchpayapi/PYFSN24092/transaction?loginAgent=073382636&passwordAgent=2LdvjLrjn4",
      {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await dataRequest.json();

    if (dataRequest.status != 200) {
      return new Response(
        JSON.stringify({
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
        }),
        {
          status: 200,
        }
      );
    }

    if (dataRequest.status == 200) {
      return new Response(
        JSON.stringify({
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
        }),
        {
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({
        status: 401,
        message: `Error`,
      }),
      {
        status: 401,
      }
    );
  }

  if (dataPayment.country == "Burkina Fasso") {
    const bodyOrange = {
      idFromClient: new Date().getTime().toString(),
      additionnalInfos: {
        recipientEmail: "issa.ndiaye@hubsocial.org",
        recipientFirstName: "Junior",
        recipientLastName: "seck",
        currency: "952",
        trxcode: "47428580",
      },
      amount: 100,
      callback: callback,
      recipientNumber: dataPayment.number,
      serviceCode: "BF_PAIEMENTMARCHAND_OM_TP",
    };

    const bodyMoov = {
      idFromClient: new Date().getTime().toString(),
      additionnalInfos: {
        recipientEmail: "issa.ndiaye@hubsocial.org",
        recipientFirstName: "Junior",
        recipientLastName: "seck",
        currency: "952",
        trxcode: "47428580",
      },
      amount: 100,
      callback: callback,
      recipientNumber: dataPayment.number,
      serviceCode: "BF_PAIEMENTMARCHAND_MOBICASH_TP",
    };

    let body = {};
    switch (dataPayment.operateur) {
      case "OrangeMoney":
        body = bodyOrange;
        break;
      case "Moov":
        body = bodyMoov;
        break;
    }

    /* https://apidist.gutouch.net/apidist/sec/touchpayapi/MEEGN4700/transaction?loginAgent=223733826&passwordAgent=PHRaYfeA6F */

    /* https://api.gutouch.com/dist/api/touchpayapi/v1/MEEGN4700/transaction?loginAgent=223733826&passwordAgent=PHRaYfeA6F */

    const client = new DigestClient(
      "92a628b875ee46c12691dfdf54980846fc4c5929fb5accae6b8975e07e227de3",
      "1bee06860f757dd6568d5a0eef75cd39993281f561b673b95c54fe226e8de2e8"
    );
    const dataRequest = await client.fetch(
      "https://apidist.gutouch.net/apidist/sec/touchpayapi/MEEBF2961/transaction?loginAgent=76325632&passwordAgent=gsTCpNcPa2",
      {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await dataRequest.json();

    if (dataRequest.status != 200) {
      return new Response(
        JSON.stringify({
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
        }),
        {
          status: 200,
        }
      );
    }

    if (dataRequest.status == 200) {
      return new Response(
        JSON.stringify({
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
        }),
        {
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({
        status: 401,
        message: `Error`,
      }),
      {
        status: 401,
      }
    );
  }

  if (dataPayment.country == "Cameroun") {
    const bodyOrange = {
      idFromClient: new Date().getTime().toString(),
      additionnalInfos: {
        recipientEmail: "karl.ngassa@intouchgroup.net",
        recipientFirstName: "Karl",
        recipientLastName: "NGASSA",
        destinataire: dataPayment.number,
      },
      amount: 100,
      callback: callback,
      recipientNumber: dataPayment.number,
      serviceCode: "CM_PAIEMENTMARCHAND_OM_TP",
    };

    const bodyMtn = {
      idFromClient: new Date().getTime().toString(),
      additionnalInfos: {
        recipientEmail: "karl.ngassa@intouchgroup.net",
        recipientFirstName: "Karl",
        recipientLastName: "NGASSA",
        destinataire: dataPayment.number,
      },
      amount: 100,
      callback: callback,
      recipientNumber: dataPayment.number,
      serviceCode: "PAIEMENTMARCHAND_MTN_CM",
    };

    let body = {};
    switch (dataPayment.operateur) {
      case "OrangeMoney":
        body = bodyOrange;
        break;
      case "MTN":
        body = bodyMtn;
        break;
    }

    /* https://apidist.gutouch.net/apidist/sec/touchpayapi/MEEGN4700/transaction?loginAgent=223733826&passwordAgent=PHRaYfeA6F */

    /* https://api.gutouch.com/dist/api/touchpayapi/v1/MEEGN4700/transaction?loginAgent=223733826&passwordAgent=PHRaYfeA6F */

    const client = new DigestClient(
      "3CED9BA7E7675952241701C97F015D6DEAC4FA197C6732DA5BF2BE46C536F74B",
      "F41A61A12B955715C2E48E7BAE91A9C28DE8CFFD7E3E881B0EBA5AF0345F0A00"
    );
    const dataRequest = await client.fetch(
      "https://apidist.gutouch.net/apidist/sec/touchpayapi/MEECM9059/transaction?loginAgent=673382636&passwordAgent=4NpPA3HNXZ",
      {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await dataRequest.json();

    if (dataRequest.status != 200) {
      return new Response(
        JSON.stringify({
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
        }),
        {
          status: 200,
        }
      );
    }

    if (dataRequest.status == 200) {
      return new Response(
        JSON.stringify({
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
        }),
        {
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({
        status: 401,
        message: `Error`,
      }),
      {
        status: 401,
      }
    );
  }

  if (dataPayment.country == "Gabon") {
    const bodyMoov = {
      idFromClient: new Date().getTime().toString(),
      additionnalInfos: {
        recipientEmail: "gwenael.nzedesouza@intouchgroup.net",
        recipientFirstName: "Gwenael",
        recipientLastName: "DE SOUZA",
        destinataire: dataPayment.number,
      },
      amount: 100,
      callback: callback,
      recipientNumber: dataPayment.number,
      serviceCode: "GAPAIEMENTMARCHANDMOOV",
    };

    const bodyMtn = {
      idFromClient: new Date().getTime().toString(),
      additionnalInfos: {
        recipientEmail: "karl.ngassa@intouchgroup.net",
        recipientFirstName: "Karl",
        recipientLastName: "NGASSA",
        destinataire: dataPayment.number,
      },
      amount: 100,
      callback: callback,
      recipientNumber: dataPayment.number,
      serviceCode: "PAIEMENTMARCHAND_MTN_CM",
    };

    let body = {};
    switch (dataPayment.operateur) {
      case "Moov":
        body = bodyMoov;
        break;
      case "MTN":
        body = bodyMtn;
        break;
    }

    /* https://apidist.gutouch.net/apidist/sec/touchpayapi/MEEGN4700/transaction?loginAgent=223733826&passwordAgent=PHRaYfeA6F */

    /* https://api.gutouch.com/dist/api/touchpayapi/v1/MEEGN4700/transaction?loginAgent=223733826&passwordAgent=PHRaYfeA6F */

    const client = new DigestClient(
      "3CED9BA7E7675952241701C97F015D6DEAC4FA197C6732DA5BF2BE46C536F74B",
      "F41A61A12B955715C2E48E7BAE91A9C28DE8CFFD7E3E881B0EBA5AF0345F0A00"
    );
    const dataRequest = await client.fetch(
      "https://apidist.gutouch.net/apidist/sec/touchpayapi/MEEGA0070/transaction?loginAgent=373382636&passwordAgent=mTQYp9GQJf",
      {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await dataRequest.json();

    if (dataRequest.status != 200) {
      return new Response(
        JSON.stringify({
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
        }),
        {
          status: 200,
        }
      );
    }

    if (dataRequest.status == 200) {
      return new Response(
        JSON.stringify({
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
        }),
        {
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({
        status: 401,
        message: `Error`,
      }),
      {
        status: 401,
      }
    );
  }

  if (dataPayment.country == "Benin") {
    const bodyMoov = {
      idFromClient: new Date().getTime().toString(),
      additionnalInfos: {
        recipientEmail: "tapha.seck@hubsocial.org",
        recipientFirstName: "Moustapha",
        recipientLastName: "SECK",
        destinataire: dataPayment.number,
      },
      amount: 100,
      callback: callback,
      recipientNumber: dataPayment.number,
      serviceCode: "BN_PAIEMENTMARCHAND_MOOV",
    };

    const bodyMtn = {
      idFromClient: new Date().getTime().toString(),
      additionnalInfos: {
        recipientEmail: "tapha.seck@hubsocial.org",
        recipientFirstName: "Moustapha",
        recipientLastName: "SECK",
        destinataire: dataPayment.number,
      },
      amount: 100,
      callback: callback,
      recipientNumber: dataPayment.number,
      serviceCode: "BN_PAIEMENTMARCHAND_MTN",
    };

    let body = {};
    switch (dataPayment.operateur) {
      case "Moov":
        body = bodyMoov;
        break;
      case "MTN":
        body = bodyMtn;
        break;
    }

    /* https://apidist.gutouch.net/apidist/sec/touchpayapi/MEEGN4700/transaction?loginAgent=223733826&passwordAgent=PHRaYfeA6F */

    /* https://api.gutouch.com/dist/api/touchpayapi/v1/MEEGN4700/transaction?loginAgent=223733826&passwordAgent=PHRaYfeA6F */

    const client = new DigestClient(
      "0fa913d7501130ed66ae0685559b705ecac0fa1517c98860f6907170109d9725",
      "2f0fb2d4dc45d29ad51741dbeef2b4904af006fb7ab4b03fc0d7db1084b2cc4"
    );
    const dataRequest = await client.fetch(
      "https://apidist.gutouch.net/apidist/sec/touchpayapi/MEEBN0031/transaction?loginAgent=72451915&passwordAgent=qRjfuWQw",
      {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await dataRequest.json();

    if (dataRequest.status != 200) {
      return new Response(
        JSON.stringify({
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
        }),
        {
          status: 200,
        }
      );
    }

    if (dataRequest.status == 200) {
      return new Response(
        JSON.stringify({
          status: dataRequest.status,
          message: result,
          paymentUrl: result?.payment_url ?? "",
        }),
        {
          status: 200,
        }
      );
    }

    return new Response(
      JSON.stringify({
        status: 401,
        message: `Error`,
      }),
      {
        status: 401,
      }
    );
  }
}
