"use client";

import { motion, useScroll, useTransform } from "framer-motion";


interface ScrollProgressProps{
    children: React.ReactNode;
}

export const ScrollProgress:React.FC<ScrollProgressProps> = ({ children }) => {

const { scrollYProgress } = useScroll();
const scale = useTransform(scrollYProgress, [0, 1], [0.3, 2]);
  
return (
  <motion.div
    style={{ scale }}
  >
    <motion.div
      style={{
        scaleY: scrollYProgress
      }}
    />
    {children}
  </motion.div>
)

};

