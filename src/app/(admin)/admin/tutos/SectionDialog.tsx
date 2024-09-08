"use client"
import { Button } from '@/components/ui/button'
import { DialogClose, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogTitle } from '@radix-ui/react-dialog'
import { PlusCircle, VideoIcon } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { addTutoAction, editTutoAction } from '../queries-actions/tutos.action'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import NextVideo from 'next-video';
function SectionDialog({item}:{item?:any}) {
    const router = useRouter()
    const videoRef = useRef<any>(null)
    const cancelRef = useRef<any>(null)
    const [video, setVideo] = useState<File | null>()
    const [onSubmit, setOnSubmit] = useState(false)
 

  return (
    <Dialog >
        <DialogTrigger className={item ? "w-[120px]" :""} >
        { !item ? <Button size="sm" className="gap-1 h-7">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Ajouter une section
                  </span>
                </Button>
                
            :    <p className='p-2 text-sm text-left rounded-md w-ful self-startl hover:bg-muted '> Modifier</p>
            }
        </DialogTrigger>
        <DialogContent className=" min-w-[calc(40%)] overflow-hidden" >
            <DialogTitle>
                {item?.id ? "Modifier la section" :"Ajouter une section"}
      
            </DialogTitle>
            <form
            onSubmit={ async (e)=>{
                e.preventDefault()
              

                
                
                const formEvent = new FormData(e.currentTarget)
               if (item == null) {
                if (formEvent.get("section")!.length < 3 || formEvent.get("title")!.length < 3 || formEvent.get("description")!.length < 3 || formEvent.get("index")!.length <= 0  || video == null) {
                    alert("Error")
                    return
                }
               }else{
                if (formEvent.get("section")!.length < 3 || formEvent.get("title")!.length < 3 || formEvent.get("description")!.length < 3 || formEvent.get("index")!.length <= 0 ) {
                    alert("Error")
                    return
                }
               }
                cancelRef.current.click()
                const data = item?.id  ? await editTutoAction(formEvent,item!.id)  :  await addTutoAction(formEvent)
                if (data?.id) {
                    router.refresh()
                   setVideo(null)
                    
                }

                router.refresh()

            }}
            className='flex flex-col w-full gap-4 '>
<div className="flex gap-4">
<Input placeholder='Nom de la section ' defaultValue={item?.section ?? ""}  name="section" className=''  />
<Input placeholder='Position' type='number' defaultValue={item?.index ?? ""}   className=' w-full max-w-[140px]' name="index" />
</div>

                <Input type='file' onChange={(e)=>{

if (e.target.files) {
    
    setVideo(e.target.files[0]);
}
 

                }}  className='hidden'  ref={videoRef} name='videoLink' />

{item == null && 

<>
{  !video &&      <div
                onClick={(e)=>{
                    videoRef.current.click()
                }}
                className='flex flex-col items-center justify-center gap-4 cursor-pointer aspect-video hover:bg-muted/90 bg-muted/30'>
                <p className='text-sm'>Ajouter une video</p>
                <VideoIcon size={30} />
                </div>}


       

             { video &&  <NextVideo   src={`${URL.createObjectURL(video as Blob)}`}  />}
             {  video &&      <div
                onClick={(e)=>{
                    e.stopPropagation()
                    videoRef.current.click()
                }}
                className='flex items-center justify-center gap-4 py-4 cursor-pointer hover:bg-muted/90 bg-muted/30'>
                <p className='text-sm'>Modifier la video</p>
                <VideoIcon size={20} />
                </div>}

</>}

{item != null &&

<>
 

       

             {   <NextVideo   src={`${ video ?  URL.createObjectURL(video as Blob) :  item.videoLink }`}  />}
             {        <div
                onClick={(e)=>{
                    e.stopPropagation()
                    videoRef.current.click()
                }}
                className='flex items-center justify-center gap-4 py-4 cursor-pointer hover:bg-muted/90 bg-muted/30'>
                <p className='text-sm'>Modifier la video</p>
                <VideoIcon size={20} />
                </div>}

</>
}

        

              <Input placeholder='Titre' name="title"   defaultValue={item?.title ?? ""} />
             

               
                <Textarea className='h-[140px]'   defaultValue={item?.description ?? ""}  placeholder='Description' name="description" />
                <div className="flex items-center justify-center w-full gap-4">
                <Input placeholder='Lien du bouton' className='flex-1' name="btnLink" />
                <div className='flex gap-2'>
                    <p>Publier</p>
                    <Switch name='public' defaultChecked={item?.public ?? false} />
                </div>
                </div>
               
                <DialogFooter>
               <DialogClose> <Button ref={cancelRef}  type="button" variant={"outline"}>Annuler</Button></DialogClose>
                <Button> {item?.id ? "Modifier": "Ajouter"} </Button>
            </DialogFooter>
            </form>
         
        </DialogContent>
    </Dialog>
  )
}

export default SectionDialog