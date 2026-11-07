"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animation/FadeIn";
import { StaggerList, StaggerItem } from "@/components/animation/StaggerList";
import { HOW_IT_WORKS_STEPS } from "../data/landing-data";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-background scroll-mt-20">
      <Container className="space-y-16">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="navy">Streamlined Clinical Workflow</Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
              From Biomarkers to Actionable Prevention in Seconds
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our 4-step diagnostic pipeline transforms raw biometric vitals into
              transparent clinical risk stratifications.
            </p>
          </div>
        </FadeIn>

        {/* 4-Step Cards */}
        <StaggerList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <StaggerItem key={step.step}>
              <Card className="p-6 h-full flex flex-col justify-between border-border/80 bg-surface-subtle/50 hover:bg-surface-subtle transition-all duration-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-extrabold text-3xl text-primary/30">
                      {step.step}
                    </span>
                    <Badge variant="outline" className="text-[10px] font-mono">
                      {step.tag}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-base text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs text-primary font-medium">
                  <CheckCircle2 className="size-3.5" />
                  <span>Clinical Phase {step.step}</span>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerList>
      </Container>
    </section>
  );
}

export default HowItWorksSection;

