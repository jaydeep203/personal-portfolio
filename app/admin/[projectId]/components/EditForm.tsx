"use client";

import { skillsIcons } from '@/components/icons/icons';
import React, { useCallback, useState } from 'react'

import Input from "@/app/admin/components/Input";
import { Project } from '@prisma/client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { CldUploadButton } from 'next-cloudinary';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Button } from '@/components/exportLayout';

interface editFormProps{
    project: Project | null;
}

const EditForm:React.FC<editFormProps> = ({
    project
}) => {
    const title = "Edit Project"
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState("");
    const [techs, setTechs] = useState<string[]>([]);

    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues:{
            pname:project?.pname || "",
            description:project?.description ||  "",
            link:project?.link || ""
        }
    });

    const handleUpload = useCallback((result:any) => {
        setImage(result?.info?.secure_url);
    },[setImage]);

    const handleRemove = useCallback(() => {
        setTechs(techs.filter((tech)=> tech !== techs[techs.length - 1]))
    },[techs]);

    const onSubmit:SubmitHandler<FieldValues> = (values) => {
        try {
            
            setIsLoading(true);
            // axios.put("/api/update/projects", {
            //     image,
            //     techs,
            //     ...values
            // })
            // .then(() => {
            //     toast.success("Project Created!");
            //     router.refresh();
            // })
            // .catch((error) => {
            //     console.log(error);
            //     toast.error("Something went wrong!");
            // })
            // .finally(()=> {
            //     setIsLoading(false);
            //     setImage("");
            //     reset();
            // });

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }

    }

  return (
    <>
        <div
            className='
                pt-[15vh]
                flex
                justify-center
                items-center
                outline-none
                bg-neutral-800
                bg-opacity-70
            '
        >
            <div className='
                relative
                w-full
                lg:w-3/6
                my-6
                mx-auto
                lg:max-w-3xl
            '>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='
                        lg:overflow-y-auto
                        border-0
                        rounded-lg
                        shadow-lg
                        relative
                        flex
                        flex-col
                        w-full
                        bg-black
                        outline-none
                        focus:outline-none
                    '
                >
                    <div className='
                        flex
                        items-center
                        justify-between
                        p-10
                        rounded-t
                    '>
                        <h3 className='text-3xl font-semibold text-white'>{title}</h3>
                        {/* <button onClick={handleClose} //handleClose
                        className='
                            p-1
                            ml-auto
                            border-0
                            text-white
                            hover:opacity-70
                            transition
                        '
                        ><AiOutlineClose size={20} /></button> */}
                    </div>
                    <hr className='w-full text-white' />
                    <div className='
                        relative p-10 flex-auto
                    '>
                    
                        <div className='
                            w-full
                            grid
                            grid-cols-1
                        '>
                            <div
                                className='w-full grid grid-cols-1'
                            >
                                <label
                                    className='text-white text-lg ml-4 font-semibold'
                                >
                                    Project name
                                </label>
                                <Input 
                                    id="pname"
                                    className='
                                        bg-black
                                        text-neutral-300
                                        border-neutral-400
                                        border-solid
                                        border-[1px]
                                        outline-none
                                        hover:bg-neutral-900
                                    '
                                    disabled={isLoading}
                                    placeholder='Enter project name'
                                    {...register("pname")}
                                />
                            </div>
                            <div
                                className='w-full grid grid-cols-1'
                            >
                                <label
                                    className='text-white text-lg ml-4 font-semibold'
                                >
                                    Project Description
                                </label>
                                <Input 
                                    id='description'
                                    className='
                                        bg-black
                                        text-neutral-300
                                        border-neutral-400
                                        border-solid
                                        border-[1px]
                                        outline-none
                                    '
                                    disabled={isLoading}
                                    placeholder='Enter project description'
                                    {...register("description")}
                                />
                            </div>
                            <div
                                className='w-full grid grid-cols-1'
                            >
                                <label
                                    className='text-white text-lg ml-4 font-semibold'
                                >
                                    Link
                                </label>
                                <Input 
                                    id='link'
                                    className='
                                        bg-black
                                        text-neutral-300
                                        border-neutral-400
                                        border-solid
                                        border-[1px]
                                        outline-none
                                    '
                                    disabled={isLoading}
                                    placeholder='Enter project link'
                                    {...register("link")}
                                />
                            </div>
                            <div
                                className='w-full grid grid-cols-1'
                            >
                                <label
                                    className='text-white text-lg ml-4 font-semibold'
                                >
                                    Image
                                </label>
                                <CldUploadButton
                                    options={{maxFiles:1}}
                                    onUpload={handleUpload}
                                    uploadPreset='a6qw5dqd'
                                >
                                    <Image 
                                        src={project?.image || "/images/placeholder.png"}
                                        height={400}
                                        width={400}
                                        alt='Project image'
                                        className='
                                            p-2
                                            rounded-lg
                                        '
                                    />
                                </CldUploadButton>
                                
                            </div>
                            <hr className='text-white' />
                            <div
                                className='
                                    py-3
                                    w-full
                                    my-3
                                    mx-auto
                                    text-white
                                    text-lg
                                    grid
                                    grid-cols-2
                                    lg:grid-cols-3
                                '
                            >
                                {
                                    techs.map((tech, i) => (
                                        <p key={i} className='text-white'>{tech}, </p>
                                    ))
                                }
                            </div>
                            <hr className='text-white' />
                            <div className='
                                py-3
                                w-full
                                my-3
                                mx-auto
                            '>
                                <button 
                                    type='button'
                                onClick={handleRemove}
                                className='
                                    bg-sky-500
                                    rounded-md
                                    text-white
                                    p-3
                                '>Delete</button>
                            </div>
                            <hr className='text-white' />
                            <div className='
                                py-3
                                w-full
                                mx-auto
                                my-2
                                grid
                                grid-cols-1
                                md:grid-cols-2
                            '>
                                {
                                    skillsIcons.map(({Icon, name, color}, i) => (
                                        <p key={i} onClick={() => {
                                            setTechs([...techs, name]);
                                        }} className={`py-2 m-1
                                            ${techs.includes(name)? "text-neutral-400 hidden": "text-white cursor-pointer"}
                                        `}>
                                            <Icon size={30} className={color} /> {name}
                                        </p>
                                    ))
                                }
                                
                            </div>
                        </div>
                    
                    </div>
                    <div className='flex flex-col gap-2 p-10'>
                        <Button
                        isDisabled={isLoading}
                        label="Update"
                        type='submit'
                        />
                    </div>
                </form>

            </div>
        </div>
    </>
  )
}

export default EditForm