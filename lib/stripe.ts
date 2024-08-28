import Stripe from 'stripe';


export const stripe  = new Stripe(process.env.NODE_ENV === "development" ?  "sk_test_V8VT1XR93HFl0cFzKckPD45v" : "sk_live_oManuEceRIunOr4chvIgi1Uq",  {
    apiVersion:"2024-06-20",
    typescript:true
})