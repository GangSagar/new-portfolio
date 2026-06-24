# Application Flow Document
## Ganga Portfolio Platform

---

### 1. Purpose
This document defines the user journeys, navigation structure, page interactions, business flows, event tracking, and recruiter experience throughout the portfolio application.

The goal is to create a seamless experience that helps visitors quickly understand:
* Who Ganga is
* What problems he solves
* His engineering expertise
* Project impact
* How to contact him

---

### 2. Primary User Types

* **Recruiter**
  * **Goals:** Understand profile quickly, download resume, contact candidate.
* **Hiring Manager**
  * **Goals:** Evaluate technical depth, review projects, assess architecture skills.
* **Engineering Leader**
  * **Goals:** Assess engineering maturity, understand business impact, evaluate system design thinking.
* **Collaborator**
  * **Goals:** Review projects, explore GitHub, contact for opportunities.

---

### 3. Global Navigation Flow
The global navigation allows seamless transitions between the landing page and all key sections.

```mermaid
graph TD
    Landing[Landing Page] --> About[About Section]
    Landing --> Exp[Experience Section]
    Landing --> Proj[Projects Section]
    Landing --> Arch[Architecture Showcase]
    Landing --> Skills[Skills Section]
    Landing --> Achievements[Achievements]
    Landing --> Resume[Resume Section]
    Landing --> Contact[Contact Section]
```

---

### 4. Homepage Flow
Expected Outcome: Visitor understands profile within 60 seconds.

```mermaid
flowchart TD
    Visitor([Visitor]) --> Landing[Landing Page]
    Landing --> Hero[Hero Section]
    Hero --> About[About Section]
    About --> Exp[Experience Section]
    Exp --> Proj[Projects Section]
    Proj --> Arch[Architecture Showcase]
    Arch --> Skills[Skills Section]
    Skills --> Achievements[Achievements Section]
    Achievements --> Resume[Resume Section]
    Resume --> Contact[Contact Section]
```

---

### 5. Hero Section Flow
```mermaid
flowchart TD
    Visitor([Visitor]) --> Hero[Reads Introduction]
    Hero --> Choose{Chooses Action}
    Choose --> |Click| Proj[View Projects]
    Choose --> |Click| Resume[Download Resume]
    Choose --> |Redirect| GitHub[Visit GitHub]
    Choose --> |Redirect| LinkedIn[Visit LinkedIn]
    Choose --> |Scroll| Contact[Contact Form]
```

**Tracked Events:**
* `hero_cta_click`
* `resume_download`
* `github_redirect`
* `linkedin_redirect`

---

### 6. About Section Flow
```mermaid
flowchart TD
    Visitor([Visitor]) --> Read[Reads Summary]
    Read --> View[Views Core Expertise]
```

**Core Expertise Areas:**
* AI Engineering
* Multi-Agent Systems
* Backend Development
* Knowledge Graphs
* Competitive Programming

*Outcome: Visitor understands the candidate's specialization.*

---

### 7. Experience Flow
```mermaid
flowchart TD
    Visitor([Visitor]) --> Timeline[Scroll Timeline]
    Timeline --> Select[Select Entry]
    Select --> Impact[Read Impact Metrics]
```

**Entries:**
* HP Intern &rarr; HP Software Engineer
* *Outcome: Visitor understands career progression.*

---

### 8. Projects Flow
```mermaid
flowchart TD
    Visitor([Visitor]) --> Grid[Browse Projects Grid]
    Grid --> Select[Select Project]
    Select --> Detail[Project Detail View]
    Detail --> Action{User Action}
    Action --> Case[Read Case Study]
    Action --> GH[Open GitHub]
    Action --> Demo[Open Live Demo]
```

**Tracked Events:**
* `project_click`
* `github_project_click`
* `demo_click`

---

### 9. Project Detail Flow
Sections:
```mermaid
flowchart LR
    Overview[Overview] --> Problem[Problem Statement] --> Arch[Architecture] --> Impl[Implementation] --> Results[Results & Impact]
```
*Outcome: Visitor understands specific engineering capabilities and problem-solving depth.*

---

### 10. Architecture Showcase Flow
```mermaid
flowchart TD
    Visitor([Visitor]) --> Section[Architecture Section]
    Section --> Select[Select Card]
    Select --> Zoom[Expand/Open Diagram]
    Zoom --> Read[View Detailed Explanation]
```

**Showcase Options:**
* Multi-Agent Architecture
* Knowledge Graph Pipeline
* Evaluation Framework
* Backend System Design

*Outcome: Demonstrates system architecture thinking.*

---

### 11. Skills Flow
```mermaid
flowchart TD
    Visitor([Visitor]) --> Skills[Skills Section]
    Skills --> Category{Filter Category}
    Category --> AI[AI Engineering]
    Category --> Backend[Backend]
    Category --> DB[Databases]
    Category --> Infra[Infrastructure]
    Category --> Eval[Evaluation]
    Category --> Views[Views Tech Stack & Badges]
```
*Outcome: Quick skill assessment.*

---

### 12. Achievement Flow
```mermaid
flowchart TD
    Visitor([Visitor]) --> Achievements[Achievements Section]
    Achievements --> External[View External Profiles]
```

**Displayed Achievements:**
* Codeforces / CodeChef Ratings
* DSA Statistics
* Certifications

**Tracked Event:** `achievement_click`

---

### 13. Resume Flow
```mermaid
flowchart TD
    Visitor([Visitor]) --> Section[Resume Section]
    Section --> Click[Click Download]
    Click --> System[Track Event]
    System --> Download[Download PDF File]
```

**Tracked Event:** `resume_download`  
*Outcome: Recruiter successfully obtains resume.*

---

### 14. Contact Flow
```mermaid
flowchart TD
    Visitor([Visitor]) --> Form[Contact Form]
    Form --> Fill[Name, Email, Message]
    Fill --> Submit[Submit Form]
    Submit --> ValF[Frontend Validation]
    ValF --> |Pass| ValB[Backend Validation]
    ValB --> |Pass| Store[Store Message in DB]
    Store --> Notify[Send Email Notification]
    Notify --> Success[Show Success Message]
```

**Tracked Event:** `contact_submission`

---

### 15. Contact Error Flow
```mermaid
flowchart TD
    Submit[Submit Form] --> Fail[Validation Fails]
    Fail --> Show[Show Inline Errors]
    Show --> Correct[Correct Information]
    Correct --> Resubmit[Resubmit Form]
```

---

### 16. GitHub Redirect Flow
```mermaid
flowchart TD
    Visitor([Visitor]) --> Target{Source Link}
    Target --> |Project Card| GHBtn[GitHub Button]
    Target --> |Hero CTA| GHBtn
    GHBtn --> Track[Track Event]
    Track --> Redirect[Open GitHub Profile/Repo]
```

---

### 17. LinkedIn Redirect Flow
```mermaid
flowchart TD
    Visitor([Visitor]) --> LIBtn[LinkedIn Button]
    LIBtn --> Track[Track Event]
    Track --> Redirect[Open LinkedIn Profile]
```

---

### 18. Mobile User Flow
```mermaid
flowchart TD
    Visitor([Mobile Visitor]) --> Open[Open Site]
    Open --> Nav[Mobile Navigation Menu]
    Nav --> Scroll[Scroll & Read Sections]
    Scroll --> CTA[Resume Download / Contact]
```
*Requirement: All layouts and flows must support mobile devices seamlessly.*

---

### 19. Analytics Flow
```mermaid
flowchart LR
    Action[User Action] --> Event[Frontend Event] --> API[Backend API] --> Service[Analytics Service]
```

**Supported Tracking Events:**
* `page_view`
* `resume_download`
* `project_click`
* `github_redirect`
* `linkedin_redirect`
* `contact_submission`

---

### 20. Page Flow Diagram
```mermaid
graph TD
    Home[Landing Page]
    Home --> About[About]
    Home --> Exp[Experience]
    Home --> Proj[Projects]
    Proj --> Details[Project Details Page]
    Home --> Arch[Architecture Showcase]
    Home --> Skills[Skills]
    Home --> Ach[Achievements]
    Home --> Res[Resume]
    Home --> Contact[Contact]
```

---

### 21. Recruiter Happy Path
```mermaid
flowchart TD
    Landing[Landing Page] --> About[Read About] --> Exp[Review Experience] --> Proj[Verify Projects] --> Download[Download Resume] --> Contact[Submit Contact Form]
```
*Success Outcome: Recruiter schedules an interview.*

---

### 22. Hiring Manager Happy Path
```mermaid
flowchart TD
    Landing[Landing Page] --> Proj[Browse Projects] --> Arch[Verify Architecture Showcase] --> Exp[Review Experience] --> GH[Inspect GitHub Repos]
```
*Success Outcome: Technical evaluation completed.*

---

### 23. Conversion Funnel
```mermaid
graph TD
    Landing[Landing Page Visits]
    Landing --> Exp[Experience & Project Views]
    Exp --> Action{Conversions}
    Action --> |Primary| Contact[Contact Submission]
    Action --> |Secondary| Resume[Resume Download]
```

---

### 24. Future Flows

#### Portfolio AI Assistant
```mermaid
flowchart LR
    Visitor([Visitor]) --> Ask[Ask Question] --> Bot[AI Assistant] --> KB[Query Resume KB]
```

#### Interactive Architecture Explorer
```mermaid
flowchart LR
    Visitor([Visitor]) --> Open[Open Diagram] --> Zoom[Zoom & Interact] --> Expand[Expand Components]
```

#### CMS Content Management
```mermaid
flowchart LR
    Admin[Admin] --> Update[Update Content] --> Publish[Publish Changes]
```

---

### 25. Flow Validation Checklist
- [ ] Navigation Accessible
- [ ] Resume Download Works
- [ ] GitHub Links Work
- [ ] LinkedIn Links Work
- [ ] Contact Form Works
- [ ] Mobile Navigation Works
- [ ] Analytics Tracking Works
- [ ] Project Pages Accessible
- [ ] Architecture Showcase Accessible
- [ ] All CTAs Tracked

---

### Version History
* **Version 1.0**: Initial Application Flow Design
