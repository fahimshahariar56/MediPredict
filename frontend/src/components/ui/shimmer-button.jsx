"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * ShimmerButton — Magic UI inspired luxury CTA button with perimeter shimmer.
 * Engineered for primary clinical/AI call-to-action interactions.
 */
export const ShimmerButton = React.forwardRef(
  (
    {
      shimmerColor = "rgba(255, 255, 255, 0.45)",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "12px",
      background = "var(--primary)",
      className,
      children,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={{
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        }}
        ref={ref}
        disabled={disabled}
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-2.5 text-sm font-medium text-white transition-all duration-300",
          "[background:var(--bg)] [border-radius:var(--radius)]",
          "hover:scale-[1.01] active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "shadow-sm hover:shadow-md",
          className
        )}
        {...props}
      >
        {/* Spark container */}
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]"
          )}
        >
          {/* Spark */}
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            {/* Spark before */}
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>

        {/* Content container */}
        <span className="relative z-10 flex items-center gap-2">{children}</span>

        {/* Highlight overlay */}
        <div
          className={cn(
            "insert-0 absolute size-full",
            "rounded-[inherit] px-4 py-1.5 text-sm font-medium",
            "transform-gpu transition-all duration-300 ease-in-out",
            "group-hover:bg-white/[0.06] group-active:bg-white/[0.12]"
          )}
        />

        {/* Backdrop for inner cutoff */}
        <div
          className={cn(
            "absolute inset-[var(--cut)] -z-20",
            "[background:var(--bg)] [border-radius:var(--radius)]"
          )}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;

