"use client"
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Update } from 'next/dist/build/swc'
import React, { useState } from 'react'
import { postAppVersion } from './version.actions'

export default function FormVersion({update}:{update:any}) {

    const [datas, setDatas] = useState({
        code:update.code,
        name:update.name,
        windowsLink:update.windowsLink,
        macLink:update.macLink,
        required:update.required,
    })
    //handleChange datas
    const handleChange = (e:any) => {
        setDatas({
            ...datas,
            [e.target.name]: e.target.value
        })
    }

    
  return (
    <form className="flex flex-col items-center justify-center w-full max-w-xl gap-4 p-4 mx-auto">
      
        
            <Input name="code" onChange={handleChange}  value={datas.code} placeholder='Code'/>
            <Input name="name" onChange={handleChange} value={datas.name} placeholder='Name'/>
            <Input name="windowsLink" onChange={handleChange} value={datas.windowsLink} placeholder='Link Windows'/>
            <Input name="macLink" onChange={handleChange} value={datas.macLink} placeholder='Link Mac'/>
           <div className="flex items-center w-full gap-4">
            <p>Obligatoire</p>
           <Input value={datas.required} checked={datas.required} className='w-4 h-4' type='checkbox' onChange={()=>{
               setDatas({
                ...datas,
                ["required"]: !datas.required
            })
                
            }} name="required" />
           </div>
            <Button formAction={async ()=>{
               await postAppVersion(datas)
            }}  className='w-full'>Modifier</Button>
        </form>
  )
}
