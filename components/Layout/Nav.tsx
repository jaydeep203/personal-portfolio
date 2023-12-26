import React from 'react';
import Link from 'next/link';

interface NavProps {
    href:string;
    label:string;
    active:boolean;
}


const Nav = ({active, href, label}:NavProps) => {
  return (
    <Link 
        className={`
            my-auto
            mx-0
            text-lg
            hover:text-[#9580ff]
            transition
            ${active? "text-[#9580ff]" : "text-white"}
        `}
    href={href}>{label}</Link>
  )
}

export default Nav