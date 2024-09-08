import Image from "next/image"
import Link from "next/link"
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import SectionDialog from "./SectionDialog"
import { prisma } from "@/utils/prisma";
import NextVideo from "next-video"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { revalidatePath } from "next/cache"

 
export default async function Tutos() {
    const datas = await prisma.tutos.findMany({
      orderBy:{
        index:"asc"
     },
    })
  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/0">
    
      <div className="flex flex-col pt-10 sm:gap-4 ">
        
        <main className="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 no-scrollbar ">
          <Tabs defaultValue="all">
            <div className="flex items-center">
           
              <div className="flex items-center gap-2 ml-auto">
                
                 
              <SectionDialog/>
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Tutos</CardTitle>
                  <CardDescription>
                    Mes Tutoriels par section
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table className="overflow-y-scroll no-scrollbar">
                    <TableHeader>
                      <TableRow>

                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Section</TableHead>
                        <TableHead className="max-w-[200px]" >Titre</TableHead>
                      
                       
                        <TableHead className="hidden md:table-cell">
                         Description
                        </TableHead>
                        
                        <TableHead >Publier</TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="">
                   {datas.map((item,index)=>(
                    <TableRow>
                      
                    <TableCell className="hidden sm:table-cell">
                <div className="relative flex">
                    <p className="absolute z-50 -left-[12px] top-3 text-xs">  {item.index}</p>
                <NextVideo  className="cursor-pointer"   src={`${process.env.BASE_URL}/public/${item.videoLink}`} controls={false}   />
                    
                </div>
                    </TableCell>
                    <TableCell className="font-medium text-xs   max-w-[200px]">
                    {item.section}
                    </TableCell>
                    <TableCell className="font-medium text-xs  max-w-[200px]">
                    {item.title}
                    </TableCell>
                    <TableCell className="hidden md:table-cell  text-xs  max-w-[200px]">

{item.description}
       {/*   <form  action={ async()=>{
          "use server"
           const newData = await prisma.tutos.update({
            where:{
              id:item.id
            },
            data:{
              primarySection : !item.primarySection
            }
          })

          if (newData.id) {
            revalidatePath("/admin/tutos")
          }
          
         }}>

     <button >               <Badge className="cursor-pointer" variant={`${item.primarySection == true ? "default" : "outline" }`}>  {item.primarySection == true ? "Primaire" : "---"}</Badge>
     </button>
       </form> */}
                    </TableCell>
                    <TableCell>
                      <Badge variant={`${item.public == true ? "default" : "destructive" }`}>  {item.public == true ? "Publier" : "Non Publier"}</Badge>
                    </TableCell>
                    
                   
                  
                    <TableCell>
                     <Dialog>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <SectionDialog item={item} />
                          <DropdownMenuItem>
                          <DialogTrigger name="delete">
                          Supprimer
            </DialogTrigger>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <DialogContent nonce="delete" >
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Do you want to delete the entry? Deleting this entry cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>

         <form  action={ async()=>{
          "use server"
           const newData = await prisma.tutos.delete({
            where:{
              id:item.id
            }
          })

          if (newData.id) {
            revalidatePath("/admin/tutos")
          }
          
         }} >
           <Button>Delete</Button>
         </form>
          </DialogClose>
        </DialogFooter>
      </DialogContent>

                     </Dialog>
                    </TableCell>
                  </TableRow>
                   ))}
                    </TableBody>
                  </Table>
                </CardContent>
               {/*  <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter> */}
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
