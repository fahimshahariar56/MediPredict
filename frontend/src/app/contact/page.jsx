"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Building2,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  Info,
  RefreshCw,
  PhoneCall,
  MapPin,
} from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn } from "@/components/animation/FadeIn";

const INQUIRY_CATEGORIES = [
  { value: "", label: "Select inquiry category…" },
  { value: "clinical_trial", label: "Clinical Trial & Multi-Center Validation" },
  { value: "ehr_integration", label: "Health System EHR Integration (HL7 FHIR)" },
  { value: "academic_research", label: "Academic Research & Dataset Collaboration" },
  { value: "security_compliance", label: "Security & HIPAA Compliance Desk" },
  { value: "general", label: "General Clinical Inquiry" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    institution: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Full name with clinical title is required.";
    }

    if (!formData.email.trim()) {
      errs.email = "Institutional / work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid institutional email.";
    }

    if (!formData.category) {
      errs.category = "Please select an inquiry category.";
    }

    if (!formData.message.trim()) {
      errs.message = "Message details are required.";
    } else if (formData.message.trim().length < 20) {
      errs.message = "Please provide at least 20 characters of detail.";
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
      setSubmittedNotice(true);
    }, 850);
  };

  const handleReset = () => {
    setSubmittedNotice(false);
    setFormData({
      name: "",
      email: "",
      category: "",
      institution: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <PublicLayout>
      {/* ── Contact Hero ── */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-border/60">
        <InteractiveGridPattern className="opacity-40 dark:opacity-10" />
        <Container>
          <div className="max-w-3xl space-y-5">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                <Mail className="size-3.5" />
                <span>Clinical &amp; Institutional Liaison</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.12]">
                Connect with the{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Clinical Informatics Desk.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Whether you are exploring a multi-center cohort trial, requesting technical
                documentation, or evaluating hospital EHR integration, our team is at your disposal.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── Asymmetric Split Layout ── */}
      <Section className="py-20 sm:py-28 bg-surface-subtle">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Channels & SLA Commitments */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Liaison Channels
                </span>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
                  Dedicated Healthcare Pathways
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Direct channels ensure inquiries reach the appropriate medical, algorithmic, or
                  compliance specialists without bureaucratic delay.
                </p>
              </div>

              <div className="space-y-4">
                <SpotlightCard className="p-5 flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Building2 className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-sm text-foreground">
                      Hospital &amp; Health System Desk
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      HL7 FHIR API sandboxes, custom BAAs, and institutional licensing evaluations.
                    </p>
                    <div className="text-xs font-mono text-primary pt-1">
                      inquiry@medipredict.health
                    </div>
                  </div>
                </SpotlightCard>

                <SpotlightCard className="p-5 flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-sm text-foreground">
                      Security &amp; HIPAA Governance
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Vulnerability disclosures, cryptographic architecture reviews, and audits.
                    </p>
                    <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 pt-1">
                      security@medipredict.health
                    </div>
                  </div>
                </SpotlightCard>

                <SpotlightCard className="p-5 flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
                    <Clock className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-sm text-foreground">
                      Institutional Response SLA
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Verified clinician inquiries receive an initial technical response within 24
                      business hours.
                    </p>
                  </div>
                </SpotlightCard>
              </div>
            </div>

            {/* Right Column: Responsive Interactive Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-xs">
                {submittedNotice ? (
                  <div className="space-y-6 text-left py-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                        <CheckCircle2 className="size-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-heading font-bold text-xl text-foreground">
                          Inquiry Validated Successfully
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          Your message from <strong>{formData.name}</strong> ({formData.email})
                          passed client-side format and schema validation.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border/80 bg-surface-subtle p-4 text-xs text-muted-foreground flex items-start gap-2.5">
                      <Info className="size-4 text-primary shrink-0 mt-0.5" />
                      <span>
                        <strong>Phase 04 Boundary:</strong> Form transmission requires live backend
                        SMTP email integration (scheduled for Phase 12). No simulated fake email
                        was sent.
                      </span>
                    </div>

                    <Button variant="outline" size="sm" onClick={handleReset} className="gap-2">
                      <RefreshCw className="size-3.5" />
                      <span>Send Another Inquiry</span>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-xl text-foreground">
                        Submit a Formal Inquiry
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Fields marked with an asterisk (<span className="text-primary">*</span>) are
                        mandatory.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-foreground">
                          Full Name &amp; Title <span className="text-primary">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Dr. Eleanor Vance, MD"
                          value={formData.name}
                          onChange={handleChange}
                          aria-invalid={!!errors.name}
                          className="flex h-11 w-full rounded-xl border border-input bg-background/80 px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                        {errors.name && (
                          <p className="text-[11px] text-destructive flex items-center gap-1 pt-0.5">
                            <AlertCircle className="size-3 shrink-0" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Work Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-foreground">
                          Institutional Work Email <span className="text-primary">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="e.vance@mayoclinic.org"
                          value={formData.email}
                          onChange={handleChange}
                          aria-invalid={!!errors.email}
                          className="flex h-11 w-full rounded-xl border border-input bg-background/80 px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-destructive flex items-center gap-1 pt-0.5">
                            <AlertCircle className="size-3 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Institution */}
                    <div className="space-y-1.5">
                      <label htmlFor="institution" className="text-xs font-semibold text-foreground">
                        Hospital, Clinic, or Academic Institution
                      </label>
                      <input
                        id="institution"
                        name="institution"
                        type="text"
                        placeholder="Mayo Clinic / Johns Hopkins / Independent Suite"
                        value={formData.institution}
                        onChange={handleChange}
                        className="flex h-11 w-full rounded-xl border border-input bg-background/80 px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    {/* Category */}
                    <div className="space-y-1.5">
                      <label htmlFor="category" className="text-xs font-semibold text-foreground">
                        Inquiry Category <span className="text-primary">*</span>
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        aria-invalid={!!errors.category}
                        className="flex h-11 w-full rounded-xl border border-input bg-background/80 px-3 py-2 text-xs sm:text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        {INQUIRY_CATEGORIES.map((cat) => (
                          <option key={cat.value} value={cat.value} disabled={cat.value === ""}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                      {errors.category && (
                        <p className="text-[11px] text-destructive flex items-center gap-1 pt-0.5">
                          <AlertCircle className="size-3 shrink-0" />
                          <span>{errors.category}</span>
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-foreground">
                        Inquiry Details <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Please describe your clinical evaluation context or trial questions…"
                        value={formData.message}
                        onChange={handleChange}
                        aria-invalid={!!errors.message}
                        className="flex w-full rounded-xl border border-input bg-background/80 p-3.5 text-xs sm:text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      />
                      {errors.message && (
                        <p className="text-[11px] text-destructive flex items-center gap-1 pt-0.5">
                          <AlertCircle className="size-3 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      loading={loading}
                      className="w-full h-11 text-sm font-semibold rounded-xl gap-2 shadow-sm"
                    >
                      <Send className="size-4" />
                      <span>Transmit Clinical Inquiry</span>
                    </Button>

                    <p className="text-center text-[11px] text-muted-foreground pt-1">
                      By submitting you agree to our{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      . Inquiries are handled under zero-PHI confidentiality.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </PublicLayout>
  );
}
