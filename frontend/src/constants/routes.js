/**
 * MediPredict Application Route Constants
 * Reusable routing endpoints across public, auth, user, and admin areas.
 */

export const ROUTES = {
  // Public
  HOME: "/",
  ABOUT: "/about",
  HOW_IT_WORKS: "/how-it-works",
  AI_TECHNOLOGY: "/ai-technology",
  PRICING: "/pricing",
  FAQ: "/faq",
  CONTACT: "/contact",
  PRIVACY: "/privacy",
  TERMS: "/terms",

  // Authentication UI
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
    VERIFY_EMAIL: "/verify-email",
  },

  // User Dashboard & Prediction
  DASHBOARD: {
    ROOT: "/dashboard",
    ANALYTICS: "/dashboard/analytics",
    PREDICTION_DIABETES: "/dashboard/predict/diabetes",
    PREDICTION_HEART: "/dashboard/predict/heart",
    HISTORY: "/dashboard/history",
    RECORDS: "/dashboard/records",
    AI_ASSISTANT: "/dashboard/assistant",
    PROFILE: "/dashboard/profile",
    SETTINGS: "/dashboard/settings",
  },

  // Admin UI
  ADMIN: {
    ROOT: "/admin",
    USERS: "/admin/users",
    ANALYTICS: "/admin/analytics",
    SYSTEM: "/admin/system",
  },
};

export default ROUTES;

