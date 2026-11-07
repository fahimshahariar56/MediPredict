"use client";

import React, { useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animation/FadeIn";
import { StaggerList, StaggerItem } from "@/components/animation/StaggerList";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { HelpCircleIcon } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "general",
    label: "General",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    questions: [
      {
        q: "What is MediPredict?",
        a: "MediPredict is an AI-powered clinical decision-support platform that helps healthcare professionals assess patient risk for selected medical conditions — including cardiovascular disease, diabetes, and CKD — using de-identified biomarker data.",
      },
      {
        q: "Who is MediPredict designed for?",
        a: "MediPredict is designed for qualified healthcare professionals: clinicians, general practitioners, cardiologists, endocrinologists, nephrologists, and clinical researchers. It is not a consumer health app.",
      },
      {
        q: "Is MediPredict currently available to use?",
        a: "MediPredict is in active development. A waitlist is open for early access. Full platform availability, including pricing, will be announced when the platform is ready for clinical deployment.",
      },
      {
        q: "What conditions does MediPredict support?",
        a: "The current development roadmap includes risk prediction for cardiovascular disease, type 2 diabetes, chronic kidney disease (CKD), hypertension risk stratification, and metabolic syndrome indicators. The list of supported conditions will expand over time.",
      },
      {
        q: "Is MediPredict a replacement for a doctor?",
        a: "Absolutely not. MediPredict is a decision-support tool. All predictions must be reviewed and interpreted by a qualified clinician in the context of the patient's full clinical picture. It does not provide diagnoses or prescriptions.",
      },
    ],
  },
  {
    id: "medical-clinical",
    label: "Medical & Clinical",
    color: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    questions: [
      {
        q: "How accurate are MediPredict's predictions?",
        a: "MediPredict's models are built on peer-reviewed clinical datasets and use Gradient Boosted Decision Tree (GBDT) algorithms validated against standard benchmarks. Exact accuracy metrics (AUC-ROC, sensitivity, specificity) for each model will be published in the platform documentation before clinical deployment.",
      },
      {
        q: "What biomarkers are required for a prediction?",
        a: "Required biomarkers vary by condition. For cardiovascular risk, typical inputs include age, blood pressure, cholesterol (total, LDL, HDL), fasting glucose, BMI, and smoking status. The platform will clearly indicate required versus optional fields for each prediction model.",
      },
      {
        q: "Can I use MediPredict in an emergency?",
        a: "No. MediPredict is not designed for emergency situations. In any medical emergency, follow your institution's emergency protocols and contact emergency services immediately.",
      },
      {
        q: "Does MediPredict provide treatment recommendations?",
        a: "No. MediPredict provides risk stratification and explainability — it shows which biomarkers most influenced the prediction. Treatment decisions remain entirely with the treating clinician.",
      },
      {
        q: "What does the SHAP explanation feature show?",
        a: "SHAP (SHapley Additive exPlanations) is a technique from explainable AI (XAI) that shows how much each input biomarker contributed to a specific prediction — positively or negatively. This helps clinicians understand why the model reached a particular risk score.",
      },
    ],
  },
  {
    id: "ai-technology",
    label: "AI & Technology",
    color: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    questions: [
      {
        q: "What AI technology powers MediPredict?",
        a: "MediPredict uses Gradient Boosted Decision Tree (GBDT) models — specifically variants inspired by XGBoost and LightGBM architectures — trained on curated clinical datasets. SHAP is integrated for model explainability.",
      },
      {
        q: "Why GBDT instead of deep learning / neural networks?",
        a: "GBDT models offer superior performance on structured tabular clinical data, require less training data than deep learning approaches, and produce inherently more interpretable results. They also have lower computational requirements, making real-time predictions more practical.",
      },
      {
        q: "How is the AI model trained?",
        a: "Models are trained on de-identified clinical datasets sourced from publicly available research repositories. Training pipelines include cross-validation, hyperparameter optimisation, and bias auditing. Detailed model cards will be published before clinical deployment.",
      },
      {
        q: "How often are models updated?",
        a: "Model update cadence will be published in the platform documentation. All updates will undergo validation testing before deployment to maintain prediction quality and safety.",
      },
      {
        q: "Does MediPredict learn from my patient data?",
        a: "No. MediPredict does not use individual patient submissions to retrain or update its models without explicit research consent. Your clinical data is used solely to generate predictions for your patients.",
      },
    ],
  },
  {
    id: "privacy-security",
    label: "Privacy & Security",
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    questions: [
      {
        q: "Is MediPredict HIPAA-compliant?",
        a: "MediPredict is designed with HIPAA considerations in mind. The platform operates on de-identified data, implements encryption in transit and at rest, provides audit logging, and supports Business Associate Agreements (BAAs) for enterprise customers. Formal compliance status should be confirmed with our team before clinical deployment.",
      },
      {
        q: "What data does MediPredict store?",
        a: "MediPredict stores account credentials, usage analytics (anonymised), and any biomarker data you submit for predictions. Patient data is processed in de-identified form. Full details are available in our Privacy Policy.",
      },
      {
        q: "Who can access my data?",
        a: "Access is strictly role-based. Within your organisation, only users you explicitly grant access to can view shared patient cohorts. MediPredict staff access to production data is logged, audited, and limited to what is necessary for support and operations.",
      },
      {
        q: "Is data encrypted?",
        a: "Yes. All data in transit is encrypted using TLS 1.3. Data at rest is encrypted using AES-256. These standards apply to all tiers of the platform.",
      },
      {
        q: "Can I delete my data?",
        a: "Yes. You have the right to request deletion of your personal data. Enterprise customers can also request deletion of associated patient cohort data. Submit a data deletion request via our Contact page.",
      },
    ],
  },
  {
    id: "getting-started",
    label: "Getting Started",
    color: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    questions: [
      {
        q: "How do I get access to MediPredict?",
        a: "MediPredict is currently in development. You can join the waitlist via our Contact page or Pricing page to be notified when early access opens.",
      },
      {
        q: "What are the system requirements?",
        a: "MediPredict is a web-based platform accessible via any modern browser (Chrome, Firefox, Safari, Edge). No software installation is required. Mobile-responsive layouts are supported for reference use, though a desktop or tablet is recommended for full clinical workflows.",
      },
      {
        q: "Is training available for clinical teams?",
        a: "Yes. Clinical Team and Enterprise plans will include onboarding support and training resources. Documentation, video walkthroughs, and a dedicated help centre will be available at launch.",
      },
      {
        q: "Can I integrate MediPredict with my EHR/EMR system?",
        a: "EHR/EMR integration is planned for the Enterprise tier. Supported integration methods (HL7 FHIR, custom API) and system compatibility will be detailed in the Enterprise documentation.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general");

  const current = categories.find((c) => c.id === activeCategory);

  return (
    <PublicLayout>
      {/* Hero */}
      <Section className="pt-24 pb-10 text-center">
        <Container>
          <FadeIn>
            <Badge variant="outline" className="mb-6 inline-flex gap-2 px-4 py-1.5 text-sm">
              <HelpCircleIcon className="size-3.5" />
              Frequently Asked Questions
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Got Questions?{" "}
              <span className="text-primary">We&apos;ve Got Answers.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Everything you need to know about MediPredict — the platform, the AI, clinical usage,
              privacy, and how to get started.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Category nav */}
      <Section className="pb-4">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={[
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border hover:bg-muted",
                  ].join(" ")}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* FAQ accordion */}
      <Section className="py-10">
        <Container>
          <div className="mx-auto max-w-2xl">
            <FadeIn key={activeCategory}>
              <div className="mb-4 flex items-center gap-2">
                <span className={["rounded-full px-3 py-1 text-xs font-semibold", current?.color].join(" ")}>
                  {current?.label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {current?.questions.length} questions
                </span>
              </div>

              <Accordion type="single" collapsible className="space-y-2">
                <StaggerList className="space-y-2">
                  {current?.questions.map((item, i) => (
                    <StaggerItem key={i}>
                      <AccordionItem
                        value={`item-${i}`}
                        className="rounded-2xl border border-border bg-card px-5 shadow-xs overflow-hidden"
                      >
                        <AccordionTrigger className="py-4 text-sm font-medium text-foreground hover:no-underline">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    </StaggerItem>
                  ))}
                </StaggerList>
              </Accordion>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-16 text-center">
        <Container>
          <FadeIn>
            <h2 className="font-heading text-2xl font-semibold">Still have questions?</h2>
            <p className="mt-3 text-muted-foreground">
              Can&apos;t find what you&apos;re looking for? Our team is happy to help.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/about">Learn About MediPredict</Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </PublicLayout>
  );
}
