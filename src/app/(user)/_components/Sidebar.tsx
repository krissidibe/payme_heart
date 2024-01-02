import {
  AlignJustifyIcon,
  ClapperboardIcon,
  GalleryHorizontalIcon,
  HeartIcon,
  HomeIcon,
  ImageIcon,
  InstagramIcon,
  LucideIcon,
  LucideProps,
  MapIcon,
  MessageCircle,
  PlusSquareIcon,
  SearchIcon,
  UserIcon,
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
function Sidebar() {
  return (
    <div className="xl:w-[244px] border-r-[1px] pb-10 flex flex-col px-4 border-white/5 h-full">
      <h2 className="hidden pl-4 my-10 text-3xl font-bold transition-all duration-300 ease-in-out opacity-0 xl:flex animate-in xl:opacity-100 ">
        Instagram
      </h2>
      <div className="flex items-center justify-center my-12 font-bold transition-all duration-300 ease-in-out opacity-100  xl:hidden xl:opacity-0">
        <InstagramIcon className="w-[24px] h-[24px]" />
      </div>
      {/* MenuItem */}
      <div className="flex flex-col flex-1 gap-2">
        <ItemSidebar Icon={HomeIcon} key={1} name="Accueil" />
        <ItemSidebar Icon={SearchIcon} key={1} name="Recherche" />
        <ItemSidebar Icon={MapIcon} key={1} name="Découvrir" />
        <ItemSidebar Icon={ClapperboardIcon} key={1} name="Reels" />
        <ItemSidebar Icon={MessageCircle} key={1} name="Messages" />
        <ItemSidebar Icon={HeartIcon} key={1} name="Notifications" />

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <ItemSidebar Icon={PlusSquareIcon} key={1} name="Créer" />
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

        <ItemSidebar Icon={UserIcon} key={1} name="Profil" />
      </div>
      <ItemSidebar Icon={GalleryHorizontalIcon} key={1} name="Créer" />
      <ItemSidebar Icon={AlignJustifyIcon} key={1} name="Plus" />
      {/* End MenuItem */}
    </div>
  );
}

export default Sidebar;

function ItemSidebar({ Icon, name }: { Icon: LucideIcon; name: string }) {
  return (
    <div className="flex gap-4 text-[20px] p-3 px-4 hover:bg-white/5 rounded-md  cursor-pointer items-center">
      <Icon className="w-[24px] h-[24px]" />
      <p className="text-[15px] font-semibold hidden xl:block">{name}</p>
    </div>
  );
}
