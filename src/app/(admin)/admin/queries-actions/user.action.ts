"use server";

import { prisma } from "@/utils/prisma";
export const fetchUser = async (form: FormData) => {
  if (form.get("type") == "user") {
    if (form.get("currency") == "") {
      const datas = await prisma.user.findMany({
        where: {
          createdAt: {
            gte:
              new Date(form.get("startAt") as string)
                .toISOString()
                .substring(0, 10) + "T00:00:00.026Z",
            lte:
              new Date(form.get("endAt") as string)
                .toISOString()
                .substring(0, 10) + "T23:59:00.026Z",
          },
        },
        include: { enterprise: true },
      });
      Object.assign({}, datas, { _count: datas.length });
      return datas;
    }

    if (form.get("currency") != "") {
      const datas = await prisma.user.findMany({
        where: {
          createdAt: {
            gte:
              new Date(form.get("startAt") as string)
                .toISOString()
                .substring(0, 10) + "T00:00:00.026Z",
            lte:
              new Date(form.get("endAt") as string)
                .toISOString()
                .substring(0, 10) + "T23:59:00.026Z",
          },
          AND: {
            enterprise: {
              currency: form.get("currency") as string,
            },
          },
        },
        include: { enterprise: true },
      });
      Object.assign({}, datas, { _count: datas.length });
      return datas;
    }
  }
  if (form.get("type") == "subscribe") {
    if (form.get("currency") == "") {
      const datas = await prisma.payment.findMany({
        where: {
          createdAt: {
            gte:
              new Date(form.get("startAt") as string)
                .toISOString()
                .substring(0, 10) + "T00:00:00.026Z",
            lte:
              new Date(form.get("endAt") as string)
                .toISOString()
                .substring(0, 10) + "T23:59:00.026Z",
          },

          AND: {
            NOT: {
              month: 0,
              
            },
            
            
          },
         
        },

        include: {
          user: {
            include: { enterprise: true },
          },
        },
      });
     const dataNew =  datas.filter((data) => data.user?.id != null);
      Object.assign({}, datas, { _count: datas.length });
      return dataNew;
    }

    if (form.get("currency") != "") {
  


      const datas = await prisma.payment.findMany({
        where: {
          createdAt: {
            gte:
              new Date(form.get("startAt") as string)
                .toISOString()
                .substring(0, 10) + "T00:00:00.026Z",
            lte:
              new Date(form.get("endAt") as string)
                .toISOString()
                .substring(0, 10) + "T23:59:00.026Z",
          },

        
          AND: {
            user:{
                enterprise: {
                    currency: form.get("currency") as string,
                  },
            },
            NOT: {
              month: 0,
              
            },
            
            
          },
         
        },

        include: {
          user: {
            include: { enterprise: true },
          },
        },
      });
     const dataNew =  datas.filter((data) => data.user?.id != null);
      Object.assign({}, datas, { _count: datas.length });
      return dataNew;
    }
  }
};
