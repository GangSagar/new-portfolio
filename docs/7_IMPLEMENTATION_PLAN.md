# Implementation Plan (Solo Developer Edition)
## Ganga Portfolio Platform

---

### 1. Purpose
This document defines a simplified, high-speed execution roadmap for the Portfolio Platform. It is optimized for a single developer to build and launch a production-ready personal branding platform ASAP, with minimal administrative and process overhead.

---

### 2. Development Strategy
* **Direct Path to Production:** Skip complex branch policies and Scrum sprint overhead. Commit directly or use simple feature branches.
* **MVP-First Core Scope:** Build the critical, high-impact features (experience timeline, featured projects, contact form, resume tracking) before looking at future expansion.
* **Simpler Local Setup:** Develop directly using `npm run dev` and `python manage.py runserver`. Defer Docker containerization tuning to the final deployment stage.
* **Linear Execution:** Focus on completing one milestone at a time to maintain momentum.

---

### 3. Consolidated Milestones & Timeline
* **Target Total Duration:** 7 - 10 Days

| Milestone | Description | Est. Duration | Key Deliverables |
| :--- | :--- | :--- | :--- |
| **Milestone 1** | Project & Database Setup | Day 1 | Frontend (Next.js) & Backend (Django) init, PostgreSQL connected, local mock data seed script. |
| **Milestone 2** | Backend API Layer | Day 2 - 3 | Django models (Projects, Experience, Skills, Achievements, Certifications, Contact, Analytics), views & serializers, health check. |
| **Milestone 3** | Frontend Foundation & Theme | Day 4 | Next.js layout, Tailwind, shadcn/ui installation, global styling, dark mode tokens. |
| **Milestone 4** | Core UI Sections | Day 5 - 6 | Hero, About, Experience Timeline, Projects Grid, Skills layout, Achievements, Resume preview & download. |
| **Milestone 5** | Integration, Analytics & Alerts | Day 7 | Contact form POST integration, Resend email alerts, PostHog tracker script, and Client-to-API connection. |
| **Milestone 6** | Verification & Public Launch | Day 8 | Uptime & responsiveness checks, Next.js deployed on Vercel, Django/Postgres on Render/similar, custom domain & SSL. |

---

### 4. Milestone Checklist

#### Milestone 1 - Project & Database Setup
- [ ] Initialize repository (README, simple gitignore, main/dev branches).
- [ ] Initialize Next.js 15 frontend application in `frontend/`.
- [ ] Initialize Django REST Framework backend in `backend/`.
- [ ] Configure local PostgreSQL database.
- [ ] Create and run initial seed scripts for mock database entries.

#### Milestone 2 - Backend API Layer
- [ ] Create Django models (using UUID primary keys, audit fields, soft-delete flags) as defined in [5_SCHEMA.md](file:///home/harshit/Desktop/Projects/Portfolio/docs/5_SCHEMA.md).
- [ ] Apply migrations and verify schema.
- [ ] Implement DRF serializers and views for:
  - Projects (`GET /api/v1/projects`, `GET /api/v1/projects/{slug}`)
  - Experience (`GET /api/v1/experience`)
  - Skills (`GET /api/v1/skills`)
  - Achievements (`GET /api/v1/achievements` & certifications)
  - Contact Messages (`POST /api/v1/contact` with validation)
  - Resume Downloads (`POST /api/v1/resume/download` to track downloads)
  - Analytics (`POST /api/v1/analytics/event`)
- [ ] Generate OpenAPI/Swagger interactive docs via `drf-spectacular`.

#### Milestone 3 - Frontend Foundation & Theme
- [ ] Configure Tailwind CSS, typography, and dark theme design tokens.
- [ ] Install shadcn/ui components, Lucide icons, and Framer Motion.
- [ ] Setup Next.js global layout, App routing, and base styling variables.

#### Milestone 4 - Core UI Sections
- [ ] Build Header, Sticky Navigation, and Footer components.
- [ ] Build Hero Section (intro, professional titles, quick action buttons).
- [ ] Build About Section (expertises, professional summary cards).
- [ ] Build Experience Section (interactive vertical timeline showing role history & impact metrics).
- [ ] Build Projects Grid (featured card details, slug page views, links to GitHub/demo).
- [ ] Build Skills Section (categorized skill badges).
- [ ] Build Achievements Section (ratings, certifications).
- [ ] Build Resume Section (in-page preview + download action).
- [ ] Build Contact Form (input fields with frontend validation).

#### Milestone 5 - Integration, Analytics & Alerts
- [ ] Connect frontend services to Django REST endpoints.
- [ ] Wire up contact form to Django API; configure Resend service to send alert email on submission.
- [ ] Integrate PostHog script to automatically track page views, project clickouts, and resume downloads.
- [ ] Setup responsive navigation overlay for mobile viewports.

#### Milestone 6 - Verification & Public Launch
- [ ] Verify keyboard tab indexing and basic accessibility (WCAG AA).
- [ ] Run Lighthouse performance audit (optimize images to WebP/AVIF, lazy-load components to hit >90 score).
- [ ] Deploy Next.js frontend to Vercel (Edge network).
- [ ] Deploy Django backend to Render / Cloud Run.
- [ ] Provision managed PostgreSQL instance.
- [ ] Configure custom domain, HTTPS/SSL, and run a full smoke-test of the contact form and downloads tracking.

---

### 5. Definition of Done (Solo Dev)
A feature/task is complete when:
- [ ] Code is fully functional and formatted correctly (ESLint/Prettier and Black/Ruff).
- [ ] Feature is visually verified on Chrome, Safari, and Mobile Viewports.
- [ ] APIs return correct envelope response structures.
- [ ] Basic unit tests pass.
- [ ] Code is merged directly to `main` and deployed to the staging/production server.

---

### 6. Risk Management
* **Feature Creep:** Strictly focus on the MVP. Postpone CMS admin dashboard additions or interactive knowledge graph canvas widgets to v2.0.
* **Complex UI Layouts:** Rely on shadcn/ui blocks and Framer Motion presets rather than building complex UI animations from scratch.
* **Deployment Issues:** Setup Next.js on Vercel and Django on Render early (with skeleton builds) to catch environment variable or CORS errors immediately.

---

### Version History
* **Version 2.0 (Solo Developer)**: Simplified execution roadmap, removing sprints, docker-compose complexity, and team processes for an accelerated ASAP launch.
