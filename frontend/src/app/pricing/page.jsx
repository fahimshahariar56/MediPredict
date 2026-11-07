import React from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animation/FadeIn";
import { StaggerList, StaggerItem } from "@/components/animation/StaggerList";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { CheckIcon, ClockIcon } from "lucide-react";

export const metadata = {
  title: "Pricing — MediPredict",
  description:
    "MediPredict pricing plans are coming soon. Join the waitlist to be notified when plans are available.",
};

const tiers = [
  {
    name: "Individual",
    badge: "Coming Soon",
    tagline: "For independent clinicians and researchers",
    cta: "Join Waitlist",
    ctaHref: "/contact",
    popular: false,
    features: [
      "Patient risk predictions (up to 5 models)",
      "SHAP-based explanation reports",
      "Export to PDF / CSV",
      "Secure single-user workspace",
      "Email support",
    ],
  },
  {
    name: "Clinical Team",
    badge: "Most Popular",
    tagline: "For small-to-medium clinical practices",
    cta: "Join Waitlist",
    ctaHref: "/contact",
    popular: true,
    features: [
      "Everything in Individual",
      "Up to 10 team members",
      "Shared patient cohort dashboard",
      "Role-based access control",
      "Audit logs & compliance reports",
      "Priority email & chat support",
    ],
  },
  {
    name: "Enterprise",
    badge: "Coming Soon",
    tagline: "For hospital networks & health systems",
    cta: "Contact Us",
    ctaHref: "/contact",
    popular: false,
    features: [
      "Everything in Clinical Team",
      "Unlimited users & patients",
      "On-premise deployment option",
      "Custom EHR/EMR integrations",
      "Dedicated account manager",
      "SLA & HIPAA BAA support",
    ],
  },
];

export default function PricingPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <Section className="pt-24 pb-12 text-center">
        <Container>
          <FadeIn>
            <Badge variant="outline" className="mb-6 inline-flex gap-2 px-4 py-1.5 text-sm">
              <ClockIcon className="size-3.5" />
              Pricing Coming Soon
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Plans Built for{" "}
              <span className="text-primary">Healthcare Professionals</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              MediPredict is currently in active development. Pricing has not
              yet been finalised. Join the waitlist to be among the first to
              access the platform when plans go live.
            </p>
          </FadeIn>

          {/* Notice banner */}
          <FadeIn delay={0.15}>
            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 text-sm text-amber-800 dark:border-amber-800/40 dark:bg-amber-950/30 dark:text-amber-300">
              <strong>⚠ Notice:</strong> All pricing tiers shown below are
              illustrative placeholders. No actual prices or billing dates have
              been set. This page will be updated when official plans are
              announced.
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Pricing cards */}
      <Section className="py-12">
        <Container>
          <StaggerList className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {tiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <Card
                  className={[
                    "relative flex h-full flex-col rounded-3xl p-8 transition-shadow",
                    tier.popular
                      ? "border-primary/60 shadow-lg ring-2 ring-primary/20"
                      : "border-border shadow-sm",
                  ].join(" ")}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold shadow-sm">
                        {tier.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    {!tier.popular && (
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {tier.badge}
                      </Badge>
                    )}
                    <h2 className="font-heading text-2xl font-bold">{tier.name}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{tier.tagline}</p>
                  </div>

                  {/* Price placeholder */}
                  <div className="mb-6 flex items-end gap-1">
                    <span className="font-heading text-4xl font-bold text-muted-foreground/60">
                      TBD
                    </span>
                    <span className="mb-1 text-sm text-muted-foreground">/ month</span>
                  </div>

                  {/* Features */}
                  <ul className="mb-8 flex flex-1 flex-col gap-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    variant={tier.popular ? "default" : "outline"}
                    className="w-full"
                  >
                    <Link href={tier.ctaHref}>{tier.cta}</Link>
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </StaggerList>
        </Container>
      </Section>

      {/* FAQ nudge */}
      <Section className="py-16 text-center">
        <Container>
          <FadeIn>
            <h2 className="font-heading text-2xl font-semibold">Have questions?</h2>
            <p className="mt-3 text-muted-foreground">
              Check our{" "}
              <Link href="/faq" className="text-primary underline underline-offset-4 hover:opacity-80">
                FAQ page
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-primary underline underline-offset-4 hover:opacity-80">
                get in touch
              </Link>
              .
            </p>
          </FadeIn>
        </Container>
      </Section>
    </PublicLayout>
  );
}
