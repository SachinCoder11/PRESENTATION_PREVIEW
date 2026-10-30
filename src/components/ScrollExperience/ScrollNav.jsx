import React from 'react';
import { Play } from 'lucide-react';

export default function ScrollNav({ onStartPresent, currentSlide, totalSlides }) {
  return (
    <>
      {/* Floating Present Pill (appears top-right discreetly for easy mode switch at any slide) */}
      <div className="fixed top-5 right-6 z-40">
        <button
          type="button"
          onClick={onStartPresent}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fluent-royalBlue hover:bg-blue-600 text-white text-xs font-semibold shadow-lg hover:shadow-fluent-glow transition-all duration-200 group border border-blue-400/30"
          title="Switch to Fullscreen Present Mode (P)"
        >
          <Play className="w-3.5 h-3.5 fill-white transition-transform group-hover:scale-110" />
          <span>Present Mode</span>
          <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 rounded bg-blue-700/60 text-[10px] text-blue-200 font-mono">
            P
          </kbd>
        </button>
      </div>
    </>
  );
}
