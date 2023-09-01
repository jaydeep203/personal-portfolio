"use client";

import React, {useState, useCallback} from 'react';
import { useSession } from 'next-auth/react';
import Input  from './Input';
import ImageUploader from './ImageUploader';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/exportLayout';
import { CldUploadButton } from 'next-cloudinary';
import { BiSolidEdit } from "react-icons/bi";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { User } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AiOutlinePlus } from 'react-icons/ai';
import useProjectModal from '@/hooks/useProjectModal';

interface UpdatePageProps{
    currentUser:User | null;
}

const UpdatePage:React.FC<UpdatePageProps> = ({
    currentUser
}) => {
    const [avatar, setAvatar] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const projectModal = useProjectModal();
    

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues:{
            name:"",
            newEmail:"",
            bio:""
        }
    });

    const handleUpload = useCallback((result:any)=>{
        setAvatar(result?.info?.secure_url);
    },[setAvatar]);

    const session = useSession();
    if(session?.status !== "authenticated"){
        return null;
    }

    
    const email = currentUser?.email;
    

    const onSubmit:SubmitHandler<FieldValues> = (values) => {
        console.log(values);
        try{

            setIsLoading(true);
            axios.post("/api/update", {
                email,
                avatar,
                ...values
            })
            .then(() => {
                toast.success("Updated!");
                router.refresh();
            })
            .catch((error)=> toast.error("Something went wrong"))
            .finally(() => {
                setIsLoading(false);
                reset();
            });

        }catch(error:any){
            console.log(error);
        }
    }

    
    

  return (
    <div
        className='
            my-3
            w-full
        '
    >
        <div 
            className='
                w-[80%]
                mx-auto
                p-5
            '   
        >
            <div
                className='
                    w-[70%]
                    mx-auto
                    gap-5
                    p-5
                    bg-neutral-100
                    rounded-md
                '
            >
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className='
                        mx-5
                        gap-5
                    '
                >
                    <div>
                        <h1 className='
                            text-black
                            font-bold
                            text-2xl
                            my-4
                        '>
                            Admin Panel
                        </h1>
                    </div>
                    <div
                        className='
                            text-neutral-400
                            mx-auto
                            w-[80%]
                            gap-3
                        '
                    >
                        <p
                            className='font-semibold'
                        >
                            Name
                        </p>
                        <Input 
                            id='name'
                            disabled={isLoading}
                            className='w-full'
                            {...register("name")}
                            placeholder='Enter your name'
                        />
                    </div>
                    <div
                        className='
                        text-neutral-400
                        mx-auto
                        w-[80%]
                        gap-3
                    '
                    >
                        <p
                            className='font-semibold'
                        >
                            Email
                        </p>
                        <Input 
                            id='newEmail'
                            disabled={isLoading}
                            className='w-full'
                            {...register("newEmail")}
                            placeholder='Enter your new email'
                        />
                    </div>
                    <div
                        className='
                        text-neutral-400
                        mx-auto
                        w-[80%]
                        gap-3
                    '
                    >
                        <p
                            className='font-semibold'
                        >
                            Bio
                        </p>
                        <Input 
                            id='bio'
                            disabled={isLoading}
                            className='w-full'
                            {...register("bio")}
                            placeholder='Enter your bio'
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <p>Avatar</p>
                        <CldUploadButton
                            options={{maxFiles:1}}
                            onUpload={handleUpload}
                            uploadPreset='a6qw5dqd'
                        >
                            <div 
                                className='
                                    relative
                                    top-14
                                    left-8

                                '
                            >
                                <BiSolidEdit 
                                    size={25}
                                    className='
                                        text-neutral-600
                                    '
                                />
                            </div>
                            
                            <Image 
                                src={avatar || currentUser?.avatar || "/images/placeholder.png"}
                                alt='Avatar'
                                height={400}
                                width={400}
                                className='p-5'
                            />
                        </CldUploadButton>
                        
                    </div>
                    <div>
                        <Button 
                            type='submit'
                            style='w-[25%]'
                            isDisabled={isLoading}
                            label='Update'
                        />
                    </div>
                </form>
                    <div className='mt-8 mr-5 grid gap-4'>
                        <hr className='text-neutral-400' />
                        <Button
                            isDisabled={isLoading}
                            style='w-[12rem]'
                            icon={AiOutlinePlus}
                            label='Add project'
                            onClick={() => {
                                projectModal.onOpen();
                            }}
                        />
                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default UpdatePage