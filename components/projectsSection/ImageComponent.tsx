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
    <div className='w-full py-2 my-5'>
        <div
            className='
                relative
                overflow-hidden
                mx-auto
                w-full
                h-[30vh]
                md:w-[70%]
                md:h-[30rem]
                md:p-5
                rounded-2xl
            '
        >
            <Image 
                alt='Project image'
                src={image ||"/BackgroundImg.jpeg"}
                fill
            />
        </div>
    </div>
  )
}

export default ImageComponent