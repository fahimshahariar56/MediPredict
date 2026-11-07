"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Info, ArrowRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * AuthNotice: High-transparency interactive state presentation.
 * Communicates that frontend validation was successful while keeping
 * the strict Phase 04 boundary (No fake backend authentication).
 */
export function AuthNotice({
  title = "Frontend Validation Passed",
  message,
  technicalNote = "Backend authentication services (JWT, session storage, and database persistence) will be integrated in Phase 12.",
  onReset,
  primaryActionLabel = "Back to Sign In",
  primaryActionHref = "/login",
}) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-7 text-left space-y-4 animate-in fade-in zoom-in-95 duration-200">
      <div className="flex items-start gap-3.5">
        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
          <CheckCircle2 className="size-5" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-heading font-semibold text-base text-foreground">
              {title}
            </h3>
            <Badge variant="info" className="text-[10px] px-2 py-0.5">
              Phase 04 UI
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {message}
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-border/80 bg-background/80 p-3.5 text-xs text-muted-foreground flex items-start gap-2.5">
        <Info className="size-4 text-primary shrink-0 mt-0.5" />
        <span className="leading-relaxed">{technicalNote}</span>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        {onReset && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onReset}
            className="gap-1.5"
          >
            <RefreshCw className="size-3.5" />
            <span>Try Another Input</span>
          </Button>
        )}
        {primaryActionHref && (
          <Button asChild variant="navy" size="sm" className="gap-1.5">
            <Link href={primaryActionHref}>
              <span>{primaryActionLabel}</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}

export default AuthNotice;
