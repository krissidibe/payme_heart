import Pdfrenderer from "@/components/pdfrenderer";
import MyDocumentPDF from "@/components/PdfRend";
import { FaWindows } from "react-icons/fa6";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { RiAppleFill } from "react-icons/ri";
export const dynamic = "force-dynamic";
import { IoIosMenu } from "react-icons/io";
import localFont from "next/font/local";

const titleFont = localFont({
  src: [
    {
      path: "../fonts/HelloJuliademo-d92Kx.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const myFont = localFont({
  src: [
    {
      path: "../fonts/MabryPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/MabryPro-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/MabryPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default async function Home() {
  /* 
 const res = await fetch("http://localhost:3000/api/facture",{cache:"no-store"})

 const data:any[] = await res.json(); */
  const data: any[] = [];

  return (
    <main
      className={`flex flex-col items-center  relative text-[#B9B9B9] w-full   min-h-screen bg-[#0E0E0E] ${myFont.className}`}
    >
      <img className="absolute" src="images/Grille.png" alt="" />
      <div className="heroEclipse"></div>
      {/* Header */}
      <div className="fixed z-50 h-[60px]  xl:h-[92px] flex items-center justify-center  w-screen bg-zinc-950/30 backdrop-blur-lg">
      <div className="h-[52px] px-10 flex md:hidden   md:text-[14px]  xl:text-[16px] font-semibold max-w-7xl w-full    mt-0 items-center xl:px-0 md:px-14 justify-between ">
        <p className="text-[22px] text-white ">Payme.</p>
        <IoIosMenu className="w-9 h-9" />

         
      </div>
      <div className="h-[52px] hidden md:flex   md:text-[14px]  xl:text-[16px] font-semibold max-w-7xl w-full    mt-0 items-center xl:px-14 md:px-14 justify-between ">
        <p className="text-[30px] text-white ">Payme.</p>
        <div className="flex gap-8 ">
          <p className="text-white">Acceuil</p>
          <p className="cursor-pointer hover:text-white">Caractéristiques</p>
          <p className="cursor-pointer hover:text-white">Cible</p>
          <p className="cursor-pointer hover:text-white">FAQ</p>
          <p className="cursor-pointer hover:text-white">Télécharger</p>
        </div>

        <div className="w-[180px] border cursor-pointer hover:border-[#999A5B] hover:text-white flex justify-center   h-[45px] rounded-md items-center border-white/40 ">
        <p className="mr-2">  Obtenez l’app ici</p> <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1C9 0.447715 8.55228 -2.41412e-08 8 0C7.44772 2.41412e-08 7 0.447715 7 1L9 1ZM7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071L15.0711 7.34315C15.4616 6.95262 15.4616 6.31946 15.0711 5.92893C14.6805 5.53841 14.0474 5.53841 13.6569 5.92893L8 11.5858L2.34315 5.92893C1.95262 5.53841 1.31946 5.53841 0.928932 5.92893C0.538408 6.31946 0.538408 6.95262 0.928932 7.34315L7.29289 13.7071ZM7 1L7 13L9 13L9 1L7 1Z" fill="white" fill-opacity="0.7"/>
</svg>

        </div>
      </div>
      </div>
      {/* Info */}
      <div className="w-[986px]     flex flex-col justify-center items-center px-10 mt-[120px] md:mt-[189px] ">
        <p className="leading-9  md:leading-[55px] text-center xl:max-w-[970px] md:max-w-[800px] px-6 max-w-[390px] ">
          
          <span
            className={`${titleFont.className} text-[35px] md:text-[67px] xl:text-[70.39px]  mr-2 bg-gradient-to-r from-[#999A5B] via-[#999A5B] to-[#FFFFEA] bg-clip-text text-transparent pr-1 `}
          >
            Simplifier
          </span> 
          <span className=" text-[35px] md:text-[60px] xl:text-[64.39px]  md:leading-14  font-bold bg-gradient-to-r from-[#FFFFFF] via-[#c0bdbd] to-[#948f8f] bg-clip-text text-transparent">
            votre gestion    financière avec Payme
          </span> 
        </p>

        <p className=" md:text-[22px] text-[13px] mt-4 xl:text-[24px] md:mt-[10px] xl:mt-[20px] text-center  xl:max-w-[690px] md:max-w-[600px] px-4 max-w-[300px]  ">
          Avec Payme, simplifiez votre comptabilité. Suivi en temps réel des
          devis, gestion facilitée, tout est à portée de main.
        </p>

<div>
  
</div>
       <div className="relative flex gap-4 mt-[25px]  md:mt-[36px]">
       <div className="relative flex md:hidden">
       <div className="absolute -top-1 downloadApp2 -left-4 md:flex"></div> 
         
        <div className=" w-[180px] text-[13px]  bg-[#0E0E0E] relative  border-2   h-[40px] cursor-pointer border-[#bbbc8b] text-white flex justify-center  rounded-md items-center border-white/50 ">
      
        Télécharger l'application
        </div>
      </div>
       <div className="absolute hidden -top-1 downloadApp -left-4 md:flex"></div> 
       <div className="relative hidden md:flex">
        
         
          <div className=" w-[160px]  bg-[#0E0E0E] relative  border-2   h-[45px] hover:brightness-110  cursor-pointer border-[#bbbc8b] hover:text-white flex justify-center  rounded-md items-center  ">
         <FaWindows className="mr-2" />
          Windows
          </div>
        </div>
       <div className="relative hidden md:flex">
         
          <div className=" w-[160px] bg-[#0E0E0E] relative  border-2   h-[45px] hover:brightness-110  cursor-pointer border-[#bbbc8b] hover:text-white flex justify-center  rounded-md items-center  ">
         <RiAppleFill className="mb-[2px] mr-2" />
            Mac
          </div>
        </div>
       </div>
      </div>

      <div className=" px-6 mt-[40px] md:mt-[52px] xl:mt-[72px]   xl:w-[1308px] z-10 md:px-[70px] xl:px-[80px] ">
        <div className="p-[6px] xl:p-3 bg-[#ffffff09] border-t border-opacity-30 border-white rounded-md">
          <img src="/images/Rectangle 14.png" alt="" />
        </div>
      </div>
      {/* 
    
   

position: absolute;
width: 1375.39px;
height: 78.4px;
left: calc(50% - 1375.39px/2 - 448.12px);
top: 1510.13px;

background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(88.8deg, #9A9A5C 29.89%, rgba(251, 252, 225, 0.62) 51.37%);
filter: blur(161px);
transform: rotate(15deg);

    */}
      <div className="w-[1280px] mr-20 relative">
        <div className="eclipse "></div>

        <div className="mt-[152px]   flex rounded-md">
          <div className="w-1/2">
            <p className="text-[18px] uppercase">Caractéristiques</p>
            <p className="text-[48px] my-[20px] leading-[45px] bg-gradient-to-r from-[#FFFFFF] via-[#c0bdbd] to-[#656565] bg-clip-text text-transparent">
              Gestion de comptabilité réinventée
            </p>
            <p className="text-[16px] mb-[76px] ">
              Facilitez votre gestion quotidienne avec notre système intuitif
              <br /> et automatisé.
            </p>

            <div className="flex flex-col gap-[32px] pb-20">
              <Characteristique
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                    />
                  </svg>
                }
                key={1}
                isBr={false}
                titre="Suivi en temps réel des devis :"
                content=" Ne perdez plus une seconde. Suivez l’évolution de vos devis en
        temps réel et prenez des décisions éclairées."
              />
              <Characteristique
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                }
                key={2}
                isBr={true}
                titre="Stockage sûr et fiable de vos données financières : "
                content="Profitez de notre solution de stockage sécurisé pour garder un œil sur vos données financières, en toute tranquillité."
              />
              <Characteristique
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                    />
                  </svg>
                }
                key={3}
                isBr={true}
                titre="Outil tout-en-un pour une gestion financière efficace : "
                content="Découvrez l’efficacité d’un outil tout-en-un. Gérez vos finances, vos devis et vos données en un seul endroit."
              />
            </div>
          </div>
          <div className="w-1/2 bg-[#999A5B] relative overflow-hidden">
            <img
              className="max-w-[510px] max-h-[694px] absolute right-0  top-[90px] "
              src="images/pre.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-[1300px] mt-[152px] mr-20">
        <p className="text-[48px] my-[20px] leading-[45px] font-bold bg-gradient-to-r from-[#FFFFFF] via-[#c0bdbd] to-[#656565] bg-clip-text text-transparent">
          Gestion de comptabilité réinventée
        </p>

        <div className="relative grid grid-cols-3">
          <div className="gestion"></div>
          <GestionInfo
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                />
              </svg>
            }
            key={3}
            isBr={true}
            titre="Les Pme"
            content="Optimisez la gestion financière de votre 
                PME avec notre logiciel spécialisé. Simplifiez 
                vos opérations et suivez vos devis en toute efficacité. Essayez-le dès maintenant !"
          />
          <GestionInfo
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                />
              </svg>
            }
            key={3}
            isBr={true}
            titre="Les Startups"
            content="Boostez la croissance de votre startup 
                avec notre logiciel spécialisé. Simplifiez 
                vos opérations financières et gérez votre comptabilité en toute simplicité. "
          />
          <GestionInfo
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                />
              </svg>
            }
            key={3}
            isBr={true}
            titre="Les Freelancers"
            content="Boostez votre activité de freelance avec 
                notre logiciel spécialisé. Simplifiez la gestion financière et comptable, suivez vos devis en toute facilité. Essayez-le dès maintenant !"
          />
        </div>
      </div>
      <div className="w-[1060px] mt-[210px] mr-20">
        <p className="text-[48px] pb-[100px] leading-[45px] font-bold bg-gradient-to-r from-[#FFFFFF] via-[#c0bdbd] to-[#656565] bg-clip-text text-transparent">
          Foire aux questions
        </p>

        <div className="flex flex-col gap-7">
          <FaqItem content="Est-ce que Payme est facile à utiliser, même pour ceux qui ne sont pas experts en finance ?" />
          <FaqItem
            content=" Quelles sont les fonctionnalités principales de Payme pour la
        gestion financière des PME au Mali ?"
          />
          <FaqItem content="Est-ce que Payme permet de personnaliser les factures avec le logo et les informations de mon entreprise ?" />
          <FaqItem content="Y a-t-il une période d’essai gratuite ou une garantie de satisfaction pour Payme ?" />
          <FaqItem content="Est-ce que Payme offre des fonctionnalités de génération de rapports financiers ?" />
          <FaqItem content="Comment Payme sécurise-t-il mes données financières et celles de mon entreprise ?" />
        </div>
      </div>
      <div className="relative">
        <img className="absolute " src="images/Grille.png" alt="" />
        <div className="w-[1280px] mt-[152px] h-[403px] p-8 py-4 rounded-3xl flex mr-20 bg-[#222222]">
          <div className="flex flex-col justify-center w-1/2">
            <p className="text-[48px]   leading-[45px] font-bold bg-gradient-to-r from-[#FFFFFF] via-[#c0bdbd] to-[#656565] bg-clip-text text-transparent">
              Prêt à transformer <br /> votre gestion financière ?
            </p>

            <div className="relative">
              <div className="downloadApp left-4"></div>
              <div className="w-[268px] bg-[#0E0E0E] relative  text-white border  mt-[36px] h-[52px] cursor-pointer hover:border-[#999A5B] hover:text-white flex justify-center  rounded-md items-center border-white/40 ">
                Téléchargez l’app maintenant
              </div>
            </div>
          </div>

          <img className="w-1/2" src="images/Rectangle 14.png" alt="" />
        </div>
      </div>

      <div className="w-[1280px] flex-col mt-[152px] h-[503px] p-8 py-4 rounded-3xl flex mr-20  relative ">
      <div className="gestion opacity-40"></div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-[30px] text-white ">Payme.</p>
            <p className="text-[14px] mt-[13px]">
              © 2023 Payme, Sarl. Tout droit réservé.
            </p>
            <p className="text-[16px] mt-[7px] text-[#727072]">
              Toutes les marques, logos et noms de marque sont <br /> la
              propriété de leurs propriétaires respectifs..
            </p>
          </div>

          <div>
            <p className="text-[30px] text-white ">.</p>
            <p className="text-[16px] mt-[7px] text-[#ffffff]">
              Conditions d'utilisation <br /> Politique de confidentialité
            </p>
          </div>
        </div>
      </div>
    </main>
  );

  function FaqItem({ content = "" }) {
    return (
      <div className="text-[24px] cursor-pointer hover:text-white  border-t flex justify-between items-center border-white/20 pt-6">
        <p>{content}</p>
        <div className="pl-[100px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
    );
  }

  function Characteristique({
    icon,
    titre,
    content,
    isBr = false,
  }: {
    icon: any;
    titre: string;
    content: string;
    isBr: boolean;
  }) {
    return (
      <div className="text-[16px]  pt-[24px] border-t border-white/20 max-w-[510px] leading-[26px]  flex gap-[30px]  items-start justify-start ">
        <div>{icon}</div>

        <p className="">
          <span className="text-white">{titre}</span> {isBr && <br />}
          {content}
        </p>
      </div>
    );
  }
  function GestionInfo({
    icon,
    titre,
    content,
    isBr = false,
  }: {
    icon: any;
    titre: string;
    content: string;
    isBr: boolean;
  }) {
    return (
      <div className="text-[16px]  pt-[10px] pb-4 border-l border-white/20 max-w-[510px] leading-[26px] flex-col  flex gap-[10px] px-[28px]  items-start justify-start ">
        <div>{icon}</div>

        <p className="">
          <span className="text-white">{titre}</span> {isBr && <br />}
          {content}
        </p>
      </div>
    );
  }
}
