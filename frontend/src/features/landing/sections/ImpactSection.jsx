"use client";

import React from "react";
import Image from "next/image";
import { TrendingUp, ShieldCheck, Clock, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animation/FadeIn";
import { StaggerList, StaggerItem } from "@/components/animation/StaggerList";
import { HEALTHCARE_IMPACT } from "../data/landing-data";

export function ImpactSection() {
  return (
    <section id="impact" className="py-16 sm:py-24 bg-background scroll-mt-20">
      <Container className="space-y-16">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="navy">Measurable Clinical Outcomes</Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
              Transforming Preventative Care Statistics
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Real-world clinical utility demonstrated across early risk identification,
              patient compliance, and physician consultation speed.
            </p>
          </div>
        </FadeIn>

        <StaggerList className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HEALTHCARE_IMPACT.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="p-6 h-full border-border/80 bg-surface-subtle flex flex-col justify-between">
                <div>
                  <div className="font-heading font-extrabold text-4xl text-primary tracking-tight">
                    {item.stat}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mt-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-border/60 mt-6 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <TrendingUp className="size-3.5" />
                  <span>Verified Clinical Metric</span>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerList>
      </Container>
    </section>
  );
}

export default ImpactSection;

