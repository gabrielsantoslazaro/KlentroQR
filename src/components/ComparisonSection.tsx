import { X, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const COMPARISONS = [
  {
    traditional: "Slow entrance queues as attendees pass around a clipboard and shared pen.",
    klentro: "Sub-second camera scan as participants walk through the door or turnstile.",
  },
  {
    traditional: "Prone to proxy attendance where individuals sign on behalf of absent peers.",
    klentro: "Cryptographically signed QR tokens prevent screenshot sharing and fraudulent check-ins.",
  },
  {
    traditional: "Lost, damaged, or illegible handwriting on physical sign-in logbooks.",
    klentro: "100% digital records with verified attendee IDs and accurate timestamps.",
  },
  {
    traditional: "Hours spent manually typing physical attendance sheets into computer spreadsheets.",
    klentro: "One-click CSV & Excel export formatted ready for payroll, grading, or event audits.",
  },
  {
    traditional: "Delayed visibility — managers and organizers cannot see attendance until after manual tallying.",
    klentro: "Live room roster with automatic late detection and instant arrival counts.",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F5F7]">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-14">
          <div>
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
              WHY SWITCH TO DIGITAL
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.12]">
            Manual Logbooks vs. Klentro QR
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed max-w-2xl mx-auto">
            See how upgrading to a modern mobile attendance flow eliminates entrance bottlenecks and saves hours of manual administrative work.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-5 lg:gap-8 items-stretch">
          
          {/* Card 1: Traditional Paper */}
          <ScrollReveal delay={0} className="h-full">
            <div className="bg-white/80 rounded-3xl p-6 sm:p-7 md:p-6 lg:p-9 border border-[#E5E5E7] shadow-sm flex flex-col justify-between h-full">
              <div className="space-y-5 sm:space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#991B1B] bg-[#FEE2E2] px-3 py-1 rounded-full">
                    The Old Way
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold text-[#1D1D1F] pt-2">
                    Paper Sign-In Logbooks
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6E73]">
                    Physical clipboards, sign-in sheets, and manual tallying.
                  </p>
                </div>

                <div className="space-y-3.5 sm:space-y-4 pt-2">
                  {COMPARISONS.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs sm:text-sm md:text-[13px] lg:text-sm text-[#4B5563] leading-relaxed">
                        {item.traditional}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-[#E5E5E7]/70 text-xs text-[#9CA3AF]">
                Prone to human error, physical damage, and administrative bottlenecks.
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Klentro QR System */}
          <ScrollReveal delay={120} className="h-full">
            <div className="bg-white rounded-3xl p-6 sm:p-7 md:p-6 lg:p-9 border-2 border-[#007AFF] shadow-xl shadow-[#007AFF]/5 flex flex-col justify-between relative overflow-hidden h-full">
              {/* Top right gradient accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 w-44 h-44 bg-[#007AFF]/10 rounded-full blur-2xl"
              />

              <div className="space-y-5 sm:space-y-6 relative z-10">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#007AFF] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
                    The Klentro Standard
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold text-[#1D1D1F] pt-2">
                    Smart Universal QR System
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6E73]">
                    Instant camera decode, verified rosters, and automatic exports.
                  </p>
                </div>

                <div className="space-y-3.5 sm:space-y-4 pt-2">
                  {COMPARISONS.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs sm:text-sm md:text-[13px] lg:text-sm text-[#1D1D1F] font-medium leading-relaxed">
                        {item.klentro}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-[#E5E5E7] flex items-center justify-between relative z-10">
                <span className="text-xs font-semibold text-[#007AFF]">
                  100% paperless & secure
                </span>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007AFF] hover:text-[#0066CC] transition-colors"
                >
                  <span>Explore all features</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
