"use client";

import React, { useCallback, useState } from 'react'
import Modal from './Modal';
import useProjectModal from '@/hooks/useProjectModal';
import Input from "@/app/admin/components/Input";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { CldUploadButton } from 'next-cloudinary';
import Image from 'next/image';

const ProjectModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState("");
    const projectModal = useProjectModal();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues:{
            pname:"",
            description:"",
            link:""
        }
    });

    const handleUpload = useCallback((result:any) => {
        setImage(result?.info?.secure_url);
    },[setImage]);

    const onSubmit:SubmitHandler<FieldValues> = (values) => {
        try {
            
            setIsLoading(true);
            axios.post("/api/update/projects", {
                image,
                ...values
            })
            .then(() => {
                toast.success("Project Created!");
                router.refresh();
            })
            .catch((error) => {
                console.log(error);
                toast.error("Something went wrong!");
            })
            .finally(()=> {
                setIsLoading(false);
                setImage("");
                reset();
            });

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }

    }



    const handleClose = useCallback(()=>{
        if(projectModal.isOpen){
            projectModal.onClose();
        }
    },[projectModal.isOpen, projectModal.onClose]);

    

  return (
    
    <Modal 
        title="Add a project"
        isLoading={isLoading}
        isOpen={projectModal.isOpen}
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
                        border-none
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
                        border-none
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
                        src={image || "/images/placeholder.png"}
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
        </div>
    </Modal>


  )
}

export default ProjectModal