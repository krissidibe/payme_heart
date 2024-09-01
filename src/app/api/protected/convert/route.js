import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { CustomerType, ProjectType } from "@prisma/client";  
import CurrencyAPI from '@everapi/currencyapi-js';







async function GetCurrency( devise,newDevise) {
  const apiKey = "cur_live_4ukjJMm6sfXScOuehoM5CxDSq78jnZICNiM2Xz57";

  const client = new CurrencyAPI(apiKey);
   const valueNew = await client.latest({
    base_currency: devise,
    currencies: newDevise
  }) 



  return  Number(valueNew.data[newDevise ?? ""].value);
  
}
 

const compareDates = (d1, d2) => {

  let date1 = new Date(Date.now());
  let date2 = new Date(d2);

  
  const dateNow = `${date1.getDay()}-${date1.getMonth()}-${date1.getFullYear()}`
  const dateCurrency = `${date2.getDay()}-${date2.getMonth()}-${date2.getFullYear()}`
 
  
  if (dateNow == dateCurrency) {
    return true
  }  else {
    return false
  }
};

export async function POST(req, res) {
  const { searchParams } = new URL(req.url);
  const devise = searchParams.get("devise")?.toString()
  const newDevise = searchParams.get("newDevise")?.toString()


 

const data = await prisma.convertCurrency.findFirst({
  where:{
    from:devise,
    to:newDevise,
  }
})


let dateCurrency = new Date(data?.createdAt ?? "").setHours(0,0,0);
 

 const dateSame= compareDates( new Date(Date.now()).setHours(0,0,0),dateCurrency)
 

if (data == null) {
  
const value = await GetCurrency(devise,newDevise)



  const newValue = await prisma.convertCurrency.create({
    data:{
      from:devise ?? "",
      to:newDevise ?? "",
      value:Number(value)
    }
  })


  return new Response(JSON.stringify(newValue.value));
  
}


if (data != null && !dateSame) {
  
  const value = await GetCurrency(devise,newDevise)
  
   const newValue = await prisma.convertCurrency.update({
      where:{
        id:data.id
      },
      data:{
        from:devise ?? "",
        to:newDevise ?? "",
        value:Number(value),
      
        createdAt: new Date(new Date),
        updatedAt: new Date(new Date)
      }
    })


    return new Response(JSON.stringify(newValue.value));
    
  }
  
  
    
 


 

  
return new Response(JSON.stringify(data.value));
}




