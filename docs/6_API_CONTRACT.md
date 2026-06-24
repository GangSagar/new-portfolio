# API Contract Document
## Ganga Portfolio Platform

---

### 1. Purpose
This document defines the API standards, endpoint contracts, request/response schemas, validation rules, authentication strategy, error handling conventions, pagination standards, and versioning strategy.

| Property | Value |
| :--- | :--- |
| **Backend Framework** | Django REST Framework |
| **API Style** | REST |
| **Response Format** | JSON |
| **Base URL** | `/api/v1` |

---

### 2. API Design Principles
* RESTful Endpoints
* Consistent Response Structure
* Versioned APIs
* UUID-Based Resources
* Validation Before Persistence
* Predictable Error Handling

---

### 3. Standard Success Response
```json
{
  "success": true,
  "message": "Request completed successfully",
  "data": {}
}
```

---

### 4. Standard Error Response
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "field": [
      "error message"
    ]
  }
}
```

---

### 5. HTTP Status Codes

| Code | Status | Description / Typical Use |
| :--- | :--- | :--- |
| `200` | OK | Request succeeded, returns data. |
| `201` | Created | Resource successfully created. |
| `400` | Bad Request | Validation errors or invalid payload. |
| `401` | Unauthorized | Missing or invalid authentication token. |
| `403` | Forbidden | Authenticated user lacks permission. |
| `404` | Not Found | Requested resource does not exist. |
| `405` | Method Not Allowed | HTTP method is not supported by endpoint. |
| `429` | Too Many Requests | Rate limit exceeded. |
| `500` | Internal Server Error | Unexpected server error. |

---

### 6. API Versioning
* **Current Version:** `/api/v1`
* **Future Version:** `/api/v2`

---

### 7. Health Check API
* **Method:** `GET`
* **Path:** `/api/v1/health`

**Response:**
```json
{
  "status": "healthy"
}
```

---

### 8. Projects APIs

#### Get All Projects
* **Method:** `GET`
* **Path:** `/api/v1/projects`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "Chess Analyzer",
      "slug": "chess-analyzer",
      "short_description": "...",
      "github_url": "...",
      "featured": true
    }
  ]
}
```

#### Get Project By Slug
* **Method:** `GET`
* **Path:** `/api/v1/projects/{slug}`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "Chess Analyzer",
    "slug": "chess-analyzer",
    "short_description": "...",
    "full_description": "...",
    "github_url": "...",
    "live_url": "...",
    "thumbnail_url": "...",
    "featured": true
  }
}
```

---

### 9. Experience APIs

#### Get Experience
* **Method:** `GET`
* **Path:** `/api/v1/experience`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "company_name": "HP",
      "role": "Software Engineer",
      "employment_type": "Full-Time",
      "location": "...",
      "start_date": "2024-01-01",
      "end_date": null,
      "currently_working": true,
      "description": "..."
    }
  ]
}
```

---

### 10. Skills APIs

#### Get Skills
* **Method:** `GET`
* **Path:** `/api/v1/skills`
* **Optional Query Params:**
  * `?category=backend`
  * `?category=ai-engineering`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Python",
      "category": "backend",
      "years_of_experience": 3
    }
  ]
}
```

---

### 11. Achievements APIs
* **Method:** `GET`
* **Path:** `/api/v1/achievements`

**Response:**
```json
{
  "success": true,
  "data": []
}
```

---

### 12. Technologies APIs
* **Method:** `GET`
* **Path:** `/api/v1/technologies`

**Response:**
```json
{
  "success": true,
  "data": []
}
```

---

### 13. Certifications APIs
* **Method:** `GET`
* **Path:** `/api/v1/certifications`

**Response:**
```json
{
  "success": true,
  "data": []
}
```

---

### 14. Social Links APIs
* **Method:** `GET`
* **Path:** `/api/v1/social-links`

**Response:**
```json
{
  "success": true,
  "data": []
}
```

---

### 15. Resume Download API
* **Method:** `POST`
* **Path:** `/api/v1/resume/download`
* **Purpose:** Track resume downloads

**Request:**
```json
{
  "session_id": "abc123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Download tracked"
}
```

---

### 16. Contact API
* **Method:** `POST`
* **Path:** `/api/v1/contact`

**Request:**
```json
{
  "name": "Ganga",
  "email": "test@example.com",
  "message": "Hello"
}
```

**Validation Rules:**
* **name**: Required, Max Length: 255
* **email**: Required, Valid Email format
* **message**: Required, Max Length: 5000

**Response:**
```json
{
  "success": true,
  "message": "Message submitted successfully"
}
```

---

### 17. Contact Validation Errors
**Response:**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": [
      "Enter a valid email."
    ]
  }
}
```

---

### 18. Analytics Event API
* **Method:** `POST`
* **Path:** `/api/v1/analytics/event`

**Request:**
```json
{
  "event_name": "project_click",
  "page": "/projects",
  "metadata": {}
}
```

**Response:**
```json
{
  "success": true
}
```

---

### 19. Supported Analytics Events
* `page_view`
* `project_click`
* `github_redirect`
* `linkedin_redirect`
* `resume_download`
* `contact_submission`

---

### 20. Pagination Standard
* **Request:** `?page=1&page_size=10`
* **Response:**
```json
{
  "count": 100,
  "next": "http://api.example.com/api/v1/projects?page=2",
  "previous": null,
  "results": []
}
```

---

### 21. Filtering Standard
Examples of query parameters:
* `?featured=true`
* `?category=backend`
* `?status=active`

---

### 22. Sorting Standard
Examples of ordering parameters:
* `?ordering=created_at` (Ascending)
* `?ordering=-created_at` (Descending)
* `?ordering=display_order`

---

### 23. Authentication Strategy
* **Version 1:** Public APIs (no authentication required)
* **Version 2:** JWT Authentication (admin APIs protected)

---

### 24. Rate Limiting

| Endpoint | Limit |
| :--- | :--- |
| **Contact API** | 10 Requests / Hour |
| **Analytics API** | 100 Requests / Hour |

---

### 25. Security Rules
* Input Validation
* Serializer Validation
* CSRF Protection
* Rate Limiting
* Request Sanitization
* Secure Headers

---

### 26. Serializer Standards
Each resource must have:
* Read Serializer (for GET requests)
* Write Serializer (for POST/PUT/PATCH requests)
* List Serializer (Optional)

---

### 27. Error Handling Standards
All APIs must return a consistent structure on failure:
* `success` (boolean)
* `message` (string)
* `errors` (object containing field-specific lists of error messages)
* **Rule:** No raw exceptions or stack traces are allowed in responses.

---

### 28. Logging Standards
**Log:**
* Request ID
* Response Time
* Errors
* Validation Failures

**Never Log:**
* Secrets
* Tokens
* Passwords

---

### 29. Future Admin APIs
For dynamic administration, the following endpoints will be protected:
* Admin Projects
* Admin Skills
* Admin Experience
* Admin Achievements
* Admin Analytics
* Admin Contact Messages

---

### 30. Future AI Assistant APIs
* `POST /api/v2/chat`
* `POST /api/v2/ask`
* `GET /api/v2/knowledge-base`

---

### 31. OpenAPI Support
* **Tools:** Swagger (`drf-spectacular`), Redoc
* **Rule:** OpenAPI schema generation is required before production deployment.

---

### 32. API QA Checklist
- [ ] Versioning Enabled
- [ ] Validation Implemented
- [ ] Error Responses Consistent
- [ ] Rate Limiting Enabled
- [ ] Logging Enabled
- [ ] Swagger Generated
- [ ] Pagination Implemented
- [ ] Filtering Implemented
- [ ] Security Review Completed

---

### Version History
* **Version 1.0**: Initial API Contract
