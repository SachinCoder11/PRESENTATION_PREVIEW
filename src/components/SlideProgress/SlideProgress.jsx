import React from 'react';

export default function SlideProgress({ currentSlide, totalSlides, isPresentMode }) {
  const progressPercent = ((currentSlide) / totalSlides) * 100;
  const formattedCurrent = String(currentSlide).padStart(2, '0');
  const formattedTotal = String(totalSlides).padStart(2, '0');

  return (
    <>
      {/* Top thin progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800/40 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-fluent-royalBlue via-blue-500 to-fluent-emerald transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Discreet slide numbering badge */}
      <div className="fixed bottom-4 left-6 z-40 pointer-events-none select-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-mono font-semibold text-slate-300 shadow-md">
          <span className="text-white font-bold">{formattedCurrent}</span>
          <span className="text-slate-500">/</span>
          <span className="text-slate-400">{formattedTotal}</span>
          {isPresentMode && (
            <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] bg-fluent-royalBlue/20 text-blue-400 border border-blue-500/30 uppercase tracking-widest font-sans">
              Present
            </span>
          )}
        </div>
      </div>
    </>
  );
}
