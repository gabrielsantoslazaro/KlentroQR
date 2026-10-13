"use client";

import { GraduationCap, Building2, CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const USE_CASES = [
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    tag: "Academic",
    description: "Sub-second entrance scanning for 40 to 60 students per period. Eliminate roll call delays and automatically compile term attendance rosters.",
    highlight: "Saves 10-15 mins per lecture",
  },
  {
    icon: Building2,
    title: "Offices & Workplaces",
    tag: "Enterprise",
    description: "Effortless contactless time-in and time-out for staff and site visitors. Monitor office capacity, shift schedules, and meetings without biometric queues.",
    highlight: "Real-time shift logs",
  },
  {
    icon: CalendarDays,
    title: "Seminars, Conferences & Events",
    tag: "Live Events",
    description: "Multi-scanner concurrent check-ins for 500+ attendees. Multiple staff members scan guest QR badges simultaneously into one synced masterlist.",
    highlight: "Multi-door scanner sync",
  },
];

export default function UseCasesSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div>
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
              UNIVERSAL DEPLOYMENT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.12]">
            Built for classrooms, workplaces, and events.
          </h2>
          <p className="text-base text-[#6E6E73] leading-relaxed">
            Whether managing a 30-student tutorial, an office workforce, or a 1,000-attendee industry convention, Klentro adapts seamlessly.
          </p>
        </div>

        {/* 3 Universal Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {USE_CASES.map((uc, idx) => {
            const Icon = uc.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 100} className="h-full">
                <div className="bg-white rounded-3xl p-7 border border-[#E5E5E7] hover:border-[#BFDBFE] transition-all flex flex-col justify-between space-y-6 group shadow-lg shadow-black/[0.04] h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-[#007AFF] border border-[#BFDBFE]">
                        {uc.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#1D1D1F]">
                        {uc.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6E6E73] mt-2 leading-relaxed">
                        {uc.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E5E5E7] flex items-center justify-between text-xs font-semibold text-[#1D1D1F]">
                    <span className="text-[#007AFF]">{uc.highlight}</span>
                    <Link
                      href="/how-it-works"
                      className="inline-flex items-center gap-1 text-[#6E6E73] group-hover:text-[#007AFF] transition-colors"
                    >
                      <span>View Flow</span>
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
