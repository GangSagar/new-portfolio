"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactMessage, trackAnalyticsEvent } from "@/services/api";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitContactMessage(formData.name, formData.email, formData.message);
      await trackAnalyticsEvent("contact_submission", "/", {
        sender_email: formData.email,
      });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact submit error:", err);
      setStatus("error");
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setErrorMessage(message);
    }
  };

  return (
    <section id="contact" className="py-space-64 max-w-[1200px] mx-auto px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sui-glow sui-glow-blue opacity-10 pointer-events-none" />

      {/* Section divider */}
      <div className="section-divider mb-space-96" />

      {/* Section Header */}
      <div className="text-center mb-space-64">
        <div className="flex items-center gap-space-8 justify-center mb-space-12">
          <div className="size-1.5 bg-[#298dff] rounded-full animate-glow-pulse" />
          <span className="mono-label text-[#298dff] uppercase tracking-widest font-semibold">Let&apos;s Talk</span>
          <div className="size-1.5 bg-[#298dff] rounded-full animate-glow-pulse" />
        </div>
        <h2 className="display-l text-white text-center">
          Contact Me
        </h2>
        <p className="body-default text-[#6c7584] max-w-sm mx-auto text-center mt-space-16">
          Send a message to discuss opportunities or collaborate.
        </p>
      </div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#131518] border border-[#343940]/60 p-space-32 sm:p-space-40 md:p-space-48 lg:p-space-64 rounded-[32px] md:rounded-[40px] hover:border-[#298dff]/25 transition-all duration-500 relative z-10 max-w-2xl mx-auto card-glow"
      >
        {status === "success" ? (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center text-center py-space-24"
          >
            <div className="p-space-16 bg-green-500/10 text-green-400 border border-green-500/20 rounded-[24px] mb-space-16 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <CheckCircle2 className="size-10" />
            </div>
            <h3 className="heading-s font-normal text-white mb-space-8">
              Message Sent!
            </h3>
            <p className="body-xs text-[#6c7584] leading-relaxed mb-space-24">
              Thank you for reaching out. I have received your message and will get back to you shortly.
            </p>
            <button 
              onClick={() => setStatus("idle")} 
              className="cursor-pointer border border-[#343940] bg-[#131518] hover:bg-[#298dff]/10 hover:border-[#298dff]/25 hover:text-white transition-all duration-300 font-bold uppercase tracking-wider rounded-[9px] px-space-24 h-10 text-xs flex items-center justify-center gap-space-8"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-space-24">
            {status === "error" && (
              <div className="p-space-16 bg-red-500/10 border border-red-500/20 rounded-[9px] text-red-400 text-xs flex items-start gap-space-12">
                <AlertCircle className="size-4 shrink-0 mt-0.5" />
                <span className="font-semibold">{errorMessage}</span>
              </div>
            )}

            {/* Name Input */}
            <div className="space-y-space-8 text-left">
              <label htmlFor="name" className="mono-label-bold text-[#6c7584] uppercase tracking-wider block">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === "loading"}
                className={`w-full px-space-16 h-12 bg-[#131518] border rounded-[9px] text-sm text-white placeholder-[#6c7584]/60 transition-all focus:outline-none focus:ring-2 focus:ring-[#298dff]/20 ${
                  errors.name ? "border-red-500/60 focus:ring-red-500/25" : "border-[#343940] focus:border-[#298dff]"
                }`}
                placeholder="Ganga"
              />
              {errors.name && (
                <p className="text-[11px] text-red-400 font-bold flex items-center gap-1 mt-1">
                  <AlertCircle className="size-3" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-space-8 text-left">
              <label htmlFor="email" className="mono-label-bold text-[#6c7584] uppercase tracking-wider block">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === "loading"}
                className={`w-full px-space-16 h-12 bg-[#131518] border rounded-[9px] text-sm text-white placeholder-[#6c7584]/60 transition-all focus:outline-none focus:ring-2 focus:ring-[#298dff]/20 ${
                  errors.email ? "border-red-500/60 focus:ring-red-500/25" : "border-[#343940] focus:border-[#298dff]"
                }`}
                placeholder="ganga@example.com"
              />
              {errors.email && (
                <p className="text-[11px] text-red-400 font-bold flex items-center gap-1 mt-1">
                  <AlertCircle className="size-3" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message Input */}
            <div className="space-y-space-8 text-left">
              <label htmlFor="message" className="mono-label-bold text-[#6c7584] uppercase tracking-wider block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={status === "loading"}
                rows={5}
                className={`w-full px-space-16 py-space-12 bg-[#131518] border rounded-[9px] text-sm text-white placeholder-[#6c7584]/60 resize-none transition-all focus:outline-none focus:ring-2 focus:ring-[#298dff]/20 ${
                  errors.message ? "border-red-500/60 focus:ring-red-500/25" : "border-[#343940] focus:border-[#298dff]"
                }`}
                placeholder="Write your message here..."
              />
              {errors.message && (
                <p className="text-[11px] text-red-400 font-bold flex items-center gap-1 mt-1">
                  <AlertCircle className="size-3" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full h-12 gap-space-8 font-bold text-xs uppercase tracking-wider cursor-pointer bg-[#298dff] hover:bg-[#298dff]/90 text-white border border-[#298dff]/25 shadow-[0_4px_15px_rgba(41,141,255,0.25)] hover:shadow-[0_4px_20px_rgba(41,141,255,0.4)] transition-all duration-300 rounded-[9px] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
