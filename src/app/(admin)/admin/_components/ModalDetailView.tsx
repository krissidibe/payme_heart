"use client";
import { EyeIcon } from "lucide-react";
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

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchTutoClick } from "../queries-actions/tutos.action";
import dayjs from "dayjs";
import { country } from "@/utils/country";

function ModalDetailView({ name, value }: { name: string; value: string }) {
  const [userDatas, setUserDatas] = useState<any[]>([]);
  const [startAt, setStartAt] = useState<string>(`${new Date(Date.now()).getFullYear()}-${(parseInt(new Date(Date.now()).getMonth().toString()) + 1 ).toString().padStart(2,"0")}-${new Date(Date.now()).getDate().toString().padStart(2,"0")}`);
  const [endAt, setEndAt] = useState<string>(`${new Date(Date.now()).getFullYear()}-${(parseInt(new Date(Date.now()).getMonth().toString()) + 1 ).toString().padStart(2,"0")}-${new Date(Date.now()).getDate().toString().padStart(2,"0")}`);
 
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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col w-full gap-2 p-5 cursor-pointer bg-zinc-800 rounded-2xl">
          <div className="flex items-center gap-2 text-2xl">
            <EyeIcon />
            <p>{name}</p>
          </div>
          <p className="pl-8 text-4xl font-bold">{value}</p>
        </div>
      </DialogTrigger>
      <DialogContent className=" h-[calc(100%-100px)] min-w-[calc(80%)]">
        <div className="  h-[calc(100%-100px)] flex flex-col       transition-all duration-200 ease-in-out  min-w-[calc(60%)]">
          <div className="flex flex-col items-center justify-center w-full h-full ">
            <div className="w-full p-2 text-center border-b border-white/10">
              <p>{name}</p>
            </div>
            <form onSubmit={ async (e)=>{

              e.preventDefault()
              const form =  new FormData(e.currentTarget)

              const newData = await fetchTutoClick(form)

              setUserDatas(x=> x = newData)
              console.log(newData);
              

            }} className="flex flex-col items-center justify-center flex-1 w-full gap-2 ">
              <div className="flex self-end gap-4 p-6">
                <div className="flex-1"></div>
                <Input type="date"   onChange={(e)=>{
                          setStartAt(e.target.value)
                        }}  value={startAt} name="startAt" />
                <Input type="date"    onChange={(e)=>{
                          setEndAt(e.target.value)
                        }} value={endAt} name="endAt" />
                <Button>Appliquer</Button>
              </div>
            </form>
            <div className="w-full h-full ">
              <Table>
                
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Date de creation</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Enterprise</TableHead>
                    <TableHead className="text-right">Pays</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userDatas.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">

                        { dayjs(`${invoice?.user?.createdAt}`)
                                      .format("DD/MM/YYYY")
                                      .replace("T", " ")}
                      </TableCell>

                      <TableCell className="text-left">
                        {invoice?.user.email}
                      </TableCell>
                      <TableCell className="text-left">
                        {invoice?.user.enterprise.name}
                      </TableCell>
                      <TableCell className="text-right">
                     

                        {getCurrency(invoice.user.enterprise?.currency)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                
              </Table>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ModalDetailView;
