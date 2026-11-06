# MediPredict — API Documentation

## 1. API Overview

MediPredict uses two API layers:

1.  **Express REST API** — main application API
2.  **FastAPI ML API** — internal Machine Learning service

------------------------------------------------------------------------

# 2. Express API

Base URL:

``` text
http://localhost:5000/api/v1
```

Production base URL will depend on deployment.

------------------------------------------------------------------------

## 3. Standard Response Format

### Success

``` json
{
  "success": true,
  "message": "Request successful",
  "data": {}
}
```

### Error

``` json
{
  "success": false,
  "message": "Validation failed",
  "errors": {}
}
```

------------------------------------------------------------------------

# 4. Authentication APIs

## Register

``` text
POST /auth/register
```

Purpose:

Create a new user account through Better Auth.

### Request

``` json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure-password"
}
```

### Response

``` json
{
  "success": true,
  "message": "Registration successful",
  "data": {}
}
```

------------------------------------------------------------------------

## Login

``` text
POST /auth/login
```

Purpose:

Authenticate a user.

Authentication/session behavior is managed by Better Auth.

------------------------------------------------------------------------

## Current User

``` text
GET /auth/me
```

Purpose:

Return authenticated user information.

Authentication required.

------------------------------------------------------------------------

## Logout

``` text
POST /auth/logout
```

Purpose:

End the authenticated session.

------------------------------------------------------------------------

# 5. Profile APIs

## Get Profile

``` text
GET /profile
```

Authentication required.

------------------------------------------------------------------------

## Update Profile

``` text
PATCH /profile
```

Authentication required.

------------------------------------------------------------------------

# 6. Prediction APIs

## Diabetes Prediction

``` text
POST /predictions/diabetes
```

Authentication required.

### Request

The exact fields must match the final trained diabetes model schema.

Conceptual example:

``` json
{
  "features": {
    "glucose": 148,
    "bmi": 33.6,
    "bloodPressure": 72
  }
}
```

### Response

``` json
{
  "success": true,
  "message": "Diabetes prediction generated",
  "data": {
    "predictionId": "prediction_id",
    "disease": "diabetes",
    "probability": 0.734,
    "riskLevel": "HIGH",
    "modelVersion": "diabetes-v1"
  }
}
```

------------------------------------------------------------------------

## Heart Disease Prediction

``` text
POST /predictions/heart-disease
```

Authentication required.

Exact fields will be defined from the final model schema.

------------------------------------------------------------------------

## Prediction History

``` text
GET /predictions
```

Authentication required.

Supports pagination and filtering where implemented.

------------------------------------------------------------------------

## Prediction Details

``` text
GET /predictions/:id
```

Authentication required.

Users can access only predictions they are authorized to view.

------------------------------------------------------------------------

## Delete Prediction

``` text
DELETE /predictions/:id
```

Authentication required if deletion is included in the final product
scope.

------------------------------------------------------------------------

# 7. Dashboard APIs

## Dashboard Summary

``` text
GET /dashboard/summary
```

Authentication required.

Conceptual response:

``` json
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

------------------------------------------------------------------------

# 8. Model APIs

## Available Models

``` text
GET /models
```

Authentication/authorization depends on whether model metadata is public
or admin-only.

------------------------------------------------------------------------

## Model Details

``` text
GET /models/:id
```

------------------------------------------------------------------------

# 9. Admin APIs

Admin role required.

## Users

``` text
GET /admin/users
GET /admin/users/:id
PATCH /admin/users/:id/status
```

## Predictions

``` text
GET /admin/predictions
```

## Models

``` text
GET /admin/models
GET /admin/models/:id
```

## Analytics

``` text
GET /admin/analytics
```

------------------------------------------------------------------------

# 10. FastAPI ML API

Base URL:

``` text
http://localhost:8000
```

FastAPI is an internal ML service and should not directly become the
public application API.

------------------------------------------------------------------------

## Health

``` text
GET /health
```

### Example

``` json
{
  "status": "ok"
}
```

------------------------------------------------------------------------

## Models

``` text
GET /models
```

Returns available ML model metadata.

------------------------------------------------------------------------

## Diabetes Prediction

``` text
POST /predict/diabetes
```

Purpose:

Run diabetes model inference.

The request schema must exactly match the final preprocessing/model
pipeline.

------------------------------------------------------------------------

## Heart Disease Prediction

``` text
POST /predict/heart-disease
```

Purpose:

Run heart disease model inference.

------------------------------------------------------------------------

## Diabetes Explanation

``` text
POST /explain/diabetes
```

Purpose:

Generate SHAP-based explanation for a diabetes prediction.

------------------------------------------------------------------------

## Heart Disease Explanation

``` text
POST /explain/heart-disease
```

Purpose:

Generate SHAP-based explanation for a heart disease prediction.

------------------------------------------------------------------------

# 11. Internal Communication

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

Express should control the public application flow.

------------------------------------------------------------------------

# 12. Authentication

Public application APIs may use Better Auth sessions.

JWT Plugin may be used for supported API/service authentication.

Protected requests must contain the authentication mechanism required by
the implemented Better Auth configuration.

FastAPI should validate trusted service authentication for internal
requests when configured.

------------------------------------------------------------------------

# 13. Authorization

Roles:

``` text
USER
DOCTOR
ADMIN
```

Example:

| Endpoint               | USER |                        DOCTOR | ADMIN |
|------------------------|-----:|------------------------------:|------:|
| Own profile            |  Yes |                           Yes |   Yes |
| Own predictions        |  Yes |                           Yes |   Yes |
| Other user predictions |   No | Only if explicitly authorized |   Yes |
| Admin users            |   No |                            No |   Yes |
| Admin models           |   No |                            No |   Yes |

------------------------------------------------------------------------

# 14. Validation

Validation must occur at:

1.  Frontend for user experience.
2.  Express for application security/business rules.
3.  FastAPI for ML schema correctness.

Frontend validation must never replace server-side validation.

------------------------------------------------------------------------

# 15. Error Codes

Common status codes:

| Code | Meaning                |
|------|------------------------|
| 200  | Success                |
| 201  | Created                |
| 400  | Bad Request            |
| 401  | Unauthenticated        |
| 403  | Forbidden              |
| 404  | Not Found              |
| 409  | Conflict               |
| 422  | Validation Error       |
| 429  | Too Many Requests      |
| 500  | Internal Server Error  |
| 502  | ML service unavailable |

------------------------------------------------------------------------

# 16. API Versioning

Application APIs use:

``` text
/api/v1
```

Future breaking changes can use:

``` text
/api/v2
```

------------------------------------------------------------------------

# 17. API Development Rules

- Do not expose MongoDB directly to frontend.
- Do not let frontend call FastAPI directly for normal application
  flows.
- Do not duplicate application business logic in FastAPI.
- Validate all incoming requests.
- Use consistent response formats.
- Protect sensitive endpoints.
- Log safely without exposing health data or secrets.
