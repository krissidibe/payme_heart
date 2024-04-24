import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { signJwtAccessToken } from "@/utils/jwt";
import bcrypt from "bcryptjs";


export async function GET(req: NextRequest, res: NextResponse) {

  const { searchParams } = new URL(req.url);

  
  const user = await prisma.user.findFirst({
    where: {
      email: searchParams.get("email")!,
        
    },
 
  });



 // return new Response(JSON.stringify(user));

 
      // if (user && (await bcrypt.compare(body.password, user.password))) {   
  if (!user) {
 
    return new Response(
      JSON.stringify({
        message: "Successss",
      }),
      {
        status: 200,
      }
    );  
  } else
    return new Response(
      JSON.stringify({
        message: "Ce compte existe déjà, merci de vous connecter",
      }),
      {
        status: 401,
      }
    );  
}




export async function POST(req:NextRequest,res:NextResponse) {

  const  userData:User = await req.json();

  const dataFormat = new Date(Date.now())
  .getFullYear()
  .toString()
  .substring(2, 4);

  const passwordCryp = await bcrypt.hash(userData.password, 10);
     const user = await prisma.user.create({
        data: {
            email : userData.email.toLowerCase() ,
            image : userData.image ,
            name : userData.name ,
            address: userData.address ,
            country: userData.country ,
            countryPhoneCode: userData.countryPhoneCode ,
            lockCode : false ,
            code : userData.code ,
            number : userData.number ,
            password : passwordCryp ,
            normalSignUp:userData.normalSignUp.toString()  == "true" ? true : false,
            emailVerified: userData.emailVerified.toString()  == "true" ? true : false,
            createdAt: new Date(Date.now())
          },
     })
    



     const userIdeleted = await prisma.userDeleted.findFirst({
      where:{
        email:user.email
      }
     })



if(!userIdeleted){
  let dateEdit = new Date();
  dateEdit.setHours(168,0,0)


  const payment = await prisma.payment.create({
    data: {
      reference:"Periode d'essai",
      type: "Gratuit (7 jours)",
      month: 0,
      amount: 0,
      currency: "FCFA",
     
      userId: user.id,
    },
  });



 

  const subscribe = await prisma.subscribe.create({
    data: {
      startAt: new Date(Date.now()).toISOString(),
      endAt: new Date(dateEdit),

      paymentId: payment.id,
     
    },
  });

  const userUpdate = await prisma.user.update({
    where: {
      id: user.id!,
    },
     data: {
         subscribeId : subscribe.id ,
         
       },
  })





}
  return new Response(JSON.stringify({ 
    data: user,
    statut:200,
    message: "L'utilisateur est creer" }));
 
} 






export async function PATCH(req:NextRequest,res:NextResponse) {
  const { searchParams } = new URL(req.url);
  const  userData:User = await req.json();
  
    const enterprise = await prisma.user.update({
      where: {
        id: searchParams.get("userId")!,
      },
       data: {
           name : userData.name ,
           country : userData.country ,
           address : userData.address ,
           number : userData.number ,
            
           
           
          
         },
    })

   
    

 return new Response(JSON.stringify(enterprise));

}