import React from 'react';
import { HeartHandshake, ShieldCheck, ArrowRight, Laptop, Clock, GraduationCap, Smile } from 'lucide-react';

export default function Slide07({ slide }) {
  const getFeatureIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Clock className="w-4 h-4 text-amber-500" />;
      case 1:
        return <Laptop className="w-4 h-4 text-blue-500" />;
      case 2:
        return <GraduationCap className="w-4 h-4 text-purple-500" />;
      case 3:
        return <Smile className="w-4 h-4 text-emerald-500" />;
      default:
        return <HeartHandshake className="w-4 h-4 text-blue-500" />;
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
            <span>Ethical AI Guardrails Active</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-4">
        {/* Supportive Inquiry Progression Banner */}
        <div className="bg-slate-900 text-white rounded-xl p-3.5 px-6 flex flex-wrap items-center justify-between gap-3 text-xs shadow-md">
          <div className="flex items-center gap-2 font-bold">
            <span className="w-6 h-6 rounded-full bg-fluent-royalBlue flex items-center justify-center text-xs">1</span>
            <span>Model Prediction</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
          <div className="flex items-center gap-2 font-bold">
            <span className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs">2</span>
            <span>HR Context Review</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
          <div className="flex items-center gap-2 font-bold">
            <span className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs">3</span>
            <span>Confidential Employee Conversation</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
          <div className="flex items-center gap-2 font-bold text-fluent-emerald">
            <span className="w-6 h-6 rounded-full bg-fluent-emerald/30 border border-fluent-emerald flex items-center justify-center text-xs">4</span>
            <span>Tailored Support</span>
          </div>
        </div>

        {/* 4 Feature Signals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {slide.signals.map((sig, idx) => (
            <div
              key={idx}
              className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2 hover:border-fluent-royalBlue/40 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800">
                  {getFeatureIcon(idx)}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-xs font-mono">
                  {sig.feature}
                </h4>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                  Diagnostic Inquiry
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300 italic">
                  "{sig.diagnostic}"
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-fluent-royalBlue block mb-0.5">
                  Supportive Action
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {sig.intervention}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Non-Negotiable Safeguards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {slide.safeguards.map((safe, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs"
            >
              <div className="flex items-center gap-1.5 text-slate-900 dark:text-white font-bold mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-fluent-royalBlue" />
                <span>{safe.rule}</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {safe.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Meta */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex justify-between items-center">
        <span>Section 07 — Actionable Human-in-the-Loop Implementation</span>
        <span className="font-mono text-fluent-royalBlue">Dignity • Privacy • Development</span>
      </div>
    </div>
  );
}
