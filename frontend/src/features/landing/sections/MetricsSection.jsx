"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { NumberTicker } from "@/components/animation/NumberTicker";
import { FadeIn } from "@/components/animation/FadeIn";
import { StaggerList, StaggerItem } from "@/components/animation/StaggerList";
import { TRUST_METRICS } from "../data/landing-data";

export function MetricsSection() {
  return (
    <section className="border-y border-border/70 bg-surface-subtle py-12 sm:py-16">
      <Container>
        <FadeIn direction="up">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Empirical Performance
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-foreground mt-1">
              Validated on Rigorous Multi-Center Cohorts
            </h2>
          </div>
        </FadeIn>

        <StaggerList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_METRICS.map((metric) => (
            <StaggerItem key={metric.id}>
              <Card className="p-6 bg-background border-border/80 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <div className="font-heading font-bold text-3xl sm:text-4xl text-primary tracking-tight">
                    <NumberTicker
                      value={metric.value}
                      prefix={metric.prefix || ""}
                      suffix={metric.suffix || ""}
                      decimalPlaces={metric.decimalPlaces || 0}
                    />
                  </div>
                  <div className="mt-2 text-sm font-semibold text-foreground">
                    {metric.label}
                  </div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerList>
      </Container>
    </section>
  );
}

export default MetricsSection;

