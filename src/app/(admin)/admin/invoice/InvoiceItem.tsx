
import React from "react";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaEllipsis } from "react-icons/fa6";
import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";
interface InvoiceItemProps {
  item: any;
}

export function InvoiceItem({ item }: InvoiceItemProps) {
  return (
    <div className="relative max-h-[280px] w-[199px] h-[280px] cursor-pointer max-w-[200px] flex rounded-md bg-gradient-to-b from-[#ffffff13] to-[#ffffff25] gradient-opacity-10 mb-0 m-[6px]">
   <div className="absolute z-40 top-2 right-3">
   <DropdownMenu   >
      <DropdownMenuTrigger asChild>
       <FaEllipsis className="text-black"  />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[110px] mr-20">
        
        <DropdownMenuGroup  >
          
          
          <DropdownMenuItem  className="cursor-pointer" >
           <form className="w-full ">
           <button  className="flex items-start justify-start w-full" formAction={async ()=>{
                "use server"
 
                const data = await prisma.invoiceList.delete({
                    where: {
                    id: item.id,
                    },
                })
                revalidatePath("/admin/invoice")
            }} >

            Supprimer
            </button>
           </form>
          
          </DropdownMenuItem>
        </DropdownMenuGroup>
         
        
        
      </DropdownMenuContent>
    </DropdownMenu>
   </div>
     
      <img className="rounded-md" src={`/images/invoices/${item.invoiceFileName}.jpg`} alt="" />
      <div className="absolute z-20 flex flex-row self-end justify-between w-full h-full px-4 py-2 text-sm bg-gradient-to-t from-black/100 via-black/0 to-black/0 rounded-bl-xs rounded-br-xs">
        <div className="absolute flex flex-col leading-4 text-white bottom-4">
          <h3 className="font-bold" >{item.name.toString().split(" ")[0]} {item.name.split(" ")[1]?.toString().padStart(3, '0')} </h3>
          <h4 className="text-[10px]">{item.category?.name ?? "Non categorisé"}</h4>
        </div>
        {/*  <h3 className="opacity-100">1</h3> */}
      </div>
    </div>
  );
}










 