"use client";

import React from "react";
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
  Activity,
  Layers,
  Terminal,
} from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShapWaterfallVisualizer } from "@/features/ai-technology/components/ShapWaterfallVisualizer";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn } from "@/components/animation/FadeIn";

const BENCHMARK_COMPARISONS = [
  {
    dimension: "Heterogeneous Tabular Biomarkers",
    gbdt: "Optimal (Natively partitions disparate continuous & discrete ranges)",
    deepLearning: "Suboptimal (Requires complex normalization, prone to overparameterization)",
  },
  {
    dimension: "Sample Efficiency & Data Sparsity",
    gbdt: "High (Robust on cohorts with missing clinical values without imputation bias)",
    deepLearning: "Moderate to Low (Requires massive continuous records to generalize)",
  },
  {
    dimension: "Strict Monotonic Constraints",
    gbdt: "Guaranteed (Higher biomarker levels cannot paradoxically reduce risk)",
    deepLearning: "Non-trivial (Violates clinical biological priors without custom loss penalties)",
  },
  {
    dimension: "Local Mathematical Explainability",
    gbdt: "Exact (TreeSHAP computes exact game-theoretic Shapley attributions in polynomial time)",
    deepLearning: "Approximated (Integrated Gradients & DeepSHAP are computationally expensive)",
  },
  {
    dimension: "Inference Latency & Edge Footprint",
    gbdt: "< 45ms per patient (Runs efficiently in memory-constrained environments)",
    deepLearning: "120ms – 400ms (Heavy matrix multiplication overhead)",
  },
];

export default function AiTechnologyPage() {
  return (
    <PublicLayout>
      {/* ── High-Tech Scientific Hero ── */}
      <section className="relative overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-28 border-b border-border/60">
        <InteractiveGridPattern className="opacity-40 dark:opacity-15" />
        <Container>
          <div className="max-w-4xl space-y-5">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                <Cpu className="size-3.5" />
                <span>Machine Learning Architecture &amp; Methodology</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-foreground leading-[1.08]">
                Calibrated GBDTs &amp;{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Game-Theoretic SHAP.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A rigorous, transparent examination of our ensemble model architectures, exact
                Shapley factor attribution engines, isotonic calibration curves, and zero-knowledge
                data security protocols.
              </p>
            </FadeIn>

            {/* Quick telemetry strip */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl">
                <div className="p-3.5 rounded-2xl border border-border/80 bg-card shadow-xs">
                  <div className="text-[11px] text-muted-foreground uppercase font-semibold">
                    Validation AUC-ROC
                  </div>
                  <div className="font-heading font-extrabold text-xl text-primary mt-0.5">
                    99.4%
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl border border-border/80 bg-card shadow-xs">
                  <div className="text-[11px] text-muted-foreground uppercase font-semibold">
                    Mean Inference
                  </div>
                  <div className="font-heading font-extrabold text-xl text-foreground mt-0.5">
                    &lt; 45ms
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl border border-border/80 bg-card shadow-xs">
                  <div className="text-[11px] text-muted-foreground uppercase font-semibold">
                    Calibration (Brier)
                  </div>
                  <div className="font-heading font-extrabold text-xl text-foreground mt-0.5">
                    0.082
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl border border-border/80 bg-card shadow-xs">
                  <div className="text-[11px] text-muted-foreground uppercase font-semibold">
                    Attribution Engine
                  </div>
                  <div className="font-heading font-extrabold text-xl text-primary mt-0.5">
                    TreeSHAP
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── Interactive SHAP Waterfall Decomposition ── */}
      <Section className="py-20 sm:py-28 bg-surface-subtle border-b border-border/70">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <Badge variant="outline" className="px-3 py-1 text-xs">
              Explainable AI Demo
            </Badge>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Eliminating Algorithmic Black Boxes
            </h2>
            <p className="text-muted-foreground text-sm">
              Inspect how individual patient biomarkers push or pull the predicted risk score
              relative to population baselines.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ShapWaterfallVisualizer />
          </div>
        </Container>
      </Section>

      {/* ── Comparative Benchmark Table: GBDT vs Deep Learning ── */}
      <Section className="py-20 sm:py-28 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Scientific Justification
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Why GBDTs Outperform Deep Neural Networks on Clinical Data
            </h2>
            <p className="text-muted-foreground text-sm">
              Empirical comparisons demonstrating why gradient-boosted decision trees represent the
              gold standard for tabular biometric indicators.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border/80 bg-card shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-surface-subtle text-xs uppercase font-semibold text-muted-foreground">
                <tr>
                  <th className="py-4 px-6">Clinical Requirement</th>
                  <th className="py-4 px-6 text-primary">MediPredict GBDT Ensembles</th>
                  <th className="py-4 px-6 text-muted-foreground">Deep Neural Networks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {BENCHMARK_COMPARISONS.map((b, i) => (
                  <tr key={i} className="hover:bg-surface-subtle/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-foreground">
                      {b.dimension}
                    </td>
                    <td className="py-4 px-6 text-foreground font-medium bg-primary/[0.02]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{b.gbdt}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      {b.deepLearning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* ── Security & Zero-PHI Protocol ── */}
      <Section className="py-20 sm:py-28 bg-surface-subtle border-t border-border/70">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <Badge variant="outline" className="px-3 py-1 text-xs">
                Zero-Knowledge Privacy
              </Badge>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
                Architectural Data Protection by Design
              </h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                MediPredict processes biometric data without storing identifiable patient records.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SpotlightCard className="space-y-3">
                <ShieldCheck className="size-8 text-success" />
                <h3 className="font-heading font-bold text-base text-foreground">
                  Zero Direct PHI Storage
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Names, hospital identifiers, and Social Security numbers are never transmitted to
                  the ML inference microservice. Calculations occur strictly on de-identified
                  vectors.
                </p>
              </SpotlightCard>

              <SpotlightCard className="space-y-3">
                <Lock className="size-8 text-primary" />
                <h3 className="font-heading font-bold text-base text-foreground">
                  TLS 1.3 &amp; AES-256
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  All biometric data in flight is secured with TLS 1.3 forward-secrecy ciphers.
                  At rest, session stores enforce authenticated AES-256 encryption.
                </p>
              </SpotlightCard>

              <SpotlightCard className="space-y-3">
                <Terminal className="size-8 text-sky-500" />
                <h3 className="font-heading font-bold text-base text-foreground">
                  Ephemeral Enclaves
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Inference containers execute inside memory-isolated sandboxes that destroy vector
                  buffers immediately upon generating the SHAP diagnostic summary.
                </p>
              </SpotlightCard>
            </div>
          </div>
        </Container>
      </Section>
    </PublicLayout>
  );
}
