"use client";

import React, { useState } from "react";
import { Database, Cpu, Sparkles, FileCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    id: "01",
    title: "Vectorized Biomarker Intake",
    short: "Biomarker Intake",
    icon: Database,
    tag: "Stage 01 — Patient Profile",
    headline: "Zero-Knowledge Biometric Standardization",
    description:
      "Patient vitals and routine serum blood panels (fasting glucose, lipids, blood pressure, BMI) are parsed, checked against physiological bounds, and transformed into an anonymous numerical tensor.",
    metrics: [
      { label: "Supported Biomarkers", value: "32 Clinical Indicators" },
      { label: "Privacy Vectorization", value: "Zero PHI Stored" },
      { label: "Validation Bounds", value: "AHA/ADA Compliant" },
    ],
    interactivePreview: {
      type: "input",
      inputs: [
        { name: "Fasting Glucose", val: "112 mg/dL", status: "borderline" },
        { name: "Blood Pressure", val: "128/82 mmHg", status: "normal" },
        { name: "HbA1c", val: "5.8%", status: "borderline" },
        { name: "Total Cholesterol", val: "205 mg/dL", status: "elevated" },
      ],
    },
  },
  {
    id: "02",
    title: "Gradient-Boosted Tree Ensemble",
    short: "GBDT Computation",
    icon: Cpu,
    tag: "Stage 02 — Model Inference",
    headline: "Ensemble Trees Traversing Thousands of Splits",
    description:
      "Vectors pass through 1,200 calibrated decision trees across XGBoost and LightGBM models. Complex multi-factor non-linear correlations are resolved in under 45 milliseconds.",
    metrics: [
      { label: "Inference Latency", value: "< 45 milliseconds" },
      { label: "Calibration", value: "Isotonic Regression" },
      { label: "Model Architecture", value: "Dual GBDT Ensembles" },
    ],
    interactivePreview: {
      type: "tree",
      branches: [
        { condition: "Glucose > 100 mg/dL", branch: "Right Node (Path A)" },
        { condition: "Systolic BP > 120 mmHg", branch: "Node 14B: Split 0.38" },
        { condition: "BMI >= 27.5 kg/m²", branch: "Leaf Weight: +0.24" },
      ],
    },
  },
  {
    id: "03",
    title: "SHAP Explainability Decomposition",
    short: "SHAP Attribution",
    icon: Sparkles,
    tag: "Stage 03 — Attribution",
    headline: "Game-Theoretic Local Explanation Synthesis",
    description:
      "Shapley values allocate exact credit to each individual input feature, mathematically isolating which specific biomarkers pushed the score higher or offered protective mitigation.",
    metrics: [
      { label: "Attribution Engine", value: "TreeSHAP v0.42" },
      { label: "Fidelity", value: "100% Additive Efficiency" },
      { label: "Clinician View", value: "Waterfall Decomposition" },
    ],
    interactivePreview: {
      type: "shap",
      attributions: [
        { feature: "Glucose", weight: "+14.2% Risk", direction: "high" },
        { feature: "Blood Pressure", weight: "+9.8% Risk", direction: "high" },
        { feature: "HDL Level", weight: "-5.6% Protection", direction: "low" },
      ],
    },
  },
  {
    id: "04",
    title: "Stratified Risk & Clinical Action",
    short: "Clinical Action",
    icon: FileCheck,
    tag: "Stage 04 — Decision Support",
    headline: "Physician-Ready Interpretive Report",
    description:
      "Generates an actionable summary stratifying the patient into Low, Moderate, or Elevated risk tiers with evidence-based lifestyle levers and clinical referral recommendations.",
    metrics: [
      { label: "Report Format", value: "Interactive & Printable" },
      { label: "Guideline Alignment", value: "ACC/AHA & ADA Standards" },
      { label: "Next Steps", value: "Triage & Consult Protocol" },
    ],
    interactivePreview: {
      type: "result",
      tier: "Moderate Risk (38.6%)",
      tierColor: "text-amber-600 dark:text-amber-400",
      recommendation: "Schedule routine fasting lipid re-test within 90 days. Focus on dietary glycemic load.",
    },
  },
];

export function InteractiveWorkflowJourney() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = STEPS[activeStepIndex];

  return (
    <div className="space-y-10">
      {/* Step Navigator Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {STEPS.map((step, idx) => {
          const isActive = idx === activeStepIndex;
          const isPast = idx < activeStepIndex;
          const StepIcon = step.icon;

          return (
            <button
              key={step.id}
              onClick={() => setActiveStepIndex(idx)}
              className={[
                "group text-left p-4 rounded-2xl border transition-all duration-200 outline-none select-none relative overflow-hidden",
                isActive
                  ? "border-primary bg-primary/10 shadow-sm"
                  : "border-border/80 bg-card hover:bg-surface-subtle hover:border-border",
              ].join(" ")}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={[
                    "font-mono text-xs font-bold px-2 py-0.5 rounded-md",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-surface-subtle text-muted-foreground",
                  ].join(" ")}
                >
                  {step.id}
                </span>
                <StepIcon
                  className={[
                    "size-4 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                  ].join(" ")}
                />
              </div>
              <h4 className="font-heading font-semibold text-sm text-foreground line-clamp-1">
                {step.short}
              </h4>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Stage {idx + 1} of 4
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Step Showcase Card */}
      <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-xs transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Description & Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                {activeStep.tag}
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
                {activeStep.headline}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {activeStep.description}
              </p>
            </div>

            {/* Metrics Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {activeStep.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-border/70 bg-surface-subtle p-3.5 space-y-1"
                >
                  <div className="text-[11px] text-muted-foreground">{m.label}</div>
                  <div className="font-heading font-bold text-sm text-foreground">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Step Controls */}
            <div className="flex items-center gap-3 pt-2">
              {activeStepIndex > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveStepIndex((prev) => prev - 1)}
                >
                  Previous Stage
                </Button>
              )}
              {activeStepIndex < STEPS.length - 1 ? (
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => setActiveStepIndex((prev) => prev + 1)}
                  className="gap-1.5"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="size-3.5" />
                </Button>
              ) : (
                <Button
                  variant="navy"
                  size="sm"
                  onClick={() => setActiveStepIndex(0)}
                  className="gap-1.5"
                >
                  <span>Replay Workflow</span>
                </Button>
              )}
            </div>
          </div>

          {/* Right Column: Live Interactive State Visualizer */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.02] p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="text-xs font-semibold text-foreground flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary animate-pulse" />
                  Live Architecture State
                </span>
                <Badge variant="outline" className="text-[10px] font-mono py-0">
                  Step {activeStep.id}/04
                </Badge>
              </div>

              {/* Step 1 Interactive Preview */}
              {activeStep.interactivePreview.type === "input" && (
                <div className="space-y-2.5">
                  <div className="text-xs text-muted-foreground font-medium">
                    Sanitized Clinical Vector:
                  </div>
                  {activeStep.interactivePreview.inputs.map((inp) => (
                    <div
                      key={inp.name}
                      className="flex items-center justify-between p-2.5 rounded-xl border border-border/60 bg-card text-xs"
                    >
                      <span className="text-muted-foreground">{inp.name}</span>
                      <span className="font-mono font-semibold text-foreground">
                        {inp.val}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Step 2 Interactive Preview */}
              {activeStep.interactivePreview.type === "tree" && (
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="text-xs font-sans text-muted-foreground font-medium">
                    Sample Decision Split Trajectory:
                  </div>
                  {activeStep.interactivePreview.branches.map((b, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl border border-border/60 bg-card space-y-1"
                    >
                      <div className="text-primary text-[11px] font-semibold">
                        {b.condition}
                      </div>
                      <div className="text-muted-foreground text-[10px]">
                        ➔ {b.branch}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Step 3 Interactive Preview */}
              {activeStep.interactivePreview.type === "shap" && (
                <div className="space-y-2.5 text-xs">
                  <div className="text-xs text-muted-foreground font-medium">
                    Decomposed Risk Attributions:
                  </div>
                  {activeStep.interactivePreview.attributions.map((a, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2.5 rounded-xl border border-border/60 bg-card"
                    >
                      <span className="text-foreground">{a.feature}</span>
                      <span
                        className={[
                          "font-mono font-bold",
                          a.direction === "high"
                            ? "text-rose-600 dark:text-rose-400"
                            : "text-emerald-600 dark:text-emerald-400",
                        ].join(" ")}
                      >
                        {a.weight}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Step 4 Interactive Preview */}
              {activeStep.interactivePreview.type === "result" && (
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl border border-amber-500/30 bg-amber-500/10 text-center">
                    <div className="text-[10px] text-muted-foreground uppercase font-semibold">
                      Calculated Tier
                    </div>
                    <div className="font-heading font-extrabold text-base text-amber-700 dark:text-amber-300 mt-0.5">
                      {activeStep.interactivePreview.tier}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl border border-border/60 bg-card text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Clinical Lever:</strong>{" "}
                    {activeStep.interactivePreview.recommendation}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InteractiveWorkflowJourney;
