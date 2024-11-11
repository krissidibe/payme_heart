import { FaLinkedinIn } from "react-icons/fa6";
import localFont from "next/font/local";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import FaqItem from "./FaqItem";
import DesktopBtnOne from "./DesktopBtnOne";
export const dynamic = "force-dynamic";

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

  const postInView = async () => {
    const req = await fetch(`${process.env.BASE_API_URL}/api/view`, {
      method: "POST",
      body: JSON.stringify({
        addressIp: "",
        country: "",
      }),
      cache: "no-cache",
    });
  };

  postInView();
  return (
    <main
      id="index"
      className={`flex flex-col items-center no-scrollbar  overflow-x-hidden relative text-[#B9B9B9] w-full   min-h-screen bg-[#0E0E0E] ${myFont.className}`}
    >
      <img className="absolute" src="images/Grille.png" alt="" />

      <div className="heroEclipse"></div>
      {/* Header */}
      <MobileMenu />
      {/*  <div className="fixed z-50 h-[60px]  xl:h-[92px] flex items-center justify-center  w-screen bg-zinc-950/30 backdrop-blur-lg">
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
      </div> */}
      {/* Info */}
      <div id="telecharger"></div>
      <div className="w-[986px]     flex flex-col justify-center items-center px-10 mt-[120px] md:mt-[189px] ">
        <p className="leading-9  md:leading-[55px] text-center xl:max-w-[970px] md:max-w-[800px] px-6 max-w-[390px] ">
          <span
            className={`${titleFont.className} text-[35px] md:text-[67px] xl:text-[70.39px]  mr-2 bg-gradient-to-r from-[#999A5B] via-[#999A5B] to-[#FFFFEA] bg-clip-text text-transparent pr-1 `}
          >
            Simplifier
          </span>
          <span className=" text-[35px] md:text-[60px] xl:text-[64.39px]  md:leading-14  font-bold bg-gradient-to-r from-[#FFFFFF] via-[#c0bdbd] to-[#948f8f] bg-clip-text text-transparent">
            votre gestion financière avec Payme
          </span>
        </p>

        <p className=" md:text-[22px] text-[13px] mt-4 xl:text-[24px] md:mt-[10px] xl:mt-[20px] text-center  xl:max-w-[690px] md:max-w-[600px] px-4 max-w-[300px]  ">
          Avec Payme, simplifiez votre comptabilité. Suivi en temps réel des
          devis, gestion facilitée, tout est à portée de main.
        </p>

        <div></div>

        <div className="relative flex gap-4 mt-[25px]  md:mt-[36px]">
          <div className="relative flex md:hidden">
            <div className="absolute -top-1 downloadApp2 -left-4 md:flex"></div>

            <div className="flex flex-row w-full gap-3 ml-5 ">
              <div className="    text-[13px] gap-2   relative  border w-[120px] opacity-20   h-[40px] cursor-pointer border-[#bbbc8b] text-white flex justify-center  rounded-md items-center border-white/50 ">
                <img className="absolute" src="images/02.png" alt="" />
              </div>

              <Link
                href={
                  "https://apps.apple.com/us/app/payme-facturation-et-finance/id6737771817"
                }
                target="_blank"
              >
                <div className="    text-[13px] gap-2    relative  border w-[120px]   h-[40px] cursor-pointer border-[#bbbc8b] text-white flex justify-center  rounded-md items-center border-white/50 ">
                  <img className="absolute" src="images/01.png" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="absolute hidden -top-1 downloadApp -left-4 md:flex"></div>
          {/*    <DesktopBtn />  */}
          <DesktopBtnOne />
        </div>
      </div>

      <div className="md:mt-[52px] xl:mt-[72px] aspect-video  z-10 md:px-[70px] xl:px-[80px]    xl:w-[1408px]  w-full   mt-[40px] px-6   flex justify-center items-center mx-auto">
        <div className="p-[6px] w-full   xl:p-3 aspect-video bg-[#ffffff09] border-t border-opacity-30 border-white rounded-md">
          <iframe
            width="560"
            height="315"
            className="w-full h-full"
            src="https://www.youtube.com/embed/IxyLDLbIoII?si=YNijzVr2Mz76hW1a&rel=0"
            frameBorder="0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>

      {/*       <div className=" px-6 mt-[40px] md:mt-[52px] xl:mt-[72px]   xl:w-[1308px] z-10 md:px-[70px] xl:px-[80px] ">
        <AspectRatio  ratio={16 / 9} >
        <div className="p-[6px] w-full h-full xl:p-3 bg-[#ffffff09] border-t border-opacity-30 border-white rounded-md">

<iframe width="560" height="315"  className="w-full h-full" src="https://www.youtube.com/embed/IxyLDLbIoII?si=YNijzVr2Mz76hW1a" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"  ></iframe>
</div>

        </AspectRatio>
        <div className="p-[6px] xl:p-3 bg-[#ffffff09] border-t border-opacity-30 border-white rounded-md">
          <img src="/images/Rectangle.png" alt="" />
        </div>  
      </div> */}
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

      <div id="caracteristique"></div>
      <div className="relative w-full max-w-6xl xl:px-0 md:px-[50px] px-[40px]">
        <div className="eclipse "></div>

        <div className=" mt-10 md:mt-[122px]  flex-col md:flex-row flex rounded-md">
          <div className="md:w-1/2">
            <p className="text-[14px] md:text-[18px] text-[#3ED7C4] uppercase">
              Caractéristiques
            </p>
            <p className="md:text-[38px] text-[24px] xl:text-[48px] my-[20px] leading-7 md:leading-[45px] bg-gradient-to-r from-[#FFFFFF] via-[#c0bdbd] to-[#656565] bg-clip-text text-transparent">
              Gestion de comptabilité réinventée
            </p>
            <p className="md:text-[14px] xl:text-[16px] mb-10 md:mb-[76px] ">
              Facilitez votre gestion quotidienne avec notre système intuitif et
              automatisé.
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
          <div className="flex ml-0 rounded-md md:hidden border-opacity-30">
            <img
              className=" max-h-[704px] md:absolute right-0  top-[0px] "
              src="images/Group.png"
              alt=""
            />
          </div>
          <div className="relative hidden overflow-hidden md:flex md:w-1/2">
            <img
              className="max-w-[520px] max-h-[704px] md:absolute right-0  top-[0px] "
              src="images/Group.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div id="cible"></div>
      <div className="w-full max-w-6xl xl:px-0 md:px-[50px] px-[40px] mt-[102px] mr-0">
        <p className="md:text-[38px] h-[55px] text-[24px] xl:text-[48px] my-[20px]   leading-8 md:leading-[45px] font-bold bg-gradient-to-r from-[#FFFFFF] via-[#c0bdbd] to-[#656565] bg-clip-text text-transparent">
          Payme est le compagnon idéal pour
        </p>

        <div className="relative grid gap-4 md:gap-2 md:grid-cols-3">
          <div className="gestion"></div>
          <GestionInfo
            icon={
              <svg
                width="36"
                height="34"
                viewBox="0 0 36 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="9"
                  y1="-4.37114e-08"
                  x2="9"
                  y2="34"
                  stroke="white"
                  stroke-width="2"
                />
                <rect
                  x="1"
                  y="1"
                  width="16"
                  height="32"
                  stroke="white"
                  stroke-width="2"
                />
                <rect
                  x="1"
                  y="33"
                  width="24"
                  height="34"
                  transform="rotate(-90 1 33)"
                  stroke="white"
                  stroke-width="2"
                />
                <line
                  x1="16"
                  y1="17"
                  x2="2"
                  y2="17"
                  stroke="white"
                  stroke-width="2"
                />
                <line
                  x1="16"
                  y1="24"
                  x2="2"
                  y2="24"
                  stroke="white"
                  stroke-width="2"
                />
                <rect x="26" y="16" width="4" height="3" fill="#7C7C7C" />
                <rect x="20" y="16" width="4" height="3" fill="#7C7C7C" />
                <rect x="26" y="23" width="4" height="3" fill="#7C7C7C" />
                <rect x="20" y="23" width="4" height="3" fill="#7C7C7C" />
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
                width="37"
                height="34"
                viewBox="0 0 37 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="8.72632"
                  width="34.1364"
                  height="24.0182"
                  rx="1"
                  fill="url(#paint0_linear_360_366)"
                  stroke="white"
                  stroke-width="2"
                />
                <rect
                  x="11.1172"
                  y="1.94458"
                  width="13.9"
                  height="6.67273"
                  rx="1"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M6 15.9446L29.1273 15.9446"
                  stroke="#7C7C7C"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_360_366"
                    x1="17.6362"
                    y1="32.6809"
                    x2="17.6362"
                    y2="10.999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.26" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
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
                width="32"
                height="37"
                viewBox="0 0 32 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.85 14.963C19.4951 14.963 22.45 11.8373 22.45 7.98149C22.45 4.12572 19.4951 1 15.85 1C12.2049 1 9.25 4.12572 9.25 7.98149C9.25 11.8373 12.2049 14.963 15.85 14.963Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.7 35.9076C30.7 27.2322 24.0513 20.1992 15.85 20.1992C7.64867 20.1992 1 27.2322 1 35.9076"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8508 35.9076L19.1508 31.5441L15.8508 20.1992L12.5508 31.5441L15.8508 35.9076Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
      <div id="faq"></div>
      <div className="w-full max-w-6xl xl:px-0 md:px-[50px] px-[40px] mt-[110px]  ">
        <p className=" text-[30px] md:text-[48px] md:pb-[100px] pb-[40px] leading-[45px] font-bold bg-gradient-to-r from-[#FFFFFF] via-[#c0bdbd] to-[#656565] bg-clip-text text-transparent">
          Foire aux questions
        </p>

        <div className="flex flex-col gap-7">
          <FaqItem content="Est-ce que Payme est facile à utiliser, même pour ceux qui ne sont pas experts en finance ?">
            <p>
              Absolument ! Payme a été conçu avec une interface conviviale,
              pensée spécifiquement pour rendre la facturation et la
              comptabilité accessibles à tous, même pour ceux qui ne sont pas
              des experts en finance. Notre application simplifiée offre une
              expérience intuitive, avec des fonctionnalités faciles à
              comprendre et à utiliser. Vous n'avez pas besoin d'avoir des
              connaissances approfondies en comptabilité pour créer des devis,
              des factures, suivre les paiements ou générer des rapports
              financiers. <br /> Que vous soyez un entrepreneur débutant ou un
              professionnel expérimenté, vous trouverez que Payme vous offre une
              solution simple et efficace pour gérer vos finances.
            </p>
          </FaqItem>
          <FaqItem
            content=" Quelles sont les fonctionnalités principales de Payme pour la
        gestion financière des PME ?"
          >
            <div className="flex flex-col gap-3">
              <p>
                Payme offre une gamme de fonctionnalités essentielles pour la
                gestion financière des PME :
              </p>

              <p className="mt-3">
                1. Création de Devis et Factures : Avec Payme, vous pouvez créer
                facilement des devis et des factures professionnelles en
                quelques clics. Il vous suffit d'entrer les détails pertinents,
                et l'application générera automatiquement les documents
                nécessaires.
              </p>

              <p>
                2. Suivi des Paiements : Payme vous permet de suivre
                automatiquement les paiements en attente, vous offrant ainsi une
                visibilité sur votre trésorerie et vous permettant de gérer
                efficacement vos finances.
              </p>

              <p>
                3. Tableau de Bord Intuitif : Notre tableau de bord vous offre
                une vue d'ensemble de votre situation financière, vous
                permettant de surveiller vos revenus et la santé globale de
                votre entreprise en un coup d'œil.
              </p>

              <p>
                4. Rapports Financiers : Payme génère des rapports financiers
                complets, vous permettant de suivre et d'analyser la santé
                financière de votre entreprise avec précision.
              </p>
              <p>
                5. Sécurité des Données : Nous accordons une grande importance à
                la sécurité de vos données financières. Vos informations sont
                cryptées et stockées de manière sécurisée, garantissant ainsi la
                confidentialité et la protection de vos données.
              </p>
              <p>
                Avec ces fonctionnalités, Payme vous offre une solution complète
                pour gérer efficacement vos finances et faire prospérer votre
                entreprise.
              </p>
            </div>
          </FaqItem>
          <FaqItem content="Est-ce que Payme permet de personnaliser les factures avec le logo et les informations de mon entreprise ?">
            Oui, absolument ! Payme vous permet de personnaliser vos factures en
            y ajoutant le logo et les informations de votre entreprise. Vous
            pouvez facilement télécharger votre logo et saisir les détails de
            votre entreprise, tels que le nom de l'entreprise, l'adresse, les
            coordonnées, etc. Une fois ces informations saisies, elles seront
            automatiquement incluses sur toutes les factures que vous créez, ce
            qui donne à vos documents une apparence professionnelle et
            personnalisée.
          </FaqItem>
          <FaqItem content="Y a-t-il une période d’essai gratuite ou une garantie de satisfaction pour Payme ?">
            Oui, absolument ! Payme vous permet de personnaliser vos factures en
            y ajoutant le logo et les informations de votre entreprise. De plus,
            notre application offre une vaste bibliothèque de modèles de
            factures, comprenant plus de 100 000 modèles différentes. Vous
            pouvez choisir parmi ces modèles ou créer le vôtre en personnalisant
            chaque détail selon vos préférences. Avec cette flexibilité, les
            possibilités de personnalisation sont infinies, vous permettant de
            créer des factures qui correspondent parfaitement à l'image de votre
            entreprise.
          </FaqItem>
          <FaqItem content="Est-ce que Payme offre des fonctionnalités de génération de rapports financiers ?">
            Oui, absolument ! Payme offre des fonctionnalités complètes de
            génération de rapports financiers. Notre application génère des
            rapports détaillés sur divers aspects de vos finances, vous
            permettant de suivre et d'analyser la santé financière de votre
            entreprise en toute simplicité. Ces rapports peuvent inclure des
            informations telles que les revenus générés, les dépenses engagées,
            les paiements en attente, etc. Grâce à ces rapports, vous pouvez
            prendre des décisions éclairées pour la croissance et la gestion
            efficace de votre entreprise.
          </FaqItem>
          <FaqItem content="Comment Payme sécurise-t-il mes données financières et celles de mon entreprise ?">
            <div className="flex flex-col gap-3">
              <p>
                {" "}
                Payme prend la sécurité de vos données financières et de celles
                de votre entreprise très au sérieux. Nous avons mis en place
                plusieurs mesures de sécurité pour garantir la protection de vos
                informations sensibles :
              </p>

              <p className="mt-3">
                {" "}
                1. Chiffrement des données : Toutes les données, y compris les
                informations financières, sont cryptées en transit et au repos.
                Cela signifie que même en cas de violation, les données restent
                inaccessibles aux tiers non autorisés.
              </p>
              <p>
                2. Authentification multi-facteurs (AMF) : Nous offrons une
                authentification multi-facteurs pour renforcer la sécurité de
                l'accès à votre compte. Cela garantit que seules les personnes
                autorisées peuvent accéder à vos données, même si un mot de
                passe est compromis.
              </p>
              <p>
                3. Sauvegardes régulières : Vos données sont sauvegardées
                régulièrement, minimisant ainsi le risque de perte en cas de
                sinistre ou de défaillance technique.
              </p>
              <p>
                4. Conformité aux normes de sécurité : Notre application est
                conçue en respectant les normes de sécurité les plus strictes,
                telles que le RGPD, pour assurer la protection de la vie privée
                de vos clients et de vos données.
              </p>
              <p>
                5. Support technique : Notre équipe de support technique est
                prête à vous assister en cas de problème lié à la sécurité ou
                d'accès non autorisé, assurant ainsi une surveillance constante
                de la sécurité de vos données.
              </p>
              <p>
                Avec ces mesures en place, vous pouvez avoir l'assurance que vos
                données financières et celles de votre entreprise sont entre de
                bonnes mains avec Payme.
              </p>
            </div>
          </FaqItem>
        </div>
      </div>
      <div className=" px-6 mt-[40px] md:mt-[52px] xl:mt-[72px]   xl:w-[1308px] z-10 md:px-[70px] xl:px-[80px] ">
        <a href="#telecharger">
          <img className="hidden md:flex" src="/images/Groupf.png" alt="" />
        </a>
        <a href="#telecharger">
          <img className="md:hidden" src="/images/Groupfm.png" alt="" />
        </a>
      </div>
      {/*   <div className="relative">
        <img className="absolute " src="images/Grille.png" alt="" />
        <div className="w-full max-w-6xl xl:px-0 md:px-[50px] px-[40px] mt-[152px] h-[403px] p-8 py-4 rounded-3xl flex mr-20 bg-[#222222]">
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
      </div> */}

      <div className="w-full  max-w-6xl xl:px-14 md:px-[50px] px-[40px] flex-col  p-8 py-4 rounded-3xl flex   relative ">
        <div className="gestion opacity-40"></div>
        <div className="flex flex-col items-end justify-between mt-20 md:flex-row">
          <div className="flex flex-col items-center w-full md:items-start">
            <img
              src={"/images/logo-payme-complet.png"}
              width={110}
              height={50}
            />
            <p className="text-[14px] mt-[13px]">
              © 2024 Payme, Sarl. Tout droit réservé.
            </p>
            <p className="text-[16px] mt-[7px] text-[#727072]">
              Toutes les marques, logos et noms de marque sont <br /> la
              propriété de leurs propriétaires respectifs.
            </p>
          </div>

          <div className="w-full flex flex-col items-end leading-4  md:w-[700px]">
            <div className="z-0 flex flex-row items-center justify-center w-full md:w-auto">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.24 21.7804L25.8229 18.0721H22.2326V15.6617C22.2326 14.6477 22.7338 13.6569 24.3366 13.6569H25.9919V10.499C25.028 10.3451 24.0539 10.2618 23.0777 10.2499C20.1227 10.2499 18.1935 12.0287 18.1935 15.2445V18.0721H14.918V21.7804H18.1935V30.7499H22.2326V21.7804H25.24Z"
                  fill="#D9D9D9"
                />
              </svg>

              <Link
                className="cursor-pointer"
                href={"https://www.linkedin.com/company/paymefinance/"}
                target="_blank"
              >
                <FaLinkedinIn className="w-6 h-6 mx-2 " />
              </Link>

              <svg
                width="42"
                height="41"
                viewBox="0 0 42 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.6117 13.9465C30.9363 14.2379 30.2262 14.4408 29.499 14.5501C29.839 14.4917 30.3392 13.8784 30.5384 13.6301C30.8409 13.2556 31.0714 12.8282 31.2183 12.3694C31.2183 12.3353 31.2523 12.2866 31.2183 12.2623C31.2012 12.2529 31.182 12.248 31.1625 12.248C31.1429 12.248 31.1237 12.2529 31.1066 12.2623C30.317 12.6908 29.4766 13.0179 28.6054 13.2358C28.575 13.2451 28.5427 13.246 28.5119 13.2382C28.4811 13.2305 28.453 13.2145 28.4305 13.192C28.3627 13.1111 28.2897 13.0347 28.212 12.9632C27.8566 12.6441 27.4535 12.3829 27.0172 12.1892C26.4284 11.9471 25.7923 11.8422 25.1571 11.8826C24.5407 11.9216 23.939 12.0873 23.3892 12.3694C22.8479 12.6667 22.3721 13.0708 21.9905 13.5571C21.5891 14.0577 21.2992 14.6386 21.1405 15.2609C21.0097 15.8527 20.9948 16.4644 21.0968 17.062C21.0968 17.1642 21.0968 17.1788 21.0094 17.1642C17.5465 16.6531 14.7053 15.4215 12.3838 12.7783C12.2818 12.6614 12.2284 12.6614 12.1458 12.7783C11.1356 14.3165 11.6262 16.7504 12.8889 17.9528C13.0589 18.1134 13.2337 18.2692 13.4183 18.4152C12.8393 18.374 12.2745 18.2168 11.7573 17.9528C11.6602 17.8895 11.6067 17.9236 11.6019 18.0404C11.5881 18.2024 11.5881 18.3652 11.6019 18.5272C11.7032 19.3034 12.0084 20.0387 12.4863 20.658C12.9642 21.2772 13.5975 21.7581 14.3217 22.0515C14.4982 22.1273 14.6821 22.1844 14.8705 22.2219C14.3345 22.3276 13.7848 22.3441 13.2435 22.2706C13.1269 22.2462 13.0832 22.3095 13.1269 22.4215C13.8408 24.3686 15.3901 24.9625 16.5266 25.2935C16.682 25.3178 16.8375 25.3178 17.0123 25.3568C17.0123 25.3568 17.0123 25.3568 16.9832 25.386C16.648 25.9993 15.293 26.4131 14.6713 26.6273C13.5366 27.0358 12.3268 27.1919 11.1259 27.0849C10.9365 27.0556 10.8928 27.0605 10.8442 27.0849C10.7956 27.1092 10.8442 27.1627 10.8976 27.2114C11.1405 27.3721 11.3833 27.5132 11.6359 27.6495C12.3877 28.0605 13.1826 28.387 14.006 28.6231C18.2702 29.8011 23.0687 28.9346 26.2693 25.7462C28.7851 23.2441 29.669 19.7928 29.669 16.3366C29.669 16.2052 29.8293 16.1273 29.9216 16.0592C30.558 15.5621 31.1192 14.9751 31.5874 14.3165C31.6685 14.2183 31.7101 14.0933 31.704 13.966C31.704 13.893 31.704 13.9076 31.6117 13.9465Z"
                  fill="#D9D9D9"
                />
              </svg>

              <Link
                className="cursor-pointer"
                href={
                  "https://www.tiktok.com/@paymefinance.com?_t=8rJZEiP2nlH&_r=1"
                }
                target="_blank"
              >
                <svg
                  width="42"
                  height="41"
                  viewBox="0 0 42 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.5355 17.6556C26.9056 18.6318 28.5463 19.1534 30.2272 19.1471V15.8081C29.8968 15.809 29.5672 15.7735 29.2445 15.7023V18.3624C27.5597 18.3654 25.9166 17.8378 24.5472 16.8543V23.7215C24.543 24.8484 24.2347 25.9531 23.6549 26.9186C23.0751 27.884 22.2455 28.6742 21.2539 29.2053C20.2623 29.7365 19.1458 29.9888 18.0228 29.9355C16.8998 29.8822 15.812 29.5252 14.875 28.9026C15.7417 29.7815 16.8492 30.3829 18.0572 30.6306C19.2652 30.8783 20.5194 30.7612 21.6609 30.294C22.8024 29.8268 23.7799 29.0306 24.4696 28.0062C25.1594 26.9819 25.5303 25.7754 25.5355 24.5396V17.6556ZM26.7515 14.2498C26.0548 13.493 25.6273 12.5264 25.5355 11.5007V11.0667H24.6027C24.718 11.7186 24.9689 12.339 25.3391 12.8874C25.7093 13.4358 26.1905 13.9 26.7515 14.2498ZM17.0349 26.2592C16.7116 25.8354 16.5134 25.3292 16.463 24.7982C16.4126 24.2671 16.512 23.7326 16.7498 23.2553C16.9875 22.7781 17.3542 22.3774 17.8081 22.0987C18.2619 21.82 18.7847 21.6747 19.3169 21.6792C19.6107 21.6791 19.9028 21.7241 20.183 21.8127V18.3624C19.8555 18.3189 19.5251 18.3003 19.1947 18.3067V20.9891C18.5124 20.7729 17.7739 20.8221 17.1261 21.1268C16.4783 21.4315 15.9687 21.9694 15.6986 22.6336C15.4285 23.2978 15.4177 24.0395 15.6684 24.7113C15.9191 25.3831 16.4128 25.9357 17.0515 26.2592H17.0349Z"
                    fill="#D9D9D9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.5494 16.832C25.9188 17.8156 27.562 18.3431 29.2467 18.3401V15.6801C28.2868 15.4766 27.4148 14.9764 26.7537 14.2498C26.1928 13.9 25.7116 13.4358 25.3414 12.8874C24.9712 12.339 24.7202 11.7186 24.6049 11.0667H22.1508V24.5396C22.1485 25.1359 21.96 25.7166 21.6116 26.2001C21.2632 26.6835 20.7726 27.0455 20.2085 27.2352C19.6444 27.4249 19.0352 27.4328 18.4664 27.2577C17.8976 27.0827 17.3978 26.7335 17.0371 26.2592C16.4655 25.9701 16.0077 25.4964 15.7377 24.9146C15.4676 24.3328 15.401 23.6768 15.5485 23.0524C15.6961 22.4279 16.0493 21.8716 16.551 21.473C17.0528 21.0744 17.6739 20.8569 18.3141 20.8555C18.6079 20.8565 18.8998 20.9015 19.1803 20.9891V18.3067C17.9685 18.3359 16.7916 18.719 15.7941 19.4091C14.7965 20.0992 14.0217 21.0662 13.5647 22.1915C13.1078 23.3167 12.9886 24.5511 13.2217 25.7433C13.4549 26.9355 14.0302 28.0335 14.8772 28.9026C15.8145 29.5297 16.9039 29.8903 18.0294 29.946C19.155 30.0016 20.2745 29.7502 21.2688 29.2185C22.2631 28.6869 23.0948 27.8948 23.6755 26.9268C24.2561 25.9588 24.5639 24.851 24.5661 23.7215L24.5494 16.832Z"
                    fill="#D9D9D9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.2456 15.6796V14.9618C28.3641 14.9655 27.4996 14.7185 26.7526 14.2494C27.4121 14.9781 28.2848 15.4787 29.2456 15.6796ZM24.6039 11.0662C24.6039 10.9382 24.565 10.8047 24.5483 10.6767V10.2426H21.1614V23.7211C21.1585 24.4758 20.8569 25.1985 20.3229 25.7306C19.7889 26.2627 19.066 26.5607 18.313 26.5593C17.8697 26.5615 17.4321 26.4585 17.036 26.2588C17.3967 26.7331 17.8965 27.0822 18.4653 27.2573C19.0341 27.4324 19.6433 27.4245 20.2074 27.2348C20.7715 27.0451 21.2622 26.6831 21.6105 26.1997C21.9589 25.7162 22.1474 25.1355 22.1497 24.5392V11.0662H24.6039ZM19.1792 18.3008V17.5384C17.7855 17.3486 16.3688 17.6376 15.1599 18.3581C13.951 19.0787 13.0213 20.1884 12.5222 21.5064C12.0231 22.8244 11.9841 24.2729 12.4116 25.6159C12.8391 26.959 13.7078 28.1173 14.8761 28.9021C14.0356 28.0311 13.4663 26.9335 13.2379 25.7435C13.0095 24.5535 13.1319 23.3226 13.5901 22.2011C14.0482 21.0797 14.8223 20.1162 15.8179 19.4285C16.8134 18.7408 17.9872 18.3586 19.1959 18.3286L19.1792 18.3008Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </Link>
            </div>

            <div className="z-50 flex gap-2">
              <p className="text-[16px] mt-[7px] text-[#727072]">
                <Link
                  href="/conditions-generales"
                  className="cursor-pointer hover:text-white/70 "
                >
                  {" "}
                  Conditions d'utilisation{" "}
                </Link>
                et
                <Link
                  href="/politique"
                  className="cursor-pointer hover:text-white/70 "
                >
                  {" "}
                  Politique de confidentialité{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );

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
      <div className="text-[16px] md:mr-[50px]  pt-[24px] border-t border-white/20 max-w-[510px] leading-[26px] md:max-w-[450px] xl:max-w-full  flex gap-[30px]  items-start justify-start ">
        <div>{icon}</div>

        <p className="md:text-[14px] ">
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
      <div className="text-[16px]  pt-[10px] pb-4 md:border-b-transparent border-b md:border-l border-white/20 max-w-[510px] leading-[26px] flex-col  flex gap-[10px] md:px-[28px]  items-start justify-start ">
        <div>{icon}</div>

        <p className="">
          <span className="text-white">{titre}</span> {isBr && <br />}
          {content}
        </p>
      </div>
    );
  }
}
