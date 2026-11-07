"use client";

import React from "react";
import Image from "next/image";
import { Cpu, ShieldCheck, Zap, Layers, Lock, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BorderBeam } from "@/components/animation/BorderBeam";
import { FadeIn } from "@/components/animation/FadeIn";
import { StaggerList, StaggerItem } from "@/components/animation/StaggerList";
import { TECHNOLOGY_FEATURES } from "../data/landing-data";

export function TechnologySection() {
  return (
    <section id="technology" className="py-16 sm:py-24 bg-surface-subtle border-t border-border/70 scroll-mt-20">
      <Container className="space-y-16">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="navy">Architectural Excellence</Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
              Built on Modern ML &amp; Explainable Intelligence
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Every prediction is powered by optimized gradient-boosted ensembles,
              interpretable game-theory attributions, and ultra-secure microservice APIs.
            </p>
          </div>
        </FadeIn>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: XGBoost Ensembles (Featured Card with Border Beam) */}
          <div className="lg:col-span-7">
            <Card className="relative overflow-hidden p-6 sm:p-8 h-full bg-card border-border/80 shadow-sm flex flex-col justify-between">
              <BorderBeam size={220} duration={10} delay={2} />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="info">Ensemble Model</Badge>
                  <span className="text-xs font-mono text-muted-foreground">XGBoost + LightGBM</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                    Clinical Multi-Tree Ensembles
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Rather than relying on single heuristics, MediPredict evaluates patient records across hundreds of specialized gradient-boosted decision trees trained on multi-center clinical cohorts.
                  </p>
                </div>
              </div>

              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-border/60 mt-6 text-center">
                <div className="p-2.5 rounded-xl bg-surface-subtle">
                  <div className="text-xs text-muted-foreground">Calibration</div>
                  <div className="text-sm font-bold text-foreground mt-0.5">Brier 0.08</div>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-subtle">
                  <div className="text-xs text-muted-foreground">Sensitivity</div>
                  <div className="text-sm font-bold text-foreground mt-0.5">96.2%</div>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-subtle">
                  <div className="text-xs text-muted-foreground">Specificity</div>
                  <div className="text-sm font-bold text-foreground mt-0.5">94.7%</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Card 2: Genomic & DNA Artwork Integration */}
          <div className="lg:col-span-5">
            <Card className="relative overflow-hidden p-6 sm:p-8 h-full bg-card border-border/80 shadow-sm flex flex-col justify-between">
              <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden mb-4 border border-border/50">
                <Image
                  src="/assets/dna.jpg"
                  alt="DNA Biomarker Analysis"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">Interpretability</Badge>
                <h3 className="text-lg font-heading font-bold text-foreground">
                  SHAP Game-Theoretic Attribution
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every prediction generates exact Shapley values, calculating how each biomarker pushes the risk score up or down.
                </p>
              </div>
            </Card>
          </div>

          {/* Feature List 3 & 4 */}
          {TECHNOLOGY_FEATURES.slice(2).map((feat) => (
            <div key={feat.title} className="lg:col-span-6">
              <Card className="p-6 h-full bg-card border-border/80 shadow-2xs">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{feat.category}</Badge>
                  <span className="text-xs font-medium text-primary">{feat.highlight}</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {feat.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {feat.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TechnologySection;

