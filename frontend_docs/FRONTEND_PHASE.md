# MediPredict Frontend Phase Plan

## Frontend Documentation Scope Rule

Before starting any frontend phase, read **only** the documentation files inside `frontend_docs/`. These files are the authoritative source for frontend implementation:

- `frontend_docs/FRONTEND_PRD.md`
- `frontend_docs/FRONTEND_DESIGN.md`
- `frontend_docs/FRONTEND_PHASE.md`
- `frontend_docs/FRONTEND_TECHNOLOGY.md`

Do **not** recursively read or use the project's general `docs/` directory or other project-wide documentation as frontend implementation instructions unless the project owner explicitly provides a specific file or asks you to consult it.

Do not automatically start work from other project documentation. Do not infer additional frontend tasks from unrelated project documents.

**Phase execution is strictly controlled by `FRONTEND_PHASE.md`. Only the currently requested phase may be implemented. After completing that phase, stop and wait for the project owner's explicit instruction to continue.**

---

## EXTERNAL UI COMPONENT RESEARCH & INTEGRATION RULE

You must actively explore and use these three UI resources

when building MediPredict frontend:

1. https://reactbits.dev/
2. https://magicui.design/
3. https://21st.dev/

Do not simply mention these websites in your report.

For every frontend phase:

1. Explore the available components relevant to the current phase.
2. Select components that match MediPredict's premium healthcare SaaS design.
3. Prefer high-quality, accessible and responsive components.
4. Retrieve the actual component source code or use the

official installation method.

5. Install required dependencies when necessary.
6. Integrate the components into the existing project.
7. Customize colors, typography, spacing, radius and animations

according to FRONTEND_DESIGN.md.

8. Verify that the components work correctly.

IMPORTANT:

- Do not copy every available component.
- Do not use components just for decoration.
- Avoid duplicate components and unnecessary dependencies.
- Do not break the existing architecture.
- Prefer reusable components.
- Check compatibility with the existing Next.js and Tailwind setup.
- Respect component licenses and attribution requirements.
- Never pretend a component was integrated if you only viewed its website.

Use these resources intelligently throughout the frontend phases.

## Development Philosophy

Frontend development will be completed **one phase at a time**.

### Critical Rule

**Complete one phase → stop.**

Do not automatically continue into the next phase.

After a phase is completed, the project owner will explicitly say:

`Phase X complete. Start Phase Y.`

Only then should the next phase begin.

This prevents Antigravity from generating the entire frontend at once

and keeps development controlled, reviewable, and maintainable.

---

# Phase 00 --- Frontend Foundation & Structure

## Goal

Create only the frontend project structure and development foundation.

**No actual product UI should be implemented in this phase.**

## Tasks

### 1. Create Frontend Project

Create:

`frontend/`

Use:

-   Next.js
-   App Router
-   JavaScript
-   JSX

Do not use TypeScript.

### 2. Create Initial Project Structure

The structure should be clean and ready for future phases.

Suggested structure:

``` text

frontend/

├── public/

│   ├── assets/

│   ├── icons/

│   └── images/

│

├── src/

│   ├── app/

│   │   ├── layout.jsx

│   │   ├── page.jsx

│   │   └── globals.css

│   │

│   ├── components/

│   │   ├── ui/

│   │   ├── layout/

│   │   ├── navigation/

│   │   ├── common/

│   │   ├── charts/

│   │   └── animation/

│   │

│   ├── features/

│   │   ├── landing/

│   │   ├── dashboard/

│   │   ├── prediction/

│   │   ├── analytics/

│   │   ├── history/

│   │   ├── ai-assistant/

│   │   ├── profile/

│   │   └── admin/

│   │

│   ├── hooks/

│   ├── lib/

│   │   ├── api/

│   │   ├── animations/

│   │   └── utils/

│   │

│   ├── services/

│   ├── constants/

│   └── config/

│

├── .env.example

├── .gitignore

├── jsconfig.json

├── next.config.mjs

├── package.json

└── README.md

```

The exact structure may be adjusted if the Next.js version or selected

tooling requires it, but the architecture must remain consistent with

the documents in `frontend_docs/`.

### 3. Install/Configure Planned Frontend Dependencies

Prepare the project for the planned stack, including where appropriate:

-   Axios
-   Motion
-   GSAP
-   Smooth-scroll solution
-   Tailwind CSS
-   Lucide-style icons

React Bits, Magic UI, and 21st.dev components should be introduced when

their components are actually needed rather than blindly installing

unnecessary packages.

### 4. Configure JavaScript

Use JavaScript/JSX only.

No TypeScript configuration should be introduced.

### 5. Prepare Asset Location

Create:

`frontend/public/assets/`

This is where the project owner will place the supplied assets before

Phase 02.

Do not create fake copies of the supplied images.

### 6. Prepare Global Styling Foundation

Create only the minimal global styling foundation needed for later

phases.

Do not implement the full visual design yet.

### 7. Prepare Git-Friendly Structure

The project should be clean and ready for version control.

No generated junk, unnecessary dependencies, or temporary files.

## Phase 00 Acceptance Criteria

Phase 00 is complete only when:

-   [ ] `frontend/` exists
-   [ ] Next.js App Router is configured
-   [ ] JavaScript/JSX is used
-   [ ] TypeScript is not used
-   [ ] Initial folder structure exists
-   [ ] `public/assets/` exists
-   [ ] Planned frontend tooling is prepared
-   [ ] Project runs successfully
-   [ ] No product page has been implemented
-   [ ] No authentication functionality has been implemented
-   [ ] No backend/API functionality has been implemented
-   [ ] No ML functionality has been implemented

## STOP CONDITION

**STOP after Phase 00.**

Do not implement:

-   Landing page
-   Navbar design
-   Dashboard
-   Login UI
-   Registration UI
-   Prediction UI
-   Charts
-   AI Assistant
-   Full animations
-   API integration

Those belong to later phases.

The project owner will place the supplied assets into:

`frontend/public/assets/`

after Phase 00 is complete.

Then the project owner will explicitly request:

**Start Phase 01**

---

# Phase 01 --- Design System & Global UI

Create the MediPredict design foundation.

Includes:

-   Colors
-   Typography
-   Spacing
-   Radius
-   Shadows
-   Buttons
-   Inputs
-   Cards
-   Global animation primitives
-   Motion rules
-   Responsive foundation

Use:

-   React Bits
-   Magic UI
-   21st.dev
-   Motion
-   GSAP where appropriate

**STOP after Phase 01.**

---

# Phase 02 --- Landing Page

Build the premium MediPredict public landing page.

Use the supplied:

`MediPredict AI Healthcare Landing Page.png`

as the primary visual inspiration.

Use suitable assets from:

`frontend/public/assets/`

Build:

-   Navbar
-   Hero
-   Trust metrics
-   Prediction preview
-   About
-   How It Works
-   Impact
-   Testimonials
-   CTA
-   Footer

Add smooth scrolling and carefully selected scroll animations.

**STOP after Phase 02.**

---

# Phase 03 --- Public Pages

Build:

-   About
-   How It Works
-   AI Technology
-   Pricing
-   FAQ
-   Contact
-   Privacy Policy
-   Terms of Service

**STOP after Phase 03.**

---

# Phase 04 --- Authentication UI

Build UI only:

-   Login
-   Register
-   Forgot Password
-   Reset Password
-   Verification UI
-   Auth-related loading/error states

Do not implement real authentication unless explicitly requested.

**STOP after Phase 04.**

---

# Phase 05 --- User Dashboard

Use:

`MediPredict Healthcare AI Dashboard Showcase.png`

as the primary visual inspiration.

Build:

-   Sidebar
-   Header
-   Health summary
-   Risk cards
-   Health trends
-   AI insights
-   Recent predictions
-   Responsive navigation

**STOP after Phase 05.**

---

# Phase 06 --- Prediction UI

Build:

-   Diabetes prediction UI
-   Heart disease prediction UI
-   Input groups
-   Validation presentation
-   Loading states
-   Premium prediction CTA

No real ML inference.

**STOP after Phase 06.**

---

# Phase 07 --- Prediction Results & Explainable AI

Build:

-   Risk score
-   Risk category
-   Feature importance
-   SHAP visualization UI
-   AI explanation
-   Recommendations
-   Comparison UI

No real model connection yet.

**STOP after Phase 07.**

---

# Phase 08 --- Analytics

Build:

-   Health trends
-   Risk trends
-   Prediction statistics
-   Charts
-   Filters
-   Date range controls

**STOP after Phase 08.**

---

# Phase 09 --- Prediction History & Medical Records

Build:

-   Prediction history
-   Medical records UI
-   Search
-   Filters
-   Table/list views
-   Detail views
-   Empty states

**STOP after Phase 09.**

---

# Phase 10 --- AI Assistant UI

Build:

-   AI chat interface
-   Suggested prompts
-   Chat states
-   Typing indicator
-   Message animations
-   Responsive chat layout

No real AI integration.

**STOP after Phase 10.**

---

# Phase 11 --- Profile & Settings

Build:

-   Profile
-   Preferences
-   Notifications
-   Security UI
-   Appearance
-   Account settings

**STOP after Phase 11.**

---

# Phase 12 --- API Integration

Only after the UI is stable.

Integrate frontend with the real backend APIs using Axios.

Integrate:

-   Authentication
-   User data
-   Predictions
-   History
-   Analytics
-   AI-related endpoints

Do not invent API contracts. Use the actual backend API documentation.

**STOP after Phase 12.**

---

# Phase 13 --- States & Error UX

Implement:

-   Loading
-   Skeleton
-   Empty states
-   Error states
-   Retry
-   Success feedback
-   Toasts
-   Offline/network feedback where appropriate

**STOP after Phase 13.**

---

# Phase 14 --- Responsive & Accessibility

Deeply test:

-   Mobile
-   Tablet
-   Laptop
-   Desktop
-   Large desktop

Improve:

-   Keyboard navigation
-   Focus states
-   Contrast
-   Reduced motion
-   Touch targets
-   Screen-reader semantics

**STOP after Phase 14.**

---

# Phase 15 --- Animation & Interaction Polish

Refine:

-   Scroll animations
-   Page transitions
-   Button micro-interactions
-   Card hover
-   Smooth switches
-   Tabs
-   Navigation
-   Chart entrance
-   AI interactions

Use Motion/GSAP only where appropriate.

**STOP after Phase 15.**

---

# Phase 16 --- Performance

Optimize:

-   Images
-   Fonts
-   Animation performance
-   Bundle size
-   Rendering
-   Unnecessary client components
-   Scroll handlers

**STOP after Phase 16.**

---

# Phase 17 --- Final Production UI QA

Final review of:

-   Visual consistency
-   Responsive behavior
-   Accessibility
-   Performance
-   Animation quality
-   Component reuse
-   Broken states
-   Navigation
-   API integration readiness
-   Production polish

**STOP after Phase 17.**

---

## Antigravity Operating Rules

Antigravity must:

1.  Read all files inside `frontend_docs/` before starting frontend

work.

2.  Treat `FRONTEND_PRD.md`, `FRONTEND_DESIGN.md`, `FRONTEND_PHASE.md`,

and `FRONTEND_TECHNOLOGY.md` as the source of truth.

3.  Work only on the requested phase.
4.  Never automatically start the next phase.
5.  Stop when the current phase acceptance criteria are satisfied.
6.  Use JavaScript/JSX, never TypeScript.
7.  Keep authentication functionality out unless explicitly requested.
8.  Keep backend and ML logic out of frontend implementation.
9.  Use the supplied assets from `frontend/public/assets/` when

appropriate.

10. Use React Bits, Magic UI, and 21st.dev as required UI/component

sources.

11. Keep animations smooth, premium, purposeful, and performant.
12. Do not replace the MediPredict design system with generic

AI-generated templates.

13. Do not introduce unnecessary dependencies.
14. Do not create fake API behavior unless explicitly requested.
15. Preserve a clean, production-oriented project structure.

## Frontend Documentation Enforcement

Antigravity must use only the four files inside `frontend_docs/` as the

frontend implementation source of truth:

- `frontend_docs/FRONTEND_PRD.md`
- `frontend_docs/FRONTEND_DESIGN.md`
- `frontend_docs/FRONTEND_PHASE.md`
- `frontend_docs/FRONTEND_TECHNOLOGY.md`

Do not recursively read or use the general project `docs/` directory or

unrelated project-wide documentation unless the project owner explicitly

provides or requests a specific file.

Do not infer additional frontend work from unrelated documentation.

## Phase Completion Protocol

At the end of each phase, Antigravity should report:

-   What was implemented
-   Files created/changed
-   Dependencies added
-   Acceptance criteria status
-   Known limitations
-   Suggested manual verification

Then it must stop.

The next phase begins only after the project owner explicitly requests

it.
