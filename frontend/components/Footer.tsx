"use client";

import React, { useState, useEffect } from "react";

import { SocialLink } from "@/types";
import { Mail, FileText } from "lucide-react";

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

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 15"
    fill="currentColor"
    {...props}
  >
    <path d="M12.3227 0.624023H14.6846L9.52569 6.55986L15.6169 14.609H10.831L7.10163 9.72979L2.81291 14.609H0.451005L5.98284 8.26914L0.140228 0.624023H5.05051L8.43797 5.09921L12.3227 0.624023ZM11.4836 13.1794H12.7889L4.33572 1.96036H2.90614L11.4836 13.1794Z" />
  </svg>
);

interface FooterProps {
  socialLinks: SocialLink[];
}

export default function Footer({ socialLinks }: FooterProps) {




  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <GithubIcon className="size-4" />;
      case "linkedin":
        return <LinkedinIcon className="size-4" />;
      case "twitter":
      case "x":
        return <TwitterIcon className="size-4" />;
      case "mail":
      case "email":
        return <Mail className="size-4" />;
      default:
        return <FileText className="size-4" />;
    }
  };

  return (
    <footer className="relative bg-[#0a0d10] border-t border-[#343940]/30 py-12 overflow-hidden">
      {/* Subtle background glow/gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d10]/10 to-[#05070a] pointer-events-none" />

      {/* Content layout container */}
      <div className="relative max-w-[1200px] mx-auto px-6 z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo/Copyright */}
        <div className="text-center sm:text-left">
          <span className="mono-label text-[#6c7584]">
            © {new Date().getFullYear()} Ganga. All rights reserved.
          </span>
        </div>

        {/* Dynamic Social Links */}
        <div className="flex items-center gap-space-12">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-[9px] bg-[#131518]/60 border border-[#343940] text-[#6c7584] hover:text-white hover:border-[#298dff]/25 transition-all duration-300 shadow-sm"
              title={link.platform}
              aria-label={`Visit my ${link.platform} profile`}
            >
              {getSocialIcon(link.platform)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
