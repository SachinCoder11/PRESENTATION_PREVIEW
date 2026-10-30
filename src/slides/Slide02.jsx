import React from 'react';
import { AlertTriangle, CheckCircle, HelpCircle, ShieldAlert, ArrowRight } from 'lucide-react';

export default function Slide02({ slide }) {
  return (
    <div className="relative w-full h-full min-h-[100svh] bg-fluent-warmWhite dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col justify-between p-8 sm:p-12 lg:p-16 overflow-hidden select-none">
      {/* Top Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
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
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
            <span>20 Workplace Traits</span>
            <span>→</span>
            <span className="text-fluent-royalBlue font-semibold">Proactive Signal</span>
          </div>
        </div>
      </div>

      {/* Main Two-Column Editorial Layout */}
      <div className="my-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Philosophical Quote & Contrast Cards (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Key Editorial Quote */}
          <div className="border-l-4 border-fluent-royalBlue pl-6 py-2">
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-serif italic text-slate-800 dark:text-slate-200 leading-snug">
              "{slide.quote}"
            </blockquote>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
              — The foundational thesis of responsible workforce analytics
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {slide.cards.map((card, idx) => {
              const isProblem = card.type === 'problem';
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    isProblem
                      ? 'bg-rose-50/70 dark:bg-rose-950/20 border-rose-200/80 dark:border-rose-900/40 text-slate-800 dark:text-slate-200'
                      : 'bg-blue-50/70 dark:bg-blue-950/20 border-blue-200/80 dark:border-blue-900/40 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    {isProblem ? (
                      <AlertTriangle className="w-4 h-4 text-rose-500" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-fluent-royalBlue" />
                    )}
                    <h3 className={`text-sm font-bold ${isProblem ? 'text-rose-900 dark:text-rose-300' : 'text-blue-900 dark:text-blue-300'}`}>
                      {card.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-xs leading-relaxed">
                    {card.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isProblem ? 'bg-rose-400' : 'bg-fluent-royalBlue'}`} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Safeguard Banner */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
            <ShieldAlert className="w-4 h-4 text-fluent-amber shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-900 dark:text-white">Scientific Boundary: </strong>
              {slide.safeguard}
            </p>
          </div>
        </div>

        {/* Right Column: Editorial Photograph (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-[4/3]">
            <img
              src={slide.heroImage}
              alt="Supportive manager and employee check-in conversation"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
              <span className="font-semibold block">Human-in-the-Loop Inquiry</span>
              <span className="text-slate-300 text-[11px]">
                Machine learning signals trigger supportive dialogue, not automated punitive actions.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex justify-between items-center">
        <span>Section 02 — Framing the Human and Business Opportunity</span>
        <span className="font-mono text-fluent-royalBlue">Correlation ≠ Causality</span>
      </div>
    </div>
  );
}
