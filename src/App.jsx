import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { presentationMeta, slidesData } from './data/presentationData';

import Slide01 from './slides/Slide01';
import Slide02 from './slides/Slide02';
import Slide03 from './slides/Slide03';
import Slide04 from './slides/Slide04';
import Slide05 from './slides/Slide05';
import Slide06 from './slides/Slide06';
import Slide07 from './slides/Slide07';
import Slide08 from './slides/Slide08';

import SlideProgress from './components/SlideProgress/SlideProgress';
import ScrollNav from './components/ScrollExperience/ScrollNav';
import PresentationControls from './components/PresentationMode/PresentationControls';
import PresenterNotes from './components/PresenterNotes/PresenterNotes';

const slideComponents = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isPresentMode, setIsPresentMode] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef(null);
  const touchStartX = useRef(null);

  // Monitor fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Enter Fullscreen Present Mode
  const enterPresentMode = async (initialSlide = null) => {
    if (initialSlide) {
      setCurrentSlide(initialSlide);
    }
    setIsPresentMode(true);
    try {
      if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch (err) {
      // Fullscreen policy may reject if not user gesture, proceed gracefully
    }
  };

  // Exit Fullscreen Present Mode & Synchronize Scroll Position
  const exitPresentMode = () => {
    setIsPresentMode(false);
    setIsNotesOpen(false);
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    // Synchronize scroll to current slide
    setTimeout(() => {
      const el = document.getElementById(`slide-section-${currentSlide}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
      } catch (err) {}
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    }
  };

  // Next / Prev handlers
  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slidesData.length));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 1));
  };

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore key events when typing inside inputs or textareas
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (isPresentMode) {
        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
          e.preventDefault();
          handleNext();
        } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'PageUp') {
          e.preventDefault();
          handlePrev();
        } else if (e.key === 'Home') {
          e.preventDefault();
          setCurrentSlide(1);
        } else if (e.key === 'End') {
          e.preventDefault();
          setCurrentSlide(slidesData.length);
        } else if (e.key === 'Escape') {
          e.preventDefault();
          exitPresentMode();
        } else if (e.key === 'n' || e.key === 'N') {
          e.preventDefault();
          setIsNotesOpen((prev) => !prev);
        }
      } else {
        // In Scroll Mode: 'P' triggers Present Mode
        if (e.key === 'p' || e.key === 'P') {
          e.preventDefault();
          enterPresentMode();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPresentMode, currentSlide]);

  // Touch Swipe Handlers for Mode B
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handleNext(); // Swipe left -> Next
      } else {
        handlePrev(); // Swipe right -> Prev
      }
    }
    touchStartX.current = null;
  };

  // Track active slide in Scroll Mode via IntersectionObserver
  useEffect(() => {
    if (isPresentMode) return;

    const observers = [];
    slidesData.forEach((s) => {
      const el = document.getElementById(`slide-section-${s.id}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
              setCurrentSlide(s.id);
            }
          });
        },
        { threshold: [0.45, 0.6] }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [isPresentMode]);

  const CurrentSlideComponent = slideComponents[currentSlide - 1] || Slide01;
  const currentSlideData = slidesData[currentSlide - 1];

  return (
    <div className="min-h-screen bg-fluent-navy text-slate-100 font-sans antialiased selection:bg-fluent-royalBlue selection:text-white">
      {/* Slide Progress & Minimal Numbering (Always active in both modes) */}
      <SlideProgress
        currentSlide={currentSlide}
        totalSlides={slidesData.length}
        isPresentMode={isPresentMode}
      />

      {/* ========================================================= */}
      {/* MODE A: SCROLL STORY MODE (Default)                       */}
      {/* ========================================================= */}
      {!isPresentMode ? (
        <div ref={containerRef} className="relative w-full">
          {/* Discreet Floating Present Mode pill */}
          <ScrollNav
            onStartPresent={() => enterPresentMode(currentSlide)}
            currentSlide={currentSlide}
            totalSlides={slidesData.length}
          />

          {/* 8 Full-Screen Stacked Slide Sections */}
          {slidesData.map((slide, idx) => {
            const Component = slideComponents[idx];
            return (
              <section
                key={slide.id}
                id={`slide-section-${slide.id}`}
                className="relative w-full min-h-[100svh] flex flex-col justify-center border-b border-slate-800/40"
              >
                <Component
                  slide={slide}
                  meta={presentationMeta}
                  onStartPresent={() => enterPresentMode(slide.id)}
                />
              </section>
            );
          })}
        </div>
      ) : (
        /* ========================================================= */
        /* MODE B: FULLSCREEN PRESENT MODE (PowerPoint Keynote feel)  */
        /* ========================================================= */
        <div
          className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main 16:9 Presentation Stage with Restrained Motion */}
          <div className="w-full h-full max-w-[1920px] max-h-[1080px] aspect-16-9 flex items-center justify-center p-2 sm:p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800/60"
              >
                <CurrentSlideComponent
                  slide={currentSlideData}
                  meta={presentationMeta}
                  onStartPresent={() => {}}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Presentation Mode Discreet Controls */}
          <PresentationControls
            currentSlide={currentSlide}
            totalSlides={slidesData.length}
            onPrev={handlePrev}
            onNext={handleNext}
            onExit={exitPresentMode}
            onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
            isNotesOpen={isNotesOpen}
            isFullscreen={isFullscreen}
            onToggleFullscreen={toggleFullscreen}
          />

          {/* Presenter Notes Drawer (Toggled with N) */}
          <PresenterNotes
            isOpen={isNotesOpen}
            onClose={() => setIsNotesOpen(false)}
            notes={currentSlideData.speakerNotes}
            slideNumber={currentSlideData.slideNumber}
            title={currentSlideData.title}
          />
        </div>
      )}
    </div>
  );
}
