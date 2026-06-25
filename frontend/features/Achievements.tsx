"use client";

import { motion } from "framer-motion";
import { Achievement, Certification } from "@/types";
import { Award, ShieldCheck, ExternalLink } from "lucide-react";

interface AchievementsProps {
  achievements: Achievement[];
  certifications: Certification[];
}

export default function Achievements({ achievements, certifications }: AchievementsProps) {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="achievements" className="py-space-64 max-w-[1200px] mx-auto px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sui-glow sui-glow-blue opacity-10 pointer-events-none" />

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
          <span className="mono-label text-[#298dff] uppercase tracking-widest font-semibold">Recognition</span>
          <div className="size-1.5 bg-[#298dff] rounded-full animate-glow-pulse" />
        </div>
        <h2 className="display-l text-white text-center">
          Honors &amp; Certs
        </h2>
        <p className="body-default text-[#6c7584] max-w-2xl mx-auto text-center mt-space-16">
          Highlights of my competitive coding ranks and verified certifications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-48">
        {/* Achievements Column */}
        <div className="flex flex-col">
          <h3 className="heading-s font-normal text-white uppercase tracking-wider mb-space-24 flex items-center gap-space-12 pl-space-16 justify-center lg:justify-start">
            <Award className="size-5 text-[#298dff]" />
            Competitive Coding & Honors
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-space-24"
          >
            {achievements.map((ach) => (
              <motion.div
                key={ach.id}
                variants={itemVariants}
          className="bg-[#131518] border border-[#343940]/60 p-space-32 rounded-[32px] md:rounded-[40px] hover:border-[#298dff]/25 transition-all duration-500 relative overflow-hidden group flex flex-col justify-between card-glow"
              >
                <div className="flex justify-between items-start gap-space-16 md:px-space-12">
                  <div className="flex-1">
                    <span className="mono-label-bold text-[#298dff] bg-[#000000] px-space-12 py-space-4 border border-[#343940] rounded-full uppercase tracking-wider">
                      {ach.achievement_type}
                    </span>
                    <h4 className="heading-s font-normal text-white mt-space-16 group-hover:text-[#298dff] transition-colors">
                      {ach.title}
                    </h4>
                    {ach.description && (
                      <p className="body-small text-[#6c7584] mt-space-12 leading-relaxed">
                        {ach.description}
                      </p>
                    )}
                  </div>
                  {ach.external_url && (
                    <a
                      href={ach.external_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#131518]/80 border border-[#343940] hover:bg-[#298dff]/10 hover:border-[#298dff]/25 hover:text-white rounded-[9px] transition-all duration-300 cursor-pointer shadow-sm shrink-0"
                      title="Verify Profile"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Column */}
        <div className="flex flex-col">
          <h3 className="heading-s font-normal text-white uppercase tracking-wider mb-space-24 flex items-center gap-space-12 pl-space-16 justify-center lg:justify-start">
            <ShieldCheck className="size-5 text-[#298dff]" />
            Verified Certifications
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-space-24"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="bg-[#131518] border border-[#343940]/60 p-space-32 rounded-[32px] md:rounded-[40px] hover:border-[#298dff]/25 transition-all duration-500 relative overflow-hidden group flex flex-col justify-between card-glow"
              >
                <div className="flex justify-between items-start gap-space-16 md:px-space-12">
                  <div className="flex-1">
                    <span className="mono-label-bold text-[#298dff] bg-[#000000] px-space-12 py-space-4 border border-[#343940] rounded-full uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <h4 className="heading-s font-normal text-white mt-space-16 group-hover:text-[#298dff] transition-colors">
                      {cert.name}
                    </h4>
                    <p className="mono-label text-[#6c7584] mt-space-12">
                      Issued {formatDate(cert.issue_date)}
                    </p>
                  </div>
                  {cert.certificate_url && (
                    <a
                      href={cert.certificate_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#131518]/80 border border-[#343940] hover:bg-[#298dff]/10 hover:border-[#298dff]/25 hover:text-white rounded-[9px] transition-all duration-300 cursor-pointer shadow-sm shrink-0"
                      title="Verify Certificate"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
