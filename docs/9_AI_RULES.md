# AI Development Rules
## Ganga Portfolio Platform

---

### Purpose
This document is the single source of truth for all AI coding assistants working on the project.

**Applicable To:**
* ChatGPT
* Codex
* Cursor
* Claude Code
* Windsurf
* GitHub Copilot
* Any future AI assistant

The objective is to ensure consistent, scalable, maintainable, production-quality code.

---

### 1. Core Principles
Always optimize for:
1. **Maintainability**
2. **Readability**
3. **Scalability**
4. **Simplicity**
5. **Performance**

Never optimize for:
* Clever code
* Shortest code
* Premature optimization

---

### 2. Project Context
This project is a professional engineering portfolio.

**Primary Goals:**
* Showcase AI Engineering
* Showcase Backend Development
* Showcase Architecture Thinking
* Demonstrate Engineering Maturity

Every implementation decision should support these goals.

---

### 3. Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion |
| **Backend** | Django, Django REST Framework |
| **Database** | PostgreSQL |
| **Infrastructure** | Docker, GitHub Actions |

---

### 4. Architecture Rules
Follow:
* Clean Architecture
* Feature-Based Architecture
* Separation of Concerns
* Single Responsibility Principle
* Dependency Inversion Principle

> [!IMPORTANT]
> * Never place business logic inside UI components.
> * Never place business logic inside DRF views.

---

### 5. Frontend Rules
**Use:**
* TypeScript Everywhere
* Server Components First
* Client Components Only When Required
* Reusable Components

**Avoid:**
* Inline Styles
* Hardcoded Values
* Duplicate Components
* Anonymous Exports

---

### 6. Next.js Rules
* Use App Router
* Use Server Components by default
* Use Suspense where appropriate
* Use Loading States
* Use Error Boundaries
* Optimize Images

---

### 7. TypeScript Rules
* Strict Mode Required
* Never use `any`
* Use `interfaces` and `types`
* Use `enums` when appropriate
* All API responses must be typed.

---

### 8. Component Rules
Every component must:
* Have a single responsibility
* Be reusable
* Have meaningful names
* Avoid files larger than 300 lines.

---

### 9. Folder Structure Rules

```text
frontend/
├── app/
├── components/
├── features/
├── hooks/
├── services/
├── types/
├── lib/
└── constants/

backend/
└── apps/
    ├── core/
    ├── services/
    ├── repositories/
    └── utils/
```
*Do not create random folders.*

---

### 10. Backend Rules
**Use:**
* Django
* DRF (Django REST Framework)
* Service Layer
* Repository Layer

**Avoid:**
* Business logic in views
* Complex queries in serializers

---

### 11. DRF Rules
Each resource must have:
* Serializer
* ViewSet
* Service
* Repository

**Use:**
* ModelSerializer
* Validation Methods
* Permissions
* Pagination

---

### 12. Database Rules
**Use:**
* UUID Primary Keys
* Foreign Keys
* Indexes
* Migrations

**Avoid:**
* Raw SQL
* Manual Database Changes
* Database Logic in Views

---

### 13. PostgreSQL Rules
* Use `JSONB` for dynamic metadata
* Use Indexes for frequently queried fields
* Use appropriate constraints

---

### 14. API Rules
All APIs must:
* Be versioned
* Use consistent responses
* Return meaningful errors
* Validate input

**Response format:**
```json
{
  "success": true,
  "message": "...",
  "data": {}
}
```

---

### 15. Security Rules
**Always:**
* Validate Input
* Sanitize User Data
* Protect Against XSS
* Protect Against CSRF
* Protect Secrets
* Use Environment Variables

**Never:**
* Commit Secrets
* Expose Internal Errors
* Log Sensitive Data

---

### 16. Authentication Rules
* **Version 1:** Public APIs, No authentication
* **Future:** JWT, Role Based Access

---

### 17. Error Handling Rules
* Never swallow exceptions.
* Log all unexpected exceptions.
* Provide user-friendly error messages.
* No stack traces in production.

---

### 18. Logging Rules
**Backend:**
* Structured Logging
* JSON Format

**Log:**
* Requests
* Errors
* Performance Metrics

**Never log:**
* Passwords
* Secrets
* Tokens

---

### 19. Analytics Rules
**Track:**
* Page Views
* Resume Downloads
* Project Clicks
* Contact Form Submissions
* GitHub Redirects
* LinkedIn Redirects

*Do not collect personal data unnecessarily.*

---

### 20. Styling Rules
**Use:**
* Tailwind CSS
* Design Tokens
* Reusable Utility Classes

**Avoid:**
* Inline CSS
* Random Color Values

---

### 21. Accessibility Rules
Must support:
* Keyboard Navigation
* Screen Readers
* Focus States
* Semantic HTML
* WCAG AA

---

### 22. Animation Rules
* Use Framer Motion
* **Allowed:** Fade, Slide, Reveal, Scale
* **Avoid:** Bounce, Flash, Excessive Motion
* *Animation should support content, not distract.*

---

### 23. Performance Rules
**Target:**
* Lighthouse > 90
* Page Load < 2 seconds

**Optimize:**
* Images
* Bundles
* Requests
* Use Lazy Loading

---

### 24. Testing Rules
* **Frontend:** Component Tests, Integration Tests
* **Backend:** Unit Tests, API Tests
* **Target Coverage:** 80%

---

### 25. Git Rules
* **Branch Naming:** `feature/<name>`, `bugfix/<name>`, `hotfix/<name>`
* **Commit Format:** `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`

---

### 26. Documentation Rules
* Every major feature must include: Purpose, Architecture, Dependencies, Usage
* Keep documentation updated.

---

### 27. Code Review Rules
Before merging:
* Code builds
* Tests pass
* Lint passes
* Types pass
* Documentation updated

---

### 28. Naming Conventions

| Entity | Convention |
| :--- | :--- |
| **Files** | kebab-case |
| **Components** | PascalCase |
| **Functions** | camelCase |
| **Variables** | camelCase |
| **Constants** | UPPER_SNAKE_CASE |

---

### 29. Environment Variable Rules
* **Frontend:** `NEXT_PUBLIC_*`
* **Backend:** `SERVER_*`
* *Never hardcode URLs.*

---

### 30. Dependency Rules
Before adding a dependency:
* Verify necessity
* Verify maintenance status
* Verify security
* Prefer existing project libraries.

---

### 31. Definition of Done
Feature is complete only when:
* Code Complete
* Tested
* Responsive
* Accessible
* Documented
* Reviewed
* Merged
* Deployed

---

### 32. AI Assistant Behavior Rules
AI assistants must:
* Read existing code before generating new code
* Reuse existing components
* Reuse existing services
* Follow existing patterns
* Prefer modification over duplication
* Never introduce breaking changes without explanation
* Never rewrite unrelated files
* Always explain architectural decisions
* Always keep generated code production ready

---

### 33. Forbidden Practices
* No duplicated code
* No dead code
* No commented-out code
* No hardcoded secrets
* No business logic in UI
* No business logic in views
* No direct database manipulation
* No untyped API responses
* No skipping validation

---

### 34. Portfolio Specific Rules
**Prioritize:**
* Professional appearance
* Technical storytelling
* Architecture visibility
* Engineering impact
* Recruiter experience

*Do not prioritize flashy visual effects over content.*

---

### 35. Future Expansion Rules
Future features must support:
* CMS Integration
* AI Assistant
* Analytics Dashboard
* Knowledge Graph Visualization
* Additional Projects
* Architecture Explorer

---

### 36. Final Rule
When multiple implementations are possible, choose the solution that is:
* Most maintainable
* Most readable
* Most scalable
* Most aligned with existing architecture
* *Not the shortest solution.*

---

### Version History
* **Version 1.0**: Initial Engineering Constitution
