"use client";

import React, { useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animation/FadeIn";
import { StaggerList, StaggerItem } from "@/components/animation/StaggerList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MailIcon, AlertCircleIcon, InfoIcon } from "lucide-react";

const SUBJECTS = [
  { value: "", label: "Select a subject…" },
  { value: "general", label: "General Enquiry" },
  { value: "technical", label: "Technical Support" },
  { value: "partnership", label: "Partnership & Collaboration" },
  { value: "press", label: "Press & Media" },
  { value: "privacy", label: "Privacy / Data Request" },
];

function FormField({ label, id, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs text-destructive" role="alert">
          <AlertCircleIcon className="size-3" />
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.subject) e.subject = "Please select a subject.";
    if (!form.message.trim()) {
      e.message = "Message is required.";
    } else if (form.message.trim().length < 20) {
      e.message = "Message must be at least 20 characters.";
    }
    return e;
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Show "backend required" notice — do NOT simulate a successful send
    setSubmitted(true);
  }

  function handleReset() {
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setSubmitted(false);
  }

  return (
    <PublicLayout>
      {/* Hero */}
      <Section className="pt-24 pb-10 text-center">
        <Container>
          <FadeIn>
            <Badge variant="outline" className="mb-6 inline-flex gap-2 px-4 py-1.5 text-sm">
              <MailIcon className="size-3.5" />
              Get In Touch
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Contact MediPredict
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Have a question, partnership enquiry, or feedback? We&apos;d love to hear from you.
            </p>
          </FadeIn>

          {/* Development notice */}
          <FadeIn delay={0.15}>
            <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-blue-200 bg-blue-50 px-5 py-4 text-left text-sm text-blue-800 dark:border-blue-800/40 dark:bg-blue-950/30 dark:text-blue-300">
              <p className="flex items-start gap-2">
                <InfoIcon className="mt-0.5 size-4 shrink-0" />
                <span>
                  <strong>MediPredict is a portfolio / research project.</strong> Contact channels
                  are currently in development. Submissions cannot be processed at this time — a
                  backend integration is required. The form below is a UI prototype only.
                </span>
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Form */}
      <Section className="py-12">
        <Container>
          <div className="mx-auto max-w-xl">
            <FadeIn>
              {submitted ? (
                /* ── Backend-required notice ── */
                <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                    <InfoIcon className="size-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h2 className="font-heading text-xl font-semibold">Backend Connection Required</h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Your form was validated successfully, but contact form submission requires a
                    backend server connection which has not yet been configured. This feature will
                    be available once the backend integration is complete.
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    This is expected behaviour during the active development phase.
                  </p>
                  <Button onClick={handleReset} variant="outline" className="mt-6">
                    Back to Form
                  </Button>
                </div>
              ) : (
                /* ── Contact form ── */
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-3xl border border-border bg-card p-8 shadow-sm space-y-5"
                >
                  <StaggerList className="space-y-5">
                    <StaggerItem>
                      <FormField label="Full Name *" id="name" error={errors.name}>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Dr. Jane Smith"
                          value={form.name}
                          onChange={handleChange}
                          aria-invalid={!!errors.name}
                          className="h-10"
                        />
                      </FormField>
                    </StaggerItem>

                    <StaggerItem>
                      <FormField label="Email Address *" id="email" error={errors.email}>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="jane.smith@hospital.org"
                          value={form.email}
                          onChange={handleChange}
                          aria-invalid={!!errors.email}
                          className="h-10"
                        />
                      </FormField>
                    </StaggerItem>

                    <StaggerItem>
                      <FormField label="Subject *" id="subject" error={errors.subject}>
                        <select
                          id="subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          aria-invalid={!!errors.subject}
                          className="flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive"
                        >
                          {SUBJECTS.map((s) => (
                            <option key={s.value} value={s.value} disabled={s.value === ""}>
                              {s.label}
                            </option>
                          ))}
                        </select>
                      </FormField>
                    </StaggerItem>

                    <StaggerItem>
                      <FormField label="Message *" id="message" error={errors.message}>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Tell us how we can help…"
                          value={form.message}
                          onChange={handleChange}
                          aria-invalid={!!errors.message}
                          className="resize-none"
                        />
                        <p className="text-right text-xs text-muted-foreground">
                          {form.message.length} / 2000
                        </p>
                      </FormField>
                    </StaggerItem>
                  </StaggerList>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By submitting this form you agree to our{" "}
                    <a href="/privacy" className="underline underline-offset-3 hover:text-foreground">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </FadeIn>
          </div>
        </Container>
      </Section>
    </PublicLayout>
  );
}
