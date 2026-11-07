"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, AlertCircle, Lock, FileText, ChevronRight } from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";

const PRIVACY_SECTIONS = [
  {
    id: "data-collection",
    title: "1. Data Collection & Zero-PHI Architecture",
    content: `When you access or utilize the MediPredict diagnostic support platform, we collect two distinct classes of data:

• Professional Account Credentials: Name, institutional affiliation, clinical role, and professional email address supplied during registration.
• De-Identified Biometric Vectors: Numerical clinical vitals (fasting blood glucose, systolic/diastolic blood pressure, lipid fractions, BMI, age brackets) submitted for risk calculation.

MediPredict operates under an absolute Zero-Direct-PHI mandate. We do not intentionally solicit, ingest, or persist identifiable patient names, Social Security numbers, national health IDs, or residential addresses within our predictive microservice enclaves. Practitioners are responsible for ensuring vectors submitted comply with institutional de-identification standards.`,
  },
  {
    id: "data-usage",
    title: "2. Permitted Uses of Information",
    content: `Data collected through the platform is processed exclusively for the following operational and diagnostic purposes:

• Generating real-time GBDT risk probabilities and associated SHAP feature attributions.
• Authenticating authorized clinicians and enforcing workspace role-based access controls.
• Auditing platform security, monitoring inference latency, and preventing unauthorized scraping of model weights.
• Aggregating strictly anonymized, non-reversible statistics for algorithmic validation and model calibration curves.

MediPredict does not sell, license, or monetize clinical or user data to third-party data brokers, insurers, or advertising networks under any circumstances.`,
  },
  {
    id: "storage-security",
    title: "3. Cryptographic Storage & Transmission Protocols",
    content: `We implement defense-in-depth security controls engineered for clinical healthcare environments:

• In-Transit Cryptography: All network communication enforces TLS 1.3 with forward secrecy ciphers.
• At-Rest Encryption: Session caches, temporary buffers, and user account metadata are protected via AES-256 GCM encryption.
• Ephemeral Vector Enclaves: Predictive calculations occur in memory-isolated runtime containers where raw numerical biomarker inputs are destroyed immediately after generating the SHAP diagnostic summary.`,
  },
  {
    id: "user-rights",
    title: "4. Practitioner & Subject Rights",
    content: `In accordance with applicable regional data protection regulations (including GDPR and state privacy frameworks), practitioners possess the right to:

• Access and export a structured copy of their profile and account telemetry records.
• Correct any inaccurate institutional affiliation or credential details.
• Request permanent erasure ("Right to Be Forgotten") of their account credentials and associated workspace logs.
• Revoke session tokens and terminate multi-device authorization.

Formal data deletion requests may be directed through our Contact liaison desk.`,
  },
  {
    id: "hipaa",
    title: "5. HIPAA Security & Privacy Rule Alignment",
    content: `For United States healthcare providers, MediPredict is engineered in alignment with HIPAA Security, Privacy, and Breach Notification rules:

• The platform's default mode requires no protected health information (PHI) to compute risk scores.
• Health Systems operating under covered entity status may execute a standardized Business Associate Agreement (BAA) with MediPredict.
• Immutable audit logs track all practitioner logins, vector generation events, and report exports for internal compliance governance.`,
  },
  {
    id: "cookies",
    title: "6. Cookies & Client-Side Session Storage",
    content: `MediPredict uses strictly necessary HTTP-only authentication cookies and local browser storage to:

• Maintain encrypted practitioner sessions across page transitions.
• Remember UI preferences (such as Light / Dark theme mode).
• Prevent Cross-Site Request Forgery (CSRF) attacks.

We do not embed third-party tracking pixels or marketing beacons within the clinical application workspace.`,
  },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState(PRIVACY_SECTIONS[0].id);

  return (
    <PublicLayout>
      {/* ── Documentation Header ── */}
      <header className="border-b border-border/70 bg-surface-subtle py-12 sm:py-16">
        <Container>
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="text-xs uppercase font-mono">
                Legal &amp; Compliance Specification
              </Badge>
              <span className="text-xs text-muted-foreground font-mono">
                Version 2.4 &bull; Last Revised: November 2026
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground tracking-tight">
              Privacy Policy &amp; Data Governance
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
              Transparent specifications defining how MediPredict safeguards clinical inputs,
              protects practitioner privacy, and enforces zero-PHI data enclaves.
            </p>
          </div>
        </Container>
      </header>

      {/* ── Main Legal Content with Sticky Sidebar ── */}
      <div className="py-12 sm:py-16 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sticky Table of Contents Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-xs space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                  Table of Contents
                </span>
                <nav className="space-y-1">
                  {PRIVACY_SECTIONS.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      onClick={() => setActiveSection(s.id)}
                      className={[
                        "flex items-center justify-between py-2 px-3 rounded-lg text-xs font-medium transition-colors",
                        activeSection === s.id
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-muted-foreground hover:bg-surface-subtle hover:text-foreground",
                      ].join(" ")}
                    >
                      <span className="truncate">{s.title}</span>
                      <ChevronRight className="size-3 shrink-0 ml-1 opacity-60" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Legal Review Callout */}
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-800 dark:text-amber-300 space-y-1.5">
                <div className="font-bold flex items-center gap-1.5">
                  <AlertCircle className="size-4 shrink-0 text-amber-600 dark:text-amber-400" />
                  <span>[LEGAL REVIEW REQUIRED]</span>
                </div>
                <p className="leading-relaxed">
                  This document serves as an architectural placeholder and technical privacy
                  specification. Qualified legal counsel must formally execute jurisdiction-specific
                  revisions prior to public clinical deployment.
                </p>
              </div>
            </aside>

            {/* Legal Prose Content */}
            <main className="lg:col-span-8 space-y-12 max-w-2xl">
              {PRIVACY_SECTIONS.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 space-y-3 pb-8 border-b border-border/60 last:border-0"
                >
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground tracking-tight">
                    {section.title}
                  </h2>
                  <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-line space-y-2">
                    {section.content}
                  </div>
                </section>
              ))}

              <div className="pt-4 text-xs text-muted-foreground border-t border-border">
                For questions regarding data processing or BAA requests, contact{" "}
                <Link href="/contact" className="text-primary hover:underline font-semibold">
                  security@medipredict.health
                </Link>
                .
              </div>
            </main>
          </div>
        </Container>
      </div>
    </PublicLayout>
  );
}
