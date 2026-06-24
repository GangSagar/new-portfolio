#!/usr/bin/env python
import os
import sys
from datetime import date

# Set up Django environment
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

import django
django.setup()

from django.db import transaction
from apps.core.models import SocialLink, SiteConfiguration
from apps.projects.models import Technology, Project, ProjectMetric
from apps.skills.models import Skill
from apps.experience.models import Experience
from apps.achievements.models import Achievement, Certification

def seed_data():
    print("Starting mock database seeding...")
    
    with transaction.atomic():
        # Clear existing data
        print("Clearing existing data...")
        SocialLink.all_objects.all().delete()
        SiteConfiguration.all_objects.all().delete()
        ProjectMetric.objects.all().delete()
        Project.all_objects.all().delete()
        Technology.all_objects.all().delete()
        Skill.all_objects.all().delete()
        Experience.all_objects.all().delete()
        Achievement.all_objects.all().delete()
        Certification.all_objects.all().delete()

        # 1. Seed Technologies
        print("Seeding Technologies...")
        techs_data = [
            {"name": "Python", "slug": "python", "category": "Languages", "icon_name": "python"},
            {"name": "TypeScript", "slug": "typescript", "category": "Languages", "icon_name": "typescript"},
            {"name": "Django", "slug": "django", "category": "Backend", "icon_name": "django"},
            {"name": "Next.js", "slug": "nextjs", "category": "Frontend", "icon_name": "nextjs"},
            {"name": "PostgreSQL", "slug": "postgresql", "category": "Databases", "icon_name": "postgresql"},
            {"name": "LangGraph", "slug": "langgraph", "category": "AI/Agentic", "icon_name": "brain"},
        ]
        tech_instances = {}
        for tech in techs_data:
            obj = Technology.objects.create(**tech)
            tech_instances[tech["slug"]] = obj
        print(f"Created {len(tech_instances)} technologies.")

        # 2. Seed Skills
        print("Seeding Skills...")
        skills_data = [
            {"name": "AI Engineering", "category": "ai-engineering", "icon_name": "brain", "years_of_experience": 2, "display_order": 1},
            {"name": "Backend Development", "category": "backend", "icon_name": "server", "years_of_experience": 3, "display_order": 2},
            {"name": "Multi-Agent Systems", "category": "ai-engineering", "icon_name": "cpu", "years_of_experience": 1, "display_order": 3},
            {"name": "PostgreSQL", "category": "databases", "icon_name": "database", "years_of_experience": 3, "display_order": 4},
        ]
        for skill in skills_data:
            Skill.objects.create(**skill)
        print(f"Created {len(skills_data)} skills.")

        # 3. Seed Experiences
        print("Seeding Experiences...")
        exp_data = [
            {
                "company_name": "HP",
                "role": "Software Engineer",
                "employment_type": "Full-Time",
                "location": "Bangalore, India",
                "start_date": date(2024, 1, 1),
                "end_date": None,
                "currently_working": True,
                "description": "Building and scaling robust enterprise APIs and microservices. Integrated advanced caching and logging systems.",
                "display_order": 1
            },
            {
                "company_name": "HP",
                "role": "Software Engineer Intern",
                "employment_type": "Internship",
                "location": "Bangalore, India",
                "start_date": date(2023, 6, 1),
                "end_date": date(2023, 12, 31),
                "currently_working": False,
                "description": "Developed backend features using Django. Optimized slow DB queries, improving latency by 40%.",
                "display_order": 2
            }
        ]
        for exp in exp_data:
            obj = Experience.objects.create(**exp)
            # Map default technologies
            obj.technologies.add(tech_instances["python"], tech_instances["django"], tech_instances["postgresql"])
        print(f"Created {len(exp_data)} experience entries.")

        # 4. Seed Projects & Metrics
        print("Seeding Projects & Metrics...")
        projects_data = [
            {
                "title": "Chess Analyzer AI",
                "slug": "chess-analyzer-ai",
                "short_description": "An AI-powered chess engine analyst utilizing neural networks and search tree visualization.",
                "full_description": "## Overview\nA comprehensive web platform that integrates chess engine analysis with interactive visual explainers.\n\n## Architecture\n- Python backend for engine interface\n- Next.js frontend with SVG tree rendering",
                "github_url": "https://github.com/example/chess-analyzer",
                "live_url": "https://chess-analyzer.example.com",
                "featured": True,
                "display_order": 1,
                "techs": ["python", "nextjs", "postgresql"],
                "metrics": [
                    {"metric_name": "Analysis Latency", "metric_value": "< 150ms"},
                    {"metric_name": "User Base", "metric_value": "10k+ MAU"}
                ]
            }
        ]
        for proj in projects_data:
            techs = proj.pop("techs")
            metrics = proj.pop("metrics")
            obj = Project.objects.create(**proj)
            for t in techs:
                obj.technologies.add(tech_instances[t])
            for m in metrics:
                ProjectMetric.objects.create(project=obj, **m)
        print(f"Created {len(projects_data)} projects.")

        # 5. Seed Achievements & Certifications
        print("Seeding Achievements & Certifications...")
        ach_data = [
            {
                "title": "Expert on Codeforces",
                "description": "Reached peak rating of 1650+ on Codeforces platform.",
                "achievement_type": "Competitive Coding",
                "external_url": "https://codeforces.com",
                "display_order": 1
            }
        ]
        for ach in ach_data:
            Achievement.objects.create(**ach)
            
        cert_data = [
            {
                "name": "AWS Certified Solutions Architect",
                "issuer": "Amazon Web Services",
                "issue_date": date(2023, 5, 15),
                "certificate_url": "https://aws.amazon.com",
                "display_order": 1
            }
        ]
        for cert in cert_data:
            Certification.objects.create(**cert)
        print("Seeding achievements and certifications complete.")

        # 6. Seed Social Links & Site Config
        print("Seeding Social Links & Site Configuration...")
        socials = [
            {"platform": "GitHub", "url": "https://github.com", "icon_name": "github", "display_order": 1},
            {"platform": "LinkedIn", "url": "https://linkedin.com", "icon_name": "linkedin", "display_order": 2},
        ]
        for social in socials:
            SocialLink.objects.create(**social)

        configs = [
            {"config_key": "WELCOME_TEXT", "config_value": "Welcome to my engineering portfolio!"},
            {"config_key": "HERO_SUBTITLE", "config_value": "Specializing in AI Engineering, Agentic Workflows, and Scalable Backend Systems."},
        ]
        for cfg in configs:
            SiteConfiguration.objects.create(**cfg)
        print("Seeding social links and site config complete.")

    print("Mock database seeding completed successfully!")

if __name__ == "__main__":
    seed_data()
