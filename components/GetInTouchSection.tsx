"use client";
import React from 'react'
import { Button } from './exportLayout'
import { useRouter } from 'next/navigation';
import ScrollAnimation from './animation/ScrollAnimation';

const GetInTouchSection = () => {
    const router = useRouter();
  return (
    <div
        className='
            w-full
            px-6
            py-20
            flex 
            flex-col
            items-center
            justify-center
            gap-10
        '
    >
        <ScrollAnimation>
            <p 
                className='
                    font-bold
                    text-white
                    text-3xl
                    md:text-5xl
                    flex
                    flex-col
                    justify-center
                    items-center
                    gap-5
                '
            >
                    Let's brew something 
                    <span>greate together!</span>
            </p>
        </ScrollAnimation>
            <ScrollAnimation>
                <Button
                    label='Get in touch'
                    onClick={() => router.push("https://www.linkedin.com/in/jaydeep-deshpande-68601822a/")}
                />
            </ScrollAnimation>
        
    </div>
  )
}

export default GetInTouchSection