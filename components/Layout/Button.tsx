"use client";
import React from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    label:string;
    icon?:IconType;
    isDisabled?:boolean;
    type?: "submit"| "button" | "reset" | undefined;
    link?:string;
    style?:string;
    onClick?:() =>void;
}


const Button = ({
  icon:Icon,
  style, 
  label,
  type, 
  isDisabled, 
  onClick
}:ButtonProps) => {

  
                

  return (
    <>
        <button
            disabled={isDisabled}
            type={type}
            onClick={onClick}
            className={twMerge(
                `px-4
                flex
                flex-row
                justify-center
                items-center
                py-3
                text-neutral-100
                font-semibold
                text-sm
                rounded-md
                hover:bg-sky-700
                hover:text-white
                ${isDisabled ? "bg-slate-500 cursor-not-allowed" : "bg-sky-600 cursor-pointer"}
              `,
              style
            )}  
            
        >
          {label} 
          {Icon && <Icon size={24} className="text-white p-1 m-1" />}
        </button>
    </>
  )
}

export default Button