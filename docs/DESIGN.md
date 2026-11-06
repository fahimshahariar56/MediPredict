# MediPredict — UI/UX Design System

## 1. Design Direction

MediPredict should have a clean, premium healthcare SaaS visual
language.

The interface should communicate:

- Trust
- Clarity
- Modern healthcare technology
- Calmness
- Data intelligence
- Professionalism

------------------------------------------------------------------------

## 2. Visual Style

Primary visual characteristics:

- Very light blue/white backgrounds
- Soft rounded cards
- Pill-style navigation
- Subtle shadows
- Dark/black active states
- Pale blue accents
- Minimal line icons
- Spacious layouts
- Thin charts
- Clean typography
- Responsive design

Avoid:

- Excessive gradients
- Overly decorative medical imagery
- Dense dashboards
- Aggressive colors
- Unnecessary animation
- Fake medical claims

------------------------------------------------------------------------

## 3. Layout

The system should use consistent layout primitives:

``` text
Page
 |
 +-- Header / Navigation
 |
 +-- Main Content
 |      |
 |      +-- Section
 |      +-- Cards
 |      +-- Charts
 |      +-- Forms
 |
 +-- Footer where appropriate
```

------------------------------------------------------------------------

## 4. Public Pages

Potential public pages:

- Home
- About
- How It Works
- Features
- Technology
- Contact
- Login
- Register

The homepage should clearly communicate that MediPredict provides risk
estimates and is not a diagnosis system.

------------------------------------------------------------------------

## 5. User Dashboard

Dashboard should prioritize:

1.  Current overview
2.  Recent predictions
3.  Risk distribution
4.  Disease-specific insights
5.  Prediction history
6.  Quick prediction actions

Example layout:

``` text
Welcome
   |
   +-- Total Predictions
   +-- Diabetes Risk
   +-- Heart Disease Risk
   +-- Recent Activity
   |
   +-- Risk Trend Chart
   +-- Recent Predictions
```

------------------------------------------------------------------------

## 6. Prediction UI

Prediction forms should be:

- Clearly grouped
- Easy to scan
- Properly labeled
- Keyboard accessible
- Mobile friendly
- Validated
- Explicit about units

Do not use unexplained medical abbreviations.

------------------------------------------------------------------------

## 7. Prediction Result

Result page should emphasize:

``` text
Disease
   |
Risk Probability
   |
Risk Level
   |
Important Factors
   |
Explanation
   |
Model Information
   |
Disclaimer
```

Use visual hierarchy rather than excessive decoration.

------------------------------------------------------------------------

## 8. Explainable AI UI

SHAP output should be presented in an understandable way.

Possible components:

- Feature contribution chart
- Positive/negative contribution indicators
- Ranked important features
- Explanation summary

Example:

``` text
Prediction: High Risk

Most influential factors

Glucose        █████████
BMI            ██████
Blood Pressure ████
```

The UI must clearly communicate that these are model-derived
explanations, not clinical conclusions.

------------------------------------------------------------------------

## 9. Charts

Charts should be:

- Thin
- Clean
- Responsive
- Minimal
- Properly labeled
- Accessible

Possible charts:

- Risk trend
- Prediction distribution
- Disease comparison
- Feature contribution
- Model performance

Avoid chart overload.

------------------------------------------------------------------------

## 10. Color System

Use a restrained healthcare palette.

Conceptually:

``` text
Background     → Very Light Blue / White
Surface        → White
Primary Text   → Dark / Black
Secondary Text → Muted Gray
Accent         → Pale Blue
Success        → Restrained Green
Warning        → Restrained Amber
Danger         → Restrained Red
```

Colors should communicate meaning and not be used as decoration alone.

------------------------------------------------------------------------

## 11. Typography

Typography should prioritize readability.

Use:

- Strong heading hierarchy
- Comfortable body size
- Adequate line height
- Clear labels
- Consistent font weights

------------------------------------------------------------------------

## 12. Cards

Cards should use:

- Rounded corners
- Subtle borders/shadows
- Consistent padding
- Clear hierarchy
- Limited information density

------------------------------------------------------------------------

## 13. Forms

Form requirements:

- Visible labels
- Helpful placeholders only where useful
- Clear validation
- Error messages near fields
- Accessible focus states
- Submit/loading states
- Disabled states where appropriate

------------------------------------------------------------------------

## 14. Responsive Design

The application must support:

- Desktop
- Laptop
- Tablet
- Mobile

Dashboard cards should collapse naturally.

Tables should support horizontal scrolling or responsive alternatives.

Charts must remain readable on small screens.

------------------------------------------------------------------------

## 15. Accessibility

Required:

- Semantic HTML
- Keyboard navigation
- Visible focus
- Accessible labels
- Appropriate ARIA attributes
- Sufficient contrast
- Reduced-motion support

Respect:

``` css
@media (prefers-reduced-motion: reduce)
```

------------------------------------------------------------------------

## 16. Motion

Motion should be subtle.

Use animation for:

- Page transitions
- Card appearance
- Chart loading
- Button feedback
- Navigation transitions

Avoid:

- Excessive bouncing
- Constant movement
- Distracting parallax
- Long loading animations

------------------------------------------------------------------------

## 17. Loading States

Every async screen should have an intentional loading state.

Examples:

- Skeleton cards
- Skeleton charts
- Button spinner
- Prediction processing state

Never leave the user with an unexplained blank page.

------------------------------------------------------------------------

## 18. Error States

Errors should be:

- Human-readable
- Actionable
- Non-technical where possible
- Consistent

Do not expose:

- Stack traces
- Database errors
- Internal service secrets
- Raw server exceptions

------------------------------------------------------------------------

## 19. Empty States

Examples:

``` text
No predictions yet.

Run your first health risk prediction to see
your results and history here.
```

Empty states should guide the user toward the next action.

------------------------------------------------------------------------

## 20. Trust & Medical Safety

The interface must clearly communicate:

- Risk estimate, not diagnosis
- Experimental/research nature
- Professional medical consultation for health decisions
- Model limitations where appropriate

Do not present a prediction as a confirmed disease state.

------------------------------------------------------------------------

## 21. Admin UI

Admin dashboard should follow the same design language.

Potential sections:

- Overview
- Users
- Predictions
- Models
- Model performance
- Audit activity

Admin-only controls must be visually distinct without creating a
completely different design system.

------------------------------------------------------------------------

## 22. Component Organization

Frontend components should be reusable.

``` text
components/
├── ui/
├── layout/
├── dashboard/
├── prediction/
├── charts/
└── common/
```

Feature-specific logic belongs in:

``` text
features/
├── auth/
├── diabetes/
├── heart-disease/
├── dashboard/
└── profile/
```

------------------------------------------------------------------------

## 23. Design Consistency Rule

Public, user, doctor, and admin interfaces should share:

- Typography
- Spacing
- Cards
- Buttons
- Form controls
- Icons
- Color language
- Responsive behavior

Only information architecture and permissions should differ
significantly.

------------------------------------------------------------------------

## 24. Frontend Technology

Current frontend direction:

- Next.js App Router
- React
- JavaScript / JSX
- Tailwind CSS

Important:

``` text
layout.js  → root app layout
page.js    → root page
*.jsx      → route/component pages where appropriate
*.js       → utilities, services, configuration, hooks where appropriate
```

------------------------------------------------------------------------

## 25. Design Success Criteria

The design is successful when:

- The application looks like a premium healthcare SaaS product.
- Users can understand prediction results quickly.
- Forms are easy to complete.
- Dashboards are not visually overloaded.
- SHAP explanations are understandable.
- The design remains consistent across all roles.
- The interface is responsive and accessible.
