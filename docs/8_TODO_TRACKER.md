# Portfolio Development Tracker (Solo Developer Edition)
## Ganga Portfolio Platform

---

### Project Status

| Metric | Detail |
| :--- | :--- |
| **Overall Progress** | `0%` |
| **Current Milestone**| Milestone 1: Project & Database Setup |
| **Target Release**   | v1.0 |
| **Status**           | 🟡 Planning Completed |

---

### Milestone 1 - Project & Database Setup
**Priority:** High | **Status:** Not Started

- [ ] Create GitHub Repository & set up `.gitignore` for Next.js & Django.
- [ ] Initialize Next.js 15 App in `frontend/`.
- [ ] Initialize Django REST Framework project in `backend/`.
- [ ] Configure local PostgreSQL instance and `.env` variables for database connection.
- [ ] Create database mock data seed script.

**Definition of Done:**
* Frontend & Backend running locally, PostgreSQL connected.

---

### Milestone 2 - Backend API Layer
**Priority:** High | **Status:** Not Started

#### Database Schema & Migrations
- [ ] Create Django models (UUID Primary keys, soft-delete `is_deleted` flags, and audit timestamps):
  - Projects & Technologies (Many-to-Many via join table)
  - Project Metrics (Impact values)
  - Experience & Technologies
  - Skills (Categorized)
  - Achievements & Certifications
  - Contact Messages & Resume Downloads (visitor tracking)
  - Analytics Events (flexible JSONB metadata)
- [ ] Create and run Django DB migrations.
- [ ] Seed initial database with mock entries using the seed script.

#### DRF Endpoints Implementation
- [ ] Configure CORS policy, settings, and logging utilities.
- [ ] Build serializers and views for standard envelope JSON format (`success`, `message`, `data`):
  - `GET /api/v1/projects` (featured, ordering, filtering)
  - `GET /api/v1/projects/{slug}` (slug detail view)
  - `GET /api/v1/experience` (ordered timeline entries)
  - `GET /api/v1/skills` (filtered by category)
  - `GET /api/v1/achievements` & certifications
  - `POST /api/v1/contact` (validates name, email, message)
  - `POST /api/v1/resume/download` (track download triggers)
  - `POST /api/v1/analytics/event` (capture visitor events)
- [ ] Integrate `drf-spectacular` and verify Swagger documentation is generated successfully.
- [ ] Write API views unit tests.

**Definition of Done:**
* Django REST API layer responds to local query endpoints, validation handles edge cases correctly.

---

### Milestone 3 - Frontend Foundation & Theme
**Priority:** High | **Status:** Not Started

- [ ] Install Tailwind CSS, typography rules, and custom dark theme design tokens.
- [ ] Install UI library dependencies: shadcn/ui, Framer Motion, and Lucide Icons.
- [ ] Setup Next.js App router directories (`app/`, `components/`, `features/`, `services/`, `types/`).
- [ ] Configure global layouts, SEO metadata, and root layout structure.

**Definition of Done:**
* Frontend base layout running locally with dark mode variables active.

---

### Milestone 4 - Core UI Sections
**Priority:** High | **Status:** Not Started

- [ ] Build Header, Sticky Navigation, and Footer components.
- [ ] Build Hero Section (intro, professional titles, call-to-action buttons).
- [ ] Build About Section (expertises, professional summary cards).
- [ ] Build Experience Section (vertical interactive timeline displaying role history & impact metrics).
- [ ] Build Projects Section (featured projects grid, case study layout, links to GitHub/demo).
- [ ] Build Skills Section (categorized skill badges layout).
- [ ] Build Achievements Section (rating indicators, verified certifications grid).
- [ ] Build Resume Section (in-page document viewer + download button).
- [ ] Build Contact Form (name, email, message inputs with frontend state validation).

**Definition of Done:**
* Complete layout built responsively; sections contain accurate mock structures.

---

### Milestone 5 - Integration, Analytics & Alerts
**Priority:** High | **Status:** Not Started

- [ ] Integrate Frontend services with Backend API endpoints.
- [ ] Configure Resend service inside backend to trigger notification emails upon contact form submissions.
- [ ] Add PostHog script to frontend and implement trigger analytics events:
  - `page_view`
  - `resume_download`
  - `project_click`
  - `github_redirect`
  - `linkedin_redirect`
  - `contact_submission`
- [ ] Verify responsive overlays and mobile menu functionality.

**Definition of Done:**
* Frontend UI displays dynamic data from Backend DB, contact form fires email notifications, actions send PostHog tracking signals.

---

### Milestone 6 - Verification & Public Launch
**Priority:** High | **Status:** Not Started

- [ ] Verify keyboard tab indexing and basic accessibility (WCAG AA).
- [ ] Execute Chrome DevTools Lighthouse audit and optimize image compression (WebP/AVIF) / lazy loading to hit >90 scores.
- [ ] Deploy Next.js frontend to Vercel.
- [ ] Deploy Django backend to Render / Cloud Run.
- [ ] Provision managed production PostgreSQL instance and run migrations.
- [ ] Configure custom domain, HTTPS/SSL certificates, and execute a live smoke test.

**Definition of Done:**
* Portfolio successfully live on custom domain, end-to-end user flows fully verified.

---

### Launch Checklist

#### Technical Integrity
- [ ] Django REST endpoints stable & CORS configured.
- [ ] Production Postgres database running with automatic daily backups.
- [ ] API latencies average under 300ms.
- [ ] PostHog capturing user events.
- [ ] Resend sending alerts on contact form submissions.

#### Front-End Quality
- [ ] Mobile/Tablet navigation overlay and layout fully responsive.
- [ ] Image assets compressed to modern format.
- [ ] CSS animations smooth and performant.
- [ ] Accessibility (WCAG AA) keyboard controls verified.

#### Infrastructure & Hosting
- [ ] Next.js running on Vercel with SSL active.
- [ ] Django running on Render with SSL active.
- [ ] Custom domain connected.
- [ ] Uptime monitoring configured.

---

### Version History
* **Version 2.0 (Solo Developer)**: Simplified Task Tracker organized into 6 core execution milestones for accelerated delivery.
