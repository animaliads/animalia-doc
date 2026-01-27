import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollFadeIn - A reusable component for smooth fade-in animations on scroll
 *
 * @param {React.ReactNode} children - Content to animate
 * @param {number} delay - Animation delay in seconds (default: 0)
 * @param {number} duration - Animation duration in seconds (default: 0.6)
 * @param {string} direction - Direction to slide from: 'up', 'down', 'left', 'right', or 'none' (default: 'up')
 * @param {number} distance - Distance to slide in pixels (default: 30)
 * @param {number} threshold - Intersection observer threshold 0-1 (default: 0.1)
 */
export default function ScrollFadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 30,
  threshold = 0.1,
  className = '',
  ...props
}) {
  // Calculate initial position based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      default:
        return {};
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.6, 0.01, 0.05, 0.95], // Smooth cubic bezier
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
