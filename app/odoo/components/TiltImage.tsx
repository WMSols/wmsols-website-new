'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

type TiltImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function TiltImage({ src, alt, className = '', priority = false }: TiltImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const spring = { stiffness: 260, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), spring);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className={`[perspective:1000px] ${className}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
        />
        <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply pointer-events-none" />
      </motion.div>
    </div>
  );
}
