"use client";
import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from '../exportLayout';

interface ModalProps{
  title:string;
  isOpen: boolean;
  children: React.ReactNode;
  isLoading:boolean;
  handleClose: () => void;
  handleSubmit: () => void;
}

const Modal:React.FC<ModalProps> = ({
  title,
  isOpen,
  handleClose,
  isLoading,
  handleSubmit,
  children
}) => {

if(!isOpen){
      return null;
  }
  

  return (
    <div className='
      justify-center
      items-center
      flex
      overflow-x-hidden
      overflow-y-auto
      fixed
      inset-0
      z-50
      outline-none
      bg-neutral-800
      bg-opacity-70
      
     '>
        <div className='
          relative
          w-full
          lg:w-3/6
          my-6
          mx-auto
          lg:max-w-3xl
          h-full
        '>
            {/* content */}
            <form 
              onSubmit={handleSubmit}
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
            '>
              {/* Header */}
              <div className='
                flex
                items-center
                justify-between
                p-10
                rounded-t
              '>
                <h3 className='text-3xl font-semibold text-white'>{title}</h3>
                <button onClick={handleClose} //handleClose
                  className='
                    p-1
                    ml-auto
                    border-0
                    text-white
                    hover:opacity-70
                    transition
                  '
                ><AiOutlineClose size={20} /></button>
              </div>
              {/* body */}
              <div className='
                relative p-10 flex-auto
              '>
                {children}
              </div>
              {/* footer */}
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
  )
}

export default Modal