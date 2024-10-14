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

    return new Response(JSON.stringify("kk"))
}
export async function GET(req: NextRequest) {
  



   const customer = await stripe.customers.create({
    email:"assowlove@gmail.com"
   });
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2015-10-16'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    customer: customer.id,
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter
    // is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const ret =  {
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: 'pk_test_zc56UcJYQkLSEcqokFvcUUlo'
  }
console.log("ret",ret);

  
  return   new Response(JSON.stringify(ret))
 
}

