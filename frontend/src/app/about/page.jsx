"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  Quote,
  Clock,
  Compass,
} from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { FadeIn } from "@/components/animation/FadeIn";
import { StaggerList, StaggerItem } from "@/components/animation/StaggerList";

const TIMELINE_MILESTONES = [
  {
    year: "2024",
    tag: "Cohort Validation",
    title: "Multi-Center Benchmark Validation",
    description:
      "Engineered baseline GBDT ensembles across 180,000+ patient records spanning NHANES and Framingham cohorts, achieving 94.2% AUC-ROC in early cardiometabolic risk classification.",
  },
  {
    year: "2025",
    tag: "Explainability Synthesis",
    title: "Game-Theoretic SHAP Integration",
    description:
      "Eliminated black-box algorithmic ambiguity by integrating exact TreeSHAP attribution, giving doctors localized mathematical proof for every positive and protective factor.",
  },
  {
    year: "2026",
    tag: "Clinical Platform",
    title: "Zero-Knowledge Decision Support Workspace",
    description:
      "Unveiled the MediPredict clinical portal with sub-45ms inference latency, strict zero-PHI persistence protocols, and automated diagnostic summaries for practitioners.",
  },
  {
    year: "Upcoming",
    tag: "Future Horizon",
    title: "Multi-Organ Trajectory & Renal Modeling",
    description:
      "Expanding the ensemble stack to forecast multi-organ risk trajectories across chronic kidney disease (CKD), microvascular stress, and long-term metabolic syndrome.",
  },
];

const CORE_PILLARS = [
  {
    icon: Target,
    title: "Proactive Prevention",
    description:
      "Modern healthcare often intervenes only after irreversible physiological tissue damage has occurred. We detect subtle multi-variable shifts months before acute symptoms manifest.",
  },
  {
    icon: Sparkles,
    title: "Radical Explainability",
    description:
      "Medicine cannot accept black-box algorithmic decisions. Every prediction produced by MediPredict provides granular feature attribution via SHAP game theory.",
  },
  {
    icon: ShieldCheck,
    title: "Data Dignity & Zero-PHI",
    description:
      "We believe health data belongs solely to the individual. Our architecture enforces zero-knowledge vectorization, strict HIPAA alignment, and an absolute ban on data monetization.",
  },
  {
    icon: Users,
    title: "Clinician Augmentation",
    description:
      "AI is designed to augment, never replace, the irreplaceable clinical acumen and human empathy of licensed medical practitioners.",
  },
];

export default function AboutPage() {
  return (
    <PublicLayout>
      {/* ── Editorial Hero ── */}
      <section className="relative overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-28 border-b border-border/60">
        <InteractiveGridPattern className="opacity-40 dark:opacity-10" />
        <Container>
          <div className="max-w-4xl space-y-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                <Compass className="size-3.5" />
                <span>Our Purpose &amp; Scientific Vision</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-foreground leading-[1.08]">
                The Architecture of{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Preventative Medicine.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                MediPredict was founded on a simple medical conviction: clinical healthcare should
                intervene before disease is irreversible, not after symptoms become acute.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── Manifesto Quote Strip ── */}
      <section className="py-16 sm:py-24 bg-surface-subtle border-b border-border/70">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Quote className="size-10 text-primary/30 mx-auto" />
            <blockquote className="font-heading font-semibold text-2xl sm:text-3xl text-foreground tracking-tight leading-snug">
              &ldquo;The future of diagnostics is not replacing the physician&apos;s judgment, but
              empowering them with instantaneous mathematical transparency across thousands of
              intertwined biomarkers.&rdquo;
            </blockquote>
            <div className="space-y-1">
              <div className="font-heading font-bold text-base text-foreground">
                Clinical Research Advisory Board
              </div>
              <div className="text-xs text-muted-foreground">
                MediPredict Predictive Healthcare Initiative
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Asymmetric Storytelling: Problem vs Solution ── */}
      <Section className="py-20 sm:py-28 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                The Diagnostic Dilemma
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
                Why Standard Scorecards Fail Complex Chronic Pathologies
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Conventional clinical risk calculators rely on rigid linear cutoffs—such as
                systolic pressure over 140 or fasting glucose over 100. However, human biology
                is non-linear.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                A patient with borderline levels across four separate biomarkers may carry far
                higher cardiovascular risk than a patient with a single elevated metric. MediPredict
                captures these complex multi-factor interactions without human bias.
              </p>

              <div className="pt-2">
                <Button asChild variant="outline" className="gap-2">
                  <Link href="/ai-technology">
                    <span>Inspect Technology Architecture</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {CORE_PILLARS.map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <SpotlightCard key={pillar.title} className="flex flex-col justify-between space-y-4">
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-heading font-bold text-lg text-foreground">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </SpotlightCard>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Timeline of Scientific Milestones ── */}
      <section className="py-20 sm:py-28 bg-surface-subtle border-y border-border/70">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
            <Badge variant="outline" className="gap-1.5 px-3 py-1 text-xs">
              <Clock className="size-3 text-primary" />
              Evolution &amp; Roadmaps
            </Badge>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              A Trajectory of Scientific Rigor
            </h2>
            <p className="text-muted-foreground text-sm">
              From academic cohort validation to clinical-grade decision support.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-primary/20 space-y-12">
            {TIMELINE_MILESTONES.map((m, idx) => (
              <div key={m.year} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 flex size-6 sm:size-7 items-center justify-center rounded-full border-2 border-primary bg-background shadow-xs transition-transform group-hover:scale-110">
                  <div className="size-2 rounded-full bg-primary" />
                </div>

                <div className="space-y-2 rounded-2xl border border-border/80 bg-background p-6 shadow-xs transition-all hover:border-primary/40">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono font-bold text-sm text-primary">
                      {m.year}
                    </span>
                    <Badge variant="outline" className="text-[10px] uppercase font-mono">
                      {m.tag}
                    </Badge>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Editorial Call To Action ── */}
      <section className="py-20 sm:py-24 bg-background">
        <Container>
          <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-primary/10 via-background to-surface-subtle p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-6">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Ready to Explore Predictive Clinical Diagnostics?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Experience the platform first-hand. Review our transparent explainability models
              or schedule a clinical walkthrough.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button asChild size="lg" variant="default" className="gap-2">
                <Link href="/how-it-works">
                  <span>See How It Works</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/ai-technology">
                  <span>AI Architecture</span>
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
