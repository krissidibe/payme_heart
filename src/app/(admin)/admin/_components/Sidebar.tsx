import {
  AlignJustifyIcon,
  ClapperboardIcon,
  FileTextIcon,
  GalleryHorizontalIcon,
  HeartIcon,
  HomeIcon,
  ImageIcon,
  InstagramIcon,
  LogOut,
  LucideIcon,
  LucideProps,
  MapIcon,
  MessageCircle,
  PlusSquareIcon,
  SearchIcon,
  UserIcon,
  VerifiedIcon,
} from "lucide-react";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { revalidatePath } from "next/cache"; 
import Deconnexion from "./Deconnexion";
import Provider from "@/lib/AuthContext";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOption";
async function  Sidebar() {

  const session = await getServerSession(authOptions);

   
  return (
   <Provider session={session}>
     <div className="xl:min-w-[285px] min-w-[100px] border-r-[1px] pb-10 flex flex-col px-0 border-white/5 h-full">
     

     <div className="min-h-[100px] flex items-center justify-start space-x-4 border-b-[1px]  text-xl font-bold  border-white border-opacity-20" >
     <div className={`${false ? "hidden" : "block"}`}  >
       <img
         className="h-[30px] ml-[37px]  mt-2    "
         src="/images/logo-payme-complet.png"
       />
     </div>
    
   </div>

     
  
   
   {/* MenuItem */}
   <div className="flex flex-col flex-1 mt-4 space-y-1 overflow-y-scroll no-scrollbar ">
     <ItemSidebar href="/admin" Icon={HomeIcon} key={1} name="Accueil" />
     <ItemSidebar href="/admin/invoice" Icon={FileTextIcon} key={2} name="Facture" />
     <ItemSidebar href="/admin/version" Icon={VerifiedIcon} key={2} name="Version" />
    
     

    {/*  <AlertDialog>
       <AlertDialogTrigger asChild>
         <ItemSidebar href="/admin" Icon={PlusSquareIcon} key={1} name="Créer" />
       </AlertDialogTrigger>
       <AlertDialogContent className="w-full h-full p-0" asChild>
         <div className="bg-[#262626] xl:h-[calc(100%-100px)] flex flex-col     h-[calc(70%)] transition-all duration-200 ease-in-out  min-w-[calc(60%)]">
           <div className="flex flex-col items-center justify-center ">
             <div className="w-full p-2 text-center border-b border-white/10">
               <p>Créer une nouvelle publication</p>
             </div>
             <div className="flex flex-col items-center justify-center flex-1 w-full gap-2 ">
               <ImageIcon className="w-[100px] h-[100px]" />
               <p>Faites glisser les photos et les vidéos ici</p>
               <Button>Selectionner sur ordinateur</Button>
             </div>
           </div>
         </div>
       </AlertDialogContent>
     </AlertDialog>
*/}
      
   </div>
  
 <Deconnexion>

 <ItemSidebar   href="/admin" Icon={LogOut} key={15} name="Deconnexion" />  
 </Deconnexion>
   {/* End MenuItem */}
 </div>
   </Provider>
  );
}

export default Sidebar;

function ItemSidebar({ Icon, name,href }: { Icon: LucideIcon; name: string ,href:string}) {
  revalidatePath(href)
  return (

    <Link
    href={href} 
      className={`min-h-[65px] relative ${
        !href.includes(href.toString().replace("/admin/",""))
          ? "text-primary bg-[#ffffff15] bg-opacity-100"
          : "text-[#9e9e9e] bg-gray-400 bg-opacity-10"
      } flex items-center font-semibold    hover:bg-opacity-10 cursor-pointer bg-opacity-5  text-[19px] px-10 `}
    >
     <Icon className="absolute   left-[30px] w-8 h-8 mr-6 xl:static" />
     
      <p className={`${false ? "hidden" : "hidden xl:block"} `}>{name}</p>
    </Link>

   /*  <Link href={href} className="flex gap-4 text-[20px] p-3 px-4 hover:bg-white/5 rounded-md  cursor-pointer items-center">
      <Icon className="w-[24px] h-[24px]" />
      <p className="text-[15px] font-semibold hidden xl:block">{name}</p>
    </Link> */
  );
}



