import React from "react";
import { cn } from "@/lib/utils";

/**
 * Section — Standardized vertical spacing primitive.
 * Enforces consistent section spacing across all responsive breakpoints.
 */
export function Section({
  children,
  className,
  spacing = "default",
  variant = "transparent",
  as: Component = "section",
  ...props
}) {
  const spacingClasses = {
    none: "",
    compact: "py-8 sm:py-12",
    default: "py-16 sm:py-20 lg:py-24",
    spacious: "py-20 sm:py-28 lg:py-32",
  };

  const variantClasses = {
    transparent: "",
    subtle: "bg-surface-subtle",
    elevated: "bg-surface-elevated border-y border-border",
  };

  return (
    <Component
      className={cn(
        "relative w-full",
        spacingClasses[spacing] || spacingClasses.default,
        variantClasses[variant] || variantClasses.transparent,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Section;

