"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AlertCircle, Lock, Mail, ArrowRight, UserCheck } from "lucide-react";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { PasswordInput } from "@/features/auth/components/PasswordInput";
import { AuthNotice } from "@/features/auth/components/AuthNotice";
import { AuthSocialButtons } from "@/features/auth/components/AuthSocialButtons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    role: "clinician",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.email.trim()) {
      errs.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid work email address.";
    }

    if (!formData.password) {
      errs.password = "Password is required.";
    } else if (formData.password.length < 8) {
      errs.password = "Password must be at least 8 characters.";
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

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({ ...prev, rememberMe: !!checked }));
  };

  const handleQuickFill = (role = "clinician") => {
    setFormData({
      email: role === "clinician" ? "dr.smith@hospital.org" : "researcher@med.edu",
      password: "Password123!",
      rememberMe: true,
      role,
    });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    // Simulate interactive validation state
    setTimeout(() => {
      setLoading(false);
      setSubmittedNotice(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmittedNotice(false);
    setFormData({
      email: "",
      password: "",
      rememberMe: false,
      role: "clinician",
    });
    setErrors({});
  };

  return (
    <AuthLayout
      badgeText="Secure Clinical Sign-In"
      heading="Welcome back"
      subheading="Sign in to your practitioner workspace to view risk stratification models and patient records."
      illustration="/assets/Doctors-rafiki.png"
      illustrationAlt="Doctors using MediPredict diagnostic platform"
    >
      {submittedNotice ? (
        <AuthNotice
          title="Login Validation Successful"
          message={`Work credentials for "${formData.email}" passed all client-side validation rules.`}
          technicalNote="Phase 04 establishes frontend UI & validation. Real backend session creation (JWT / Better-Auth / MongoDB) is scheduled for Phase 12 (API Integration)."
          onReset={handleReset}
          primaryActionLabel="View Public Dashboard Preview"
          primaryActionHref="/#preview"
        />
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Clinical Role Quick-Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Practitioner Profile
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFormData((p) => ({ ...p, role: "clinician" }))}
                className={[
                  "flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded-xl border transition-all",
                  formData.role === "clinician"
                    ? "border-primary bg-primary/10 text-primary font-semibold"
                    : "border-border/80 bg-background/60 text-muted-foreground hover:bg-surface-subtle",
                ].join(" ")}
              >
                <span>Physician / Clinician</span>
              </button>
              <button
                type="button"
                onClick={() => setFormData((p) => ({ ...p, role: "researcher" }))}
                className={[
                  "flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded-xl border transition-all",
                  formData.role === "researcher"
                    ? "border-primary bg-primary/10 text-primary font-semibold"
                    : "border-border/80 bg-background/60 text-muted-foreground hover:bg-surface-subtle",
                ].join(" ")}
              >
                <span>Medical Researcher</span>
              </button>
            </div>
          </div>

          {/* Work Email */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Work Email <span className="text-primary">*</span>
              </label>
              <button
                type="button"
                onClick={() => handleQuickFill(formData.role)}
                className="text-[11px] font-medium text-primary hover:underline"
              >
                Auto-fill demo credentials
              </button>
            </div>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="dr.smith@hospital.org"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={[
                  "flex h-11 w-full rounded-xl border border-input bg-background/80 px-3.5 py-2 text-sm transition-all duration-200 outline-none",
                  "placeholder:text-muted-foreground/60",
                  "focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20",
                  errors.email && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
                ].join(" ")}
              />
            </div>
            {errors.email && (
              <p id="email-error" className="flex items-center gap-1 text-xs text-destructive pt-0.5" role="alert">
                <AlertCircle className="size-3 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                Password <span className="text-primary">*</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-xs text-primary hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>
            <PasswordInput
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="••••••••••••"
              autoComplete="current-password"
            />
            {errors.password && (
              <p id="password-error" className="flex items-center gap-1 text-xs text-destructive pt-0.5" role="alert">
                <AlertCircle className="size-3 shrink-0" />
                <span>{errors.password}</span>
              </p>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm text-muted-foreground select-none">
              <Checkbox
                id="rememberMe"
                checked={formData.rememberMe}
                onCheckedChange={handleCheckboxChange}
              />
              <span>Remember this workstation for 30 days</span>
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="default"
            size="lg"
            loading={loading}
            className="w-full h-11 text-sm font-semibold rounded-xl shadow-sm gap-2"
          >
            <span>Sign In to Clinical Workspace</span>
            <ArrowRight className="size-4" />
          </Button>

          {/* Social / Hospital SSO Federation */}
          <AuthSocialButtons />

          {/* Bottom Switch Link */}
          <div className="pt-2 text-center text-xs sm:text-sm text-muted-foreground">
            Don&apos;t have a practitioner account?{" "}
            <Link
              href="/register"
              className="text-primary font-semibold underline-offset-4 hover:underline"
            >
              Request Practitioner Access
            </Link>
          </div>
        </form>
      )}
    </AuthLayout>
  );
}
