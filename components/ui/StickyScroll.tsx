"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { Project } from "@prisma/client";

interface StickyScrollPops{
  projects:Project[];
}

export const StickyScroll:React.FC<StickyScrollPops> = ({
  projects
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = projects.length;

  const latestRef = useRef<number>(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    latestRef.current = latest;
    const cardsBreakpoints = projects.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const backgroundColors = [
    "#0f172a",
    "#000000",
    "#171717",
  ];
  
  const linearGradients = [
    "linear-gradient(to bottom right, bg-cyan-500, bg-emerald-500)",
    "linear-gradient(to bottom right, bg-pink-500, bg-indigo-500)",
    "linear-gradient(to bottom right, bg-orange-500, bg-yellow-500)",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 no-scrollbar"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {projects.map((item, index) => (
            <div key={item?.pname || "" + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: latest > index / cardLength - 0.2 && latest <= index / cardLength ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item?.pname}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className="hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden"
      ></motion.div>
    </motion.div>
  );
};
