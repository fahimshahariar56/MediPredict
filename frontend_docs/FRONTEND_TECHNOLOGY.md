# MediPredict Frontend Technology

## 1. Core Stack

### Framework

**Next.js**

Use the App Router architecture.

### Language

**JavaScript**

Use:

-   `.js`
-   `.jsx`

Do not introduce:

-   `.ts`
-   `.tsx`

### Styling

**Tailwind CSS**

Use utility-first styling while keeping reusable design patterns
organized.

## 2. Required / Planned Libraries

### Axios

Use Axios as the frontend HTTP client for future backend API
integration.

Current UI-only phases should not invent real API behavior.

### Motion

Use Motion for:

-   Component animation
-   Entrance/exit transitions
-   Hover interactions
-   Layout transitions
-   UI state transitions

### GSAP

Use GSAP for complex/high-value animation where it provides a clear
advantage.

Do not use GSAP for simple transitions that CSS or Motion can handle.

### Smooth Scroll

Use an appropriate smooth-scroll solution such as Lenis when required.

Smooth scrolling must remain compatible with accessibility and
reduced-motion preferences.

### React Bits

Required component/animation source:

https://reactbits.dev/

Use for appropriate animated visual components and interactions.

### Magic UI

Required component/animation source:

https://magicui.design/

Use for premium animated UI patterns.

### 21st.dev

Required component source:

https://21st.dev

Use for modern reusable UI patterns where appropriate.

### Icons

Use a consistent Lucide-style icon system.

## 3. UI-Only Scope

The current frontend implementation is UI-focused.

Do not implement:

-   Authentication logic
-   Registration logic
-   Login API calls
-   Backend business logic
-   ML inference logic
-   Database logic

Authentication UI may exist in a later phase, but functional
authentication will be implemented separately by the project owner.

## 4. API Readiness

The frontend architecture must remain ready for future:

-   Node.js + Express API
-   ML prediction API
-   Authentication API
-   Analytics API
-   Prediction history API

Do not hard-code architecture that blocks future integration.

## 5. Asset Strategy

The project owner will place the supplied MediPredict assets inside the
frontend project before the relevant UI phases begin.

Preferred location:

`frontend/public/assets/`

Available assets:

-   `ai-medicine-artificial-intelligence-help-medical-diagnosis-treatment-patients-futuristic-tech-medicine-flat-doctors-using-innovative-technologies-research-disease-analysis.png`
-   `Brain_human_anatomy_biology_organ_body_system_health_care_and_medical_hand_drawn_cartoon_art_illustration.png`
-   `Cardiologist-rafiki.png`
-   `Diabetes-rafiki.png`
-   `Doctors-rafiki.png`
-   `dna.jpg`
-   `heart.jpg`
-   `MediPredict AI Healthcare Landing Page.png`
-   `MediPredict Healthcare AI Dashboard Showcase.png`

Use the most appropriate asset for each page rather than forcing all
assets into the UI.

## 6. Component Architecture

Use reusable components.

Expected categories:

-   UI primitives
-   Navigation
-   Layout
-   Cards
-   Forms
-   Charts
-   Healthcare components
-   AI components
-   Feedback states

Avoid page-specific duplication where a reusable component is clearly
appropriate.

## 7. Code Quality

Follow:

-   Clear naming
-   Small reusable components
-   Consistent formatting
-   Minimal duplication
-   Accessible markup
-   Predictable component APIs
-   Clean folder organization

## 8. Animation Architecture

Prefer:

1.  CSS for simple transitions
2.  Motion for component/UI animation
3.  GSAP for advanced timelines
4.  Smooth-scroll library for scroll behavior

Do not stack multiple animation systems for the same interaction without
a clear reason.

## 9. Responsive Strategy

Use mobile-first responsive styling.

Primary breakpoints should follow the project's Tailwind configuration.

Components should be tested across:

-   Mobile
-   Tablet
-   Laptop
-   Desktop
-   Large desktop

## 10. Production Considerations

The frontend should be structured so future work can add:

-   API integration
-   Authentication
-   Error boundaries
-   Loading states
-   Analytics
-   Testing
-   SEO
-   Performance optimization

without restructuring the entire project.

## 11. Technology Decision Rule

If a new library is proposed during implementation:

1.  Check whether an existing dependency already solves the problem.
2.  Prefer the smallest suitable solution.
3.  Avoid unnecessary dependencies.
4.  Keep the UI bundle and runtime performance in mind.
5.  Preserve the MediPredict design system.
