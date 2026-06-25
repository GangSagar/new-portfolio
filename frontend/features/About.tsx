"use client";

import { motion } from "framer-motion";
import { Brain, Server, Cpu, Layers } from "lucide-react";

const expertises = [
  {
    title: "Agentic AI Systems",
    description: "Building LangGraph-based multi-agent workflows, implementing OpenAI Agents SDK abstractions, and designing RAG pipelines for production-grade AI automation.",
    icon: <Brain className="size-6 text-[#4da2ff]" />,
  },
  {
    title: "LLM Evaluation",
    description: "Designing reusable evaluation frameworks integrating RAGAS, DeepEval, and GEval for automated benchmarking, scoring, and dashboard reporting.",
    icon: <Cpu className="size-6 text-[#298dff]" />,
  },
  {
    title: "Knowledge Graphs",
    description: "Engineering multi-layer Knowledge Graph ingestion pipelines with Neo4j and Cypher, improving data consistency and reliability for enterprise AI systems.",
    icon: <Layers className="size-6 text-[#4da2ff]" />,
  },
  {
    title: "Backend Development",
    description: "Architecting Django REST APIs, structured logging & observability pipelines, and Gradio-based internal tooling for engineering teams.",
    icon: <Server className="size-6 text-[#298dff]" />,
  },
];

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.51, 0, 0.08, 1] as const },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.51, 0, 0.08, 1] as const },
    },
  };

  return (
    <section id="about" className="py-space-96 max-w-[1200px] mx-auto px-6 relative bg-black-canvas overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-10 right-10 w-[350px] h-[350px] sui-glow sui-glow-cyan opacity-8 pointer-events-none" />

      {/* Section divider */}
      <div className="section-divider mb-space-96" />

      {/* Section Header */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-space-64"
      >
        <div className="flex items-center gap-space-8 justify-center mb-space-12">
          <div className="size-1.5 bg-[#298dff] rounded-full animate-glow-pulse" />
          <span className="mono-label text-[#298dff] uppercase tracking-widest font-semibold">About</span>
          <div className="size-1.5 bg-[#298dff] rounded-full animate-glow-pulse" />
        </div>
        <h2 className="display-l text-white text-center">
          About Me
        </h2>
        <p className="body-default text-[#6c7584] max-w-2xl mx-auto text-center mt-space-16 leading-relaxed">
          Software Engineer at HP Inc. with a focus on building production-grade agentic AI systems, LLM evaluation frameworks, and Knowledge Graph ingestion pipelines. CGPA: 8.22 from IET Lucknow (B.Tech CSE, 2024).
        </p>
      </motion.div>

      {/* Core Expertises */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-24"
      >
        {expertises.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="p-space-32 rounded-[32px] md:rounded-[40px] lg:rounded-[56px] bg-[#131518] border border-[#343940]/60 hover:border-[#298dff]/30 transition-all duration-500 relative overflow-hidden group card-glow flex flex-col justify-start min-h-[280px]"
          >
            {/* Top shimmer on hover */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#298dff]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Background glow on hover */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#298dff]/5 rounded-full blur-2xl group-hover:bg-[#298dff]/12 transition-all duration-500 pointer-events-none" />

            <div className="p-space-12 bg-[#000000]/60 border border-[#343940]/60 rounded-[9px] w-fit mb-space-24 group-hover:bg-[#298dff]/10 group-hover:border-[#298dff]/25 transition-all duration-500">
              {item.icon}
            </div>

            <h3 className="heading-s font-normal tracking-wide text-white group-hover:text-[#298dff] transition-colors duration-300 mb-space-12 uppercase">
              {item.title}
            </h3>

            <p className="body-small text-[#6c7584] leading-relaxed group-hover:text-[#a1a7b2] transition-colors duration-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
