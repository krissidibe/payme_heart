import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";



 

  export async function GET(req: NextRequest, res: NextResponse) {
   const { searchParams } = new URL(req.url);
 
   
     const data = await prisma.enterprise.findFirst({
       where: {
         userId: searchParams.get("userId")!,
          
       },
    
     });
 
     return new Response(JSON.stringify(data));

  // return new Response(JSON.stringify("ENTERPRISE GET"));
 }
 








export async function POST(req:NextRequest,res:NextResponse) {


   const { searchParams } = new URL(req.url);
   const id = searchParams.get("id") 
   const email = searchParams.get("email") 

   
   const user = await prisma.user.findFirst({where:{id:id!.toString(), email:email!.toString() }})
   
   
   const  enterpriseData:Enterprise = await req.json();
   return new Response(JSON.stringify(user));
    
     const enterprise = await prisma.enterprise.create({
      
        data: {
            email : enterpriseData.email ,
            activity : enterpriseData.activity ,
            address : enterpriseData.address ,
            numbers : enterpriseData.numbers ,
            currency : enterpriseData.currency ,
            name : enterpriseData.name ,
            rccm : enterpriseData.rccm ,
            nif : enterpriseData.nif ,
            statut : enterpriseData.statut ,
            bankNumber : enterpriseData.bankNumber ,
            website : enterpriseData.website ,
            factureNumber : 0 ,
            createdAt: new Date(Date.now()),
           userId : user!.id,
           
          },
     })

 
  return new Response(JSON.stringify(enterprise));
 
}







export async function PATCH(req:NextRequest,res:NextResponse) {
  const { searchParams } = new URL(req.url);
  const  enterpriseData:Enterprise = await req.json();


  if (searchParams.get("lockFinance") !=null) {
  
    const enterprise = await prisma.enterprise.update({
      where: {
        userId: searchParams.get("userId")!,
      },
       data: {
           lockFinance : enterpriseData.lockFinance
           
          
         },
    })

   
    

 return new Response(JSON.stringify(enterprise));
 
       
   }
  
    const enterprise = await prisma.enterprise.update({
      where: {
        userId: searchParams.get("userId")!,
      },
       data: {
           email : enterpriseData.email ,
           activity : enterpriseData.activity ,
           address : enterpriseData.address ,
           numbers : enterpriseData.numbers ,
           currency : enterpriseData.currency ,
           name : enterpriseData.name ,
           rccm : enterpriseData.rccm ,
           nif : enterpriseData.nif ,
           statut : enterpriseData.statut ,
           bankNumber : enterpriseData.bankNumber ,
           website : enterpriseData.website ,
           
          
         },
    })

   
    

 return new Response(JSON.stringify(enterprise));

}