"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Activity,
  Lock,
  ArrowRight,
  Sparkles,
  HeartPulse,
  TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animation/FadeIn";
import { ScaleIn } from "@/components/animation/ScaleIn";
import { Card } from "@/components/ui/card";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28">
      {/* Background Interactive Grid & Ambient Lighting */}
      <InteractiveGridPattern className="opacity-60 dark:opacity-20" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 -z-10 h-[400px] w-[400px] rounded-full bg-sky-200/40 blur-[100px] dark:bg-sky-950/20"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Description, CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <FadeIn direction="up" delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-medium text-primary">
                <Sparkles className="size-3.5" />
                <span>Next-Gen AI Healthcare Platform</span>
                <span className="text-primary/40">•</span>
                <span className="text-muted-foreground font-normal hidden sm:inline">
                  Clinical-Grade Diagnostics
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.12]">
                Predict Health Risks{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Before They Happen
                </span>{" "}
                With Explainable AI
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                MediPredict delivers precision risk stratification for cardiovascular
                and metabolic disease. Combining non-invasive biomarker modeling with
                transparent SHAP explainability.
              </p>
            </FadeIn>

            {/* CTA Group */}
            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a href="#preview" className="w-full sm:w-auto">
                  <ShimmerButton className="w-full sm:w-auto shadow-md">
                    <span>Start Free Assessment</span>
                    <ArrowRight className="size-4" />
                  </ShimmerButton>
                </a>
                <a href="#how-it-works" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-xl font-medium shadow-xs"
                  >
                    Explore Methodology
                  </Button>
                </a>
              </div>
            </FadeIn>

            {/* Micro Trust Indicators */}
            <FadeIn direction="up" delay={0.25}>
              <div className="pt-4 border-t border-border/70 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="size-4 text-primary" />
                  <span>99.4% ROC-AUC Validation</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Activity className="size-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Sub-50ms Inference</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Lock className="size-4 text-primary" />
                  <span>Zero-Knowledge Encryption</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: High-Tech Healthcare Artwork & Floating Diagnostic Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <ScaleIn delay={0.15} className="relative w-full max-w-lg lg:max-w-none">
              {/* Central Illustration Container */}
              <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-white to-surface-subtle p-4 sm:p-6 shadow-xl dark:from-card dark:to-background">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/ai-medicine-artificial-intelligence-help-medical-diagnosis-treatment-patients-futuristic-tech-medicine-flat-doctors-using-innovative-technologies-research-disease-analysis.png"
                    alt="MediPredict AI Medical Diagnosis Platform"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-contain"
                  />
                </div>

                {/* Bottom Stats Summary Strip inside artwork card */}
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Ensemble Model: Active</span>
                  <Badge variant="success" className="gap-1 py-0.5">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Optimal Performance
                  </Badge>
                </div>
              </div>

              {/* Floating Diagnostic Card: Top-Right */}
              <div className="absolute -top-6 -right-4 sm:-right-6 hidden sm:block">
                <Card className="p-3.5 shadow-lg border-border/80 bg-background/95 backdrop-blur-md max-w-xs animate-in fade-in duration-500">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                      <HeartPulse className="size-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-muted-foreground font-medium">
                        Cardiovascular Health
                      </div>
                      <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
                        <span>Low Risk (18%)</span>
                        <span className="text-emerald-600 text-[10px] font-normal flex items-center">
                          <TrendingDown className="size-3" /> -4%
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Floating Diagnostic Card: Bottom-Left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 hidden sm:block">
                <Card className="p-3.5 shadow-lg border-border/80 bg-background/95 backdrop-blur-md max-w-xs animate-in fade-in duration-700">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Sparkles className="size-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-muted-foreground font-medium">
                        Explainable AI (SHAP)
                      </div>
                      <div className="text-xs font-semibold text-foreground">
                        Transparent Attribution
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </ScaleIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;

