import puppeteer from 'puppeteer';
import Handlebars from "handlebars";
import Pdfrenderer from '@/components/pdfrenderer'
import { NextRequest, NextResponse } from 'next/server'
const ejs = require('ejs')
import path from 'path'
import fs from 'fs-extra'

import { ToWords } from "to-words";
import { country } from '@/utils/country';
import dayjs from 'dayjs';
 


 
export async function POST(req:NextRequest,res:NextResponse) {


 
  const { searchParams } = new URL(req.url);
   
  const dataNew:any = await req.json();
     console.log(dataNew);
     
     
 
  
 
     const name = "ISOK"


     const compile  =async () => {
 

 
    
    
      const filePath = path.join(process.cwd(),"public",`invoices/${dataNew.invoiceFileName}.ejs`)
      const html = await fs.readFile(filePath,"utf-8");
      
      
      const initialValue = 0;
      const totalHtCalcule = JSON.parse(dataNew.project.table).reduce((accumulator:any, currentValue:any) => accumulator + currentValue.amount, initialValue);
   
      /* 
      .toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")
      */
 
      const toWords = new ToWords({
        localeCode: "fr-FR",
        converterOptions: {
          currency: false,
        },
      });
      const totalDiscount =  parseInt((totalHtCalcule *  parseInt(dataNew.project.discount == "" ? 0 : dataNew.project.discount) / 100).toString());
      const totalHT =  parseInt(totalHtCalcule);
      const totalTva =parseInt(((parseInt(totalHtCalcule) - parseInt(totalDiscount.toString())) *  parseInt(dataNew.project.tva == "" ? 0 : dataNew.project.tva) / 100).toString());
      const total = parseInt(dataNew.project.amountTotal);




      const totalAccount =parseInt((total *  parseInt(dataNew.project.modalite == "" ? 0 : dataNew.project.modalite) / 100).toString());
      const totalReliquat =parseInt((total - totalAccount).toString());
 



     const totalLetter = toWords
      .convert(total)
      .replaceAll("Et", "")
      .replaceAll("-", " ")
     
   /*    const logo =`${process.env.BASE_API_URL}/files/logo-${dataNew.enterprise.id}.png`
      const signature =`${process.env.BASE_API_URL}/files/signature-${dataNew.enterprise.id}.png`  */
     
      const logo =`https://paymefinance.com/files/logo-${dataNew.enterprise.id}.png`
      const signature =`https://paymefinance.com/files/signature-${dataNew.enterprise.id}.png`
      
 
      let  invoiceTypeName = "";
      switch (dataNew.invoiceType) {
        case 0:
          invoiceTypeName="Proforma";
          break;
        case 1:
          invoiceTypeName="Facture";
          break;
        case 2:
          invoiceTypeName="Bordereau";
          break;
      
        default:
          break;
      }



      console.log("datasFilter");
      console.log(dataNew.signed);
      console.log("datasFilter");
           
  const datasFilter = country.filter((item) => item.Phone.toString().toLowerCase().includes(dataNew.enterprise.currency.toString().replaceAll('"','')))
  console.log(dataNew.enterprise.currency.toString().replaceAll('"',''));
  
  const dataText = dayjs(`${dataNew.invoiceType == 0 ? dataNew.project.proformaDate : dataNew.project.invoiceDate}`).format("DD/MM/YYYY");

  const dataTextFinal = dataText == "Invalid Date" ? dayjs(`${dataNew.project.createdAt}`).format("DD/MM/YYYY") : dataText
   
      return ejs.renderFile(filePath,{
        primaryColor:dataNew.primaryColor,
        secondaryColor:dataNew.secondaryColor,
        logo:logo,
        signed:dataNew.signed,
        date: dataTextFinal ,
        signature:signature,
        invoiceTypeName:invoiceTypeName,
        invoiceType:dataNew.invoiceType,
        currency:datasFilter[0].Currency,
        totalAccount:totalAccount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "."),
        totalReliquat:totalReliquat.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "."),
        totalLetter:totalLetter,
        total:total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "."),totalTva:totalTva.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "."),totalHT:totalHT.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "."),totalDiscount:totalDiscount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "."), enterprise:dataNew.enterprise,project:dataNew.project,customer:dataNew.project.customer,table:JSON.parse(dataNew.project.table)},);
        //return Handlebars.compile(html)({"data":value});
    }
 
 


 let dd=  await (async () => {
 
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: true,
    args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    ],
    });
    const page = await browser.newPage();




 
   
    await page.setContent(await compile());
    const buffer = await page.pdf({
    format:"A4",

    printBackground:true,
   // footerTemplate: headerTemplate,
   // headerTemplate:footerTemplate,
    //marginTop:"10px",
    //marginBottom: "50px",
    displayHeaderFooter:false,
    
    margin: {
      top: "0px",
      right: "0px",
      bottom: "10px",
      left: "0px"
  },
    
  });
  const base64 = buffer.toString('base64');
 
  await browser.close();
  return buffer;
  return base64;
  })();
 
   return new Response(dd,{
    headers: {
      
      "content-disposition": `attachment; filename="${"facture du client "}.pdf"`,
    },
  });  
 
}