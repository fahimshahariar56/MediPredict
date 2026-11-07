"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle({ className, size = "default" }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div
        className={cn(
          "size-9 rounded-xl border border-border/60 bg-surface-subtle/50 opacity-50",
          className
        )}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={cn(
        "relative flex size-9 items-center justify-center rounded-xl border border-border/80 bg-background/80 text-foreground transition-all duration-200 hover:bg-surface-subtle hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-xs",
        className
      )}
    >
      <Sun
        className={cn(
          "size-4 transition-all duration-300 absolute",
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100 text-amber-500"
        )}
      />
      <Moon
        className={cn(
          "size-4 transition-all duration-300 absolute",
          isDark
            ? "rotate-0 scale-100 opacity-100 text-sky-400"
            : "-rotate-90 scale-0 opacity-0"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

export default ThemeToggle;
