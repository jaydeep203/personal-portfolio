"use client";
import React , { useCallback, useState }  from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {AnimatePresence, delay, motion} from 'framer-motion';
import {Button} from '@/components/exportLayout';


interface ButtonProps {
  navs:Record<string, any>;
}



const MenuBtn = ({navs}:ButtonProps) => {

    const [open, setOpen] = useState(false);

    

    const OnOpen = useCallback(()=>{
        setOpen(true);
    }, [setOpen, open]);

    const OnClose = useCallback(()=>{
        setOpen(false);
    }, [setOpen, open]);



    const item={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1
        },
        exit:{
            opacity:0,
            y:"-20px"
        }
      }

    const linkElements = {
        hidden:{
            opacity:0,
            y:"-20px"
        },
        visible:{
            opacity:1,
            y:"20px"
        },
        exit:{
            opacity:0,
            y:"-20px"
        }
    }
      const Icon = open ? AiOutlineCloseCircle : FiMenu;

  return (
    <>

    
    <button
        className='md:hidden z-[1]'
    >
      <Icon onClick={open? OnClose : OnOpen} size={28} color='white' />
    </button>
    <AnimatePresence mode='wait'>
    { open && <motion.div
        variants={item}
        initial ="hidden"
        animate = "visible"
        exit="exit"
        transition={{ delay:0.2, duration:0.5}}
    className='
            fixed
            w-full
            h-screen
            flex
            flex-col
            justify-center
            items-center
            bg-black
            opacity-[0.5]
            backdrop-blur-3xl
            
        '>
            <div 
                className='
                    w-[80%]
                    h-[80%]
                '
            >

            
            {
                
                navs.map((nav:Record<string, any>)=>(
                    <motion.div 
                        variants={linkElements}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{delay:0.2, duration:0.5}}
                    >
                        <Link href={nav.href} key={nav.label} className='
                        text-white
                        h-20
                        pl-[2rem]
                        border-solid
                        border-white
                        hover:bg-slate-800
                        font-semibold
                        border-b
                        flex
                        items-center
                        '>{nav.label}</Link>
                    </motion.div>
                    
                ))
            }
            <motion.div
            variants={linkElements}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{delay:0.3, duration:0.5}}
            className='
                h-20
                mt-[20px]
                flex
                items-center
                justify-center
                border-solid
                border-white
                border-b-[0.2px]
            '>
                <Button label='Get in touch' 
                    style='
                    bg-white
                    p-[0.5rem] 
                    w-[55%]
                    rounded-md 
                    font-semibold 
                    text-black 
                    hover:bg-slate-300 
                    transition
                    '
                />
            </motion.div>
        
        </div>
            
        </motion.div> }
        </AnimatePresence>

    </>
  )
}

export default MenuBtn;