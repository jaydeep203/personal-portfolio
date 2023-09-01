import React from 'react';
import Link from 'next/link';

interface NavProps {
    href:string;
    label:string;
}


const Nav = ({ href, label}:NavProps) => {
  return (
    <Link 
        className='
            my-auto
            text-white
            mx-0
            text-lg
            hover:text-[#9580ff]
            transition
        '
    href={href}>{label}</Link>
  )
}

export default Nav