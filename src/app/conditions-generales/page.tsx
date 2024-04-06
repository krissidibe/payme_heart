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
import MobileMenu from "../MobileMenu";
import { Linkedin } from "lucide-react";

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
      className={`flex flex-col items-center  overflow-x-hidden relative text-[#B9B9B9] w-full   min-h-screen bg-[#0E0E0E] ${myFont.className}`}
    >
      <img className="absolute" src="images/Grille.png" alt="" />

      <div className="heroEclipse"></div>
      {/* Header */}
      <MobileMenu />

      <div className="relative w-full max-w-5xl xl:px-0 md:px-[50px] px-[40px] mt-[180px] pb-20">
        <div
          className={`flex flex-col items-start   overflow-x-hidden relative text-[#B9B9B9] w-full    min-h-screen   `}
        >
          <h1 className="text-4xl font-normal mb-8 xl:text-6xl bg-gradient-to-r from-[#FFFFFF] via-[#c0bdbd] to-[#656565] bg-clip-text text-transparent">
            Conditions d'Utilisation de <br /> l'Application Payme
          </h1>
          <div className="w-full h-2 mb-12 border-b border-white/20 "></div>

          <p className="text-justify">
            IL S’AGIT D’UN ACCORD ENTRE VOUS OU L’ENTITÉ QUE VOUS REPRÉSENTEZ
            (CI-APRÈS « VOUS » ou « VOTRE ») ET L’ENTITÉ CONTRACTANTE PAYME
            RÉPERTORIÉE ICI (CI-APRÈS « PAYME ») RÉGISSANT VOTRE UTILISATION DE
            L'APPLICATION DE FACTURATION SIMPLIFIÉE POUR LES PETITES ET MOYENNES
            ENTREPRISES, NOMMÉE PAYME
          </p>

          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">
            Parties du présent accord
          </p>
          <p>
            Le présent Contrat comprend les termes et conditions suivants
            (ci-après les « Conditions Générales ») ainsi que les conditions, le
            cas échéant, spécifiques à l’utilisation de l'Application (ci-après
            les « Conditions Spécifiques à l'Application »). En cas de conflit
            entre les Conditions Générales et les Conditions Spécifiques à
            l'Application, ces dernières prévaudront.
          </p>
          {/* End */}
          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">
            Acceptation de l’Accord
          </p>
          <p>
            Vous devez avoir l’âge légal pour conclure un accord contraignant
            afin d’accepter les conditions générales. Si vous n’acceptez pas les
            conditions générales, n'utilisez aucun de nos services. Si vous
            acceptez les conditions générales mais refusez les conditions
            spécifiques à l'Application, n'utilisez pas cette Application. Vous
            pouvez accepter l’accord en cochant une case ou en cliquant sur un
            bouton indiquant votre acceptation du contrat, ou encore en
            utilisant effectivement l'Application.
          </p>
          {/* End */}
          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">
            Description du service
          </p>
          <p>
            Nous fournissons une application de facturation simplifiée pour les
            petites et moyennes entreprises (« Service » ou « Application »).
            Vous pouvez utiliser l'Application à des fins professionnelles liées
            à la facturation et à la gestion financière de votre entreprise.
            Vous avez la possibilité de vous connecter à l'Application via
            n'importe quel appareil pris en charge par cette dernière. Vous êtes
            responsable de l'obtention de l'accès à Internet et de l'équipement
            nécessaire à l'utilisation de l'Application. Vous pouvez créer,
            gérer et visualiser des factures avec votre compte utilisateur, et
            si vous choisissez de le faire, vous pouvez partager ces
            informations avec d'autres utilisateurs autorisés.
          </p>
          {/* End */}
          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">Service bêta</p>
          <p>
            Nous pouvons proposer certaines fonctionnalités de l'Application
            sous forme de versions bêta fermées ou ouvertes (« Fonctionnalités
            bêta ») dans le but de les tester et de les évaluer. Vous
            reconnaissez que nous avons le pouvoir discrétionnaire exclusif de
            déterminer la période de test et d'évaluation des Fonctionnalités
            bêta. Nous sommes les seuls juges du succès de ces tests et de la
            décision, le cas échéant, d'offrir les Fonctionnalités bêta en tant
            que fonctionnalités commerciales. Vous n'avez aucune obligation
            d'acquérir un abonnement pour utiliser une fonctionnalité payante
            découlant de votre abonnement à une Fonctionnalité bêta. Nous nous
            réservons le droit d'interrompre, temporairement ou de manière
            permanente, l'une des Fonctionnalités bêta à tout moment, avec ou
            sans préavis. Vous acceptez que Payme ne soit pas responsable envers
            vous ou un tiers pour tout préjudice lié à, découlant de, ou causé
            par la modification, la suspension ou l'interruption de l'une des
            Fonctionnalités bêta, pour quelque raison que ce soit.{" "}
          </p>
          {/* End */}

          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">Essai gratuit</p>
          <p>
            Si vous vous inscrivez pour un essai gratuit de l'Application, Payme
            mettra à votre disposition l'Application sur une base d'essai
            gratuite jusqu'à la première survenance des événements suivants :
            (I) la fin de la période d'essai gratuite de l'Application (sauf
            résiliation anticipée de votre part), (II) la date de début de la
            période d'abonnement payant à l'Application, ou (III) la résiliation
            par Payme à sa seule discrétion. Toutes les données que vous
            saisissez dans l'Application, ainsi que toutes les personnalisations
            apportées pendant l'essai gratuit, seront définitivement perdues
            sauf si vous (I) achetez l'abonnement correspondant selon le plan de
            compte, (II) achetez les mises à niveau applicables à l'Application,
            ou (III) exportez ces données avant la fin de la période d'essai.
            Nonobstant toute disposition de la présente section, l'Application
            est fournie telle quelle pendant l'essai gratuit, sans aucune
            garantie, engagement, soutien ou responsabilité quelconque, dans la
            mesure permise par la loi.
          </p>
          {/* End */}

          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">
            Obligations d’inscription de l’utilisateur
          </p>
          <p>
            Vous devez vous inscrire pour obtenir un compte utilisateur en
            fournissant toutes les informations requises afin d'accéder ou
            d'utiliser notre Application. Si vous représentez une organisation
            et souhaitez utiliser notre Application à des fins internes
            corporatives, nous vous recommandons, ainsi qu'à tous les autres
            utilisateurs de votre organisation, de vous inscrire en fournissant
            les informations de contact de votre entreprise. Nous vous
            recommandons spécifiquement d'utiliser votre adresse e-mail
            professionnelle et vous êtes tenu responsable de la confidentialité
            de votre mot de passe ainsi que de toutes les activités réalisées
            avec votre compte.{" "}
          </p>
          <p>
            En acceptant ces termes, vous vous engagez à : (i) Fournir des
            informations véridiques, précises, à jour et complètes vous
            concernant, tel que demandé par le processus d'inscription ; (ii)
            Maintenir et mettre à jour rapidement les informations fournies lors
            de l'inscription afin de les garder véridiques, précises, à jour et
            complètes. Si vous fournissez des informations fausses, inexactes,
            périmées ou incomplètes, ou si Payme a des raisons de croire que ces
            informations sont fausses, inexactes, périmées ou incomplètes, Payme
            a le droit de suspendre ou de résilier votre compte et de refuser
            toute utilisation actuelle ou future de l'Application (ou de toute
            partie de celle-ci).
          </p>
          {/* End */}

          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">
            Vos données et la confidentialité
          </p>
          <p>
            Nous respectons votre vie privée et traitons vos informations
            personnelles conformément à notre Politique de confidentialité, que
            vous pouvez consulter sur notre site Web. En utilisant
            l'Application, vous consentez à ce traitement et vous garantissez
            que toutes les données que vous fournissez sont exactes.
          </p>
          {/* End */}

          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">Licence</p>
          <p>
            Sous réserve du respect continu des présentes Conditions Générales,
            Payme vous accorde une licence personnelle, mondiale, non exclusive,
            non transférable et non cessible pour utiliser l'Application à des
            fins professionnelles conformément aux présentes Conditions
            Générales et aux Conditions Spécifiques à l'Application, le cas
            échéant. Vous ne pouvez pas accéder à l'Application à partir de
            territoires où son utilisation est illégale.
          </p>
          {/* End */}

          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">
            Restrictions d'utilisation
          </p>
          <p>
            Vous ne devez pas utiliser l'Application d'une manière qui enfreint
            les lois ou réglementations applicables, ou qui viole les droits de
            tiers. En particulier, mais sans s'y limiter, vous ne devez pas :
            (i) Copier, modifier, distribuer, vendre ou louer une partie de
            l'Application ; (ii) Tenter de désactiver ou de contourner toute
            mesure de sécurité de l'Application ; (iii) Utiliser l'Application
            d'une manière qui pourrait endommager, désactiver, surcharger ou
            nuire à notre serveur, à tout autre réseau connecté à notre serveur,
            ou interférer avec l'utilisation et la jouissance de l'Application
            par tout autre utilisateur ; (iv) Tenter d'obtenir un accès non
            autorisé à toute partie de l'Application ou tout autre système ou
            réseau connecté à notre serveur, par piratage, extraction de mot de
            passe ou tout autre moyen illégitime.
          </p>
          {/* End */}

          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">
            Propriété intellectuelle
          </p>
          <p>
            Payme détient tous les droits, titres et intérêts sur et pour
            l'Application, y compris tous les droits de propriété intellectuelle
            associés. Ces droits comprennent, sans s'y limiter, les droits
            d'auteur, les droits de marque, les droits de brevet, les droits de
            base de données, les droits de conception et tous les autres droits
            de propriété intellectuelle, que ce soit enregistré ou non. Vous ne
            devez pas (et ne devez pas autoriser un tiers à) copier, modifier,
            créer une œuvre dérivée, inverser l'ingénierie ou autrement tenter
            de découvrir tout code source ou vendre, attribuer, sous-licencier
            ou transférer de quelque manière que ce soit tout droit découlant de
            l'Application.
          </p>
          {/* End */}

          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">
            Modifications des Conditions Générales
          </p>
          <p>
            Payme se réserve le droit de modifier les Conditions Générales à
            tout moment. Les modifications prendront effet dès leur publication
            sur notre site Web ou par le biais de l'Application. Il est de votre
            responsabilité de consulter régulièrement les Conditions Générales
            pour prendre connaissance des modifications. Si vous continuez à
            utiliser l'Application après la publication des modifications, cela
            signifie que vous acceptez les nouvelles Conditions Générales.
          </p>
          {/* End */}

          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">Résiliation</p>
          <p>
            Payme peut, à sa seule discrétion, résilier votre accès à tout ou
            partie de l'Application à tout moment, avec ou sans motif, avec ou
            sans préavis. Si vous souhaitez résilier le présent Contrat ou votre
            compte Payme (le cas échéant), vous pouvez simplement cesser
            d'utiliser l'Application.
          </p>
          {/* End */}

          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">
            Limitation de responsabilité
          </p>
          <p>
            Dans toute la mesure permise par la loi applicable, en aucun cas
            Payme, ses dirigeants, administrateurs, employés, partenaires,
            filiales, agents, entrepreneurs, sous-traitants, fournisseurs,
            successeurs ou ayants droit respectifs ne seront responsables envers
            vous ou tout tiers pour tout dommage indirect, accessoire,
            consécutif, spécial, exemplaire ou punitif, y compris, sans
            limitation, les dommages pour perte de profits, de clientèle,
            d'utilisation, de données ou d'autres pertes intangibles, découlant
            de votre utilisation de l'application ou de toute autre réclamation
            liée de quelque manière que ce soit à votre utilisation de
            l'application, même si Payme a été informé de la possibilité de tels
            dommages.
          </p>
          {/* End */}

          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">Loi applicable</p>
          <p>
            Les présentes Conditions Générales d'Utilisation du logiciel Payme
            sont régies par le droit malien. Les parties s'engagent à résoudre à
            l'amiable tout différend relatif aux conditions générales du
            logiciel Payme, notamment en ce qui concerne sa validité, son
            interprétation ou son exécution. En l'absence d'un règlement amiable
            dans un délai de quinze (15) jours à compter de la notification du
            litige par l'une des parties, la partie la plus diligente saisira le
            Tribunal compétent.
          </p>
          {/* End */}

          {/* Start */}
          <p className="mt-5 mb-2 font-light  text-[25px]">
            Résolution des litiges
          </p>
          <p>
            Tous les litiges découlant du présent Contrat seront soumis à
            l'arbitrage conforme aux règles d'arbitrage commercial de l’OHADA
            actuellement en vigueur. La sentence arbitrale est définitive et
            contraignante pour les deux parties. Tout litige, réclamation ou
            controverse découlant du présent Contrat ou s'y rapportant, y
            compris la validité, l'interprétation, la violation ou la
            résiliation, sera résolu par arbitrage.
          </p>
          <p className="border-b pb-[60px] border-white/20">
            En acceptant ces conditions, vous reconnaissez avoir lu et compris
            l'ensemble du présent accord, y compris les conditions générales et
            les conditions spécifiques à l'Application, le cas échéant, et vous
            acceptez d'être lié par ces conditions.
          </p>
          {/* End */}
        </div>
      </div>
      <div className="w-full  max-w-6xl xl:px-16 md:px-[50px] px-[40px] flex-col bg  rounded-3xl flex   relative ">
        <div className="gestion opacity-40"></div>
        <div className="flex flex-col items-end justify-between mt-6 md:flex-row">
          <div className="flex flex-col w-full">
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
                <span
                  onClick={() => {
                    window.open(
                      `${
                        process.env.BASE_API_URL + "/" + "conditions-generales"
                      }`,
                      "_blank"
                    );
                  }}
                  className="cursor-pointer hover:text-white/70 "
                >
                  {" "}
                  Conditions d'utilisation{" "}
                </span>{" "}
                et
                <span
                  onClick={() => {
                    window.open(
                      `${
                        process.env.BASE_API_URL + "/" + "conditions-generales"
                      }`,
                      "_blank"
                    );
                  }}
                  className="cursor-pointer hover:text-white/70 "
                >
                  {" "}
                  Politique de confidentialité{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
