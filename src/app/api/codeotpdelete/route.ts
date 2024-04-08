import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma"; 
import nodemailer from 'nodemailer';   
import Welcome from "@/emails/Welcome";
import CodeOTP from "@/emails/CodeOTP";
import transporter from "@/lib/emailSend";
import { render } from "@react-email/components";
import CodeOTPFinance from "@/emails/CodeOTPFinance";
import CodeOTPDelete from "@/emails/CodeOTPDelete";


export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);


  const user = await prisma.user.findFirst({
    where: {
      email: searchParams.get("email")!,
      },
 })
  
    const data = await prisma.codeOTP.findFirst({
      where: {
        userId: user!.id,
        code:searchParams.get("code")!,
         
      },
   
    });  

    console.log(data);
    
    return new Response(JSON.stringify(data));

 // return new Response(JSON.stringify("ENTERPRISE GET"));
}

export async function PATCH(req:NextRequest,res:NextResponse) {
  const { searchParams } = new URL(req.url);
  const dataInfo:any = await req.json();
 
 const user = await prisma.user.update({
  where: {
    email: dataInfo.email!.toString(),
  },
   data: {
       password : dataInfo.newPassword!.toString()  , 
     },
})

return new Response(JSON.stringify(user));

  
 
  
  }






export async function POST(req:NextRequest,res:NextResponse) {
  
  const dataInfo:any = await req.json();

  const numbers = '0123456789';
      
      let numbersPart = '';
      
      for (let i = 0; i < 4; i++) {
        numbersPart += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
      
    

 
      const user = await prisma.user.findFirst({
        where: {
          email: dataInfo.email.toString(),
          },
     })

     if(user == null){

      return new Response(JSON.stringify(null));
    }
      const userOtp = await prisma.codeOTP.findFirst({
        where: {
          userId: user!.id,
          },
     })

     if(userOtp){
      const dataCode = await prisma.codeOTP.update({
       where:{
        userId:user!.id,
        
       },
       data:{
        code:numbersPart.toString(),
        isValid:true,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      
      }
     })  

     }else{
      const dataCode = await prisma.codeOTP.create({
        data: {
          code:numbersPart.toString(),
          userId:user!.id,
          },
     })  
     }


 
     //manager@paymefinance.com
    
     const emailHtml = render( CodeOTPDelete({username:user!.name,code:numbersPart}));


      
      const options = {
        from: 'Payme finance <support@paymefinance.com>',
        to:dataInfo.email!.toString(),
        subject: ` "Code de vérification pour la suppression de votre compte - ${numbersPart}`,
        html: emailHtml,
      };


    const data =  await transporter.sendMail(options);


  
   return new Response(JSON.stringify(user));
  
 }
 













 /* const transporter = nodemailer.createTransport({
        host: 'mail67.lwspanel.com',
        port: 465,
        secure: true,
        auth: {
          user: 'info@concours-fama.com',
          pass: 'Famaconc@2023',
        },
      });   */