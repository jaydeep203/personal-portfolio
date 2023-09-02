import React from 'react';
import {Nav, Button, MenuElement} from '@/components/exportLayout';
import Link from 'next/link';
import { FaEnvira} from '@/components/icons/icons';

const header = () => {

    const navs = [
        {
            label:"Home",
            href:"/"
        },
        {
            label:"Work",
            href:"/projects"
        },
        {
            label:"Expertise",
            href:"/expertise"
        },
        {
            label:"About",
            href:"/about"
        },
        {
            label:"Admin",
            href:"/admin"
        },
    ];

    

  return (
    <nav className='
        fixed
        h-20
        w-full
        bg-transparent
        backdrop-blur-3xl
        flex
        justify-evenly
        z-10
    '>
        <div className='flex items-center justify-center p-4'>
            <Link href={"/"} className='flex text-white items-center gap-2 text-2xl'><FaEnvira size={30} color='green' />Jaydeep</Link>
        </div>
        <article className='
            hidden
            md:flex
            justify-around
            gap-3
            w-[35vw]
        '>
            {
                navs.map((item)=>(
                    <Nav key={item.label} label={item.label} href={item.href} />
                ))
            }
        </article>
        <Button label="Get in touch" style='
            hidden 
            md:flex 
            bg-white 
            my-auto 
            mx-0 
            p-[0.5rem] 
            rounded-md 
            font-semibold 
            text-black 
            hover:bg-slate-300 
            transition
        '/>

        <MenuElement navs={navs} />
        
    </nav>
  )
}

export default header