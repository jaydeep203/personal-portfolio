import React from 'react';
import {
  FaEnvira,
  FaGithub,
  BsLinkedin,
  HiOutlineMail,
  Linkedin,
  Github,
  AtSign,
  SiLeetcode,
  SiGeeksforgeeks
} from "@/components/icons/icons";



const Footer = () => {
  return (
    <div 
      id='footer'
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
          className='gap-2 p-3 flex flex-col items-center'
        >
          <h1 className='text-white font-bold text-lg'>Contact</h1>
          <a href='mailto:jaydeepdeshpande03outlook.com' className='text-neutral-300 hover:underline'>jaydeepdeshpande03@outlook.com</a>
        </div>
        <div className='gap-3 flex flex-col items-center p-3'>
          <h1 className='text-white font-bold text-lg'>Follow us</h1>
          <div className='
            flex
            flex-row
            items-center
            justify-center
            py-5
            px-2
            gap-5
          '>
            <a href="https://www.linkedin.com/in/jaydeep-deshpande-68601822a/" target='blank'><Linkedin className='text-white hover:text-blue-600' size={30} /> </a>
            <a href="https://github.com/jaydeep203" target='blank'><Github className='text-white hover:text-slate-400' size={30} /> </a>
            <a href="https://leetcode.com/mrjaydeep2003/" target='blank'><SiLeetcode className='text-white hover:text-yellow-700' size={30} /> </a>
            <a href="https://auth.geeksforgeeks.org/user/mrjaydeep2003/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target='blank'><SiGeeksforgeeks className='text-white hover:text-green-700' size={30} /> </a>
            <a href="mailto:jaydeepdeshpande03@outlook.com" target='blank'><AtSign className='text-white hover:text-red-400' size={30} /> </a>
          </div>
        </div>
      </div>
      <div 
        className='
          grid
          grid-cols-1
          md:grid-cols-2
          items-center
          justify-center
          mt-10
          gap-8
        '
      >
        <div className='flex flex-col md:flex-row gap-8 items-center justify-center'>
          <p className='text-neutral-400'>Privacy policy</p>
          <p className='text-neutral-400'>Terms of service</p>
        </div>
        <p className='text-neutral-400 text-center'>@2023 Jaydeep. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer