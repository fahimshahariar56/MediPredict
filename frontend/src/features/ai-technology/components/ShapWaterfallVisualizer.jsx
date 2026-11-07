"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowDownRight, Sparkles, RefreshCw, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SAMPLE_FACTORS = [
  {
    feature: "Fasting Glucose",
    value: "138 mg/dL",
    baseline: "92 mg/dL",
    shapValue: +14.2,
    direction: "elevates",
    clinicalNote: "Impairs insulin sensitivity; primary driver of metabolic risk tier.",
  },
  {
    feature: "Systolic Blood Pressure",
    value: "144 mmHg",
    baseline: "118 mmHg",
    shapValue: +9.8,
    direction: "elevates",
    clinicalNote: "Exceeds standard 130 mmHg vascular endothelial stress threshold.",
  },
  {
    feature: "HDL Cholesterol",
    value: "58 mg/dL",
    baseline: "45 mg/dL",
    shapValue: -5.6,
    direction: "protects",
    clinicalNote: "High reverse cholesterol transport reduces atherosclerotic accumulation.",
  },
  {
    feature: "Physical Activity",
    value: "180 min/wk",
    baseline: "90 min/wk",
    shapValue: -4.1,
    direction: "protects",
    clinicalNote: "Exceeds AHA guidelines; promotes cardioprotective vascular dilation.",
  },
  {
    feature: "HbA1c",
    value: "6.4%",
    baseline: "5.4%",
    shapValue: +8.3,
    direction: "elevates",
    clinicalNote: "Borderline diabetic range; indicates sustained glycemic elevation.",
  },
];

export function ShapWaterfallVisualizer() {
  const [factors, setFactors] = useState(SAMPLE_FACTORS);
  const [selectedFactor, setSelectedFactor] = useState(factors[0]);

  const baseRate = 12.0; // Population average %
  const totalShift = factors.reduce((acc, f) => acc + f.shapValue, 0);
  const finalPrediction = Math.max(1, Math.min(99, Math.round((baseRate + totalShift) * 10) / 10));

  return (
    <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Sparkles className="size-4" />
            </span>
            <h3 className="font-heading font-bold text-lg text-foreground">
              Interactive SHAP Waterfall Attribution
            </h3>
            <Badge variant="outline" className="text-[10px] uppercase font-mono py-0 h-5">
              Live Game Theory Model
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">
            Decomposes an individual prediction into exact mathematical biomarker contributions:
            {" "}
            <code className="text-primary font-mono">f(x) = E[f(x)] + Σ φᵢ</code>
          </p>
        </div>

        <div className="flex items-center gap-4 bg-surface-subtle p-3 rounded-2xl border border-border/60">
          <div className="text-right">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
              Base Population Risk
            </div>
            <div className="font-heading font-bold text-sm text-muted-foreground">
              {baseRate}%
            </div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <div className="text-[10px] text-primary uppercase tracking-wider font-bold">
              Individual Risk f(x)
            </div>
            <div className="font-heading font-extrabold text-xl text-primary">
              {finalPrediction}%
            </div>
          </div>
        </div>
      </div>

      {/* Waterfall Bars */}
      <div className="space-y-3">
        {factors.map((factor) => {
          const isElevating = factor.shapValue > 0;
          const isSelected = selectedFactor.feature === factor.feature;

          return (
            <div
              key={factor.feature}
              onClick={() => setSelectedFactor(factor)}
              className={[
                "group cursor-pointer rounded-2xl border p-3.5 transition-all duration-200",
                isSelected
                  ? "border-primary bg-primary/[0.04] shadow-xs"
                  : "border-border/60 bg-surface-subtle/50 hover:bg-surface-subtle hover:border-border",
              ].join(" ")}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div
                    className={[
                      "flex size-6 items-center justify-center rounded-lg text-xs font-bold",
                      isElevating
                        ? "bg-rose-500/10 text-rose-600 dark:text-rose-400"
                        : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                    ].join(" ")}
                  >
                    {isElevating ? (
                      <ArrowUpRight className="size-3.5" />
                    ) : (
                      <ArrowDownRight className="size-3.5" />
                    )}
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-foreground">
                      {factor.feature}
                    </span>
                    <span className="text-xs text-muted-foreground ml-2">
                      (Patient: <strong className="text-foreground">{factor.value}</strong> vs
                      Normal: {factor.baseline})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                  {/* Visual attribution bar */}
                  <div className="w-24 sm:w-36 h-2 bg-muted rounded-full overflow-hidden flex items-center">
                    <div
                      style={{
                        width: `${Math.min(100, Math.abs(factor.shapValue) * 6)}%`,
                      }}
                      className={[
                        "h-full rounded-full transition-all duration-500",
                        isElevating
                          ? "bg-gradient-to-r from-rose-500 to-amber-500 ml-auto"
                          : "bg-gradient-to-r from-emerald-500 to-teal-400 mr-auto",
                      ].join(" ")}
                    />
                  </div>
                  <span
                    className={[
                      "font-mono font-bold text-xs min-w-[50px] text-right",
                      isElevating
                        ? "text-rose-600 dark:text-rose-400"
                        : "text-emerald-600 dark:text-emerald-400",
                    ].join(" ")}
                  >
                    {isElevating ? `+${factor.shapValue}%` : `${factor.shapValue}%`}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Factor Clinical Detail Inspector */}
      {selectedFactor && (
        <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-4 text-xs text-foreground space-y-1.5 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 font-semibold text-primary">
            <Info className="size-3.5" />
            <span>Clinical Explanatory Rationale: {selectedFactor.feature}</span>
          </div>
          <p className="text-muted-foreground leading-relaxed pl-5">
            {selectedFactor.clinicalNote}
          </p>
        </div>
      )}
    </div>
  );
}

export default ShapWaterfallVisualizer;
