export interface Technology {
  id: string;
  name: string;
  slug: string;
  icon_name: string | null;
  category: string;
}

export interface ProjectMetric {
  metric_name: string;
  metric_value: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  github_url: string | null;
  live_url: string | null;
  thumbnail_url: string | null;
  featured: boolean;
  display_order: number;
  status: string;
  technologies: Technology[];
  metrics: ProjectMetric[];
  created_at: string;
  updated_at: string;
}

export interface Experience {
  id: string;
  company_name: string;
  role: string;
  employment_type: string;
  location: string | null;
  start_date: string;
  end_date: string | null;
  currently_working: boolean;
  description: string;
  display_order: number;
  technologies: Technology[];
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  icon_name: string | null;
  years_of_experience: number;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string | null;
  achievement_type: string;
  external_url: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issue_date: string;
  certificate_url: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon_name: string | null;
  display_order: number;
}
