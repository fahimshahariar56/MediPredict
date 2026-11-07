"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, Mail, Send, CheckCircle2, RefreshCw } from "lucide-react";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { AuthNotice } from "@/features/auth/components/AuthNotice";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sentNotice, setSentNotice] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const validate = () => {
    if (!email.trim()) {
      return "Work email is required.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return "Please enter a valid institutional email.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSentNotice(true);
      setCooldown(60);
    }, 800);
  };

  const handleReset = () => {
    setSentNotice(false);
    setEmail("");
    setError("");
  };

  return (
    <AuthLayout
      variant="centered"
      badgeText="Account Recovery"
      heading="Reset your password"
      subheading="Enter the institutional email associated with your practitioner account, and we'll dispatch a secure recovery link."
      illustration="/assets/Diabetes-rafiki.png"
      illustrationAlt="Medical professional accessing clinical portal"
    >
      {sentNotice ? (
        <div className="space-y-5 animate-in fade-in zoom-in-95 duration-200">
          <AuthNotice
            title="Recovery Dispatch Validated"
            message={`A secure password reset request for "${email}" was processed.`}
            technicalNote="In Phase 12 (API Integration), this form triggers a signed, time-limited cryptographic token emailed via the SMTP microservice. For UI review, you can directly inspect the Reset Password screen."
            onReset={handleReset}
            primaryActionLabel="Inspect Reset Password UI"
            primaryActionHref="/reset-password"
          />

          <div className="pt-2 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
            <span>Didn&apos;t receive the email?</span>
            <button
              type="button"
              disabled={cooldown > 0}
              onClick={() => setCooldown(60)}
              className="text-primary font-semibold hover:underline disabled:opacity-50 inline-flex items-center gap-1"
            >
              <RefreshCw className="size-3" />
              <span>{cooldown > 0 ? `Resend in ${cooldown}s` : "Resend recovery link"}</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Institutional / Work Email <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="dr.smith@hospital.org"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                aria-invalid={!!error}
                aria-describedby={error ? "email-error" : undefined}
                className={[
                  "flex h-11 w-full rounded-xl border border-input bg-background/80 px-3.5 py-2 text-sm transition-all duration-200 outline-none",
                  "placeholder:text-muted-foreground/60",
                  "focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20",
                  error && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
                ].join(" ")}
              />
            </div>
            {error && (
              <p id="email-error" className="flex items-center gap-1 text-xs text-destructive pt-0.5" role="alert">
                <AlertCircle className="size-3 shrink-0" />
                <span>{error}</span>
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="default"
            size="lg"
            loading={loading}
            className="w-full h-11 text-sm font-semibold rounded-xl shadow-sm gap-2"
          >
            <Send className="size-4" />
            <span>Send Recovery Link</span>
          </Button>

          <div className="pt-2 text-center text-xs sm:text-sm text-muted-foreground">
            Remember your credentials?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold underline-offset-4 hover:underline inline-flex items-center gap-1"
            >
              <ArrowLeft className="size-3" />
              <span>Back to sign in</span>
            </Link>
          </div>
        </form>
      )}
    </AuthLayout>
  );
}

