"use client";

import { Children } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./variants";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function StaggerGrid({ className, children }: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {Children.toArray(children).map((child, i) => (
        <motion.div
          key={i}
          className="h-full"
          variants={fadeUp}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
