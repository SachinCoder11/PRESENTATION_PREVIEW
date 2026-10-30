import React from 'react';
import { Clock, MessageSquare, Volume2, X } from 'lucide-react';

export default function PresenterNotes({ isOpen, onClose, notes, slideNumber, title }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-96 md:w-[420px] bg-slate-950/95 backdrop-blur-xl border-l border-slate-800 text-slate-100 z-50 p-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200">
      <div className="overflow-y-auto pr-1 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-fluent-royalBlue" />
            <h3 className="font-bold text-sm text-white">Presenter Notes</h3>
            <span className="text-xs font-mono text-slate-400">Slide {slideNumber}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Close Notes (N)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Title */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Current Section
          </span>
          <p className="text-sm font-semibold text-slate-200">{title}</p>
        </div>

        {/* Delivery Tips */}
        <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-xs space-y-1.5">
          <div className="flex items-center gap-1.5 text-fluent-amber font-semibold">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Tone & Cadence</span>
          </div>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            Deliver with calm authority and deliberate pacing. Emphasize human empathy, statistical rigor, and the fact that observational features reveal correlation, not causation.
          </p>
        </div>

        {/* Verbatim Script */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
            <Clock className="w-3 h-3 text-fluent-emerald" />
            Spoken Script (~35–40s Target)
          </span>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 text-sm leading-relaxed text-slate-200 font-sans font-normal selection:bg-fluent-royalBlue">
            {notes}
          </div>
        </div>
      </div>

      {/* Footer shortcut hint */}
      <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between items-center">
        <span>Toggle drawer: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">N</kbd></span>
        <span>Close: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">Esc</kbd></span>
      </div>
    </div>
  );
}
