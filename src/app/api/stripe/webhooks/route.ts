import { NextRequest, NextResponse } from "next/server";
import {headers  } from "next/headers";
import { prisma } from "@/utils/prisma";
import { FolderType } from "@prisma/client";
import { link } from "fs";
import Stripe from "stripe";

import { render } from "@react-email/components";
import transporter from "@/lib/emailSend";
import SubscribeEmailNew from "@/emails/SubscribeEmailNew";
import SubscribeIAEmailNew from "@/emails/SubscribeIAEmailNew";
import { stripe } from "../../../../../lib/stripe";
export async function POST(req: NextRequest) {
  const body = (await req.json()) as Stripe.Event;

 
  switch (body.type) {
    case "checkout.session.completed":
      const session = body.data.object as Stripe.Checkout.Session;
      const stripeCustomerId = session.customer;
    //  console.log("Completed => ", session);
      // console.log("stripeCustomerId => " , session.customer);

      const user = await prisma.user.findFirst({
        where: {
          stripeCustomerId: stripeCustomerId?.toString(),
        },
      });

      if (user?.id) {
        let month = 0;
        const priceAmout = parseFloat((parseFloat(session.amount_subtotal + "") / 100).toString());

        switch (priceAmout) {
          case 14.77:
            month = 3;
            break;
          case 28.30:
            month = 6;
            break;
          case 52.20:
            month = 12;
            break;



//IA

case 0.73:
            month = 25;
            break;
          case 1.42:
            month = 55;
            break;
          case 2.23:
            month = 120;
            break;




          default:
            break;
        }

        const isIA = priceAmout > 0 && priceAmout < 3;


        const callbackOld = `${process.env.BASE_API_URL}/api/payment?userId=${
          user.id
        }&month=${month}&amount=${priceAmout}&type=${"Stripe"}&reference=${
          session.payment_intent
        }&service=${isIA ? "PaymentIA" : ""}&currency=${session.currency}`;

        const dataRequest = await fetch(callbackOld, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const paymentData = await dataRequest.json();

        //searchParams.get("service") == "PaymentIA"

        if (isIA) {
          const emailHtml = render(
            SubscribeIAEmailNew({
              username: user!.name.toString(),
              subscribe: paymentData,
            })
          );

          const options = {
            from: "Payme finance <support@paymefinance.com>",
            to: user!.email!.toString(),
            subject: `Confirmation de Votre Souscription au Pack de Crédit IA`,
            html: emailHtml,
          };

          const data = await transporter.sendMail(options);



          return new Response(JSON.stringify("Payment Successful IA"));
        }

        const emailHtml = render(
          SubscribeEmailNew({
            username: user!.name.toString(),
            subscribe: paymentData,
          })
        );

        const options = {
          from: "Payme finance <support@paymefinance.com>",
          to: user!.email!.toString(),
          subject: `En route vers l'élite professionnelle avec votre nouvel abonnement Payme ! 🚀`,
          html: emailHtml,
        };

        const data = await transporter.sendMail(options);

        return new Response(JSON.stringify("Payment Successful"));
      }

      break;

    default:
      break;
  }

  return new Response(JSON.stringify("plans"));
}
