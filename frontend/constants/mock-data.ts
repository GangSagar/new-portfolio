import { Project, Experience, Skill, Achievement, Certification, SocialLink } from "@/types";

export const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Chess Notes",
    slug: "chess-notes",
    short_description: "An interactive, web-based chess study application allowing users to set up custom positions, analyze moves, write annotated markdown notes, and visualize variations side-by-side.",
    full_description: "## Overview\nChess Notes is a specialized web application designed for chess players, coaches, and students to document their chess studies, analyze openings, and annotate complex endgames.\n\n## Key Features\n- **Interactive Chessboards**: Multi-board setup for side-by-side variation analysis.\n- **Move Annotation**: Integrated with Chess.js for valid move validation and PGN annotation.\n- **Markdown Notes**: Rich text editing for move-by-move annotation and positional insights.\n- **Position Export**: Export/import positions via FEN/PGN notations.",
    github_url: "https://github.com/GangSagar/Chess-Notes",
    live_url: null,
    thumbnail_url: null,
    featured: true,
    display_order: 1,
    status: "completed",
    technologies: [
      { id: "101", name: "TypeScript", slug: "typescript", icon_name: null, category: "languages" },
      { id: "102", name: "JavaScript", slug: "javascript", icon_name: null, category: "languages" },
      { id: "103", name: "Next.js", slug: "nextjs", icon_name: null, category: "frontend" }
    ],
    metrics: [
      { metric_name: "Move Validation", metric_value: "Real-time" },
      { metric_name: "Export Format", metric_value: "FEN/PGN" }
    ],
    created_at: "",
    updated_at: ""
  }
];

export const defaultExperiences: Experience[] = [
  {
    id: "1",
    company_name: "HP Inc.",
    role: "Software Engineer",
    employment_type: "Full-time",
    location: "Bangalore, India",
    start_date: "2024-07-01",
    end_date: null,
    currently_working: true,
    description: "Designed and developed LangGraph-based multi-agent systems (Auto-Triage) for automated bug triage and issue routing across printer platforms. Built reusable agent and tool abstractions using AgentSDK, reducing new agent onboarding effort by 50%. Implemented LLM response validation and inference guardrails, improving prediction accuracy by 60%. Engineered structured logging and observability pipelines, improving debugging efficiency by 30%. Developed internal Gradio-based applications for log analysis, root-cause investigation, and automated team assignment. Led FleetAI — a multi-agent workflow for enterprise printer onboarding and fleet management — with multi-layer validation mechanisms for Knowledge Graph ingestion pipelines (Neo4j), improving data consistency and reliability. Developed a reusable evaluation framework integrating RAGAS, DeepEval, and traditional metrics for automated benchmarking and dashboard reporting.",
    display_order: 1,
    technologies: [
      { id: "t1", name: "LangGraph", slug: "langgraph", icon_name: null, category: "ai" },
      { id: "t2", name: "OpenAI Agents SDK", slug: "agents-sdk", icon_name: null, category: "ai" },
      { id: "t3", name: "Neo4j", slug: "neo4j", icon_name: null, category: "databases" },
      { id: "t4", name: "RAGAS", slug: "ragas", icon_name: null, category: "ai" },
      { id: "t5", name: "Python", slug: "python", icon_name: null, category: "languages" },
      { id: "t6", name: "Gradio", slug: "gradio", icon_name: null, category: "backend" }
    ],
    created_at: "",
    updated_at: ""
  },
  {
    id: "2",
    company_name: "HP Inc.",
    role: "R&D Intern",
    employment_type: "Internship",
    location: "Bangalore, India",
    start_date: "2024-02-01",
    end_date: "2024-06-30",
    currently_working: false,
    description: "Contributed to the Ecosystem Triage Framework using Python, HTML, and CSS. Developed automation workflows and backend components for internal engineering tools.",
    display_order: 2,
    technologies: [
      { id: "t7", name: "Python", slug: "python", icon_name: null, category: "languages" },
      { id: "t8", name: "HTML/CSS", slug: "html-css", icon_name: null, category: "backend" }
    ],
    created_at: "",
    updated_at: ""
  }
];

export const defaultSkills: Skill[] = [
  // Languages
  { id: "1", name: "Python", category: "languages", icon_name: null, years_of_experience: 4, display_order: 1, created_at: "", updated_at: "" },
  { id: "2", name: "C++", category: "languages", icon_name: null, years_of_experience: 3, display_order: 2, created_at: "", updated_at: "" },
  { id: "3", name: "C", category: "languages", icon_name: null, years_of_experience: 3, display_order: 3, created_at: "", updated_at: "" },
  { id: "4", name: "SQL", category: "languages", icon_name: null, years_of_experience: 3, display_order: 4, created_at: "", updated_at: "" },
  { id: "5", name: "JavaScript", category: "languages", icon_name: null, years_of_experience: 2, display_order: 5, created_at: "", updated_at: "" },
  // Agentic AI
  { id: "6", name: "LangGraph", category: "ai-engineering", icon_name: null, years_of_experience: 2, display_order: 6, created_at: "", updated_at: "" },
  { id: "7", name: "LangChain", category: "ai-engineering", icon_name: null, years_of_experience: 2, display_order: 7, created_at: "", updated_at: "" },
  { id: "8", name: "OpenAI Agents SDK", category: "ai-engineering", icon_name: null, years_of_experience: 1, display_order: 8, created_at: "", updated_at: "" },
  { id: "9", name: "Multi-Agent Systems", category: "ai-engineering", icon_name: null, years_of_experience: 2, display_order: 9, created_at: "", updated_at: "" },
  { id: "10", name: "RAG", category: "ai-engineering", icon_name: null, years_of_experience: 2, display_order: 10, created_at: "", updated_at: "" },
  // LLM Evaluation
  { id: "11", name: "RAGAS", category: "llm-evaluation", icon_name: null, years_of_experience: 1, display_order: 11, created_at: "", updated_at: "" },
  { id: "12", name: "DeepEval", category: "llm-evaluation", icon_name: null, years_of_experience: 1, display_order: 12, created_at: "", updated_at: "" },
  { id: "13", name: "GEval", category: "llm-evaluation", icon_name: null, years_of_experience: 1, display_order: 13, created_at: "", updated_at: "" },
  // Knowledge Graphs
  { id: "14", name: "Neo4j", category: "knowledge-graphs", icon_name: null, years_of_experience: 2, display_order: 14, created_at: "", updated_at: "" },
  { id: "15", name: "Cypher", category: "knowledge-graphs", icon_name: null, years_of_experience: 2, display_order: 15, created_at: "", updated_at: "" },
  // Backend
  { id: "16", name: "Django", category: "backend", icon_name: null, years_of_experience: 2, display_order: 16, created_at: "", updated_at: "" },
  { id: "17", name: "REST APIs", category: "backend", icon_name: null, years_of_experience: 3, display_order: 17, created_at: "", updated_at: "" },
  { id: "18", name: "Gradio", category: "backend", icon_name: null, years_of_experience: 1, display_order: 18, created_at: "", updated_at: "" },
  // ML / Data
  { id: "19", name: "XGBoost", category: "ml-data", icon_name: null, years_of_experience: 2, display_order: 19, created_at: "", updated_at: "" },
  { id: "20", name: "LightGBM", category: "ml-data", icon_name: null, years_of_experience: 2, display_order: 20, created_at: "", updated_at: "" },
  { id: "21", name: "FAISS", category: "ml-data", icon_name: null, years_of_experience: 1, display_order: 21, created_at: "", updated_at: "" },
  { id: "22", name: "Sentence Transformers", category: "ml-data", icon_name: null, years_of_experience: 1, display_order: 22, created_at: "", updated_at: "" },
  // Infrastructure
  { id: "23", name: "Docker", category: "infrastructure", icon_name: null, years_of_experience: 2, display_order: 23, created_at: "", updated_at: "" },
  { id: "24", name: "Git", category: "infrastructure", icon_name: null, years_of_experience: 4, display_order: 24, created_at: "", updated_at: "" },
  { id: "25", name: "Linux", category: "infrastructure", icon_name: null, years_of_experience: 3, display_order: 25, created_at: "", updated_at: "" },
  { id: "26", name: "Ollama", category: "infrastructure", icon_name: null, years_of_experience: 1, display_order: 26, created_at: "", updated_at: "" }
];

export const defaultAchievements: Achievement[] = [
  {
    id: "1",
    title: "Codeforces Specialist — Max Rating 1418",
    description: "Reached Specialist rank on Codeforces with a max rating of 1418 under handle HRN_Harshit, competing in algorithmic programming contests.",
    achievement_type: "Competitive Coding",
    external_url: "https://codeforces.com/profile/HRN_Harshit",
    display_order: 1,
    created_at: "",
    updated_at: ""
  },
  {
    id: "2",
    title: "CodeChef 3-Star Programmer — Max Rating 1666",
    description: "Achieved 3-star rating on CodeChef with a peak rating of 1666 under handle hars_02, demonstrating consistent competitive programming performance.",
    achievement_type: "Competitive Coding",
    external_url: "https://www.codechef.com/users/hars_02",
    display_order: 2,
    created_at: "",
    updated_at: ""
  },
  {
    id: "3",
    title: "1000+ DSA Problems Solved",
    description: "Solved over 1000 Data Structures & Algorithms problems across LeetCode, Codeforces, CodeChef, GeeksforGeeks, and HackerRank.",
    achievement_type: "Problem Solving",
    external_url: "https://leetcode.com",
    display_order: 3,
    created_at: "",
    updated_at: ""
  }
];

export const defaultCertifications: Certification[] = [];

export const defaultSocialLinks: SocialLink[] = [
  { id: "1", platform: "github", url: "https://github.com/GangSagar", icon_name: null, display_order: 1 },
  { id: "2", platform: "linkedin", url: "https://linkedin.com/in/ganga-sagar", icon_name: null, display_order: 2 },
  { id: "3", platform: "mail", url: "mailto:hrnharshit@gmail.com", icon_name: null, display_order: 3 }
];
