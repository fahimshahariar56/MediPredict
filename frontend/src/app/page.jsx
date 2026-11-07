"use client";

import React, { useState } from "react";
import {
  HeartPulse,
  ShieldCheck,
  Activity,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Info,
  Layers,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/animation/BorderBeam";
import { NumberTicker } from "@/components/animation/NumberTicker";
import { FadeIn } from "@/components/animation/FadeIn";
import { ScaleIn } from "@/components/animation/ScaleIn";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Loader } from "@/components/common/Loader";

export default function DesignSystemPage() {
  const [switchState, setSwitchState] = useState(true);
  const [checkboxState, setCheckboxState] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  return (
    <TooltipProvider delayDuration={200}>
      <main className="min-h-screen bg-background text-foreground pb-24">
        {/* Top Clinical Header */}
        <header className="border-b border-border/80 bg-background/95 sticky top-0 z-40 backdrop-blur-md">
          <Container className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs">
                <HeartPulse className="size-5" />
              </div>
              <div>
                <span className="font-heading font-bold tracking-tight text-lg">
                  MediPredict
                </span>
                <span className="ml-2 text-xs font-medium text-muted-foreground hidden sm:inline">
                  Phase 01 Design System &amp; Global UI
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="info" className="gap-1.5 py-1">
                <Sparkles className="size-3" />
                Apple-like Minimalism × AI Healthcare
              </Badge>
            </div>
          </Container>
        </header>

        {/* Hero Showcase Title */}
        <Section spacing="compact" className="bg-surface-subtle border-b border-border/60">
          <Container>
            <FadeIn direction="up">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Badge variant="navy">Living Design System</Badge>
                  <span className="text-xs text-muted-foreground">
                    Strictly Foundation &amp; Tokens Only
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-heading">
                  Clinical-Grade Design Language
                </h1>
                <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Engineered with medical blue precision, deep navy active states,
                  accessible healthcare status tokens, soft 16–24px card radii, and
                  subtle Motion/Magic UI physics.
                </p>
              </div>
            </FadeIn>
          </Container>
        </Section>

        <Container className="space-y-16 pt-12">
          {/* Section 1: Color Tokens & Healthcare Statuses */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 border-b border-border/70 pb-3">
              <Layers className="size-5 text-primary" />
              <h2 className="text-xl font-semibold tracking-tight">
                1. Centralized Color &amp; Risk Tokens
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <Card className="p-4 bg-primary text-primary-foreground border-transparent">
                <div className="text-xs opacity-80">Primary</div>
                <div className="font-semibold text-sm mt-1">Medical Blue</div>
                <div className="text-xs opacity-75 mt-2 font-mono">oklch(0.53 0.22 255)</div>
              </Card>

              <Card className="p-4 bg-brand-navy text-white border-transparent">
                <div className="text-xs opacity-80">Dark Active</div>
                <div className="font-semibold text-sm mt-1">Deep Navy</div>
                <div className="text-xs opacity-75 mt-2 font-mono">oklch(0.18 0.03 260)</div>
              </Card>

              <Card className="p-4 border-success/30 bg-success-subtle text-foreground">
                <div className="flex items-center gap-1.5 text-success font-medium text-xs">
                  <CheckCircle2 className="size-3.5" /> Low Risk
                </div>
                <div className="font-semibold text-sm mt-1 text-success">Clinical Success</div>
                <div className="text-xs text-muted-foreground mt-2 font-mono">oklch(0.62 0.17 150)</div>
              </Card>

              <Card className="p-4 border-warning/30 bg-warning-subtle text-foreground">
                <div className="flex items-center gap-1.5 text-warning font-medium text-xs">
                  <AlertTriangle className="size-3.5" /> Moderate
                </div>
                <div className="font-semibold text-sm mt-1 text-warning">Warning State</div>
                <div className="text-xs text-muted-foreground mt-2 font-mono">oklch(0.72 0.16 65)</div>
              </Card>

              <Card className="p-4 border-destructive/30 bg-destructive-subtle text-foreground">
                <div className="flex items-center gap-1.5 text-destructive font-medium text-xs">
                  <Activity className="size-3.5" /> High Risk
                </div>
                <div className="font-semibold text-sm mt-1 text-destructive">Destructive/Alert</div>
                <div className="text-xs text-muted-foreground mt-2 font-mono">oklch(0.58 0.22 25)</div>
              </Card>

              <Card className="p-4 border-info/30 bg-info-subtle text-foreground">
                <div className="flex items-center gap-1.5 text-info font-medium text-xs">
                  <Info className="size-3.5" /> Intelligence
                </div>
                <div className="font-semibold text-sm mt-1 text-info">Clinical Advisory</div>
                <div className="text-xs text-muted-foreground mt-2 font-mono">oklch(0.60 0.18 240)</div>
              </Card>
            </div>
          </section>

          {/* Section 2: Healthcare Status Badges */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 border-b border-border/70 pb-3">
              <ShieldCheck className="size-5 text-primary" />
              <h2 className="text-xl font-semibold tracking-tight">
                2. Healthcare Status Badges
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="success">
                <CheckCircle2 className="size-3" /> Low Risk (Optimal)
              </Badge>
              <Badge variant="warning">
                <AlertTriangle className="size-3" /> Moderate Risk (Monitor)
              </Badge>
              <Badge variant="destructive">
                <Activity className="size-3" /> High Risk (Action Required)
              </Badge>
              <Badge variant="info">
                <Sparkles className="size-3" /> SHAP Feature Contribution
              </Badge>
              <Badge variant="default">Medical Blue Default</Badge>
              <Badge variant="navy">Deep Navy Active</Badge>
              <Badge variant="secondary">Secondary Pale Slate</Badge>
              <Badge variant="outline">Clinical Outline</Badge>
            </div>
          </section>

          {/* Section 3: Buttons & Shimmer CTA */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 border-b border-border/70 pb-3">
              <Sparkles className="size-5 text-primary" />
              <h2 className="text-xl font-semibold tracking-tight">
                3. Tactile Button Hierarchy &amp; Magic UI Shimmer
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="default">Primary Medical Blue</Button>
                <Button variant="navy">Deep Navy Active</Button>
                <Button variant="outline">Clinical Outline</Button>
                <Button variant="secondary">Secondary Slate</Button>
                <Button variant="subtle">Subtle Blue</Button>
                <Button variant="destructive">High-Risk Alert</Button>
                <Button variant="ghost">Ghost Interaction</Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Magic UI Shimmer Button Integration */}
                <ShimmerButton className="shadow-md">
                  <span>Run AI Diagnostic Scan</span>
                  <ArrowRight className="size-4" />
                </ShimmerButton>

                <Button
                  variant="default"
                  loading={btnLoading}
                  onClick={() => {
                    setBtnLoading(true);
                    setTimeout(() => setBtnLoading(false), 2000);
                  }}
                >
                  {btnLoading ? "Processing" : "Click to Test Loading State"}
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="text-xs text-muted-foreground mr-2">Sizing scale:</span>
                <Button size="xs" variant="outline">XS (24px)</Button>
                <Button size="sm" variant="outline">SM (32px)</Button>
                <Button size="default" variant="outline">Default (36px)</Button>
                <Button size="lg" variant="outline">Large (44px)</Button>
                <Button size="xl" variant="navy">XL (48px Hero)</Button>
              </div>
            </div>
          </section>

          {/* Section 4: Card Architecture & Magic UI Border Beam */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 border-b border-border/70 pb-3">
              <Layers className="size-5 text-primary" />
              <h2 className="text-xl font-semibold tracking-tight">
                4. Card Architecture &amp; Magic UI Border Beam
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Default Card */}
              <Card>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-1">Standard Surface</Badge>
                  <CardTitle>Standard Clinical Card</CardTitle>
                  <CardDescription>
                    Soft 20px radius, subtle border, and Apple-like micro-shadow.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Designed for clinical data presentation, vital statistics, and clean reading contrast.
                  </p>
                </CardContent>
                <CardFooter className="justify-between">
                  <span className="text-xs text-muted-foreground">Radius: 20px</span>
                  <Button size="sm" variant="ghost">Learn more</Button>
                </CardFooter>
              </Card>

              {/* Interactive Card */}
              <Card variant="interactive">
                <CardHeader>
                  <Badge variant="info" className="w-fit mb-1">Interactive Hover</Badge>
                  <CardTitle>Tactile Elevation</CardTitle>
                  <CardDescription>
                    Smooth hover translation (-2px) with border illumination.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Used for selectable diagnostics, interactive history cards, and dashboard shortcuts.
                  </p>
                </CardContent>
                <CardFooter className="justify-between">
                  <span className="text-xs text-primary font-medium flex items-center gap-1">
                    Select Card <ChevronRight className="size-3.5" />
                  </span>
                </CardFooter>
              </Card>

              {/* Luminous AI Card with Border Beam */}
              <Card className="relative overflow-hidden bg-card border-border/80 shadow-md">
                <BorderBeam size={220} duration={8} delay={0} />
                <CardHeader>
                  <Badge variant="navy" className="w-fit mb-1">
                    <Sparkles className="size-3 mr-1" /> Magic UI Border Beam
                  </Badge>
                  <CardTitle>AI Diagnostic Panel</CardTitle>
                  <CardDescription>
                    Continuous travelling light beam highlighting active AI operations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Subtle, non-distracting hardware-accelerated beam engineered for AI risk assessment preview.
                  </p>
                </CardContent>
                <CardFooter className="justify-between">
                  <span className="text-xs text-muted-foreground">Luminous Shader</span>
                  <Badge variant="success">Active Model</Badge>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Section 5: Animated Metrics & Number Ticker */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 border-b border-border/70 pb-3">
              <Activity className="size-5 text-primary" />
              <h2 className="text-xl font-semibold tracking-tight">
                5. Motion Foundation &amp; Magic UI Number Ticker
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-6">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Model Precision
                </div>
                <div className="mt-2 text-3xl sm:text-4xl font-bold font-heading text-primary">
                  <NumberTicker value={99.4} decimalPlaces={1} suffix="%" />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  ROC-AUC Validation Score
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Inference Latency
                </div>
                <div className="mt-2 text-3xl sm:text-4xl font-bold font-heading text-foreground">
                  <NumberTicker value={24} suffix="ms" />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Sub-50ms Response Target
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Biomarkers Monitored
                </div>
                <div className="mt-2 text-3xl sm:text-4xl font-bold font-heading text-brand-navy dark:text-foreground">
                  <NumberTicker value={48} prefix="+" />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Clinical parameters analyzed
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Clinical Studies
                </div>
                <div className="mt-2 text-3xl sm:text-4xl font-bold font-heading text-success">
                  <NumberTicker value={120} prefix="+" suffix="k" />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Peer-reviewed benchmark datasets
                </div>
              </Card>
            </div>
          </section>

          {/* Section 6: Form Primitives & Controls */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 border-b border-border/70 pb-3">
              <ShieldCheck className="size-5 text-primary" />
              <h2 className="text-xl font-semibold tracking-tight">
                6. Form Primitives &amp; Interactive Inputs
              </h2>
            </div>

            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-foreground">
                    Clinical Input (e.g., Blood Glucose mg/dL)
                  </label>
                  <Input placeholder="Enter value (e.g., 95)" defaultValue="98" />
                  <span className="text-[11px] text-muted-foreground">
                    Clear focus ring and 10px rounded corners.
                  </span>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-medium text-foreground">
                    Interactive Switches &amp; Toggles
                  </label>
                  <div className="flex items-center justify-between rounded-xl border border-border p-3 bg-surface-subtle">
                    <span className="text-sm font-medium">Explainable AI (SHAP)</span>
                    <Switch checked={switchState} onCheckedChange={setSwitchState} />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-medium text-foreground">
                    Checkboxes &amp; Tooltips
                  </label>
                  <div className="flex items-center gap-3 rounded-xl border border-border p-3 bg-surface-subtle">
                    <Checkbox
                      id="hipaa"
                      checked={checkboxState}
                      onCheckedChange={setCheckboxState}
                    />
                    <label htmlFor="hipaa" className="text-sm cursor-pointer select-none">
                      HIPAA / GDPR Compliant Storage
                    </label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="size-4 text-muted-foreground hover:text-foreground cursor-pointer ml-auto" />
                      </TooltipTrigger>
                      <TooltipContent>
                        End-to-end encrypted clinical diagnostics isolation.
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 7: Tabs Navigation Primitive */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 border-b border-border/70 pb-3">
              <Layers className="size-5 text-primary" />
              <h2 className="text-xl font-semibold tracking-tight">
                7. Tabbed Navigation Primitive
              </h2>
            </div>

            <Tabs defaultValue="diabetes" className="w-full">
              <TabsList className="bg-surface-subtle p-1 rounded-xl border border-border">
                <TabsTrigger value="diabetes" className="rounded-lg">
                  Diabetes Diagnostics
                </TabsTrigger>
                <TabsTrigger value="cardiovascular" className="rounded-lg">
                  Cardiovascular Risk
                </TabsTrigger>
                <TabsTrigger value="ai-assistant" className="rounded-lg">
                  AI Clinical Assistant
                </TabsTrigger>
              </TabsList>

              <TabsContent value="diabetes" className="mt-4">
                <Card className="p-4 bg-surface-subtle border-border/60">
                  <p className="text-sm text-muted-foreground">
                    Preview of tabbed container for prediction models. All existing Radix primitives integrate seamlessly with MediPredict design tokens.
                  </p>
                </Card>
              </TabsContent>

              <TabsContent value="cardiovascular" className="mt-4">
                <Card className="p-4 bg-surface-subtle border-border/60">
                  <p className="text-sm text-muted-foreground">
                    Cardiovascular health metrics and lipid panel prediction foundation container.
                  </p>
                </Card>
              </TabsContent>

              <TabsContent value="ai-assistant" className="mt-4">
                <Card className="p-4 bg-surface-subtle border-border/60">
                  <p className="text-sm text-muted-foreground">
                    Conversational healthcare assistant layout container.
                  </p>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* Section 8: Responsive Breakpoint Verification Strip */}
          <section className="rounded-2xl border border-border/70 p-6 bg-surface-subtle">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-semibold text-base">
                  Responsive System Verification
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Components automatically adapt across Mobile, Tablet, Laptop, and Desktop viewports.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="sm:hidden px-2 py-1 rounded-md bg-primary/10 text-primary font-semibold">
                  Mobile (&lt;640px)
                </span>
                <span className="hidden sm:inline md:hidden px-2 py-1 rounded-md bg-primary/10 text-primary font-semibold">
                  Tablet (sm: 640px)
                </span>
                <span className="hidden md:inline lg:hidden px-2 py-1 rounded-md bg-primary/10 text-primary font-semibold">
                  Laptop (md: 768px)
                </span>
                <span className="hidden lg:inline xl:hidden px-2 py-1 rounded-md bg-primary/10 text-primary font-semibold">
                  Desktop (lg: 1024px)
                </span>
                <span className="hidden xl:inline px-2 py-1 rounded-md bg-primary/10 text-primary font-semibold">
                  Large Desktop (xl+: 1280px+)
                </span>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </TooltipProvider>
  );
}
