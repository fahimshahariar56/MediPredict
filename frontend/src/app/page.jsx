import { LandingPage } from "@/features/landing/LandingPage";

export const metadata = {
  title: "MediPredict — Precision Healthcare AI & Disease Risk Prediction",
  description:
    "Early detection of cardiovascular and metabolic disease risks powered by explainable machine learning and SHAP attribution.",
};

export default function Home() {
  return <LandingPage />;
}
