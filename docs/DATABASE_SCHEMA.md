# MediPredict — Database Schema

## 1. Database Overview

Database:

**MongoDB**

ODM:

**Mongoose**

MongoDB stores application data. The FastAPI ML service does not
independently manage the application’s user/profile/prediction database
workflow.

------------------------------------------------------------------------

## 2. Core Collections

Planned collections:

``` text
users
sessions
accounts
verifications
healthProfiles
predictions
modelVersions
auditLogs
```

Better Auth-related collections may vary according to the actual Better
Auth MongoDB adapter/storage configuration.

------------------------------------------------------------------------

# 3. User

Collection:

``` text
users
```

Purpose:

Store application user identity and role information.

Conceptual fields:

| Field       | Type     | Required | Description        |
|-------------|----------|---------:|--------------------|
| `_id`       | ObjectId |      Yes | MongoDB identifier |
| `name`      | String   |      Yes | User name          |
| `email`     | String   |      Yes | Unique email       |
| `role`      | String   |      Yes | USER/DOCTOR/ADMIN  |
| `status`    | String   |      Yes | Account status     |
| `createdAt` | Date     |      Yes | Creation time      |
| `updatedAt` | Date     |      Yes | Update time        |

------------------------------------------------------------------------

# 4. Health Profile

Collection:

``` text
healthProfiles
```

Purpose:

Store user health/profile information required by the application.

Conceptual fields:

| Field        | Type     | Description                  |
|--------------|----------|------------------------------|
| `_id`        | ObjectId | Identifier                   |
| `userId`     | ObjectId | User reference               |
| `age`        | Number   | Age                          |
| `gender`     | String   | Gender                       |
| `healthData` | Object   | Supported health information |
| `createdAt`  | Date     | Creation time                |
| `updatedAt`  | Date     | Update time                  |

Only necessary information should be collected.

------------------------------------------------------------------------

# 5. Prediction

Collection:

``` text
predictions
```

Purpose:

Store prediction history.

Conceptual fields:

| Field            | Type          | Description              |
|------------------|---------------|--------------------------|
| `_id`            | ObjectId      | Prediction ID            |
| `userId`         | ObjectId      | User reference           |
| `disease`        | String        | diabetes / heart-disease |
| `inputData`      | Object        | Model input              |
| `prediction`     | Number/String | Model result             |
| `probability`    | Number        | Risk probability         |
| `riskLevel`      | String        | LOW/MEDIUM/HIGH          |
| `modelVersionId` | ObjectId      | Model reference          |
| `explanation`    | Object        | SHAP summary             |
| `createdAt`      | Date          | Prediction time          |

------------------------------------------------------------------------

# 6. Model Version

Collection:

``` text
modelVersions
```

Purpose:

Track deployed ML model metadata.

Conceptual fields:

| Field          | Type     | Description              |
|----------------|----------|--------------------------|
| `_id`          | ObjectId | Identifier               |
| `name`         | String   | Model name               |
| `disease`      | String   | Disease type             |
| `algorithm`    | String   | Algorithm                |
| `version`      | String   | Version                  |
| `metrics`      | Object   | Evaluation metrics       |
| `features`     | Array    | Feature schema           |
| `artifactPath` | String   | Model artifact reference |
| `status`       | String   | Active/inactive          |
| `createdAt`    | Date     | Creation time            |

------------------------------------------------------------------------

# 7. Audit Log

Collection:

``` text
auditLogs
```

Purpose:

Track important administrative/security actions.

Conceptual fields:

| Field        | Type     | Description                  |
|--------------|----------|------------------------------|
| `_id`        | ObjectId | Identifier                   |
| `userId`     | ObjectId | Actor                        |
| `action`     | String   | Action name                  |
| `resource`   | String   | Resource type                |
| `resourceId` | String   | Resource identifier          |
| `metadata`   | Object   | Non-sensitive audit metadata |
| `createdAt`  | Date     | Event time                   |

Avoid storing unnecessary health information in audit logs.

------------------------------------------------------------------------

# 8. Better Auth Data

Better Auth may require authentication-related persistence such as:

``` text
sessions
accounts
verifications
```

The exact schema must follow the actual Better Auth MongoDB integration
used by the implementation.

Do not manually invent Better Auth internal fields if the library
provides an adapter/schema definition.

------------------------------------------------------------------------

# 9. Relationships

MongoDB uses document references where appropriate.

Conceptual relationship:

``` text
User
 |
 +---- HealthProfile
 |
 +---- Prediction
 |        |
 |        +---- ModelVersion
 |
 +---- AuditLog
```

------------------------------------------------------------------------

# 10. Embedding vs Referencing

### Embed when:

- Data is tightly coupled.
- Data is small.
- Data is usually read together.
- Independent lifecycle is unnecessary.

### Reference when:

- Data has an independent lifecycle.
- Data may be shared.
- Data grows significantly.
- Separate querying is useful.

Prediction records should generally reference the user and model version
rather than duplicating large independent documents.

------------------------------------------------------------------------

# 11. Indexing

Expected indexes may include:

### User

``` text
email: unique
```

### Health Profile

``` text
userId: unique
```

### Prediction

``` text
userId
userId + createdAt
disease
modelVersionId
```

### Audit Log

``` text
userId + createdAt
action + createdAt
```

Indexes should be added based on actual query patterns.

------------------------------------------------------------------------

# 12. Validation

Mongoose should validate:

- Required fields
- Enums
- Numeric ranges where appropriate
- String formats
- References
- Unique constraints where applicable

Validation should not rely only on Mongoose. Express request validation
is also required.

------------------------------------------------------------------------

# 13. Data Privacy

Health-related data should be treated as sensitive application data.

Requirements:

- Minimize collection.
- Protect access.
- Avoid unnecessary logging.
- Do not expose private predictions.
- Use secure connections.
- Protect backups.
- Use environment-based credentials.
- Apply appropriate privacy requirements for the deployment context.

------------------------------------------------------------------------

# 14. Prediction Data Lifecycle

``` text
User Input
   |
   v
Express Validation
   |
   v
FastAPI Prediction
   |
   v
Prediction Result
   |
   v
Mongoose
   |
   v
MongoDB
```

------------------------------------------------------------------------

# 15. Planned vs Existing

## Existing

- MongoDB selected as database.
- Mongoose selected as ODM.
- Express selected as application backend.
- FastAPI selected as ML service.

## Planned

- Final Mongoose schemas.
- Better Auth persistence schema.
- Index implementation.
- Migration/seed strategy where required.
- Production backup strategy.
- Data retention policy.

------------------------------------------------------------------------

# 16. Schema Design Principle

The database schema must evolve with the actual API and application
requirements.

Do not over-design collections before the corresponding feature is
implemented.
