"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Project, Experience as ExperienceType, Skill, Achievement, Certification, SocialLink } from "@/types";
import {
  fetchProjects,
  fetchExperiences,
  fetchSkills,
  fetchAchievements,
  fetchCertifications,
  fetchSocialLinks,
  trackAnalyticsEvent,
} from "@/services/api";

// Fallback Mock Data for UI testing / offline fallback
import {
  defaultProjects,
  defaultExperiences,
  defaultSkills,
  defaultAchievements,
  defaultCertifications,
  defaultSocialLinks,
} from "@/constants/mock-data";

// Layout components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import dynamic from "next/dynamic";

// Feature sections
import Hero from "@/features/Hero";
import About from "@/features/About";

const Experience = dynamic(() => import("@/features/Experience"));
const Projects = dynamic(() => import("@/features/Projects"));
const Skills = dynamic(() => import("@/features/Skills"));
const Achievements = dynamic(() => import("@/features/Achievements"));
const Resume = dynamic(() => import("@/features/Resume"));
const Contact = dynamic(() => import("@/features/Contact"));

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  
  // Data States
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [
          projectsData,
          expData,
          skillsData,
          achData,
          certsData,
          socialsData,
        ] = await Promise.all([
          fetchProjects(true).catch(() => defaultProjects),
          fetchExperiences().catch(() => defaultExperiences),
          fetchSkills().catch(() => defaultSkills),
          fetchAchievements().catch(() => defaultAchievements),
          fetchCertifications().catch(() => defaultCertifications),
          fetchSocialLinks().catch(() => defaultSocialLinks),
        ]);

        setProjects(projectsData.length ? projectsData : defaultProjects);
        setExperiences(expData.length ? expData : defaultExperiences);
        setSkills(skillsData.length ? skillsData : defaultSkills);
        setAchievements(achData.length ? achData : defaultAchievements);
        setCertifications(certsData.length ? certsData : defaultCertifications);
        setSocialLinks(socialsData.length ? socialsData : defaultSocialLinks);
      } catch (err) {
        console.error("Failed to load portfolio database data, using defaults:", err);
        setProjects(defaultProjects);
        setExperiences(defaultExperiences);
        setSkills(defaultSkills);
        setAchievements(defaultAchievements);
        setCertifications(defaultCertifications);
        setSocialLinks(defaultSocialLinks);
      } finally {
        setLoading(false);
        // Track homepage visit
        trackAnalyticsEvent("homepage_visit", "/").catch(() => {});
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black-canvas text-white">
        <Loader2 className="size-10 animate-spin text-[#298dff] mb-4" />
        <span className="mono-label text-[#6c7584] uppercase tracking-wider">
          Loading Portfolio...
        </span>
      </div>
    );
  }

  return (
    <>
      {/* Sticky Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Sections */}
        <Hero />
        <About />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Achievements achievements={achievements} certifications={certifications} />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer socialLinks={socialLinks} />
    </>
  );
}
