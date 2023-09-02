"use client";

import { Project } from '@prisma/client';
import React from 'react';
import { IconType } from 'react-icons';

interface HeaderProps{
    icons:IconType[];
    pname?:string | null;
    description?:string | null;
}

const Header:React.FC<HeaderProps> = ({
    icons,
    pname,
    description
}) => {
  return (
    <div className='
        w-full
        p-2
        text-neutral-300
        flex
        flex-col
    '>
        <div className='
            flex 
            flex-col
            md:flex-row 
            w-full
        '>
            <div 
                className='
                    flex
                    flex-col
                    w-[90%]
                    md:w-[70%]
                    p-1
                    gap-4
                '
            >
                <div
                    className='mx-1 text-sm'
                >
                    Tagline
                </div>
                <div 
                    className='mx-1 font-bold text-white text-lg md:text-3xl'
                >
                    {pname}
                </div>
                <div className='w-full md:mx-1 md:w-[80%]'>
                    {description}
                </div>
            </div>
            <div 
                className='
                    w-[50%]
                    md:w-[30%]
                    p-1
                    gap-2
                    flex
                    flex-col
                    md:items-center
                '
            >
                <h1 
                    className='
                        font-bold
                        text-lg
                        text-white
                    '
                >
                    Services
                </h1>
                <p>
                    Ux Design
                </p>
                <p>
                    Ui Design
                </p>
            </div>
        </div>
        <div
            className='
                p-4
                flex
                flex-row
                gap-3
            '
        >
            {
                icons.map((Icon, i)=> (
                   <div 
                    key={i}
                    className='
                        bg-neutral-900
                        p-1
                        m-1
                        rounded-full
                        cursor-pointer
                        hover:scale-110
                    '
                   >
                        <Icon 
                            className='text-white hover:text-green-500'
                            size={30}
                        />
                   </div>
                ))
            }
        </div>
    </div>
  )
}

export default Header