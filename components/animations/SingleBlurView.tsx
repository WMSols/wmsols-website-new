"use client";

import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface SingleBlurViewProps {
  children: ReactNode;
  blurAmount?: string;
  className?: string;
  yOffset?: number;
}

export default function SingleBlurView({ 
  children, 
  blurAmount = "15px", 
  className = "",
  yOffset = 20 // How far it moves up while unblurring
}: SingleBlurViewProps) {
  
  // Explicitly typed as Variants to prevent TypeScript errors
  const variants: Variants = {
    hidden: { 
      filter: `blur(${blurAmount})`, 
      opacity: 0, 
      y: yOffset 
    },
    visible: { 
      filter: "blur(0px)", 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      // once: false is the magic that makes it reverse when scrolling out
      // margin: "-15%" makes it wait until it's slightly inside the screen to trigger
      viewport={{ once: true, margin: "-15%" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}