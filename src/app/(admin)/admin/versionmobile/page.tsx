import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { prisma } from '@/utils/prisma';
import FormVersion from './FormVersion';
export default async function  Version() {
    const update = await prisma.appVersion.findFirst({
        orderBy: {
          createdAt: "asc",
        },
      });
 
  return (
    <div className='flex flex-col justify-center h-full'>
 
        <FormVersion update={update} />
    </div>
  )
}
