"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AlertCircle, ArrowRight, Mail, RefreshCw, Sparkles, CheckCircle2 } from "lucide-react";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { OtpInput } from "@/features/auth/components/OtpInput";
import { AuthNotice } from "@/features/auth/components/AuthNotice";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function VerifyEmailForm() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email") || "dr.smith@hospital.org";

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [verifiedNotice, setVerifiedNotice] = useState(false);
  const [cooldown, setCooldown] = useState(45);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((c) => (c > 0 ? c - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleQuickFill = () => {
    setOtp("842196");
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length < 6) {
      setError("Please enter all 6 digits of your verification code.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVerifiedNotice(true);
    }, 850);
  };

  const handleReset = () => {
    setVerifiedNotice(false);
    setOtp("");
    setError("");
  };

  return (
    <AuthLayout
      badgeText="Identity Verification"
      heading="Verify your email"
      subheading={`We've dispatched a 6-digit confirmation code to ${emailParam}.`}
      illustration="/assets/Cardiologist-rafiki.png"
      illustrationAlt="Cardiologist verifying diagnostic system credentials"
    >
      {verifiedNotice ? (
        <AuthNotice
          title="Verification Code Validated"
          message={`Code "${otp}" format and length passed all frontend validation standards.`}
          technicalNote="In Phase 12 (API Integration), this OTP will be checked against the backend token store (Redis/MongoDB) to activate the user's account. No fake activation was performed."
          onReset={handleReset}
          primaryActionLabel="Proceed to Sign In"
          primaryActionHref="/login"
        />
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Email Badge & Quick Fill */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border/80 bg-surface-subtle p-3 text-xs">
            <div className="flex items-center gap-1.5 text-muted-foreground truncate max-w-[220px] sm:max-w-none">
              <Mail className="size-3.5 text-primary shrink-0" />
              <span className="truncate font-medium text-foreground">{emailParam}</span>
            </div>
            <button
              type="button"
              onClick={handleQuickFill}
              className="text-[11px] font-semibold text-primary hover:underline"
            >
              Auto-fill demo OTP (842196)
            </button>
          </div>

          {/* 6-digit OTP Input */}
          <div className="space-y-2 text-center">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
              6-Digit Verification Code
            </label>
            <OtpInput
              value={otp}
              onChange={(val) => {
                setOtp(val);
                if (error) setError("");
              }}
              error={!!error}
            />
            {error && (
              <p className="flex items-center justify-center gap-1 text-xs text-destructive pt-1" role="alert">
                <AlertCircle className="size-3 shrink-0" />
                <span>{error}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="default"
            size="lg"
            loading={loading}
            className="w-full h-11 text-sm font-semibold rounded-xl shadow-sm gap-2"
          >
            <CheckCircle2 className="size-4" />
            <span>Verify & Activate Access</span>
          </Button>

          {/* Resend Cooldown */}
          <div className="pt-2 text-center text-xs text-muted-foreground">
            <span>Didn&apos;t receive the code? </span>
            <button
              type="button"
              disabled={cooldown > 0}
              onClick={() => setCooldown(60)}
              className="text-primary font-semibold hover:underline disabled:opacity-50 inline-flex items-center gap-1"
            >
              <RefreshCw className="size-3" />
              <span>{cooldown > 0 ? `Resend code in ${cooldown}s` : "Resend code"}</span>
            </button>
          </div>

          {/* Link back to login */}
          <div className="pt-1 text-center text-xs text-muted-foreground border-t border-border/70">
            Wrong institutional email?{" "}
            <Link
              href="/register"
              className="text-primary font-semibold underline-offset-4 hover:underline"
            >
              Re-enter registration
            </Link>
          </div>
        </form>
      )}
    </AuthLayout>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-sm text-muted-foreground">
          Loading verification portal…
        </div>
      }
    >
      <VerifyEmailForm />
    </Suspense>
  );
}

