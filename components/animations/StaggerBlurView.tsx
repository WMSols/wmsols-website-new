"use client";

import React, { ReactNode } from "react";
// 1. Import the Variants type from framer-motion
import { motion, Variants } from "framer-motion";

interface StaggerBlurViewProps {
  children: ReactNode;
  staggerDelay?: number;
  blurAmount?: string;
  className?: string;
}

export default function StaggerBlurView({ 
  children, 
  staggerDelay = 0.15, 
  blurAmount = "15px", 
  className = "" 
}: StaggerBlurViewProps) {
  
  // 2. Explicitly type as Variants
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  // 3. Explicitly type as Variants
  const itemVariants: Variants = {
    hidden: { 
      filter: `blur(${blurAmount})`, 
      opacity: 0, 
      y: 10 
    },
    show: { 
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
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;
        
        return (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}