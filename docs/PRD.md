# MediPredict — Product Requirements Document

## 1. Product Overview

**MediPredict** is an Explainable AI-based healthcare risk prediction
web application.

The system accepts selected health-related inputs and estimates the
probability/risk level of:

1.  Diabetes
2.  Heart Disease

The platform is designed as an academic and research prototype.

It does not diagnose disease.

------------------------------------------------------------------------

## 2. Problem Statement

Many Machine Learning prediction systems provide only a final prediction
without explaining the factors behind the result.

MediPredict aims to combine:

- Risk prediction
- Probability
- Risk classification
- Prediction history
- Health analytics
- Explainable AI
- Modern web application architecture

The primary research/engineering challenge is integrating a Machine
Learning pipeline into a secure, maintainable web application while
keeping ML and application responsibilities separated.

------------------------------------------------------------------------

## 3. Goals

### Primary Goals

- Build a complete healthcare risk prediction web application.
- Train and evaluate disease-specific ML models.
- Expose ML inference through FastAPI.
- Build application APIs using Express.js.
- Store application data in MongoDB using Mongoose.
- Implement authentication and RBAC with Better Auth and JWT Plugin.
- Provide SHAP-based explanations.
- Store prediction history.
- Provide dashboards and analytics.
- Maintain clear separation between frontend, application backend, and
  ML service.

### Academic Goals

- Learn healthcare dataset preprocessing.
- Perform EDA.
- Perform feature engineering.
- Train supervised ML models.
- Compare multiple algorithms.
- Evaluate model performance.
- Learn REST API development.
- Learn service-to-service integration.
- Implement Explainable AI.

------------------------------------------------------------------------

## 4. Target Users

### User

Can:

- Register
- Login
- Manage profile
- Provide health information
- Request a prediction
- View risk probability
- View risk level
- View explanation
- View prediction history
- View dashboard analytics

### Doctor / Health Professional

Optional future role.

Can potentially:

- Review authorized prediction history
- Review prediction reports

### Admin

Can:

- Manage users
- View prediction statistics
- View model metadata
- View model performance
- Monitor system activity

------------------------------------------------------------------------

## 5. Functional Requirements

### Authentication

- Registration
- Login
- Logout
- Session management
- JWT-based API authentication where required
- Role-based authorization
- Protected routes

Roles:

``` text
USER
DOCTOR
ADMIN
```

### User Profile

Profile may contain:

- Name
- Age
- Gender
- Basic health information
- Optional profile metadata

Only required information should be collected.

### Diabetes Prediction

The user submits supported diabetes features.

The system:

1.  Validates input.
2.  Sends prediction request through Express.
3.  Express calls FastAPI.
4.  FastAPI loads the appropriate model.
5.  Model returns prediction/probability.
6.  SHAP explanation may be generated.
7.  Express stores the result.
8.  Frontend displays the result.

### Heart Disease Prediction

Same general workflow applies using the heart disease model and feature
schema.

### Prediction History

The system stores:

- Prediction ID
- User ID
- Disease type
- Input summary
- Prediction result
- Probability
- Risk level
- Model version
- Explanation summary
- Timestamp

Sensitive raw health inputs should be handled carefully.

### Dashboard

Dashboard may show:

- Total predictions
- Recent predictions
- Disease-specific counts
- Risk distribution
- Prediction trends
- Recent activity

### Admin

Admin features:

- User list
- User status
- Prediction statistics
- Model information
- Model performance
- Audit information

------------------------------------------------------------------------

## 6. Non-Functional Requirements

### Security

- Secure authentication
- RBAC
- Input validation
- API authorization
- Secure secrets
- Secure MongoDB connection
- Rate limiting
- CORS configuration
- JWT verification

### Performance

- Fast API responses
- Efficient MongoDB queries
- Appropriate indexes
- Efficient ML inference
- Avoid unnecessary frontend requests

### Reliability

- Standardized API responses
- Error handling
- Health checks
- Service availability monitoring

### Maintainability

- Modular Express architecture
- Separate ML service
- Reusable frontend components
- Clear API contracts
- Documentation
- Consistent naming

------------------------------------------------------------------------

## 7. Explainable AI Requirements

MediPredict should not only return a prediction.

For supported prediction requests, SHAP should help explain:

- Which features influenced the result
- Direction of influence where supported
- Relative feature importance

Example conceptual output:

``` text
Prediction:
High Risk

Probability:
73.4%

Important contributing factors:
1. Glucose
2. BMI
3. Blood Pressure
```

The explanation must be presented as model interpretation, not medical
advice.

------------------------------------------------------------------------

## 8. ML Requirements

### Data Pipeline

``` text
Raw Dataset
   |
   v
Data Cleaning
   |
   v
EDA
   |
   v
Feature Engineering
   |
   v
Train / Validation / Test
   |
   v
Model Training
   |
   v
Evaluation
   |
   v
Model Selection
   |
   v
Model Export
   |
   v
FastAPI Inference
```

### Candidate Models

Depending on dataset suitability:

- Logistic Regression
- Decision Tree
- Random Forest
- XGBoost
- Other appropriate baseline models

Model selection must be evidence-based using evaluation metrics.

------------------------------------------------------------------------

## 9. API Requirements

### Express

Base:

``` text
/api/v1
```

Domains:

``` text
/auth
/users
/profile
/predictions
/dashboard
/models
/admin
```

### FastAPI

Base:

``` text
/
```

Endpoints:

``` text
GET  /health
GET  /models
POST /predict/diabetes
POST /predict/heart-disease
POST /explain/diabetes
POST /explain/heart-disease
```

------------------------------------------------------------------------

## 10. Database Requirements

Database:

**MongoDB**

ODM:

**Mongoose**

Core collections:

- users
- sessions
- accounts
- verifications
- healthProfiles
- predictions
- modelVersions
- auditLogs

Collection names may be adjusted during implementation.

------------------------------------------------------------------------

## 11. Architecture Boundary

``` text
Next.js
   |
   v
Express.js
   |
   +---- MongoDB via Mongoose
   |
   +---- FastAPI
             |
             +---- ML Models
             |
             +---- SHAP
```

FastAPI must not become a second application backend.

------------------------------------------------------------------------

## 12. Out of Scope

The following are not part of the initial scope:

- Medical diagnosis
- Treatment recommendation
- Prescription
- Emergency medical decision-making
- Real clinical deployment
- Hospital EHR integration
- Real-time clinical monitoring
- Autonomous medical decision-making

------------------------------------------------------------------------

## 13. Success Criteria

The project is considered successful when:

- Users can authenticate.
- Users can submit valid prediction inputs.
- Express can communicate with FastAPI.
- FastAPI can return valid ML predictions.
- Predictions are stored in MongoDB.
- Prediction history works.
- SHAP explanations are available for supported models.
- Dashboard displays stored application data.
- RBAC protects admin functionality.
- Core API and ML flows are tested.
- Documentation matches the implemented architecture.

------------------------------------------------------------------------

## 14. Future Scope

Potential future work:

- Additional diseases
- Doctor dashboard
- Model monitoring
- Model drift detection
- More advanced explainability
- PDF reports
- Cloud deployment
- Advanced analytics
- Research dataset comparison
- Clinical validation research
