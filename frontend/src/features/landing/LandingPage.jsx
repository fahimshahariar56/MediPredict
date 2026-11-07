"use client";

import React from "react";
import { SmoothScrollProvider } from "@/components/animation/SmoothScrollProvider";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HeroSection } from "./sections/HeroSection";
import { MetricsSection } from "./sections/MetricsSection";
import { PredictionPreviewSection } from "./sections/PredictionPreviewSection";
import { AboutSection } from "./sections/AboutSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { TechnologySection } from "./sections/TechnologySection";
import { ImpactSection } from "./sections/ImpactSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { CtaSection } from "./sections/CtaSection";

export function LandingPage() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/15 selection:text-primary">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <MetricsSection />
          <PredictionPreviewSection />
          <AboutSection />
          <HowItWorksSection />
          <TechnologySection />
          <ImpactSection />
          <TestimonialsSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}

export default LandingPage;

