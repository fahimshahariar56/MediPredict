/**
 * MediPredict Motion Variants
 * High-performance, accessible animation variants for Framer Motion.
 */

import { EASINGS, DURATIONS } from "./transitions";

export const fadeIn = (direction = "up", distance = 20, delay = 0) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return {
    hidden: {
      opacity: 0,
      ...(directions[direction] || {}),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: DURATIONS.normal,
        ease: EASINGS.apple,
        delay,
      },
    },
  };
};

export const scaleIn = (delay = 0, initialScale = 0.96) => ({
  hidden: {
    opacity: 0,
    scale: initialScale,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATIONS.fast,
      ease: EASINGS.apple,
      delay,
    },
  },
});

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.05) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.apple,
    },
  },
};

export const cardHover = {
  initial: {
    y: 0,
    boxShadow: "var(--shadow-card)",
  },
  hover: {
    y: -3,
    boxShadow: "var(--shadow-card-hover)",
    transition: {
      duration: DURATIONS.fast,
      ease: EASINGS.subtle,
    },
  },
  tap: {
    y: 0,
    scale: 0.99,
  },
};

export const pulseGlow = {
  initial: { opacity: 0.6, scale: 1 },
  animate: {
    opacity: [0.6, 1, 0.6],
    scale: [1, 1.02, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

