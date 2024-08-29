import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { CustomerType, ProjectType } from "@prisma/client";
import { checkPayment } from "@/lib/queries/paymentCheck";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);


     


  if (searchParams.get("trash") != null) {
    const project = await prisma.project.findMany({
      where: {
        userId:  searchParams.get("userId")!,
       NOT:{
        deletedAt: null
       }
      },
      orderBy: {
        createdAt: "desc",
      },
      include: { customer: true },
    });

    return new Response(JSON.stringify(project));
  }
  if (searchParams.get("projectId") != null) {
    const project = await prisma.project.findFirst({
      where: {
        id: searchParams.get("projectId")!,
        deletedAt: null
      },
      orderBy: {
        createdAt: "desc",
      },
      include: { customer: true },
    });

    return new Response(JSON.stringify(project));
  }

  if (searchParams.get("userId") != null,searchParams.get("isvalide") != null) {
    const projects = await prisma.project.findMany({
      where: {
        userId: searchParams.get("userId")!,
       type : "ISVALIDATE",
        deletedAt: null
       
      },
      orderBy: {
        createdAt: "desc",
        
      },
      include: { customer: true },
    });

    return new Response(JSON.stringify(projects));
  }


  if (searchParams.get("userId") != null,searchParams.get("date") != null) {
    const projects = await prisma.project.findMany({
      where: {
        userId: searchParams.get("userId")!,
        
        createdAt:{
         lte: new Date(searchParams.get("date")!+"-01-01").toISOString(), gte: new Date(searchParams.get("date")!+"-12-31").toISOString(), 
        },
       // createdAt: new Date(searchParams.get("date")!.toString()),
        deletedAt: null
       
      },
      orderBy: {
        createdAt: "desc",
        
      },
      include: { customer: true },
    });

    return new Response(JSON.stringify(projects));
  }

  if (searchParams.get("userId") != null,searchParams.get("search") != null,searchParams.get("sortType") != null,searchParams.get("take") != null,searchParams.get("skip") != null ) {
    
    let typeSort:ProjectType = ProjectType.INPROGRESS
    switch (searchParams.get("sortType")!.toString()) {
      case "INPROGRESS":
        typeSort =ProjectType.INPROGRESS
        break;
      case "ISVALIDATE":
        typeSort = ProjectType.ISVALIDATE
        break;
      case "ISFINISH":
        typeSort = ProjectType.ISFINISH
        break;
    
      default:
        break;
    }

 
  const projectsSort = await prisma.project.findMany({
    
    where: {
    userId: searchParams.get("userId")!,
     deletedAt: null,
    type : typeSort,
     OR :[
  
      {  name: {
         contains: searchParams.get("search")!,
         },}
       ],
     
    },
    orderBy: {
      createdAt: "desc",
      
    },
    
  });
 
  const projectsUnSort = await prisma.project.findMany({
    
    where: {
    userId: searchParams.get("userId")!,
     deletedAt: null,
    
     OR :[
  
      {  name: {
         contains: searchParams.get("search")!,
         },}
       ],
     
    },
    orderBy: {
      createdAt: "desc",
      
    },
    
  });

  
    
 if(searchParams.get("sortType") == ""){
  const projects = await prisma.project.findMany({
    
    take:parseInt(searchParams.get("take")!),
    skip:parseInt(searchParams.get("skip")!), 
    where: {
    userId: searchParams.get("userId")!,
     deletedAt: null,
   
     OR :[

      {  name: {
         contains: searchParams.get("search")!,
         },}
       ],
     
    },
    orderBy: {
      createdAt: "desc",
      
    },
    include: { customer: true },
  });
  return new Response(JSON.stringify({
    datas : projects,
    hasNextPage: parseInt(searchParams.get("skip")!) + parseInt(searchParams.get("take")!) < projectsSort.length,
    hasPrevPage: parseInt(searchParams.get("skip")!) + parseInt(searchParams.get("take")!) > projectsSort.length,
    totalPages : Math.ceil(projectsUnSort.length/parseInt(searchParams.get("take")!)),
  }));
 }

 


 

 const projects = await prisma.project.findMany({
  take:parseInt(searchParams.get("take")!),
  skip:parseInt(searchParams.get("skip")!), 
  where: {
  userId: searchParams.get("userId")!,
   deletedAt: null,
  type : typeSort,
   OR :[

    {  name: {
       contains: searchParams.get("search")!,
       },}
     ],
   
  },
  orderBy: {
    createdAt: "desc",
    
  },
  include: { customer: true },
});

return new Response(JSON.stringify({
  datas : projects,
  hasNextPage: parseInt(searchParams.get("skip")!) + parseInt(searchParams.get("take")!) < projectsSort.length,
  hasPrevPage: parseInt(searchParams.get("skip")!) + parseInt(searchParams.get("take")!) > projectsSort.length,
  totalPages : Math.ceil(projectsSort.length/parseInt(searchParams.get("take")!)),
}));
  }

  const projects = await prisma.project.findMany({
    where: {
      customerId: searchParams.get("customerId")!,
      deletedAt: null
       
    },
    orderBy: {
      name: "asc",
    },
    include: { customer: true },
  });

  return new Response(JSON.stringify(projects));
}

export async function POST(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  // const id = searchParams.get("id")

  const checkPaymentValue =  await checkPayment(searchParams.get("userId")!)
 
  if(!checkPaymentValue){
     return new Response(JSON.stringify([]));
    }
  

  const projectData: Project = await req.json();

  const project = await prisma.project.create({
    data: {
      customerId: searchParams.get("customerId")!,
      userId: searchParams.get("userId")!,
      name: projectData.name,
      type: ProjectType.INPROGRESS,
     
      createdAt: new Date(Date.now()),
    },
  });

  return new Response(JSON.stringify(project));
}
export async function PATCH(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  // const id = searchParams.get("id")


  const checkPaymentValue =  await checkPayment(searchParams.get("userId")!)
 
  if(!checkPaymentValue){
     return new Response(JSON.stringify([]));
    }
  




    if (searchParams.get("table") !=null && searchParams.get("convertMultiplier") !=null) {

      
      const project = await prisma.project.update({
         where:{
            id : searchParams.get("projectId")!,
         },
           data: {
           
            
             table : searchParams.get("table")!,
             amountTotal :  searchParams.get("amountTotalConvert")!,
             amountTotalConvert :  searchParams.get("amountTotalConvert")!,
             convertCurrency : Number(searchParams.get("convertMultiplier")!) == -100 ? null : searchParams.get("convertCurrency")!,
             convertMultiplier : Number(searchParams.get("convertMultiplier")!) ==-100 ? null :  Number(searchParams.get("convertMultiplier")!),
             
              
             },
        })
   
        
  
         return new Response(JSON.stringify(project));
     }






  if (searchParams.get("projectId") !=null && searchParams.get("proformaDate") !=null) {

      
    const project = await prisma.project.update({
       where:{
          id : searchParams.get("projectId")!,
       },
         data: {
         
          
           proformaDate : new Date(searchParams.get("proformaDate")!),
            
           },
      })
 
      

       return new Response(JSON.stringify(project));
   }
 
  if (searchParams.get("projectId") !=null && searchParams.get("invoiceDate") !=null) {

      
    const project = await prisma.project.update({
       where:{
          id : searchParams.get("projectId")!,
       },
         data: {
         
          
           invoiceDate : new Date(searchParams.get("invoiceDate")!),
            
           },
      })
 
      

       return new Response(JSON.stringify(project));
   }
 



  if (searchParams.get("projectId") !=null && searchParams.get("name") !=null) {
    const project = await prisma.project.update({
       where:{
          id : searchParams.get("projectId")!,
       },
         data: {
         
          
           name : searchParams.get("name")!
            
           },
      })
 
       return new Response(JSON.stringify(project));
   }
 



  if (searchParams.get("validate") != null) {
      const project = await prisma.project.update({
    where:{
        id: searchParams.get("projectId")!,
        
    },
    data: {
     
     type: ProjectType.ISVALIDATE,
     invoiceDate: new Date(Date.now())
    },
  });

  return new Response(JSON.stringify(project));
  }


  if (searchParams.get("finish") != null) {
    const project = await prisma.project.update({
  where:{
      id: searchParams.get("projectId")!,
  },
  data: {
   type: ProjectType.ISFINISH, 
  },
});

return new Response(JSON.stringify(project));
}


if (searchParams.get("intrash") != null) {
    const project = await prisma.project.update({
  where:{
      id: searchParams.get("projectId")!,
  },
  data: {
   deletedAt : new Date(Date.now()) 
  },
});

return new Response(JSON.stringify(project));
}


if (searchParams.get("outtrash") != null) {
    const project = await prisma.project.update({
  where:{
      id: searchParams.get("projectId")!,
  },
  data: {
   deletedAt : null
  },
});

return new Response(JSON.stringify(project));
}





if (searchParams.get("save") != null) {

  const projectData: Project = await req.json();
  console.log("projectData");
  console.log("projectData1");
  console.log("projectData2");
  
  

  

  const projetFind = await prisma.project.findFirst({
    where:{
      id: searchParams.get("projectId")!,
  },
 
  });
  
  const enterprise = await prisma.enterprise.findFirst({
    where: {
      userId: searchParams.get("userId")!,
       
    },
 
  });

  const invoiceIncrement = enterprise!.factureNumber+1;
 

  const enterpriseUpdate = await prisma.enterprise.update({
    where: {
      id: enterprise!.id
    },
     data: {
          factureNumber: projetFind!.invoiceNumber == null ? invoiceIncrement : enterprise!.factureNumber ,
          updatedAt: enterprise!.updatedAt,
        
       },
  })

  

 
   

  const project = await prisma.project.update({
    where:{
        id: searchParams.get("projectId")!,
    },
    data: {
     
      table : projectData.table,
      tva : projectData.tva?.toString(),
      discount : projectData.discount?.toString(),
      modalite : projectData.modalite?.toString(),
      invoiceType : projectData.invoiceType,
      remarque : projectData.remarque?.toString(),
      amountTotal : projectData.amountTotal?.toString(),
      invoiceNumber :  projetFind!.invoiceNumber == null ? enterpriseUpdate!.factureNumber : projetFind!.invoiceNumber
      
    },
  });

  return new Response(JSON.stringify(project));
 
}




  const projectData: Project = await req.json();
  
  console.log("projectDataxxx");
  console.log("projectDataxxx1");
  console.log("projectDataxxx2");
  const enterprise = await prisma.enterprise.findFirst({
    where: {
      userId: searchParams.get("userId")!,
       
    },
 
  });

  const invoiceIncrement = enterprise!.factureNumber+1;
  console.log(enterprise);

  const enterpriseUpdate = await prisma.enterprise.update({
    where: {
      id: enterprise!.id
    },
     data: {
          factureNumber: invoiceIncrement,
          updatedAt:enterprise!.updatedAt,
        
       },
  })

  

   

  const project = await prisma.project.update({
    where:{
        id: searchParams.get("projectId")!,
    },
    data: {
     
      table : projectData.table,
      tva : projectData.tva?.toString(),
      discount : projectData.discount?.toString(),
      modalite : projectData.modalite?.toString(),
      invoiceType : projectData.invoiceType,
      remarque : projectData.remarque?.toString(),
      amountTotal : projectData.amountTotal?.toString(),
      invoiceNumber : enterpriseUpdate!.factureNumber
      
    },
  });

  return new Response(JSON.stringify(project));
}







export async function DELETE(req:NextRequest,res:NextResponse) {

  
   
  const { searchParams } = new URL(req.url);
 // const id = searchParams.get("id") 

 const checkPaymentValue =  await checkPayment(searchParams.get("userId")!)
 
 if(!checkPaymentValue){
    return new Response(JSON.stringify([]));
   }
 


 if (searchParams.get("deleteall") != null) {

  const project = await prisma.project.deleteMany({
    where:{
       userId : searchParams.get("userId")!,
       NOT:{
        deletedAt: null
       }
    },
      
   }) 

   return;
 }


 const project = await prisma.project.delete({
  where:{
     id : searchParams.get("projectId")!,
  },
    
 }) 

 }