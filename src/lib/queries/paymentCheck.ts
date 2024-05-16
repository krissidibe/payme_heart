import { prisma } from "@/utils/prisma";
export const checkPayment = async (id: string) => {
  console.log("checkPayment");
  const data = await prisma.user.findFirst({
    where: {
      id: id,
    },
    include: {
      subscribe: true,
    },
  });

  if (data!.subscribe == null || data!.subscribe!.endAt == null) {
    return false;
}

  const compareDateIsGreat =
    new Date(data!.subscribe!.endAt ?? "") > new Date(Date.now());


  
 
  if (compareDateIsGreat) {
    return true;
}
return false;
};
