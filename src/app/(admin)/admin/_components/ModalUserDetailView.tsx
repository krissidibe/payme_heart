"use client";
import { EyeIcon, RefreshCwIcon } from "lucide-react";
import dayjs from "dayjs";

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
            <DialogContent className=" h-[calc(100%-100px)] min-w-[calc(90%)]">
              <div className="  h-[calc(100%-30px)] flex flex-col       transition-all duration-200 ease-in-out  min-w-[calc(60%)]">
                <div className="flex flex-col items-center justify-center w-full h-full overflow-scroll">
                  <div className="w-full p-2 text-center border-b border-white/10">
                    <p>{name}</p>
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
                    <div className="flex self-end w-full gap-4 p-6">
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
                        <Input
                          type="text"
                          name="currency"
                          placeholder="indicatif"
                        />
                      </div>
                      <div className="flex-1"></div>
                      <div className="flex gap-4">
                        <Input type="date" name="startAt" />
                        <Input type="date" name="endAt" />
                        <Button>Appliquer</Button>
                      </div>
                    </div>
                  </form>
                  <div className="w-full h-full overflow-scroll">
                    <div className="flex items-center gap-10 px-6">
                      <p>Résultat trouvé : {dataUser != null ? dataUser?.length ?? 0 : dataPayment?.length ?? 0} </p>

                      { dataPayment != null && <p> Total : {calculeTotal(dataPayment)}</p> }
                     
                    </div>
                    {dataUser?.map((user: any) => (
                      <div className="flex w-full p-6 border-b shadow-sm">
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
                      </div>
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
