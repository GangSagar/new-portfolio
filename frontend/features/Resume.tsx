"use client";

import { motion } from "framer-motion";
import { Download, FileText, GraduationCap, ExternalLink } from "lucide-react";
import { trackResumeDownload, trackAnalyticsEvent } from "@/services/api";

export default function Resume() {
  const driveId = process.env.NEXT_PUBLIC_RESUME_DRIVE_ID || "1V6AEZzaX7hX-RVriYVQ6k0EPA_tMvMJV";
  const resumeUrl = `https://drive.google.com/file/d/${driveId}/view?usp=sharing`;
  const previewUrl = `https://drive.google.com/file/d/${driveId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveId}`;

  const handleDownload = async () => {
    try {
      await trackResumeDownload("resume-section");
      await trackAnalyticsEvent("resume_download", "/", { source: "resume_section" });
    } catch (err) {
      console.error("Failed to track resume download:", err);
    }
    window.open(downloadUrl, "_blank");
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
          Review my professional resume preview or download it directly.
        </p>
      </div>

      {/* Resume Card Preview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#131518] border border-[#343940]/60 p-space-24 md:p-space-32 rounded-[32px] hover:border-[#298dff]/25 transition-all duration-500 card-glow"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-32">
          {/* Interactive Document Preview */}
          <div className="lg:col-span-6 w-full flex flex-col justify-between h-[500px] md:h-[600px] bg-[#1a1d21]/60 rounded-2xl border border-[#343940]/40 overflow-hidden">
            <iframe
              src={previewUrl}
              width="100%"
              height="100%"
              className="border-0 rounded-t-2xl bg-[#1a1d21]"
              allow="autoplay"
              title="Ganga Sagar Resume Preview"
            />
            <div className="p-space-12 bg-[#131518] flex items-center justify-between border-t border-[#343940]/40">
              <span className="text-xs text-[#6c7584] flex items-center gap-1.5">
                <FileText className="size-3.5 text-[#298dff]" />
                Ganga_Resume.pdf
              </span>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#298dff] hover:underline flex items-center gap-1 font-medium"
              >
                Open in Drive
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>

          {/* Quick Details & Action Callout */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-space-24">
            <div className="space-y-space-24">
              <div>
                <h3 className="heading-s font-normal text-white uppercase tracking-wider mb-space-12 flex items-center gap-space-12">
                  <FileText className="size-5 text-[#298dff]" />
                  Professional Summary
                </h3>
                <p className="body-default text-[#6c7584] leading-relaxed">
                  Software Engineer at HP Inc. (Jul 2024 – Present) specializing in LangGraph-based multi-agent systems, LLM evaluation (RAGAS, DeepEval, GEval), and Knowledge Graph pipelines (Neo4j). Previously R&amp;D Intern at HP Inc. (Feb–Jun 2024). Proven record of improving prediction accuracy by 60%, reducing onboarding effort by 50%, and increasing debugging efficiency by 30% through production AI infrastructure.
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="heading-s font-normal text-white uppercase tracking-wider mb-space-12 flex items-center gap-space-12">
                  <GraduationCap className="size-5 text-[#298dff]" />
                  Education
                </h3>
                <div className="space-y-space-12">
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

            {/* Action Box */}
            <div className="p-space-20 bg-[#131518]/60 border border-[#343940]/60 rounded-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-space-16 hover:border-[#298dff]/20 transition-colors duration-300">
              <div className="flex-1">
                <h4 className="body-default font-medium text-white mb-space-4">
                  Print-Ready PDF
                </h4>
                <p className="body-xs text-[#6c7584] max-w-sm">
                  Get a direct download of my complete resume directly from Google Drive.
                </p>
              </div>
              <button 
                onClick={handleDownload} 
                className="w-full md:w-auto px-6 flex items-center justify-center gap-space-8 cursor-pointer h-11 text-xs font-bold uppercase tracking-wider bg-[#298dff] hover:bg-[#298dff]/90 text-white border border-[#298dff]/25 rounded-[9px] shadow-[0_4px_15px_rgba(41,141,255,0.2)] hover:shadow-[0_4px_20px_rgba(41,141,255,0.35)] transition-all duration-300"
              >
                <Download className="size-4" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
