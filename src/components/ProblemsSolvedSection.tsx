"use client";

import { Clock, ShieldAlert, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const PROBLEMS_SOLVED = [
  {
    icon: Clock,
    problemTitle: "Doorway Congestion & Delays",
    problemDesc: "Passing a shared clipboard and pen causes 10 to 15 minutes of wasted time and crowd bottlenecks at every entrance.",
    solutionTitle: "Sub-Second Camera Decode",
    solutionDesc: "Attendees flash their QR pass as they walk through. Instant audio-visual cues keep entry moving without delay.",
    benefitBadge: "0 min queue time",
  },
  {
    icon: ShieldAlert,
    problemTitle: "Proxy Signing & Tampering",
    problemDesc: "Paper sheets are vulnerable to buddy-punching, where peers sign names on behalf of absent colleagues or classmates.",
    solutionTitle: "Cryptographic Pass Security",
    solutionDesc: "Dynamic token verification prevents screenshot replication and ensures only physically present individuals check in.",
    benefitBadge: "Zero proxy check-ins",
  },
  {
    icon: FileText,
    problemTitle: "Manual Spreadsheet Encoding",
    problemDesc: "Spending hours late at night transcribing smudged handwriting from physical logbooks into computer spreadsheets.",
    solutionTitle: "Instant Excel & CSV Exports",
    solutionDesc: "Records compile automatically with precise timestamps and late tags, ready for 1-click departmental submission.",
    benefitBadge: "1-click data export",
  },
];

export default function ProblemsSolvedSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#F5F5F7]">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-14">
          <div>
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
              PROBLEMS SOLVED
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.12]">
            Say goodbye to paper logbook headaches.
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed max-w-2xl mx-auto">
            Klentro replaces the friction of traditional paper attendance with fast, verifiable, and automated digital check-ins.
          </p>
        </div>

        {/* 3 Problem / Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-4.5 lg:gap-8">
          {PROBLEMS_SOLVED.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 100} className="h-full">
                <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-5 lg:p-7 border border-[#E5E5E7] shadow-lg shadow-black/[0.03] flex flex-col justify-between space-y-5 sm:space-y-6 hover:shadow-xl transition-shadow h-full">
                  {/* Top: The Friction Point */}
                  <div className="space-y-3.5 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-9 md:h-9 lg:w-11 lg:h-11 rounded-2xl bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center shadow-xs">
                        <Icon className="w-5 h-5 text-[#DC2626]" />
                      </div>
                      <span className="text-[10px] md:text-[10px] lg:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-full bg-[#F5F5F7] text-[#6E6E73]">
                        The Headache
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg md:text-[17px] lg:text-lg font-bold text-[#1D1D1F]">
                        {item.problemTitle}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-[13px] lg:text-sm text-[#6E6E73] mt-1.5 leading-relaxed">
                        {item.problemDesc}
                      </p>
                    </div>

                    {/* Bottom: The Klentro Fix */}
                    <div className="pt-3.5 sm:pt-4 border-t border-[#F5F5F7] space-y-1.5 sm:space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#007AFF]">
                        <CheckCircle2 className="w-4 h-4 text-[#007AFF]" />
                        <span>The Klentro Fix</span>
                      </div>
                      <h4 className="text-sm font-bold text-[#1D1D1F]">
                        {item.solutionTitle}
                      </h4>
                      <p className="text-xs sm:text-sm md:text-[13px] lg:text-sm text-[#4B5563] leading-relaxed">
                        {item.solutionDesc}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Badge */}
                  <div className="pt-3 border-t border-[#F5F5F7] flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#007AFF] bg-[#EFF6FF] px-2.5 py-1 rounded-full border border-[#BFDBFE]">
                      {item.benefitBadge}
                    </span>
                    <Link
                      href="/features"
                      className="inline-flex items-center gap-1 text-[#6E6E73] hover:text-[#007AFF] transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
