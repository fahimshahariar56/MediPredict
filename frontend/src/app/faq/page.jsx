"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  ChevronDown,
  Sparkles,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Cpu,
  Activity,
  FileQuestion,
} from "lucide-react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { FadeIn } from "@/components/animation/FadeIn";

const FAQ_DATABASE = [
  {
    category: "General",
    icon: FileQuestion,
    questions: [
      {
        q: "What is MediPredict and what is its primary medical objective?",
        a: "MediPredict is an AI-powered clinical decision support platform designed to assist healthcare practitioners in predicting patient risk for chronic cardiometabolic diseases—specifically type 2 diabetes and atherosclerotic cardiovascular disease (ASCVD). Its goal is proactive risk stratification before irreversible vascular or pancreatic damage manifests.",
      },
      {
        q: "Is MediPredict intended to replace licensed physicians or clinicians?",
        a: "No. MediPredict is strictly an interpretive decision-support tool. All risk stratifications, biomarker attributions, and lifestyle recommendations must be reviewed and contextualized by a qualified clinician within the patient's full medical history. It does not issue autonomous diagnoses or prescriptions.",
      },
      {
        q: "Can patients directly use MediPredict to self-diagnose?",
        a: "While patients can input their standard laboratory vitals to better understand their risk profile, the resulting reports are structured specifically for collaborative review alongside their treating physician. Emergency symptoms require immediate institutional care.",
      },
    ],
  },
  {
    category: "Machine Learning & AI",
    icon: Cpu,
    questions: [
      {
        q: "Why does MediPredict use Gradient Boosted Decision Trees rather than Deep Neural Networks?",
        a: "Clinical research and empirical benchmarks demonstrate that GBDTs (specifically calibrated XGBoost and LightGBM ensembles) consistently outperform deep learning on structured, heterogeneous tabular biomarker data. GBDTs naturally handle missing values, prevent overparameterization on clinical cohorts, enforce strict monotonic relationships, and integrate directly with exact TreeSHAP attribution.",
      },
      {
        q: "What is SHAP and why is it essential in healthcare AI?",
        a: "SHAP (SHapley Additive exPlanations) is a game-theoretic approach that assigns each input biomarker an exact credit value for pushing the risk prediction higher (+risk) or mitigating it (-protective). This provides mathematical proof for why the model reached a specific score, eliminating black-box clinical skepticism.",
      },
      {
        q: "How are the machine learning models validated?",
        a: "Our ensemble models are trained and cross-validated on large multi-center clinical cohorts (including NHANES, UK Biobank, and Framingham datasets) comprising over 180,000 patient records. Models undergo strict isotonic regression calibration to ensure output probabilities correspond directly to observed empirical disease rates.",
      },
    ],
  },
  {
    category: "Privacy & HIPAA",
    icon: ShieldCheck,
    questions: [
      {
        q: "Does MediPredict store identifiable Patient Health Information (PHI)?",
        a: "No. MediPredict enforces a strict zero-PHI architectural principle. The predictive microservice operates entirely on de-identified numerical biometric vectors (e.g., blood pressure, glucose, age brackets). No patient names, Social Security numbers, or contact details are transmitted to or stored by the ML engine.",
      },
      {
        q: "How is data protected during transmission?",
        a: "All network traffic is encrypted using TLS 1.3 forward-secrecy ciphers. At rest, database sessions and cached reports use AES-256 encryption. Our architecture is designed in full alignment with HIPAA Security Rule specifications.",
      },
      {
        q: "Can health systems sign a Business Associate Agreement (BAA)?",
        a: "Yes. Enterprise and Health System tier deployments include formal BAA contracts, dedicated data residency isolation, and compliance audit reporting.",
      },
    ],
  },
  {
    category: "Clinical Integration",
    icon: Activity,
    questions: [
      {
        q: "What non-invasive biomarkers are required to generate an assessment?",
        a: "Core inputs include resting blood pressure (systolic/diastolic), fasting plasma glucose, HbA1c, lipid profile (total cholesterol, HDL, LDL), BMI, age, and smoking status. Optional secondary metrics (e.g., resting heart rate, physical activity) further refine risk confidence intervals.",
      },
      {
        q: "Does MediPredict support EHR/EMR integrations like Epic or Cerner?",
        a: "EHR integration via HL7 FHIR APIs is available on the Health System tier. This allows clinicians to auto-populate patient biometric vectors directly from the electronic health record with a single click.",
      },
      {
        q: "What format are the patient reports generated in?",
        a: "Practitioners can view real-time interactive waterfall charts on screen or export high-resolution, printable PDF consultation summaries complete with biomarker ranges and clinical talking points.",
      },
    ],
  },
];

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...FAQ_DATABASE.map((c) => c.category)];

  const filteredCategories = FAQ_DATABASE.map((cat) => {
    const matchesCategory = activeCategory === "All" || cat.category === activeCategory;
    if (!matchesCategory) return null;

    const filteredQuestions = cat.questions.filter((q) => {
      const qText = q.q.toLowerCase();
      const aText = q.a.toLowerCase();
      const query = searchQuery.toLowerCase();
      return qText.includes(query) || aText.includes(query);
    });

    if (filteredQuestions.length === 0) return null;

    return {
      ...cat,
      questions: filteredQuestions,
    };
  }).filter(Boolean);

  const totalMatches = filteredCategories.reduce(
    (acc, cat) => acc + cat.questions.length,
    0
  );

  return (
    <PublicLayout>
      {/* ── Knowledge Base Hero ── */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-border/60">
        <InteractiveGridPattern className="opacity-40 dark:opacity-10" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                <HelpCircle className="size-3.5" />
                <span>Clinical &amp; Technical Knowledge Base</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.12]">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Questions.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Everything clinicians, researchers, and healthcare organizations need to know
                about our predictive methodology, explainability mechanics, and security compliance.
              </p>
            </FadeIn>

            {/* Live Search Input */}
            <FadeIn delay={0.2}>
              <div className="relative max-w-xl mx-auto pt-2">
                <Search className="size-4 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search questions e.g. 'SHAP', 'HIPAA', 'GBDT'..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-input bg-card pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-3 focus:ring-primary/20 transition-all shadow-xs"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── Category Navigation Bar ── */}
      <section className="border-b border-border/70 bg-surface-subtle py-4 sticky top-16 sm:top-20 z-30 backdrop-blur-md">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  "text-xs sm:text-sm px-4 py-1.5 rounded-full font-medium transition-all",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                    : "border border-border/80 bg-background hover:bg-surface-subtle text-muted-foreground",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ Content Area ── */}
      <Section className="py-16 sm:py-24 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((catSection) => {
                const CatIcon = catSection.icon;
                return (
                  <div key={catSection.category} className="space-y-4">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-border/60">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <CatIcon className="size-4" />
                      </div>
                      <h2 className="font-heading font-bold text-xl text-foreground">
                        {catSection.category}
                      </h2>
                      <Badge variant="outline" className="text-[10px] ml-auto font-mono">
                        {catSection.questions.length} Qs
                      </Badge>
                    </div>

                    <Accordion type="single" collapsible className="space-y-3">
                      {catSection.questions.map((item, qIdx) => (
                        <AccordionItem
                          key={qIdx}
                          value={`${catSection.category}-${qIdx}`}
                          className="rounded-2xl border border-border/80 bg-card px-5 shadow-xs overflow-hidden transition-colors hover:border-primary/40"
                        >
                          <AccordionTrigger className="py-4 text-left font-heading font-semibold text-sm sm:text-base text-foreground hover:no-underline">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4 pt-1 border-t border-border/40 mt-1">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16 space-y-3">
                <HelpCircle className="size-10 text-muted-foreground/50 mx-auto" />
                <h3 className="font-heading font-bold text-lg text-foreground">
                  No matching questions found
                </h3>
                <p className="text-xs text-muted-foreground">
                  Try searching for another keyword or browse all categories.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                >
                  Reset Search
                </Button>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* ── Help Desk Assistance Card ── */}
      <section className="py-16 sm:py-20 bg-surface-subtle border-t border-border/70">
        <Container>
          <div className="max-w-2xl mx-auto rounded-3xl border border-border/80 bg-card p-8 sm:p-10 text-center space-y-5 shadow-xs">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto">
              <MessageSquare className="size-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-heading font-bold text-2xl text-foreground">
                Have a Clinical or Technical Question Not Listed?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Our clinical informatics desk is available to assist physicians and healthcare
                institutions with custom deployment inquiries.
              </p>
            </div>
            <div className="pt-2">
              <Button asChild size="lg" variant="default" className="gap-2">
                <Link href="/contact">
                  <span>Contact Clinical Inquiry Desk</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
