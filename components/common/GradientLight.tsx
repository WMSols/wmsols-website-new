import React from 'react';

interface GradientLightProps {
  size?: number | string;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  color?: string;
  className?: string;
}

export const GradientLight: React.FC<GradientLightProps> = ({
  size = 450,
  top = '200px',
  right = '0',
  bottom,
  left,
  // Equivalent to #0488C5 at 30% opacity
  color = 'rgba(4, 136, 197, 0.3)', 
  className = '',
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full pointer-events-none z-0 blur-[100px] ${className}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        top,
        right,
        bottom,
        left,
        backgroundColor: color,
      }}
    />
  );
};