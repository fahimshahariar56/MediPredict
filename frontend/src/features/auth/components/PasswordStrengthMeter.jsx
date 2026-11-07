"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function evaluatePasswordStrength(password = "") {
  const criteria = [
    { id: "length", label: "At least 8 characters", met: password.length >= 8 },
    { id: "lowercase", label: "Lowercase letter (a-z)", met: /[a-z]/.test(password) },
    { id: "uppercase", label: "Uppercase letter (A-Z)", met: /[A-Z]/.test(password) },
    { id: "number", label: "At least one number (0-9)", met: /[0-9]/.test(password) },
    { id: "special", label: "Special symbol (!@#$%^&*)", met: /[^A-Za-z0-9]/.test(password) },
  ];

  const metCount = criteria.filter((c) => c.met).length;

  let score = 0; // 0 - 4
  let label = "Enter a password";
  let color = "bg-muted";
  let textColor = "text-muted-foreground";

  if (password.length > 0) {
    if (metCount <= 2) {
      score = 1;
      label = "Weak";
      color = "bg-destructive";
      textColor = "text-destructive";
    } else if (metCount === 3) {
      score = 2;
      label = "Fair";
      color = "bg-amber-500";
      textColor = "text-amber-600 dark:text-amber-400";
    } else if (metCount === 4) {
      score = 3;
      label = "Good";
      color = "bg-blue-500";
      textColor = "text-blue-600 dark:text-blue-400";
    } else if (metCount === 5) {
      score = 4;
      label = "Strong";
      color = "bg-success";
      textColor = "text-success";
    }
  }

  return { criteria, metCount, score, label, color, textColor };
}

export function PasswordStrengthMeter({ password = "", showCriteria = true }) {
  const { criteria, score, label, color, textColor } = evaluatePasswordStrength(password);

  if (!password && !showCriteria) return null;

  return (
    <div className="space-y-2.5 pt-1 text-xs">
      {/* 4-segment visual progress bar */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between font-medium">
          <span className="text-muted-foreground">Password strength:</span>
          <span className={cn("font-semibold tracking-wide", textColor)}>
            {label}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-1.5 h-1.5 w-full">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={cn(
                "h-full rounded-full transition-all duration-300",
                step <= score ? color : "bg-muted/80"
              )}
            />
          ))}
        </div>
      </div>

      {/* Checklist criteria */}
      {showCriteria && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-[11px] text-muted-foreground">
          {criteria.map((c) => (
            <li key={c.id} className="flex items-center gap-1.5">
              {c.met ? (
                <Check className="size-3 text-success shrink-0" />
              ) : (
                <X className="size-3 text-muted-foreground/60 shrink-0" />
              )}
              <span className={cn(c.met && "text-foreground font-medium")}>
                {c.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PasswordStrengthMeter;
