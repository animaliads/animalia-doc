import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollStagger - A container component that staggers the animation of its children
 *
 * @param {React.ReactNode} children - Child elements to animate with stagger effect
 * @param {number} staggerDelay - Delay between each child animation in seconds (default: 0.1)
 * @param {number} duration - Animation duration for each child in seconds (default: 0.6)
 * @param {string} direction - Direction to slide from: 'up', 'down', 'left', 'right', or 'none' (default: 'up')
 * @param {number} distance - Distance to slide in pixels (default: 30)
 * @param {number} threshold - Intersection observer threshold 0-1 (default: 0.1)
 */
export default function ScrollStagger({
  children,
  staggerDelay = 0.1,
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const childVariants = {
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
        ease: [0.6, 0.01, 0.05, 0.95], // Smooth cubic bezier
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
