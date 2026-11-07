"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * SpotlightCard — React Bits & 21st.dev inspired card with cursor-following radial spotlight.
 * Seamlessly adapts to Light and Dark themes with subtle clinical glow.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(56, 189, 248, 0.12)",
  spotlightBorderColor = "rgba(56, 189, 248, 0.35)",
  ...props
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-3xl border border-border/80 bg-card p-6 sm:p-8 text-card-foreground shadow-xs transition-all duration-300 overflow-hidden group",
        "hover:shadow-md hover:border-primary/40",
        className
      )}
      {...props}
    >
      {/* Background radial spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />
      {/* Subtle border highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 border"
        style={{
          borderColor: spotlightBorderColor,
          maskImage: `radial-gradient(200px circle at ${position.x}px ${position.y}px, black 30%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(200px circle at ${position.x}px ${position.y}px, black 30%, transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default SpotlightCard;
