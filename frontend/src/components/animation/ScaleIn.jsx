"use client";

import React from "react";
import { motion } from "motion/react";
import { scaleIn } from "@/lib/animations/motion-variants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function ScaleIn({
  children,
  className,
  delay = 0,
  initialScale = 0.95,
  once = true,
  ...props
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className} {...props}>{children}</div>;
  }

  const variants = scaleIn(delay, initialScale);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default ScaleIn;

