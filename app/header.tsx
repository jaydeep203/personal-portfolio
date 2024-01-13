"use client";
import React from 'react';
import {Nav, Button, MenuElement} from '@/components/exportLayout';
import Link from 'next/link';
import { FaEnvira} from '@/components/icons/icons';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Presentation, StickyNote, Info, Wrench } from 'lucide-react';

const header = () => {
    const router = useRouter();
    const pathname = usePathname();

    const navs = [
        {
            label:"Home",
            href:"/",
            icon:Home,
            active: "/" === pathname
        },
        {
            label:"Projects",
            href:"/projects",
            icon:Presentation,
            active: "/projects" === pathname
        },
        {
            label:"Resume",
            href:"/certificate",
            icon:StickyNote,
            active: "/certificate" === pathname
        },
        {
            label:"About",
            href:"/about",
            icon:Info,
            active: "/about" === pathname
        },
        {
            label:"Admin",
            href:"/admin",
            icon:Wrench,
            active: "/admin" === pathname
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
        justify-around
        md:justify-evenly
        z-10
        bg-neutral-900
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
                navs.map((item, i)=>(
                    <div key={i} className='flex items-center'>
                        <Nav icon={item.icon} active={item.active} label={item.label} href={item.href} />
                    </div>
                    
                ))
            }
        </article>
        <Button 
            onClick={() => router.push("https://www.linkedin.com/in/jaydeep-deshpande-68601822a/")}
            label="Get in touch" 
            style='
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

        
            <Link href={"/"} className='absolute right-[25vw] top-7'>
                <Home className='flex md:hidden h-6 w-6 text-white' />
            </Link>
            <MenuElement navs={navs} />
        
        
    </nav>
  )
}

export default header