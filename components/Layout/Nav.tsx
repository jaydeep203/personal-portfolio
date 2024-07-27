"use client";
import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';




interface NavProps {
    href:string;
    label:string;
    active:boolean;
    icon: LucideIcon;
}


const Nav = ({active, href, label, icon:Icon}:NavProps) => {
  return (
    <div className='flex flex-col justify-center items-center'>


      <Link 
          className={`
              my-auto
              mx-0
              flex
              flex-col
              justify-center
              items-center
              hover:text-sky-500
              transition
              text-sm
              ${active? "text-sky-500" : "text-white"}
          `}
      href={href}> 
        <Icon size={20} />
        {label}
      </Link>
      {active &&  <hr className='font-bold w-full text-sky-500' /> }

    </div>
  )
}

export default Nav