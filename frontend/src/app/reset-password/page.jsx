"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AlertCircle, ArrowRight, KeyRound, CheckCircle2 } from "lucide-react";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { PasswordInput } from "@/features/auth/components/PasswordInput";
import { PasswordStrengthMeter, evaluatePasswordStrength } from "@/features/auth/components/PasswordStrengthMeter";
import { AuthNotice } from "@/features/auth/components/AuthNotice";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "demo-token-phase-04";

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    const { score } = evaluatePasswordStrength(formData.password);

    if (!formData.password) {
      errs.password = "New password is required.";
    } else if (score < 3) {
      errs.password = "Password must meet at least 'Good' strength rating.";
    }

    if (!formData.confirmPassword) {
      errs.confirmPassword = "Confirm password is required.";
    } else if (formData.confirmPassword !== formData.password) {
      errs.confirmPassword = "Passwords do not match.";
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResetSuccess(true);
    }, 850);
  };

  const handleReset = () => {
    setResetSuccess(false);
    setFormData({ password: "", confirmPassword: "" });
    setErrors({});
  };

  return (
    <AuthLayout
      variant="centered"
      badgeText="Credential Recovery"
      heading="Set new password"
      subheading="Ensure your new password adheres to clinical data governance standards."
      illustration="/assets/Doctors-rafiki.png"
      illustrationAlt="Doctors collaborating on MediPredict platform"
    >
      {resetSuccess ? (
        <AuthNotice
          title="Password Reset Validated"
          message="Your new clinical password met all security and confirmation requirements."
          technicalNote="In Phase 12 (API Integration), this form verifies the token against MongoDB and saves a bcrypt-hashed password. For Phase 04, the frontend flow is complete."
          onReset={handleReset}
          primaryActionLabel="Proceed to Sign In"
          primaryActionHref="/login"
        />
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Recovery Token Indicator */}
          <div className="flex items-center justify-between rounded-xl border border-border/80 bg-surface-subtle p-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5 font-medium text-foreground">
              <KeyRound className="size-3.5 text-primary" />
              <span>Recovery Token:</span>
            </span>
            <Badge variant="outline" className="text-[10px] font-mono py-0 h-5">
              {token.slice(0, 16)}…
            </Badge>
          </div>

          {/* New Password */}
          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              New Password <span className="text-primary">*</span>
            </label>
            <PasswordInput
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="Enter new password…"
              autoComplete="new-password"
            />
            <PasswordStrengthMeter password={formData.password} showCriteria={true} />
            {errors.password && (
              <p className="flex items-center gap-1 text-xs text-destructive pt-0.5" role="alert">
                <AlertCircle className="size-3 shrink-0" />
                <span>{errors.password}</span>
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
              Confirm New Password <span className="text-primary">*</span>
            </label>
            <PasswordInput
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              placeholder="Re-enter new password…"
              autoComplete="new-password"
            />
            {errors.confirmPassword && (
              <p className="flex items-center gap-1 text-xs text-destructive pt-0.5" role="alert">
                <AlertCircle className="size-3 shrink-0" />
                <span>{errors.confirmPassword}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="default"
            size="lg"
            loading={loading}
            className="w-full h-11 text-sm font-semibold rounded-xl shadow-sm gap-2 mt-2"
          >
            <span>Update Password</span>
            <ArrowRight className="size-4" />
          </Button>

          {/* Link to login */}
          <div className="pt-2 text-center text-xs sm:text-sm text-muted-foreground">
            Remembered your previous password?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </div>
        </form>
      )}
    </AuthLayout>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-sm text-muted-foreground">
          Loading recovery session…
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}

