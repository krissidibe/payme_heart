import { RiAddCircleFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { Checkbox } from "@/UI/components/ui/checkbox";

export async function AddInvoiceInvoice() {
  const datas = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  async function handleSubmit(e: FormData) {
    "use server";
    // ...
 
    const name = e.get("name")!.toString();
    const categoryId = e.get("categoryId")!.toString();
    const fileName = e.get("name")!.toString().toLowerCase().replace(" ", "");

    const data = await prisma.invoiceList.create({
      data: {
        name: name,
        categoryId: categoryId,
        invoiceFileName: fileName,
        primaryColor : e.get("primaryColor")?.toString() == "on" ? true : false,
        secondaryColor : e.get("secondaryColor")?.toString() == "on" ? true : false,
        
      },
    });

    revalidatePath("/admin/invoice");
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex items-center justify-center gap-3 p-2 px-5 rounded-full cursor-pointer hover:brightness-110 bg-zinc-800">
            Facture
            <RiAddCircleFill className="min-h-[25px] min-w-[25px]" />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] ">
          <form action={handleSubmit} autoComplete="off">
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start grid-cols-4 gap-2">
                <Label htmlFor="name" className="text-right">
                  Nom de la facture
                </Label>
                <Input id="name" name="name" className="" />
              </div>
              <div className="flex flex-col items-start grid-cols-4 gap-2">
                <Label htmlFor="name" className="text-right">
                  Categorie
                </Label>
                <Select name="categoryId">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="------" />
                  </SelectTrigger>
                  <SelectContent>
                    <div>
                      {datas.map((data) => (
                        <SelectItem value={data.id}>{data.name}</SelectItem>
                      ))}
                    </div>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center mt-2 space-x-2">
                <Checkbox id="primaire" name="primaryColor" />
                <label
                  htmlFor="primaire"
                  className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Couleur Primaire
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="secondaire" name="secondaryColor" />
                <label
                  htmlFor="secondaire"
                  className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Couleur Secondaire
                </label>
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
  );
}
