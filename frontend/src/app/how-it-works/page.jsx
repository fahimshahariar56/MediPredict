"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Cpu,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  BarChart3,
  FileCheck2,
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

const DETAILED_STEPS = [
  {
    number: "01",
    tag: "Patient Input",
    title: "Non-Invasive Biomarker Entry",
    description:
      "Users input standard clinical indicators and routine laboratory values: resting blood pressure, fasting plasma glucose, total cholesterol, BMI, and physical activity profiles. Client-side validators verify unit conformity and clinical physiological bounds.",
    points: [
      "Standard medical metrics (mg/dL, mmHg, kg/m²)",
      "Strict zero-knowledge input vectorization",
      "No invasive equipment or wearable sensor mandates",
    ],
    icon: Database,
  },
  {
    number: "02",
    tag: "Ensemble Computation",
    title: "Gradient-Boosted Tree Inference",
    description:
      "Input vectors are fed into calibrated XGBoost and LightGBM models. Thousands of decision branches calculate conditional risk probabilities, capturing complex multi-factor interactions that simple clinical threshold scorecards frequently overlook.",
    points: [
      "Trained on validated multi-center clinical cohorts",
      "Isotonic regression calibration for authentic probabilities",
      "Execution latency consistently under 50 milliseconds",
    ],
    icon: Cpu,
  },
  {
    number: "03",
    tag: "Explainable AI",
    title: "SHAP Factor Attribution",
    description:
      "Our TreeExplainer calculates exact Shapley values according to cooperative game theory. Every input biomarker is evaluated to measure how many percentage points it contributed toward elevating or mitigating the calculated disease risk.",
    points: [
      "Positive (+Risk) vs Negative (-Protective) attribution",
      "Mathematical proof of local explanation fidelity",
      "Direct visualization of the patient's primary drivers",
    ],
    icon: Sparkles,
  },
  {
    number: "04",
    tag: "Clinical Action",
    title: "Stratified Risk & Actionable Care Plan",
    description:
      "The patient receives an intuitive risk tier (Low, Moderate, or High) alongside evidence-based lifestyle modifications and clear criteria on when to schedule secondary clinical evaluations with a physician.",
    points: [
      "Plain-language diagnostic summary for patient clarity",
      "Downloadable and printable physician-ready report",
      "Evidence-backed preventative lifestyle guidance",
    ],
    icon: FileCheck2,
  },
];

const BIOMARKER_GUIDE = [
  {
    name: "Fasting Plasma Glucose",
    unit: "mg/dL",
    normalRange: "< 100 mg/dL",
    category: "Metabolic",
    role: "Primary indicator of baseline glycemic control and pancreatic insulin production.",
  },
  {
    name: "Glycated Hemoglobin (HbA1c)",
    unit: "%",
    normalRange: "< 5.7%",
    category: "Metabolic",
    role: "Reflects average blood sugar levels over the preceding 2 to 3 months.",
  },
  {
    name: "Resting Systolic Blood Pressure",
    unit: "mmHg",
    normalRange: "< 120 mmHg",
    category: "Cardiovascular",
    role: "Measures arterial pressure during cardiac contraction; fundamental indicator of vascular resistance.",
  },
  {
    name: "Total Serum Cholesterol",
    unit: "mg/dL",
    normalRange: "< 200 mg/dL",
    category: "Cardiovascular",
    role: "Quantifies circulating blood lipids contributing to potential atherosclerotic plaque development.",
  },
  {
    name: "Body Mass Index (BMI)",
    unit: "kg/m²",
    normalRange: "18.5 – 24.9",
    category: "Anthropometric",
    role: "Standard ratio of body weight to height squared; correlated with metabolic strain.",
  },
  {
    name: "Exercise ST Depression",
    unit: "mm",
    normalRange: "< 1.0 mm",
    category: "Cardiovascular",
    role: "Electrocardiographic indicator of myocardial ischemia under physical stress.",
  },
];

export default function HowItWorksPage() {
  return (
    <PublicLayout>
      {/* Header Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-border/60 bg-surface-subtle">
        <Container>
          <FadeIn direction="up">
            <div className="max-w-3xl space-y-4">
              <Badge variant="navy">Methodology &amp; User Journey</Badge>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.12]">
                How MediPredict Computes{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Clinical Risk Scores
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                A transparent, step-by-step walkthrough of how everyday biometric vitals
                move through our machine learning pipeline into actionable preventive insights.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 4 Detailed Pipeline Steps */}
      <Section spacing="default" className="bg-background">
        <Container className="space-y-16">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                The 4-Stage Diagnostic Pipeline
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
                Rigorous, Explainable, &amp; Medically Grounded
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {DETAILED_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.number} direction="up" delay={idx * 0.08}>
                  <Card className="p-6 sm:p-8 border-border/80 bg-surface-subtle/50 hover:bg-surface-subtle transition-all duration-200">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      <div className="lg:col-span-1 flex lg:flex-col items-center gap-3">
                        <span className="font-heading font-extrabold text-3xl text-primary/40">
                          {step.number}
                        </span>
                        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </div>
                      </div>

                      <div className="lg:col-span-7 space-y-3">
                        <Badge variant="outline" className="text-xs font-mono">
                          {step.tag}
                        </Badge>
                        <h3 className="font-heading font-bold text-2xl text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      <div className="lg:col-span-4 rounded-2xl border border-border/80 bg-background p-4 space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                          Key Technical Safeguards:
                        </span>
                        <ul className="space-y-1.5 text-xs text-muted-foreground">
                          {step.points.map((pt) => (
                            <li key={pt} className="flex items-start gap-1.5">
                              <CheckCircle2 className="size-3.5 text-success shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Biomarker Reference Guide */}
      <Section spacing="default" className="bg-surface-subtle border-t border-border/70">
        <Container className="space-y-12">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge variant="navy">Biomarker Glossary</Badge>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
                Evaluated Clinical Biomarkers
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                MediPredict focuses on standardized, non-invasive metrics commonly collected in
                routine health checkups and blood panels.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BIOMARKER_GUIDE.map((bio) => (
              <Card key={bio.name} className="p-5 bg-background border-border/80 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={bio.category === "Cardiovascular" ? "default" : "secondary"}>
                      {bio.category}
                    </Badge>
                    <span className="text-xs font-mono text-muted-foreground">
                      Unit: {bio.unit}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-base text-foreground mt-1">
                    {bio.name}
                  </h3>
                  <div className="text-xs text-primary font-medium mt-1">
                    Target: {bio.normalRange}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {bio.role}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-8">
            <Link href="/#preview">
              <ShimmerButton className="shadow-md">
                <span>Try Live Model Demonstration</span>
                <ArrowRight className="size-4" />
              </ShimmerButton>
            </Link>
          </div>
        </Container>
      </Section>
    </PublicLayout>
  );
}

