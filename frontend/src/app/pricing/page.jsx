"use client";

import React from "react";
import Link from "next/link";
import {
  Check,
  X,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  User,
  Info,
} from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { BorderBeam } from "@/components/animation/BorderBeam";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { FadeIn } from "@/components/animation/FadeIn";

const TIERS = [
  {
    name: "Independent Practitioner",
    badge: "Solo Clinician",
    price: "TBD",
    period: "during open research",
    tagline: "For individual physicians, endocrinologists, and medical researchers.",
    popular: false,
    cta: "Join Clinical Waitlist",
    ctaHref: "/contact",
    highlights: [
      "Access to all calibrated GBDT risk models",
      "Instant individual SHAP waterfall explanations",
      "Downloadable physician consultation PDF reports",
      "Single-user zero-knowledge encrypted workspace",
      "Standard email technical support",
    ],
  },
  {
    name: "Clinical Practice Team",
    badge: "Recommended Practice Tier",
    price: "TBD",
    period: "institutional evaluation",
    tagline: "For multi-physician outpatient clinics, cardiology suites, and care teams.",
    popular: true,
    cta: "Request Team Onboarding",
    ctaHref: "/contact",
    highlights: [
      "Everything in Independent Practitioner",
      "Up to 15 clinician team member seats",
      "Shared patient cohort risk analytics dashboard",
      "Role-based access controls (Physician, Nurse, Admin)",
      "Audit trail logs for clinical compliance records",
      "Priority clinical advisory & expedited support",
    ],
  },
  {
    name: "Health System Enterprise",
    badge: "Hospital Networks",
    price: "Custom",
    period: "annual licensing",
    tagline: "For regional hospital conglomerates, academic health centers, and HMOs.",
    popular: false,
    cta: "Contact Enterprise Solutions",
    ctaHref: "/contact",
    highlights: [
      "Everything in Clinical Practice Team",
      "Unlimited clinician & researcher seats",
      "HL7 FHIR & Epic/Cerner EHR API integration",
      "Dedicated on-premise or sovereign cloud deployment",
      "Custom BAA & formal HIPAA SLA guarantees",
      "Dedicated Clinical Account Lead & 24/7 hotline",
    ],
  },
];

const COMPARISON_MATRIX = [
  {
    feature: "Diabetes Risk Stratification (GBDT)",
    independent: true,
    team: true,
    enterprise: true,
  },
  {
    feature: "Cardiovascular Health Model (ASCVD)",
    independent: true,
    team: true,
    enterprise: true,
  },
  {
    feature: "SHAP Factor Attribution Decomposition",
    independent: true,
    team: true,
    enterprise: true,
  },
  {
    feature: "Physician-Ready PDF Consultation Export",
    independent: true,
    team: true,
    enterprise: true,
  },
  {
    feature: "Shared Team Patient Cohort Dashboard",
    independent: false,
    team: true,
    enterprise: true,
  },
  {
    feature: "Role-Based Access Control (RBAC)",
    independent: false,
    team: true,
    enterprise: true,
  },
  {
    feature: "HL7 FHIR / EHR System Integration API",
    independent: false,
    team: false,
    enterprise: true,
  },
  {
    feature: "On-Premise / Air-Gapped Sovereign Deployment",
    independent: false,
    team: false,
    enterprise: true,
  },
  {
    feature: "Dedicated Business Associate Agreement (BAA)",
    independent: false,
    team: "Add-on",
    enterprise: true,
  },
  {
    feature: "Clinical Support SLA",
    independent: "48h response",
    team: "12h response",
    enterprise: "1h priority hotline",
  },
];

export default function PricingPage() {
  return (
    <PublicLayout>
      {/* ── Pricing Hero ── */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-border/60">
        <InteractiveGridPattern className="opacity-40 dark:opacity-10" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                <Clock className="size-3.5" />
                <span>Transparent Tier Architecture</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.12]">
                Plans Engineered for{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Clinical Scale.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                MediPredict is currently in active development. Commercial pricing structures will
                be finalized following multi-cohort clinical trials. Join the priority waitlist
                for early access.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-4 text-xs text-primary max-w-xl mx-auto flex items-center justify-center gap-2.5">
                <Info className="size-4 shrink-0" />
                <span>
                  <strong>Development Notice:</strong> All tiers are currently in clinical open
                  access for verified academic and medical research partners.
                </span>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── 3-Tier Comparison Cards ── */}
      <Section className="py-20 sm:py-28 bg-surface-subtle border-b border-border/70">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {TIERS.map((tier) => (
              <div key={tier.name} className="relative flex flex-col">
                <SpotlightCard
                  className={[
                    "relative flex-1 flex flex-col justify-between p-8 rounded-3xl transition-all duration-300",
                    tier.popular
                      ? "border-primary/80 bg-card shadow-lg ring-2 ring-primary/20"
                      : "border-border/80 bg-card shadow-xs",
                  ].join(" ")}
                >
                  {tier.popular && (
                    <BorderBeam size={200} duration={12} borderWidth={1.5} />
                  )}

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Badge
                          variant={tier.popular ? "default" : "outline"}
                          className="text-[11px] font-semibold"
                        >
                          {tier.badge}
                        </Badge>
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-foreground">
                        {tier.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        {tier.tagline}
                      </p>
                    </div>

                    {/* Price Block */}
                    <div className="space-y-1 pb-6 border-b border-border/60">
                      <div className="flex items-baseline gap-2">
                        <span className="font-heading font-extrabold text-4xl text-foreground">
                          {tier.price}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          / {tier.period}
                        </span>
                      </div>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-3 text-xs">
                      {tier.highlights.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="size-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <Button
                      asChild
                      variant={tier.popular ? "default" : "outline"}
                      className="w-full h-11 text-sm font-semibold rounded-xl"
                    >
                      <Link href={tier.ctaHref}>{tier.cta}</Link>
                    </Button>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Comprehensive Feature Comparison Matrix ── */}
      <Section className="py-20 sm:py-28 bg-background">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
            <Badge variant="outline" className="px-3 py-1 text-xs">
              Feature Matrix
            </Badge>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Compare Platform Capabilities
            </h2>
            <p className="text-muted-foreground text-sm">
              Granular breakdown of capabilities, security protocols, and integration pathways.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border/80 bg-card shadow-xs max-w-5xl mx-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-surface-subtle text-xs uppercase font-semibold text-muted-foreground">
                <tr>
                  <th className="py-4 px-6 w-1/2">Capability</th>
                  <th className="py-4 px-4 text-center">Independent</th>
                  <th className="py-4 px-4 text-center text-primary font-bold">Clinical Team</th>
                  <th className="py-4 px-4 text-center">Health System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {COMPARISON_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface-subtle/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-foreground text-xs sm:text-sm">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.independent === "boolean" ? (
                        row.independent ? (
                          <Check className="size-4 text-primary mx-auto" />
                        ) : (
                          <X className="size-4 text-muted-foreground/40 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs text-muted-foreground font-mono">
                          {row.independent}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/[0.02]">
                      {typeof row.team === "boolean" ? (
                        row.team ? (
                          <Check className="size-4 text-primary mx-auto font-bold" />
                        ) : (
                          <X className="size-4 text-muted-foreground/40 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs text-primary font-semibold font-mono">
                          {row.team}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <Check className="size-4 text-primary mx-auto" />
                        ) : (
                          <X className="size-4 text-muted-foreground/40 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs text-muted-foreground font-mono">
                          {row.enterprise}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
    </PublicLayout>
  );
}
