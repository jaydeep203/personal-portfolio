"use client";
import React, { useCallback, useState } from 'react'
import Modal from './Modal';
import useResumeModal from '@/hooks/useCertificateModal';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/app/admin/components/Input';
import { skillsIcons } from '../icons/icons';



const AddCertificate = ({

}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [tech, setTech] = useState("");

    const resumeModal = useResumeModal();
    const router = useRouter();



    const handleClose = () => {
        resumeModal.onClose();
    }

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues:{
            title:"",
            description:"",
            verifyLink:"",
            icon:""
        }
    });

    const onSubmit:SubmitHandler<FieldValues> = (values) => {
        try {
            
            setIsLoading(true);
            axios.post("/api/update/certificates", {
                ...values
            })
            .then(() => {
                toast.success("Certificate Added!");
                router.refresh();
            })
            .catch((error) => {
                console.log(error);
                toast.error("Something went wrong!");
            })
            .finally(()=> {
                setIsLoading(false);
                reset();
                router.refresh();
                resumeModal.onClose();
            });

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }

    }

  return (
    <Modal
        title="Add a project"
        isLoading={isLoading}
        isOpen={resumeModal.isOpen}
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
                    Title
                </label>
                <Input 
                    id="title"
                    className='
                        bg-black
                        text-neutral-300
                        border-none
                        outline-white
                        hover:bg-neutral-900
                    '
                    disabled={isLoading}
                    placeholder='Enter Certificate Name'
                    {...register("title")}
                />
            </div>
            <div
                className='w-full grid grid-cols-1'
            >
                <label
                    className='text-white text-lg ml-4 font-semibold'
                >
                    Description
                </label>
                <Input 
                    id='description'
                    className='
                        bg-black
                        text-neutral-300
                        border-none
                        outline-white
                        hover:bg-neutral-900
                    '
                    disabled={isLoading}
                    placeholder='Enter description'
                    {...register("description")}
                />
            </div>
            <div
                className='w-full grid grid-cols-1'
            >
                <label
                    className='text-white text-lg ml-4 font-semibold'
                >
                   Verification Link
                </label>
                <Input 
                    id='verifyLink'
                    className='
                        bg-black
                        text-neutral-300
                        border-none
                        outline-white
                        hover:bg-neutral-900
                    '
                    disabled={isLoading}
                    placeholder='Enter Verification link'
                    {...register("verifyLink")}
                />
            </div>
            {/* add icon choose */}
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
                
            <p className='text-white'>{tech}</p>
                
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
                onClick={() => {}}
                className='
                    bg-sky-500
                    rounded-md
                    text-white
                    p-3
                '>
                    Delete
                </button>
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
                        <p key={i} onClick={() => setTech(name)} className={`py-2 m-1
                            ${tech===name? "text-neutral-400 hidden": "text-white cursor-pointer"}
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

export default AddCertificate;