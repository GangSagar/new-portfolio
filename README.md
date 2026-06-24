# Ganga Portfolio Platform

A modern, highly performant personal branding portfolio showcasing backend engineering, AI systems development, and clean architecture.

---

## 🚀 Live Deployments

* **Frontend (Vercel)**: [https://new-portfolio-five-lilac.vercel.app/](https://new-portfolio-five-lilac.vercel.app/)
* **Backend API (Render)**: [https://new-portfolio-m504.onrender.com](https://new-portfolio-m504.onrender.com)
* **Database (Neon)**: Managed Serverless PostgreSQL (AWS Region)

---

## 🛠️ Architecture & Tech Stack

| Layer               | Technology                                                                  | Purpose                                                                            |
| :------------------ | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| **Frontend**  | Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion | Dynamic UI, dark mode styling, custom animation, responsive layouts                |
| **Backend**   | Django, Django REST Framework (DRF)                                         | Core API, contact message processing, resume tracking, standard payload envelopes  |
| **Database**  | PostgreSQL (Neon)                                                           | Persistence layer for projects, experience timeline, skills, and analytics         |
| **Email API** | Resend SMTP                                                                 | Automated email alerts on visitor contact form submissions                         |
| **Analytics** | PostHog                                                                     | Client-side and server-side visitor action tracking (downloads, redirects, clicks) |


## 💻 Local Development

### 1. Backend Setup

1. Navigate to `/backend`:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure local environment variables in a `.env` file (see `.env.example`):
   ```ini
   DEBUG=True
   SECRET_KEY=local-development-key
   DATABASE_NAME=ganga_portfolio
   DATABASE_USER=admin
   DATABASE_PASSWORD=password123
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   ```
5. Apply migrations and seed the database:
   ```bash
   python manage.py migrate
   python manage.py shell -c "from scripts.seed import seed_data; seed_data()"
   ```
6. Start the server:
   ```bash
   python manage.py runserver
   ```

### 2. Frontend Setup

1. Navigate to `/frontend`:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a local `.env` file containing:
   ```ini
   NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
   NEXT_PUBLIC_RESUME_DRIVE_ID=1V6AEZzaX7hX-RVriYVQ6k0EPA_tMvMJV
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## 🌐 Production Deployment

### Frontend (Vercel)

1. Import the repository in Vercel.
2. Set the **Root Directory** to `frontend`.
3. Configure the environment variables:
   - `NEXT_PUBLIC_API_URL`: Points to your Render backend API.
   - `NEXT_PUBLIC_RESUME_DRIVE_ID`: Your Google Drive resume PDF file ID.
4. Deploy the project.

### Backend (Render + Neon)

1. Deploy a managed Serverless PostgreSQL database on **Neon** and retrieve the connection URL.
2. In **Render**, create a new **Web Service** from your repository.
3. Configure the build and start options:
   - **Runtime**: `Python`
   - **Build Command**: `pip install -r backend/requirements.txt && python backend/manage.py collectstatic --noinput && python backend/manage.py migrate`
   - **Start Command**: `gunicorn --chdir backend config.wsgi:application`
4. Add the environment variables:
   - `DATABASE_URL`: Connection string from Neon.
   - `DEBUG`: `False`
   - `ALLOWED_HOSTS`: `*`
   - `CORS_ALLOWED_ORIGINS`: Your Vercel domain URL.
   - `SECRET_KEY`: A secure production key.
   - `RESEND_API_KEY`: SMTP authorization key.
   - `NOTIFY_EMAIL`: Destination email for alerts.
5. Save and deploy. Populate the database by running `python backend/manage.py shell -c "from scripts.seed import seed_data; seed_data()"` via Render's Web Shell.
