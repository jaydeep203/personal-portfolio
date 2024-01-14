"use client";

import React from 'react';

import {School, Computer} from "lucide-react";
import ScrollAnimation from './animation/ScrollAnimation';

const Education = () => {
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
        <div className='w-full flex flex-col sm:flex-row sm:justify-between justify-center items-center gap-12'>
            <div className='px-2 w-[90%] sm:w-[40%] py-5 hover:bg-slate-700 hover:bg-opacity-30 flex flex-col gap-4'>
                <ScrollAnimation>
                    <School className='w-12 h-12' />
                </ScrollAnimation>
                <ScrollAnimation>
                    <h1 className='text-2xl font-bold'>
                        SSC
                    </h1>
                </ScrollAnimation>
                <ScrollAnimation>
                    <p className='opacity-60'>St. Xavier's School, Georai</p>
                </ScrollAnimation>
            </div>
            <div className='px-2 w-[90%] sm:w-[40%] py-5 hover:bg-slate-700 hover:bg-opacity-30 flex flex-col gap-4'>
                <ScrollAnimation>
                    <Computer className='w-12 h-12' />
                </ScrollAnimation>
                <ScrollAnimation>
                    <h1 className='text-2xl font-bold'>
                        Bachelor of Technology
                    </h1>
                </ScrollAnimation>
                <ScrollAnimation>
                    <p className='opacity-60'>PCET's Nutan College of Engineering and Reasearch, Pune</p>
                </ScrollAnimation>
            </div>
        </div>
    </div>
  )
}

export default Education