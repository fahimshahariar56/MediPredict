# MediPredict — API Documentation

**Version:** 1.0  
**Status:** Proposed API Specification  
**API Architecture:** REST  
**Data Format:** JSON

---

## 1. Introduction

MediPredict uses two independent REST API services:

1. Express.js REST API — Main application backend.
2. FastAPI REST API — Machine learning service.

The frontend communicates with Express for application operations.

Express communicates with FastAPI for ML inference and explainability.

## 2. Base URLs

| Service | Development URL |
|---|---|
| Next.js | http://localhost:3000 |
| Express | http://localhost:5000 |
| FastAPI | http://localhost:8000 |

Production URLs will be configured through environment variables.

## 3. General API Standards

### Request Format

```http
Content-Type: application/json
```

### Response Format

Successful response:

```json
{
  "success": true,
  "message": "Request completed successfully",
  "data": {}
}
```

Error response:

```json
{
  "success": false,
  "message": "Something went wrong",
  "error": {
    "code": "VALIDATION_ERROR",
    "details": []
  }
}
```

### HTTP Status Codes

| Status | Meaning |
|---|---|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Unprocessable Entity |
| 429 | Too Many Requests |
| 500 | Internal Server Error |
| 502 | ML Service Error |
| 503 | Service Unavailable |

## 4. Authentication

Authentication is managed by Better Auth.

The application should use Better Auth's supported session flow for browser authentication.

The JWT Plugin will provide signed tokens for service-to-service authentication.

### Authentication Endpoints

Better Auth manages its own authentication routes.

Typical endpoint base:

```text
/api/auth/*
```

The exact authentication routes and methods depend on the installed Better Auth version and configured plugins.

### Protected Express APIs

Protected requests must be authenticated through the configured Better Auth session or trusted JWT verification mechanism.

The backend must verify user identity and permissions before returning protected data.

### ML Service Authentication

Express must provide a signed JWT when communicating with FastAPI.

FastAPI must verify:

- Signature.
- Issuer.
- Audience.
- Expiration.
- Required permissions or scopes.

## 5. Express REST API

**Base URL:**

```text
http://localhost:5000/api/v1
```

### 5.1 Health APIs

| Method | Endpoint | Authentication | Description |
|---|---|---|---|
| GET | /health | Public | Backend health |
| GET | /health/ready | Internal/Restricted | Dependency readiness |

Example:

```http
GET /api/v1/health
```

Response:

```json
{
  "success": true,
  "message": "MediPredict API is running",
  "data": {
    "status": "healthy"
  }
}
```

### 5.2 User APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | /users/me | Get authenticated user |
| PATCH | /users/me | Update user information |
| DELETE | /users/me | Request account deletion |

All endpoints require authentication.

### 5.3 Profile APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | /profiles/me | Get current profile |
| PUT | /profiles/me | Create or update profile |

Example request:

```json
{
  "fullName": "Example User",
  "dateOfBirth": "2005-01-15",
  "gender": "MALE"
}
```

The API must validate the date and permitted enum values.

### 5.4 Prediction APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | /predictions/diabetes | Create diabetes prediction |
| POST | /predictions/heart-disease | Create heart disease prediction |
| GET | /predictions | Get prediction history |
| GET | /predictions/:id | Get individual prediction |
| DELETE | /predictions/:id | Delete owned prediction record |

All prediction endpoints require authentication.

#### Diabetes Prediction

```http
POST /api/v1/predictions/diabetes
```

Request:

```json
{
  "pregnancies": 2,
  "glucose": 120,
  "bloodPressure": 70,
  "skinThickness": 20,
  "insulin": 80,
  "bmi": 28.5,
  "diabetesPedigreeFunction": 0.45,
  "age": 30
}
```

Example response:

```json
{
  "success": true,
  "message": "Diabetes risk prediction completed",
  "data": {
    "predictionId": "prediction-id",
    "disease": "DIABETES",
    "riskCategory": "MODERATE",
    "probability": 0.42,
    "modelVersion": "diabetes-v1",
    "explanation": {
      "method": "SHAP",
      "features": [
        {
          "name": "glucose",
          "contribution": 0.18,
          "direction": "INCREASES_RISK"
        },
        {
          "name": "bmi",
          "contribution": 0.06,
          "direction": "INCREASES_RISK"
        }
      ]
    },
    "createdAt": "2026-11-03T12:00:00.000Z",
    "disclaimer": "This result is an estimated model-based risk assessment, not a medical diagnosis."
  }
}
```

The numerical values above are illustrative response examples, not actual model outputs.

#### Heart Disease Prediction

```http
POST /api/v1/predictions/heart-disease
```

Request:

```json
{
  "age": 54,
  "sex": 1,
  "chestPainType": 2,
  "restingBloodPressure": 130,
  "cholesterol": 230,
  "fastingBloodSugar": 0,
  "restingECG": 1,
  "maxHeartRate": 150,
  "exerciseInducedAngina": 0,
  "stDepression": 1.2,
  "stSlope": 1
}
```

Response:

```json
{
  "success": true,
  "message": "Heart disease risk prediction completed",
  "data": {
    "predictionId": "prediction-id",
    "disease": "HEART_DISEASE",
    "riskCategory": "MODERATE",
    "probability": 0.38,
    "modelVersion": "heart-v1",
    "explanation": {
      "method": "SHAP",
      "features": []
    },
    "createdAt": "2026-11-03T12:00:00.000Z",
    "disclaimer": "This result is an estimated model-based risk assessment, not a medical diagnosis."
  }
}
```

The numerical values are illustrative only.

**Important:** Input feature definitions, categorical encoding, valid ranges, missing-value handling, and probability calibration must match the actual trained model pipeline.

### 5.5 Prediction History

```http
GET /api/v1/predictions?page=1&limit=10
```

Response:

```json
{
  "success": true,
  "data": {
    "items": [],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 0,
      "totalPages": 0
    }
  }
}
```

Individual prediction:

```http
GET /api/v1/predictions/:id
```

The backend must ensure that users can only access their own prediction records unless an explicitly authorized administrative workflow applies.

### 5.6 Dashboard APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | /dashboard/overview | Dashboard statistics |
| GET | /dashboard/recent-predictions | Recent predictions |

Example response:

```json
{
  "success": true,
  "data": {
    "totalPredictions": 12,
    "diabetesPredictions": 7,
    "heartDiseasePredictions": 5,
    "recentPredictions": []
  }
}
```

### 5.7 Admin APIs

All admin endpoints require authentication and ADMIN authorization.

| Method | Endpoint | Description |
|---|---|---|
| GET | /admin/dashboard | Admin statistics |
| GET | /admin/users | List users |
| GET | /admin/users/:id | View user details |
| PATCH | /admin/users/:id/status | Update account status |
| GET | /admin/predictions | View prediction statistics |

Admin operations must be audited where appropriate.

## 6. FastAPI ML APIs

**Internal Base URL:**

```text
http://localhost:8000
```

These APIs are intended for Express-to-FastAPI communication.

They must not be exposed as unrestricted public endpoints.

### 6.1 Health Check

```http
GET /health
```

Response:

```json
{
  "status": "healthy",
  "service": "MediPredict ML Service"
}
```

### 6.2 Diabetes Prediction

```http
POST /api/v1/predict/diabetes
```

Request:

```json
{
  "features": {
    "pregnancies": 2,
    "glucose": 120,
    "blood_pressure": 70,
    "skin_thickness": 20,
    "insulin": 80,
    "bmi": 28.5,
    "diabetes_pedigree_function": 0.45,
    "age": 30
  }
}
```

Response:

```json
{
  "success": true,
  "prediction": {
    "class": 0,
    "probability": 0.42,
    "risk_category": "MODERATE"
  },
  "model": {
    "name": "diabetes-model",
    "version": "1.0.0"
  }
}
```

### 6.3 Heart Disease Prediction

```http
POST /api/v1/predict/heart-disease
```

Request:

```json
{
  "features": {
    "age": 54,
    "sex": 1,
    "chest_pain_type": 2,
    "resting_blood_pressure": 130,
    "cholesterol": 230,
    "fasting_blood_sugar": 0,
    "resting_ecg": 1,
    "max_heart_rate": 150,
    "exercise_induced_angina": 0,
    "st_depression": 1.2,
    "st_slope": 1
  }
}
```

Response:

```json
{
  "success": true,
  "prediction": {
    "class": 0,
    "probability": 0.38,
    "risk_category": "MODERATE"
  },
  "model": {
    "name": "heart-disease-model",
    "version": "1.0.0"
  }
}
```

### 6.4 SHAP Explanation

```http
POST /api/v1/explain
```

Request:

```json
{
  "model": "diabetes",
  "features": {
    "glucose": 120,
    "bmi": 28.5,
    "age": 30
  }
}
```

Response:

```json
{
  "success": true,
  "explanation": {
    "method": "SHAP",
    "baseValue": 0.25,
    "outputValue": 0.42,
    "features": [
      {
        "name": "glucose",
        "shapValue": 0.12
      },
      {
        "name": "bmi",
        "shapValue": 0.05
      }
    ]
  }
}
```

This is an illustrative contract. Production responses must include the complete validated feature set and correct SHAP output scale.

### 6.5 Model Metadata

```http
GET /api/v1/models
```

Response:

```json
{
  "success": true,
  "models": [
    {
      "name": "diabetes-model",
      "version": "1.0.0",
      "status": "loaded"
    },
    {
      "name": "heart-disease-model",
      "version": "1.0.0",
      "status": "loaded"
    }
  ]
}
```

## 7. Express-to-FastAPI Integration

### Request Flow

1. User submits prediction form.
2. Next.js sends request to Express.
3. Express authenticates user.
4. Express validates user input.
5. Express obtains a valid service token.
6. Express calls the appropriate FastAPI endpoint.
7. FastAPI validates the token.
8. FastAPI validates the features.
9. ML model generates prediction.
10. SHAP generates explanation.
11. FastAPI returns structured response.
12. Express validates the ML response.
13. Express stores prediction and metadata.
14. Express returns the final response.

### Service Communication Rules

- Use environment variables for service URLs.
- Use request timeouts.
- Restrict FastAPI access.
- Validate responses.
- Avoid exposing internal service errors.
- Never trust client-submitted prediction results.
- Store the model version with every prediction.

## 8. Validation Rules

All APIs must validate:

- Required fields.
- Data types.
- Numerical ranges.
- Categorical values.
- Authentication.
- Authorization.
- Resource ownership.

Validation constraints must be defined from the selected dataset and model preprocessing pipeline.

Do not silently replace missing or invalid health values with zero.

## 9. API Versioning

All application APIs should use:

```text
/api/v1/
```

Future breaking changes should use a new version:

```text
/api/v2/
```

## 10. API Security

- Better Auth session validation.
- JWT signature verification.
- JWKS public-key verification.
- Role-based authorization.
- Rate limiting.
- CORS restrictions.
- Request validation.
- Restricted internal ML endpoints.
- No sensitive data in error messages.
- HTTPS in production.

## 11. Documentation Maintenance

Whenever an API changes:

1. Update its endpoint specification.
2. Update request and response examples.
3. Update validation rules.
4. Update frontend API types.
5. Update integration tests.
6. Update this document.

---

**End of API_DOCUMENTATION.md**