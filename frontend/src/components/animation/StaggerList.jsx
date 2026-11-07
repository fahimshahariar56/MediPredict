"use client";

import React from "react";
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "@/lib/animations/motion-variants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function StaggerList({
  children,
  className,
  staggerChildren = 0.08,
  delayChildren = 0.05,
  once = true,
  ...props
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className} {...props}>{children}</div>;
  }

  const variants = staggerContainer(staggerChildren, delayChildren);

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

export function StaggerItem({ children, className, ...props }) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className} {...props}>{children}</div>;
  }

  return (
    <motion.div variants={staggerItem} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
}

export default StaggerList;

