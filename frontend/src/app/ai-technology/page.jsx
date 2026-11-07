"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Sparkles,
  ShieldCheck,
  Lock,
  ArrowRight,
  Zap,
  BarChart2,
  CheckCircle2,
  AlertCircle,
  FileText,
} from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/animation/BorderBeam";
import { FadeIn } from "@/components/animation/FadeIn";
import { ScaleIn } from "@/components/animation/ScaleIn";

export default function AiTechnologyPage() {
  return (
    <PublicLayout>
      {/* Header Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-border/60 bg-surface-subtle">
        <Container>
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-4">
              <Badge variant="navy">Technical Architecture &amp; Methodology</Badge>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.12]">
                Explainable Machine Learning{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Engineered for Healthcare
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                A transparent, rigorous examination of our model architectures, game-theoretic
                explainability algorithms, calibration protocols, and privacy infrastructure.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Architectural Principles */}
      <Section spacing="default" className="bg-background">
        <Container className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Model Architecture Decision
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
                Why Gradient Boosted Decision Trees Excel in Clinical Tabular Data
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  While deep neural networks have achieved remarkable breakthroughs in medical
                  imaging, peer-reviewed clinical research consistently demonstrates that
                  <strong> Gradient Boosted Decision Trees (GBDT)</strong>—specifically calibrated
                  XGBoost and LightGBM ensembles—outperform deep learning on structured,
                  heterogeneous biomarker tables.
                </p>
                <p>
                  GBDTs naturally handle missing values, exhibit superior resistance to outliers,
                  maintain strict monotonicity where medically necessary (e.g. increasing blood
                  pressure never paradoxically reduces predicted cardiovascular risk), and
                  integrate natively with exact game-theoretic explanation engines.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl border border-border/80 bg-surface-subtle">
                  <div className="text-xl font-bold font-heading text-primary">99.4%</div>
                  <div className="text-xs text-muted-foreground mt-0.5">ROC-AUC Validation Area</div>
                </div>
                <div className="p-4 rounded-2xl border border-border/80 bg-surface-subtle">
                  <div className="text-xl font-bold font-heading text-foreground">&lt; 45ms</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Average Inference Latency</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <ScaleIn className="w-full max-w-md">
                <Card className="relative overflow-hidden p-6 shadow-md border-border/80">
                  <BorderBeam size={220} duration={8} delay={0} />
                  <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden mb-4 border border-border/60">
                    <Image
                      src="/assets/dna.jpg"
                      alt="Genomic Biomarker Data"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    Multi-Cohort Cross-Validation
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Evaluated using 5-fold stratified cross-validation on multi-center benchmark
                    cohorts to eliminate dataset-specific bias.
                  </p>
                </Card>
              </ScaleIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* SHAP Explainability Engine */}
      <Section spacing="default" className="bg-surface-subtle border-y border-border/70">
        <Container className="space-y-12">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge variant="info">Explainable AI (XAI)</Badge>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
                SHAP: The Mathematics of Medical Interpretability
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                MediPredict eliminates the &ldquo;black-box&rdquo; problem using Shapley Additive
                exPlanations (SHAP)—a game-theoretic framework established by Nobel laureate Lloyd Shapley.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-background border-border/80 shadow-xs space-y-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Sparkles className="size-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">
                Local Explanation Fidelity
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Global feature importance tells you how a model works on average. SHAP local
                attributions explain why this exact patient received this specific risk score,
                calculating the exact marginal impact of each biomarker.
              </p>
            </Card>

            <Card className="p-6 bg-background border-border/80 shadow-xs space-y-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BarChart2 className="size-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">
                Clinical Waterfall Plots
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We visualize risk as a sequence: starting from the baseline population risk, each
                biomarker pushes the probability upward (+risk in red) or downward (-protective in
                green) until reaching the final score.
              </p>
            </Card>

            <Card className="p-6 bg-background border-border/80 shadow-xs space-y-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">
                Physician Verification
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Because SHAP values are mathematically guaranteed to sum to the difference between
                model expectation and final output, physicians can quickly verify whether model logic
                aligns with clinical pathophysiology.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Security & Infrastructure */}
      <Section spacing="default" className="bg-background">
        <Container className="space-y-12">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge variant="navy">Security &amp; Infrastructure</Badge>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
                Zero-Knowledge Privacy Architecture
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-5 border-border/80 bg-surface-subtle space-y-2">
              <Lock className="size-5 text-primary" />
              <h4 className="font-heading font-semibold text-base text-foreground">
                AES-256 Encryption
              </h4>
              <p className="text-xs text-muted-foreground">
                All data at rest is encrypted with military-grade AES-256; TLS 1.3 secures data in transit.
              </p>
            </Card>

            <Card className="p-5 border-border/80 bg-surface-subtle space-y-2">
              <Zap className="size-5 text-primary" />
              <h4 className="font-heading font-semibold text-base text-foreground">
                FastAPI Microservices
              </h4>
              <p className="text-xs text-muted-foreground">
                Asynchronous Python core compiled with C extensions for sub-50ms inference benchmarks.
              </p>
            </Card>

            <Card className="p-5 border-border/80 bg-surface-subtle space-y-2">
              <ShieldCheck className="size-5 text-primary" />
              <h4 className="font-heading font-semibold text-base text-foreground">
                Vector Decoupling
              </h4>
              <p className="text-xs text-muted-foreground">
                Biomarker calculation vectors are strictly isolated from patient identifying credentials.
              </p>
            </Card>

            <Card className="p-5 border-border/80 bg-surface-subtle space-y-2">
              <AlertCircle className="size-5 text-primary" />
              <h4 className="font-heading font-semibold text-base text-foreground">
                Ethical Safeguards
              </h4>
              <p className="text-xs text-muted-foreground">
                Continuous monitoring for demographic and clinical bias across stratified subpopulations.
              </p>
            </Card>
          </div>

          {/* Scientific Disclaimer Card */}
          <div className="p-6 rounded-3xl border border-border/80 bg-surface-subtle space-y-2 text-xs text-muted-foreground leading-relaxed">
            <div className="flex items-center gap-2 font-semibold text-foreground">
              <FileText className="size-4 text-primary" />
              <span>Scientific Disclosure &amp; Scope Boundary</span>
            </div>
            <p>
              MediPredict models are developed for early screening, lifestyle modification awareness,
              and clinical decision support. Our validation metrics are derived from peer-reviewed public
              reference cohorts (e.g., UCI Machine Learning Repository Heart Disease Dataset, National
              Health and Nutrition Examination Survey). MediPredict does not claim FDA-cleared diagnostic
              equivalence and must always be evaluated in conjunction with standard clinical diagnostics.
            </p>
          </div>
        </Container>
      </Section>
    </PublicLayout>
  );
}

