import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { FolderType } from "@prisma/client";




export async function GET(req:NextRequest,res:NextResponse) {
 
   const { searchParams } = new URL(req.url);

   if (searchParams.get("folderId") != null) {
     const project = await prisma.folderUser.findMany({
       where: {
         folderId: searchParams.get("folderId")!,
         
         deletedAt:null
       },
       orderBy: {
        name: "asc",
       }, 
     });
 
     return new Response(JSON.stringify(project));
   }
  
  }

 
export async function POST(req:NextRequest,res:NextResponse) {

   const { searchParams } = new URL(req.url); 
 
 
  const  dataNew:FolderUser = await req.json();
    
     const enterprise = await prisma.folderUser.create({
      
        data: {
         contact : dataNew.contact,
         country : dataNew.country,
         name : dataNew.name,
         email : dataNew.email,
         function : dataNew.function,
         indicatif : dataNew.indicatif,
         rate : dataNew.rate,
         sexe : dataNew.sexe,

         poste : dataNew.poste?.toString() ,
         contrat : dataNew.contrat?.toString(),
         birthDate :dataNew.birthDate == null ? null : (new Date(dataNew.birthDate!)).toISOString(),
        
        
            createdAt: new Date(Date.now()),
            folderId: searchParams.get("folderId")!,
           
          },
     })

 
  return new Response(JSON.stringify(enterprise));
 
}

export async function PATCH(req:NextRequest,res:NextResponse) {

  const { searchParams } = new URL(req.url); 


 const  dataNew:FolderUser = await req.json();
   
    const enterprise = await prisma.folderUser.update({
     where:{
      id: searchParams.get("folderUserId")!,
     },
       data: {
        contact : dataNew.contact,
        country : dataNew.country,
        name : dataNew.name,
        email : dataNew.email,
        function : dataNew.function,
        indicatif : dataNew.indicatif,
        rate : dataNew.rate,
        sexe : dataNew.sexe,
        poste : dataNew.poste?.toString() ,
        contrat : dataNew.contrat?.toString(),
       birthDate :dataNew.birthDate == null ? null : (new Date(dataNew.birthDate!)).toISOString()
       
          
         
          
         },
    })


 return new Response(JSON.stringify(enterprise));

}





export async function DELETE(req:NextRequest,res:NextResponse) {
 
  const { searchParams } = new URL(req.url);

  if (searchParams.get("folderUserId") != null) {
    const project = await prisma.folderUser.delete({
      where: {
        id: searchParams.get("folderUserId")!,
        
       
      },
     
    });

    return new Response(JSON.stringify(project));
  }
 
 }
