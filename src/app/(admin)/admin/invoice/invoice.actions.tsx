"use server"
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
export const deleteItem = async (item:string) => {
    const data = await prisma.invoiceList.delete({
        where: {
        id: item,
        },
    })
    revalidatePath("/admin/invoice")
}



