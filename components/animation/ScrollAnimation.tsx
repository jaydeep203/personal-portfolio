"use client";

import React, {useRef, useEffect} from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface scrollAnimationProps{
    children: React.ReactNode;
    width?: "fit-content" | "100%";
}

const ScrollAnimation:React.FC<scrollAnimationProps> = ({
    children,
    width="fit-content"
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    const mainControls = useAnimation();
    const slideControl = useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
            slideControl.start("visible");
        }
    }, [isInView]);

  return (
    <div ref={ref} style={{position:"relative", width , overflow:"hidden"}} >
        <motion.div
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.7, delay: 0.30}}
        >
            {children}
        </motion.div>
        <motion.div
            variants={{
                hidden:{left: 0},
                visible: {left: "100%"}
            }}
            initial="hidden"
            animate={slideControl}
            transition={{ duration:0.4, ease:"easeIn"}}
            className='bg-opacity-60 bg-slate-800'
            style={{
                position: 'absolute',
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                zIndex: 20
            }}

        />
    </div>
  )
}

export default ScrollAnimation;