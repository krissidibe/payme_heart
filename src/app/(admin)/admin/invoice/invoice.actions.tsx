"use server"
import { prisma } from "@/utils/prisma";
export const deleteItem = async (item:string) => {
    const data = await prisma.invoiceList.delete({
        where: {
        id: item,
        },
    })
}