"use client";

import React, { useCallback, useEffect, useState } from 'react'
import Modal from './Modal';
import Input from "@/app/admin/components/Input";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { CldUploadButton } from 'next-cloudinary';
import Image from 'next/image';
import { skillsIcons } from '../icons/icons';
import useEditProjectModal from '@/hooks/useEditProjectModal';

const EditProjectModal = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [image, setImage] = useState<string>("");
    const [techs, setTechs] = useState<string[]>([]);
    const editProjectModal = useEditProjectModal();
    const router = useRouter();

    const fetchData = async() => {
        try {
            const response = await fetch(`/api/update/projects/${editProjectModal.projectId}`);
        
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
        
            const data = await response.json();
            reset({
                pname:data.pname,
                description:data.description,
                link:data.link

            });

            setImageLink(data.image);
        } catch (error) {
            console.error('Error fetching data:', error);
            
          }

        
    }

    const [imageLink, setImageLink] = useState<string>("");

    useEffect(()=>{
        fetchData();
        
    },[editProjectModal.projectId]);


    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        
    });

    const handleUpload = useCallback((result:any) => {
        setImage(result?.info?.secure_url);
    },[setImage]);

    const onSubmit:SubmitHandler<FieldValues> = (values) => {
        try {
            
            setIsLoading(true);
            console.log(values);

            setIsLoading(false);

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }

    }

    const handleRemove = useCallback(() => {
        setTechs(techs.filter((tech)=> tech !== techs[techs.length - 1]))
    },[techs]);



    const handleClose = useCallback(()=>{
        if(editProjectModal.isOpen){
            editProjectModal.onClose();
        }
    },[editProjectModal.isOpen, editProjectModal.onClose]);

    

  return (
    
    <Modal 
        title="Edit a project"
        isLoading={isLoading}
        isOpen={editProjectModal.isOpen}
        handleClose={handleClose}
        handleSubmit={handleSubmit(onSubmit)}
    >
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
                        border-none
                        outline-none
                        hover:bg-neutral-900
                    '
                    disabled={isLoading}
                    {...register("pname")}
                    placeholder='Enter project name'
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
                        border-none
                        outline-none
                    '
                    disabled={isLoading}
                    {...register("description")}
                    placeholder='Enter project description'
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
                        border-none
                        outline-none
                    '
                    disabled={isLoading}
                    {...register("link")}
                    placeholder='Enter project link'
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
                        src={image || imageLink || "/images/placeholder.png"}
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
    </Modal>


  )
}

export default EditProjectModal;