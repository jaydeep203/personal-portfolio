"use client";

import React from 'react'
import { IconType } from 'react-icons';
import { Button } from '../ui/button';
import {ExternalLink} from "lucide-react";
import { useRouter } from 'next/navigation';
import ScrollAnimation from '../animation/ScrollAnimation';

interface cardProps{
    icon: IconType;
    title: string;
    description: string;
    link: string;
}

const Card:React.FC<cardProps> = ({
    icon:Icon,
    title,
    description,
    link
}) => {
    const router = useRouter();

  return (
    <div className='
        w-[95%]
        mx-auto
        sm:w-[20vw]
        bg-slate-800
        bg-opacity-30
        hover:bg-opacity-50
        flex
        flex-col
        gap-4
        px-3
        py-6
        rounded-xl
    '>
        <div className='text-white'>
            <ScrollAnimation>
                <Icon className='text-white w-12 h-12' />
            </ScrollAnimation>
        </div>
        <div className='flex flex-col gap-3'>
            <ScrollAnimation>
                <h1 className='text-2xl text-white font-bold'>{title}</h1>
            </ScrollAnimation>
            <ScrollAnimation>
                <p className='text-neutral-300'>
                    {description}
                </p>
            </ScrollAnimation>
        </div>

        <div className='flex flex-row justify-around'>
        
            <Button
                onClick={() => router.push("/certificate")}
                variant="secondary"
                title='visit'
                className='flex flex-row gap-3 w-[45%] bottom-4'

            >Visit <ExternalLink className='w-4 h-4' /></Button>
            <Button
                onClick={() => router.push(link)}
                variant="outline"
                title='visit'
                className='flex flex-row gap-3 bg-slate-800 hover:bg-slate-700 text-white w-[45%] bottom-4'

            >Verify <ExternalLink className='w-4 h-4' /></Button>

        </div>
    </div>
  )
}

export default Card