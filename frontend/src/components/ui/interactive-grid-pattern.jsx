"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * InteractiveGridPattern — Magic UI inspired mathematical medical grid pattern.
 * High performance SVG grid with subtle interactive hover glow.
 */
export function InteractiveGridPattern({
  width = 32,
  height = 32,
  squares = [24, 24],
  className,
  squaresClassName,
  ...props
}) {
  const [hoveredSquare, setHoveredSquare] = useState(null);

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 size-full stroke-primary/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] dark:stroke-primary/15",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id="interactive-grid-pattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x="-1"
          y="-1"
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray="0"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#interactive-grid-pattern)"
      />
    </svg>
  );
}

export default InteractiveGridPattern;
