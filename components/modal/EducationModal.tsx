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
import useEducationModal from '@/hooks/useEducationModal';



const EducationModal = ({

}) => {
    const [isLoading, setIsLoading] = useState(false);

    const educationModal = useEducationModal();
    const router = useRouter();



    const handleClose = () => {
        educationModal.onClose();
    }

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues:{
            title:"",
            school:""
        }
    });

    const onSubmit:SubmitHandler<FieldValues> = (values) => {
        try {
            
            setIsLoading(true);
            axios.post("/api/update/education", {
                ...values
            })
            .then(() => {
                toast.success("Education Added!");
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
                educationModal.onClose();
            });

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }

    }

  return (
    <Modal
        title="Add a Education"
        isLoading={isLoading}
        isOpen={educationModal.isOpen}
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
                    placeholder='Enter Degree Title'
                    {...register("title")}
                />
            </div>
            <div
                className='w-full grid grid-cols-1'
            >
                <label
                    className='text-white text-lg ml-4 font-semibold'
                >
                    School Name
                </label>
                <Input 
                    id='school'
                    className='
                        bg-black
                        text-neutral-300
                        border-none
                        outline-white
                        hover:bg-neutral-900
                    '
                    disabled={isLoading}
                    placeholder='Enter School Name'
                    {...register("school")}
                />
            </div>
            
        </div>
    </Modal>
  )
}

export default EducationModal;