"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import {ExternalLink} from "lucide-react";

interface ButtonComponentProps{
    lable?:string;
    link?:string| null;
    style?:string;
    isButton?:boolean;
}

const ButtonComponent:React.FC<ButtonComponentProps> = ({
    lable,
    link,
    style,
    isButton
}) => {

    const router = useRouter();

  return (
    <div className='
                w-full
                p-6
                flex
                items-center
                justify-center
            '>
                {
                    isButton ? (
                        <button 
                            onClick={() => router.push("/projects")}
                            className='
                                px-4
                                py-3
                                text-neutral-100
                                font-semibold
                                text-sm
                                rounded-md
                                transition
                                bg-slate-800
                                hover:bg-slate-700
                                hover:text-neutral-300
                                group-hover:border-white
                                group-hover:border-[1px]
                                group-hover:border-solid
                                flex
                                flex-row
                                justify-center
                                items-center
                                gap-3
                            '
                            >
                                Show more work <ExternalLink className='w-4 h-4' />
                            </button>
                    ) : (
                            <a
                                target='_blank'
                                href={link || "/" }
                                className={twMerge(`
                                    px-4
                                    py-3
                                    text-neutral-100
                                    font-semibold
                                    text-sm
                                    rounded-md
                                    transition
                                    bg-slate-800
                                    hover:bg-slate-700
                                    hover:text-neutral-300
                                    group-hover:border-white
                                    group-hover:border-[1px]
                                    group-hover:border-solid
                                `, 
                                    style
                                )}
                            >
                                { lable ? lable : ( <span className='flex flex-row gap-3'>Visit website <ExternalLink className='w-4 h-4' /></span> )}
                            </a>
                    )
                }
                
            </div>
  )
}

export default ButtonComponent