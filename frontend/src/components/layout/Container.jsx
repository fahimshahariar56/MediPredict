import React from "react";
import { cn } from "@/lib/utils";

/**
 * Container — Standardized responsive container wrapper.
 * Ensures consistent gutter spacing across mobile, tablet, laptop, and desktop viewports.
 */
export function Container({
  children,
  className,
  size = "default",
  as: Component = "div",
  ...props
}) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[90rem]",
    full: "w-full",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size] || sizeClasses.default,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;

