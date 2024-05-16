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

  console.log("compareDateIsGreat", compareDateIsGreat);

  if (compareDateIsGreat) {
    return true;
}
return false;
};
