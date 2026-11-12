"use client";

import { Children } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

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
