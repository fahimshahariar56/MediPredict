"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HeartPulse,
  Activity,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/animation/BorderBeam";
import { FadeIn } from "@/components/animation/FadeIn";
import { PREDICTION_MODELS } from "../data/landing-data";
import { cn } from "@/lib/utils";

export function PredictionPreviewSection() {
  const [activeModelId, setActiveModelId] = useState("cardiovascular");

  const activeModel =
    PREDICTION_MODELS.find((m) => m.id === activeModelId) || PREDICTION_MODELS[0];

  return (
    <section id="preview" className="py-16 sm:py-24 bg-background scroll-mt-20">
      <Container className="space-y-12">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="navy">Interactive Prediction Preview</Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
              Experience Explainable Health Risk Prediction
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Explore how MediPredict combines multi-variable clinical biomarkers with
              SHAP attribution to provide clear, actionable risk stratification.
            </p>
          </div>
        </FadeIn>

        {/* Model Switcher Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-surface-subtle border border-border/80 shadow-xs">
            {PREDICTION_MODELS.map((model) => {
              const isActive = model.id === activeModelId;
              return (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setActiveModelId(model.id)}
                  className={cn(
                    "flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer",
                    isActive
                      ? "bg-background text-foreground shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {model.id === "cardiovascular" ? (
                    <HeartPulse className={cn("size-4", isActive ? "text-primary" : "text-muted-foreground")} />
                  ) : (
                    <Activity className={cn("size-4", isActive ? "text-primary" : "text-muted-foreground")} />
                  )}
                  <span>{model.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Diagnostic Preview Card Container */}
        <FadeIn direction="up" delay={0.1}>
          <div className="relative rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-lg overflow-hidden">
            <BorderBeam size={280} duration={10} delay={0} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Model Details, Inputs, and Illustration */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={activeModel.riskVariant}>
                      {activeModel.badge}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-medium">
                      Simulated Clinical Case
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground">
                    {activeModel.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {activeModel.tagline}
                  </p>
                </div>

                {/* Patient Biomarker Input Summary */}
                <div className="space-y-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Assessed Patient Biomarkers
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {activeModel.sampleInputs.map((input) => (
                      <div
                        key={input.label}
                        className="p-2.5 rounded-xl border border-border/70 bg-surface-subtle"
                      >
                        <div className="text-[11px] text-muted-foreground leading-tight truncate">
                          {input.label}
                        </div>
                        <div className="text-xs font-bold text-foreground mt-1 font-mono">
                          {input.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialized Doctor Visual */}
                <div className="relative aspect-16/9 w-full max-w-sm rounded-2xl overflow-hidden border border-border/50 bg-surface-subtle p-2">
                  <Image
                    src={activeModel.asset}
                    alt={activeModel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right Column: Calculated Risk Score & SHAP Factor Breakdown */}
              <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-border/70 lg:pl-8">
                {/* Risk Score Summary Banner */}
                <div className="p-5 rounded-2xl border border-border/80 bg-surface-subtle space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        Calculated Risk Score
                      </span>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-4xl font-heading font-bold text-foreground">
                          {activeModel.riskScore}%
                        </span>
                        <Badge variant={activeModel.riskVariant} className="text-xs">
                          {activeModel.riskCategory}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground">Model Confidence</span>
                      <div className="text-sm font-semibold text-foreground">94.8% High</div>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                    {activeModel.summary}
                  </p>
                </div>

                {/* SHAP Feature Contribution Waterfall */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Sparkles className="size-3 text-primary" />
                      Key Contributing Factors (SHAP Attribution)
                    </span>
                    <span className="text-[11px] text-muted-foreground">Relative Weight</span>
                  </div>

                  <div className="space-y-2.5">
                    {activeModel.shapContributors.map((factor) => {
                      const isRisk = factor.direction === "risk";
                      return (
                        <div key={factor.factor} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-foreground">
                              {factor.factor}
                            </span>
                            <span
                              className={cn(
                                "font-mono font-semibold",
                                isRisk ? "text-rose-600 dark:text-rose-400" : "text-emerald-600 dark:text-emerald-400"
                              )}
                            >
                              {factor.contribution} {isRisk ? "(+Risk)" : "(-Protective)"}
                            </span>
                          </div>
                          {/* Progress bar */}
                          <div className="h-1.5 w-full rounded-full bg-border/60 overflow-hidden">
                            <div
                              className={cn(
                                "h-full rounded-full transition-all duration-500",
                                isRisk ? "bg-rose-500" : "bg-emerald-500"
                              )}
                              style={{ width: `${factor.percent}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Clinical Guidance Box */}
                <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 space-y-1.5 text-xs">
                  <div className="font-semibold text-foreground flex items-center gap-1.5">
                    <ShieldCheck className="size-4 text-primary" />
                    Recommended Clinical Next Step:
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {activeModel.clinicalRecommendation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default PredictionPreviewSection;

