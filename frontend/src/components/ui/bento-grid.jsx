"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function BentoGrid({ children, className }) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[20rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta = "Explore model",
  badge,
}) {
  return (
    <div
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300",
        "hover:shadow-md hover:border-primary/40",
        className
      )}
    >
      {/* Background Graphic Container */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-90 transition-transform duration-500 group-hover:scale-105 pointer-events-none">
        {background}
      </div>

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex size-11 items-center justify-center rounded-2xl bg-surface-subtle border border-border/80 text-primary shadow-xs transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {Icon && <Icon className="size-5" />}
        </div>
        {badge && (
          <span className="text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary">
            {badge}
          </span>
        )}
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 space-y-2 pt-6">
        <h3 className="font-heading font-bold text-xl tracking-tight text-foreground transition-colors group-hover:text-primary">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>

        {href && (
          <div className="pt-2">
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline underline-offset-4"
            >
              <span>{cta}</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>

      {/* Subtle bottom gradient glow */}
      <div className="pointer-events-none absolute -bottom-10 -right-10 size-40 rounded-full bg-primary/[0.06] blur-2xl group-hover:bg-primary/[0.12] transition-colors" />
    </div>
  );
}

export default BentoGrid;
