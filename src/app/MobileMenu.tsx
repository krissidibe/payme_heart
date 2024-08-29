"use client";
import React from "react";
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import Image from "next/image";
import { User, ArrowDown, LogIn, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  /*     if (window.localStorage.getItem("appversion") == "true") {
     router.push(`${process.env.APP_WEP_URL}`)

      
    } */
  return (
    <div
      className={`fixed z-50  ${
        isOpen ? " h-full" : "h-[60px]"
      }  md:items-center  xl:h-[92px] flex  justify-center  w-screen bg-zinc-950/30 backdrop-blur-lg`}
    >
      <div className="h-[52px] px-10 flex md:hidden relative    md:text-[14px]  xl:text-[16px] font-semibold max-w-7xl w-full    mt-0 items-center xl:px-0 md:px-14 justify-between ">
        <div className="flex flex-row justify-between flex-1 w-full">
          <img src={"/images/logo-payme-complet.png"} width={140} height={50} />

          <ToggleButton
            isOpen={isOpen}
            handleClick={() => {
              setIsOpen((x) => !x);
            }}
          />
        </div>

        <div
          className={`${
            isOpen
              ? "scale-100 right-0 transition-all duration-300"
              : "scale-0 rotate-0 transition-all duration-300"
          } absolute z-50 flex flex-col h-[200px] w-full gap-2 px-10 py-4 rounded-md right-0   top-10`}
        >
          <a
            href="#index"
            onClick={() => setIsOpen((x) => !x)}
            className="text-white"
          >
            Acceuil
          </a>
          <a
            href="#caracteristique"
            onClick={() => setIsOpen((x) => !x)}
            className="cursor-pointer hover:text-white"
          >
            Caractéristiques
          </a>
          <a
            href="#cible"
            onClick={() => setIsOpen((x) => !x)}
            className="cursor-pointer hover:text-white"
          >
            Cible
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen((x) => !x)}
            className="cursor-pointer hover:text-white"
          >
            FAQ
          </a>
          <a
            href="#index"
            onClick={() => setIsOpen((x) => !x)}
            className="cursor-pointer hover:text-white"
          >
            Télécharger
          </a>
          <a
            href={`mailto:contact@paymefinance.com?subject=${"object"}&body=${"message"}`}
            className="cursor-pointer hover:text-white"
          >
            Contactez-nous
          </a>
        </div>
      </div>
      <div className="h-[52px] hidden md:flex   md:text-[14px]  xl:text-[16px] font-semibold max-w-7xl w-full    mt-0 items-center xl:px-14 md:px-14 justify-between ">
        <img src={"/images/logo-payme-complet.png"} width={140} height={50} />
        <div className="flex gap-8 ">
          <a href="#index" className="text-white">
            Acceuil
          </a>
          <a
            href="#caracteristique"
            className="cursor-pointer hover:text-white"
          >
            Caractéristiques
          </a>
          <a href="#cible" className="cursor-pointer hover:text-white">
            Cible
          </a>
          <a href="#faq" className="cursor-pointer hover:text-white">
            FAQ
          </a>
          <a
            href={`mailto:contact@paymefinance.com?subject=${"object"}&body=${"message"}`}
            className="cursor-pointer hover:text-white"
          >
            Contactez-nous
          </a>
        </div>
<div className="flex hidden gap-4">

{/* <div onClick={()=>{

window.localStorage.setItem("appversion","true")
router.push(`${process.env.APP_WEP_URL}`)
}}   className="w-[160px]  border  cursor-pointer hover:border-[#999A5B] hover:text-white flex justify-center   h-[45px] rounded-md items-center border-white/40 ">
<p className="mr-2"> Se connecter</p> 
<ArrowRight  strokeWidth={4} className="h-4 w-fit" />

</div>  */}
{/* <a
          href="#index"
          onClick={() => {}}
          className="w-[140px] border cursor-pointer hover:border-[#999A5B] hover:text-white flex justify-center   h-[45px] rounded-md items-center border-white/40 "
        >
          <p className="mr-2">Télécharger</p>{" "}
           
        </a> */}
</div>

        {/*   <div onClick={()=>{

    window.localStorage.setItem("appversion","true")
    router.push(`${process.env.APP_WEP_URL}`)
   }}   className="w-[180px] border cursor-pointer hover:border-[#999A5B] hover:text-white flex justify-center   h-[45px] rounded-md items-center border-white/40 ">
   <p className="mr-2"> Se connecter</p> <User className="h-4 w-fit" />

   </div> */}
      </div>
    </div>
  );
}

export default MobileMenu;

/*  */
