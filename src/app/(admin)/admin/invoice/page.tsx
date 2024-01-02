import React from "react";
import { RiAddCircleFill } from "react-icons/ri";
import { AddInvoiceCategory } from "./AddInvoiceCategory";
import { prisma } from "@/utils/prisma";
import { AddInvoiceInvoice } from "./AddInvoiceInvoice";
import { InvoiceItem } from "./InvoiceItem";

async function page() {

  const datasCategories = await prisma.category.findMany({
    orderBy: {
      name: 'asc'
    }
  });
  const datasInvoice = await prisma.invoiceList.findMany({
    orderBy: {
      invoiceFileName: 'asc'
    },
    include:{category:true}
  });

  return (
    <div className="flex flex-col h-full overflow-y-scroll ">
      {/* Button Add */}
      <div className="flex items-center justify-between w-full gap-4 mt-8">
        <p className="text-5xl font-bold">
          Facture
        </p>
      <div className="flex gap-4">
      <AddInvoiceCategory/>
      <AddInvoiceInvoice/>
      </div>
        
      </div>
      {/* Liste Category */}
 
    <div className="flex gap-2 pt-5 mt-6">
    <div className="flex items-center justify-center gap-2 p-2 px-4 text-[14px] font-light rounded-md cursor-pointer hover:brightness-110 bg-zinc-800">
      Tous

    </div>
   {datasCategories.map((category) => (
     <CategoryItem  key={category.id} item={category} />
   ))}
        
    </div>
    <div className="flex flex-wrap gap-2 pt-5 mt-0 overflow-y-scroll ">
    
   {datasInvoice.map((category) => (
     <InvoiceItem key={category.id}  item={category} />
   ))}
        
    </div>
    </div>
  );

  function CategoryItem({item}:{item:any}) {
    return <div className="flex items-center justify-center gap-2 p-2 px-4 text-[14px] font-light rounded-md cursor-pointer hover:brightness-110 bg-zinc-800">
      {item.name}

    </div>
  }

}

export default page;
