"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight, ShieldCheck, User } from "lucide-react";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { PasswordInput } from "@/features/auth/components/PasswordInput";
import { PasswordStrengthMeter, evaluatePasswordStrength } from "@/features/auth/components/PasswordStrengthMeter";
import { AuthNotice } from "@/features/auth/components/AuthNotice";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const SPECIALTIES = [
  { value: "", label: "Select primary clinical focus…" },
  { value: "cardiology", label: "Cardiology & Vascular Medicine" },
  { value: "endocrinology", label: "Endocrinology & Diabetology" },
  { value: "internal", label: "Internal & General Medicine" },
  { value: "nephrology", label: "Nephrology & Renal Health" },
  { value: "clinical_ai", label: "Clinical Informatics & AI Research" },
  { value: "hospital_admin", label: "Healthcare Administration" },
];

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    specialty: "",
    institution: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const validate = () => {
    const errs = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Full name with clinical title is required.";
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = "Full name must be at least 3 characters.";
    }

    if (!formData.email.trim()) {
      errs.email = "Professional email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid institutional email.";
    }

    if (!formData.specialty) {
      errs.specialty = "Please select your primary clinical discipline.";
    }

    const { score } = evaluatePasswordStrength(formData.password);
    if (!formData.password) {
      errs.password = "Password is required.";
    } else if (score < 3) {
      errs.password = "Please create a stronger password (at least 8 chars with mixed case, number, symbol).";
    }

    if (!formData.confirmPassword) {
      errs.confirmPassword = "Confirm password is required.";
    } else if (formData.confirmPassword !== formData.password) {
      errs.confirmPassword = "Passwords do not match.";
    }

    if (!formData.agreeTerms) {
      errs.agreeTerms = "You must agree to the Terms of Service and Privacy Policy to proceed.";
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
    setFormData((prev) => ({ ...prev, agreeTerms: !!checked }));
    if (errors.agreeTerms) {
      setErrors((prev) => ({ ...prev, agreeTerms: undefined }));
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
      setSubmittedNotice(true);
    }, 900);
  };

  const handleReset = () => {
    setSubmittedNotice(false);
    setFormData({
      fullName: "",
      email: "",
      specialty: "",
      institution: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    });
    setErrors({});
  };

  return (
    <AuthLayout
      badgeText="Practitioner Onboarding"
      heading="Create your account"
      subheading="Request access to MediPredict's predictive risk stratification models and explainable AI toolset."
      illustration="/assets/Cardiologist-rafiki.png"
      illustrationAlt="Cardiologist analyzing patient diagnostic models"
    >
      {submittedNotice ? (
        <AuthNotice
          title="Registration Form Validated"
          message={`Clinical onboarding application for ${formData.fullName} (${formData.email}) meets all client-side security criteria.`}
          technicalNote="Phase 04 provides frontend form UI and validation. Real user account provisioning, password hashing (bcrypt), and email token generation will be wired in Phase 12 (API Integration)."
          onReset={handleReset}
          primaryActionLabel="Proceed to Email Verification UI"
          primaryActionHref="/verify-email"
        />
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="fullName" className="text-sm font-medium text-foreground">
              Full Name & Title <span className="text-primary">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Dr. Sarah Jenkins, MD"
              value={formData.fullName}
              onChange={handleChange}
              aria-invalid={!!errors.fullName}
              className={[
                "flex h-11 w-full rounded-xl border border-input bg-background/80 px-3.5 py-2 text-sm transition-all duration-200 outline-none",
                "placeholder:text-muted-foreground/60",
                "focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20",
                errors.fullName && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
              ].join(" ")}
            />
            {errors.fullName && (
              <p className="flex items-center gap-1 text-xs text-destructive pt-0.5" role="alert">
                <AlertCircle className="size-3 shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Work Email */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Institutional / Work Email <span className="text-primary">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="s.jenkins@stmarys-hospital.org"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              className={[
                "flex h-11 w-full rounded-xl border border-input bg-background/80 px-3.5 py-2 text-sm transition-all duration-200 outline-none",
                "placeholder:text-muted-foreground/60",
                "focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20",
                errors.email && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
              ].join(" ")}
            />
            {errors.email && (
              <p className="flex items-center gap-1 text-xs text-destructive pt-0.5" role="alert">
                <AlertCircle className="size-3 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Specialty Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="specialty" className="text-sm font-medium text-foreground">
              Primary Specialty <span className="text-primary">*</span>
            </label>
            <select
              id="specialty"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              aria-invalid={!!errors.specialty}
              className={[
                "flex h-11 w-full rounded-xl border border-input bg-background/80 px-3 py-2 text-sm transition-all duration-200 outline-none",
                "focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20",
                errors.specialty && "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
              ].join(" ")}
            >
              {SPECIALTIES.map((s) => (
                <option key={s.value} value={s.value} disabled={s.value === ""}>
                  {s.label}
                </option>
              ))}
            </select>
            {errors.specialty && (
              <p className="flex items-center gap-1 text-xs text-destructive pt-0.5" role="alert">
                <AlertCircle className="size-3 shrink-0" />
                <span>{errors.specialty}</span>
              </p>
            )}
          </div>

          {/* Password with Strength Indicator */}
          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              Create Password <span className="text-primary">*</span>
            </label>
            <PasswordInput
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="At least 8 characters…"
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
              Confirm Password <span className="text-primary">*</span>
            </label>
            <PasswordInput
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              placeholder="Re-enter password…"
              autoComplete="new-password"
            />
            {errors.confirmPassword && (
              <p className="flex items-center gap-1 text-xs text-destructive pt-0.5" role="alert">
                <AlertCircle className="size-3 shrink-0" />
                <span>{errors.confirmPassword}</span>
              </p>
            )}
          </div>

          {/* Agreement Checkbox */}
          <div className="pt-1 space-y-1">
            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-muted-foreground leading-relaxed select-none">
              <Checkbox
                id="agreeTerms"
                checked={formData.agreeTerms}
                onCheckedChange={handleCheckboxChange}
                className="mt-0.5"
              />
              <span>
                I agree to the{" "}
                <Link href="/terms" className="text-primary underline underline-offset-2 hover:text-foreground">
                  Terms of Service
                </Link>
                , acknowledge the{" "}
                <Link href="/privacy" className="text-primary underline underline-offset-2 hover:text-foreground">
                  Privacy Policy
                </Link>
                , and confirm that all patient data submitted will be strictly de-identified.
              </span>
            </label>
            {errors.agreeTerms && (
              <p className="flex items-center gap-1 text-xs text-destructive" role="alert">
                <AlertCircle className="size-3 shrink-0" />
                <span>{errors.agreeTerms}</span>
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
            <span>Create Practitioner Account</span>
            <ArrowRight className="size-4" />
          </Button>

          {/* Bottom Switch Link */}
          <div className="pt-2 text-center text-xs sm:text-sm text-muted-foreground">
            Already have a practitioner account?{" "}
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
