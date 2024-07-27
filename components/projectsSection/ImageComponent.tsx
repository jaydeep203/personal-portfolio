"use client";

import Image from 'next/image';
import React from 'react';

interface ImageComponentProps{
    image?:string | null;
}

const ImageComponent:React.FC<ImageComponentProps> = ({
    image
}) => {
  return (
    <div className='w-full my-3 flex'>
        <div
            className='
                relative
                overflow-hidden
                mx-auto
                w-full
                h-[30vh]
                md:w-[90%]
                md:h-[15rem]
                md:p-5
                md:my-auto
                rounded-2xl
            '
        >
            <Image 
                alt='Project image'
                src={image ||"/BackgroundImg.jpeg"}
                fill
                className='object-scale-down'
            />
        </div>
    </div>
  )
}

export default ImageComponent