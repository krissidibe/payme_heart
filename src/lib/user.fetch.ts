import { getServerSession } from "next-auth";
import { authOptions } from "./authOption";
import {prisma} from '@/utils/prisma'
export default async function getUser(){
    const session = await getServerSession(authOptions)

   const user = await  prisma.user.findUnique({
        where: {
            email: session?.user?.email?.toString()
        }
    })

    return user

}