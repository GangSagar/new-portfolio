"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { Project } from "@/types";
import { ExternalLink, TrendingUp } from "lucide-react";
import { trackAnalyticsEvent } from "@/services/api";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealedStates, setRevealedStates] = useState<boolean[]>([]);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const handleProjectClick = async (slug: string, destination: string) => {
    try {
      await trackAnalyticsEvent("project_click", "/", {
        project_slug: slug,
        destination,
      });
    } catch (err) {
      console.error("Failed to log project click event:", err);
    }
  };

  // Track scroll position of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Animate the height of the filled progress path in the center
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Animate the position of the indicator cube
  const cubeY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    if (projects.length > 0) {
      setRevealedStates(new Array(projects.length).fill(false));
    }
  }, [projects]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (projects.length === 0) return;
    
    const newRevealed = projects.map((_, i) => {
      // Trigger threshold distributed across the scroll progress
      const threshold = (i + 0.5) / projects.length * 0.8 + 0.1;
      return latest >= threshold;
    });

    if (JSON.stringify(newRevealed) !== JSON.stringify(revealedStates)) {
      setRevealedStates(newRevealed);
    }

    // Determine the single active project (nearest to scroll progress)
    let activeIdx: number | null = null;
    projects.forEach((_, i) => {
      const threshold = (i + 0.5) / projects.length * 0.8 + 0.1;
      if (latest >= threshold - 0.1 && latest < threshold + 0.1) {
        activeIdx = i;
      }
    });
    if (activeIdx !== activeProjectIndex) {
      setActiveProjectIndex(activeIdx);
    }
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-space-64 relative bg-black-canvas overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] sui-glow sui-glow-blue opacity-10 pointer-events-none" />

      {/* Section divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="section-divider mb-space-96" />
      </div>

      {/* Section Header */}
      <div className="max-w-[1200px] mx-auto px-6 mb-space-64">
        <div className="flex items-center gap-space-8 justify-center mb-space-12">
          <div className="size-1.5 bg-[#298dff] rounded-full animate-glow-pulse" />
          <span className="mono-label text-[#298dff] uppercase tracking-widest font-semibold">Portfolio</span>
          <div className="size-1.5 bg-[#298dff] rounded-full animate-glow-pulse" />
        </div>
        <h2 className="display-l text-white text-center">
          Projects, engineered.
        </h2>
        <p className="body-default text-[#6c7584] max-w-2xl mx-auto text-center mt-space-16">
          A showcase of systems, AI pipelines, and backend architectures I have built.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="max-w-[1200px] mx-auto px-6 relative">
        {/* Central Vertical Timeline Path (Dotted) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block">
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#343940"
              strokeWidth="2"
              strokeDasharray="2 10"
            />
          </svg>
        </div>

        {/* Sliding Indicator (Electric Blue) */}
        <motion.div
          style={{ height: progressHeight }}
          className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent to-[#298dff] hidden md:block z-10"
        />

        {/* Sliding Cube */}
        <motion.div
          style={{ top: cubeY }}
          className="absolute left-1/2 w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white border-2 border-[#298dff] shadow-[0_0_12px_#298dff] hidden md:block z-20"
        />

        {/* Alternating Project Cards */}
        <div className="space-y-space-64 relative">
          {projects.map((proj, idx) => {
            const isEven = idx % 2 === 0; // 0, 2, 4... will be on the right, matching sui.io layout
            const isRevealed = revealedStates[idx] || false;

            return (
              <div
                key={proj.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-space-24 relative items-start"
              >
                {/* Connector line for large screens */}
                <div
                  className={`absolute top-8 w-1/2 border-t border-dashed transition-colors duration-300 hidden md:block ${
                    isEven ? "left-1/2 border-l-0" : "right-1/2 border-r-0"
                  } ${isRevealed ? "border-[#298dff]" : "border-[#343940]"}`}
                />

                {/* Left/Right Card Wrapper */}
                <div
                  className={`md:col-span-1 ${
                    isEven ? "md:col-start-2 md:pl-space-32" : "md:col-start-1 md:pr-space-32 text-right"
                  }`}
                >
                  <div
                    className={`bg-[#222529] border p-space-24 sm:p-space-32 rounded-[24px] md:rounded-[48px] lg:rounded-[100px] transition-all duration-500 hover:shadow-lg ${
                      isRevealed
                        ? "border-[#298dff] shadow-[#298dff]/5"
                        : "border-[#343940] opacity-60"
                    }`}
                  >
                    {/* Header: Number & Category */}
                    <div className={`flex items-center gap-space-8 ${isEven ? "justify-start" : "justify-end"}`}>
                      <span className="mono-label text-[#298dff]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="mono-label-bold text-white uppercase tracking-wider">
                        FEATURED PROJECT
                      </span>
                      <span
                        className={`size-2 rotate-45 transition-colors duration-300 ${
                          isRevealed ? "bg-white shadow-[0_0_8px_#fff]" : "bg-[#6c7584]"
                        }`}
                      />
                    </div>

                    {/* Middle Collapsible Section (Reveal motion) */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isRevealed ? "auto" : "0px",
                        opacity: isRevealed ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="py-space-12 text-left">
                        <p className="body-default text-[#a1a7b2] leading-relaxed mb-space-16">
                          {proj.short_description}
                        </p>

                        {/* Project Metrics */}
                        {proj.metrics && proj.metrics.length > 0 && (
                          <div className="grid grid-cols-2 gap-space-16 mb-space-16 p-space-16 bg-[#131518]/60 border border-[#343940]/60 rounded-[9px]">
                            {proj.metrics.map((metric, metricIdx) => (
                              <div key={metricIdx} className="flex flex-col">
                                <span className="mono-label-bold text-[#6c7584] uppercase">
                                  {metric.metric_name}
                                </span>
                                <span className="mono-label text-[#4da2ff] flex items-center gap-1 mt-1 font-semibold">
                                  <TrendingUp className="size-3.5 text-[#298dff]" />
                                  {metric.metric_value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Technology Badges */}
                        {proj.technologies && proj.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-space-8 mb-space-16">
                            {proj.technologies.map((tech) => (
                              <span
                                key={tech.id}
                                className="px-space-10 py-space-4 rounded-full bg-[#131518]/80 text-[#6c7584] border border-[#343940] hover:border-[#298dff]/30 hover:text-white transition-colors cursor-default mono-label"
                              >
                                {tech.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Footer: Title & Links */}
                    <div
                      className={`flex items-center justify-between pt-space-12 border-t transition-colors duration-300 ${
                        isRevealed ? "border-[#343940]" : "border-transparent"
                      }`}
                    >
                      <span className="heading-s font-normal text-white text-left">
                        {proj.title}
                      </span>
                      
                      <div className="flex items-center gap-space-12">
                        {proj.github_url && (
                          <a
                            href={proj.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleProjectClick(proj.slug, "github")}
                            className="p-2 rounded-[9px] bg-[#131518]/40 border border-[#343940] text-[#6c7584] hover:text-white hover:border-[#298dff]/25 transition-all duration-300 cursor-pointer shadow-sm"
                            title="Source Code"
                            aria-label={`View source code for ${proj.title} on GitHub`}
                          >
                            <GithubIcon className="size-4" />
                          </a>
                        )}
                        
                        {proj.live_url && (
                          <a
                            href={proj.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleProjectClick(proj.slug, "live_demo")}
                            className="p-2 rounded-[9px] bg-[#131518]/40 border border-[#343940] text-[#298dff] hover:text-[#4da2ff] hover:border-[#4da2ff]/25 transition-all duration-300 cursor-pointer shadow-sm"
                            title="Live Demo"
                            aria-label={`View live demo of ${proj.title}`}
                          >
                            <ExternalLink className="size-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
