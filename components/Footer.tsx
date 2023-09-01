import React from 'react';
import {
  FaEnvira,
  FaGithub,
  BsLinkedin,
  HiOutlineMail
} from "@/components/icons/icons";

const Footer = () => {
  return (
    <div 
      className='
        bg-slate-900
        px-10
        py-20
        gap-10
      '
    >
      <div
        className='
          text-white
          grid
          grid-cols-1
          sm:grid-cols-3
        '
      >
        <div
          className='
            m-auto
            text-white
            font-semibold
            text-2xl
            p-3
            flex
            items-center
            justify-center
            gap-3
          '
        >
          <FaEnvira size={45} color='green' /> Jaydeep
        </div>
        <div
          className='gap-2 p-3'
        >
          <h1 className='text-white font-bold text-lg'>Contact</h1>
          <p className='text-neutral-300'>jaydeepdeshpande03@outlook.com</p>
        </div>
        <div className='gap-3 p-3'>
          <h1 className='text-white font-bold text-lg'>Follow us</h1>
          <div className='
            flex
            flex-row
            py-5
            px-2
            gap-5
          '>
            <a href="https://www.linkedin.com/in/jaydeep-deshpande-68601822a/"><BsLinkedin className='text-white hover:text-blue-600' size={30} /> </a>
            <a href="https://github.com/jaydeep203"><FaGithub className='text-white hover:text-slate-400' size={30} /> </a>
            <a href="mailto:jaydeepdeshpande03@outlook.com"><HiOutlineMail className='text-white hover:text-red-400' size={30} /> </a>
          </div>
        </div>
      </div>
      <div 
        className='
          grid
          grid-cols-2
          items-center
          justify-center
          mt-10
        '
      >
        <div className='flex flex-row gap-8 items-center justify-center'>
          <p className='text-neutral-400'>Privacy policy</p>
          <p className='text-neutral-400'>Terms of service</p>
        </div>
        <p className='text-neutral-400 text-center'>@2023 Jaydeep. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer