import { NextRequest } from "next/server";
import { prisma } from "@/utils/prisma";
import { render } from "@react-email/components";
import transporter from "@/lib/emailSend";
import SubscribeEmailNew from "@/emails/SubscribeEmailNew";
import SubscribeIAEmailNew from "@/emails/SubscribeIAEmailNew";
export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const data: any = await request.json();

  const callbackOld = `${
    process.env.BASE_API_URL
  }/api/payment?userId=${searchParams.get("userId")!}&month=${searchParams.get(
    "month"
  )}&amount=${searchParams.get("amount")}&type=${searchParams.get("type")}&reference=${searchParams.get("reference")}&service=${searchParams.get("service")}`;



  
  if (data.status == "SUCCESSFUL") {
    const dataRequest = await fetch(callbackOld, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const paymentData = await dataRequest.json();

    const user = await prisma.user.findUnique({
      where: {
        id: searchParams.get("userId")!,
      },
    });
    user?.email;



    if (searchParams.get("service") == "PaymentIA") {
    



      const emailHtml = render(SubscribeIAEmailNew({username:user!.name.toString(),subscribe:paymentData}));

 
      const options = {
        from: 'Payme finance <support@paymefinance.com>',
        to: user!.email!.toString(),
        subject: `En route vers l'élite professionnelle avec votre nouvel abonnement au credit IA - Payme ! 🤖`,
        html: emailHtml,
      };
  
  
    const data =  await transporter.sendMail(options);
  
    console.log(data);
    
   


      return new Response(JSON.stringify("Payment Successful IA"));

    
    }


   
     
    const emailHtml = render(SubscribeEmailNew({username:user!.name.toString(),subscribe:paymentData}));

 
    const options = {
      from: 'Payme finance <support@paymefinance.com>',
      to: user!.email!.toString(),
      subject: `En route vers l'élite professionnelle avec votre nouvel abonnement Payme ! 🚀`,
      html: emailHtml,
    };


  const data =  await transporter.sendMail(options);

  console.log(data);
  
 


    return new Response(JSON.stringify("Payment Successful"));
  }

  return new Response(JSON.stringify("Payment not Successful"));
}
