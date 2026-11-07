"use client";

import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "@/lib/animations/motion-variants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

/**
 * FadeIn — Smooth entrance animation wrapper.
 * Direction: 'up' | 'down' | 'left' | 'right' | 'none'
 */
export function FadeIn({
  children,
  className,
  direction = "up",
  distance = 20,
  delay = 0,
  duration,
  once = true,
  ...props
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className} {...props}>{children}</div>;
  }

  const variants = fadeIn(direction, distance, delay);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;

