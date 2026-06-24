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
    print("Starting mock database seeding based on Ganga_Resume.pdf...")
    
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
            # Languages
            {"name": "Python", "slug": "python", "category": "Languages", "icon_name": "python"},
            {"name": "C++", "slug": "cpp", "category": "Languages", "icon_name": "cpp"},
            {"name": "C", "slug": "c", "category": "Languages", "icon_name": "c"},
            {"name": "SQL", "slug": "sql", "category": "Languages", "icon_name": "sql"},
            {"name": "JavaScript", "slug": "javascript", "category": "Languages", "icon_name": "javascript"},
            
            # Agentic AI
            {"name": "LangGraph", "slug": "langgraph", "category": "Agentic AI", "icon_name": "brain"},
            {"name": "LangChain", "slug": "langchain", "category": "Agentic AI", "icon_name": "brain"},
            {"name": "OpenAI Agents SDK", "slug": "agents-sdk", "category": "Agentic AI", "icon_name": "brain"},
            {"name": "Multi-Agent Systems", "slug": "multi-agent", "category": "Agentic AI", "icon_name": "brain"},
            {"name": "RAG", "slug": "rag", "category": "Agentic AI", "icon_name": "brain"},
            
            # Knowledge Graphs
            {"name": "Neo4j", "slug": "neo4j", "category": "Knowledge Graphs", "icon_name": "database"},
            {"name": "Cypher", "slug": "cypher", "category": "Knowledge Graphs", "icon_name": "database"},
            
            # LLM Evaluation
            {"name": "RAGAS", "slug": "ragas", "category": "LLM Evaluation", "icon_name": "check"},
            {"name": "DeepEval", "slug": "deepeval", "category": "LLM Evaluation", "icon_name": "check"},
            {"name": "GEval", "slug": "geval", "category": "LLM Evaluation", "icon_name": "check"},
            
            # Backend
            {"name": "Django", "slug": "django", "category": "Backend", "icon_name": "django"},
            {"name": "REST APIs", "slug": "rest-apis", "category": "Backend", "icon_name": "server"},
            {"name": "Gradio", "slug": "gradio", "category": "Backend", "icon_name": "server"},
            
            # ML/Data
            {"name": "XGBoost", "slug": "xgboost", "category": "ML/Data", "icon_name": "cpu"},
            {"name": "LightGBM", "slug": "lightgbm", "category": "ML/Data", "icon_name": "cpu"},
            {"name": "FAISS", "slug": "faiss", "category": "ML/Data", "icon_name": "cpu"},
            {"name": "Sentence Transformers", "slug": "sentence-transformers", "category": "ML/Data", "icon_name": "cpu"},
            
            # Tools
            {"name": "Docker", "slug": "docker", "category": "Tools", "icon_name": "docker"},
            {"name": "Git", "slug": "git", "category": "Tools", "icon_name": "git"},
            {"name": "Linux", "slug": "linux", "category": "Tools", "icon_name": "linux"},
            {"name": "WSL", "slug": "wsl", "category": "Tools", "icon_name": "linux"},
            {"name": "Ollama", "slug": "ollama", "category": "Tools", "icon_name": "cpu"},
        ]
        
        tech_instances = {}
        for tech in techs_data:
            obj = Technology.objects.create(**tech)
            tech_instances[tech["slug"]] = obj
        print(f"Created {len(tech_instances)} technologies.")

        # 2. Seed Skills
        print("Seeding Skills...")
        skills_data = [
            # Languages
            {"name": "Python", "category": "languages", "years_of_experience": 4, "display_order": 1},
            {"name": "C++", "category": "languages", "years_of_experience": 3, "display_order": 2},
            {"name": "C", "category": "languages", "years_of_experience": 3, "display_order": 3},
            {"name": "SQL", "category": "languages", "years_of_experience": 3, "display_order": 4},
            {"name": "JavaScript", "category": "languages", "years_of_experience": 2, "display_order": 5},
            
            # Agentic AI
            {"name": "LangGraph", "category": "ai-engineering", "years_of_experience": 2, "display_order": 6},
            {"name": "LangChain", "category": "ai-engineering", "years_of_experience": 2, "display_order": 7},
            {"name": "OpenAI Agents SDK", "category": "ai-engineering", "years_of_experience": 1, "display_order": 8},
            {"name": "Multi-Agent Systems", "category": "ai-engineering", "years_of_experience": 2, "display_order": 9},
            {"name": "RAG", "category": "ai-engineering", "years_of_experience": 2, "display_order": 10},
            
            # LLM Evaluation
            {"name": "RAGAS", "category": "llm-evaluation", "years_of_experience": 1, "display_order": 11},
            {"name": "DeepEval", "category": "llm-evaluation", "years_of_experience": 1, "display_order": 12},
            {"name": "GEval", "category": "llm-evaluation", "years_of_experience": 1, "display_order": 13},
            
            # Knowledge Graphs
            {"name": "Neo4j", "category": "knowledge-graphs", "years_of_experience": 2, "display_order": 14},
            {"name": "Cypher", "category": "knowledge-graphs", "years_of_experience": 2, "display_order": 15},
            
            # Backend
            {"name": "Django", "category": "backend", "years_of_experience": 2, "display_order": 16},
            {"name": "REST APIs", "category": "backend", "years_of_experience": 3, "display_order": 17},
            {"name": "Gradio", "category": "backend", "years_of_experience": 1, "display_order": 18},
            
            # ML / Data
            {"name": "XGBoost", "category": "ml-data", "years_of_experience": 2, "display_order": 19},
            {"name": "LightGBM", "category": "ml-data", "years_of_experience": 2, "display_order": 20},
            {"name": "FAISS", "category": "ml-data", "years_of_experience": 1, "display_order": 21},
            {"name": "Sentence Transformers", "category": "ml-data", "years_of_experience": 1, "display_order": 22},
            
            # Infrastructure
            {"name": "Docker", "category": "infrastructure", "years_of_experience": 2, "display_order": 23},
            {"name": "Git", "category": "infrastructure", "years_of_experience": 4, "display_order": 24},
            {"name": "Linux", "category": "infrastructure", "years_of_experience": 3, "display_order": 25},
            {"name": "WSL", "category": "infrastructure", "years_of_experience": 2, "display_order": 26},
            {"name": "Ollama", "category": "infrastructure", "years_of_experience": 1, "display_order": 27},
        ]
        for skill in skills_data:
            Skill.objects.create(**skill)
        print(f"Created {len(skills_data)} skills.")

        # 3. Seed Experiences
        print("Seeding Experiences...")
        exp_data = [
            {
                "company_name": "HP Inc.",
                "role": "Software Engineer",
                "employment_type": "Full-time",
                "location": "Bangalore, India",
                "start_date": date(2024, 7, 1),
                "end_date": None,
                "currently_working": True,
                "description": "Designed and developed LangGraph-based multi-agent systems (Auto-Triage) for automated bug triage and issue routing across printer platforms. Built reusable agent and tool abstractions using AgentSDK, reducing new agent onboarding effort by 50%. Implemented LLM response validation and inference guardrails, improving prediction accuracy by 60%. Engineered structured logging and observability pipelines, improving debugging efficiency by 30%. Developed internal Gradio-based applications for log analysis, root-cause investigation, and automated team assignment. Led FleetAI — a multi-agent workflow for enterprise printer onboarding and fleet management — with multi-layer validation mechanisms for Knowledge Graph ingestion pipelines (Neo4j), improving data consistency and reliability. Developed a reusable evaluation framework integrating RAGAS, DeepEval, and traditional metrics for automated benchmarking and dashboard reporting.",
                "display_order": 1
            },
            {
                "company_name": "HP Inc.",
                "role": "R&D Intern",
                "employment_type": "Internship",
                "location": "Bangalore, India",
                "start_date": date(2024, 2, 1),
                "end_date": date(2024, 6, 30),
                "currently_working": False,
                "description": "Contributed to the Ecosystem Triage Framework using Python, HTML, and CSS. Developed automation workflows and backend components for internal engineering tools.",
                "display_order": 2
            }
        ]
        
        # Mapping technologies to experiences
        exp_instances = []
        for exp in exp_data:
            obj = Experience.objects.create(**exp)
            exp_instances.append((obj, exp["company_name"], exp["role"]))
            
        # Add mapped techs to Experience 1 (Software Engineer)
        exp_instances[0][0].technologies.add(
            tech_instances["langgraph"],
            tech_instances["agents-sdk"],
            tech_instances["neo4j"],
            tech_instances["ragas"],
            tech_instances["python"],
            tech_instances["django"],
            tech_instances["rest-apis"],
            tech_instances["gradio"],
            tech_instances["deepeval"]
        )
        # Add mapped techs to Experience 2 (Intern)
        exp_instances[1][0].technologies.add(
            tech_instances["python"],
            tech_instances["git"]
        )
        print(f"Created {len(exp_data)} experience entries.")

        # 4. Seed Projects & Metrics
        print("Seeding Projects & Metrics...")
        projects_data = [
            {
                "title": "Auto-Triage — Bug Triage Multi-Agent System",
                "slug": "auto-triage",
                "short_description": "LangGraph-based multi-agent system for automated bug triage and issue routing across printer platforms at HP Inc. Includes reusable agent/tool abstractions via AgentSDK, LLM guardrails, and Gradio-based log analysis applications.",
                "full_description": "## Overview\nAuto-Triage is a production-grade multi-agent platform designed to automate bug triage, categorization, and routing at HP Inc.\n\n## Architecture\n- Built reusable agent and tool abstractions using OpenAI Agents SDK (AgentSDK).\n- Developed structured logging and observability pipelines to monitor LLM decisions.\n- Implemented response validation guardrails to prevent hallucination.",
                "github_url": "https://github.com/GangSagar",
                "live_url": None,
                "featured": True,
                "display_order": 1,
                "techs": ["langgraph", "agents-sdk", "python", "gradio"],
                "metrics": [
                    {"metric_name": "Prediction Accuracy", "metric_value": "+60%"},
                    {"metric_name": "Onboarding Effort", "metric_value": "-50%"}
                ]
            },
            {
                "title": "FleetAI — Enterprise Printer Management",
                "slug": "fleet-ai",
                "short_description": "LangGraph multi-agent workflow for enterprise printer onboarding and fleet management at HP Inc. Features multi-layer Knowledge Graph ingestion validation, backend APIs bridging AI agents and frontend, and a reusable RAGAS/DeepEval evaluation framework.",
                "full_description": "## Overview\nFleetAI scales printer fleet management using multi-agent systems and Knowledge Graphs.\n\n## Key Deliverables\n- Structured ingestion pipeline utilizing Neo4j Knowledge Graphs.\n- API routing via Django and Django REST Framework.\n- Automatic scoring of prompt updates with RAGAS and DeepEval.",
                "github_url": "https://github.com/GangSagar",
                "live_url": None,
                "featured": True,
                "display_order": 2,
                "techs": ["langgraph", "neo4j", "ragas", "deepeval", "django"],
                "metrics": [
                    {"metric_name": "Data Consistency", "metric_value": "+High"},
                    {"metric_name": "Debugging Efficiency", "metric_value": "+30%"}
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
                "title": "Codeforces Specialist — Max Rating 1418",
                "description": "Reached Specialist rank on Codeforces with a max rating of 1418 under handle HRN_Harshit, competing in algorithmic programming contests.",
                "achievement_type": "Competitive Coding",
                "external_url": "https://codeforces.com/profile/HRN_Harshit",
                "display_order": 1
            },
            {
                "title": "CodeChef 3-Star Programmer — Max Rating 1666",
                "description": "Achieved 3-star rating on CodeChef with a peak rating of 1666 under handle hars_02, demonstrating consistent competitive programming performance.",
                "achievement_type": "Competitive Coding",
                "external_url": "https://www.codechef.com/users/hars_02",
                "display_order": 2
            },
            {
                "title": "1000+ DSA Problems Solved",
                "description": "Solved over 1000 Data Structures & Algorithms problems across LeetCode, Codeforces, CodeChef, GeeksforGeeks, and HackerRank.",
                "achievement_type": "Problem Solving",
                "external_url": "https://leetcode.com",
                "display_order": 3
            }
        ]
        for ach in ach_data:
            Achievement.objects.create(**ach)
            
        print("Seeding achievements complete. No certifications issuing recorded.")

        # 6. Seed Social Links & Site Config
        print("Seeding Social Links & Site Configuration...")
        socials = [
            {"platform": "github", "url": "https://github.com/GangSagar", "icon_name": None, "display_order": 1},
            {"platform": "linkedin", "url": "https://linkedin.com/in/ganga-sagar", "icon_name": None, "display_order": 2},
            {"platform": "mail", "url": "mailto:hrnharshit@gmail.com", "icon_name": None, "display_order": 3},
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

    print("Mock database seeding completed successfully based on resume data!")

if __name__ == "__main__":
    seed_data()
