import { MoreHorizontal, UserCircle } from 'lucide-react'
import React from 'react'

function PostItem() {
  return (
    <div className='w-[470px] gap-5 flex flex-col' >
        {/* Info post */}
        <div className='flex justify-center items-center gap-2'>
            <UserCircle className='w-[32px] cursor-pointer h-[32px]'/>
             <div className='flex-col text-sm justify-center flex gap-1 flex-1'>
                <p  className='cursor-pointer hover:opacity-50 '>Aboubacar Sidiki Sidibé</p>
                
             </div>
             <MoreHorizontal className='cursor-pointer hover:opacity-50 ' />
        </div>

        <div className='w-full h-96 bg-white/10 rounded-md animate-pulse'></div>
    </div>
  )
}

export default PostItem