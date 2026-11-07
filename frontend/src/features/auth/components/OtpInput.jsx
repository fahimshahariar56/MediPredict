"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * 6-digit OTP / Verification Code Input
 * Features: auto-advance, backspace navigation, paste handling, accessible ARIA labels.
 */
export function OtpInput({
  value = "",
  onChange,
  length = 6,
  disabled = false,
  error = false,
  className,
}) {
  const inputRefs = useRef([]);

  // Ensure digits array matches length
  const digits = Array.from({ length }, (_, i) => value[i] || "");

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!digits[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      e.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleChange = (index, e) => {
    const rawVal = e.target.value;
    const char = rawVal.replace(/\D/g, "").slice(-1);

    const newDigits = [...digits];
    newDigits[index] = char;
    const combined = newDigits.join("");
    onChange(combined);

    if (char && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!pasted) return;

    onChange(pasted);
    const targetIdx = Math.min(pasted.length, length - 1);
    inputRefs.current[targetIdx]?.focus();
  };

  return (
    <div
      className={cn("flex items-center justify-center gap-2 sm:gap-3", className)}
      onPaste={handlePaste}
    >
      {digits.map((digit, i) => (
        <input
          key={i}
          ref={(el) => (inputRefs.current[i] = el)}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={digit}
          disabled={disabled}
          onChange={(e) => handleChange(i, e)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          aria-label={`Digit ${i + 1} of verification code`}
          className={cn(
            "size-11 sm:size-12 text-center text-lg sm:text-xl font-bold font-mono rounded-xl border border-input bg-background/80 transition-all duration-200 outline-none select-none",
            "focus:border-primary focus:ring-3 focus:ring-primary/20",
            digit ? "border-primary/50 text-foreground" : "text-muted-foreground",
            error && "border-destructive focus:border-destructive focus:ring-destructive/20",
            disabled && "cursor-not-allowed opacity-50"
          )}
        />
      ))}
    </div>
  );
}

export default OtpInput;
