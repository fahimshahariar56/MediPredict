import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Loader — Clinical spinner component for loading states.
 */
export function Loader({
  size = "md",
  variant = "primary",
  label,
  className,
  ...props
}) {
  const sizeClasses = {
    xs: "size-3.5",
    sm: "size-4",
    md: "size-5",
    lg: "size-7",
    xl: "size-10",
  };

  const variantClasses = {
    primary: "text-primary",
    white: "text-white",
    muted: "text-muted-foreground",
    navy: "text-brand-navy",
  };

  return (
    <div
      role="status"
      aria-label={label || "Loading"}
      className={cn("inline-flex items-center justify-center gap-2", className)}
      {...props}
    >
      <Loader2
        className={cn(
          "animate-spin",
          sizeClasses[size] || sizeClasses.md,
          variantClasses[variant] || variantClasses.primary
        )}
      />
      {label && (
        <span className="text-sm font-medium text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  );
}

export default Loader;

