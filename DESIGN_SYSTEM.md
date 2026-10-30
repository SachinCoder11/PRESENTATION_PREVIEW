# FLUENT EDITORIAL DESIGN SYSTEM SPECIFICATION
## "FROM DATA TO PEOPLE POTENTIAL" — WEB PRESENTATION PACKAGE

**Architecture:** React 18 + Vite + Fluent UI React v9 + Tailwind CSS  
**Target Viewing Platforms:** 1920×1080 (Desktop Keynote), 1366×768 (Laptops), Ultra-wide & Tablets  
**Aesthetic Anchor:** Microsoft Fluent 2 Design Language + Editorial Keynote Storytelling  

---

## 1. Visual Design Philosophy

The visual language for **"From Data to People Potential"** bridges two worlds:
1. **Microsoft Fluent 2 Clarity**: Soft acrylic layering (`backdrop-blur`), subtle elevation shadows, restrained pill controls, and high-legibility typography.
2. **Editorial Keynote Elegance**: Human photography, intentional whitespace, thoughtful philosophical quotes, and data visualisations as narrative proof rather than dashboard clutter.

---

## 2. Color Palette & Semantic Tokens

| Token Name | Hex Value | Semantic Role | Contrast vs Background |
|:---|:---:|:---|:---:|
| **Fluent Navy** | `#0F172A` | Primary brand background, cover slide, dark mode base | 16.2:1 (AAA) |
| **Warm White** | `#F8FAFC` | Editorial technical slide background, reduced eye strain | 1.05:1 (Surface) |
| **Royal Blue** | `#2563EB` | Primary interaction accent, active indicators, flow paths | 4.8:1 (AA Large) |
| **Emerald** | `#10B981` | Champion model highlight (CatBoost 89.75%), verified badges | 5.2:1 (AA) |
| **Slate** | `#64748B` | Secondary captions, subheadings, muted borders | 7.4:1 (AAA) |
| **Amber** | `#F59E0B` | Sparsity hotspots, data audit alerts (96.50% refit anomaly) | 3.5:1 (Accent) |
| **Rose** | `#F43F5E` | Problem contrast cards, time warning threshold (>5:00) | 4.6:1 (AA) |

---

## 3. Typography Architecture

### Display & Headings: *Segoe UI / Aptos / Inter*
- **Hero Title (Slide 1):** `font-extrabold text-5xl sm:text-6xl`, tracking `-0.025em`, leading `1.1`.
- **Slide Section Titles:** `font-extrabold text-3xl sm:text-4xl`, tracking `-0.02em`.
- **Card Titles:** `font-bold text-sm sm:text-base`.

### Editorial Philosophy Accent: *Georgia / Playfair Display*
- Applied to key thesis pull quotes (Slide 2: *"An employee's performance label tells us where a pattern appears. It does not automatically explain why."* and Slide 8: *"Predicting a performance category is only the first step..."*).

### Audited Metrics: *Consolas / JetBrains Mono*
- Tabular numerals (`font-mono`, `font-bold`) ensuring alignment across class percentages (`56.45%`, `33.15%`, `10.40%`) and model accuracies (`89.75%`, `88.60%`).

---

## 4. The Two Presentation Modes

### Mode A: Scroll Story Mode (Default)
- **Viewport:** 8 vertically scrolling sections, each calibrated to approximately `100svh`.
- **Navigation:** Natural trackpad/wheel vertical scrolling with subtle slide entry reveal.
- **Controls:** Minimal and non-distracting.
  - Top thin progress bar.
  - Discreet slide numbering pill (`01 / 08`).
  - "Scroll to explore" cue on Slide 1.
  - Prominent "Start Fullscreen Presentation" button on Slide 1 + floating pill on scroll.
- **Strict Prohibition:** No website navbar, no hamburger menu, no footer link lists, no dashboard sidebar.

### Mode B: Fullscreen Present Mode (Keynote Experience)
- **Viewport:** Locked 16:9 widescreen composition (`aspect-16-9`), perfectly centered on dark backdrop.
- **Navigation:** Arrow keys (`←`, `→`), `Space`, `Backspace`, `Home`, `End`, `Escape`.
- **Touch Support:** Horizontal swipe gestures for touchscreens and iPads.
- **Controls:** Discreet floating pill in bottom right:
  - Slide counter and timer (5:00 pacing clock with amber/rose warning states).
  - Speaker notes drawer toggle (`N`).
  - Fullscreen toggle.
  - Next / Prev buttons.
  - Exit presentation mode (`Esc`).
- **Synchronisation:** Pressing `Esc` exits presentation mode and smoothly scrolls the user to that exact slide in Scroll Mode.

---

## 5. Motion & Accessibility

- **Animation Duration:** 200ms – 400ms restrained transitions using `framer-motion`.
- **Reduced Motion:** Fully complies with `@media (prefers-reduced-motion: reduce)`.
- **Keyboard Focus:** All buttons, toggles, and charts are keyboard accessible with visible focus rings.
