import React from 'react';
import { AlertCircle, CheckCircle2, Sliders, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Slide06({ slide }) {
  return (
    <div className="relative w-full h-full min-h-[100svh] bg-fluent-warmWhite dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col justify-between p-8 sm:p-12 lg:p-16 overflow-hidden select-none">
      {/* Top Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <span className="text-xs font-bold font-mono uppercase tracking-widest text-fluent-royalBlue mb-1 block">
          {slide.tag}
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-1">
              {slide.subtitle}
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
            <span>Audit Status: <strong className="text-emerald-500 font-bold">100% Reconciled</strong></span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-4">
        {/* Large Editorial Headline Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {slide.headlineMetrics.map((met, idx) => (
            <div
              key={idx}
              className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm"
            >
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mb-1">
                {met.label}
              </span>
              <p className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-900 dark:text-white">
                {met.value}
              </p>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
                {met.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Forensic Timeline & Multipliers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* 4-Stage Forensic Audit (7 cols) */}
          <div className="lg:col-span-7 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-fluent-card">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-fluent-amber" />
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                  Forensic Audit: The 96.50% In-Sample Refit Anomaly
                </h4>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-bold">
                Cell 2 vs Cell 3
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {slide.forensicTimeline.map((item, idx) => {
                const isArtifact = item.status === 'Artifact';
                const isVerified = item.status === 'Verified';
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-xs ${
                      isArtifact
                        ? 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200'
                        : isVerified
                        ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                        : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold mb-1">
                      <span>{item.step}</span>
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded border">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              Audit Lesson: The 96.50% score was caused by training data memorization. Isolating a clean holdout split in Cell 3 proved genuine holdout accuracy is 89.75%.
            </p>
          </div>

          {/* Decision Boundary Calibration (5 cols) */}
          <div className="lg:col-span-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-fluent-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-fluent-royalBlue" />
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                    Decision Multiplier Tuning
                  </h4>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                  +0.37 pp OOF
                </span>
              </div>

              {/* 3 Multipliers */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                {slide.calibration.multipliers.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center"
                  >
                    <span className="text-[10px] text-slate-500 block truncate">{m.class}</span>
                    <strong className="text-lg font-bold font-mono text-fluent-royalBlue block my-0.5">
                      ×{m.multiplier}
                    </strong>
                    <span className="text-[9px] text-slate-400 block leading-tight">{m.note}</span>
                  </div>
                ))}
              </div>

              <div className="p-2.5 rounded-lg bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 text-xs font-mono font-semibold text-fluent-royalBlue mb-3">
                {slide.calibration.oofImpact}
              </div>
            </div>

            <p className="text-[10px] text-slate-500 leading-tight">
              {slide.calibration.disclosure}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex justify-between items-center">
        <span>Section 06 — Reproducibility & Fact-Check Rigor</span>
        <span className="font-mono text-fluent-royalBlue">Leaderboard Standing: ~87 pts</span>
      </div>
    </div>
  );
}
