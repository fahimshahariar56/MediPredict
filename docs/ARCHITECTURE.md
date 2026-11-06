# MediPredict — System Architecture

## 1. Architecture Overview

MediPredict uses a layered, service-separated architecture.

``` text
┌──────────────────────────────┐
│            User              │
└──────────────┬───────────────┘
               │
               v
┌──────────────────────────────┐
│ Next.js Frontend             │
│ App Router + React + JSX     │
└──────────────┬───────────────┘
               │ HTTPS / REST
               v
┌──────────────────────────────┐
│ Node.js + Express.js         │
│ Main Application Backend     │
├──────────────────────────────┤
│ Auth / RBAC                  │
│ Validation                   │
│ Business Logic               │
│ API Orchestration            │
└───────┬──────────────┬───────┘
        │              │
        │              │ Internal REST
        │              v
        │      ┌──────────────────────┐
        │      │ Python + FastAPI     │
        │      │ ML Service           │
        │      ├──────────────────────┤
        │      │ Prediction           │
        │      │ Model Loading        │
        │      │ SHAP Explainability  │
        │      └──────────┬───────────┘
        │                 │
        │                 v
        │      ┌──────────────────────┐
        │      │ ML Models            │
        │      │ Scikit-learn/XGBoost │
        │      └──────────────────────┘
        │
        v
┌──────────────────────────────┐
│ Mongoose ODM                 │
└──────────────┬───────────────┘
               │
               v
┌──────────────────────────────┐
│ MongoDB                      │
└──────────────────────────────┘
```

------------------------------------------------------------------------

## 2. Architectural Principles

### Separation of Concerns

Each service has a specific responsibility.

### Single Application Backend

Express.js is the main backend.

### Dedicated ML Service

FastAPI is responsible only for ML-related operations.

### Database Ownership

The application backend owns application persistence.

### API-First Communication

Frontend and services communicate through documented APIs.

### Security by Boundary

Authentication, authorization, validation, and service access are
controlled at the appropriate boundary.

------------------------------------------------------------------------

## 3. Frontend Architecture

Technology:

- Next.js
- App Router
- React
- JavaScript / JSX
- Tailwind CSS

### Responsibilities

- Rendering
- Navigation
- Forms
- Client interaction
- Dashboard visualization
- API requests
- Authentication UI
- Prediction UI

### Structure

``` text
frontend/src/
├── app/
├── components/
├── features/
├── hooks/
├── lib/
├── services/
└── styles/
```

`layout.js` and `page.js` remain at the root of `src/app/`.

------------------------------------------------------------------------

## 4. Backend Architecture

Technology:

- Node.js
- Express.js
- Mongoose
- Better Auth
- JWT Plugin

### Structure

``` text
backend/src/
├── config/
├── controllers/
├── middlewares/
├── routes/
├── services/
├── validators/
├── models/
├── utils/
└── server.js
```

### Layer Responsibilities

**Routes** - Define endpoints.

**Controllers** - Receive requests. - Return responses.

**Services** - Business logic. - External service calls.

**Models** - Mongoose schemas/models.

**Validators** - Request validation.

**Middlewares** - Authentication. - Authorization. - Error handling. -
Request processing.

**Config** - Database and environment configuration.

------------------------------------------------------------------------

## 5. Authentication Architecture

Better Auth is the primary authentication framework.

JWT Plugin is used where JWT-based API/service authentication is
required.

Conceptual flow:

``` text
User
  |
  v
Next.js
  |
  v
Better Auth
  |
  +---- Session/Auth State
  |
  +---- JWT Plugin for supported API/service flows
  |
  v
Express Authorization
```

Application passwords should be handled by Better Auth rather than
implementing a separate custom password hashing system.

RBAC remains application-level authorization.

------------------------------------------------------------------------

## 6. Database Architecture

Database:

**MongoDB**

ODM:

**Mongoose**

``` text
Express.js
    |
    v
Mongoose
    |
    v
MongoDB
```

Mongoose provides:

- Schema definition
- Validation
- Models
- Queries
- Middleware/hooks
- Indexes
- References

------------------------------------------------------------------------

## 7. ML Service Architecture

Technology:

- Python
- FastAPI
- Pydantic
- Pandas
- NumPy
- Scikit-learn
- XGBoost
- SHAP

### Responsibilities

FastAPI handles:

- ML model loading
- Prediction
- Probability calculation
- ML input validation
- SHAP explanation
- Model metadata
- ML health checks

It does not handle:

- User registration
- User sessions
- Application roles
- Application dashboard persistence
- General application CRUD

------------------------------------------------------------------------

## 8. Service Communication

``` text
Next.js
   |
   | HTTPS
   v
Express.js
   |
   | Internal REST
   v
FastAPI
   |
   v
ML Model
```

The Express service should validate and authorize the application
request before calling FastAPI.

------------------------------------------------------------------------

## 9. Prediction Flow

``` text
User submits health data
          |
          v
Next.js validation/UI
          |
          v
Express API
          |
          +--> Authentication
          |
          +--> Authorization
          |
          +--> Request validation
          |
          v
FastAPI
          |
          +--> Feature validation
          |
          +--> Model inference
          |
          +--> Probability
          |
          +--> SHAP explanation
          |
          v
Express
          |
          +--> Save prediction
          |
          v
MongoDB
          |
          v
Express response
          |
          v
Next.js
```

------------------------------------------------------------------------

## 10. Data Ownership

| Data               | Owner                     |
|--------------------|---------------------------|
| User account       | Express/Auth              |
| User profile       | Express                   |
| Prediction history | Express                   |
| Dashboard data     | Express                   |
| Model metadata     | Express/application layer |
| ML model artifact  | FastAPI/ML service        |
| SHAP computation   | FastAPI                   |

------------------------------------------------------------------------

## 11. Security Architecture

Required controls:

- HTTPS in production
- Secure environment variables
- Authentication
- RBAC
- Request validation
- CORS
- Rate limiting
- JWT verification
- Restricted ML-service access
- Secure MongoDB connection
- No secrets in Git
- Safe error responses

------------------------------------------------------------------------

## 12. Scalability

The architecture allows independent scaling.

``` text
Next.js
   |
   +---- Express instances
              |
              +---- MongoDB
              |
              +---- FastAPI instances
```

FastAPI can later be scaled independently if prediction traffic
increases.

------------------------------------------------------------------------

## 13. Failure Handling

Possible failures:

- MongoDB unavailable
- FastAPI unavailable
- Invalid user input
- Invalid ML payload
- Model unavailable
- Authentication failure
- Authorization failure

The system should return standardized errors and avoid exposing internal
stack traces.

------------------------------------------------------------------------

## 14. Deployment Concept

A production deployment may use:

``` text
Browser
  |
  v
Next.js Hosting
  |
  v
Express API
  |
  +---- MongoDB Atlas
  |
  +---- FastAPI Hosting
```

Actual hosting providers can be selected during deployment.

------------------------------------------------------------------------

## 15. Architecture Decision Summary

| Decision          | Selected               |
|-------------------|------------------------|
| Frontend          | Next.js App Router     |
| Frontend Language | JavaScript / JSX       |
| Main Backend      | Node.js + Express.js   |
| Database          | MongoDB                |
| ODM               | Mongoose               |
| Authentication    | Better Auth            |
| API Token         | Better Auth JWT Plugin |
| ML Service        | Python + FastAPI       |
| ML                | Scikit-learn / XGBoost |
| Explainability    | SHAP                   |
| API Style         | REST                   |
| ML Communication  | Internal REST          |
