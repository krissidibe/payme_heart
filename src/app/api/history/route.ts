import puppeteer from "puppeteer";
import Handlebars from "handlebars";
import path from "path";
import fs from "fs-extra";
import { NextRequest } from "next/server";
import dayjs from "dayjs";
import ejs from "ejs";
import { country } from "@/utils/country";
const daysFr = (day: any) => {
  return dayjs(`${day}`).format("DD/MM/YYYY");
};

const compile = async (value: any) => {
  const data = value;

  const filePath = path.join(process.cwd(), "public", "historyejs2.ejs");
  const html = await fs.readFile(filePath, "utf-8");

  return ejs.renderFile(filePath, { data });
  //return Handlebars.compile(html)({"data":value});
};

export async function GET() {
  console.log("yes Post");
}
export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const startAt = searchParams.get("startAt");
  const endAt = searchParams.get("endAt");
  const currency = searchParams.get("currency");
  const dataNew = await req.json();
  /*   console.log(dataNew.dataTable);
 console.log(startAt);
 console.log(endAt); */
  //var html = template(context);

  // return new Response(JSON.stringify(value));
  /*  try {
  fs.unlinkSync("public/" + "exemple.pdf");

   
} catch (err) {
  
} 


) */
  let baseValue = "";

  let dd = await (async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    const initialValue = 0;
    const dataTable = [dataNew.dataTable];

    const sumWithInitial = dataNew.dataTable.reduce(
      (accumulator: any, currentValue: any) =>
        parseFloat(accumulator) +
        parseFloat(currentValue.amountTotal),
      initialValue
    );
    const sumWithInitialTva = dataNew.dataTable.reduce(
      (accumulator: any, currentValue: any) =>
        parseFloat(accumulator) +
        parseFloat(
          currentValue.amountTva == null ? "0" : currentValue.amountTva
        ),
      initialValue
    );
    //console.log(JSON.stringify(dataTable));

    console.log(dataNew.dataTable);

    const logo = `https://paymefinance.com/images/logo-payme-complet.png`;
    //const logo =`${process.env.BASE_API_URL}/files/logo-payme-complet.png`


  
    
    const datasFilter =  currency
    console.log("1",datasFilter);
    console.log("2", dataNew);
    console.log("2", dataNew.currency);

    dataTable.forEach((i) => (i.createdAt = daysFr(i.createdAt)));
    dataTable.forEach(
      (i) =>
        (i.type =
          i.type == 0
            ? "Virement bancaire"
            : i.type == 1
            ? "Paiement en espèce"
            : "Paiement par chèque")
    );
    const content = await compile({
      logo: logo,
      startAt: daysFr(startAt),
      endAt: daysFr(endAt),
      enterprise: dataNew.enterprise,
      dataTable: JSON.parse(JSON.stringify(dataTable[0])),
      totalTTC:  sumWithInitial,
      totalTva:  sumWithInitialTva,
      currency: dataNew.currency,
    });

    // Navigate the page to a URL

    await page.setContent(content);
    const buffer = await page.pdf({
      format: "A4",

      printBackground: true,
      // footerTemplate: headerTemplate,
      // headerTemplate:footerTemplate,
      //marginTop:"10px",
      //marginBottom: "50px",
      displayHeaderFooter: false,

      margin: {
        top: "0px",
        right: "0px",
        bottom: "10px",
        left: "0px",
      },
    });
    const base64 = buffer.toString("base64");
    //console.log(`data:application/pdf;base64,${base64}`);
    //value =`data:application/pdf;base64,${base64}`;
    await browser.close();
    return buffer;
  })();

  //console.log(dd);

  return new Response(dd, {
    headers: {
      // copy the previous headers
      "content-disposition": `attachment; filename="${"facture du client "}.pdf"`,
    },
  });

  const DUMMY_URL = "http://localhost:3000/exemple.pdf";

  const response = await fetch(DUMMY_URL);

  return new Response(response.body, {
    headers: {
      // copy the previous headers
      "content-disposition": `attachment; filename="${"facture du client "}.pdf"`,
    },
  });
}
