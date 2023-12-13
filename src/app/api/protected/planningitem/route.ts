import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { FolderType, PlanningItem } from "@prisma/client";

export async function GET(req: NextRequest, res: NextResponse) {
 
  const { searchParams } = new URL(req.url);


  if (searchParams.get("userId") != null && searchParams.get("startAt") != null && searchParams.get("endAt") &&  searchParams.get("dashboard") != null) {


 
    
 

 

    const dataChild = await prisma.planningItem.findMany({
      where: {
        userId: searchParams.get("userId")!,
        date: {
          gte: new Date(searchParams.get("startAt")!).toISOString().substring(0,10) +"T00:00:00.026Z"  ,
          lte: new Date(searchParams.get("endAt")!).toISOString().substring(0,10) +"T23:59:00.026Z"  ,
          //lte: new Date(Date.now() + (3600 * 1000 * 24)) ,
        },
      },
      orderBy: {
        date: "asc",
      },
      include: { planning: true },
    });

 

   

    return new Response(JSON.stringify(dataChild));
  }


  if (searchParams.get("userId") != null && searchParams.get("startAt") != null && searchParams.get("endAt")) {


 
    
    console.log( new Date(searchParams.get("startAt")!).toISOString().substring(0,10) +"T00:00:00.026Z" );
    
   
    



    const project = await prisma.planning.findMany({
      where: {
        userId: searchParams.get("userId")!,
        PlanningItems: {
          some: {
            date: {
              gte: new Date(searchParams.get("startAt")!).toISOString().substring(0,10) +"T00:00:00.026Z"  ,
              lte: new Date(searchParams.get("endAt")!).toISOString().substring(0,10) +"T23:59:00.026Z"  ,
              //lte: new Date(Date.now() + (3600 * 1000 * 24)) ,
            },
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    const dataChild = await prisma.planningItem.findMany({
      userId: searchParams.get("userId")!,
      where: {
        date: {
          gte: new Date(searchParams.get("startAt")!).toISOString().substring(0,10) +"T00:00:00.026Z"  ,
          lte: new Date(searchParams.get("endAt")!).toISOString().substring(0,10) +"T23:59:00.026Z"  ,
          //lte: new Date(Date.now() + (3600 * 1000 * 24)) ,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      include: { planning: true },
    });

 

    project.forEach((it) => {
      const obj = Object.assign(it, {
        children: dataChild.filter((item) => item.planning.id == it.id),
        size: dataChild.length,
        sizeNotCompleted: dataChild.filter((item) => item.isCompleted == false)
        .length,
        sizeCompleted:dataChild.filter((item) => item.isCompleted == true).length,
     
        
      });
    });

    return new Response(JSON.stringify(project));
  }





  if (searchParams.get("userId") != null && searchParams.get("todayDashboard")) {

  
  
    const dataChild = await prisma.planningItem.findMany({
      where: {
        userId: searchParams.get("userId")!,
        date: {
          gte: new Date(new Date(Date.now())).toISOString().substring(0,10) +"T00:00:00.026Z",
          lte:new Date(new Date(Date.now())).toISOString().substring(0,10) +"T23:59:00.026Z",
          //lte: new Date(Date.now() + (3600 * 1000 * 24)) ,
        },
        AND:{
          isCompleted : false,
          archive:false
        }
      },
      orderBy: {
        date: "desc",
      },
      include: { planning: true },
    });
    

    return new Response(JSON.stringify(dataChild));
  }






  if (searchParams.get("userId") != null && searchParams.get("today")) {

  
    
    const project = await prisma.planning.findMany({
      where: {
        userId: searchParams.get("userId")!,
        PlanningItems: {
          some: {
            date: {
              gte: new Date(new Date(Date.now())).toISOString().substring(0,10) +"T00:00:00.026Z",
              lte: new Date(new Date(Date.now())).toISOString().substring(0,10) +"T23:59:00.026Z",
              //lte: new Date(Date.now() + (3600 * 1000 * 24)) ,
            },
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    const dataChild = await prisma.planningItem.findMany({
      where: {
        userId: searchParams.get("userId")!,
        
        date: {
          gte: new Date(new Date(Date.now())).toISOString().substring(0,10) +"T00:00:00.026Z",
          lte:new Date(new Date(Date.now())).toISOString().substring(0,10) +"T23:59:00.026Z",
          //lte: new Date(Date.now() + (3600 * 1000 * 24)) ,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      include: { planning: true },
    });  

 

    project.forEach((it) => {
      const obj = Object.assign(it, {
        children: dataChild.filter((item) => item.planning.id == it.id),
        size: dataChild.length,
        sizeCompleted:dataChild.filter((item) => item.isCompleted == true).length,
        sizeNotCompleted:dataChild.filter((item) => item.isCompleted == false).length,
        
      });
    });

    return new Response(JSON.stringify(project));
  }

  if (
    searchParams.get("userId") != null &&
    searchParams.get("search") != null
  ) {
    const project = await prisma.planning.findMany({
      where: {
        userId: searchParams.get("userId")!,
        PlanningItems: {
          some: {
            OR: [ 
              {
                name: {
                  contains: searchParams.get("search")!,
                },
              },
            ],
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    const dataChild = await prisma.planningItem.findMany({
      where: {
        OR: [
          {
            name: {
              contains: searchParams.get("search")!,
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      include: { planning: true },
    });

    project.forEach((it) => {
      const obj = Object.assign(it, {
        children: dataChild.filter((item) => item.planning.id == it.id),
      });
    });

    return new Response(JSON.stringify(project));
  }

  /* 
   if (searchParams.get("search") != null) {
    const project = await prisma.planningItem.findMany({
      where: {
        
        content: {
          contains :  searchParams.get("search")!,
        },
        
        deletedAt:null
      },
      orderBy: {
        createdAt: "desc",
      }, 
      include:{planning:true}
    });

    return new Response(JSON.stringify(project));
  } */

  if (searchParams.get("planningId") != null) {
    const project = await prisma.planningItem.findMany({
      where: {
        planningId: searchParams.get("planningId")!,

        deletedAt: null,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return new Response(JSON.stringify(project));
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  const dataNew: PlanningItem = await req.json();

  const enterprise = await prisma.planningItem.create({
    data: {
      userId: searchParams.get("userId")!,
      id: dataNew.id,
      name: dataNew.name,
      color: dataNew.color,
      content: dataNew.content,
      date: dataNew.date == null ? null : new Date(dataNew.date!).toISOString(),

      createdAt: new Date(Date.now()),
      planningId: searchParams.get("planningId")!,
    },
  });

  return new Response(JSON.stringify(enterprise));
}

export async function PATCH(req: NextRequest, res: NextResponse) {
 
  const { searchParams } = new URL(req.url);
  if (searchParams.get("planningItemId") && searchParams.get("archive")) {
   
   
  
     
    const enterprise = await prisma.planningItem.update({
      where: {
        id: searchParams.get("planningItemId")!,
      },
      data: {
        archive : searchParams.get("archive")?.toString() == "false" ? false : true
      },
    });
  
    
    return new Response(JSON.stringify(enterprise));
  }
  if (searchParams.get("planningItemId") && searchParams.get("toggle")) {
   
   
  
     
    const enterprise = await prisma.planningItem.update({
      where: {
        id: searchParams.get("planningItemId")!,
      },
      data: {
        isCompleted : searchParams.get("toggle")?.toString() == "false" ? false : true,
        archive:false
      },
    });
  
    
    return new Response(JSON.stringify(enterprise));
  }

  const dataNew: PlanningItem = await req.json();

  const enterprise = await prisma.planningItem.update({
    where: {
      id: searchParams.get("planningItemId")!,
    },
    data: {
      name: dataNew.name,
      color: dataNew.color,
      content: dataNew.content,
      date: dataNew.date == null ? null : new Date(dataNew.date!).toISOString(),
      archive:false
    },
  });

  return new Response(JSON.stringify(enterprise));
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);

  if (searchParams.get("planningItemId") != null) {
    const project = await prisma.planningItem.delete({
      where: {
        id: searchParams.get("planningItemId")!,
      },
    });

    return new Response(JSON.stringify(project));
  }
}
