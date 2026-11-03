# MediPredict — Product Requirements Document (PRD)

**Project Name:** MediPredict  
**Product Type:** Explainable AI-Based Healthcare Risk Prediction Platform  
**Document Version:** 1.0  
**Status:** Development  
**Primary Prediction Models:** Diabetes & Heart Disease

---

## 1. Project Overview

MediPredict is an AI-powered healthcare risk prediction platform designed to help users understand their potential risk of developing diabetes and heart disease through machine learning.

The platform collects relevant health information from users, processes the information using trained machine learning models, and generates risk predictions with explainable AI (XAI).

MediPredict also provides personalized health dashboards, prediction history, and administrative analytics.

**Important:** MediPredict is an educational and health-risk assessment tool. It does not provide medical diagnoses or replace professional medical advice.

## 2. Problem Statement

Many people are unaware of their potential risk factors for common chronic diseases.

Traditional healthcare assessments may require appointments, laboratory tests, and professional consultations.

MediPredict aims to provide an accessible platform where users can:

- Submit relevant health information.
- Estimate diabetes risk.
- Estimate heart disease risk.
- Understand the factors influencing their predictions.
- Track previous prediction results.
- Learn about potential health risk factors.

## 3. Project Objectives

1. Develop reliable ML models for diabetes and heart disease risk prediction.
2. Integrate machine learning with a modern web application.
3. Implement explainable AI using SHAP.
4. Provide secure user authentication and authorization.
5. Store user profiles and prediction history.
6. Develop an administrative dashboard.
7. Build a scalable and maintainable architecture.

## 4. Target Users

### 4.1 User

The primary user of MediPredict.

Responsibilities:
- Register and log in.
- Manage personal profiles.
- Submit health information.
- Request diabetes risk predictions.
- Request heart disease risk predictions.
- View prediction results.
- Understand SHAP-based explanations.
- Access prediction history.
- View personal dashboard.

### 4.2 Admin

Responsible for platform management.

Responsibilities:
- Access administrative dashboard.
- View registered users.
- Monitor prediction activities.
- View platform analytics.
- Monitor system usage.
- Manage user accounts and platform operations.

### 4.3 Doctor (Optional / Future)

A potential future role.

Responsibilities:
- Review user-authorized health information.
- View prediction reports.
- Provide professional feedback.

Doctor functionality is not required for the initial MVP.

## 5. Core Features

### 5.1 Authentication & Authorization

- User registration.
- User login and logout.
- Session management.
- Secure password handling.
- Role-based access control.
- Protected application routes.
- JWT-based communication with external services.

**Authentication Technology:**
- Better Auth
- Better Auth JWT Plugin
- JWKS
- Prisma Adapter

### 5.2 User Dashboard

The dashboard should provide:

- Welcome section.
- Total predictions.
- Latest prediction.
- Diabetes risk overview.
- Heart disease risk overview.
- Recent prediction history.
- Health-related information.

### 5.3 Diabetes Risk Prediction

Users submit the required health information.

Initial dataset:
- Pima Indians Diabetes Dataset.

Potential input features:
- Pregnancies
- Glucose
- Blood Pressure
- Skin Thickness
- Insulin
- BMI
- Diabetes Pedigree Function
- Age

Expected output:
- Predicted risk category.
- Model probability or score, if properly calibrated and validated.
- SHAP-based feature explanations.
- Prediction timestamp.

### 5.4 Heart Disease Risk Prediction

Initial dataset:
- UCI Heart Disease Dataset.

Potential input features:
- Age
- Sex
- Chest Pain Type
- Resting Blood Pressure
- Cholesterol
- Fasting Blood Sugar
- Resting ECG
- Maximum Heart Rate
- Exercise-Induced Angina
- ST Depression
- ST Slope

Expected output:
- Predicted risk category.
- Model probability or score, if properly calibrated and validated.
- SHAP-based feature explanations.
- Prediction timestamp.

The exact feature definitions, units, encoding, and required fields must follow the selected dataset and validated model pipeline.

### 5.5 Explainable AI (XAI)

MediPredict will use SHAP to explain model predictions.

Features:
- Identify influential input features.
- Show positive and negative feature contributions.
- Display understandable visual explanations.
- Provide a summary of important risk factors.

The explanation must reflect the actual model output, not fabricated medical reasoning.

### 5.6 Prediction History

Users can:
- View previous predictions.
- View prediction dates.
- Open individual prediction reports.
- Compare previous results.
- Review associated explanations.

### 5.7 Admin Dashboard

Admin dashboard includes:
- Total registered users.
- Total diabetes predictions.
- Total heart disease predictions.
- Recent platform activity.
- Prediction statistics.
- User management.

Only authorized administrators can access administrative functionality.

## 6. Technology Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Main Backend | Node.js + Express.js |
| ML Backend | Python + FastAPI |
| Database | PostgreSQL (Supabase Hosted) |
| ORM | Prisma |
| Authentication | Better Auth |
| API Authentication | JWT Plugin + JWKS |
| Password Hashing | Better Auth built-in scrypt |
| ML Libraries | Scikit-learn, XGBoost |
| Explainability | SHAP |
| API Communication | REST API |
| Version Control | Git + GitHub |

## 7. System Architecture Overview

MediPredict follows a service-oriented architecture.

### Frontend
Next.js handles:
- User interfaces.
- Dashboard rendering.
- Forms.
- Authentication interfaces.
- Prediction result visualization.

### Express Backend
Node.js + Express.js is the primary application backend.

Responsibilities:
- REST API development.
- Authentication integration.
- Authorization.
- User management.
- Request validation.
- Database operations.
- Prediction request orchestration.
- Prediction history.
- Admin operations.

### FastAPI ML Service
Python + FastAPI handles:
- Dataset preprocessing.
- ML model development.
- Model training and evaluation.
- Prediction inference.
- SHAP explanations.
- Model version management.

FastAPI is exclusively responsible for ML-related services, not the main application backend.

### Database
Supabase-hosted PostgreSQL stores:
- User-related application data.
- Profiles.
- Roles.
- Prediction records.
- Prediction results.
- Relevant model metadata.

Prisma ORM manages database access.

## 8. Main User Workflow

1. User opens MediPredict.
2. User registers or logs in.
3. User accesses the dashboard.
4. User selects Diabetes or Heart Disease prediction.
5. User completes the required health information form.
6. Next.js sends the request to Express.
7. Express validates the request.
8. Express communicates with FastAPI.
9. FastAPI processes the input.
10. ML model generates the prediction.
11. SHAP generates the explanation.
12. FastAPI returns the result.
13. Express stores the prediction in PostgreSQL.
14. Frontend displays the result and explanation.

## 9. Non-Functional Requirements

### Security
- Secure authentication.
- Role-based authorization.
- Input validation.
- Protected APIs.
- Environment variable management.
- Secure communication between services.
- No sensitive information in application logs.

### Performance
- Efficient database queries.
- Optimized ML inference.
- Responsive user interface.
- Appropriate loading and error states.

### Scalability
- Independent frontend, backend, and ML services.
- Modular code structure.
- Reusable API services.
- Maintainable database schema.

### Usability
- Clean healthcare-focused interface.
- Responsive design.
- Accessible forms.
- Understandable prediction reports.
- Clear medical disclaimers.

## 10. UI/UX Requirements

The platform should follow a premium healthcare SaaS design language.

Design principles:
- Clean white and light-blue backgrounds.
- Spacious layouts.
- Rounded cards.
- Subtle shadows.
- Minimal line icons.
- Professional typography.
- Consistent navigation.
- Responsive desktop and mobile layouts.
- Clear charts and data visualization.

All public, user, and admin pages must follow a consistent visual system.

## 11. MVP Scope

The initial release must include:

- User authentication.
- User dashboard.
- Diabetes risk prediction.
- Heart disease risk prediction.
- SHAP explanations.
- Prediction history.
- Admin dashboard.
- Secure API integration.
- PostgreSQL database integration.

Doctor functionality and advanced healthcare integrations are outside the initial MVP.

## 12. Data & ML Validation Requirements

Before integrating ML predictions into the application:

- Verify dataset sources and licensing.
- Inspect dataset quality.
- Handle missing and invalid values.
- Perform exploratory data analysis.
- Prevent data leakage.
- Split data appropriately.
- Evaluate models using suitable metrics.
- Validate generalization.
- Assess calibration if probabilities are displayed.
- Test SHAP explanations.

Do not present unvalidated model outputs as reliable medical risk estimates.

## 13. Safety & Medical Disclaimer

MediPredict is not a medical diagnostic system.

All predictions must be presented as estimated risk assessments.

The platform must:
- Avoid definitive diagnostic statements.
- Clearly communicate model limitations.
- Encourage professional consultation.
- Avoid suggesting treatment based solely on predictions.
- Protect user health information.

## 14. MVP Success Criteria

The MVP will be considered successful when:

- Users can securely register and log in.
- Both prediction workflows operate correctly.
- Validated ML models return reproducible outputs.
- SHAP explanations correspond to actual predictions.
- Results are stored correctly.
- Users can access prediction history.
- Admins can access authorized analytics.
- Frontend, backend, database, and ML service work together.
- Core workflows pass integration testing.

---

**End of PRD.md**