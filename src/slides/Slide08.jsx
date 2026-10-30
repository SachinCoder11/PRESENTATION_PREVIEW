import React from 'react';
import { Target, TrendingUp, Calculator, Sparkles, MessageCircleQuestion } from 'lucide-react';
import ImprovementLoop from '../components/HumanImprovementLoop/ImprovementLoop';

export default function Slide08({ slide }) {
  return (
    <div className="relative w-full h-full min-h-[100svh] bg-fluent-navy text-white flex flex-col justify-between p-8 sm:p-12 lg:p-16 overflow-hidden select-none">
      {/* Background ambient gradient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-fluent-royalBlue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-fluent-emerald/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Top Header */}
      <div className="relative z-10 border-b border-slate-700/60 pb-4">
        <span className="text-xs font-bold font-mono uppercase tracking-widest text-blue-400 mb-1 block">
          {slide.tag}
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-1">
              {slide.subtitle}
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-800/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Closed-Loop Human Architecture</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 my-auto py-3 space-y-4">
        {/* Interactive 6-Stage Closed Loop Component */}
        <ImprovementLoop stages={slide.loopStages} />

        {/* KPIs & Financial Framework Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Pilot KPIs (6 cols) */}
          <div className="lg:col-span-6 bg-slate-900/90 backdrop-blur-md rounded-2xl p-5 border border-slate-800 shadow-xl space-y-2.5">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Pilot Evaluation KPIs (Voluntary 6-Month Pilot)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {slide.kpis.map((kpi, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-fluent-emerald shrink-0" />
                  <span className="text-slate-200">{kpi}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Financial Framework (6 cols) */}
          <div className="lg:col-span-6 bg-slate-900/90 backdrop-blur-md rounded-2xl p-5 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>Proposed Evaluation Financial Model</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs mb-2">
                <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200">
                  {slide.financialFramework.formula1}
                </div>
                <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700 text-fluent-emerald font-bold">
                  {slide.financialFramework.formula2}
                </div>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 leading-tight">
              {slide.financialFramework.disclosure}
            </p>
          </div>
        </div>

        {/* Closing Philosophical Quote & Final Thank You Reveal */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950/60 to-slate-900 rounded-2xl p-5 border border-blue-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-200 italic font-serif max-w-3xl leading-relaxed">
            "{slide.closingQuote}"
          </p>

          <div className="shrink-0 text-right">
            <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 block tracking-wider font-display">
              THANK YOU
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center justify-end gap-1 mt-0.5">
              <MessageCircleQuestion className="w-3.5 h-3.5 text-blue-400" />
              Q&A Session
            </span>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="relative z-10 pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex justify-between items-center">
        <span>Section 08 — Closed-Loop Future Roadmap</span>
        <span className="font-mono text-blue-400 font-semibold">Presenter: Sachin Dumbre</span>
      </div>
    </div>
  );
}
