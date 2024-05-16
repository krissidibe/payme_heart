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

  const compareDateIsGreat =
    new Date(data?.subscribe?.endAt ?? "") > new Date(Date.now());


    if (data?.subscribe?.endAt == null) {
        return false;
    }
 
  if (compareDateIsGreat) {
    return true;
}
return false;
};
