# FROM DATA TO PEOPLE POTENTIAL
## Employee Performance Classification for Human-Centred Workforce Decisions

**Event:** Imarticus Pan-India Data Science Hackathon (National Finals)  
**Achievement:** National Finals Presentation  
**Presenter:** Sachin Dumbre  
**Evaluation Date:** 31 October 2026  
**Format:** Immersive, Deployable Web Presentation (Two Interactive Experiences)  

---

## 1. Project Overview

**FROM DATA TO PEOPLE POTENTIAL** is a production-grade web-based presentation platform built for the National Finals of the Imarticus Pan-India Data Science Hackathon.

Rather than a static slide deck or a generic website, this application delivers **two distinct, synchronized presentation experiences**:

1. **MODE A: SCROLL STORY MODE (Default)**:
   - An immersive, vertically scrolling presentation designed for executive review and public sharing.
   - 8 full-height slide sections (~`100svh`) with smooth vertical transitions.
   - Discreet progress bar and slide numbering (`01 / 08`).
   - Clean presentation canvas free from distracting website headers, navigation bars, hamburger menus, and footer links.
   - "Scroll to explore" cue and a prominent **"Start Fullscreen Presentation"** button.

2. **MODE B: FULLSCREEN PRESENT MODE (Keynote Experience)**:
   - Activated by clicking **Present** or pressing <kbd>P</kbd> or <kbd>Space</kbd> on the cover slide.
   - Locks into a focused, widescreen 16:9 presentation composition (`aspect-16-9`).
   - Arrow key navigation (<kbd>→</kbd>, <kbd>←</kbd>, <kbd>Space</kbd>, <kbd>Backspace</kbd>, <kbd>Home</kbd>, <kbd>End</kbd>).
   - Touch swipe navigation support for mobile and tablet devices.
   - Discreet floating controls: 5-minute presenter pacing timer, fullscreen toggle, next/prev controls.
   - Presenter notes drawer with verbatim 35-second scripts for each slide (toggled with <kbd>N</kbd>).
   - **Scroll Synchronization:** Pressing <kbd>Esc</kbd> exits back to Scroll Mode and automatically scrolls to the exact corresponding slide.

---

## 2. Technology Stack

- **Core Framework:** React 18 + Vite
- **Design System:** Microsoft Fluent UI React v9 (`@fluentui/react-provider`, `@fluentui/react-theme`, Fluent 2 design tokens)
- **Styling:** Tailwind CSS + custom Fluent acrylic glassmorphism (`backdrop-blur-md`, subtle depth)
- **Interactive Visualizations:** Recharts (Data-driven, accessible, with count/% toggles and custom tooltips)
- **Motion & Transitions:** Framer Motion (Restrained 200–400ms slide reveals)
- **Iconography:** Lucide React

---

## 3. Quickstart & Local Execution

### Prerequisites
- Node.js v18.0.0 or higher
- npm v9.0.0 or higher

### Installation
```bash
cd workforce-presentation
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5174](http://localhost:5174) in your browser.

### Build Production Bundle
```bash
npm run build
```
The optimized production bundle is generated in the `dist/` directory.

### Preview Production Build Locally
```bash
npm run preview
```

---

## 4. How to Navigate the Presentation

### Keyboard Shortcuts
| Key | Action | Mode |
|:---:|:---|:---:|
| <kbd>→</kbd> / <kbd>Space</kbd> / <kbd>PageDown</kbd> | Advance to Next Slide | Present Mode |
| <kbd>←</kbd> / <kbd>Backspace</kbd> / <kbd>PageUp</kbd> | Return to Previous Slide | Present Mode |
| <kbd>Home</kbd> | Jump to Slide 01 | Present Mode |
| <kbd>End</kbd> | Jump to Slide 08 | Present Mode |
| <kbd>P</kbd> | Enter Fullscreen Present Mode | Scroll Mode |
| <kbd>N</kbd> | Toggle Presenter Notes Drawer | Present Mode |
| <kbd>Esc</kbd> | Exit Present Mode (synchronizes scroll position) | Present Mode |

---

## 5. Deployment Guide (Vercel)

This application is 100% static, client-side, and requires no backend, database, or API keys. It is pre-configured for instant zero-configuration deployment to **Vercel**.

### Deploy via Vercel CLI
```bash
# 1. Install Vercel CLI globally (if not installed)
npm install -g vercel

# 2. Login to your Vercel account
vercel login

# 3. Deploy to production
cd workforce-presentation
vercel --prod
```

### Deploy via GitHub + Vercel Web Dashboard
1. Push this repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/dashboard), click **"Add New Project"** $\rightarrow$ **"Import Git Repository"**.
3. Set the **Root Directory** to `workforce-presentation`.
4. The build settings will automatically be detected from `package.json` and `vercel.json`:
   - **Framework Preset:** Vite
   - **Build Command:** `vite build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Your presentation will be live at a public `.vercel.app` URL within 30 seconds!

---

## 6. Slide-by-Slide Narrative & Verified Facts

| Slide | Title | Key Takeaway & Verified Evidence |
|:---:|:---|:---|
| **01** | **FROM DATA TO PEOPLE POTENTIAL** | Reframing ML from an automated judge into an early-warning signal for human growth. |
| **02** | **BEYOND RETROSPECTIVE APPRAISALS** | Moving past backward-looking annual reviews. Correlation $\neq$ causality; model does not diagnose burnout. |
| **03** | **UNDERSTANDING THE DATA** | 2,000 train / 500 test rows; 20 features; 10.33% missing cells (top: Internet 17.15%, Absenteeism 15.95%); Class proportions: **56.45% Avg, 33.15% Low, 10.40% High**. Dropping rows loses >70% of data. |
| **04** | **FROM RAW DATA TO RELIABLE PREDICTIONS** | 4-stage pipeline: UNDERSTAND $\rightarrow$ PREPARE $\rightarrow$ EXPERIMENT $\rightarrow$ EVALUATE. Strict anti-leakage MICE/mode imputation within folds. |
| **05** | **THE EXPERIMENTATION JOURNEY** | 7-model progression: Baseline (56.50%), LogReg (72.75%), Extra Trees (80.00% audited), RF (87.50%), XGBoost (88.75%), **CatBoost Champion (89.75% holdout, 88.60% CV)**. Oblivious decision trees regularize tabular logs. |
| **06** | **PROVING THE RESULTS** | Forensic audit of 96.50% refit anomaly (in-sample memorization in Cell 2 vs genuine 89.75% in Cell 3). Multipliers `[0.90, 1.20, 1.00]` lifted OOF to 88.31%. Standing: **~87 leaderboard points**. |
| **07** | **FROM CLASSIFICATION TO COMPASSION** | Features as inquiry triggers: Overtime (workload), Laptops (hardware), Training (upskilling). 3 non-negotiable safeguards: mandatory human review, employee dignity, no automated disciplinary actions. |
| **08** | **BEYOND PREDICTION** | 6-stage closed-loop framework (Model $\rightarrow$ HR Context $\rightarrow$ Conversation $\rightarrow$ Support $\rightarrow$ Pilot $\rightarrow$ Decision). Voluntary 6-month pilot KPIs and proposed future ROI evaluation model. |

---

## 7. Quality Assurance Checklist

- [x] **No website clutter**: Clean presentation canvas with zero navbar, hamburger, or footer links.
- [x] **Dual presentation modes**: Fully responsive Scroll Story Mode + 16:9 Fullscreen Keynote Mode.
- [x] **Mode synchronisation**: Exiting Present Mode via <kbd>Esc</kbd> smoothly scrolls to the exact slide.
- [x] **Interactive visualisations**: Recharts Target Distribution (count/% toggle), Missingness Bar Chart, Model Progression Leaderboard, and 6-stage clickable loop.
- [x] **Audited metrics**: All numbers verified against raw CSVs and notebook cell outputs. Extra Trees verified at 80.00%.
- [x] **Ethical boundaries**: Strict language compliance (no claims of burnout diagnosis, attrition prediction, causality, or historic savings).
