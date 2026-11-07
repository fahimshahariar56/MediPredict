"use client";

import React from "react";
import Image from "next/image";
import { Activity, Sparkles, ShieldCheck, HeartPulse } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animation/FadeIn";
import { StaggerList, StaggerItem } from "@/components/animation/StaggerList";
import { ABOUT_PILLARS } from "../data/landing-data";

const iconMap = {
  Activity,
  Sparkles,
  ShieldCheck,
  HeartPulse,
};

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-surface-subtle border-t border-border/70 scroll-mt-20">
      <Container className="space-y-16">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <Badge variant="navy">About MediPredict</Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
              Bridging the Divide Between Medical Science &amp; Predictive Intelligence
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              MediPredict was founded on a simple clinical premise: early identification of
              metabolic and cardiovascular vulnerability saves lives. We build transparent AI
              that clinicians can trust and patients can understand.
            </p>
          </div>
        </div>

        {/* Middle: Clinical Team Artwork & Core Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <FadeIn direction="right" className="w-full max-w-md">
              <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden border border-border/80 bg-background p-4 shadow-sm">
                <Image
                  src="/assets/Doctors-rafiki.png"
                  alt="Medical Team Collaboration"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain"
                />
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <StaggerList className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_PILLARS.map((pillar) => {
                const IconComponent = iconMap[pillar.icon] || Activity;
                return (
                  <StaggerItem key={pillar.title}>
                    <Card className="p-5 h-full bg-background border-border/70 shadow-2xs hover:shadow-sm transition-all duration-200">
                      <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                        <IconComponent className="size-4.5" />
                      </div>
                      <h3 className="font-heading font-semibold text-base text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        {pillar.description}
                      </p>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerList>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;

