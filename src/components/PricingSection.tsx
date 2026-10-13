"use client";

import Link from "next/link";
import { Zap, GraduationCap, Building2, Check, ArrowRight } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      tagline: "For individual instructors, student org officers, and small meetings.",
      price: "₱0",
      period: "Free forever",
      highlight: false,
      badge: "Free Tier",
      icon: Zap,
      features: [
        "Up to 60 attendees per session",
        "Unlimited camera QR scans",
        "Instant CSV attendance export",
        "100% offline-first scanning mode",
        "Self-contained client data privacy",
      ],
      ctaText: "Get Started Free",
      ctaHref: "/guide",
      ctaStyle: "bg-white text-[#1D1D1F] border border-[#E5E5E7] hover:bg-[#F9F9FB]",
    },
    {
      name: "Campus Pro",
      tagline: "For departments, large lecture halls, and fast-paced teams.",
      price: "₱399",
      period: "/ month or ₱999 lifetime",
      highlight: true,
      badge: "Most Popular",
      icon: GraduationCap,
      features: [
        "Unlimited attendees & rosters",
        "Multi-scanner real-time sync (multiple doors)",
        "Cryptographic pass signing (anti-proxy)",
        "Automated Excel (.xlsx) formatted reports",
        "Custom late arrival thresholds & flags",
      ],
      ctaText: "Upgrade to Pro",
      ctaHref: "/pricing",
      ctaStyle: "bg-[#007AFF] text-white hover:bg-[#0066CC] shadow-md shadow-[#007AFF]/25",
    },
    {
      name: "Institution",
      tagline: "For university colleges, campus faculties, and corporate offices.",
      price: "₱1,499",
      period: "/ month billed annually",
      highlight: false,
      badge: "Enterprise",
      icon: Building2,
      features: [
        "Everything in Campus Pro",
        "Bulk roster CSV import & sync",
        "Department-wide administrative dashboard",
        "Custom branding on student QR passes",
        "Dedicated onboarding & data migration",
      ],
      ctaText: "Contact for Deployment",
      ctaHref: "/pricing",
      ctaStyle: "bg-[#1D1D1F] text-white hover:bg-black",
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
        <div>
          <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
            SIMPLE & PREDICTABLE PRICING
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1D1D1F] leading-tight">
          Pick the plan that powers your attendance.
        </h2>

        <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
          Start 100% free with no credit card required. Upgrade as your class, organization, or enterprise expands.
        </p>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12">
        {plans.map((plan, idx) => {
          const Icon = plan.icon;
          return (
            <div
              key={idx}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlight
                  ? "bg-white border-2 border-[#007AFF] shadow-xl shadow-[#007AFF]/10 sm:-translate-y-2"
                  : "bg-white border border-[#E5E5E7] shadow-lg shadow-black/[0.03] hover:shadow-xl"
              }`}
            >
              <div className="space-y-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-xs ${
                      plan.highlight
                        ? "bg-[#EFF6FF] text-[#007AFF] border border-[#BFDBFE]"
                        : "bg-[#F5F5F7] text-[#1D1D1F] border border-[#E5E5E7]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      plan.highlight
                        ? "bg-[#007AFF] text-white shadow-xs"
                        : "bg-[#F5F5F7] text-[#6E6E73] border border-[#E5E5E7]"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                {/* Plan Info */}
                <div>
                  <h3 className="text-2xl font-bold text-[#1D1D1F]">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6E73] mt-1.5 leading-relaxed">
                    {plan.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="pt-2 pb-3 border-y border-[#F5F5F7]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
                      {plan.price}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[#6E6E73]">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] block">
                    What&apos;s included:
                  </span>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#EFF6FF] text-[#007AFF] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View Full Comparison Panel Link */}
      <div className="text-center">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#007AFF] hover:text-[#0066CC] transition-colors group"
        >
          <span>View complete side-by-side feature matrix & annual discounts</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
