"use client";

import { motion } from "framer-motion";
import { Skill } from "@/types";

interface SkillsProps {
  skills: Skill[];
}

const categoryLabels: Record<string, string> = {
  "ai-engineering": "Agentic AI & LLMs",
  "llm-evaluation": "LLM Evaluation",
  "knowledge-graphs": "Knowledge Graphs",
  "backend": "Backend Development",
  "ml-data": "ML & Data",
  "languages": "Programming Languages",
  "infrastructure": "Infrastructure & Tools",
};

export default function Skills({ skills }: SkillsProps) {
  const groupedSkills = skills.reduce((acc, skill) => {
    const cat = skill.category.toLowerCase();
    if (!acc[cat]) {
      acc[cat] = [];
    }
    acc[cat].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const groupVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.51, 0, 0.08, 1] as const },
    },
  };

  return (
    <section id="skills" className="py-space-64 max-w-[1200px] mx-auto px-6 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] sui-glow sui-glow-blue opacity-10 pointer-events-none" />

      {/* Section divider */}
      <div className="section-divider mb-space-96" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.51, 0, 0.08, 1] as const }}
        className="text-center mb-space-64"
      >
        <div className="flex items-center gap-space-8 justify-center mb-space-12">
          <div className="size-1.5 bg-[#298dff] rounded-full animate-glow-pulse" />
          <span className="mono-label text-[#298dff] uppercase tracking-widest font-semibold">Toolbox</span>
          <div className="size-1.5 bg-[#298dff] rounded-full animate-glow-pulse" />
        </div>
        <h2 className="display-l text-white text-center">
          Skills &amp; Tech
        </h2>
        <p className="body-default text-[#6c7584] max-w-2xl mx-auto text-center mt-space-16">
          My primary engineering toolbox and specializations.
        </p>
      </motion.div>

      {/* Grid of Categories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-space-24"
      >
        {Object.entries(groupedSkills).map(([category, items]) => (
          <motion.div
            key={category}
            variants={groupVariants}
          className={`bg-[#131518] border border-[#343940]/60 p-space-32 rounded-[32px] md:rounded-[40px] hover:border-[#298dff]/25 transition-all duration-500 relative group flex flex-col justify-start min-h-[220px] card-glow`}
          >
            {/* Top shimmer on hover */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#298dff]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Category Title */}
            <h3 className="heading-s font-normal text-white uppercase tracking-wider mb-space-24 text-center md:text-left md:pl-space-8">
              {categoryLabels[category] || category}
            </h3>

            {/* Badges Grid */}
            <div className="flex flex-wrap gap-space-8 justify-center md:justify-start md:px-space-16 pb-space-8">
              {items.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center gap-space-6 px-space-12 py-space-6 rounded-[100px] bg-[#131518]/80 border border-[#343940] hover:bg-[#298dff]/5 hover:border-[#298dff]/20 hover:shadow-[0_0_10px_rgba(41,141,255,0.12)] transition-all duration-300 group cursor-default"
                >
                  <span className="mono-label text-white group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
