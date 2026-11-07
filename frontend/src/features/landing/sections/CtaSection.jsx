"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FadeIn } from "@/components/animation/FadeIn";
import { BorderBeam } from "@/components/animation/BorderBeam";

export function CtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <Container>
        <FadeIn direction="up">
          <div className="relative overflow-hidden rounded-3xl bg-brand-navy text-white p-8 sm:p-12 lg:p-16 text-center shadow-xl">
            <BorderBeam size={320} duration={12} delay={0} colorFrom="#38bdf8" colorTo="#2563eb" />

            {/* Background subtle radial lighting */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
            />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
                <Sparkles className="size-3.5 text-sky-400" />
                <span>Begin Proactive Healthcare Today</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white leading-tight">
                Understand Your Health Risks Before They Escalate
              </h2>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
                Join thousands of individuals and healthcare professionals using
                MediPredict&apos;s explainable AI risk assessments.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a href="#preview" className="w-full sm:w-auto">
                  <ShimmerButton
                    background="var(--primary)"
                    shimmerColor="rgba(255, 255, 255, 0.6)"
                    className="w-full sm:w-auto shadow-lg"
                  >
                    <span>Start Free Assessment</span>
                    <ArrowRight className="size-4" />
                  </ShimmerButton>
                </a>
                <Link href="/login" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white rounded-xl"
                  >
                    Sign In to Portal
                  </Button>
                </Link>
              </div>

              {/* Trust Tag Strip */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-sky-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-sky-400" />
                  <span>Sub-second diagnostic computation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-sky-400" />
                  <span>HIPAA &amp; GDPR compliant</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default CtaSection;

