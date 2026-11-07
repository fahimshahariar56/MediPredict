/**
 * Lenis Smooth Scroll Configuration
 * Provides smooth, accessible momentum scrolling across pages.
 */

export const LENIS_CONFIG = {
  duration: 1.1,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  gestureOrientation: "vertical",
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.5,
  infinite: false,
};

