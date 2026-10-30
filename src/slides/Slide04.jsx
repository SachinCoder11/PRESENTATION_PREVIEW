import React from 'react';
import { Search, Sliders, Cpu, Award, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Slide04({ slide }) {
  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Search className="w-5 h-5 text-blue-500" />;
      case 1:
        return <Sliders className="w-5 h-5 text-indigo-500" />;
      case 2:
        return <Cpu className="w-5 h-5 text-purple-500" />;
      case 3:
        return <Award className="w-5 h-5 text-fluent-emerald" />;
      default:
        return <Search className="w-5 h-5 text-blue-500" />;
    }
  };

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
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800/50">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Strict Anti-Leakage Guardrails</span>
          </div>
        </div>
      </div>

      {/* Main Horizontal 4-Stage Architecture Pipeline */}
      <div className="my-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {slide.pipelineStages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-fluent-card flex flex-col justify-between relative group hover:border-fluent-royalBlue/50 transition-all duration-300"
            >
              {/* Top Step Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow-inner">
                    {getIcon(idx)}
                  </div>
                  <span className="text-2xl font-black font-mono text-slate-300 dark:text-slate-700 group-hover:text-fluent-royalBlue transition-colors">
                    {stage.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  {stage.name}
                </h3>
                <p className="text-xs font-semibold text-fluent-royalBlue mb-4">
                  {stage.tagline}
                </p>

                {/* Details List */}
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {stage.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0 group-hover:bg-fluent-royalBlue transition-colors" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Stage Progress Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Stage 0{idx + 1} / 04</span>
                {idx < 3 ? (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                ) : (
                  <span className="text-fluent-emerald font-bold uppercase text-[10px]">Ready</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Meta */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex justify-between items-center">
        <span>Section 04 — End-to-End Pipeline Engineering</span>
        <span className="font-mono text-fluent-royalBlue">Train: 1,600 | Val: 400 | Test: 500</span>
      </div>
    </div>
  );
}
