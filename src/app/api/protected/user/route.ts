import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import CodeOTPFinance from "@/emails/CodeOTPFinance";
import transporter from "@/lib/emailSend";
import { render } from "@react-email/components";
import DeleteUser from "@/emails/DeleteUser";
import DeleteUserUser from "@/emails/DeleteUserUser";
import bcrypt from "bcryptjs";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  
    const data = await prisma.user.findFirst({
      where: {
        id: searchParams.get("userId")!,
         
      },
   include:{
    enterprise:{
      include:{
        creditIA:true
      }
    },
    customers:true, 
    subscribe:{
      include:{
         payment:true 
        }
      },
    payments:{
      include:{
        subscribe:true,
        creditIA:true
      }
    } ,
    invoice:true
  
  }
    });

    return new Response(JSON.stringify(data));

 // return new Response(JSON.stringify("ENTERPRISE GET"));
}




export async function POST(req:NextRequest,res:NextResponse) {

  const  userData:User = await req.json();

  // return new Response(JSON.stringify(userData));
  const dataFormat = new Date(Date.now())
  .getFullYear()
  .toString()
  .substring(2, 4);
  const passwordCryp = await bcrypt.hash(userData.password , 10);
     const user = await prisma.user.create({
        data: {
            email : userData.email ,
            image : userData.image ,
            name : userData.name ,
            address: userData.address ,
            country: userData.country ,
            countryPhoneCode: userData.countryPhoneCode ,
            lockCode : userData.lockCode ,
            code : userData.code ,
            number : userData.number ,
            password : passwordCryp ,
            normalSignUp:userData.normalSignUp,
            emailVerified: userData.emailVerified,
            createdAt: new Date(Date.now())
          },
     })

 
  return new Response(JSON.stringify({ 
    data: user,
    statut:200,
    message: "L'utilisateur est creer" }));
 
} 



 


export async function PATCH(req:NextRequest,res:NextResponse) {
  const { searchParams } = new URL(req.url);



  if (searchParams.get("stripeCustomerId") != null) {
    
    const  userData:any = await req.json();
 
 
    const enterprise = await prisma.user.update({
      where: {
        id: searchParams.get("userId")!,
      },
       data: {
        stripeCustomerId : userData.stripeCustomerId, 
         },
    })

   
    

 return new Response(JSON.stringify(enterprise));
   }

  if (searchParams.get("newPassword") != null) {
    
    const  userData:any = await req.json();

    const passwordCryp = await bcrypt.hash(userData.newPassword!, 10);
 
    const enterprise = await prisma.user.update({
      where: {
        id: searchParams.get("userId")!,
      },
       data: {
           password : passwordCryp, 
         },
    })

   
    

 return new Response(JSON.stringify(enterprise));
   }

   if (searchParams.get("lockCode") != null) {
    const  userData:any = await req.json();

   

   const enterprise = await prisma.user.update({
     where: {
       id: searchParams.get("userId")!,
     },
      data: { 
       lockCode : userData.lockCode as boolean, 
        },
   })

 

return new Response(JSON.stringify(enterprise));
  }


   if (searchParams.get("codeOTP") != null) {
     const  userData:any = await req.json();

    const user = await prisma.user.findFirst({
      where: {
        id: searchParams.get("userId")!,
        },
   })


    const enterprise = await prisma.user.update({
      where: {
        id: searchParams.get("userId")!,
      },
       data: {
        code : userData.codeOTP!.toString(), 
      //  lockCode : userData.lockCode as boolean, 
         },
    })


if(userData.sendMail == true){
      
      const emailHtml = render(  CodeOTPFinance({username:user!.name,code:userData.codeOTP!.toString()}));



      
    const options = {
      from: 'Payme finance <support@paymefinance.com>',
      to:user!.email!.toString(),
      subject: `${"Attribution de Votre Nouveau Code d'Accès Financier"} - ${userData.codeOTP!.toString()}`,
      html: emailHtml,
    };


  const data =  await transporter.sendMail(options);
console.log(`kris ${JSON.stringify(data)}}`);

  

    }

    
    

 return new Response(JSON.stringify(enterprise));
   }


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


export async function DELETE(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  if (searchParams.get("userId") != null) {
     

    const project = await prisma.user.findFirst({
      where: {
        id: searchParams.get("userId")!,
      },
    }); 

    const enteprise = await prisma.enterprise.findFirst({
      where: {
        userId: searchParams.get("userId")!,
      },
    }); 

    await prisma.userDeleted.create({
      data:{
        email:project?.email!.toString(),
        information:JSON.stringify(enteprise)
      }
      
    })

    const emailHtml1 = render(DeleteUser({user:project,enterprise:enteprise, type:searchParams.get("type")! }));
    const emailHtml = render(DeleteUserUser({user:project,enterprise:enteprise}));

 
    
    const options1 = {
      from: 'Payme finance <support@paymefinance.com>',
      to: "suppression.paymefinance@gmail.com",
      subject: `${enteprise!.name} - Notification de suppression du compte  `,
      html: emailHtml1,
    };
    const options = {
      from: 'Payme finance <support@paymefinance.com>',
      to: project!.email!.toString(),
      subject: `Notification de suppression de votre compte 😔`,
      html: emailHtml,
    };


    const data1 =  await transporter.sendMail(options1);
  const data =  await transporter.sendMail(options);


  const deleteUser = await prisma.user.delete({
    where: {
      id: searchParams.get("userId")!,
    },
  });
 

    
    return new Response(JSON.stringify(project));
  }
}

