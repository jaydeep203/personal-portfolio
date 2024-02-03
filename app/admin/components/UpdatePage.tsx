"use client";

import React, {useState, useCallback, useEffect} from 'react';
import { useSession } from 'next-auth/react';
import Input  from './Input';
import ImageUploader from './ImageUploader';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/exportLayout';
import { CldUploadButton } from 'next-cloudinary';
import { BiSolidEdit } from "react-icons/bi";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Certificate, Education, Project, User } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AiOutlinePlus } from 'react-icons/ai';
import useProjectModal from '@/hooks/useProjectModal';
import Card from './Card';
import CardCert from "@/components/certificates/Card";
import useCertificateModal from '@/hooks/useCertificateModal';
import { IconType } from 'react-icons';
import { skillsIcons } from '@/components/icons/icons';
import useEducationModal from '@/hooks/useEducationModal';
import ScrollAnimation from '@/components/animation/ScrollAnimation';
import {School, Computer} from "lucide-react";

interface UpdatePageProps{
    currentUser:User | null;
    projects: Project[];
    certificates: Certificate[];
    educations: Education[];
}

const UpdatePage:React.FC<UpdatePageProps> = ({
    currentUser,
    projects,
    certificates,
    educations
}) => {
    const [avatar, setAvatar] = useState(currentUser?.avatar || "");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const projectModal = useProjectModal();
    const educationModal = useEducationModal();
    const certificateModal = useCertificateModal();



    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues:{
            name:currentUser?.name || "",
            newEmail:currentUser?.email || "",
            bio:currentUser?.bio || "",
            resume: currentUser?.resume || "",
            resumePreview: currentUser?.resumePreview || "",
            resumeDescription: currentUser?.resumeDescription || ""
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
                w-full
                md:w-[80%]
                mx-auto
                p-1
                md:p-5
            '   
        >
            <div
                className='
                    w-full
                    md:w-[70%]
                    mx-auto
                    gap-5
                    p-1
                    md:p-5
                    bg-slate-900
                    rounded-md
                '
            >
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className='
                        md:mx-5
                        gap-5
                    '
                >
                    <div>
                        <h1 className='
                            text-white
                            font-bold
                            text-2xl
                            my-4
                        '>
                            Admin Panel
                        </h1>
                    </div>
                    <div
                        className='
                            text-neutral-300
                            mx-auto
                            w-full
                            p-1
                            md:w-[80%]
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
                            className='w-full bg-slate-900'
                            {...register("name")}
                            placeholder='Enter your name'
                        />
                    </div>
                    <div
                        className='
                        text-neutral-300
                        mx-auto
                        w-full
                        p-1
                        md:w-[80%]
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
                            className='w-full bg-slate-900'
                            {...register("newEmail")}
                            placeholder='Enter your new email'
                        />
                    </div>
                    <div
                        className='
                        text-neutral-300
                        mx-auto
                        w-full
                        p-1
                        md:w-[80%]
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
                            className='w-full bg-slate-900'
                            {...register("bio")}
                            placeholder='Enter your bio'
                        />
                    </div>
                    <div
                        className='
                        text-neutral-300
                        mx-auto
                        w-full
                        p-1
                        md:w-[80%]
                        gap-3
                    '
                    >
                        <p
                            className='font-semibold'
                        >
                            Resume Link
                        </p>
                        <Input 
                            id='resume'
                            disabled={isLoading}
                            className='w-full bg-slate-900'
                            {...register("resume")}
                            placeholder='Enter Resume Link'
                        />
                    </div>
                    <div
                        className='
                        text-neutral-300
                        mx-auto
                        w-full
                        p-1
                        md:w-[80%]
                        gap-3
                    '
                    >
                        <p
                            className='font-semibold'
                        >
                            Resume Preview Link
                        </p>
                        <Input 
                            id='resumePreview'
                            disabled={isLoading}
                            className='w-full bg-slate-900'
                            {...register("resumePreview")}
                            placeholder='Enter Resume Preview Link'
                        />
                    </div>
                    <div
                        className='
                        text-neutral-300
                        mx-auto
                        w-full
                        p-1
                        md:w-[80%]
                        gap-3
                    '
                    >
                        <p
                            className='font-semibold'
                        >
                            Resume Description
                        </p>
                        <Input 
                            id='resumeDescription'
                            disabled={isLoading}
                            className='w-full bg-slate-900'
                            {...register("resumeDescription")}
                            placeholder='Enter Resume Description'
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <p className='text-neutral-300'>Avatar</p>
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
                                    rounded-md
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
                                className='p-5 rounded-md'
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

                
                    <div className='mt-8 flex flex-row gap-6'>
                        
                        <Button
                            isDisabled={isLoading}
                            style='md:w-[12rem]'
                            icon={AiOutlinePlus}
                            label='Add project'
                            onClick={() => {
                                projectModal.onOpen();
                            }}
                        />
                    </div>

                {/* <Card
                    projects={projects}
                /> */}

                <div 
                    className='
                        p-4
                        gap-5
                        flex
                        w-full
                        flex-row
                        overflow-x-scroll
                        no-scrollbar
                    '
                >
                    {
                        projects?.map((project)=>{
                            return (
                                <div key={project.id}>
                                    <Card isAdmin={true} projects={project} />
                                </div>
                            )
                                
                        })
                        
                    }
                </div>
                
                <hr className='text-neutral-400 mt-4' />

                <div className='mt-8 flex flex-row gap-6'>
                        
                        <Button
                            isDisabled={isLoading}
                            style='md:w-[12rem]'
                            icon={AiOutlinePlus}
                            label='Add certificate'
                            onClick={() => {
                                certificateModal.onOpen();
                            }}
                        />
                        
                </div>
                
                <div 
                    className='
                        p-4
                        gap-5
                        flex
                        w-full
                        flex-row
                        overflow-x-scroll
                        no-scrollbar
                    '
                >
                    {
                        certificates?.map(({id, icon, title, description, verifyLink})=>(
                            
                                <div key={id}>
                                    <CardCert 
                                        isAdmin={true}
                                        title={title}
                                        description={description}
                                        verifyLink={verifyLink}
                                        iconName={icon}
                                    />
                                </div>
                            )
                                
                        )
                        
                    }
                </div>

                <hr className='text-neutral-400 mt-4' />

                <div className='mt-8 flex flex-row gap-6'>
                        
                        <Button
                            isDisabled={isLoading}
                            style='md:w-[12rem]'
                            icon={AiOutlinePlus}
                            label='Add education'
                            onClick={() => {
                                educationModal.onOpen();
                            }}
                        />
                        
                </div>
                
                <div 
                    className='
                        p-4
                        gap-5
                        flex
                        w-full
                        flex-row
                        overflow-x-scroll
                        no-scrollbar
                    '
                >
                    {
                        educations?.map(({id, title, school})=>(
                            
                            <div 
                                key={id}
                                 className='
                                    px-2 
                                    w-[90%] 
                                    sm:min-w-[40%]
                                    py-5 
                                    text-white
                                    hover:bg-slate-700 
                                    hover:bg-opacity-30 
                                    flex 
                                    flex-col 
                                    gap-4
                                '>
                                <ScrollAnimation>
                                    <School className='w-12 h-12' />
                                </ScrollAnimation>
                                <ScrollAnimation>
                                    <h1 className='text-2xl font-bold'>
                                        {title}
                                    </h1>
                                </ScrollAnimation>
                                <ScrollAnimation>
                                    <p className='opacity-60'>{school}</p>
                                </ScrollAnimation>
                            </div>
                            )
                                
                        )
                        
                    }
                </div>

            </div>
        </div>
    </div>
  )
}

export default UpdatePage;