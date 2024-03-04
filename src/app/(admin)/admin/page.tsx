import React from "react";
import Sidebar from "./_components/Sidebar";
import { prisma } from "@/utils/prisma";
import { EyeIcon, RefreshCwIcon } from "lucide-react";
import { revalidatePath } from "next/cache";
async function page() {

  const userDatas = await prisma.user.findMany({
    orderBy: {
      name: 'asc'
    }
  });
  return (
    <div className="flex flex-col flex-1 h-full pt-10">
     

      <h1 className="text-5xl">Tableau de bord</h1>
 {/* SidebarAdmin */}
      <div className="flex flex-col w-full gap-4 p-10 mt-10 bg-zinc-900/80 rounded-2xl">
        <div className="flex items-center justify-between w-full text-2xl">
          
          <p> Comptes inscrites</p> <RefreshCwIcon     className="cursor-pointer" />
        </div>
        <p className="font-bold text-7xl"> {userDatas.length.toString().padStart(5,"0")}</p>
      </div>
 {/* SidebarAdmin */}
      <div className="flex flex-col flex-1 w-full h-full gap-4 p-10 mt-10 bg-zinc-900/80 rounded-2xl">
    <div className="flex gap-6">
    <ItemInfo/>
     <ItemInfo/>
     <ItemInfo/>
    </div>
      </div>
    </div>
  );
}

export default page;
function ItemInfo() {
  return <div className="flex flex-col w-[300px] gap-2 p-5 bg-zinc-800 rounded-2xl">
    <div className="flex items-center gap-2 text-2xl">
      <EyeIcon />
      <p> Nbre de visite</p>
    </div>
    <p className="text-4xl font-bold">10.260</p>
  </div>;
}

