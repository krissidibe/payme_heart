"use client";
import Pdfrenderer from "@/components/pdfrenderer";
import MyDocumentPDF from "@/components/PdfRend";
import { FaLinkedinIn, FaWindows } from "react-icons/fa6";
import Image from "next/image";
import { IoIosClose, IoMdMenu } from "react-icons/io";
import { RiAppleFill } from "react-icons/ri";
export const dynamic = "force-dynamic";
import { IoIosMenu } from "react-icons/io";
import localFont from "next/font/local";
import ToggleButton from "../ToggleButton";
import MobileMenu2 from "../MobileMenu2";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const titleFont = localFont({
  src: [
    {
      path: "../../fonts/HelloJuliademo-d92Kx.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const myFont = localFont({
  src: [
    {
      path: "../../fonts/MabryPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/MabryPro-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/MabryPro-Bold.ttf",
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
      className={`flex flex-col items-center no-scrollbar  overflow-x-hidden relative text-[#B9B9B9] w-full   min-h-screen bg-[#0E0E0E] ${myFont.className}`}
    >
      <img className="absolute" src="images/Grille.png" alt="" />

      <div className="heroEclipse"></div>
      {/* Header */}
      <MobileMenu2 />

      <div className="relative w-full max-w-5xl xl:px-0 md:px-[50px] px-[40px] mt-[180px] pb-20">
        <div
          className={`flex flex-col items-start   overflow-x-hidden relative text-[#B9B9B9] w-full    min-h-screen   `}
        >
          <h1 className="text-4xl font-normal mb-8 xl:text-5xl bg-gradient-to-r from-[#FFFFFF] via-[#c0bdbd] to-[#656565] bg-clip-text text-transparent">
          Politique de confidentialité de Payme
          </h1>
          <div className="w-full h-2 mb-12 border-b border-white/20 "></div>
          <p className="mt-5 mb-2 font-light  text-[25px]">
          Engagement de Payme en matière de confidentialité
          </p>
          <p className="text-justify">
          Chez Payme, nous accordons une grande importance à la vie privée de nos utilisateurs, fidèles à notre engagement de fournir des services de facturation simplifiée. Nous ne collectons que les informations strictement nécessaires, limitant notre collecte aux données essentielles pour les transactions et la gestion des comptes. Notre engagement est renforcé par notre refus catégorique de générer des revenus publicitaires, éliminant tout conflit d'intérêts et préservant la confidentialité de nos utilisateurs.
          </p>

          {/* Start */}
         
          <p className="mt-5 mb-2 font-light  text-[25px]">
          Champ d’application de la présente politique de confidentialité
          </p>
          <p>
          La présente Politique de confidentialité s'applique à tous les utilisateurs de l'application Payme, ainsi qu'aux sites Web liés. Elle couvre également nos produits et services disponibles sur nos sites Web, applications mobiles, excluant tout service ou site avec une politique de confidentialité distincte.
          </p>
          {/* End */}
          <p className="mt-5 mb-2 font-light  text-[25px]">
          Partie I – Informations collectées et contrôlées par Payme
          </p>
          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">
          1. Informations que vous nous fournissez
          </p>
          <div className="flex flex-col gap-2"> 
       <p>   a. Inscription au compte : Lors de la création d'un compte Payme, nous collectons des informations telles que le nom, le numéro de contact, l'adresse e-mail, le nom de l'entreprise, et le pays. Vous pouvez également fournir des détails optionnels tels que le logo de l’entreprise, le cachet, et la signature, etc.</p>
         <p>
          b. Inscriptions à des événements et autres formulaires : Nous enregistrons les informations soumises lors de l'inscription à des événements, abonnements à la newsletter, téléchargement de produits ou demandes d'assistance client.
          </p>
           
<p>
c. Traitement des paiements : Lors des transactions, nous recueillons les informations nécessaires telles que le nom, les coordonnées, et les données de paiement. Les informations de carte de crédit ne sont pas stockées directement, assurant la sécurité des transactions.</p> 
<p>

d. Témoignages et interactions avec Payme : Si vous autorisez la publication de témoignages, nous pouvons inclure votre nom et d'autres détails dans le témoignage. Les interactions avec notre équipe, y compris les e-mails et les chats, sont enregistrées pour améliorer nos services.

</p>
          </div>
          {/* End */}
                 {/* Start */}
                 <p className="mt-5 mb-2 font-light  text-[25px]">
                 2. Informations que nous recueillons automatiquement
          </p>
          <div className="flex flex-col gap-2"> 
       
<p>a. Informations du navigateur, des appareils et des serveurs : Nous collectons des données fournies par les navigateurs, appareils mobiles et serveurs pour comprendre les visiteurs et améliorer nos services.</p>
<p>b. Cookies et technologies de suivi : Nous utilisons des cookies internes pour identifier les utilisateurs et améliorer leur expérience sans recourir à des cookies tiers intrusifs.</p>
<p>c. Journaux d'application et analyse mobile : Les informations sur l'utilisation de nos produits sont collectées pour améliorer leur performance et fonctionnalités.</p>
          </div>
          {/* End */}
                 {/* Start */}
                 <p className="mt-5 mb-2 font-light  text-[25px]">
                 3. Informations que nous collectons auprès de tiers
          </p>
          <div className="flex flex-col gap-2"> 
       <p>a. Inscriptions via des fournisseurs d'authentification : Vous pouvez vous connecter via des services tiers tels que Google et Apple, partageant des informations limitées nécessaires à l'authentification.</p>
<p>b. Recommandations et partenaires : Des informations peuvent être partagées par des recommandations, partenaires, médias sociaux et autres, respectant toujours les politiques de confidentialité.

</p>
          </div>
          {/* End */}

          <p className="mt-14">
            <span className="text-xl">Fins d'utilisation des informations</span> <br />
Outre les objectifs mentionnés, vos informations peuvent être utilisées pour communiquer, personnaliser votre expérience, assurer la sécurité, améliorer nos produits, fournir un support client, détecter la fraude, et pour des analyses internes.
</p>
<p className="mt-4">
            <span className="text-xl">Bases légales pour la collecte et l'utilisation d'informations</span> <br />
            Nos activités de collecte sont basées sur la nécessité contractuelle, les intérêts légitimes de Payme, et parfois sur le consentement de l'utilisateur. Nous informons clairement des intérêts légitimes lorsque nécessaire.
</p>
<p className="mt-4">
            <span className="text-xl">Votre choix dans l'utilisation des informations</span> <br />
            Vous avez le choix de vous désabonner des communications non essentielles, désactiver les cookies, et fournir des informations optionnelles à votre discrétion.
</p>
<p className="mt-4">
            <span className="text-xl">À qui nous partageons vos informations</span> <br />
            Payme partage des informations avec des entités internes du groupe Payme, et dans des cas spécifiques, avec des employés, contractants, fournisseurs de services tiers, registraires de domaines et développeurs d'applications tiers.
</p>
<p className="mt-14  font-light  text-[25px]">
Partie II – Informations traitées par Payme pour votre compte
          </p>
<p className=" font-light  text-[25px] mt-4">
Informations confiées à Payme et objectif
          </p>
          <p className="mt-4">
            <span className="text-xl">Informations fournies dans le cadre des services :</span> <br />
            Payme peut recevoir des informations que vous contrôlez, que ce soit en tant qu'individu ou au nom de votre organisation, lors de l'utilisation de nos services ou pour solliciter un support technique. Cela englobe des données relatives à vos clients et employés (si vous êtes un responsable), ou des données que vous détenez pour le compte d'une tierce personne à des fins spécifiques, telles que la fourniture de services à un client (si vous êtes un processeur). Ces données peuvent être stockées sur nos serveurs lors de l'utilisation de nos services, ou nous être transmises dans le cadre de demandes de support technique ou d'autres services.
</p>
          <p className="mt-4">
            <span className="text-xl">Informations provenant des appareils mobiles :</span> <br />
            Lorsque vous autorisez l'accès, certaines de nos applications mobiles peuvent utiliser des fonctionnalités telles que l'appareil photo, le microphone, les fichiers et d'autres données stockées sur votre appareil mobile. Ces accès sont nécessaires pour fournir nos services. De même, si vous activez l'accès, des informations de localisation peuvent être collectées pour des fonctionnalités telles que les rappels basés sur la localisation. Ces données seront exclusivement partagées avec nos fournisseurs de cartographie et utilisées uniquement dans le contexte des services. Vous pouvez désactiver ces accès à tout moment via les paramètres de votre appareil mobile.
</p>
          <p className="mt-4">
            <span className="text-xl">Propriété et contrôle de vos données de service :</span> <br />
            Reconnaissant que vous êtes propriétaire de vos données de service, Payme vous offre un contrôle total. Vous avez la possibilité d'accéder à vos données, de les partager via des intégrations tierces prises en charge, et de demander l'exportation ou la suppression de vos données.
</p>
          <p className="mt-4">
            <span className="text-xl">Comment nous utilisons les données de service :</span> <br />
            Nous traitons vos données de service conformément à vos instructions via les modules de nos services. Par exemple, lors de la génération d'une facture avec notre service de facturation, les informations du client sont utilisées pour créer la facture. De même, l'utilisation de notre service de gestion de campagnes pour le marketing par courrier électronique implique l'utilisation des adresses e-mail pour l'envoi de courriers électroniques..
</p>
          <p className="mt-4">
            <span className="text-xl">Notifications push :</span> <br />
            Si vous activez les notifications sur nos applications de bureau et mobiles, nous enverrons des notifications via des fournisseurs tels que le service de notification push d'Apple, Google Cloud Messaging, ou Windows Push Notification Services. Vous pouvez gérer vos préférences de notifications push ou les désactiver dans les paramètres de l'application ou de l'appareil.
</p>

<p className=" font-light mt-10 text-[25px]">
Partage des données de service
          </p>

          <p className="mt-4">
            <span className="">Groupe Payme et sous-traitants tiers : </span>  
            Pour assurer la prestation de services et de support, Payme peut engager d'autres entités du groupe et des tiers.
</p>
          <p className="mt-4">
            <span className="">Employés et travailleurs indépendants : </span>  
            L'accès à vos données de service est fourni à nos employés et travailleurs indépendants spécifiques pour des tâches telles que l'identification et la résolution d'erreurs, la vérification des e-mails signalés comme spam, ou la validation d'images scannées pour la reconnaissance optique de caractères. Un accès limité, enregistré et audité est appliqué, avec des directives strictes en matière de confidentialité.
</p>
          <p className="mt-4">
            <span className="">Collaborateurs et autres utilisateurs : </span>  
            Certains services permettent la collaboration, affichant votre nom et votre logo lors de modifications partagées.
</p>
          <p className="mt-4">
            <span className="">Intégrations tierces activées par vous : </span>  
            L'activation d'intégrations tierces peut autoriser ces tiers à accéder à vos données de service et à vos informations personnelles.
</p>
          <p className="mt-4">
            Autres cas : 
            Les scénarios de partage d'informations sont détaillés dans la Partie III.
</p>
          <p className="mt-10">
            <span className="text-xl">Conservation des informations </span> <br />
            Les données de votre compte Payme sont conservées aussi longtemps que vous utilisez nos services. La résiliation du compte entraînera la suppression des données actives lors du nettoyage semestriel, avec suppression des sauvegardes après 3 mois.
</p>
          <p className="mt-4">
            <span className="text-xl">Demandes des personnes concernées </span> <br />
            Si vous résidez dans l'Espace économique Africain ou dans d'autres régions du monde, et que vous souhaitez exercer vos droits d'accès, de rectification, d'effacement, de restriction ou d'opposition au traitement de vos données personnelles, veuillez prendre attache avec le client Payme compétent. Nous nous engageons à fournir notre assistance afin de répondre à votre requête dans les délais légaux appropriés.
</p>




<p className="mt-14  font-light  text-[25px]">
Partie III – Généralités
          </p>
 



          <p className="mt-4">
            <span className="text-xl">Informations personnelles concernant les enfants </span> <br />
            Les produits et services de Payme ne sont pas destinés aux personnes de moins de 16 ans. Nous ne collectons délibérément aucune information personnelle auprès d'enfants de moins de 16 ans à nos propres fins. Si nous constatons qu'un enfant de moins de 16 ans nous a fourni des informations personnelles, des mesures seront prises pour supprimer ces informations. Si vous avez connaissance qu'un enfant de moins de 16 ans nous a fourni des informations personnelles, veuillez nous contacter à <a href={`mailto:contact@paymefinance.com?subject=${"object"}&body=${"message"}`}  className="text-teal-500">contact@paymefinance.com</a> en fournissant les détails nécessaires, et nous prendrons les mesures appropriées pour supprimer ces informations. Cependant, en utilisant nos produits, vous pourriez collecter des informations sur des personnes qui peuvent être des enfants. En traitant de telles informations, vous reconnaissez et acceptez d'assumer la responsabilité de respecter les lois et réglementations applicables en matière de protection de ces informations personnelles.
</p>
          <p className="mt-4">
            <span className="text-xl">Niveau de sécurité de vos informations</span> <br />
            Chez Payme, la sécurité des données est une priorité. Nous avons mis en place des mesures de protection administratives, techniques et physiques appropriées pour prévenir l'accès, l'utilisation, la modification, la divulgation ou la destruction non autorisés des informations que vous nous confiez. Pour des préoccupations relatives à la sécurité de vos données, nous vous encourageons à consulter notre politique de sécurité ou à nous contacter à <a href={`mailto:contact@paymefinance.com?subject=${"object"}&body=${"message"}`}  className="text-teal-500">contact@paymefinance.com</a> pour toute question.
          </p>
          <p className="mt-4">
            <span className="text-xl">Transferts internationaux et emplacements</span> <br />
            En utilisant nos produits et services ou en nous fournissant vos informations personnelles, vous comprenez que celles-ci peuvent être partagées au sein du groupe Payme et avec des tiers. De plus, le traitement, le transfert et le stockage de vos données peuvent avoir lieu dans d'autres pays où Payme opère, conformément à des accords de protection des données appropriés.
          </p>
          <p className="mt-4">
            <span className="text-xl">Automatisation et intelligence artificielle</span> <br />
            Afin d'améliorer la productivité et les capacités prédictives de nos utilisateurs, nous utilisons différentes technologies telles que l'analyse regex, la correspondance de modèles, l'intelligence artificielle et l'apprentissage automatique. Conformément à notre engagement envers la vie privée, nous utilisons vos données de service de manière limitée, notamment en utilisant des cultures anonymisées de données de service pour améliorer la précision des algorithmes, et en développant des modèles spécifiques à votre organisation à partir des données de votre organisation. Nos technologies d'automatisation et d'intelligence artificielle sont principalement alimentées par les données de notre propre organisation, telles que les communications internes, les communications avec les clients et les documents internes, ainsi que des sources externes gratuites et payantes.
          </p>
          <p className="mt-4">
            <span className="text-xl">Demandes Do Not Track (DNT)</span> <br />
            Certains navigateurs Internet peuvent activer la fonctionnalité "Do Not Track" (DNT), qui envoie un signal (appelé signal DNT) aux sites Web que vous visitez, indiquant que vous ne souhaitez pas être suivi. À l'heure actuelle, il n'existe aucune norme régissant la manière dont les sites Web doivent réagir à ces signaux. Actuellement, nous n'apportons aucune modification en réponse à ces signaux.
          </p>
          <p className="mt-4">
            <span className="text-xl">Liens externes sur nos sites Web</span> <br />
            Certaines pages de nos sites Web peuvent contenir des liens vers des sites Web qui ne sont pas liés à la présente politique de confidentialité. Si vous soumettez vos informations personnelles à l'un de ces sites tiers, vos informations seront régies par leurs politiques de confidentialité. Nous vous recommandons de ne pas partager d'informations personnelles avec ces tiers sans avoir vérifié leurs politiques de confidentialité et assuré de leurs pratiques en matière de confidentialité.
          </p>
          <p className="mt-4">
            <span className="text-xl">Canaux de communication</span> <br />
            Nous mettons à disposition du public des outils tels que nos pages sur les réseaux sociaux, accessibles via nos sites Web. Il est important de noter que toute information que vous partagez sur ces plateformes peut être utilisée pour vous contacter avec des messages non sollicités. Nous vous recommandons de faire preuve de prudence lorsque vous divulguez des renseignements personnels sur nos canaux de communication. Payme décline toute responsabilité quant aux informations personnelles que vous choisissez de rendre publiques. Vos publications et certaines informations de profil peuvent subsister même après la résiliation de votre compte Payme. Si vous souhaitez que vos informations soient retirées de nos canaux de communication, veuillez contacter le service compétent chez Payme. Nous nous engageons à fournir notre assistance pour répondre à votre demande dans les délais légaux appropriés.
          </p>
          <p className="mt-4">
            <span className="text-xl">Widgets de médias sociaux</span> <br />
            Nos sites Web intègrent des widgets de médias sociaux, tels que les boutons "J'aime" de Facebook et les boutons "tweet" de Twitter, permettant le partage d'articles et d'autres informations. Ces widgets peuvent collecter des informations telles que votre adresse IP et les pages que vous consultez sur le site Web, et peuvent définir un cookie pour assurer leur bon fonctionnement. Vos interactions avec ces widgets sont régies par les politiques de confidentialité des entreprises qui les fournissent.
          </p>
          <p className="mt-4">
            <span className="text-xl">Divulgations en conformité avec les obligations légales</span> <br />
            Nous pourrions être légalement tenus de conserver ou de divulguer vos informations personnelles et données de service pour respecter toute loi, régulation, procédure judiciaire ou demande gouvernementale applicable, y compris pour répondre aux exigences de sécurité nationale.
          </p>
          <p className="mt-4">
            <span className="text-xl">Application de nos droits</span> <br />
            Nous pouvons divulguer des informations personnelles et des données de service à une tierce partie si nous estimons que cette divulgation est nécessaire pour prévenir la fraude, filtrer le courrier indésirable, enquêter sur toute activité illégale suspectée, faire respecter nos accords ou politiques, ou protéger la sécurité de nos utilisateurs.
          </p>
          <p className="mt-4">
            <span className="text-xl">Transferts d'entreprise</span> <br />
            Bien que nous n'ayons pas l'intention de vendre notre entreprise, en cas de vente, d'acquisition ou de fusion, nous veillerons à ce que l'entité acquérant soit légalement tenue de respecter nos engagements envers vous. Vous serez informé par e-mail ou par un avis visible sur notre site Web de tout changement de propriété ou d'utilisation de vos informations personnelles et données de service. Vous serez également informé des choix qui s'offrent à vous concernant vos informations personnelles et données de service.
          </p>
          <p className="mt-4">
            <span className="text-xl">Conformité avec cette Politique de confidentialité</span> <br />
            Nous nous efforçons de garantir que les informations personnelles que vous fournissez sont utilisées conformément à cette Politique de confidentialité. Si vous avez des préoccupations concernant notre conformité ou l'utilisation de vos informations personnelles, veuillez nous contacter à <a href={`mailto:contact@paymefinance.com?subject=${"object"}&body=${"message"}`}  className="text-teal-500">contact@paymefinance.com</a>. Nous prendrons contact avec vous et, si nécessaire, collaborerons avec les autorités réglementaires pour résoudre efficacement vos préoccupations.
          </p>
          <p className="mt-4 border-b pb-[60px] border-white/20">
            <span className="text-xl">Notification des changements</span> <br />
            La politique de confidentialité peut être modifiée à tout moment, avec un avis par le biais d'une annonce de service ou d'un e-mail à votre adresse e-mail principale. En cas de modifications substantielles affectant vos droits, vous recevrez un préavis d'au moins 30 jours par e-mail à votre adresse principale. Si vous ne vérifiez pas votre adresse e-mail, vous risquez de manquer des notifications importantes. Si vous estimez que les modifications affectent vos droits, vous pouvez mettre fin à votre utilisation dans les 30 jours suivant l'entrée en vigueur des modifications. Votre utilisation continue sera considérée comme l'acceptation de la Politique de confidentialité modifiée. Les modifications mineures ne feront pas l'objet d'une notification par e-mail. Pour les mises à jour, veuillez vérifier périodiquement <span className="text-teal-500">https://www.paymefinance.com/politique</span>
          </p>
          
        </div>
      </div>
      <div className="w-full  max-w-6xl xl:px-14 md:px-[50px] px-[40px] flex-col  p-8 py-4 rounded-3xl flex   relative ">
  <div className="gestion opacity-40"></div> 
        <div className="flex flex-col items-end justify-between mt-6 md:flex-row">
          <div className="flex flex-col w-full">
          <img src={"/images/logo-payme-complet.png"} width={110} height={50} />
            <p className="text-[14px] mt-[13px]">
              © 2024 Payme, Sarl. Tout droit réservé.
            </p>
            <p className="text-[16px] mt-[7px] text-[#727072]">
              Toutes les marques, logos et noms de marque sont <br /> la
              propriété de leurs propriétaires respectifs.
            </p>
          </div>

          <div className="w-full flex flex-col items-end leading-4  md:w-[700px]">
        
          <div className="flex flex-row items-center justify-center ">
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
              
              <FaLinkedinIn className="w-6 h-6 mx-2 " />
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
            </div>
            
          <div className="z-50 flex gap-2">
          <p className="text-[16px] mt-[7px] text-[#727072]">
             <Link href="/conditions-generales"  
          className="cursor-pointer hover:text-white/70 " > Conditions d'utilisation </Link> et  
          
          <Link  href="/politique"   
          className="cursor-pointer hover:text-white/70 " > Politique de confidentialité    </Link> 
          
            </p>
            
          

          </div>
           
          </div>
        </div>
      </div>
    </main>
  );
}
