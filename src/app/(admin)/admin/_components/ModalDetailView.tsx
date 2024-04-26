import { EyeIcon } from 'lucide-react'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
function ModalDetailView({ name, value }: { name: string; value: string }) {
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
    <DialogContent className=' h-[calc(100%-100px)] min-w-[calc(60%)]'  >
    <div className="  h-[calc(100%-100px)] flex flex-col       transition-all duration-200 ease-in-out  min-w-[calc(60%)]">
           <div className="flex flex-col items-center justify-center w-full h-full ">
             <div className="w-full p-2 text-center border-b border-white/10">
               <p>{name}</p>
             </div>
             <div className="flex flex-col items-center justify-center flex-1 w-full gap-2 ">
             <div className="flex self-end gap-4 p-6">
                <div className="flex-1"></div>
             <Input type='date' name="startAt"  />
             <Input type='date' name="endAt"  />
             <Button>Appliquer</Button>
             </div>
             </div>
             <div className="w-full h-full bg-white/30">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maiores reiciendis adipisci! Nam culpa sint iure reiciendis et a voluptate temporibus expedita placeat aut, alias at dolor hic voluptates animi.</p>
             </div>
           </div>
         </div>
    </DialogContent>
   </Dialog>
  )
}

export default ModalDetailView


 

