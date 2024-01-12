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
              hover:text-[#9580ff]
              transition
              text-sm
              ${active? "text-[#9580ff]" : "text-white"}
          `}
      href={href}> 
        <Icon color='white' size={20} />
        {label}
      </Link>
      {active &&  <hr className='font-bold w-full text-[#9580ff] bg-[#9580ff]' /> }

    </div>
  )
}

export default Nav