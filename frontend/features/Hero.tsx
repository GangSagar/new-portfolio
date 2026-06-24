"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [textMousePos, setTextMousePos] = useState({ x: 50, y: 50 });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });

      // Calculate position relative to the heading element
      const hRect = heading.getBoundingClientRect();
      const tx = ((e.clientX - hRect.left) / hRect.width) * 100;
      const ty = ((e.clientY - hRect.top) / hRect.height) * 100;
      setTextMousePos({ x: tx, y: ty });
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.51, 0, 0.08, 1] as const },
    },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col justify-center bg-[#000000] overflow-hidden pt-16 sui-grid"
      style={{ contain: "layout style" }}
    >
      {/* Large animated background orbs — Sui.io style */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "70vw",
          height: "70vw",
          maxWidth: "900px",
          maxHeight: "900px",
          top: "-20%",
          left: "-15%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(41,141,255,0.18) 0%, transparent 65%)",
          filter: "blur(80px)",
          transform: `translate(${mousePos.x * 0.04}px, ${mousePos.y * 0.04}px)`,
          transition: "transform 1.2s cubic-bezier(0.51, 0, 0.08, 1)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "60vw",
          height: "60vw",
          maxWidth: "700px",
          maxHeight: "700px",
          bottom: "-15%",
          right: "-10%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(77,162,255,0.12) 0%, transparent 65%)",
          filter: "blur(100px)",
          transform: `translate(${-mousePos.x * 0.03}px, ${-mousePos.y * 0.03}px)`,
          transition: "transform 1.5s cubic-bezier(0.51, 0, 0.08, 1)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "30vw",
          height: "30vw",
          maxWidth: "400px",
          maxHeight: "400px",
          top: "30%",
          right: "20%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,108,61,0.06) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Gradient blur follow effect — like Sui.io's gradient-blur overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, transparent 0%, transparent 15%, rgba(0,0,0,0.35) 35%)`,
          backdropFilter: "blur(0px)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1200px] mx-auto px-6 w-full relative z-10 py-space-80"
      >
        {/* Sub-label */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-space-8 mb-space-24 justify-center md:justify-start"
        >
          <Terminal className="size-4 text-[#298dff]" />
          <span className="mono-label text-[#298dff] font-semibold tracking-wider uppercase">
            Software Engineer &amp; AI Systems Builder
          </span>
        </motion.div>

        {/* Title — with Sui.io "sharp" mouse-following gradient */}
        <motion.h1
          ref={headingRef}
          variants={itemVariants}
          className="display-xl text-white tracking-tight leading-none text-center md:text-left mb-space-24 max-w-4xl"
        >
          Building the next generation of{" "}
          <span
            style={{
              backgroundImage: `radial-gradient(circle at ${textMousePos.x}% ${textMousePos.y}%, #ffffff 0%, #ffffff 40%, #298dff 80%, rgba(41,141,255,0.2) 95%)`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline",
              willChange: "background-image",
            }}
          >
            agentic AI systems
          </span>
          .
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="body-default text-[#6c7584] max-w-xl text-center md:text-left mb-space-48 leading-relaxed"
        >
          Software Engineer at HP Inc. specializing in LangGraph multi-agent systems, LLM evaluation frameworks, and Knowledge Graph pipelines. I build production-grade AI infrastructure that routes, reasons, and scales.
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-space-16 justify-center md:justify-start"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group w-full sm:w-auto flex items-center justify-center gap-space-8 cursor-pointer h-12 px-space-32 text-xs font-bold uppercase tracking-wider bg-[#298dff] hover:bg-[#4da2ff] text-white border border-[#298dff]/25 rounded-[9px] shadow-[0_4px_15px_rgba(41,141,255,0.25)] hover:shadow-[0_4px_30px_rgba(41,141,255,0.45)] transition-all duration-300"
          >
            Explore Projects
            <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto flex items-center justify-center gap-space-8 cursor-pointer h-12 px-space-32 text-xs font-bold uppercase tracking-wider bg-transparent hover:bg-[#131518] text-[#a1a7b2] hover:text-white border border-[#343940] hover:border-[#4b515b] rounded-[9px] transition-all duration-300"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-space-64 flex items-center gap-space-12 justify-center md:justify-start"
        >
          <div className="flex flex-col items-center gap-1">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-6 bg-gradient-to-b from-[#298dff] to-transparent"
            />
          </div>
          <span className="mono-label text-[#343940] uppercase tracking-widest text-[10px]">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
