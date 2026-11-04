# MediPredict — Design System & UI/UX Guidelines

## 1. Design Overview

MediPredict is an Explainable AI-powered healthcare risk prediction platform designed to help users understand potential diabetes and heart disease risks.

The interface should communicate:
- Trust and credibility
- Simplicity and clarity
- Professional healthcare experience
- Data-driven insights
- Accessibility and usability

**Design Direction:** Clean, premium healthcare SaaS dashboard.

## 2. Design Principles

1. **Clarity First:** Present complex health information in simple language.
2. **Trustworthy:** Use a professional healthcare visual identity.
3. **Minimalism:** Avoid unnecessary visual elements.
4. **Consistency:** Maintain consistent components across all pages.
5. **Accessibility:** Ensure readable text, sufficient contrast, and keyboard accessibility.
6. **Responsive:** Support mobile, tablet, laptop, and desktop.

## 3. Color Palette

### Primary Colors

| Token | Color | Usage |
|---|---|---|
| Primary | `#2563EB` | Primary actions and links |
| Primary Dark | `#1D4ED8` | Hover and active states |
| Primary Light | `#DBEAFE` | Soft highlights |
| Background | `#F8FAFC` | Main application background |
| Surface | `#FFFFFF` | Cards and panels |
| Text Primary | `#0F172A` | Headings and primary text |
| Text Secondary | `#64748B` | Supporting text |
| Border | `#E2E8F0` | Dividers and card borders |

### Risk Status Colors

| Status | Color | Usage |
|---|---|---|
| Low | `#16A34A` | Low estimated risk |
| Moderate | `#D97706` | Moderate estimated risk |
| High | `#DC2626` | High estimated risk |
| Neutral | `#64748B` | Unknown or unavailable |

Risk colors must always be accompanied by text labels. Never communicate medical risk through color alone.

## 4. Typography

**Primary Font:** Inter

| Element | Recommended Size | Weight |
|---|---:|---|
| Page Heading | 28–36px | 700 |
| Section Heading | 20–24px | 600 |
| Card Heading | 16–18px | 600 |
| Body Text | 14–16px | 400 |
| Supporting Text | 12–14px | 400 |
| Button Text | 14–16px | 600 |

Use consistent line heights and avoid excessively small text.

## 5. Layout & Spacing

- Use a centered, responsive content container.
- Maintain consistent horizontal and vertical spacing.
- Use a 4px-based spacing scale.
- Prefer spacious layouts over crowded dashboards.
- Use CSS Grid and Flexbox for responsive layouts.

### Border Radius

| Component | Radius |
|---|---|
| Small Elements | 8px |
| Input Fields | 10px |
| Cards | 16px |
| Modals | 20px |
| Buttons | 10–12px |

### Shadows

Use subtle shadows rather than heavy elevation.

- Cards: soft, low-opacity shadow.
- Dropdowns: slightly stronger shadow.
- Modals: clear elevation from the background.

## 6. Core UI Components

### Buttons
- Primary: solid primary blue.
- Secondary: light background with border.
- Destructive: red for dangerous actions.
- Disabled: muted appearance.
- Include hover, focus, active, and disabled states.

### Cards
- White background.
- Subtle border.
- Rounded corners.
- Consistent padding.
- Clear title and content hierarchy.

### Forms
- Always show labels.
- Provide appropriate placeholders.
- Validate user input.
- Display helpful error messages.
- Explain units and accepted ranges where relevant.
- Never rely only on placeholder text.

### Navigation
- Consistent sidebar or top navigation.
- Highlight the active page.
- Keep navigation labels understandable.
- Provide mobile-friendly navigation.

## 7. Dashboard Design

The user dashboard should include:

1. Welcome section
2. Health overview
3. Diabetes risk prediction shortcut
4. Heart disease risk prediction shortcut
5. Recent prediction history
6. Risk summary
7. Educational health information

### Dashboard Cards

Each card should have:
- Clear title
- Relevant icon
- Main value or summary
- Supporting description
- Appropriate action

Do not display fabricated health statistics or prediction history.

## 8. Prediction Result Design

Prediction results should be understandable and transparent.

Include:

- Prediction type
- Estimated risk category
- Probability or score, only when supported by a validated model
- Important contributing features
- SHAP-based explanation
- Model information
- Prediction date
- Medical disclaimer

### Explainability

Use:
- Horizontal feature contribution charts
- Positive and negative contribution indicators
- Simple descriptions of important features
- Clear distinction between correlation, model contribution, and causation

Never imply that SHAP feature contributions prove medical causation.

## 9. Charts & Data Visualization

Use charts only when they improve understanding.

Recommended:
- Bar charts for feature contributions
- Line charts for historical trends
- Donut charts for appropriate summary metrics
- Horizontal bars for risk comparisons

Chart requirements:
- Clear labels
- Readable legends
- Consistent typography
- Accessible colors
- Responsive sizing
- Tooltips where useful

Do not show historical trends when sufficient historical data does not exist.

## 10. Responsive Design

### Desktop
- Full dashboard layout
- Sidebar navigation
- Multi-column cards

### Tablet
- Collapsible sidebar
- Two-column layouts where appropriate

### Mobile
- Single-column layouts
- Mobile navigation
- Full-width forms and cards
- Touch-friendly controls
- Avoid horizontal scrolling

## 11. Accessibility

Follow WCAG 2.2 AA principles where practical.

- Maintain sufficient color contrast.
- Use semantic HTML.
- Add accessible labels to form controls.
- Support keyboard navigation.
- Provide visible focus indicators.
- Use descriptive error messages.
- Provide text alternatives for meaningful icons and charts.

## 12. Motion & Interaction

Animations should be subtle and purposeful.

Recommended:
- Smooth hover transitions
- Small card entrance animations
- Loading skeletons
- Progress indicators
- Modal transitions

Avoid excessive animation, distracting effects, and unnecessary page transitions.

## 13. Loading, Empty & Error States

Every data-driven page should handle:

- Loading state
- Empty state
- Error state
- Success state
- Unauthorized state

Use skeleton loaders where appropriate. Never display fake data to hide missing API responses.

## 14. Dark Mode

Dark mode may be introduced as a future enhancement.

If implemented:
- Use dark neutral backgrounds.
- Maintain readable text contrast.
- Preserve semantic risk colors.
- Ensure charts remain accessible.
- Keep component appearance consistent.

## 15. Frontend Implementation Guidelines

Frontend stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Reusable React components

Recommended component structure:

```text
frontend/
└── src/
    ├── app/
    ├── components/
    │   ├── ui/
    │   ├── layout/
    │   ├── dashboard/
    │   ├── forms/
    │   └── charts/
    ├── features/
    │   ├── auth/
    │   ├── diabetes/
    │   ├── heart-disease/
    │   └── dashboard/
    ├── hooks/
    ├── lib/
    ├── types/
    └── styles/
```

### Coding Rules

- Use reusable components.
- Use TypeScript types for component props.
- Avoid duplicated styling.
- Keep business logic outside presentation components.
- Use consistent naming conventions.
- Maintain responsive behavior.
- Avoid unnecessary dependencies.
- Follow the project's established architecture.

## 16. Design Consistency Rules

1. All pages must follow the same visual language.
2. Use the same spacing, typography, and color tokens.
3. Do not introduce random colors.
4. Keep cards, buttons, and forms visually consistent.
5. Maintain consistent navigation across authenticated pages.
6. Use realistic, meaningful content.
7. Never sacrifice usability for decoration.

## 17. Medical Safety & Trust

MediPredict is a risk-estimation and educational platform, not a diagnostic system.

- Do not describe predictions as confirmed diagnoses.
- Do not recommend medication or treatment based solely on model output.
- Clearly communicate uncertainty and limitations.
- Encourage users to consult qualified healthcare professionals.
- Do not use alarming language to describe risk results.

---

**Design Goal:** Build a clean, trustworthy, premium healthcare SaaS experience where users can easily understand their health-risk estimates and the factors influencing the model's predictions.