# MediPredict Frontend PRD

## 1. Product Overview

MediPredict is a personal learning and career portfolio project focused
on building a production-oriented AI healthcare product.

The frontend will present MediPredict as a premium healthcare SaaS +
modern AI product. The goal is not to create a university-project-style
interface. The UI should communicate trust, intelligence, clarity, and
product maturity.

The frontend scope in this document is UI-focused. Authentication
functionality, backend implementation, ML implementation, and real
API/business logic are outside the current frontend implementation
scope.

## 2. Product Positioning

**MediPredict = Premium Healthcare SaaS × Modern AI Product**

Core visual/product qualities:

-   Premium
-   Clean
-   Modern
-   Trustworthy
-   Intelligent
-   Clinical
-   Elegant
-   Responsive
-   Smooth
-   Production-oriented

## 3. Primary Users

The initial frontend should support these conceptual user areas:

-   Public visitor
-   Registered user
-   Admin

Authentication and authorization functionality will be implemented
separately by the project owner. Frontend phases should therefore focus
on the UI and integration-ready structure without implementing real
authentication logic unless explicitly requested in a later phase.

## 4. Frontend Goals

The frontend should:

1.  Present MediPredict as a serious AI healthcare product.
2.  Provide a polished landing page.
3.  Provide a premium health dashboard.
4.  Provide prediction-oriented interfaces for diabetes and heart
    disease.
5.  Present prediction results clearly.
6.  Present explainable AI / SHAP information visually.
7.  Provide analytics and prediction history interfaces.
8.  Provide an AI Assistant interface.
9.  Remain fully responsive.
10. Use smooth, purposeful animation.
11. Maintain one consistent visual language across all pages.

## 5. Core UI Areas

### Public

-   Landing page
-   About
-   How It Works
-   AI Technology
-   Pricing
-   FAQ
-   Contact
-   Privacy Policy
-   Terms of Service

### User

-   Dashboard
-   Analytics
-   Diabetes Prediction
-   Heart Disease Prediction
-   Prediction Results
-   Prediction History
-   Medical Records UI
-   AI Assistant
-   Profile
-   Settings

### Admin UI

-   Admin Dashboard
-   User overview
-   Prediction analytics
-   Prediction/history management UI
-   System overview

Admin functionality is UI-only until explicitly requested.

## 6. Landing Page Direction

The landing page should be inspired by the provided MediPredict
reference image:

**MediPredict AI Healthcare Landing Page.png**

The page should communicate:

-   AI-powered healthcare
-   Health risk prediction
-   Explainable AI
-   Security and privacy
-   Fast prediction
-   Trust and reliability

Suggested visual sections:

1.  Premium navigation
2.  Hero
3.  Trust / metric strip
4.  Prediction preview
5.  About MediPredict
6.  How It Works
7.  Impact / statistics
8.  Testimonials
9.  CTA
10. Footer

The reference image is an inspiration source, not a requirement to
reproduce it pixel-for-pixel.

## 7. Dashboard Direction

The dashboard should be inspired by:

**MediPredict Healthcare AI Dashboard Showcase.png**

The dashboard should include a premium sidebar/navigation system, health
summary cards, analytics, prediction information, and AI insights.

## 8. AI Prediction UX

Prediction screens should be visually calm and easy to understand.

Expected concepts:

-   Input cards
-   Clear labels
-   Helpful hints
-   Primary prediction CTA
-   Loading state
-   Risk score
-   Risk category
-   Key contributing factors
-   SHAP explanation
-   Recommendations UI
-   Previous prediction comparison

No fake prediction logic should be introduced unless explicitly
requested.

## 9. AI Assistant UX

The AI Assistant should feel like a modern AI product rather than a
generic chat page.

It should support:

-   Chat interface
-   Suggested prompts
-   Smooth message transitions
-   Typing/loading states
-   Clean message hierarchy
-   Health-focused context presentation

Actual AI functionality will be implemented separately.

## 10. Motion Principles

Animation should be premium and purposeful.

Required concepts:

-   Smooth page transitions
-   Scroll reveal
-   Smooth scrolling
-   Hover micro-interactions
-   Button press/hover states
-   Animated cards
-   Smooth switches/tabs
-   Animated charts where appropriate
-   Subtle background motion
-   Loading/skeleton animation

Avoid excessive animation that reduces readability or healthcare-product
trust.

## 11. Responsive Requirement

Every frontend feature must work across:

-   Mobile
-   Tablet
-   Laptop
-   Desktop
-   Large desktop

Responsive behavior must be designed rather than simply shrinking
desktop layouts.

## 12. Accessibility

The UI should consider:

-   Keyboard navigation
-   Visible focus states
-   Readable contrast
-   Semantic HTML
-   Reduced-motion preferences
-   Clear form labels
-   Appropriate button states

## 13. Frontend Scope Boundary

Current frontend work is UI-focused.

Do not implement without explicit instruction:

-   Real authentication
-   Real authorization
-   Backend business logic
-   ML model logic
-   Database logic
-   Production secrets
-   Real medical decision-making

The frontend should remain ready for future API integration.
