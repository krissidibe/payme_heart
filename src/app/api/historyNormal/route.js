import puppeteer from 'puppeteer';
import Handlebars from "handlebars";
import path from 'path'
import fs from 'fs-extra'
import { NextRequest } from 'next/server';
import dayjs from "dayjs";

 
const compile  =async (value) => {
 
  const daysFr =(day)=>{
    return  dayjs(`${day}`).format("DD/MM/YYYY")
  }
  const filePath = path.join(process.cwd(),"public","history.hbs")
  const html = await fs.readFile(filePath,"utf-8");
  
  
    return Handlebars.compile(html)({"data":value});
}

export async function GET() {
 console.log("yes Post"); 

 
}
export async function POST(req) {


  const { searchParams } = new URL(req.url);
  const startAt = searchParams.get("startAt") 
  const endAt = searchParams.get("endAt") 
  const dataNew = await req.json();
  console.log(dataNew.dataTable);
 console.log(startAt);
  //var html = template(context);

 // return new Response(JSON.stringify(value));
/*  try {
  fs.unlinkSync("public/" + "exemple.pdf");

   
} catch (err) {
  
} 


) */
 let baseValue = ""
 let dd=  await (async () => {
  const footer = `<footer style="margin: auto; width: 40%">
  <img style="float: left; marginRight: 8px; marginLeft: 36px; width: 25%" src="data:image/jpeg;base64,/9j/4AAQSkZJRgAB...09Yv//Z" alt="Pivohub" />
  <p style="font-family: arial; float: right; width: 55%; color: red; margin-top: 24px; font-size: 10px">
      <b>My footer</b>
  </p>
</footer>`


const headerTemplate = ` 
                            <div style=" font-size: 12px;padding: 10px 10px; text-align: center;  color:black;background-color: #2E9D24 ; border-top : 1px solid black ">   Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus error esse eligendi tenetur laboriosam aliquid odio, officiis id dolorum unde praesentium, dolore, ab architecto! Laudantium beatae velit facere officiis.</div>
                       `
const footerTemplate = `<div style="margin: 0 2cm; width: 75%; font-size: 7px; text-align: center;">Disclaimer</div>`;

    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({headless:true,  args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors', '--ignore-certificate-errors-spki-list', '--disable-dev-shm-usage'],
    timeout:0});
    const page = await browser.newPage();

    const test = dataNew.dataTable.forEach(i => i.createdAt =  daysFr(i.createdAt))
    const content =await compile({startAt:startAt,endAt:endAt,enterprise:dataNew.enterprise,dataTable:dataNew.dataTable})
   
    // Navigate the page to a URL
    await page.setContent(content);
    const buffer = await page.pdf({
    format:"A4",

    printBackground:true,
    footerTemplate: headerTemplate,
   // headerTemplate:footerTemplate,
    marginTop:"10px",
    marginBottom: "50px",
    displayHeaderFooter:false,
    
    margin: {
      top: "0px",
      right: "0px",
      bottom: "70px",
      left: "0px"
  },
    
  });
  const base64 = buffer.toString('base64');
  //console.log(`data:application/pdf;base64,${base64}`); 
  //value =`data:application/pdf;base64,${base64}`; 
  await browser.close();
  return buffer;
  })();
  
  //console.log(dd);

  return new Response(dd,{
    headers: {
      // copy the previous headers
      "content-disposition": `attachment; filename="${"facture du client "}.pdf"`,
    },
  });
 
 

  const DUMMY_URL =
  "http://localhost:3000/exemple.pdf";
   
  const response = await fetch(DUMMY_URL);



  
  
  return new Response(response.body, {
    headers: {
      // copy the previous headers
      "content-disposition": `attachment; filename="${"facture du client "}.pdf"`,
    },
  });
 
  }
  


 