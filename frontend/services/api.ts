import { Project, Experience, Skill, Achievement, Certification, SocialLink } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `API Error: ${response.status}`);
  }

  // Handle HTTP 204 No Content
  if (response.status === 204) {
    return {} as T;
  }

  const payload = await response.json();
  // Standard success envelope wraps data in "data"
  return payload.data as T;
}

export async function fetchProjects(featured?: boolean): Promise<Project[]> {
  const query = featured !== undefined ? `?featured=${featured}` : "";
  return apiFetch<Project[]>(`/projects/${query}`);
}

export async function fetchProjectBySlug(slug: string): Promise<Project> {
  return apiFetch<Project>(`/projects/${slug}/`);
}

export async function fetchExperiences(): Promise<Experience[]> {
  return apiFetch<Experience[]>("/experience/");
}

export async function fetchSkills(category?: string): Promise<Skill[]> {
  const query = category ? `?category=${category}` : "";
  return apiFetch<Skill[]>(`/skills/${query}`);
}

export async function fetchAchievements(): Promise<Achievement[]> {
  return apiFetch<Achievement[]>("/achievements/");
}

export async function fetchCertifications(): Promise<Certification[]> {
  return apiFetch<Certification[]>("/certifications/");
}

export async function fetchSocialLinks(): Promise<SocialLink[]> {
  return apiFetch<SocialLink[]>("/social-links/");
}

export async function submitContactMessage(name: string, email: string, message: string): Promise<any> {
  return apiFetch<any>("/contact/", {
    method: "POST",
    body: JSON.stringify({ name, email, message }),
  });
}

export async function trackResumeDownload(sessionId?: string): Promise<any> {
  return apiFetch<any>("/resume/download/", {
    method: "POST",
    body: JSON.stringify({ session_id: sessionId || "web-visitor" }),
  });
}

export async function trackAnalyticsEvent(
  eventName: string,
  page: string,
  metadata: Record<string, any> = {}
): Promise<any> {
  return apiFetch<any>("/analytics/event/", {
    method: "POST",
    body: JSON.stringify({ event_name: eventName, page, metadata }),
  });
}
