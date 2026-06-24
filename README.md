# Ganga Portfolio Platform

A modern, highly performant personal branding platform showcasing AI Engineering, Backend Development, Multi-Agent Systems, and System Architecture.

## Architecture

- **Frontend**: Next.js 15 (App Router, Tailwind CSS, shadcn/ui, Framer Motion)
- **Backend**: Django REST Framework
- **Database**: PostgreSQL
- **Analytics**: PostHog
- **Email Service**: Resend

## Prerequisites

- Node.js >= 18
- pnpm (or npm/yarn) for frontend dependencies
- Python 3.11+ and `poetry` for backend dependencies
- Docker & Docker Compose (optional, for local development)
- PostgreSQL instance (local or remote)

## Getting Started

### Frontend

```bash
cd frontend
pnpm install
pnpm dev   # runs the dev server at http://localhost:3000
```

### Backend

```bash
cd backend
poetry install
cp .env.example .env   # configure DB connection, PostHog, Resend keys
poetry run python manage.py migrate
poetry run python manage.py runserver   # runs at http://localhost:8000
```

## Deployment

### Frontend (Vercel)

1. Push your code to GitHub (already done).
2. In Vercel, import the repository and select the `frontend` directory as the root.
3. Set the build command `pnpm install && pnpm build` and the output directory `app/.next`.
4. Add environment variables (e.g., `NEXT_PUBLIC_API_URL`) matching your backend URL.
5. Deploy – Vercel will handle caching, CDN, and SSL automatically.

### Backend (Render / Railway / Fly.io)

You can deploy the Django backend with any container platform. Below is a Docker‑based example using Render:

1. Create a `Dockerfile` in `backend/` (already present) that installs dependencies and runs `gunicorn`.
2. In Render, create a new **Web Service** and link to the repository.
3. Set the **Root Directory** to `backend` and the **Start Command** to `gunicorn backend.wsgi:application --bind 0.0.0.0:10000`.
4. Add environment variables:
   - `DATABASE_URL` (PostgreSQL connection string)
   - `POSTHOG_API_KEY`
   - `RESEND_API_KEY`
5. Deploy – Render will build the image and expose it at a public URL.

Alternatively, you can use Docker Compose locally and push to any cloud provider:

```bash
docker compose -f docker-compose.yml up -d
```

### Database

- For production, provision a managed PostgreSQL instance (e.g., Supabase, Railway, Render).
- Apply migrations with `poetry run python manage.py migrate`.

## Contributing

Feel free to open issues or submit pull requests. Follow the contribution guidelines in `CONTRIBUTING.md`.

## License

MIT License.
