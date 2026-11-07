# MediPredict — Frontend

> **MediPredict = Premium Healthcare SaaS × Modern AI Product**  
> Clinical-grade AI health risk prediction and interactive medical diagnostics.

---

## 1. Overview

This directory contains the Next.js frontend application for **MediPredict**. It is built with Next.js (App Router), Tailwind CSS, and standard JavaScript/JSX.

---

## 2. Directory Structure

```text
frontend/
├── public/
│   ├── assets/              # Healthcare illustration & reference visual assets
│   ├── icons/               # Public SVG / custom icons
│   └── images/              # Static public images
├── src/
│   ├── app/                 # Next.js App Router (layout, page, global styling)
│   ├── components/
│   │   ├── ui/              # Reusable UI primitives (buttons, dialogs, cards, etc.)
│   │   ├── layout/          # Layout shells, containers, headers, footers
│   │   ├── navigation/      # Public & dashboard navigation components
│   │   ├── common/          # Shared multi-page UI elements
│   │   ├── charts/          # Analytics & metrics visualization components
│   │   └── animation/       # Motion & animation wrapper components
│   ├── features/
│   │   ├── landing/         # Landing page feature modules
│   │   ├── dashboard/       # User dashboard overview modules
│   │   ├── prediction/      # Diabetes & Heart disease prediction forms
│   │   ├── analytics/       # Health trend analytics modules
│   │   ├── history/         # Prediction history & records modules
│   │   ├── ai-assistant/    # Conversational AI assistant modules
│   │   ├── profile/         # User profile & settings modules
│   │   └── admin/           # Administrative overview & control modules
│   ├── hooks/               # Custom React hooks
│   ├── lib/
│   │   ├── api/             # API client setup and endpoint definitions
│   │   ├── animations/      # Animation presets and motion variants
│   │   └── utils/           # Utility functions and class-name merging
│   ├── services/            # Frontend services (data fetching, caching)
│   ├── constants/           # Global application constants and route definitions
│   └── config/              # Application & feature configuration
├── .env.example             # Example environment variable definitions
├── .gitignore               # Git ignore specifications
├── jsconfig.json            # Path alias mapping (@/* -> ./src/*)
├── next.config.mjs          # Next.js compiler & build configuration
└── package.json             # Dependencies and project scripts
```

---

## 3. Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript / JSX (Strictly no TypeScript)
- **Styling**: Tailwind CSS v4, Lucide Icons
- **Animation Foundation**: Motion, GSAP, Lenis
- **HTTP Client**: Axios (prepared for future API integration)
- **Component Primitives**: Radix UI, Class Variance Authority, Sonner

---

## 4. Development Scripts

Run commands from the `frontend/` directory:

```bash
# Start development server
npm run dev

# Create optimized production build
npm run build

# Start production server
npm run start

# Run ESLint validation
npm run lint
```
