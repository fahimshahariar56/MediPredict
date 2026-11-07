"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/animation/FadeIn";
import { StaggerList, StaggerItem } from "@/components/animation/StaggerList";
import { TESTIMONIALS } from "../data/landing-data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-surface-subtle border-t border-border/70 scroll-mt-20">
      <Container className="space-y-16">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="navy">Clinical Consensus</Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-foreground">
              Trusted by Clinicians &amp; Healthcare Researchers
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Medical specialists and preventative care advocates share their experience
              with MediPredict&apos;s explainable diagnostics.
            </p>
          </div>
        </FadeIn>

        <StaggerList className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.id}>
              <Card className="p-6 h-full bg-card border-border/80 shadow-2xs flex flex-col justify-between">
                <div>
                  {/* Star Rating & Quote Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-[10px]">
                      {t.tag}
                    </Badge>
                  </div>

                  <p className="text-sm text-foreground/90 leading-relaxed italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 border-t border-border/60 mt-6 flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-sm text-foreground">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerList>
      </Container>
    </section>
  );
}

export default TestimonialsSection;

