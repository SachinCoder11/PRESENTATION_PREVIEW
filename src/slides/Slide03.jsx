import React from 'react';
import { Database, AlertOctagon, Filter, Layers, CheckCircle2 } from 'lucide-react';
import ClassDistributionChart from '../components/InteractiveChart/ClassDistributionChart';
import MissingnessChart from '../components/InteractiveChart/MissingnessChart';

export default function Slide03({ slide }) {
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
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
            <span>Audit Authority: <strong className="text-fluent-royalBlue">perf_train.csv</strong></span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-4">
        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {slide.stats.map((st, idx) => (
            <div
              key={idx}
              className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm"
            >
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mb-1">
                {st.label}
              </span>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                {st.value}
              </p>
              <span className="text-[11px] text-fluent-royalBlue font-medium mt-1 block">
                {st.context}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ClassDistributionChart data={slide.classDistribution} />
          <MissingnessChart data={slide.missingFeatures} />
        </div>

        {/* Preprocessing Architecture Callout */}
        <div className="bg-slate-100 dark:bg-slate-900/80 rounded-xl p-4 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          <div className="flex items-start gap-3">
            <AlertOctagon className="w-4 h-4 text-fluent-amber shrink-0 mt-0.5" />
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              <strong className="text-slate-900 dark:text-white">Handling Sparsity Without Leakage: </strong>
              {slide.imputationInsight}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 self-end md:self-center font-mono text-[11px] bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-fluent-emerald" />
            <span>Median + Mode Imputation</span>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex justify-between items-center">
        <span>Section 03 — Audited Training Data Ground Truth</span>
        <span className="font-mono text-slate-400">Class Proportions: 56.45% / 33.15% / 10.40%</span>
      </div>
    </div>
  );
}
