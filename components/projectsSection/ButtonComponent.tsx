"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ButtonComponentProps{
    link?:string| null;
    isButton?:boolean;
}

const ButtonComponent:React.FC<ButtonComponentProps> = ({
    link,
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
                            '
                            >
                                Show more work
                            </button>
                    ) : (
                            <Link
                                href={link || "/" }
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
                            '
                            >
                                Visit website
                            </Link>
                    )
                }
                
            </div>
  )
}

export default ButtonComponent