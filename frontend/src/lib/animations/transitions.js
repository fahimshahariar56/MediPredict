/**
 * MediPredict Animation Transitions & Easings
 * Purposeful, performant, Apple-like smooth animation curves.
 */

export const EASINGS = {
  // Apple-like deceleration curve
  apple: [0.16, 1, 0.3, 1],
  // Standard material/smooth ease
  standard: [0.4, 0, 0.2, 1],
  // Soft hover ease
  subtle: [0.25, 0.1, 0.25, 1],
  // Snappy interaction
  snappy: [0.2, 0.8, 0.2, 1],
};

export const DURATIONS = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.35,
  slow: 0.5,
  smooth: 0.7,
};

export const SPRINGS = {
  gentle: {
    type: "spring",
    stiffness: 120,
    damping: 18,
    mass: 0.8,
  },
  snappy: {
    type: "spring",
    stiffness: 260,
    damping: 24,
    mass: 0.6,
  },
  bouncy: {
    type: "spring",
    stiffness: 300,
    damping: 15,
  },
};

export const TRANSITIONS = {
  default: {
    duration: DURATIONS.normal,
    ease: EASINGS.apple,
  },
  fast: {
    duration: DURATIONS.fast,
    ease: EASINGS.apple,
  },
  hover: {
    duration: DURATIONS.fast,
    ease: EASINGS.subtle,
  },
};

export default TRANSITIONS;

