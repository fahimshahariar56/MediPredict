# MediPredict Frontend Design System

## 1. Design Philosophy

MediPredict should feel like a real premium AI healthcare SaaS product.

Primary visual direction:

**Apple-like minimalism × Premium Healthcare × Modern AI Analytics**

The interface should be clean, luxurious, spacious, trustworthy, and
technically sophisticated without becoming visually noisy.

## 2. Visual Identity

### Core Attributes

-   Premium
-   Minimal
-   Clinical
-   Intelligent
-   Elegant
-   Soft
-   Modern
-   Trustworthy

### Visual Hierarchy

**Healthcare → AI → Data → Trust**

## 3. Reference Designs

The following uploaded/reference designs are mandatory inspiration
sources:

-   `MediPredict AI Healthcare Landing Page.png`
-   `MediPredict Healthcare AI Dashboard Showcase.png`

Use these references to understand layout, composition, visual
hierarchy, card treatment, navigation, dashboard patterns, illustration
placement, and overall product feel.

Do not copy the reference images pixel-for-pixel. Build an original
MediPredict interface based on their visual language.

## 4. Mandatory Component Sources

The frontend must use and/or draw from these component ecosystems:

-   React Bits --- https://reactbits.dev/
-   Magic UI --- https://magicui.design/
-   21st.dev --- https://21st.dev/

These are mandatory sources for modern animated/interactable components.

Use them selectively and integrate their components into the MediPredict
design system instead of creating an inconsistent collection of
unrelated UI styles.

## 5. Technology-Aware Motion

The frontend may use:

-   Motion
-   GSAP
-   Smooth-scroll technology such as Lenis
-   CSS transitions
-   CSS animations
-   Intersection Observer where appropriate

Animation should remain performant and purposeful.

## 6. Color Direction

### Background

-   Very light blue
-   White
-   Soft cool gradients

### Primary

-   Medical blue
-   Bright blue accents

### Dark

-   Deep navy
-   Near-black for important active elements

### Supporting

-   Soft green for positive/low-risk states
-   Soft orange for warnings/moderate states
-   Soft red for high-risk states

Risk colors should remain accessible and should never be the only
indicator of meaning.

## 7. Typography

Primary font:

**Inter**

Typography should be:

-   Clean
-   High readability
-   Strong hierarchy
-   Generous line-height
-   Premium but restrained

Use large, confident hero typography and compact but readable dashboard
typography.

## 8. Cards

Cards should generally use:

-   Large rounded corners
-   White or very light surfaces
-   Subtle borders
-   Soft shadows
-   Generous internal spacing
-   Small hover elevation when appropriate

Suggested visual language:

-   Large cards: around 24px radius
-   Medium cards: around 20px radius
-   Small cards: around 14--16px radius

These values are guidelines, not rigid requirements.

## 9. Buttons

Buttons should feel tactile and premium.

Required states:

-   Default
-   Hover
-   Active/pressed
-   Focus
-   Disabled
-   Loading

Interactions should be smooth.

Primary buttons may use dark navy/black surfaces or strong medical blue
depending on context.

Secondary buttons should remain visually lighter.

## 10. Navigation

Public navigation:

-   Clean
-   Floating/pill-like where appropriate
-   Minimal
-   Spacious
-   Smooth active-state transitions

Dashboard navigation:

-   Premium sidebar
-   Clear active item
-   Minimal line icons
-   Smooth hover/active transitions
-   Responsive mobile navigation

## 11. Icons

Use thin, clean line icons.

Preferred icon language:

-   Lucide-style
-   Consistent stroke width
-   Minimal visual noise

## 12. Hero

The hero should communicate the product immediately.

Reference direction:

-   Large headline
-   Strong blue accent text
-   Short product description
-   Primary CTA
-   Secondary CTA
-   Trust indicators
-   Futuristic healthcare visual on the right

The provided MediPredict landing-page reference should guide the
composition.

## 13. Healthcare Visuals

Use available project assets where they improve the page.

Available assets include:

1.  `ai-medicine-artificial-intelligence-help-medical-diagnosis-treatment-patients-futuristic-tech-medicine-flat-doctors-using-innovative-technologies-research-disease-analysis.png`
2.  `Brain_human_anatomy_biology_organ_body_system_health_care_and_medical_hand_drawn_cartoon_art_illustration.png`
3.  `Cardiologist-rafiki.png`
4.  `Diabetes-rafiki.png`
5.  `Doctors-rafiki.png`
6.  `dna.jpg`
7.  `heart.jpg`
8.  `MediPredict AI Healthcare Landing Page.png`
9.  `MediPredict Healthcare AI Dashboard Showcase.png`

Use the assets on pages where they make visual and semantic sense.

Do not force every asset into the same page.

## 14. Dashboard

The dashboard should use:

-   Spacious grid
-   Health summary cards
-   Clean charts
-   Risk cards
-   AI insight cards
-   Recent predictions
-   Clear information hierarchy

Charts should be thin, elegant, and readable.

## 15. Prediction Interface

Prediction forms should avoid looking like traditional hospital forms.

Use:

-   Grouped input cards
-   Clear labels
-   Helpful examples
-   Minimal borders
-   Smooth focus states
-   Animated validation states
-   Premium CTA

## 16. Risk Score

Risk results should have strong visual hierarchy.

Example structure:

-   Risk percentage
-   Risk category
-   Short explanation
-   Key factors
-   Recommendation
-   Comparison with previous prediction

Use animated score presentation where appropriate.

## 17. Explainable AI / SHAP

SHAP UI should feel like a premium analytics product.

Potential components:

-   Feature importance bars
-   SHAP summary visualization
-   Contribution indicators
-   Natural-language explanation
-   Positive/negative contribution distinction

The visual explanation must remain understandable to non-technical
users.

## 18. AI Assistant

The AI Assistant should use:

-   Rounded message containers
-   Smooth message entrance
-   Suggested prompts
-   Clean input area
-   Typing indicator
-   Minimal icons
-   Calm background

## 19. Scroll Animation

Use scroll-triggered animation for:

-   Section reveal
-   Card reveal
-   Staggered content
-   Chart entrance
-   Hero visual movement
-   Statistics

Animation should be subtle.

## 20. Smooth Scroll

The application should support smooth scrolling where technically
appropriate.

Avoid scroll hijacking that harms accessibility or user control.

## 21. Page Transitions

Page transitions should be subtle and fast.

Avoid long cinematic transitions that delay navigation.

## 22. Micro-interactions

Use micro-interactions for:

-   Buttons
-   Cards
-   Navigation
-   Tabs
-   Toggles
-   Inputs
-   Icons
-   Dropdowns
-   Toasts

The goal is perceived quality, not animation quantity.

## 23. Reduced Motion

Respect:

`prefers-reduced-motion: reduce`

When reduced motion is enabled, disable or simplify non-essential
motion.

## 24. Responsive Design

Do not create a desktop layout and merely scale it down.

Design dedicated responsive behavior for:

-   Navigation
-   Sidebar
-   Dashboard cards
-   Charts
-   Tables
-   Prediction forms
-   AI Assistant
-   Hero composition

## 25. Performance

Avoid unnecessary:

-   Large animation bundles
-   Excessive DOM effects
-   Constant scroll listeners
-   Heavy video backgrounds
-   Unoptimized images

Animations should not noticeably degrade interaction performance.

## 26. Design Consistency Rule

Every page must look like it belongs to the same product.

Do not mix:

-   unrelated border radii
-   unrelated shadows
-   unrelated button styles
-   unrelated typography
-   unrelated icon systems
-   unrelated animation styles

All components must follow the MediPredict design language.
