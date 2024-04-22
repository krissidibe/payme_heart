import React from "react";
import Sidebar from "./_components/Sidebar";
import { prisma } from "@/utils/prisma";
import { EyeIcon, RefreshCwIcon } from "lucide-react";
import { revalidatePath } from "next/cache";
import ModalDetailView from "./_components/ModalDetailView";
async function page() {
  const userDatas = await prisma.user.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const userDatasDeleted = await prisma.userDeleted.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  const numberOfViewsRequest = await fetch(
    `${process.env.BASE_API_URL}/api/view`,
    { cache: "no-store" }
  );
  const numberOfViewsDownloadRequest = await fetch(
    `${process.env.BASE_API_URL}/api/view?download=true`,
    { cache: "no-store" }
  );

  const numberOfViews = await numberOfViewsRequest.json();
  const numberOfViewsDownload = await numberOfViewsDownloadRequest.json();

  return (
    <div className="flex flex-col flex-1 h-full pt-10">
      <h1 className="text-5xl">Tableau de bord</h1>
      {/* SidebarAdmin */}
      <div className="flex flex-col w-full gap-4 p-10 mt-10 bg-zinc-900/80 rounded-2xl">
        <div className="relative flex flex-col items-start justify-between w-full text-2xl le">
          <p> Comptes inscrits</p>
          <p className="font-bold text-[100px] mt-12 pb-10">
          {" "}
          {userDatas.length.toString().padStart(5, "0")}
        </p>

          <form
            action={async () => {
              "use server";

              revalidatePath("/admin");
            }}

            className="absolute right-0"
          >
            <button>
              <RefreshCwIcon className="cursor-pointer" />
            </button>
          </form> 
        </div>
       
      </div>
      {/* SidebarAdmin */}
      <div className="flex flex-col flex-1 w-full h-full gap-4 p-10 mt-10 bg-zinc-900/80 rounded-2xl">
        <div className="flex w-full gap-6">
          <ModalDetailView
            name=" Nbre de visite"
            value={numberOfViews.length.toString().padStart(5, "0")}
          />
          <ModalDetailView
            name="Téléchargement"
            value={numberOfViewsDownload.length.toString().padStart(5, "0")}
          />
          <ModalDetailView
            name="Compte supprimé"
            value={userDatasDeleted.length.toString().padStart(5, "0")}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
 
