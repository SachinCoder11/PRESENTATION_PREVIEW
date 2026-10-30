import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Play,
  Pause,
  RotateCcw,
  FileText,
  X,
} from 'lucide-react';

export default function PresentationControls({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onExit,
  onToggleNotes,
  isNotesOpen,
  isFullscreen,
  onToggleFullscreen,
}) {
  // 5-minute timer
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins}:${rem < 10 ? '0' : ''}${rem}`;
  };

  const handleResetTimer = (e) => {
    e.stopPropagation();
    setSeconds(0);
  };

  const isWarningTime = seconds >= 240 && seconds < 300;
  const isOverTime = seconds >= 300;

  return (
    <div className="fixed bottom-4 right-6 z-40 flex items-center gap-2 select-none">
      {/* Floating Pill Controls */}
      <div className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl text-slate-200">
        {/* Timer */}
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono">
          <span
            className={`font-bold ${
              isOverTime
                ? 'text-rose-400 animate-pulse'
                : isWarningTime
                ? 'text-amber-400'
                : 'text-emerald-400'
            }`}
          >
            {formatTime(seconds)}
          </span>
          <span className="text-slate-500 text-[10px]">/ 5:00</span>
          <button
            type="button"
            onClick={handleResetTimer}
            className="p-0.5 hover:text-white text-slate-400 transition-colors"
            title="Reset Timer"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>

        <div className="h-4 w-px bg-slate-700 mx-0.5" />

        {/* Notes Toggle */}
        <button
          type="button"
          onClick={onToggleNotes}
          className={`p-1.5 rounded-lg text-xs flex items-center gap-1 font-medium transition-colors ${
            isNotesOpen
              ? 'bg-fluent-royalBlue text-white'
              : 'hover:bg-slate-800 text-slate-300 hover:text-white'
          }`}
          title="Toggle Speaker Notes (N)"
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-[11px]">Notes</span>
        </button>

        {/* Fullscreen Toggle */}
        <button
          type="button"
          onClick={onToggleFullscreen}
          className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>

        <div className="h-4 w-px bg-slate-700 mx-0.5" />

        {/* Prev Slide */}
        <button
          type="button"
          onClick={onPrev}
          disabled={currentSlide <= 1}
          className={`p-1.5 rounded-lg transition-colors ${
            currentSlide <= 1
              ? 'opacity-40 cursor-not-allowed text-slate-500'
              : 'hover:bg-slate-800 text-slate-200 hover:text-white'
          }`}
          title="Previous Slide (← or Backspace)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Next Slide */}
        <button
          type="button"
          onClick={onNext}
          disabled={currentSlide >= totalSlides}
          className={`p-1.5 rounded-lg transition-colors ${
            currentSlide >= totalSlides
              ? 'opacity-40 cursor-not-allowed text-slate-500'
              : 'bg-fluent-royalBlue hover:bg-blue-600 text-white shadow-sm'
          }`}
          title="Next Slide (→ or Space)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="h-4 w-px bg-slate-700 mx-0.5" />

        {/* Exit Mode */}
        <button
          type="button"
          onClick={onExit}
          className="p-1.5 rounded-lg hover:bg-rose-500/20 hover:text-rose-400 text-slate-400 transition-colors"
          title="Exit to Scroll Mode (Esc)"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
