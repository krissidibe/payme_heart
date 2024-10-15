"use client";

import { toast } from "sonner"
import { AlertCircleIcon, EyeIcon, RefreshCwIcon, XCircle, XIcon } from "lucide-react";
import dayjs from "dayjs";
import { mkConfig, generateCsv, download } from "export-to-csv";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchUser, updateCreditIA, updateSubscribe, updateSubscribeEnd } from "../queries-actions/user.action";
import { ExportAsExcel, ExportAsPdf, ExportAsCsv, CopyToClipboard, CopyTextToClipboard, PrintDocument, ExcelToJsonConverter, FileUpload } from "react-export-table";

import { country } from "@/utils/countryFr";
import { useRouter } from "next/navigation";

import clsx from "clsx";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

 
const ExportAsExcelBtn = ({data}:{data:any}) => {

 
  return (
    <ExportAsExcel
    data={data}
    headers={["Date d'inscription","Nom et prénom", "Pays","Structure", "Secteur","Adresse e-mail","Contact","Abonnée","Projets"]}
>
    {(props)=> (
      <button className="items-center cursor-pointer justify-center bg-white text-black text-sm font-semibold flex rounded-md w-[100px]" {...props}>
        Exporter
      </button>
    )}
</ExportAsExcel>
  );
}

 

function ModalUserDetailView({ name, value,valueDownload }: { name: string; value: string,valueDownload:string }) {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<any>([]);
  const [dataPayment, setDataPayment] = useState<any>([]);
  const [dataPaymentParent, setDataPaymentParent] = useState<any>([]);
  
  const [startAt, setStartAt] = useState<string>(`${new Date(Date.now()).getFullYear()}-${(parseInt(new Date(Date.now()).getMonth().toString()) + 1 ).toString().padStart(2,"0")}-${new Date(Date.now()).getDate().toString().padStart(2,"0")}`);
  const [endAt, setEndAt] = useState<string>(`${new Date(Date.now()).getFullYear()}-${(parseInt(new Date(Date.now()).getMonth().toString()) + 1 ).toString().padStart(2,"0")}-${new Date(Date.now()).getDate().toString().padStart(2,"0")}`);
  const [searchValue, setSearchValue] = useState<string>("");

  function getCurrency(currency: string): React.ReactNode {

    if(currency == undefined){
      return "";
    }
    const datasFilter = country.filter((item) =>
      item.Phone?.toString()
        .toLowerCase() == currency.toString().replaceAll('"', "")
    );
   

    return datasFilter[0].Name ?? "";
  }

  function calculeTotal(data: any): number {
    if (dataUser != null) {
      return 0;
    }
    let total = 0;
    data.map((item: any) => {
      const stripeValue =  item.type == "Stripe" ? 669.60 : 1 
      let dataItem = item.amount * stripeValue ;
      total = total + dataItem ;
    });
    return total;
  }

  const csvConfig = mkConfig({ useKeysAsHeaders: true });
  return (
    <div className="relative flex flex-col w-full gap-4 p-10 mt-10 bg-zinc-900/80 rounded-2xl">
      <div className="relative flex flex-col items-start justify-between w-full text-2xl le">
        <p> Comptes inscrits</p>
        <div className="font-bold text-[100px] mt-12 pb-10">
          {" "}
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer">{value}</div>
            </DialogTrigger>
            <DialogContent className=" h-[calc(100%-100px)] min-w-[calc(90%)] overflow-hidden">
              <div className="  h-[calc(100%-30px)] flex flex-col       transition-all duration-200 ease-in-out  min-w-[calc(60%)] overflow-scroll no-scrollbar">
                <div className="flex flex-col items-center justify-center w-full h-full overflow-scroll no-scrollbar">
                  <div className="w-full p-2 text-center border-b border-white/10">
                    <p>
                      Résultat trouvé :{" "}
                      {dataUser != null
                        ? dataUser?.length ?? 0
                        : dataPayment?.length ?? 0}{" "}
                    </p>
                  </div>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();

                      const form = e.currentTarget;
                      const formData = new FormData(form);
                      const dataNew = await fetchUser(formData);
                      if (formData.get("type") == "user") {
                        setDataUser(dataNew);
                        setDataPayment(null);
                        return;
                      }
                      setDataUser(null);
                      setDataPayment(dataNew);
                      setDataPaymentParent(dataNew);
                    }}
                    className="flex flex-col items-center justify-center flex-1 w-full gap-2 "
                  >
                    <div className="flex flex-col self-end w-full gap-4 p-6 md:flex-row">
                      <div className="flex gap-4">
                        <Select defaultValue="user" name="type">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a fruit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Type</SelectLabel>
                              <SelectItem value="user">Utilisateur</SelectItem>
                              <SelectItem value="subscribe">
                                Abonnées
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <Select name="currency">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Pays" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Type</SelectLabel>
                              <SelectItem value={" "}>Tous</SelectItem>
                              {country.map((item) => (
                                <SelectItem value={item.Phone.toString()}>
                                  {item?.Name ?? ""}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        {/* <Input
                          type="text"
                          name="currency"
                          placeholder="indicatif"
                        /> */}
                      </div>
                      <div className="flex gap-4 md:flex-1">
                     <div className="flex items-center gap-2">
                     <Input
                          className="w-full max-w-[200px] "
                          type="text"
                          name="searchValue"
                          placeholder="Rechercher"
                          value={searchValue}
                        onChange={(e)=>{
                          setSearchValue(e.target.value)
                        }}
                        />
                        {
                          searchValue.length > 0 &&
                        <XIcon className="opacity-50 cursor-pointer" onClick={()=>{
                          setSearchValue("")
                        }} />
                        }
                     </div>

                    
                      </div>
                     
                      <div className="flex gap-4">
                        <Input
                          className=" w-[150px]"
                          type="date"
                          name="startAt"
                          value={startAt}
                        onChange={(e)=>{
                          setStartAt(e.target.value)
                        }}
                        />
                        <Input
                          className=" w-[150px]"
                          type="date"
                          name="endAt"
                          value={endAt}
                          onChange={(e)=>{
                            setEndAt(e.target.value)
                          }}
                        />
                        <div className="hidden gap-4 md:flex">
                          <Button variant={"secondary"}>Appliquer</Button>
                         
                          {dataUser != null && dataUser?.length != 0 && (

                            
                          
                              <ExportAsExcelBtn data={dataUser.map((user: any) => {

                                if (user?.enterprise == undefined || user?.enterprise.id == undefined) {
                                  
                                  return {
                                    "Date d'inscription":
                                     
                                     "",
                                    "Nom et prénom":
                                      user?.name ,
                                    Pays: "",
                                    Structure: "",
                                    Secteur: "",
                                    "Adresse e-mail": user?.email,
                                    Contact: "",
                                    Abonnée:  user.subscribe?.payment?.month != 0 ? `${user.subscribe?.payment?.month} mois` : "Non abonnée",
                                    projet:  ""
                                  };
                                }
                                return {
                                  "Date d'inscription":
                                   
                                    dayjs(`${user.createdAt}`)
                                      .format("DD/MM/YYYY")
                                      .replace("T", " "),
                                  "Nom et prénom":
                                    user?.name ,
                                  Pays: getCurrency(user.enterprise?.currency),
                                  Structure: user.enterprise?.name,
                                  Secteur: user.enterprise?.activity,
                                  "Adresse e-mail": user?.email,
                                  Contact: `${
                                    JSON.parse(user.enterprise?.numbers)[0]
                                      ?.indicatif ?? ""
                                  } ${
                                    JSON.parse(user.enterprise?.numbers)[0]
                                      ?.number  ?? ""
                                  } ${
                                    JSON.parse(user.enterprise?.numbers)[1]
                                      ?.indicatif.length > 0
                                      ? `/ + ${
                                          JSON.parse(
                                            user.enterprise?.numbers
                                          )[1]?.indicatif
                                        } ${
                                          JSON.parse(
                                            user.enterprise?.numbers
                                          )[1]?.number
                                        }`
                                      : ""
                                  }`,
                                  Abonnée:  user.subscribe?.payment?.month != 0 ? `${user.subscribe?.payment?.month} mois` : "Non abonnée",
                                  projet:user.enterprise?.factureNumber ?? ""
                                };
                              })} />
                          
                          )}
                        </div>
                      </div>
                      <div className="flex gap-4 md:hidden">
                        <Button className="flex-1" variant={"secondary"}>
                          Appliquer
                        </Button>

                        {dataUser != null && dataUser?.length != 0 && (
                          <div
                            className="items-center justify-center cursor-pointer bg-white text-black text-sm font-semibold flex flex-1 rounded-md w-[100px]"
                            onClick={() => {
                              const arrayCsv = dataUser.map((user: any) => {
                                return {
                                  "Nom et prénom":
                                    user?.name +
                                    " - " +
                                    dayjs(`${user.createdAt}`)
                                      .format("DD/MM/YYYYTHH:mm")
                                      .replace("T", " "),
                                  Pays: getCurrency(user.enterprise?.currency),
                                  Structure: user.enterprise?.name,
                                  Secteur: user.enterprise?.activity,
                                  "Adresse e-mail": user.email,
                                  Contact: `${
                                    JSON.parse(user.enterprise?.numbers)[0]
                                      .indicatif
                                  } ${
                                    JSON.parse(user.enterprise?.numbers)[0]
                                      .number
                                  } ${
                                    JSON.parse(user.enterprise?.numbers)[1]
                                      ?.indicatif.length > 0
                                      ? `/ + ${
                                          JSON.parse(
                                            user.enterprise?.numbers
                                          )[1]?.indicatif
                                        } ${
                                          JSON.parse(
                                            user.enterprise?.numbers
                                          )[1]?.number
                                        }`
                                      : ""
                                  }`,
                                };
                              });

                              const csv = generateCsv(csvConfig)(arrayCsv);
                              download(csvConfig)(csv);
                            }}
                          >
                            Exporter
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                  <div className="w-full h-full overflow-scroll no-scrollbar ">
                    <div className="flex flex-col w-full gap-2 px-6 pb-4">
                     <div className="flex items-center gap-4 mt-2">
                     {dataPayment != null && (
                        <p> Total : {parseFloat(calculeTotal(dataPayment).toString()).toFixed(2)}</p>
                      )}
                      {(dataPayment != null  )    && (
                          <Select defaultValue="all" name="mode" onValueChange={(e)=>{
                             
                            if (e == "all") {
                              
                              setDataPayment(dataPaymentParent)
                              return
                            }

                            if (e == "intouch") {
                        
                           
                              
                              setDataPayment((x:any)=> x =  dataPaymentParent.filter( (x:any )=> x.type != "Stripe" ))
                              return
                            }

                            if (e == "stripe") {
                              setDataPayment((x:any)=> x =  dataPaymentParent.filter( (x:any )=> x.type == "Stripe" ))
                              return
                            } 
                          }}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Type de paiement" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Type de paiement</SelectLabel>
                              <SelectItem   value="all">Tous</SelectItem>
                              <SelectItem   value="intouch">Intouch</SelectItem>
                              <SelectItem   value="stripe">
                                Stripe
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                     </div>
                      {/* ItemRow */}

                      {dataUser != null && (
                        <div className="justify-between hidden w-full gap-4 mt-5 text-sm md:flex">
                          <p className="flex-1 min-w-[220px]">Nom et prénom</p>
                          <p className="flex-1 min-w-[220px]">Pays</p>
                          <p className="flex-1 min-w-[220px]">Structure</p>
                          <p className="flex-1 min-w-[220px]">Secteur</p>
                          <p className="flex-1 min-w-[220px]">Adresse e-mail</p>
                          <p className="flex-1 min-w-[220px]">Contact</p>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 h-full overflow-scroll no-scrollbar ">
                      {dataUser?.map((user: any, index: number) => (
                        <div
                          className={clsx(
                            "flex flex-col justify-between w-full group cursor-pointer hover:brightness-105 relative  text-sm gap-1 md:gap-4 p-6 py-4 border-b shadow-sm md:flex-row",
                            index % 2 != 0 ? "bg-[#131313]" : "bg-[#1e1e1ea2]", 
                            user.subscribe?.payment?.month == 3 ? "bg-green-300/30" : "",
                            user.subscribe?.payment?.month == 6 ? "bg-amber-300/30" : "",
                            user.subscribe?.payment?.month == 12 ? "bg-blue-300/30" : "",
                          )}
                        >
{/* user.subscribe?.payment?.month == 0 */}
{  true && 

 <Dialog >
  <DialogTrigger className="absolute z-50 hidden cursor-pointer right-3 top-5 group-hover:block">
  <IoMdInformationCircleOutline
             
             className="w-6 h-6 "
           />
  </DialogTrigger>

  <DialogContent className="sm:max-w-[425px]">
  <form 
  
  onSubmit={ async (e)=>{
    e.preventDefault()
    const dataNew = await updateSubscribe(user.subscribe.id);

    if (dataNew.id != null) {

      
      toast("Modification efectuer avec succes ", {
        description: user.email,
        
      })
    }
  }}
  
  >
  <p className="flex-1 flex flex-col min-w-[220px] text-sm">
                           <span className="mt-1" > {user?.name}</span>
                           <span className="mt-1" > {user?.email}</span>
                           <span className="mt-1" >   {getCurrency(user.enterprise?.currency)}{" "}</span>
                           
                           <Separator className="my-4"/>
                           <span> {user.enterprise?.name}</span>
                           <span> Fin d'abonnement :  {dayjs(`${user.subscribe?.endAt}`)
                                .format("DD/MM/YYYY")
                                .replace("T", " ")} </span>
                           

                          </p>

                        <div className="flex justify-end w-full mt-2"> 
                          
                          <DialogClose>

                            <Button className="self-end"  variant={"secondary"}>Ajouter 25 jours</Button>
                          </DialogClose>
                             </div>
  </form>
  </DialogContent>
 </Dialog>
 }






{  true && 

<Dialog >
 <DialogTrigger className="absolute z-50 hidden cursor-pointer right-12 top-5 group-hover:block">
 <AlertCircleIcon
            
            className="w-6 h-6 text-red-500 "
          />
 </DialogTrigger>

 <DialogContent className="sm:max-w-[425px]">
 <form 
 
 onSubmit={ async (e)=>{
   e.preventDefault()
   const dataNew = await updateSubscribeEnd(user.subscribe.id);

   if (dataNew.id != null) {

     
     toast("Modification efectuer avec succes ", {
       description: user.email,
       
     })
   }
 }}
 
 >
 <p className="flex-1 flex flex-col min-w-[220px] text-sm">
                          <span className="mt-1" > {user?.name}</span>
                          <span className="mt-1" > {user?.email}</span>
                          <span className="mt-1" >   {getCurrency(user.enterprise?.currency)}{" "}</span>
                          
                          <Separator className="my-4"/>
                          <span> {user.enterprise?.name}</span>
                          <span> Fin d'abonnement :  {dayjs(`${user.subscribe?.endAt}`)
                               .format("DD/MM/YYYY")
                               .replace("T", " ")} </span>
                          

                         </p>

                       <div className="flex justify-end w-full mt-2"> 
                         
                         <DialogClose>

                           <Button className="self-end"  variant={"destructive"}>Bloquer l'utilisateur</Button>
                         </DialogClose>
                            </div>
 </form>
 </DialogContent>
</Dialog>
}




{/* IA */}
{ true && 

<Dialog >
 <DialogTrigger className="absolute z-50 hidden cursor-pointer -left-0 top-5 group-hover:block">
 <IoMdInformationCircleOutline
            
            className="w-5 h-5 "
          />
 </DialogTrigger>

 <DialogContent className="sm:max-w-[425px]">
 <form 
 
 onSubmit={ async (e)=>{
   e.preventDefault()
   const dataNew = await updateCreditIA(user.id);

   if (dataNew.id != null) {

     
     toast("Modification efectuer avec succes ", {
       description: user.email,
       
     })
   }
 }}
 
 >
 <p className="flex-1 flex flex-col min-w-[220px] text-sm">
                          <span className="mt-1" > {user?.name}</span>
                          <span className="mt-1" > {user?.email}</span>
                          <span className="mt-1" >   {getCurrency(user.enterprise?.currency)}{" "}</span>
                          
                         

                         </p>

                       <div className="flex justify-end w-full mt-2"> 
                         
                         <DialogClose>

                           <Button className="self-end"  variant="default">Ajouter 10 Crédit IA</Button>
                         </DialogClose>
                            </div>
 </form>
 </DialogContent>
</Dialog>
}








                          <div className="flex flex-col flex-1 min-w-[220px]">
                            <p>{user?.name} </p>

                            <span className="opacity-50">
                              {dayjs(`${user.createdAt}`)
                                .format("DD/MM/YYYYTHH:mm")
                                .replace("T", " ")}
                            </span>
                          </div>
                          <p className="flex-1 min-w-[220px]">
                            {getCurrency(user.enterprise?.currency)}{" "}

                            
                          </p>
                          <p className="flex-1 flex flex-col min-w-[220px]">
                           <span> {user.enterprise?.name}</span>
                           <span> {user.enterprise?.factureNumber}</span>
                          </p>
                          <p className="flex-1 md:flex hidden min-w-[220px]">
                            {user.enterprise?.activity}
                           
                          </p>
                          <p className="flex-1 md:flex   min-w-[220px]">
                            {user.email}
                          </p>
                       {  user.enterprise?.numbers &&  <p className="flex-1 md:flex hidden min-w-[220px]">{`${
                            JSON.parse(user.enterprise?.numbers)[0].indicatif
                          } ${JSON.parse(user.enterprise?.numbers)[0].number} ${
                            JSON.parse(user.enterprise?.numbers)[1]?.indicatif
                              .length > 0
                              ? `/ + ${
                                  JSON.parse(user.enterprise?.numbers)[1]
                                    ?.indicatif
                                } ${
                                  JSON.parse(user.enterprise?.numbers)[1]
                                    ?.number
                                }`
                              : ""
                          }`}</p>}
                        </div>

                        /*  <div className="flex w-full p-6 border-b shadow-sm">
                        <div className="flex flex-col flex-1">
                          <p>{user.name}  </p>
                          <p>{user.email}</p>
                          <p>{getCurrency(user.enterprise.currency) } <span className="opacity-50">- { dayjs(`${user.createdAt}`).format("DD/MM/YYYYTHH:mm").replace("T"," ")}</span></p>
                        </div>
                        <div className="flex flex-col w-1/3">
                          <p>{user.enterprise.name}</p>

                          <p>Numeros :  {`${
                            JSON.parse(user.enterprise?.numbers)[0].indicatif
                          } ${
                            JSON.parse(user.enterprise?.numbers)[0].number
                          } ${
                            JSON.parse(user.enterprise?.numbers)[1]?.indicatif
                              .length > 0
                              ? `/ + ${
                                  JSON.parse(user.enterprise?.numbers)[1]
                                    ?.indicatif
                                } ${
                                  JSON.parse(user.enterprise?.numbers)[1]
                                    ?.number
                                }`
                              : ""
                          }`}</p>
                           <p>Secteur : {user.enterprise.activity}</p>
                        </div>
                      </div> */
                      ))}

                      {dataPayment?.map((payment: any) => (
                        <div className="flex w-full p-6 border-b shadow-sm">
                          <div className="flex flex-col flex-1">
                            <p>{payment.user?.name} </p>
                            <p>{payment.user?.email}</p>
                            <p>
                              {getCurrency(payment.user?.enterprise?.currency)}{" "}
                              <span className="opacity-50">
                                -{" "}
                                {dayjs(`${payment.user?.createdAt}`)
                                  .format("DD/MM/YYYYTHH:mm")
                                  .replace("T", " ")}
                              </span>
                            </p>
                          </div>

                          <div className="flex flex-col w-1/3">
                            <p>{payment.user?.enterprise.name}</p>

                            { payment.user?.enterprise?.numbers &&   <p>
                              Numeros :{" "}
                              {`${
                                JSON.parse(payment.user?.enterprise?.numbers)[0]
                                  .indicatif
                              } ${
                                JSON.parse(payment.user?.enterprise?.numbers)[0]
                                  .number
                              } ${
                                JSON.parse(payment.user?.enterprise?.numbers)[1]
                                  ?.indicatif.length > 0
                                  ? `/ + ${
                                      JSON.parse(
                                        payment.user?.enterprise?.numbers
                                      )[1]?.indicatif
                                    } ${
                                      JSON.parse(
                                        payment.user?.enterprise?.numbers
                                      )[1]?.number
                                    }`
                                  : ""
                              }`}
                            </p>}
                            <p>Secteur : {payment.user?.enterprise?.activity}</p>
                          </div>
                          <div className="flex flex-col w-[300px]   ">
                            <p>{payment.reference}</p>
                            <p>
                              {payment.type}{" "}
                              <span className="opacity-50">
                                -{" "}
                                {dayjs(`${payment?.createdAt}`)
                                  .format("DD/MM/YYYYTHH:mm")
                                  .replace("T", " ")}
                              </span>
                            </p>

                            <p>{payment.amount} -  {payment.type == "Stripe" ? "EURO" : "Fcfa" } </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>


        <div className="absolute left-[400px] flex flex-col w-[400px] h-[160px] -bottom-2 gap-2 p-5 cursor-pointer bg-zinc-800 rounded-2xl">
    <div className="flex items-center gap-2 text-2xl">
      <EyeIcon />
      <p>Téléchargement</p>
    </div>
    <p className="pl-8 font-bold text-7xl">{valueDownload}</p>
  </div> 
        <form className="absolute right-0 z-50">
          <button
            onClick={() => {
              router.refresh();
            }}
            className="z-50"
          >
            <RefreshCwIcon className="cursor-pointer" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalUserDetailView;
