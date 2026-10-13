"use client";

import { ShieldCheck, Lock, Database, FileCheck } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const SECURITY_PILLARS = [
  {
    icon: ShieldCheck,
    title: "RA 10173 Compliant",
    description: "Fully adheres to the Philippine Data Privacy Act with strict data minimization and proportionality standards.",
  },
  {
    icon: Lock,
    title: "Cryptographic QR Tokens",
    description: "Attendance passes are digitally hashed and signed to prevent proxy check-ins, fake badges, and screenshot tampering.",
  },
  {
    icon: Database,
    title: "Role-Based Access Control",
    description: "Attendance ledgers are strictly accessible only to authorized managers, faculty leads, and designated administrators.",
  },
  {
    icon: FileCheck,
    title: "Zero Third-Party Tracking",
    description: "No commercial trackers, advertisements, or third-party data sharing. Your attendee records remain completely private.",
  },
];

export default function SecurityTrustSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div>
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
              ENTERPRISE & CAMPUS SECURITY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.12]">
            Data privacy and security you can trust.
          </h2>
          <p className="text-base text-[#6E6E73] leading-relaxed">
            Engineered with strict compliance for Philippine educational institutions, corporate offices, and organizational standards.
          </p>
        </div>

        {/* 4 Security Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECURITY_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 80} className="h-full">
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E5E7] hover:border-[#BFDBFE] transition-all flex flex-col justify-between space-y-4 shadow-lg shadow-black/[0.03] h-full">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shadow-xs">
                    <Icon className="w-5 h-5 text-[#007AFF]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1D1D1F]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E6E73] mt-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Trust Banner */}
        <ScrollReveal delay={150}>
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5E7] shadow-lg shadow-black/[0.03] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#1D1D1F]">
                Have compliance questions for your organization?
              </h4>
              <p className="text-xs sm:text-sm text-[#6E6E73]">
                Review our complete privacy policy and technical architecture documentation.
              </p>
            </div>
            <Link
              href="/privacy-policy"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#1D1D1F] hover:bg-black rounded-full transition-colors shadow-xs shrink-0"
            >
              <span>Read Privacy Policy</span>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
