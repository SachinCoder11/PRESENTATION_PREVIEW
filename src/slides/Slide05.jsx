import React from 'react';
import { Trophy, TrendingDown, GitMerge, Cpu, CheckCircle } from 'lucide-react';
import ModelBenchmarkChart from '../components/InteractiveChart/ModelBenchmarkChart';

export default function Slide05({ slide }) {
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
            <Trophy className="w-3.5 h-3.5 text-fluent-emerald" />
            <span>Selected Model: CatBoost (89.75%)</span>
          </div>
        </div>
      </div>

      {/* Main Content: Chart + Rationale Cards */}
      <div className="my-auto py-4 space-y-4">
        {/* Interactive Benchmark Chart */}
        <ModelBenchmarkChart models={slide.models} />

        {/* Champion Rationale & Ablation Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Why CatBoost won */}
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Inductive Bias Champion</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              CatBoost uses <strong>symmetric (oblivious) decision trees</strong> that evaluate identical split criteria across all tree nodes at a given depth. This architectural symmetry acts as an implicit regularizer, preventing leaf-wise overfitting on tabular workforce logs.
            </p>
          </div>

          {/* Card 2: Feature Engineering Negative Result */}
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-rose-500 text-xs font-bold uppercase tracking-wider">
              <TrendingDown className="w-4 h-4" />
              <span>Feature Engineering Ablation</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Creating interaction ratios like <code className="text-[11px] bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-rose-600 dark:text-rose-400">Overtime_to_Experience</code> dropped 5-Fold CV from <strong>88.60% to 88.15%</strong>. Adding collinear features diluted tree split purity; rejected.
            </p>
          </div>

          {/* Card 3: Soft-Voting Ensemble Ablation */}
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-fluent-royalBlue text-xs font-bold uppercase tracking-wider">
              <GitMerge className="w-4 h-4" />
              <span>Ensemble Complexity Ablation</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              A soft-voting ensemble of RF, XGBoost, and CatBoost matched CatBoost at exactly <strong>89.75% (+0.00 pp)</strong>. Following <em>Occam's razor</em>, we deployed the standalone CatBoost classifier to minimize latency and technical debt.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex justify-between items-center">
        <span>Section 05 — Model Selection & Empirical Rigor</span>
        <span className="font-mono text-emerald-600 dark:text-emerald-400">CatBoost Macro-F1: 0.8484 (Holdout)</span>
      </div>
    </div>
  );
}
