"use client";
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import {useDropzone} from "react-dropzone";

interface ImageUploaderProps{
    onChange: (base64: string) => void;
    value?:string;
    label:string;
    disabled?:boolean;
}

const ImageUploader:React.FC<ImageUploaderProps> = ({
    onChange,
    value,
    label,
    disabled
}) => {

    const [base64, setBase64] = useState(value);
    const handleChange = useCallback((base64: string) => {
        onChange(base64);
        console.log(base64)
    },[onChange]);

    const handleDrop = useCallback((files:any) => {
        const file = files[0];
        const reader = new FileReader();

        reader.onload = (event: any) => {
            setBase64(event.target.result);
            handleChange(event.target.result);
        }

        reader.readAsDataURL(file);

    },[handleChange]);

    const {getRootProps, getInputProps} = useDropzone({
        maxFiles:1,
        onDrop:handleDrop,
        disabled,
        accept:{
            '/image/jpeg':[],
            '/image/png':[]
        }
    });

  return (
    <div
        {
            ...getRootProps({
                className:"w-full p-4 text-black text-center border-2 border-dotted cursor-pointer rounded-md border-neutral-700"
            })
        }
    >
        <input {...getInputProps()} />
        {base64 ? (
            <div className='flex items-center justify-center'>
                <Image 
                    src={base64}
                    height={100}
                    width={100}
                    alt='Uploaded Img'
                />
            </div>
        ): (
            <p className='text-neutral-500'>{label}</p>
        )}
    </div>
  )
}

export default ImageUploader