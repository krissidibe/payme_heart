"use server";

import { prisma } from "@/utils/prisma";
import { writeFile } from "fs/promises";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import path, { join } from "path";


export default async function storeTuto(fileBlob:Buffer | null,extname:string,name:string): Promise<string>{
   
    let filename ="";
    const file = fileBlob;

  if (!file) {
    return  "File not" ;
  }
  const buffer = file
        //const relativeUploadDir = `/uploads/${dateFn.format(Date.now(), "dd-MM-Y")}`;
        const relativeUploadDir = `/${"tutos" }/`;
        const uploadDir = join(process.cwd(), "public", relativeUploadDir);
   /*      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;

          filename = `${file.name.replace(
          /\.[^/.]+$/,
          ""
        )}-${uniqueSuffix}${path.extname(file.name)}`; */
        console.log(uploadDir);
        
        await writeFile(`${uploadDir}${name}.${extname}`, buffer);
        return `/${"tutos"}/${name}.${extname}`;
        

     
      
      
}

export const addTutoAction = async (formData: FormData) => {


    const file =  formData.get("videoLink")! as File;
    const data = await file.arrayBuffer();
const extname = file.type.split("/")[1]

 const videoLink = await storeTuto(Buffer.from(data) ,extname,formData.get("section")!.toString())

 const newData = await prisma.tutos.create({
    data:{
        section: formData.get("section")!.toString(),
        index:Number(formData.get("index")!.toString()),
        videoLink: videoLink,
        title: formData.get("title")!.toString(),
        btnLink: formData.get("btnLink")?.toString() ?? null,
        description: formData.get("description")!.toString(),
        public: formData.get("public")?.toString() == "on" ? true : false,

    }
 })
 
  return newData
};


export const editTutoAction = async (formData: FormData,id:string) => {

  const file =  formData.get("videoLink")! as File;
if (  file.size == 0) {

  
  const newData = await prisma.tutos.update({
    where:{
      id:id
    },
    data:{
        section: formData.get("section")!.toString(),
        index:Number(formData.get("index")!.toString()),

        title: formData.get("title")!.toString(),
        btnLink: formData.get("btnLink")?.toString() ?? null,
        description: formData.get("description")!.toString(),
        public: formData.get("public")?.toString() == "on" ? true : false,
  
    }
  })
  
  return newData

}else{


  const data = await file.arrayBuffer();
const extname = file.type.split("/")[1]

const videoLink = await storeTuto(Buffer.from(data) ,extname,formData.get("section")!.toString())

const newData = await prisma.tutos.update({
  where:{
    id:id
  },
  data:{
      section: formData.get("section")!.toString(),
      index:Number(formData.get("index")!.toString()),
      videoLink: videoLink,
      title: formData.get("title")!.toString(),
      btnLink: formData.get("btnLink")?.toString() ?? null,
      description: formData.get("description")!.toString(),
      public: formData.get("public")?.toString() == "on" ? true : false,

  }
})

return newData
}

};



export const deleteTutoAction = async (id: string) => {


 
const newData = await prisma.tutos.delete({
  where:{
    id:id
  }
})

return newData
};



















export const fetchTutoClick = async (form: FormData) => {


  const datas = await prisma.tutoVideoView.findMany({
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
      initial:true

     
    },
    include:{user:{include:{enterprise:true}}},
    orderBy: {
      createdAt: 'desc'
    },
   
  
    
   
  
  });
  
   
    
    
    return datas;

};
