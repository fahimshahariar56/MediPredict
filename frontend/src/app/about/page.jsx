"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  Sparkles,
  ShieldCheck,
  Activity,
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Brain,
} from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FadeIn } from "@/components/animation/FadeIn";
import { ScaleIn } from "@/components/animation/ScaleIn";
import { StaggerList, StaggerItem } from "@/components/animation/StaggerList";

const CORE_VALUES = [
  {
    icon: Target,
    title: "Proactive Prevention",
    description:
      "Modern healthcare often intervenes only after irreversible physiological damage has occurred. We build algorithms that detect subtle multi-variable shifts months before acute symptoms manifest.",
  },
  {
    icon: Sparkles,
    title: "Radical Explainability",
    description:
      "Medicine cannot accept black-box algorithmic decisions. Every prediction produced by MediPredict provides granular feature attribution via SHAP game theory, enabling doctors to inspect the underlying rationale.",
  },
  {
    icon: ShieldCheck,
    title: "Data Dignity & Security",
    description:
      "We believe health data belongs solely to the individual. Our architecture enforces zero-knowledge vectorization, strict HIPAA/GDPR alignment, and an absolute prohibition against data monetization.",
  },
  {
    icon: Users,
    title: "Clinician-Centric Augmentation",
    description:
      "AI is designed to augment, never replace, the irreplaceable clinical acumen and human empathy of licensed medical practitioners. We streamline consultation preparation so doctors can focus on care.",
  },
];

const ADVISORY_PILLARS = [
  {
    area: "Preventative Cardiology",
    focus: "Atherosclerotic cardiovascular disease (ASCVD) risk trajectory & arterial stiffness indicators.",
    icon: HeartPulse,
  },
  {
    area: "Metabolic Endocrinology",
    focus: "Insulin resistance progression, impaired fasting glucose, and early beta-cell stress markers.",
    icon: Activity,
  },
  {
    area: "Explainable Machine Learning",
    focus: "Model calibration, Brier score optimization, and tree-based local explanation fidelity.",
    icon: Brain,
  },
];

export default function AboutPage() {
  return (
    <PublicLayout>
      {/* Header Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-border/60 bg-surface-subtle">
        <Container>
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-4">
              <Badge variant="navy">Our Mission &amp; Purpose</Badge>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.12]">
                Pioneering Explainable AI for{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Proactive Healthcare
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                MediPredict was created to bridge the critical gap between complex laboratory data
                and proactive medical decision-making. We transform non-invasive biometric vitals
                into transparent clinical risk stratifications.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Narrative & Visual Section */}
      <Section spacing="default" className="bg-background">
        <Container className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                The Healthcare Paradigm Shift
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
                From Reactive Crisis Response to Predictive Preservation
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Cardiovascular disease and type-2 diabetes account for a substantial majority
                  of preventable chronic illnesses worldwide. In conventional care models,
                  patients are frequently diagnosed only when clear clinical symptoms or acute
                  events demand urgent intervention.
                </p>
                <p>
                  MediPredict harnesses modern gradient-boosted decision ensembles to detect
                  subtle multivariate correlations across everyday biometric vitals: resting blood
                  pressure, fasting plasma glucose, lipid fractions, and body mass indicators.
                </p>
                <p>
                  By presenting clear risk categories alongside game-theoretic SHAP attributions,
                  we empower patients and healthcare teams to intervene during the golden window
                  of preventative lifestyle and clinical modification.
                </p>
              </div>

              <div className="pt-2">
                <Link href="/#preview">
                  <Button variant="navy" className="gap-2">
                    <span>Explore Live Prediction Models</span>
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <ScaleIn className="w-full max-w-md">
                <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden border border-border/80 bg-surface-subtle p-6 shadow-md">
                  <Image
                    src="/assets/Doctors-rafiki.png"
                    alt="Clinical Medical Team"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-contain"
                  />
                </div>
              </ScaleIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4 Core Values */}
      <Section spacing="default" className="bg-surface-subtle border-y border-border/70">
        <Container className="space-y-12">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge variant="info">Foundational Pillars</Badge>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
                Our Non-Negotiable Medical &amp; Ethical Standards
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Every component of the MediPredict platform is engineered according to four
                core clinical principles.
              </p>
            </div>
          </FadeIn>

          <StaggerList className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CORE_VALUES.map((val) => {
              const IconComp = val.icon;
              return (
                <StaggerItem key={val.title}>
                  <Card className="p-6 h-full bg-background border-border/80 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                        <IconComp className="size-5" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerList>
        </Container>
      </Section>

      {/* Multi-Disciplinary Advisory Perspective */}
      <Section spacing="default" className="bg-background">
        <Container className="space-y-12">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge variant="navy">Interdisciplinary Foundations</Badge>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
                Co-Designed at the Intersection of Medicine &amp; Data Science
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Our model parameters and clinical thresholds reflect guidance across key
                medical disciplines.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADVISORY_PILLARS.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.area} className="p-6 bg-surface-subtle border-border/70 shadow-2xs">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-base text-foreground">
                    {item.area}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {item.focus}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA Banner */}
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 sm:p-12 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Ready to See How Our Models Operate?
            </h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Explore our interactive diagnostic demonstration, inspect real-time SHAP factor
              contributions, and experience explainable healthcare AI.
            </p>
            <div className="pt-2">
              <Link href="/#preview">
                <ShimmerButton className="shadow-md">
                  <span>Launch Prediction Preview</span>
                  <ArrowRight className="size-4" />
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </PublicLayout>
  );
}

