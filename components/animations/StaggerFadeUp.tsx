"use client";

import { Children } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./variants";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function StaggerFadeUp({ className, children }: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {Children.toArray(children).map((child, i) => (
        <motion.div key={i} variants={fadeUp}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
