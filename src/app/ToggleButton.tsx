"use client";
import React, { Component } from 'react';
import { useState } from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

 
 
 function ToggleButton({isOpen,handleClick}:{isOpen:boolean,handleClick:()=>void}) {
    
   return (
    <div className="relative flex right-4">
    <IoIosMenu
        onClick={handleClick}
        className={`${isOpen ? 'scale-0 rotate-90 opacity-0 duration-500' : 'scale-100 opacity-100 rotate-0 transition-all  duration-500'} cursor-pointer w-9 h-9 absolute `}
    />
    <IoIosClose
        onClick={handleClick}
        className={`${isOpen ? 'scale-105 opacity-100 rotate-0  duration-500' : 'scale-0  rotate-90 opacity-0 transition-all  duration-500'} cursor-pointer w-9 h-9 absolute `}
    />
    
</div>
   )
 }
 
 export default ToggleButton