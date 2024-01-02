/* import { RiAddCircleFill } from "react-icons/ri";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export function AddInvoiceCategory() {

  async function handleSubmit(e:FormData) {
    'use server';
    // ...
    const name = e.get("name")!.toString();
    const data = await prisma.category.create({
      data: {
        name: name,
      }
    })
     revalidatePath("/admin/invoice")
  }
 
  return (
    <div>
      <form action={handleSubmit}>
      <input type="text" name="name" />
      <button >Submit</button>
    </form>
    </div>
  )
}
 */








 
import { RiAddCircleFill } from "react-icons/ri";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export function AddInvoiceCategory() {

  async function handleSubmit(e:FormData) {
    'use server';
    // ...
    const name = e.get("name")!.toString();
    const data = await prisma.category.create({
      data: {
        name: name,
      }
    })
     revalidatePath("/admin/invoice")
  }
 
  return (
    <div>
    <Dialog>
      <DialogTrigger asChild>
       
       <div className="flex items-center justify-center gap-3 p-2 px-4 rounded-full cursor-pointer hover:brightness-110 bg-zinc-800">
       Categorie
        <RiAddCircleFill className="min-h-[25px] min-w-[25px]" />
      </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        
      <form action={handleSubmit} autoComplete="off">
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start grid-cols-4 gap-4">
            <Label htmlFor="name" className="text-right">
              Nom
            </Label>
            <Input id="name"   name="name" className="" />
          </div>
          
        </div>
      
        <DialogFooter>
        <DialogClose asChild>
            <Button type="button" variant="secondary">
              Fermer
            </Button>
          </DialogClose>

          <DialogClose asChild>
            
          <Button type="submit">Enregistrer</Button>
          </DialogClose>
        </DialogFooter>
    </form>
  
      </DialogContent>
    </Dialog>
    </div>
  )
}


 
