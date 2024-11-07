"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/UI/components/ui/label";
import { usePathname, useRouter } from "next/navigation";
import { LoaderIcon } from "lucide-react";
import { country } from "@/utils/country";
import { stripe } from "../../../../lib/stripe";

export default function SubscribeForm() {
  const router = usePathname();
  const routerPath = useRouter();

  const [curentCountry, setCurentCountry] = useState<any>(null);
  const [modalCountry, setModalCountry] = useState(false);
  const [indicatif, setIndicatif] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [typePackage, setTypePackage] = useState(true);
  const [typePackage2, setTypePackage2] = useState(true);
  const [dataPayment, setDataPayment] = useState<any>(null);
  const [dataPaymentModal, setDataPaymentModal] = useState<any>(false);
  const [userCurrency, setUserCurrency] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  const contries = [
    {
      Capital: "Bamako",
      Code: "ML",
      Continent: "Africa",
      Currency: "FCFA",
      Languages: "fr",
      Name: "Mali",
      Native: "Mali",
      Phone: 223,
    },
    {
      Capital: "Yamoussoukro",
      Code: "CI",
      Continent: "Africa",
      Currency: "FCFA",
      Languages: "fr",
      Name: "Côte d'Ivoire",
      Native: "Côte d'Ivoire",
      Phone: 225,
    },
    {
      Capital: "Dakar",
      Code: "SN",
      Continent: "Africa",
      Currency: "FCFA",
      Languages: "fr",
      Name: "Sénégal",
      Native: "Sénégal",
      Phone: 221,
    },
    {
      Capital: "Ouagadougou",
      Code: "BF",
      Continent: "Africa",
      Currency: "FCFA",
      Languages: "fr,ff",
      Name: "Burkina Faso",
      Native: "Burkina Faso",
      Phone: 226,
    },
    {
      Capital: "Yaoundé",
      Code: "CM",
      Continent: "Africa",
      Currency: "XAF",
      Languages: "en,fr",
      Name: "Cameroun",
      Native: "Cameroon",
      Phone: 237,
    },
    {
      Capital: "Conakry",
      Code: "GN",
      Continent: "Africa",
      Currency: "GNF",
      Languages: "fr,ff",
      Name: "Guinée",
      Native: "Guinée",
      Phone: 224,
    },
    {
      Capital: "Libreville",
      Code: "GA",
      Continent: "Africa",
      Currency: "XAF",
      Languages: "fr",
      Name: "Gabon",
      Native: "Gabon",
      Phone: 241,
    },
    {
      Capital: "Porto-Novo",
      Code: "BJ",
      Continent: "Africa",
      Currency: "FCFA",
      Languages: "fr",
      Name: "Benin",
      Native: "Bénin",
      Phone: 229,
    },
  ];
  const [currentOperateur, setCurrentOperateur] = useState<any>(null);
  const [otpModal, setOtpModal] = useState(false);

  const [waveModal, setWaveModal] = useState(false);
  const [waveUrl, setWaveUrl] = useState("");
  const [pendindButton, setPendindButton] = useState(false);
  const [pendindMoney, setPendindMoney] = useState(false);
  const operateurs = {
    EMoney: "/images/E-money.png",
    FreeMoney: "/images/Free Money.png",
    Moov: "/images/Moov.png",
    Mtn: "/images/MTN.png",
    OrangeMoney: "/images/Orange Money.png",
    Wave: "/images/Wave.png",
    TMoney: "/images/TMoney.png",
    WizzalMoney: "/images/Wizzal money.png",
  };

  const countriesIntouch = [
    {
      name: "Mali",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg",
      indicatif: "+223",
      methods: [
        {
          OrangeMoney: "ML_PAIEMENTMARCHAND_OM_TP",
          image: operateurs.OrangeMoney,
        },
        { Moov: "ML_PAIEMENTMARCHAND_MOOV_TP", image: operateurs.Moov },
      ],
    },
    {
      name: "Côte d'Ivoire",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACWCAMAAAAfSh8xAAAACVBMVEX3fwD///8AnmBWUWjSAAAAoUlEQVR4nO3PMQEAAAgDoGn/0IZwJzQg6Zme7SkGDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDR8OvdOD1wQ8tBkAAAAASUVORK5CYII=",
      indicatif: "+225",
      methods: [
        {
          OrangeMoney: "PAIEMENTMARCHANDOMPAYCIDIRECT",
          image: operateurs.OrangeMoney,
        },
        { MTN: "PAIEMENTMARCHAND_MTN_CI", image: operateurs.Mtn },
        { Moov: "PAIEMENTMARCHAND_MOOV_CI", image: operateurs.Moov },
        { Wave: "WAVE", image: operateurs.Wave },
      ],
    },
    {
      name: "Sénégal",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAMAAAApQEceAAAAh1BMVEUAhT/jGyP970IAgj//9EJ5qkD+9kPrdy7iCiL/8kKexEEJij8AgD/47UIAfj8Aiz/e40JPo0CuyEHs6EJ0r0C7zUHk4kIbkj+20kFeq0Clx0EdjT/Y30Ly60Khv0Hn6EJssECPuUAjmj+DuEBjqEBYokCCskA1l0DP2kI/oUB6uEGLv0DD1kFSU4jTAAACVElEQVR4nO3ZXZOaMBQGYJakttEAAQT8QLcou7Bd///vW2CgFQg4HW9O2PeMFxoOMzyTk5BEy3o22A9uPxmrn79eno2nHYAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAmABRahkQEQRiEZBwuw2XABFlkpTzXWIGxI6kjJbQI+GWsQe1ZQYkTiwriRcAiViVM19bRkCcfQ357ZgP2dRJnvEQsXPrJHc3NwGbAOE+a5L8uSQTIIK1WYb3SFtZD2qLIkRwcR+rfdcj+1XvAhfEIYds3Ytjl3bst2cH4pD0wjb38S+v18ySlDhEhBljD29xrzH10qpilzyQMG+wYiEK4SqfvyNX3AiILU7ZcbJT2DE7DWdiqpD69fE2IZG+5oVCF2IL9b7RUNjmPdVkE4ZU5RUUcpSaHEZlRR1SRTka83mpzyQOEZHXz/SiifUWcYh9HtSWPE8kEocofzDcmT9xdkobIkpvmOpNHNTRhjjr0awlz/qtO21I2FUWaz7NN19/UEcbknbXiyAoutGSalNpQ9rKYn718GnbO3JtHsT5aJ7d/dMMC+fTrX+yD+0gIQ2J61MH5t3ai/zW7FJc7SEwZQi/ymqJuFd/51sR5tUyUn6attbiF2YV6/slonAORbVs1CVThry61ttt2HjLLffVLEhVWZkaVZFQmbyatR/hl0i38xCn6KJpJgxxJv+iijUTMGHI/wUggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAsg3gHwBVOOG05v6eK8AAAAASUVORK5CYII=",
      indicatif: "+221",
      methods: [
        { OrangeMoney: "OrangeMoney", image: operateurs.OrangeMoney },
        { Wave: "Wave", image: operateurs.Wave },
        /*   { FreeMoney: "", image: operateurs.FreeMoney },
        { WizzalMoney: "", image: operateurs.WizzalMoney }, */
      ],
    },
    {
      name: "Burkina Faso",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACgCAMAAAAFBRFXAAAAk1BMVEUAnknvKy380RZSjkXURTPzJizvIC791hTyXigAnUr/0hT81BX/1BAAmkzyZCgAm0vwQCvtAC/4px96rj30eyXwNCzxTSr7xxjzbif92xP3oCD8zBf+3xLxWin6vhr1hiP5sB32kiL1iyLUWDHdrSWNszjtzRxUp0LVxiUnnkmiujOWtTbiyiCvvDAzoka6vi7PNzS7UcqwAAACzklEQVR4nO3X23qaQBSGYUJbcDaASIyixpiNghuw9391nYq7RmI8mVl9lv97lnDAfM8sBvQe7oxHvQDXEMwdgrlDMHcI5g7B3CGYOwRzh2DuEMwdgrlDMHcI5g7B3CGYOwRzh2DuEMwdgrlDMHcI5g7B3CGYOwRzh2DuEMwdgh3pdoluTBQcPD4GNHcmCu73en2aO9MEB0+DwRPNFhMFD/N8eE/BD6M8H9HcmSa4P1ZqTPMQkwQH8cT3JzHJTJMEp6PQ98NRSnFvmmDTa4rvJjjoTP4G08w0RXDaa3a4R7HFJDvs793JDgdx2PSGFDNNEJz2VBOsKGaaYqQHh+ABwc3dBwfD8eEZHhN8T9sODi4cJ3o305fXLS/IdvBz3Pkknp6Cp5dXny0vyHbwyzgPPzn2muLP13L/xfKCbAennVl+Vnidymex7YPb+qEVdF9VeFtvqF671k8xB6e0OZZvKg7NoW3/1HbxWgr6sxuKw2nfxUvKzXs4fVPfPMhKvbn57PJ+OZHGU3mtV047qZuVeD8def9QXyZL9fH+29E6vB/OzBe6vVcv5u5W4bkjirK1WJeFcLgMh8Ry1VKsV0umvaY42lw8x3ITUS/Lppb3cUi9JouSddtIrxPqdVnTMtGsZ1rUrZ9bquZ6aEXr1k8Puea6xecTrU9PM9uZFsXiECz9qvKPfyyYfnhEq9OeZlGUnfZ7xXOLRdkUSlnWpjCqS7n/R8lyh0XRbKleVMkuUCRV83NCbljOdLRuTqsyS/Z5Isn2PydYntPLrYmTenv+1hX1Vptt11u6ZVmzm2ipM/HP9AqRmWKWM53MtXl8vYvZjTzzIOs5v+/pZaXVNmrZSBFtla6W7ldkl/nqMC/f9mvmlczv20NkZfHl2CZFmXEL9or6ymOa1LW7lTgirm7h9asAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAf+QN12HfyehjrygAAAABJRU5ErkJggg==",
      indicatif: "+226",
      methods: [
        { OrangeMoney: "OrangeMoney", image: operateurs.OrangeMoney },
        { Moov: "Move", image: operateurs.Moov },
      ],
    },
    {
      name: "Cameroun",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/langfr-225px-Flag_of_Cameroon.svg.png",
      indicatif: "+237",
      methods: [
        { OrangeMoney: "OrangeMoney", image: operateurs.OrangeMoney },
        { MTN: "MTN", image: operateurs.Mtn },
      ],
    },
    {
      name: "Guinée",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACWCAMAAAAfSh8xAAAACVBMVEXOESb80RYAlGAUMqWHAAAAoUlEQVR4nO3PMQEAAAgDoGn/0IZwJzQg6Zme7SkGDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDR8OvdOD1wQ8tBkAAAAASUVORK5CYII=",
      indicatif: "+224",
      methods: [
        { OrangeMoney: "OrangeMoney", image: operateurs.OrangeMoney },
        { MTN: "MTN", image: operateurs.Mtn },
      ],
    },
    {
      name: "Gabon",
      flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXx5CAZhtr8WDzN92qBIP-_f77KyWdhubjxeO_i3ygOBBZe4KmmHvzLigTr1mLiY8Os4&usqp=CAU",
      indicatif: "+241",
      methods: [
        {
          Moov: "Moov",
          image: operateurs.Moov,
        },
      ],
    },
    {
      name: "Benin",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/langfr-225px-Flag_of_Benin.svg.png",
      indicatif: "+229",
      methods: [
        { MTN: "MTN", image: operateurs.Mtn },
        { Moov: "Moov", image: operateurs.Moov },
      ],
    },
    /*  {
      name: "Togo",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/langfr-225px-Flag_of_Togo.svg.png",
      indicatif: "+228",
      methods: [
        { TMoney: "", image: operateurs.TMoney },
      
      ],
    },  */
  ];

  const [number, setNumber] = useState("");
  const [codeOTP, setCodeOTP] = useState("");
  const [currentData, setCurrentData] = useState<any>({
    method: "",
    otp: "",
    country: "",
    operateur: "",
    type: "",
    month: 0,
    amount: 0,
    pack: "",
    creditAI: 0,
    currency: "FCFA",
    number: "",
  });

  const BASE_API_URL = "https://paymefinance.com";
  //const BASE_API_URL = "http://localhost:3001"

  const USER_ID = router?.toString().replace("/subscribe/", "");

  const addNewPaymentIntouch = async (data: Payment) => {
    const request = await fetch(
      `${BASE_API_URL}/api/intouch/malitest?userId=${USER_ID}`,

      {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    console.log(data);

    const datas: any = await request.json();

    if (!request.ok) {
      return null;
    }

    return datas;

    return;

    /*  const request = await fetch(
      `${
       BASE_API_URL
      }/api/protected/payment?userId=${storage.getString(
      "userId"
    )}`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: storage.getString("accessToken"),
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  
    const datas: any = await request.json();
 
 
    if (!request.ok) {
      return null;
    }
  
    return datas; */
  };

  const fetchUser = async () => {
    // console.log(storage.getString("accessToken"));

    const request = await fetch(`${BASE_API_URL}/api/user?userId=${USER_ID}`, {
      headers: {
        "Content-type": "application/json",
      },
      method: "GET",
    });

    const data: any = await request.json();

    if (!request.ok) {
      return null;
    }

    return data;
  };

  const updateUserStripeCustomerId = async (stripeCustomerId: string) => {
    // console.log(window.localStorage.getItem("accessToken"));

    const request = await fetch(
      `${process.env.BASE_API_URL}/api/user?userId=${USER_ID}&stripeCustomerId`,
      {
        headers: {
          "Content-type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({ stripeCustomerId: stripeCustomerId }),
      }
    );

    const data: User = await request.json();

    if (!request.ok) {
      return null;
    }

    return data;
  };

  function getCurrency(currency: string): React.ReactNode {
    const datasFilter = country.filter((item) =>
      item.Phone.toString()
        .toLowerCase()
        .includes(currency.toString().replaceAll('"', ""))
    );

    return datasFilter[0].Currency;
  }

  useEffect(() => {
    (async () => {
      const dataUser = await fetchUser();

      setData((x: any) => (x = dataUser));
      setUserCurrency(
        (x: any) => (x = getCurrency(dataUser?.enterprise?.currency))
      );
      //  setIsLoading(false)
    })();
    return () => {};
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-[#2A2A2A] to-[#070707] ">
      <div className="flex flex-col w-full h-full max-w-md p-4 ">
        {/* Header */}
        <p className="text-xl font-bold ">Plan d'abonnement</p>

        <div className="flex flex-col flex-1 ">
          <p className="mt-4 mb-1 text-xl font-semibold">
            Des prix simples & transparents
          </p>
          <p className="mb-3 leading-5 opacity-50">
            Il y a forcément un plan pour vous
          </p>
          <div className="p-2 border border-[#ffffff22] flex flex-row mb-7 mt-6  items-center rounded-full w-full">
            <div
              onClick={() => {
                setTypePackage((x) => (x = true));
                setCurrentIndex((x) => (x = -10));
                setDataPayment((x: any) => (x = null));
              }}
              className="h-[50px] flex cursor-pointer  bg-[#ffffff1a] w-[50%] rounded-full items-center justify-center"
              style={{
                backgroundColor: typePackage ? "#ffffff1a" : "transparent",
              }}
            >
              <p className="font-semibold ">Packages</p>
            </div>
            <div
              onClick={() => {
                setTypePackage((x) => (x = false));
                setCurrentIndex((x) => (x = -10));
                setDataPayment((x: any) => (x = null));
              }}
              className="h-[50px] flex cursor-pointer    w-[50%] rounded-full items-center justify-center flex-row"
              style={{
                backgroundColor: !typePackage ? "#ffffff1a" : "transparent",
              }}
            >
              <Image width={20} height={20} src="/images/iawhite.png" alt="" />
              <p className="ml-2 font-semibold ">Credit IA</p>
            </div>
          </div>

          {/* Items */}
          <div
            className="flex flex-col flex-1 w-full gap-4 "
            style={{ gap: 15 }}
          >
            <ItemElement
              label="3 mois"
              price="9.890"
              pack="Pack Access"
              packIA="Pack Mini"
              creditIA={25}
              priceIA="490"
              creditPack={10}
              isActive={currentIndex == 0}
              handleClick={() => {
                setCurrentIndex(0);
              }}
            />
            <ItemElement
              isActive={currentIndex == 1}
              handleClick={() => {
                setCurrentIndex(1);
              }}
              label="6 mois"
              price="18.950"
              priceIA="950"
              pack="Premium"
              packIA="Pack Semi"
              creditPack={25}
              creditIA={55}
            />
            <ItemElement
              isActive={currentIndex == 2}
              handleClick={() => {
                setCurrentIndex(2);
              }}
              label="12 mois"
              price="34.950"
              priceIA="1.490"
              pack="Pack Gold"
              packIA="Pack Hot"
              creditIA={120}
              creditPack={60}
            />

            {dataPaymentModal && (
              <div className="flex flex-col h-[100%]  absolute top-0 left-0 right-0 bottom-0  overflow-y-scroll  bg-gradient-to-b from-[#2A2A2A] to-[#070707] ">
                {otpModal && (
                  <div className="absolute inset-0 z-50 flex items-center px-5 bg-black/50">
                    <div
                      className={clsx(
                        "p-4 px-5     flex flex-col  pb-[10px] w-full rounded-xl bg-gradient-to-b from-[#191919FF] to-[#222222]  "
                      )}
                    >
                      <div className="items-center justify-center px-0 py-4 ">
                        <p className="self-start w-full mb-4 text-xl font-semibold text-left ">
                          Code OTP
                        </p>

                        <Input
                          placeholder="Code OTP récu par sms"
                          value={codeOTP}
                          onChange={(e: any) => {
                            setCodeOTP(e.target.value);
                            currentData.otp = e.target.value;
                          }}
                          className="w-full bg-transparent rounded-xl border-white/50 h-14"
                        />
                        <p className="mt-1 text-sm text-left opacity-50">
                          Composez le
                          {currentOperateur?.country == "Sénégal"
                            ? "#144#391#"
                            : currentOperateur?.country == "Côte d'Ivoire"
                            ? "#144*82#"
                            : currentOperateur?.country == "Guinée Conakry"
                            ? "*144*4*2*1#"
                            : `*144*4*6*${currentData.amount}*codepin#`}
                          <br />
                          pour générer un code OTP
                        </p>
                      </div>
                      <div
                        className="left-0 right-0 flex flex-row justify-between flex-1 w-full px-0 pt-8 pb-2"
                        style={{}}
                      >
                        <div
                          className="w-[48.5%] font-semibold rounded-xl h-14 flex justify-center items-center"
                          onClick={() => {
                            setOtpModal(false);
                          }}
                          style={{
                            backgroundColor: "#515151",
                          }}
                        >
                          Annuler
                        </div>
                        <div
                          className="w-[48.5%] font-semibold rounded-xl h-14 flex justify-center items-center"
                          onClick={async () => {
                            currentData.number = number;
                            currentData.otp = codeOTP;

                            if (currentData.otp.length < 4) {
                              return;
                            }

                            setOtpModal(false);

                            setPendindButton(true);

                            currentData.country =
                              currentData.country == "Guinée"
                                ? "Guinée Conakry"
                                : currentData.country == "Burkina Faso"
                                ? "Burkina Fasso"
                                : currentData.country;
                            const data = await addNewPaymentIntouch(
                              currentData
                            );

                            if (data?.status == 200) {
                              setPendindMoney(true);
                            } else {
                              alert("Error de paiement");
                              setPendindButton(false);
                            }
                          }}
                          style={{
                            backgroundColor: "#9A9768",
                            opacity: 1,
                          }}
                        >
                          Confirmer
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {pendindMoney && (
                  <div className="absolute inset-0 z-50 flex items-end bg-black/50">
                    <div
                      className={clsx(
                        "p-4 px-5  rounded-tl-3xl  rounded-tr-3xl flex flex-col  pb-[10px] bg-gradient-to-b from-[#191919FF] to-[#222222]  "
                      )}
                    >
                      <div className="w-[44px] self-center h-1.5 rounded-md bg-[#2D2D2E]"></div>

                      <div className="items-center justify-center px-5 pt-6 ">
                        <div className=" self-center h-1.5 my-4 flex justify-center items-center ">
                          <LoaderIcon
                            className="self-center w-10 h-10 animate-spin "
                            color="#FFFFFFA7"
                          />
                        </div>
                        <p className="self-center w-full pt-6 text-2xl font-semibold text-center ">
                          En attente de paiement
                        </p>
                        <p className="mt-2 text-sm text-center opacity-70">
                          Nous vous avons envoyé un SMS avec les instructions de
                          paiement, merci de le vérifier
                        </p>
                      </div>
                      <div
                        className="left-0 right-0 flex flex-row justify-between flex-1 w-full px-0 pt-8 pb-2"
                        style={{}}
                      >
                        <div
                          className="w-[48.5%] font-semibold rounded-xl h-14 flex justify-center items-center"
                          onClick={() => {
                            setPendindMoney(false);
                          }}
                          style={{
                            backgroundColor: "#515151",
                          }}
                        >
                          Annuler
                        </div>
                        <div
                          className="w-[48.5%] font-semibold rounded-xl h-14 flex justify-center items-center"
                          onClick={async () => {
                            setPendindMoney(false);

                            // router.replace("/inside/(tabs)")
                          }}
                          style={{
                            backgroundColor: "#9A9768",
                            opacity: 1,
                          }}
                        >
                          Fermer
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="w-full h-[78%]  pt-4 mx-auto ">
                  {/*    <DrawerHeader className="">
       <DrawerTitle>Abonnement</DrawerTitle>

     </DrawerHeader> */}
                  {/* 
<div className="w-full max-w-full px-2">
<p className="text-xs">

{JSON.stringify(dataPayment)}
</p>
</div> */}
                  <div className="flex-1 px-4">
                    <ItemElementPay
                      isActive={true}
                      handleClick={() => {}}
                      label={dataPayment?.type}
                      price={dataPayment?.amount.toString()}
                      pack={dataPayment?.pack}
                      packIA={dataPayment?.creditAi}
                      creditIA={
                        typePackage ? dataPayment?.packIA : dataPayment?.month
                      }
                      priceIA={dataPayment?.amount}
                      creditPack={dataPayment?.creditPack}
                    />
                    {/* <ItemElement
         label={dataPayment?.type}
         price={dataPayment?.amount}
         pack={dataPayment?.pack}
         packIA={dataPayment?.creditAi}

         creditIA={dataPayment?.packIA}
         priceIA={dataPayment?.amount}
         creditPack={dataPayment?.creditPack}
         isActive={currentIndex == -1}
         handleClick={() => {
           setCurrentIndex(-1);
         }}
       /> */}
                    <p className="mt-6 mb-3 leading-5 opacity-50">
                      Sélectionner un moyen de paiement
                    </p>

                    <div className="p-2 border border-[#ffffff22] flex flex-row mb-7 mt-3  items-center rounded-full w-full">
                      <div
                        className="h-[50px] flex cursor-pointer  bg-[#ffffff1a] w-[50%] rounded-full items-center justify-center"
                        style={{
                          backgroundColor: typePackage2
                            ? "#ffffff1a"
                            : "transparent",
                        }}
                      >
                        <p className="font-semibold ">Paiment mobile</p>
                      </div>
                      <div
                        onClick={async () => {
                          //

                          const plansReq = await fetch(
                            `${process.env.BASE_API_URL}/api/stripe/plans`
                          );

                          const plansRes = await plansReq.json();
                          const dataRes = plansRes as Array<any>;
                          const paymentStripePrice = dataRes.filter(
                            (x) => x.type == dataPayment.pack
                          )[0];

                          const success_url =
                            process.env.NODE_ENV === "development"
                              ? "https://google.com"
                              : `${process.env.BASE_URL}/subscribe/${USER_ID}`;
                          const cancel_url =
                            process.env.NODE_ENV === "development"
                              ? "https://google.com"
                              : `${process.env.BASE_URL}/subscribe/${USER_ID}`;

                          if (
                            data?.stripeCustomerId == null ||
                            data?.stripeCustomerId == ""
                          ) {
                            const stripeCustomerId =
                              await stripe.customers.create({
                                email: data.email,
                              });

                            await updateUserStripeCustomerId(
                              stripeCustomerId.id
                            );

                            const session =
                              await stripe.checkout.sessions.create({
                                customer: stripeCustomerId.id,
                                mode: "payment",
                                payment_method_types: ["card"],
                                line_items: [
                                  {
                                    price: paymentStripePrice.price.id,
                                    quantity: 1,
                                  },
                                ],
                                automatic_tax: {
                                  enabled: true,
                                },
                                customer_update: {
                                  address: "auto",
                                },
                                success_url: success_url,
                                cancel_url: cancel_url,
                              });

                            if (session.url) {
                              routerPath.push(session.url);

                              return;
                            }

                            return;
                          }

                          const session = await stripe.checkout.sessions.create(
                            {
                              customer: data.stripeCustomerId,
                              mode: "payment",
                              payment_method_types: ["card"],
                              line_items: [
                                {
                                  price: paymentStripePrice.price.id,
                                  quantity: 1,
                                },
                              ],
                              automatic_tax: {
                                enabled: true,
                              },
                              customer_update: {
                                address: "auto",
                              },
                              success_url: success_url,
                              cancel_url: cancel_url,
                            }
                          );

                          if (session.url) {
                            routerPath.push(session.url);

                            return;
                          }
                        }}
                        className="h-[50px] flex cursor-pointer    w-[50%] rounded-full items-center justify-center flex-row"
                        style={{
                          backgroundColor: !typePackage2
                            ? "#ffffff1a"
                            : "transparent",
                        }}
                      >
                        <p className="ml-2 font-semibold ">Carte de crédit</p>
                      </div>
                    </div>

                    <div className="flex flex-1 w-full gap-4 ">
                      <div className="flex flex-col gap-2 min-w-[110px]">
                        <Label>Pays</Label>
                        <Select
                          onValueChange={(item: any) => {
                            setCurentCountry(item);
                            setIndicatif(item.Phone);

                            setModalCountry(false);
                            setCurrentOperateur(null);
                          }}
                        >
                          <SelectTrigger className="w-[110px] bg-transparent h-14 rounded-xl border-white/50 ">
                            {indicatif ? (
                              <p>{indicatif}</p>
                            ) : (
                              <SelectValue placeholder="-" />
                            )}
                          </SelectTrigger>
                          <SelectContent className="bg-[#2A2A2A] ">
                            {contries.map((item: any, index: number) => (
                              <SelectItem className="pl-2" value={item}>
                                {item.Name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex flex-col w-full gap-2 ">
                        <Label>Contact </Label>
                        <Input
                          placeholder="-"
                          value={number}
                          onChange={(e: any) => {
                            currentData.number = e.target.value;
                            setNumber(e.target.value);
                          }}
                          className="bg-transparent rounded-xl border-white/50 h-14"
                        />
                      </div>
                    </div>
                    {/* Pays */}

                    <div className="flex flex-row flex-1 gap-4 mt-8">
                      {countriesIntouch.filter(
                        (x) => x.name == curentCountry?.Name
                      )[0] &&
                        countriesIntouch
                          .filter((x) => x.name == curentCountry?.Name)[0]
                          .methods.map((item: any, index: number) => (
                            <div
                              key={index}
                              style={{
                                borderColor: item[currentOperateur?.name]
                                  ? "#fff"
                                  : "transparent",
                                borderWidth: item[currentOperateur?.name]
                                  ? 1
                                  : 1,
                                opacity: item[currentOperateur?.name] ? 1 : 0.3,
                                borderRadius: 100,
                              }}
                              onClick={() => {
                                setCurrentOperateur(
                                  (x: any) =>
                                    (x = {
                                      country: curentCountry.Name,
                                      name: JSON.stringify(item)
                                        .split(":")[0]
                                        .replace('{"', "")
                                        .replace('"', ""),
                                    })
                                );

                                currentData.country = curentCountry.Name;

                                currentData.operateur = JSON.stringify(item)
                                  .split(":")[0]
                                  .replace('{"', "")
                                  .replace('"', "");

                                currentData.method = "mobile";
                                currentData.creditAI = dataPayment?.creditPack;
                                currentData.month = dataPayment?.month;
                                currentData.pack = dataPayment?.pack;
                                currentData.amount = dataPayment?.amount;
                                if (dataPayment?.type.includes("crédit")) {
                                  currentData.service =
                                    dataPayment?.type.includes("crédit")
                                      ? "PaymentIA"
                                      : null;
                                }
                                //    console.log(currentData);
                                //   console.log(item[currentOperateur.name]);
                                //   console.log(currentOperateur.name);
                              }}
                            >
                              <Image
                                width={75}
                                height={75}
                                alt=""
                                style={{
                                  borderColor: "#ffffff",
                                  borderWidth: 0.5,
                                  borderRadius: 100,
                                }}
                                src={item.image}
                              />
                            </div>
                          ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-end flex-1 w-full gap-4 px-5 pb-4">
                  <div
                    className="flex items-center justify-center w-full mt-5 mb-4 font-semibold rounded-xl h-14"
                    onClick={() => {
                      setDataPaymentModal(false);
                    }}
                    style={{
                      backgroundColor: "#48483D",
                      opacity: dataPayment == null ? 0.3 : 1,
                    }}
                  >
                    Annuler
                  </div>

                  <div
                    className="flex items-center justify-center w-full mt-5 mb-4 font-semibold rounded-xl h-14"
                    onClick={async () => {
                      currentData.number = number;
                      currentData.otp = codeOTP;

                      if (
                        currentOperateur?.name == undefined &&
                        currentData?.number.length < 6
                      ) {
                        return;
                      }

                      if (
                        (currentOperateur?.country == "Côte d'Ivoire" &&
                          currentOperateur?.name == "OrangeMoney") ||
                        (currentOperateur?.country == "Sénégal" &&
                          currentOperateur?.name == "OrangeMoney") ||
                        (currentOperateur?.country == "Burkina Faso" &&
                          currentOperateur?.name == "OrangeMoney") ||
                        (currentOperateur?.country == "Guinée" &&
                          currentOperateur?.name == "OrangeMoney")
                      ) {
                        setCurrentData({
                          ...currentData,
                          otp: "",
                        });

                        setOtpModal(true);
                        //  otpRef?.current?.focus();

                        return;
                      }

                      setPendindButton(true);

                      currentData.country =
                        currentData.country == "Guinée"
                          ? "Guinée Conakry"
                          : currentData.country == "Burkina Faso"
                          ? "Burkina Fasso"
                          : currentData.country;
                      const data = await addNewPaymentIntouch(currentData);

                      console.log(data);

                      if (data?.status == 200) {
                        setPendindMoney(true);

                        if (currentOperateur?.name == "Wave") {
                          setWaveModal(true);
                          setWaveUrl(data?.paymentUrl);
                          // Linking.openURL(data?.paymentUrl)
                          routerPath.push(data?.paymentUrl);
                        }
                      } else {
                        alert("Error de paiement");
                        setPendindButton(false);
                      }
                    }}
                    style={{
                      backgroundColor: "#9A9768",
                      opacity:
                        currentOperateur?.name == undefined ||
                        currentData?.number?.length < 6 ||
                        currentData?.number?.length == undefined ||
                        pendindButton == true
                          ? 0.3
                          : 1,
                    }}
                  >
                    Payer{" "}
                  </div>
                </div>
              </div>
            )}

            <div
              className="flex items-center justify-center mt-5 mb-4 rounded-xl h-14"
              onClick={() => {
                if (dataPayment != null) {
                  setDataPaymentModal(true);
                  //router.push("/inside/(stack)/")
                  /*   router.push(
            {pathname:"/inside/(stack)/payment",
              params:{
                item:JSON.stringify(dataPayment)
              }
            }
          ) */
                }
              }}
              style={{
                backgroundColor: "#9A9768",
                opacity: dataPayment == null ? 0.3 : 1,
              }}
            >
              Confirmer
            </div>
          </div>

          {/* Btn */}
        </div>
      </div>
    </div>
  );

  function ItemElement({
    label,
    price,
    priceIA,
    pack,
    packIA,
    isActive,
    creditPack,
    creditIA,
    style,
    handleClick,
  }: {
    label: string;
    isActive?: boolean;
    price?: string;
    priceIA?: string;
    pack?: string;
    packIA?: string;
    creditPack?: number;
    creditIA?: number;
    style?: any;
    handleClick?: any;
  }) {
    return (
      <div
        onClick={() => {
          handleClick();

          const dataPaymentNew: any = {
            method: "mobile",
            service: "PaymentIA",

            otp: 123,
            country: "",
            operateur: "",
            type: typePackage ? label : creditIA + " crédits",
            month: typePackage ? label.split(" ")[0] : creditIA,
            creditPack: creditPack,
            amount: parseInt(
              typePackage
                ? price?.replace(".", "") + ""
                : priceIA?.replace(".", "") + ""
            ),
            pack: typePackage ? pack : packIA,
            creditAI: packIA,
            currency: "FCFA",
          };
          setDataPayment((x: any) => (x = dataPaymentNew));
        }}
        className={clsx(
          "  flex  bg-[#ffffff05] cursor-pointer  flex-row px-4 py-3 pr-3 items-center   rounded-2xl",
          isActive
            ? "border border-white bg-white/10"
            : "border border-transparent"
        )}
        style={style}
      >
        {isActive ? (
          <Image width={26} height={26} src="/images/radiocheck.png" alt="" />
        ) : (
          <Image width={26} height={26} src="/images/radioempty.png" alt="" />
        )}
        <div
          className="flex flex-col justify-center flex-1 pl-3"
          style={{ gap: 0 }}
        >
          <p className="text-[24px] font-semibold">
            {typePackage ? label : creditIA + " crédits"}
          </p>
          <p className="text-base leading-5">
            {typePackage
              ? userCurrency == "FCFA"
                ? price
                : parseFloat(
                    (
                      parseFloat(`${price?.replace(".", "")}`) / 669.6
                    ).toString()
                  ).toFixed(2)
              : userCurrency == "FCFA"
              ? priceIA
              : parseFloat(
                  (
                    parseFloat(`${priceIA?.replace(".", "")}`) / 669.6
                  ).toString()
                ).toFixed(2)}

            {userCurrency == "FCFA" ? " FCFA" : " EURO"}
          </p>
        </div>

        <div
          //   colors={isActive ? ["#2D2D2D", "#191919"] : ["#FFFFFF00","#FFFFFF00"]}

          className="flex-col items-start justify-center px-3 rounded-xl  flex  h-[55px]"
          style={{
            gap: 0,
            borderColor: isActive ? "#FFFFFF69" : "",
            borderWidth: isActive ? 0.5 : 0,
          }}
        >
          {typePackage && (
            <p className="text-sm font-semibold opacity-50 ">
              {typePackage ? pack : packIA}
            </p>
          )}
          <div className="flex flex-row items-center gap-2">
            <Image width={18} height={18} src="/images/iawhite.png" alt="" />
            <p className="text-base leading-5 ">
              {typePackage ? creditPack + " crédit IA" : packIA}{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }

  function ItemElementPay({
    label,
    price,
    priceIA,
    pack,
    packIA,
    isActive,
    creditPack,
    creditIA,
    style,
    handleClick,
  }: {
    label: string;
    isActive?: boolean;
    price?: string;
    priceIA?: string;
    pack?: string;
    packIA?: string;
    creditPack?: number;
    creditIA?: number;
    style?: any;
    handleClick?: any;
  }) {
    return (
      <div
        onClick={() => {}}
        className={clsx(
          "  flex  bg-[#ffffff05] cursor-pointer  flex-row px-4 py-3 pr-3 items-center   rounded-2xl",
          isActive
            ? "border border-white bg-white/10"
            : "border border-transparent"
        )}
        style={style}
      >
        {isActive ? (
          <Image width={26} height={26} src="/images/radiocheck.png" alt="" />
        ) : (
          <Image width={26} height={26} src="/images/radioempty.png" alt="" />
        )}
        <div
          className="flex flex-col justify-center flex-1 pl-3"
          style={{ gap: 0 }}
        >
          <p className="text-[24px] font-semibold">
            {typePackage ? label : creditIA + " crédits"}
          </p>
          <p className="text-base leading-5">
            {typePackage
              ? userCurrency == "FCFA"
                ? price
                : parseFloat(
                    (
                      parseFloat(`${price?.replace(".", "")}`) / 669.6
                    ).toString()
                  ).toFixed(2)
              : userCurrency == "FCFA"
              ? priceIA
              : parseFloat(
                  (parseFloat(`${priceIA}`) / 669.6).toString()
                ).toFixed(2)}

            {userCurrency == "FCFA" ? " FCFA" : " EURO"}
          </p>
        </div>

        <div
          //   colors={isActive ? ["#2D2D2D", "#191919"] : ["#FFFFFF00","#FFFFFF00"]}

          className="flex-col items-start justify-center px-3 rounded-xl  flex  h-[55px]"
          style={{
            gap: 0,
            borderColor: isActive ? "#FFFFFF69" : "",
            borderWidth: isActive ? 0.2 : 0,
          }}
        >
          {typePackage && (
            <p className="text-sm font-semibold opacity-50 ">
              {typePackage ? pack : packIA}
            </p>
          )}
          <div className="flex flex-row items-center gap-2">
            <Image width={18} height={18} src="/images/iawhite.png" alt="" />
            <p className="text-base leading-5 ">
              {typePackage ? creditPack + " crédit IA" : pack}{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
