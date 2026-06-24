"use client";

import { motion } from "framer-motion";
import { Download, FileText, GraduationCap } from "lucide-react";
import { trackResumeDownload, trackAnalyticsEvent } from "@/services/api";

export default function Resume() {
  const handleDownload = async () => {
    try {
      await trackResumeDownload("resume-section");
      await trackAnalyticsEvent("resume_download", "/", { source: "resume_section" });
    } catch (err) {
      console.error("Failed to track resume download:", err);
    }
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="py-space-64 max-w-[1200px] mx-auto px-6 relative">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/3 w-[350px] h-[350px] sui-glow sui-glow-blue opacity-10 pointer-events-none" />

      {/* Section divider */}
      <div className="section-divider mb-space-96" />

      {/* Section Header */}
      <div className="text-center mb-space-64">
        <div className="flex items-center gap-space-8 justify-center mb-space-12">
          <div className="size-1.5 bg-[#298dff] rounded-full animate-glow-pulse" />
          <span className="mono-label text-[#298dff] uppercase tracking-widest font-semibold">CV</span>
          <div className="size-1.5 bg-[#298dff] rounded-full animate-glow-pulse" />
        </div>
        <h2 className="display-l text-white text-center">
          Resume
        </h2>
        <p className="body-default text-[#6c7584] max-w-2xl mx-auto text-center mt-space-16">
          View my summary or download the full PDF format.
        </p>
      </div>

      {/* Resume Card Preview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#131518] border border-[#343940]/60 p-space-32 md:p-space-40 rounded-[32px] md:rounded-[40px] hover:border-[#298dff]/25 transition-all duration-500 card-glow"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-32 md:px-space-16">
          {/* Quick Details */}
          <div className="md:col-span-2 space-y-space-32">
            <div>
              <h3 className="heading-s font-normal text-white uppercase tracking-wider mb-space-16 flex items-center gap-space-12">
                <FileText className="size-5 text-[#298dff]" />
                Professional Summary
              </h3>
              <p className="body-default text-[#6c7584] leading-relaxed">
                Software Engineer at HP Inc. (Jul 2024 – Present) specializing in LangGraph-based multi-agent systems, LLM evaluation (RAGAS, DeepEval, GEval), and Knowledge Graph pipelines (Neo4j). Previously R&amp;D Intern at HP Inc. (Feb–Jun 2024). Proven record of improving prediction accuracy by 60%, reducing onboarding effort by 50%, and increasing debugging efficiency by 30% through production AI infrastructure.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="heading-s font-normal text-white uppercase tracking-wider mb-space-16 flex items-center gap-space-12">
                <GraduationCap className="size-5 text-[#298dff]" />
                Education
              </h3>
              <div className="space-y-space-16">
                <div className="border-l-2 border-[#298dff]/30 pl-space-16 py-space-4">
                  <h4 className="body-default text-white font-medium">
                    Bachelor of Technology — Computer Science &amp; Engineering
                  </h4>
                  <p className="mono-label text-[#298dff] font-semibold mt-space-4">
                    Institute of Engineering and Technology, Lucknow
                  </p>
                  <p className="mono-label-bold text-[#6c7584] mt-space-4">
                    2020 – 2024 &nbsp;·&nbsp; CGPA: 8.22 / 10
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Callout */}
          <div className="flex flex-col items-center justify-center p-space-24 bg-[#131518]/60 border border-[#343940]/60 rounded-[24px] md:col-span-1 text-center hover:border-[#298dff]/20 transition-colors duration-300">
            <div className="p-space-16 bg-[#298dff]/10 rounded-[12px] text-[#298dff] mb-space-16 border border-[#298dff]/20 shadow-[0_0_15px_rgba(41,141,255,0.1)]">
              <FileText className="size-8" />
            </div>
            <h4 className="heading-s font-normal text-white mb-space-8">
              Looking for a PDF?
            </h4>
            <p className="body-xs text-[#6c7584] leading-relaxed mb-space-24">
              Get a print-ready version of my resume with complete contact information and skills catalog.
            </p>
            <button 
              onClick={handleDownload} 
              className="w-full flex items-center justify-center gap-space-8 cursor-pointer h-11 text-xs font-bold uppercase tracking-wider bg-[#298dff] hover:bg-[#298dff]/90 text-white border border-[#298dff]/25 rounded-[9px] shadow-[0_4px_15px_rgba(41,141,255,0.2)] hover:shadow-[0_4px_20px_rgba(41,141,255,0.35)] transition-all duration-300"
            >
              <Download className="size-4" />
              Download PDF
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
