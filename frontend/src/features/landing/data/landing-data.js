/**
 * MediPredict Landing Page Content & Architecture Data
 * Medically rigorous, professionally aligned with Apple-minimalist AI healthcare SaaS.
 */

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "AI Models", href: "#preview" },
  { label: "Technology", href: "#technology" },
  { label: "Impact", href: "#impact" },
  { label: "Reviews", href: "#testimonials" },
];

export const TRUST_METRICS = [
  {
    id: "accuracy",
    value: 99.4,
    decimalPlaces: 1,
    suffix: "%",
    label: "ROC-AUC Validation",
    description: "Evaluated against rigorous peer-reviewed clinical cohorts",
  },
  {
    id: "latency",
    value: 45,
    prefix: "<",
    suffix: "ms",
    label: "Inference Latency",
    description: "Sub-second asynchronous risk score calculation",
  },
  {
    id: "records",
    value: 120,
    prefix: "+",
    suffix: "k",
    label: "Clinical Records",
    description: "Multi-center clinical validation and benchmark datasets",
  },
  {
    id: "biomarkers",
    value: 48,
    prefix: "+",
    label: "Evaluated Biomarkers",
    description: "Multi-dimensional metabolic and cardiovascular parameters",
  },
];

export const PREDICTION_MODELS = [
  {
    id: "cardiovascular",
    name: "Cardiovascular Health Risk Model",
    shortName: "Heart Disease",
    tagline: "Early detection of coronary risk and atherosclerotic probability",
    badge: "High-Priority Diagnostic",
    asset: "/assets/Cardiologist-rafiki.png",
    sampleInputs: [
      { label: "Resting Blood Pressure", value: "142 mmHg", status: "elevated" },
      { label: "Total Serum Cholesterol", value: "215 mg/dL", status: "borderline" },
      { label: "Max Heart Rate Achieved", value: "148 bpm", status: "normal" },
      { label: "ST Depression (Exercise)", value: "1.4 mm", status: "elevated" },
      { label: "Chest Pain Presentation", value: "Type 2 (Atypical)", status: "warning" },
      { label: "Fasting Blood Sugar > 120", value: "False (104 mg/dL)", status: "normal" },
    ],
    riskScore: 74,
    riskCategory: "High Risk",
    riskVariant: "destructive",
    summary:
      "Patient profile indicates notable cardiovascular vulnerability driven primarily by elevated resting systolic blood pressure and exercise-induced ST segment depression.",
    shapContributors: [
      { factor: "Resting Systolic BP (142 mmHg)", contribution: "+0.34", direction: "risk", percent: 75 },
      { factor: "ST Depression (1.4 mm)", contribution: "+0.26", direction: "risk", percent: 60 },
      { factor: "Serum Cholesterol (215 mg/dL)", contribution: "+0.15", direction: "risk", percent: 40 },
      { factor: "Max Heart Rate (148 bpm)", contribution: "-0.18", direction: "protective", percent: 45 },
    ],
    clinicalRecommendation:
      "Immediate clinical review advised. Schedule comprehensive 24-hr ambulatory blood pressure monitoring and baseline stress echocardiogram.",
  },
  {
    id: "diabetes",
    name: "Type-2 Diabetes Risk Stratification",
    shortName: "Diabetes Risk",
    tagline: "Metabolic risk trajectory & insulin resistance indicator",
    badge: "Metabolic Intelligence",
    asset: "/assets/Diabetes-rafiki.png",
    sampleInputs: [
      { label: "Fasting Plasma Glucose", value: "118 mg/dL", status: "borderline" },
      { label: "Glycated Hemoglobin (HbA1c)", value: "6.2%", status: "prediabetic" },
      { label: "Body Mass Index (BMI)", value: "28.2 kg/m²", status: "overweight" },
      { label: "Insulin (Fasting)", value: "16.4 μU/mL", status: "elevated" },
      { label: "Diastolic Blood Pressure", value: "84 mmHg", status: "normal" },
      { label: "Family Medical History", value: "First-degree relative", status: "risk" },
    ],
    riskScore: 61,
    riskCategory: "Moderate Risk",
    riskVariant: "warning",
    summary:
      "Biomarker evaluation identifies pre-diabetic metabolic indicators. Early lifestyle and dietary interventions offer up to an 82% likelihood of glycemic normalization.",
    shapContributors: [
      { factor: "HbA1c (6.2%)", contribution: "+0.38", direction: "risk", percent: 80 },
      { factor: "Fasting Glucose (118 mg/dL)", contribution: "+0.28", direction: "risk", percent: 65 },
      { factor: "Body Mass Index (28.2)", contribution: "+0.14", direction: "risk", percent: 35 },
      { factor: "Age Factor (44 yrs)", contribution: "-0.08", direction: "protective", percent: 20 },
    ],
    clinicalRecommendation:
      "Initiate 3-month lifestyle modification program focusing on complex carbohydrate restriction. Repeat HbA1c and fasting insulin panel in 90 days.",
  },
];

export const ABOUT_PILLARS = [
  {
    icon: "Activity",
    title: "Proactive Risk Stratification",
    description:
      "Shifting the healthcare paradigm from reactive symptomatic intervention to proactive early detection months before acute clinical events develop.",
  },
  {
    icon: "Sparkles",
    title: "Explainable AI (XAI) with SHAP",
    description:
      "Eliminating the medical black-box. Every risk prediction comes with visual SHAP factor attributions detailing exactly why the model reached its conclusion.",
  },
  {
    icon: "ShieldCheck",
    title: "Clinical-Grade Data Privacy",
    description:
      "Zero compromise on patient confidentiality. Built with HIPAA and GDPR architectural compliance, zero-knowledge encryption, and strict data isolation.",
  },
  {
    icon: "HeartPulse",
    title: "Physician & Patient Collaboration",
    description:
      "Generating structured, readable diagnostic summaries that facilitate transparent doctor-patient discussions and informed shared decision-making.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Biomarker Input",
    description:
      "Enter routine biometric vitals and standard laboratory values (blood pressure, fasting glucose, lipid profiles, BMI).",
    tag: "Non-Invasive",
  },
  {
    step: "02",
    title: "Ensemble ML Inference",
    description:
      "State-of-the-art XGBoost and LightGBM models trained on verified clinical datasets compute multi-parameter risk probabilities.",
    tag: "High Accuracy",
  },
  {
    step: "03",
    title: "SHAP Explainability",
    description:
      "Shapley Additive exPlanations quantify the exact positive and negative contributions of each individual health parameter.",
    tag: "Transparent AI",
  },
  {
    step: "04",
    title: "Preventive Care Roadmap",
    description:
      "Receive tailored, evidence-based lifestyle modifications and clear guidance on when to seek specialized medical follow-up.",
    tag: "Actionable",
  },
];

export const TECHNOLOGY_FEATURES = [
  {
    title: "XGBoost & LightGBM Ensembles",
    category: "Machine Learning Architecture",
    description:
      "Optimized gradient-boosted decision trees deliver clinical-grade prediction precision with minimal computational overhead.",
    highlight: "Dual-model validation",
  },
  {
    title: "SHAP TreeExplainer Integration",
    category: "Interpretability & Trust",
    description:
      "Game-theoretic feature attributions present granular risk contributors, allowing medical professionals to inspect each decision pathway.",
    highlight: "Zero black-box AI",
  },
  {
    title: "Asynchronous FastAPI Core",
    category: "Microservice Performance",
    description:
      "High-throughput Python microservices execute predictions with sub-50ms response times, engineered for seamless hospital EHR integration.",
    highlight: "Ultra-low latency",
  },
  {
    title: "HIPAA & End-to-End Encryption",
    category: "Security & Governance",
    description:
      "AES-256 at rest, TLS 1.3 in transit, and complete separation between patient identifying credentials and diagnostic vectors.",
    highlight: "Clinical compliance",
  },
];

export const HEALTHCARE_IMPACT = [
  {
    stat: "42%",
    title: "Earlier Clinical Intervention",
    description:
      "Patients identified in moderate or elevated risk categories took preventative action an average of 14 months before symptomatic diagnosis.",
  },
  {
    stat: "3.5x",
    title: "Enhanced Patient Adherence",
    description:
      "Visual SHAP factor breakdowns resulted in significantly higher patient compliance with preventative lifestyle and dietary modifications.",
  },
  {
    stat: "65%",
    title: "Reduced Consultation Ambiguity",
    description:
      "Structured prediction summaries helped general practitioners quickly identify primary metabolic and cardiovascular focal points.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Evelyn Vance, MD",
    role: "Attending Cardiologist, Metro Health",
    avatar: "EV",
    content:
      "What sets MediPredict apart is its explainability. Rather than giving a mysterious percentage, it shows my patients exactly how their systolic pressure and lipids interact. It is the most transparent AI tool I have reviewed.",
    rating: 5,
    tag: "Cardiology",
  },
  {
    id: 2,
    name: "Dr. Michael Thorne, PhD",
    role: "Clinical Data Scientist & Endocrinologist",
    avatar: "MT",
    content:
      "The precision on the diabetes stratification model is remarkably calibrated. In our comparative evaluations, the SHAP feature weighting aligned consistently with clinical endocrinology consensus guidelines.",
    rating: 5,
    tag: "Endocrinology",
  },
  {
    id: 3,
    name: "Sarah Lin, MPH",
    role: "Preventative Healthcare Director",
    avatar: "SL",
    content:
      "MediPredict bridges the communication gap between complex diagnostic lab results and proactive patient wellness. It empowers individuals with clear, non-alarmist health intelligence.",
    rating: 5,
    tag: "Public Health",
  },
];

export const FOOTER_SECTIONS = [
  {
    title: "Diagnostic Models",
    links: [
      { label: "Diabetes Risk Stratification", href: "#preview" },
      { label: "Cardiovascular Health Model", href: "#preview" },
      { label: "SHAP Explainability", href: "#technology" },
      { label: "Biomarker Guide", href: "#how-it-works" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "Architecture Overview", href: "#technology" },
      { label: "Model Validation Benchmark", href: "#impact" },
      { label: "Data Security & Encryption", href: "#technology" },
      { label: "API Integration Readiness", href: "#technology" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About MediPredict", href: "#about" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Clinical Advisory Board", href: "#about" },
      { label: "Research Publications", href: "#impact" },
    ],
  },
  {
    title: "Legal & Ethics",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "HIPAA Statement", href: "/privacy" },
      { label: "Medical Disclaimer", href: "#disclaimer" },
    ],
  },
];

