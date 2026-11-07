import React from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animation/FadeIn";

export const metadata = {
  title: "Privacy Policy — MediPredict",
  description:
    "MediPredict Privacy Policy — how we collect, use, and protect your data.",
};

const sections = [
  {
    id: "data-collection",
    title: "1. Data We Collect",
    content: `When you use MediPredict, we may collect:

• **Account information**: name, email address, professional credentials you provide during registration.
• **Clinical input data**: de-identified patient biomarker values you submit for risk prediction. MediPredict is designed to operate on de-identified data only.
• **Usage data**: pages visited, features used, timestamps, and browser/device identifiers collected via standard web analytics.
• **Communication data**: messages you send through our contact form or support channels.

We do not intentionally collect directly identifiable patient health information (PHI) through the prediction interface. You are responsible for ensuring any data you submit complies with applicable regulations.`,
  },
  {
    id: "data-usage",
    title: "2. How We Use Your Data",
    content: `We use collected data to:

• Provide, operate, and improve the MediPredict service.
• Authenticate users and manage accounts.
• Respond to support requests and communications.
• Monitor platform performance and security.
• Conduct aggregated, anonymised research to improve AI model accuracy.
• Comply with legal obligations.

We do not sell your personal data to third parties.`,
  },
  {
    id: "data-storage",
    title: "3. Data Storage & Security",
    content: `MediPredict applies industry-standard security controls including:

• Encryption in transit (TLS 1.3) and at rest (AES-256).
• Role-based access controls limiting staff access to production data.
• Routine security audits and vulnerability assessments.
• Secure data centres in compliance with applicable regional regulations.

No system is completely immune to breaches. In the event of a data incident affecting your information, we will notify affected users in accordance with applicable law.`,
  },
  {
    id: "user-rights",
    title: "4. Your Rights",
    content: `Depending on your jurisdiction, you may have the right to:

• **Access**: request a copy of personal data we hold about you.
• **Rectification**: correct inaccurate or incomplete data.
• **Erasure**: request deletion of your personal data ("right to be forgotten").
• **Restriction**: request we limit how we process your data.
• **Portability**: receive your data in a machine-readable format.
• **Objection**: object to certain types of processing.

To exercise any of these rights, please contact us via our Contact page.`,
  },
  {
    id: "hipaa",
    title: "5. HIPAA Alignment",
    content: `MediPredict is designed with HIPAA considerations in mind for US-based healthcare deployments:

• The platform does not require submission of Protected Health Information (PHI) for risk predictions.
• Enterprise customers operating under HIPAA may enter into a Business Associate Agreement (BAA) with MediPredict.
• We provide audit logging and access controls to support compliance workflows.

This section describes design intent. Formal HIPAA compliance status should be confirmed with our team before clinical deployment.`,
  },
  {
    id: "cookies",
    title: "6. Cookies & Tracking",
    content: `MediPredict uses cookies and similar technologies to:

• Maintain your login session.
• Remember your preferences.
• Collect anonymous analytics (page views, feature usage).

You can control cookie preferences via your browser settings. Disabling cookies may affect some platform functionality.`,
  },
  {
    id: "third-parties",
    title: "7. Third-Party Services",
    content: `We may use trusted third-party providers for infrastructure, analytics, and communications. These providers are contractually bound to handle data only on our behalf and in accordance with our privacy standards.

We do not share your data with advertisers or data brokers.`,
  },
  {
    id: "contact-privacy",
    title: "8. Contact for Privacy Enquiries",
    content: `For privacy-related questions, data access requests, or to report a concern, please use our Contact page. We aim to respond to all privacy enquiries within 30 days.`,
  },
];

export default function PrivacyPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <Section className="pt-24 pb-10">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Legal</p>
              <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-4 text-muted-foreground">
                Last reviewed: November 2026 &nbsp;·&nbsp; Effective date: To be confirmed
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Legal review warning */}
      <Section className="pb-6">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl rounded-2xl border-2 border-amber-400 bg-amber-50 px-6 py-5 dark:border-amber-600/50 dark:bg-amber-950/30">
              <p className="font-semibold text-amber-900 dark:text-amber-300 mb-1">
                ⚠ [LEGAL REVIEW REQUIRED]
              </p>
              <p className="text-sm text-amber-800 dark:text-amber-400">
                This privacy policy is a <strong>structural placeholder</strong>. The project owner
                must review and complete all sections with actual data handling practices, legal
                jurisdiction requirements, and accurate contact details before public deployment.
                This document does not constitute a legally binding privacy policy.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Introduction */}
      <Section className="pb-4">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-muted-foreground leading-relaxed">
              <p>
                MediPredict (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy and
                security of your information. This Privacy Policy explains how we collect, use,
                store, and share data when you use our platform, website, and services.
              </p>
              <p className="mt-3">
                By using MediPredict, you agree to the practices described in this policy.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Policy sections */}
      <Section className="py-8">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            {sections.map((s, i) => (
              <FadeIn key={s.id} delay={i * 0.05}>
                <div id={s.id} className="scroll-mt-24">
                  <h2 className="font-heading text-xl font-semibold mb-3">{s.title}</h2>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                    {s.content}
                  </div>
                </div>
                {i < sections.length - 1 && (
                  <div className="mt-10 border-t border-border" />
                )}
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </PublicLayout>
  );
}

