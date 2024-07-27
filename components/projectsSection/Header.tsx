"use client";

import React from 'react';
import { skillsIcons } from '../icons/icons';
import ScrollAnimation from '../animation/ScrollAnimation';

interface HeaderProps{
    techs?:string[];
    pname?:string | null;
    description?:string | null;
}



const Header:React.FC<HeaderProps> = ({
    techs,
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
            {/* tagline, name, description */}
            <div 
                className='
                    flex
                    flex-col
                    w-[90%]
                    md:w-[90%]
                    p-1
                    gap-2
                    md:gap-4
                '
            >
                <ScrollAnimation>
                    <div
                        className='mx-1 text-xs'
                    >
                        Tagline
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div 
                        className='mx-1 font-bold text-white md:text-xl'
                    >
                        {pname}
                    </div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div className='w-full text-sm leading-relaxed md:mx-1 md:leading-normal md:w-[95%]'>
                        {description}
                    </div>
                </ScrollAnimation>
            </div>

            {/* Services component */}
            {/* <div 
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
                        text-sm
                        text-white
                    '
                >
                    Services
                </h1>
                <p className='text-xs'>
                    Ux Design
                </p>
                <p className='text-xs'>
                    Ui Design
                </p>
            </div> */}

        </div>

        {/* skills icons */}
            <div
                className='
                    p-4
                    flex
                    flex-row
                    gap-3
                    max-w-full
                    overflow-x-scroll
                    no-scrollbar
                '
            >
                {
                    skillsIcons.map(({Icon, name, color}, i)=> (
                            techs?.includes(name)  && (
                                    <div 
                                        key={i}
                                        className="
                                            bg-neutral-900
                                            p-1
                                            m-1
                                            rounded-full
                                            cursor-pointer
                                            hover:scale-110
                                    "
                                    
                        >      
                            
                                    <Icon 
                                        className={`text-white hover:text-green-500`}
                                        size={30}
                                    />    
                                
                        </div>
                            )
                    ))
                }
            </div>
    </div>
  )
}

export default Header