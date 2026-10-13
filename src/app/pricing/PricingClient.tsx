"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Check, 
  Zap, 
  Sparkles, 
  Building2, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle,
  X,
  CreditCard,
  GraduationCap
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function PricingClient() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  const plans = [
    {
      id: "starter",
      name: "Starter",
      tagline: "For individual teachers, student org officers, and small meetings.",
      price: "₱0",
      period: "Free forever",
      highlight: false,
      badge: "Free Tier",
      icon: Zap,
      features: [
        "Up to 60 attendees per session",
        "Unlimited mobile camera QR scans",
        "Instant CSV attendance export",
        "100% offline-first scanning mode",
        "Audio-visual chime confirmation",
        "Self-contained client data privacy",
        "Standard digital QR pass generator",
      ],
      ctaText: "Get Started Free",
      ctaHref: "/guide",
      ctaStyle: "bg-white text-[#1D1D1F] border border-[#E5E5E7] hover:bg-[#F9F9FB]",
    },
    {
      id: "pro",
      name: "Campus Pro",
      tagline: "For departments, large lecture halls, and fast-paced teams.",
      price: billingCycle === "monthly" ? "₱399" : "₱299",
      period: billingCycle === "monthly" ? "/ month" : "/ mo (billed annually)",
      highlight: true,
      badge: "Most Popular",
      icon: Sparkles,
      features: [
        "Unlimited attendees & rosters",
        "Multi-scanner real-time sync (multiple doors)",
        "Cryptographic pass signing (anti-proxy)",
        "Automated Excel (.xlsx) formatted reports",
        "Custom late arrival thresholds & flags",
        "Real-time attendance capacity monitor",
        "Priority email & campus community support",
      ],
      ctaText: "Choose Campus Pro",
      ctaHref: "/guide",
      ctaStyle: "bg-[#007AFF] text-white hover:bg-[#0066CC] shadow-md shadow-[#007AFF]/25",
    },
    {
      id: "institution",
      name: "Institution",
      tagline: "For university colleges, campus faculties, and corporate offices.",
      price: billingCycle === "monthly" ? "₱1,499" : "₱1,199",
      period: billingCycle === "monthly" ? "/ month" : "/ mo (billed annually)",
      highlight: false,
      badge: "Enterprise",
      icon: Building2,
      features: [
        "Everything in Campus Pro",
        "Bulk student/staff roster CSV import",
        "Department-wide administrative dashboard",
        "Custom branding on student QR passes",
        "Multi-session simultaneous scheduling",
        "Dedicated onboarding & data migration",
        "Enterprise SLA & audit trail logs",
      ],
      ctaText: "Contact for Deployment",
      ctaHref: "/faq",
      ctaStyle: "bg-[#1D1D1F] text-white hover:bg-black",
    },
  ];

  const comparisonCategories = [
    {
      category: "Capacity & Scanning",
      items: [
        { feature: "Attendees per session", starter: "Up to 60", pro: "Unlimited", enterprise: "Unlimited" },
        { feature: "Active class rosters", starter: "Up to 3", pro: "Unlimited", enterprise: "Unlimited" },
        { feature: "Offline-first scanning", starter: true, pro: true, enterprise: true },
        { feature: "Multi-scanner sync (concurrent doors)", starter: false, pro: true, enterprise: true },
        { feature: "Sub-second camera scan rate", starter: true, pro: true, enterprise: true },
      ],
    },
    {
      category: "Security & Verification",
      items: [
        { feature: "Encrypted QR tokens (anti-proxy)", starter: "Basic", pro: "HMAC Signed", enterprise: "HMAC + Biometric Pin" },
        { feature: "Philippine RA 10173 compliance", starter: true, pro: true, enterprise: true },
        { feature: "Zero third-party cloud data selling", starter: true, pro: true, enterprise: true },
        { feature: "Tamper-proof audit logs", starter: false, pro: true, enterprise: true },
      ],
    },
    {
      category: "Reporting & Exporting",
      items: [
        { feature: "CSV export", starter: true, pro: true, enterprise: true },
        { feature: "Pre-formatted Excel (.xlsx) export", starter: false, pro: true, enterprise: true },
        { feature: "Automatic late status categorization", starter: false, pro: true, enterprise: true },
        { feature: "Custom organization branding on exports", starter: false, pro: false, enterprise: true },
      ],
    },
    {
      category: "Support & Deployment",
      items: [
        { feature: "Documentation & Video guides", starter: true, pro: true, enterprise: true },
        { feature: "Campus support response time", starter: "Community", pro: "Within 24h", enterprise: "Dedicated Manager" },
        { feature: "Custom domain / university portal link", starter: false, pro: false, enterprise: true },
      ],
    },
  ];

  const pricingFaqs = [
    {
      q: "Can I use Klentro completely free for my academic class or thesis project?",
      a: "Yes! The Starter plan is 100% free with no expiration. It includes complete offline QR scanning and CSV exports for up to 60 students per class.",
    },
    {
      q: "Is an internet connection required to scan attendance on any plan?",
      a: "No. All plans include Klentro's offline-first scanning engine. You can scan in basements or areas with zero Wi-Fi, and logs sync automatically once connected.",
    },
    {
      q: "Can multiple officers scan at different doors at the same time?",
      a: "Yes. With the Campus Pro and Institution plans, multiple smartphones can scan attendee passes concurrently at different entrance gates without creating duplicate logs.",
    },
    {
      q: "Is there a discount for recognized student organizations and non-profits?",
      a: "Yes! Accredited campus student councils, university academic societies, and charity non-profits can apply for free or 50% discounted Campus Pro licenses.",
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* Header with Billing Toggle */}
      <section className="pt-16 sm:pt-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <ScrollReveal delay={0}>
          <div>
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
              TRANSPARENT & AFFORDABLE PRICING
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.08] mt-3">
            Simple plans for individuals, teams, and whole campuses.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl font-normal text-[#6E6E73] leading-relaxed max-w-2xl mx-auto mt-3">
            Start completely free with zero commitment. Upgrade whenever you need multi-device syncing, anti-proxy encryption, and advanced Excel reports.
          </p>

          {/* Monthly vs Annual Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex items-center p-1.5 rounded-full bg-[#E5E5E7] border border-[#D1D1D6] shadow-inner">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  billingCycle === "monthly"
                    ? "bg-white text-[#1D1D1F] shadow-sm"
                    : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
              >
                Monthly billing
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("annually")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  billingCycle === "annually"
                    ? "bg-white text-[#1D1D1F] shadow-sm"
                    : "text-[#6E6E73] hover:text-[#1D1D1F]"
                }`}
              >
                <span>Annual billing</span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#007AFF] text-white">
                  Save 25%
                </span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-xl lg:max-w-none mx-auto items-stretch">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <ScrollReveal key={plan.id} delay={idx * 100} className="h-full">
                <div
                  className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative h-full ${
                    plan.highlight
                      ? "bg-white border-2 border-[#007AFF] shadow-xl shadow-[#007AFF]/10 sm:-translate-y-2"
                      : "bg-white border border-[#E5E5E7] shadow-lg shadow-black/[0.03] hover:shadow-xl"
                  }`}
                >
                  <div className="space-y-4 sm:space-y-6 md:space-y-4.5 lg:space-y-6">
                    {/* Top Tier Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 md:w-9 md:h-9 lg:w-11 lg:h-11 rounded-2xl flex items-center justify-center shadow-xs ${
                          plan.highlight
                            ? "bg-[#EFF6FF] text-[#007AFF] border border-[#BFDBFE]"
                            : "bg-[#F5F5F7] text-[#1D1D1F] border border-[#E5E5E7]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-[10px] md:text-[10px] lg:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          plan.highlight
                            ? "bg-[#007AFF] text-white shadow-xs"
                            : "bg-[#F5F5F7] text-[#6E6E73] border border-[#E5E5E7]"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    </div>

                    {/* Plan Name & Tagline */}
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold text-[#1D1D1F]">
                        {plan.name}
                      </h2>
                      <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-[#6E6E73] mt-1 sm:mt-1.5 leading-relaxed">
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Price Display */}
                    <div className="pt-2 pb-3 border-y border-[#F5F5F7]">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
                          {plan.price}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-[#6E6E73]">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Feature Checklist */}
                    <div className="space-y-2.5 sm:space-y-3 pt-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] block">
                        Included Features:
                      </span>
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-sm md:text-[12px] lg:text-sm text-[#4B5563] leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6 sm:pt-8">
                    <Link
                      href={plan.ctaHref}
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold rounded-full transition-all active:scale-98 ${plan.ctaStyle}`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Matrix Panel */}
      <section className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal delay={0}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E5E7] shadow-lg shadow-black/[0.03] space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#007AFF]">
                DETAILED COMPARISON
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F]">
                Compare plan features side-by-side
              </h2>
              <p className="text-xs sm:text-sm text-[#6E6E73] max-w-lg mx-auto">
                Choose the capability level that fits your classroom, student organization, or enterprise facility.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#E5E5E7] text-[#1D1D1F]">
                    <th className="py-4 px-4 font-bold text-base w-2/5">Feature</th>
                    <th className="py-4 px-4 font-bold text-center w-1/5">Starter</th>
                    <th className="py-4 px-4 font-bold text-center w-1/5 text-[#007AFF]">Campus Pro</th>
                    <th className="py-4 px-4 font-bold text-center w-1/5">Institution</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonCategories.map((group, gIdx) => (
                    <tr key={gIdx} className="contents">
                      <td colSpan={4} className="pt-6 pb-2 px-4 font-bold text-xs uppercase tracking-wider text-[#6E6E73] bg-[#F5F5F7]/60">
                        {group.category}
                      </td>
                      {group.items.map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-[#F5F5F7] hover:bg-[#F9F9FB] transition-colors">
                          <td className="py-3.5 px-4 font-medium text-[#1D1D1F] text-xs sm:text-sm">
                            {row.feature}
                          </td>
                          <td className="py-3.5 px-4 text-center text-xs sm:text-sm text-[#4B5563]">
                            {typeof row.starter === "boolean" ? (
                              row.starter ? (
                                <Check className="w-4 h-4 text-[#10B981] mx-auto stroke-[3]" />
                              ) : (
                                <X className="w-4 h-4 text-[#D1D1D6] mx-auto" />
                              )
                            ) : (
                              row.starter
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center text-xs sm:text-sm font-semibold text-[#007AFF] bg-[#EFF6FF]/20">
                            {typeof row.pro === "boolean" ? (
                              row.pro ? (
                                <Check className="w-4 h-4 text-[#007AFF] mx-auto stroke-[3]" />
                              ) : (
                                <X className="w-4 h-4 text-[#D1D1D6] mx-auto" />
                              )
                            ) : (
                              row.pro
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center text-xs sm:text-sm text-[#4B5563]">
                            {typeof row.enterprise === "boolean" ? (
                              row.enterprise ? (
                                <Check className="w-4 h-4 text-[#10B981] mx-auto stroke-[3]" />
                              ) : (
                                <X className="w-4 h-4 text-[#D1D1D6] mx-auto" />
                              )
                            ) : (
                              row.enterprise
                            )}
                          </td>
                        </tr>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Student Org & Academic Grant Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0}>
          <div className="bg-gradient-to-r from-[#1D1D1F] to-[#2C2C2E] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007AFF]/20 border border-[#007AFF]/40 text-[#60A5FA] text-xs font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Academic & Student Council Discount</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Are you a student leader or faculty researcher?
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-xl leading-relaxed">
                We offer free upgraded Pro tiers for thesis capstone teams, verified campus academic clubs, and non-profit youth initiatives across the Philippines.
              </p>
            </div>
            <Link
              href="/faq"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#1D1D1F] hover:bg-[#F5F5F7] font-semibold text-sm transition-all"
            >
              <span>Apply for Academic Grant</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Pricing FAQ Section */}
      <section className="pb-20 sm:pb-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0}>
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#007AFF]">
              HAVE QUESTIONS?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F]">
              Frequently Asked Questions About Pricing
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {pricingFaqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 60}>
              <div
                className="bg-white rounded-2xl p-6 border border-[#E5E5E7] shadow-xs space-y-2"
              >
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#007AFF] shrink-0" />
                  <h3 className="text-base font-bold text-[#1D1D1F]">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
