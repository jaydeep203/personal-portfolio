"use client";

import React from 'react';

import {School, Computer} from "lucide-react";
import ScrollAnimation from './animation/ScrollAnimation';
import { Education } from '@prisma/client';

interface educationProps{
    educations:Education[];
}

const EducationComp:React.FC<educationProps> = ({
    educations
}) => {
  return (
    <div
    id='education'
    className='
        w-full
        py-5
        gap-6
        flex
        flex-col
        text-white
    '>
        <ScrollAnimation>
            <h1 className='text-3xl ml-4 sm:ml-0 font-bold'>
                My Education
            </h1>
        </ScrollAnimation>
        <div className='
            w-full 
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-12
        '>
            {
                educations.map(({id, title, school}) => (
                    <div 
                        key={id}
                        className='
                            px-2 
                            w-full 
                            py-5 
                            hover:bg-slate-700 
                            hover:bg-opacity-30 
                            flex flex-col 
                            gap-4
                        '>
                        <ScrollAnimation>
                            <School className='w-12 h-12' />
                        </ScrollAnimation>
                        <ScrollAnimation>
                            <h1 className='text-2xl font-bold'>
                                {title}
                            </h1>
                        </ScrollAnimation>
                        <ScrollAnimation>
                            <p className='opacity-60'>{school}</p>
                        </ScrollAnimation>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default EducationComp