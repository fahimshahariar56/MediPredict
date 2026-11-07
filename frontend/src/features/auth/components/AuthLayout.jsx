"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HeartPulse,
  ShieldCheck,
  Lock,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/animation/BorderBeam";
import { FadeIn } from "@/components/animation/FadeIn";

export function AuthLayout({
  children,
  badgeText = "Clinical Portal",
  heading,
  subheading,
  illustration = "/assets/Doctors-rafiki.png",
  illustrationAlt = "Medical clinicians collaborating with AI diagnostics",
}) {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col justify-between selection:bg-primary/15 selection:text-primary">
      {/* Subtle Ambient Background Mesh */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] size-[650px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute top-[40%] -right-[15%] size-[600px] rounded-full bg-blue-400/[0.03] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:opacity-10" />
      </div>

      {/* Top Header Bar */}
      <header className="w-full border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1"
          >
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs transition-transform group-hover:scale-105">
              <HeartPulse className="size-5" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-lg tracking-tight">
                MediPredict
              </span>
              <Badge variant="info" className="text-[10px] px-1.5 py-0 h-4 hidden sm:inline-flex">
                AI Health
              </Badge>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1.5 px-3 rounded-lg hover:bg-surface-subtle"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand & Clinical Trust Showcase (Visible on lg+) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-between space-y-8 pr-4">
            <FadeIn>
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="gap-1.5 px-3 py-1 text-xs font-semibold bg-surface-subtle border-primary/20 text-primary"
                >
                  <Sparkles className="size-3" />
                  {badgeText}
                </Badge>
                <h1 className="font-heading text-3xl xl:text-4xl font-bold tracking-tight text-foreground leading-tight">
                  Intelligent Decision Support for Modern Healthcare
                </h1>
                <p className="text-muted-foreground text-sm xl:text-base leading-relaxed">
                  Combining validated Gradient Boosted Decision Tree models with transparent SHAP
                  attribution to deliver interpretable, clinical-grade risk stratification.
                </p>
              </div>
            </FadeIn>

            {/* Illustration */}
            <FadeIn delay={0.1}>
              <div className="relative w-full max-w-sm mx-auto aspect-square flex items-center justify-center p-4">
                <div className="absolute inset-0 rounded-full bg-primary/[0.03] blur-2xl" />
                <Image
                  src={illustration}
                  alt={illustrationAlt}
                  width={340}
                  height={340}
                  priority
                  className="relative object-contain drop-shadow-sm select-none pointer-events-none"
                />
              </div>
            </FadeIn>

            {/* Clinical Value Highlights */}
            <FadeIn delay={0.2}>
              <div className="space-y-2.5 pt-2 border-t border-border/70 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>94.2% AUC-ROC validation benchmark on multi-cohort clinical data</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>Individualized SHAP biomarker attribution per prediction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>Zero direct patient PHI storage — strictly de-identified inputs</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Form Card */}
          <div className="w-full lg:col-span-7 flex justify-center">
            <div className="w-full max-w-md sm:max-w-lg">
              <FadeIn delay={0.05}>
                <div className="relative rounded-3xl border border-border/80 bg-card/95 p-6 sm:p-9 shadow-sm backdrop-blur-md overflow-hidden">
                  <BorderBeam
                    size={250}
                    duration={14}
                    borderWidth={1.5}
                    colorFrom="var(--primary)"
                    colorTo="oklch(0.60 0.18 240)"
                  />

                  {/* Card Title & Intro */}
                  {(heading || subheading) && (
                    <div className="mb-6 space-y-1.5 text-left">
                      {heading && (
                        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                          {heading}
                        </h2>
                      )}
                      {subheading && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {subheading}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Form Component Child */}
                  {children}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Bar */}
      <footer className="w-full border-t border-border/50 py-4 text-xs text-muted-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-success" />
              <span>HIPAA Aligned</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Lock className="size-3.5 text-primary" />
              <span>TLS 1.3 Encrypted</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/terms#disclaimer" className="hover:text-foreground transition-colors">
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AuthLayout;
