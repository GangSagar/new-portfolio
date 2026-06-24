"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface ExperienceProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  const formatDate = (dateStr: string) => {
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: [0.51, 0, 0.08, 1] as const },
    },
  };

  return (
    <section id="experience" className="py-space-64 max-w-[1200px] mx-auto px-6 relative bg-black-canvas">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] sui-glow sui-glow-blue opacity-10 pointer-events-none" />

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
          <span className="mono-label text-[#298dff] uppercase tracking-widest font-semibold">Work History</span>
          <div className="size-1.5 bg-[#298dff] rounded-full animate-glow-pulse" />
        </div>
        <h2 className="display-l text-white text-center">
          Experience
        </h2>
        <p className="body-default text-[#6c7584] max-w-2xl mx-auto text-center mt-space-16">
          My professional history and engineering milestones.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative border-l border-[#343940]/40 ml-4 md:ml-space-32 pl-8 md:pl-space-40 space-y-space-48 max-w-3xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-space-48"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[49px] top-6 w-3 h-3 rounded-full bg-black-canvas border-2 border-[#298dff] shadow-[0_0_8px_#298dff] group-hover:scale-125 transition-transform duration-300 z-10" />
              {/* Dot outer ring on hover */}
              <div className="absolute -left-[44px] md:-left-[52px] top-5 w-5 h-5 rounded-full border border-[#298dff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-9" />

              {/* Experience Card */}
              <div className="bg-[#131518] border border-[#343940]/60 p-space-32 rounded-[32px] md:rounded-[40px] hover:border-[#298dff]/25 transition-all duration-500 relative overflow-hidden card-glow">
                {/* Background glow on hover */}
                <div className="absolute -top-12 -right-12 size-24 bg-[#298dff]/3 rounded-full blur-xl pointer-events-none" />

                <div className="md:px-space-16">
                  {/* Job Metadata */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-8 mb-space-16">
                    <div>
                      <h3 className="heading-s font-normal text-white flex items-center gap-space-8">
                        <Briefcase className="size-4 text-[#298dff]" />
                        {exp.role}
                      </h3>
                      <span className="mono-label text-[#298dff] font-semibold mt-1 block">
                        {exp.company_name} <span className="text-[#6c7584]/60">•</span> {exp.employment_type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-space-12 text-[#6c7584] mt-2 md:mt-0">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="size-3.5" />
                        <span className="mono-label text-[#6c7584]">
                          {formatDate(exp.start_date)} - {exp.currently_working ? "Present" : exp.end_date ? formatDate(exp.end_date) : ""}
                        </span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="size-3.5" />
                          <span className="mono-label text-[#6c7584]">{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Job Description */}
                  <p className="body-default text-[#6c7584] leading-relaxed mb-space-24">
                    {exp.description}
                  </p>

                  {/* Skills Utilized */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-space-8">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech.id}
                          className="px-space-12 py-space-4 rounded-full bg-[#131518]/80 text-[#6c7584] border border-[#343940] hover:border-[#298dff]/30 hover:text-white transition-colors cursor-default mono-label"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
