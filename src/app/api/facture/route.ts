import puppeteer from "puppeteer";
import Handlebars from "handlebars";
import Pdfrenderer from "@/components/pdfrenderer";
import { NextRequest, NextResponse } from "next/server";
const ejs = require("ejs");
import path from "path";
import fs from "fs-extra";

import { ToWords } from "to-words";
import { country } from "@/utils/country";
import dayjs from "dayjs";

export async function POST(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  const dataNew: any = await req.json();

  const name = "ISOK";

  const compile = async () => {
    const filePath = path.join(
      process.cwd(),
      "public",
      `invoices/${dataNew.invoiceFileName}.ejs`
    );
    const html = await fs.readFile(filePath, "utf-8");

    //console.log(filePath.replace("#primaryColor","yellow"));
    // console.log(html.replace("#primaryColor","yellow"));

    //   console.log(html.replace("#primaryColor;","yellow"));

    const initialValue = 0; 
    const totalHtCalcule = JSON.parse(dataNew.project.table).reduce((accumulator:any, currentValue:any) => accumulator + parseFloat(currentValue.amount), initialValue);
 

 
    /* 
    
    /* 
      .toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")
      */

    const toWords = new ToWords({
      localeCode: "fr-FR",
      converterOptions: {
        currency: false,
      },
    });
    const totalDiscount = parseFloat(
      (
        (parseFloat(totalHtCalcule) *
          parseFloat(
            dataNew.project.discount == "" ? 0 : dataNew.project.discount
          )) /
        100
      ).toString()
    );
   
    
    const totalHT = parseFloat(totalHtCalcule);
 

  //  console.log("totalHT");
   // console.log(dataNew.project.table);
   // console.log(totalDiscount);
   // console.log(totalHT);
   // console.log("totalHT");



   /* 
   
     function totalsTVA() {
    const value =
      ((totalsHT() - totalsRemise()) *
        parseFloat(tvaValue == "" ? 0 : tvaValue)) /
      100;

    return parseFloat(value);
  }
   */



    const totalTva = parseFloat(
      (
        ((parseFloat(totalHtCalcule) - parseFloat(totalDiscount.toString())) *
          parseFloat(dataNew.project.tva == "" ? 0 : dataNew.project.tva)) /
        100
      ).toString()
    );


 
    
    const total = parseFloat(dataNew.project.amountTotal);

    const totalAccount = parseFloat(
      (
        (total *
          parseFloat(
            dataNew.project.modalite == "" ? 0 : dataNew.project.modalite
          )) /
        100
      ).toString()
    );
    const totalReliquat = parseFloat((total - totalAccount).toString());

/*     const totalLetter = toWords
      .convert(total)
      .replaceAll("Et", "")
      .replaceAll("-", " ");

 */
      
const totalLetterConv = total.toFixed(2).toString().replace(",00", "")

     


        const letter = `
        ${toWords
          .convert(parseFloat(totalLetterConv))
          .replaceAll("Et", "")
          .replaceAll("-", " ")} 

      

   
        `
        

        const totalLetter = letter
  
  


    let logo;
    let signature;

    if (process.env.NODE_ENV == "development") {
      logo = `${process.env.BASE_API_URL}/files/logo-${dataNew.enterprise.id}.png`;
      signature = `${process.env.BASE_API_URL}/files/signature-${dataNew.enterprise.id}.png`;
    } else {
      logo = `https://paymefinance.com/files/logo-${dataNew.enterprise.id}.png`;
      signature = `https://paymefinance.com/files/signature-${dataNew.enterprise.id}.png`;
    }

    /*  const logo =`${process.env.BASE_API_URL}/files/logo-${dataNew.enterprise.id}.png`
      const signature =`${process.env.BASE_API_URL}/files/signature-${dataNew.enterprise.id}.png`  */

    /* const logo =`https://paymefinance.com/files/logo-${dataNew.enterprise.id}.png`
      const signature =`https://paymefinance.com/files/signature-${dataNew.enterprise.id}.png` */

    let invoiceTypeName = "";
    switch (dataNew.invoiceType) {
      case 0:
        invoiceTypeName = "Proforma";
        break;
      case 1:
        invoiceTypeName = "Facture";
        break;
      case 2:
        invoiceTypeName = "Bordereau";
        break;

      default:
        break;
    }

    const datasFilter = country.filter((item) =>
      item.Phone.toString()
        .toLowerCase()
        .includes(dataNew.enterprise.currency.toString().replaceAll('"', ""))
    );

    const dataText = dayjs(
      `${
        dataNew.invoiceType == 0
          ? dataNew.project.proformaDate
          : dataNew.project.invoiceDate
      }`
    ).format("DD/MM/YYYY");

    const dataTextFinal =
      dataText == "Invalid Date"
        ? dayjs(`${dataNew.project.createdAt}`).format("DD/MM/YYYY")
        : dataText;

    const dataEnterprise = dataNew.enterprise;
    const enterpriseInfo = `${dataEnterprise?.name} - notre adresse ${
      dataEnterprise?.address
    } ${
      dataEnterprise?.rccm.length > 0 ? `- Rccm : ${dataEnterprise?.rccm}` : ""
    } - Email : ${dataEnterprise?.email} ${
      dataEnterprise?.bankNumber.length > 0
        ? `- Compte Bank : ${dataEnterprise?.bankNumber}`
        : ""
    } Tél : + ${JSON.parse(dataEnterprise?.numbers)[0].indicatif} ${
      JSON.parse(dataEnterprise?.numbers)[0].number
    }  ${
      JSON.parse(dataEnterprise?.numbers)[1]?.indicatif.length > 0
        ? `/ + ${JSON.parse(dataEnterprise?.numbers)[1]?.indicatif} ${
            JSON.parse(dataEnterprise?.numbers)[1]?.number
          }`
        : ""
    } ${
      JSON.parse(dataEnterprise?.nif)[0]?.content.length > 0
        ? `- ${JSON.parse(dataEnterprise?.nif)[0]?.content}`
        : ""
    } ${
      JSON.parse(dataEnterprise?.nif)[1]?.content.length > 0
        ? `${JSON.parse(dataEnterprise?.nif)[1]?.content}`
        : ""
    } 
  
  ${
    dataEnterprise?.website.length > 0
      ? `- Site Web : ${dataEnterprise?.website}`
      : ""
  }
  `;

 

 
  const tableArray = JSON.parse(dataNew.project.table).map((item:any)=> {
    item.quantity =( item.quantity == null || item.quantity == "") ? "" :  parseFloat(item.quantity
      .toString())
      .toFixed(2)
      .replace(".", ",").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "#").replace(".", ",").replaceAll("#", ".").replace(",00", "")
      item.rate = (item.rate == null || item.rate == "" )? "" : parseFloat(item.rate
        .toString())
        .toFixed(2)
        .replace(".", ",").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "#").replace(".", ",").replaceAll("#", ".").replace(",00", "")
        item.amount = (item.amount == null || item.amount == ""   ) ? "" : parseFloat(item.amount
          .toString())
          .toFixed(2)
          .replace(".", ",").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "#").replace(".", ",").replaceAll("#", ".").replace(",00", "")
  
    return item
    
  })
 

 
 
  
    return ejs.renderFile(filePath, {
      primaryColor: dataNew.primaryColor,
      secondaryColor: dataNew.secondaryColor,
      logo: logo,
      signed: dataNew.signed,
      date: dataTextFinal,
      signature: signature,
      invoiceTypeName: invoiceTypeName,
      invoiceType: dataNew.invoiceType,
      currency: datasFilter[0].Currency,
      totalAccount: parseFloat(totalAccount.toString()).toFixed(2).replace(".", ",").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "#").replace(".", ",").replaceAll("#", ".").replace(",00", "")
         ,
        
      totalReliquat:parseFloat( totalReliquat
        .toString())
        .toFixed(2)
        .replace(".", ",").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "#").replace(".", ",").replaceAll("#", ".").replace(",00", ""),
      totalLetter: totalLetter,
      dataEnterpriseInfo: enterpriseInfo,
      total:  parseFloat(total.toString()).toFixed(2)
      .replace(".", ",").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "#").replace(".", ",").replaceAll("#", ".").replace(",00", ""),
      totalTva: parseFloat(totalTva
        .toString())
        .toFixed(2)
        .replace(".", ",").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "#").replace(".", ",").replaceAll("#", ".").replace(",00", ""),
      totalHT:parseFloat(totalHT
        .toString())
        .toFixed(2)
        .replace(".", ",").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "#").replace(".", ",").replaceAll("#", ".").replace(",00", ""),
      totalDiscount:parseFloat( totalDiscount
        .toString())
        .toFixed(2)
        .replace(".", ",").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, "#").replace(".", ",").replaceAll("#", ".").replace(",00", "")
        ,
      enterprise: dataNew.enterprise,
      project: dataNew.project,
      customer: dataNew.project.customer,
   //  table: JSON.parse(dataNew.project.table),
     table: tableArray,
    });
    //return Handlebars.compile(html)({"data":value});
  };

  let dd = await (async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors', '--ignore-certificate-errors-spki-list', '--disable-dev-shm-usage'],
      timeout:0
    //  args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    const dataHtml = await compile();
    /*    console.log("===>");
   console.log(dataHtml.replace("#primaryColor",dataNew.primaryColor).replace("#secondaryColor",dataNew.secondaryColor));
   
       */

    const rootHtml = `
   :root {

    ${
      dataNew.primaryColor != ""
        ? `--primary-color: ${dataNew.primaryColor};`
        : ""
    }
    ${
      dataNew.secondaryColor != ""
        ? `--secondary-color: ${dataNew.secondaryColor};`
        : ""
    }

    ${
      dataNew.primaryColor != ""
        ? `--primary-text-color: ${dataNew.primaryTextColor};`
        : ""
    }
    ${
      dataNew.secondaryColor != ""
        ? `--secondary-text-color: ${dataNew.secondaryTextColor};`
        : ""
    }
   
  }
   `;

    /*  console.log("===>");
   console.log(dataHtml.replace(":root",rootHtml)); */
    await page.setContent(dataHtml.replace(":root", rootHtml));

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
        bottom: "0px",
        left: "0px",
      },
    });
    const base64 = buffer.toString("base64");

    await browser.close();
    return buffer;
    return base64;
  })();

  return new Response(dd, {
    headers: {
      "content-disposition": `attachment; filename="${"facture du client "}.pdf"`,
    },
  });
}
