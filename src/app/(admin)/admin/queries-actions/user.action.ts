"use server";

import { prisma } from "@/utils/prisma";
export const fetchUser = async (form: FormData) => {
  if (form.get("type") == "user") {
    if (form.get("currency")?.toString().trim() == "") {
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

          email:  {
            contains: form.get("searchValue")?.toString(),
            }
          
        },
        
       
        include: { enterprise: true ,subscribe:{ include: {payment:true}},
         _count: {
          select: { project: true },
        }, },
        orderBy: {
          createdAt: 'desc'
        }
      
      });
      Object.assign({}, datas, { _count: datas.length });
      
      
      return datas;
    }

    if (form.get("currency")?.toString().trim() != "") {
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
          email:  {
            contains: form.get("searchValue")?.toString(),
            },
          AND: {
            enterprise: {
              currency: form.get("currency")?.toString().trim() as string,
            },
          },
        },
        include: { enterprise: true ,subscribe:{ include: {payment:true}},
        _count: {
         select: { project: true },
       }, },
       orderBy: {
        createdAt: 'desc'
       }
      });
      Object.assign({}, datas, { _count: datas.length });
      return datas;
    }
  }
  if (form.get("type") == "subscribe") {
    if (form.get("currency")?.toString().trim() == "") {
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
          
          user:  {
            email:  {
              contains: form.get("searchValue")?.toString(),
              },
  
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
        orderBy: {
          createdAt: 'desc'
        }
      });
     const dataNew =  datas.filter((data) => data.user?.id != null);
      Object.assign({}, datas, { _count: datas.length });
      return dataNew;
    }

    if (form.get("currency")?.toString().trim() != "") {
  


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

          user:  {
            email:  {
              contains: form.get("searchValue")?.toString(),
              },
  
          },
        
          AND: {
            user:{
                enterprise: {
                    currency: form.get("currency")?.toString().trim() as string,
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
        orderBy: {
          createdAt: 'desc'
        }
      });
     const dataNew =  datas.filter((data) => data.user?.id != null);
      Object.assign({}, datas, { _count: datas.length });
      return dataNew;
    }
  }
};




export const updateSubscribe = async (userId:any) => {


  let dateEdit = new Date();
  dateEdit.setHours(600,0,0)


  return  await prisma.subscribe.update({
    where:{
       id : userId,
    },
      data: {
      
       
        endAt :  new Date(dateEdit),
         
        },
   })





};


export const updateSubscribeEnd = async (userId:any) => {


  let dateEdit = new Date(Date.now());
  


  return  await prisma.subscribe.update({
    where:{
       id : userId,
    },
      data: {
      
       
        endAt :  new Date(dateEdit),
         
        },
   })





};




export const updateCreditIA = async (userId:any) => {


  let dateEdit = new Date();
  dateEdit.setHours(720,0,0)


 
  const creditIA = await prisma.creditIA.create({
    data: {
      currentAmount: 10,
      amount: 10,
      startAt: new Date(Date.now()).toISOString(),
      endAt: new Date( dateEdit.setMonth(dateEdit.getMonth()) ),
      

    },
  });

  return  await prisma.enterprise.update({
    where: {
      userId:  userId,
    },
     data: {
         creditIAId : creditIA.id ,
         
       },
  })
  


};