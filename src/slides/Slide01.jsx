import React from 'react';
import { Play, ChevronDown, Award, Calendar, User, Sparkles, ArrowRight } from 'lucide-react';

export default function Slide01({ slide, meta, onStartPresent }) {
  return (
    <div className="relative w-full h-full min-h-[100svh] bg-fluent-navy text-white flex flex-col justify-between p-8 sm:p-12 lg:p-16 overflow-hidden select-none">
      {/* Background cinematic imagery with dark gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={slide.heroImage}
          alt="Modern collaborative workplace"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 contrast-125 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fluent-navy via-fluent-navy/85 to-fluent-navy/60" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fluent-royalBlue/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Top Meta Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-700/60 pb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-fluent-royalBlue flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block">
              {meta.event}
            </span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-fluent-emerald"></span>
              <span className="text-xs text-slate-300 font-semibold">National Finals</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-blue-400" />
            <span>Presenter: <strong className="text-white">{meta.presenter}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>{meta.evaluationDate}</span>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl my-auto py-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-6">
          <span>Keynote Presentation</span>
          <span>•</span>
          <span>5-Minute Technical Briefing</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 font-display">
          FROM DATA TO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
            PEOPLE POTENTIAL
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
          {slide.subtitle}
        </p>

        {/* 3-Step Predictive Workflow Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mb-8">
          {slide.workflow.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-xs text-blue-400 font-mono mb-1">
                <span>0{idx + 1}</span>
                {idx < 2 && <ArrowRight className="w-3 h-3 text-slate-500" />}
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-snug">{item.step}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onStartPresent}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-fluent-royalBlue hover:bg-blue-600 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-fluent-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-blue-400/40 group"
          >
            <Play className="w-4 h-4 fill-white transition-transform group-hover:scale-110" />
            <span>Start Fullscreen Presentation</span>
            <kbd className="ml-2 px-2 py-0.5 rounded bg-blue-800 text-[10px] font-mono text-blue-200">
              Space / P
            </kbd>
          </button>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 flex items-center justify-between pt-6 border-t border-slate-800/80 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-fluent-emerald animate-pulse" />
          <span>Interactive Web Presentation Mode</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400 animate-bounce">
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
