/**
 * MediPredict Centralized Design Tokens
 * Follows: Apple-like minimalism × Premium Healthcare × Modern AI Analytics
 * Reference: frontend_docs/FRONTEND_DESIGN.md
 */

export const TOKENS = {
  colors: {
    primary: {
      DEFAULT: "var(--primary)",
      foreground: "var(--primary-foreground)",
      hover: "var(--primary-hover)",
    },
    navy: {
      DEFAULT: "var(--brand-navy)",
      foreground: "var(--brand-navy-foreground)",
    },
    secondary: {
      DEFAULT: "var(--secondary)",
      foreground: "var(--secondary-foreground)",
    },
    background: {
      DEFAULT: "var(--background)",
      subtle: "var(--surface-subtle)",
      elevated: "var(--surface-elevated)",
    },
    status: {
      lowRisk: {
        key: "low",
        label: "Low Risk",
        color: "var(--success)",
        subtle: "var(--success-subtle)",
        foreground: "var(--success-foreground)",
      },
      moderateRisk: {
        key: "moderate",
        label: "Moderate Risk",
        color: "var(--warning)",
        subtle: "var(--warning-subtle)",
        foreground: "var(--warning-foreground)",
      },
      highRisk: {
        key: "high",
        label: "High Risk",
        color: "var(--destructive)",
        subtle: "var(--destructive-subtle)",
        foreground: "var(--destructive-foreground)",
      },
      info: {
        key: "info",
        label: "Clinical Advisory",
        color: "var(--info)",
        subtle: "var(--info-subtle)",
        foreground: "var(--info-foreground)",
      },
    },
  },

  typography: {
    fontSans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontMono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    sizes: {
      display: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
      h1: "text-3xl sm:text-4xl font-bold tracking-tight",
      h2: "text-2xl sm:text-3xl font-semibold tracking-tight",
      h3: "text-xl sm:text-2xl font-semibold",
      h4: "text-lg font-medium",
      body: "text-base font-normal leading-relaxed",
      bodySmall: "text-sm font-normal leading-normal",
      caption: "text-xs font-medium tracking-wide",
    },
  },

  radius: {
    sm: "var(--radius-sm)", // ~7.2px
    md: "var(--radius-md)", // ~9.6px
    base: "var(--radius)",  // 12px
    cardSm: "1rem",         // 16px (small cards)
    cardMd: "1.25rem",      // 20px (medium cards)
    cardLg: "1.5rem",       // 24px (large hero cards)
    pill: "9999px",
  },

  shadows: {
    card: "var(--shadow-card)",
    cardHover: "var(--shadow-card-hover)",
    elevated: "var(--shadow-elevated)",
    glowBlue: "var(--shadow-glow-blue)",
  },

  animation: {
    durations: {
      fast: 0.15,
      normal: 0.25,
      slow: 0.4,
      smooth: 0.6,
    },
    easings: {
      apple: [0.16, 1, 0.3, 1],
      standard: [0.4, 0, 0.2, 1],
      smooth: [0.25, 0.1, 0.25, 1],
    },
  },

  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  },
};

export default TOKENS;

