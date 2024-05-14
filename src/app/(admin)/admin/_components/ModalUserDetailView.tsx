"use client";
import { EyeIcon, RefreshCwIcon } from "lucide-react";
import dayjs from "dayjs";
import { mkConfig, generateCsv, download } from "export-to-csv";
import React, { useState } from "react";
import {
  Dialog,
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
import { fetchUser } from "../queries-actions/user.action";
 
import { countryFr } from "@/utils/countryFr";
import { useRouter } from "next/navigation";
import { country } from "@/utils/countrySignIn";
import clsx from "clsx";

function ModalUserDetailView({ name, value }: { name: string; value: string }) {
  const router = useRouter()
  const [dataUser, setDataUser] = useState<any>([]);
  const [dataPayment, setDataPayment] = useState<any>([]);

  function getCurrency(currency: string): React.ReactNode {
    const datasFilter = countryFr.filter((item) => item.Phone.toString().toLowerCase().includes(currency.toString().replaceAll('"','')))
    console.log(currency.toString().replaceAll('"',''));
  
    return datasFilter[0].Name
    
  }

  function calculeTotal(data: any): number {
    if (dataUser != null) {
      return 0;
    }
    let total = 0;
    data.map((item: any) => {
      total = total + item.amount;
    });
    return total;
  }
  
  const csvConfig = mkConfig({ useKeysAsHeaders: true });
  return (
    <div className="flex flex-col w-full gap-4 p-10 mt-10 bg-zinc-900/80 rounded-2xl">
      <div className="relative flex flex-col items-start justify-between w-full text-2xl le">
        <p> Comptes inscrits</p>
        <p className="font-bold text-[100px] mt-12 pb-10">
          {" "}
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer">{value}</div>
            </DialogTrigger>
            <DialogContent className=" h-[calc(100%-100px)] min-w-[calc(90%)] overflow-hidden">
              <div className="  h-[calc(100%-30px)] flex flex-col       transition-all duration-200 ease-in-out  min-w-[calc(60%)] overflow-scroll">
                <div className="flex flex-col items-center justify-center w-full h-full overflow-scroll">
                  <div className="w-full p-2 text-center border-b border-white/10">
                  <p>Résultat trouvé : {dataUser != null ? dataUser?.length ?? 0 : dataPayment?.length ?? 0} </p>
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
                      return
                    }
                    setDataUser(null);
                    setDataPayment(dataNew);
                    }}
                    className="flex flex-col items-center justify-center flex-1 w-full gap-2 "
                  >
                    <div className="flex flex-col self-end w-full gap-4 p-6 md:flex-row">
                      <div className="flex gap-4">
                        <Select name="type">
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
                                <SelectItem value={item.Phone.toString()}>{item.Name}</SelectItem>
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
                  <div className=" md:flex-1"></div>
                      <div className="flex gap-4">
                        <Input className=" w-[150px]"  type="date" name="startAt" />
                        <Input className=" w-[150px]"  type="date" name="endAt" />
                       <div className="hidden gap-4 md:flex">
                       <Button variant={"secondary"}>Appliquer</Button>
                      {(dataUser != null  && dataUser?.length != 0) &&  <div className="items-center cursor-pointer justify-center bg-white text-black text-sm font-semibold flex rounded-md w-[100px]" onClick={()=>{
                         
                        const arrayCsv = dataUser.map((user:any) => {
                          return {
                            "Nom et prénom": user.name + " - " +  dayjs(`${user.createdAt}`).format("DD/MM/YYYYTHH:mm").replace("T"," "),
                            "Pays": getCurrency(user.enterprise.currency),
                            "Structure": user.enterprise.name,
                            "Secteur": user.enterprise.activity,
                            "Adresse e-mail": user.email,
                            "Contact": `${
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
                            }`,
                          };
                        });
                    
                        const csv = generateCsv(csvConfig)(arrayCsv);
                        download(csvConfig)(csv)
                        }} >Exporter</div>}
                       </div>
                      </div>
                      <div className="flex gap-4 md:hidden">
                       <Button  className="flex-1" variant={"secondary"}>Appliquer</Button>
                      


{(dataUser != null  && dataUser?.length != 0) &&  <div className="items-center justify-center cursor-pointer bg-white text-black text-sm font-semibold flex flex-1 rounded-md w-[100px]" onClick={()=>{
                         
                         const arrayCsv = dataUser.map((user:any) => {
                           return {
                             "Nom et prénom": user.name + " - " +  dayjs(`${user.createdAt}`).format("DD/MM/YYYYTHH:mm").replace("T"," "),
                             "Pays": getCurrency(user.enterprise.currency),
                             "Structure": user.enterprise.name,
                             "Secteur": user.enterprise.activity,
                             "Adresse e-mail": user.email,
                             "Contact": `${
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
                             }`,
                           };
                         });
                     
                         const csv = generateCsv(csvConfig)(arrayCsv);
                         download(csvConfig)(csv)
                         }} >Exporter</div>}
                       </div>
                    </div>
                  </form>
                  <div className="w-full h-full overflow-scroll ">
                    <div className="flex flex-col w-full gap-2 px-6 pb-4">
                    

                      { dataPayment != null && <p> Total : {calculeTotal(dataPayment)}</p> }
                     {/* ItemRow */}

                     { dataUser != null &&    <div className="justify-between hidden w-full gap-4 mt-5 text-sm md:flex">
                      <p className="flex-1 min-w-[220px]" >Nom et prénom</p>
                      <p className="flex-1 min-w-[220px]" >Pays</p>
                      <p className="flex-1 min-w-[220px]" >Structure</p>
                      <p className="flex-1 min-w-[220px]" >Secteur</p>
                      <p className="flex-1 min-w-[220px]" >Adresse e-mail</p>
                      <p className="flex-1 min-w-[220px]" >Contact</p>
                     </div> }
                   
                    </div>
               <div className="flex-1 h-full overflow-scroll ">
               {dataUser?.map((user: any,index:number) => (
 <div className={clsx("flex flex-col justify-between w-full text-sm gap-4 p-6 border-b shadow-sm md:flex-row",index %2 != 0 ? "bg-[#131313]" : "bg-[#1e1e1ea2]")}>
 <div className="flex flex-col flex-1 min-w-[220px]">
                          <p>{user.name}  </p>
                          
                          <span className="opacity-50">{ dayjs(`${user.createdAt}`).format("DD/MM/YYYYTHH:mm").replace("T"," ")}</span>
                          
                        </div>
 <p className="flex-1 min-w-[220px]" >{getCurrency(user.enterprise.currency) } </p>
 <p className="flex-1 min-w-[220px]" >{user.enterprise.name}</p>
 <p className="flex-1 min-w-[220px]" >{user.enterprise.activity}</p>
 <p className="flex-1 min-w-[220px]" >{user.email}</p>
 <p className="flex-1 min-w-[220px]" >{`${
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
                          <p>{payment.user?.name}  </p>
                          <p>{payment.user?.email}</p>
                           <p>{getCurrency(payment.user?.enterprise.currency) } <span className="opacity-50">- { dayjs(`${payment.user?.createdAt}`).format("DD/MM/YYYYTHH:mm").replace("T"," ")}</span></p> 
                        </div>

                          <div className="flex flex-col w-1/3">
                          <p>{payment.user?.enterprise.name}</p>

                          <p>Numeros :  {`${
                            JSON.parse(payment.user?.enterprise?.numbers)[0].indicatif
                          } ${
                            JSON.parse(payment.user?.enterprise?.numbers)[0].number
                          } ${
                            JSON.parse(payment.user?.enterprise?.numbers)[1]?.indicatif
                              .length > 0
                              ? `/ + ${
                                  JSON.parse(payment.user?.enterprise?.numbers)[1]
                                    ?.indicatif
                                } ${
                                  JSON.parse(payment.user?.enterprise?.numbers)[1]
                                    ?.number
                                }`
                              : ""
                          }`}</p>
                           <p>Secteur : {payment.user?.enterprise.activity}</p>
                        </div> 
                          <div className="flex flex-col w-[300px]   ">
                           <p>{payment.reference}</p>
                          <p>{payment.type}  <span className="opacity-50">- { dayjs(`${payment?.createdAt}`).format("DD/MM/YYYYTHH:mm").replace("T"," ")}</span></p>

                           
                           <p>{payment.amount} - Fcfa</p>
                        </div> 
                      
                      </div>
                    ))} 
               </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </p>

       <form
            

            className="absolute right-0 z-50"
          >
            <button onClick={()=>{
              router.refresh()
            }} className='z-50'>
              <RefreshCwIcon className="cursor-pointer" />
            </button>
          </form>   
      </div>
    </div>
  );
}

export default ModalUserDetailView;
