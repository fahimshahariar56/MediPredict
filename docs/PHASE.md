# MediPredict — Development Phases

## Development Rules

1.  Work on one phase at a time.
2.  Keep the architecture documented and consistent.
3.  Express.js remains the main application backend.
4.  FastAPI remains the dedicated ML service.
5.  MongoDB is the application database.
6.  Mongoose is the MongoDB ODM.
7.  Better Auth + JWT Plugin is the authentication direction.
8.  Do not move application user/database responsibilities into FastAPI.
9.  Do not implement medical diagnosis or treatment functionality.
10. Do not expose secrets in Git.

------------------------------------------------------------------------

# Phase 01 — Project Foundation

### Goal

Establish the repository and service boundaries.

### Tasks

- Create repository structure.
- Initialize frontend.
- Initialize backend.
- Initialize ML service.
- Configure Git.
- Configure `.gitignore`.
- Create environment templates.
- Create documentation.

### Status

**In Progress**

------------------------------------------------------------------------

# Phase 02 — Next.js Frontend Foundation

### Goal

Build the frontend foundation with Next.js App Router and
JavaScript/JSX.

### Tasks

- Configure Next.js.
- Configure Tailwind CSS.
- Create `layout.js`.
- Create `page.js`.
- Create loading/error/not-found states.
- Create shared UI components.
- Create responsive layout.
- Create public pages.
- Create authentication pages.
- Create dashboard shell.

### Required Structure

``` text
src/app/
├── layout.js
├── page.js
├── loading.js
├── error.js
├── not-found.js
├── login/page.jsx
├── register/page.jsx
├── dashboard/page.jsx
├── predictions/page.jsx
├── diabetes/page.jsx
├── heart-disease/page.jsx
├── profile/page.jsx
└── admin/
```

### Status

**In Progress**

------------------------------------------------------------------------

# Phase 03 — Express Backend Foundation

### Goal

Build the main application API.

### Tasks

- Initialize Node.js.
- Configure Express.js.
- Configure routes.
- Configure controllers.
- Configure services.
- Configure middleware.
- Configure validation.
- Configure error handling.
- Configure CORS.
- Create `/api/v1`.
- Create health endpoint.

### Status

**In Progress**

------------------------------------------------------------------------

# Phase 04 — MongoDB + Mongoose

### Goal

Connect the application backend to MongoDB.

### Tasks

- Configure `MONGODB_URI`.
- Create Mongoose connection.
- Create User model.
- Create Profile model.
- Create Prediction model.
- Create ModelVersion model.
- Create AuditLog model.
- Add validation.
- Add indexes.
- Test CRUD operations.

### Status

**Planned**

------------------------------------------------------------------------

# Phase 05 — Better Auth + JWT Plugin

### Goal

Implement authentication and authorization.

### Tasks

- Configure Better Auth.
- Configure MongoDB integration according to the selected Better Auth
  adapter/storage approach.
- Configure authentication routes.
- Implement session handling.
- Configure JWT Plugin.
- Implement API token verification.
- Implement RBAC.
- Protect user/admin endpoints.

### Roles

``` text
USER
DOCTOR
ADMIN
```

### Status

**Planned**

------------------------------------------------------------------------

# Phase 06 — Application REST API

### Goal

Build the complete Express API.

### Core APIs

``` text
/api/v1/auth
/api/v1/profile
/api/v1/predictions
/api/v1/dashboard
/api/v1/models
/api/v1/admin
```

### Tasks

- Auth API
- Profile API
- Prediction history API
- Dashboard API
- Model metadata API
- Admin API
- Validation
- Error responses
- Authorization

### Status

**Planned**

------------------------------------------------------------------------

# Phase 07 — Dataset Preparation

### Goal

Prepare the ML datasets.

### Tasks

- Collect approved datasets.
- Verify dataset sources.
- Clean missing values.
- Detect invalid values.
- Perform EDA.
- Analyze distributions.
- Define target variables.
- Select features.
- Split data.
- Build preprocessing pipeline.

### Initial datasets

- Pima Indians Diabetes Database
- UCI Heart Disease Dataset

Dataset source and licensing details must be verified before final
publication.

### Status

**Planned**

------------------------------------------------------------------------

# Phase 08 — Diabetes ML Model

### Goal

Train and evaluate diabetes prediction models.

### Tasks

- Preprocess data.
- Train baseline models.
- Train advanced models.
- Compare metrics.
- Select model.
- Tune model.
- Evaluate on holdout data.
- Save model.
- Save preprocessing artifacts.
- Document model version.

### Metrics

- Accuracy
- Precision
- Recall
- F1-score
- ROC-AUC
- Confusion matrix

### Status

**Planned**

------------------------------------------------------------------------

# Phase 09 — Heart Disease ML Model

### Goal

Train and evaluate heart disease prediction models.

### Tasks

- Preprocess data.
- Train candidate models.
- Compare metrics.
- Tune selected model.
- Evaluate.
- Export model.
- Export preprocessing artifacts.
- Create model metadata.

### Status

**Planned**

------------------------------------------------------------------------

# Phase 10 — FastAPI ML Service

### Goal

Expose ML inference through a dedicated Python service.

### Endpoints

``` text
GET  /health
GET  /models
POST /predict/diabetes
POST /predict/heart-disease
```

### Tasks

- FastAPI setup
- Pydantic schemas
- Model loading
- Input validation
- Prediction service
- Error handling
- Health checks

### Status

**Planned**

------------------------------------------------------------------------

# Phase 11 — SHAP Explainability

### Goal

Add model explanations.

### Endpoints

``` text
POST /explain/diabetes
POST /explain/heart-disease
```

### Tasks

- Integrate SHAP.
- Define explanation format.
- Generate feature contributions.
- Normalize output for frontend consumption.
- Test explanation stability.
- Clearly label explanations as model interpretation.

### Status

**Planned**

------------------------------------------------------------------------

# Phase 12 — Frontend Integration

### Goal

Connect Next.js with Express APIs.

### Tasks

- API client.
- Authentication flow.
- Profile flow.
- Prediction forms.
- Prediction result UI.
- SHAP visualization.
- History page.
- Dashboard analytics.
- Error/loading states.

### Status

**Planned**

------------------------------------------------------------------------

# Phase 13 — Testing & Validation

### Goal

Validate the entire system.

### Tests

``` text
Frontend
   |
Express API
   |
MongoDB
   |
FastAPI
   |
ML Models
   |
SHAP
```

### Tasks

- Unit tests
- API tests
- Integration tests
- Validation tests
- Authentication tests
- Authorization tests
- ML evaluation
- End-to-end testing

### Status

**Planned**

------------------------------------------------------------------------

# Phase 14 — Deployment

### Goal

Prepare the system for deployment.

### Tasks

- Production environment variables.
- Production MongoDB.
- Deploy Next.js.
- Deploy Express.
- Deploy FastAPI.
- Configure HTTPS.
- Configure CORS.
- Configure secure secrets.
- Configure monitoring.
- Final documentation.

### Status

**Planned**

------------------------------------------------------------------------

# Final Completion Criteria

MediPredict is complete when:

- Frontend is functional.
- Express API is functional.
- MongoDB persistence works.
- Better Auth works.
- RBAC works.
- FastAPI inference works.
- Diabetes model works.
- Heart disease model works.
- SHAP explanations work.
- Prediction history works.
- Dashboard works.
- Admin features work.
- Core tests pass.
- Documentation is synchronized with implementation.
