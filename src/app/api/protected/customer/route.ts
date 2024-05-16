import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { CustomerType } from "@prisma/client";
import { checkPayment } from "@/lib/queries/paymentCheck";
 
 


export async function GET(req:NextRequest,res:NextResponse) {
   const { searchParams } = new URL(req.url);


   
 const checkPaymentValue =  await checkPayment(searchParams.get("userId")!)
 
 if(!checkPaymentValue){
    return new Response(JSON.stringify(null));
   }
 
   if(searchParams.get("trash") !=null){
      const customer = await prisma.customers.findMany({
         where:{
            userId : searchParams.get("userId")!,
           NOT:{
            deletedAt: null
           }
         },
         orderBy:{
            createdAt:"desc"
         }
      })
      return new Response(JSON.stringify(customer));
   }





   if(searchParams.get("last") !=null){
      const customer = await prisma.customers.findMany({
         where:{
            userId : searchParams.get("userId")!,
            deletedAt: null
         },
         orderBy:{
            createdAt:"desc"
         }
      })
      return new Response(JSON.stringify(customer));
   }


   const customer = await prisma.customers.findMany({
      where:{
         userId : searchParams.get("userId")!,
         deletedAt: null
      },
      orderBy:{
         name:"asc"
      }
   })


return new Response(JSON.stringify(customer));
  }

export async function POST(req:NextRequest,res:NextResponse) {

   const { searchParams } = new URL(req.url);
  // const id = searchParams.get("id") 
 
 
  const checkPaymentValue =  await checkPayment(searchParams.get("userId")!)
 
  if(!checkPaymentValue){
   return new Response(JSON.stringify(null));
    }
  
 
  const  customerData:Customer = await req.json();
    
     const customer = await prisma.customers.create({
      
        data: {
           userId : searchParams.get("userId")!,
           externalContact : customerData.externalContact,
           externalEmail : customerData.externalEmail,
           externalName : customerData.externalName,
           poste : customerData.poste,
           activity : customerData.activity,
           address : customerData.address,
           country : customerData.country,
           email : customerData.email,
           image : customerData.image,
           name : customerData.name,
           type : customerData.type == "ENTERPRISE"  ?  CustomerType.ENTERPRISE : CustomerType.PERSONAL,
           createdAt: new Date(Date.now())
           
          },
     })

 
  return new Response(JSON.stringify(customer));
 
}
export async function PATCH(req:NextRequest,res:NextResponse) {

   const { searchParams } = new URL(req.url);
 




  if (searchParams.get("intrash") != null) {
   
    
  


   const customer = await prisma.customers.update({
      where:{
         id : searchParams.get("customerId")!,
      },
        data: {
         
           deletedAt : new Date(Date.now())
           
          },
     }) 
   
   
    
     return new Response(JSON.stringify(customer));
}

  if (searchParams.get("outtrash") != null) {
   
 


   const customer = await prisma.customers.update({
 where:{
     id: searchParams.get("customerId")!,
 },
 data: {
  deletedAt :null
 },
});

return new Response(JSON.stringify(customer));
}
 
const  customerData:Customer = await req.json();

     const customer = await prisma.customers.update({
      where:{
         id : searchParams.get("customerId")!,
      },
        data: {
         
           externalContact : customerData.externalContact,
           externalEmail : customerData.externalEmail,
           externalName : customerData.externalName,
           poste : customerData.poste,
           activity : customerData.activity,
           address : customerData.address,
           country : customerData.country,
           email : customerData.email,
           image : customerData.image,
           name : customerData.name,
           type : customerData.type == "ENTERPRISE"  ?  CustomerType.ENTERPRISE : CustomerType.PERSONAL,
          
           
          },
     })

 
  return new Response(JSON.stringify(customer));
 
}










export async function DELETE(req:NextRequest,res:NextResponse) {
   
   const { searchParams } = new URL(req.url);
  // const id = searchParams.get("id") 
 

  if (searchParams.get("deleteall") != null) {

   const project = await prisma.customers.deleteMany({
     where:{
        userId : searchParams.get("userId")!, 
        NOT:{
         deletedAt: null
        }
     },
       
    }) 
 
    return;
  }
 

 
  const customer = await prisma.customers.delete({
   where:{
      id : searchParams.get("customerId")!,
   },
     
  }) 

  }