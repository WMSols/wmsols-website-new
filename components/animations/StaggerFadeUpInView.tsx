"use client";

import { Children } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "./variants";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.5 },
  },
};

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function StaggerFadeUpInView({ className, children }: Props) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
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
