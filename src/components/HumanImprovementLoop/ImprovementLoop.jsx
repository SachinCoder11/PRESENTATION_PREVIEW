import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, RefreshCw } from 'lucide-react';

export default function ImprovementLoop({ stages }) {
  const [activeStep, setActiveStep] = useState(1);

  const currentStage = stages.find((s) => s.step === activeStep) || stages[0];

  return (
    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-fluent-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-fluent-royalBlue bg-fluent-royalBlue/10 px-2.5 py-0.5 rounded-full inline-block mb-1">
            Closed-Loop Operational Architecture
          </span>
          <h4 className="font-semibold text-slate-900 dark:text-white text-base">
            The 6-Stage Human-Centred Improvement Framework
          </h4>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <RefreshCw className="w-3.5 h-3.5 text-fluent-royalBlue animate-spin-slow" />
          <span>Continuous Feedback Loop</span>
        </div>
      </div>

      {/* 6 Stage Navigation Nodes */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-5">
        {stages.map((stage) => {
          const isActive = stage.step === activeStep;
          return (
            <button
              key={stage.step}
              type="button"
              onClick={() => setActiveStep(stage.step)}
              onMouseEnter={() => setActiveStep(stage.step)}
              className={`text-left p-3 rounded-xl border transition-all relative flex flex-col justify-between ${
                isActive
                  ? 'bg-fluent-royalBlue text-white border-fluent-royalBlue shadow-md scale-[1.02]'
                  : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                    isActive
                      ? 'bg-white text-fluent-royalBlue'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {stage.step}
                </span>
                {stage.step < 6 && (
                  <ArrowRight
                    className={`w-3.5 h-3.5 hidden md:block ${
                      isActive ? 'text-white/80' : 'text-slate-400'
                    }`}
                  />
                )}
              </div>
              <div>
                <p className={`text-xs font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {stage.title}
                </p>
                <p className={`text-[10px] mt-0.5 truncate ${isActive ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                  {stage.role}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detail Panel */}
      <div className="bg-slate-50 dark:bg-slate-800/80 rounded-xl p-4 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-fluent-royalBlue text-white text-xs font-bold flex items-center justify-center">
              {currentStage.step}
            </span>
            <span className="font-bold text-slate-900 dark:text-white text-sm">
              {currentStage.title}
            </span>
            <span className="text-xs bg-white dark:bg-slate-700 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 font-medium">
              {currentStage.role}
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {currentStage.desc}
          </p>
        </div>

        <div className="flex items-center gap-2 self-end md:self-center shrink-0">
          <span className="text-[11px] text-slate-500">Step {currentStage.step} of 6</span>
          <button
            type="button"
            onClick={() => setActiveStep(activeStep === 6 ? 1 : activeStep + 1)}
            className="inline-flex items-center gap-1 bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 px-3 py-1.5 rounded-lg text-xs font-semibold text-fluent-royalBlue dark:text-blue-400 border border-slate-200 dark:border-slate-600 transition-colors"
          >
            {activeStep === 6 ? 'Restart Loop' : 'Next Step'}
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
