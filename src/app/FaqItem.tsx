"use client"
import { useState } from "react";

function FaqItem({ content = "" ,children}: { content: string ,children?:any}) {
    const [isOpen, setIsOpen] = useState(false)
    return (
  <div onClick={()=>setIsOpen(!isOpen)}  className="flex flex-col cursor-pointer md:text-[24px] text-[16px]  w-full">
        <div className="flex items-center justify-between pt-6 border-t cursor-pointer hover:text-white border-white/20">
        <p className="w-full ">{content}</p>
        <div className="pl-2 md:pl-[100px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transition-all ease-in-out duration-200  ${isOpen ? "rotate-45" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
       <div className={`mt-4 transition-all    text-[20px] duration-700 ease-in-out ${isOpen ? 'flex' : 'hidden'} `}>{children}</div>
  </div>
    );
  }

  export default FaqItem