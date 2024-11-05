"use server"
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
export const postAppVersion = async (item:any) => {

   
    
   const dataFirst = await prisma.appVersion.findFirst({
        
    })
    const data = await prisma.appVersion.update({
        where: {
        id: dataFirst?.id,
        },
        data: {
            code: item.code,
            name: item.name,
            windowsLink: item.windowsLink,
            macLink: item.macLink,
            required: item.required,
        }
    }) 
    console.log("====");
    console.log(data);
    
    revalidatePath("/admin/version")
}



