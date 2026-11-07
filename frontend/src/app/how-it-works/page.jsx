"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  Search,
  Filter,
} from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InteractiveWorkflowJourney } from "@/features/how-it-works/components/InteractiveWorkflowJourney";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { FadeIn } from "@/components/animation/FadeIn";

const BIOMARKERS_DATA = [
  {
    name: "Fasting Plasma Glucose",
    category: "Metabolic",
    unit: "mg/dL",
    normal: "70 – 99 mg/dL",
    elevated: "100 – 125 mg/dL (Pre-diabetic)",
    high: "≥ 126 mg/dL (Diabetic Range)",
    role: "Fundamental metric of baseline glycemic homeostasis and pancreatic beta-cell insulin secretion.",
  },
  {
    name: "Glycated Hemoglobin (HbA1c)",
    category: "Metabolic",
    unit: "%",
    normal: "< 5.7%",
    elevated: "5.7% – 6.4%",
    high: "≥ 6.5%",
    role: "Measures 90-day average blood sugar; essential for dampening acute daily fluctuations in risk assessment.",
  },
  {
    name: "Resting Systolic Blood Pressure",
    category: "Cardiovascular",
    unit: "mmHg",
    normal: "< 120 mmHg",
    elevated: "120 – 129 mmHg",
    high: "≥ 130 mmHg (Hypertension Stage 1/2)",
    role: "Reflects peak arterial pressure during cardiac ventricular contraction and vascular stiffness.",
  },
  {
    name: "High-Density Lipoprotein (HDL)",
    category: "Cardiovascular",
    unit: "mg/dL",
    normal: "> 50 mg/dL (Cardioprotective)",
    elevated: "40 – 50 mg/dL",
    high: "< 40 mg/dL (Atherogenic Risk)",
    role: "Reverse cholesterol transport carrier; higher concentrations correlate with lower atherosclerotic plaque formation.",
  },
  {
    name: "Serum Creatinine & eGFR",
    category: "Renal",
    unit: "mg/dL & mL/min",
    normal: "eGFR > 90 mL/min/1.73m²",
    elevated: "eGFR 60 – 89 mL/min",
    high: "eGFR < 60 mL/min (Renal Impairment)",
    role: "Indicates kidney filtration capacity and renal vascular resilience under hypertensive pressure.",
  },
  {
    name: "Body Mass Index (BMI)",
    category: "Lifestyle",
    unit: "kg/m²",
    normal: "18.5 – 24.9 kg/m²",
    elevated: "25.0 – 29.9 kg/m² (Overweight)",
    high: "≥ 30.0 kg/m² (Obese Tiers)",
    role: "Anthropometric proxy for visceral adiposity and systemic low-grade inflammatory cytokine release.",
  },
];

export default function HowItWorksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Metabolic", "Cardiovascular", "Renal", "Lifestyle"];

  const filteredBiomarkers = BIOMARKERS_DATA.filter((b) => {
    const matchesCat = selectedCategory === "All" || b.category === selectedCategory;
    const matchesQuery =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <PublicLayout>
      {/* ── Journey Hero ── */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-border/60">
        <InteractiveGridPattern className="opacity-40 dark:opacity-10" />
        <Container>
          <div className="max-w-3xl space-y-5">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                <Activity className="size-3.5" />
                <span>End-to-End Diagnostic Pipeline</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.12]">
                From Biometric Vitals to{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Explainable Risk Scores.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Explore the step-by-step pipeline through which MediPredict cleans, computes,
                explains, and stratifies patient health risks without compromising patient privacy.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── Interactive Process Journey ── */}
      <Section className="py-20 sm:py-28 bg-surface-subtle border-b border-border/70">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <Badge variant="outline" className="px-3 py-1 text-xs">
              Live Architecture Explorer
            </Badge>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              4-Stage Decision Support Pipeline
            </h2>
            <p className="text-muted-foreground text-sm">
              Click any stage below to inspect the mathematical transformations and data outputs.
            </p>
          </div>

          <InteractiveWorkflowJourney />
        </Container>
      </Section>

      {/* ── Filterable Biomarker Reference Library ── */}
      <Section className="py-20 sm:py-28 bg-background">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Clinical Reference Guide
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
                Supported Clinical Biomarkers
              </h2>
              <p className="text-muted-foreground text-sm">
                MediPredict standardizes non-invasive lab metrics against international medical guidelines.
              </p>
            </div>

            {/* Search Input & Category Filters */}
            <div className="space-y-3 w-full md:w-auto">
              <div className="relative">
                <Search className="size-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Filter biomarkers (e.g. Glucose)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-10 w-full md:w-72 rounded-xl border border-input bg-card pl-10 pr-4 text-xs outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={[
                      "text-xs px-3 py-1 rounded-lg font-medium transition-all",
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "border border-border/80 bg-surface-subtle hover:bg-card text-muted-foreground",
                    ].join(" ")}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Biomarkers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBiomarkers.map((b) => (
              <Card
                key={b.name}
                className="p-6 rounded-2xl border-border/80 bg-card hover:border-primary/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-[10px] font-mono uppercase">
                      {b.category}
                    </Badge>
                    <span className="text-xs font-mono text-muted-foreground">{b.unit}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground">{b.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.role}</p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-border/60 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Normal:</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      {b.normal}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Elevated:</span>
                    <span className="font-medium text-amber-600 dark:text-amber-400">
                      {b.elevated}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">High Risk:</span>
                    <span className="font-semibold text-rose-600 dark:text-rose-400">
                      {b.high}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <section className="py-20 sm:py-24 bg-surface-subtle border-t border-border/70">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Ready to Inspect the Explainable AI Methodology?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Learn how game-theoretic Shapley values calculate mathematical attributions for each
              prediction without black-box opacity.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" variant="default" className="gap-2">
                <Link href="/ai-technology">
                  <span>Explore AI Technology</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
