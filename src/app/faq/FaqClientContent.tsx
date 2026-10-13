"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: "Privacy" | "Technical" | "Deployment";
}

const FAQS: FaqItem[] = [
  {
    category: "Privacy",
    question: "Does Klentro collect or share personal attendee and employee records?",
    answer: "No. Klentro is architected with strict data minimization principles. Attendance records remain solely under the control of your organization, enterprise, or institution. No unauthorized third-party trackers, data brokers, or commercial profiling are ever used.",
  },
  {
    category: "Privacy",
    question: "How does the platform adhere to the Philippine Data Privacy Act (RA 10173)?",
    answer: "Attendee, employee, and student identifiers are cryptographically hashed and signed before embedding into QR payloads. Access to raw attendance logs is strictly role-gated to authorized event leads, HR managers, or faculty heads, ensuring full compliance with the Philippine Data Privacy Act.",
  },
  {
    category: "Technical",
    question: "What hardware or equipment is required to scan attendance passes?",
    answer: "Klentro is 100% universal and hardware-free. It runs smoothly on any iOS or Android smartphone or tablet using its built-in camera for instantaneous, contactless QR scanning. Standard USB or Bluetooth 2D barcode scanners and entrance kiosk tablets are also natively supported for high-traffic doorways.",
  },
  {
    category: "Technical",
    question: "Can the system operate if Wi-Fi or cellular network drops during an event or shift?",
    answer: "Yes. Klentro features a robust offline-first scanning engine. QR code validation occurs instantaneously on-device in under 200ms without requiring Wi-Fi. Timestamps are securely cached in encrypted local storage and automatically synchronize to your central database the moment internet connectivity returns.",
  },
  {
    category: "Deployment",
    question: "Why was CSV / Excel chosen as the primary export format?",
    answer: "CSV and Excel (.xlsx) are universal, tamper-resistant industry standards for spreadsheets. They import effortlessly into Microsoft Excel, Google Sheets, corporate HRIS systems, payroll software, and institutional portals without formatting corruption.",
  },
  {
    category: "Deployment",
    question: "Can attendees, employees, or participants share screenshots of QR passes to fake attendance?",
    answer: "No. Klentro incorporates multi-layered anti-proxy protections including dynamic rolling token validation, single-scan session expiration, and rapid timestamp correlation to ensure only participants physically presenting at the check-in point can be verified.",
  },
];

export default function FaqClientContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"All" | "Privacy" | "Technical" | "Deployment">("All");

  const filteredFaqs = activeTab === "All" ? FAQS : FAQS.filter(f => f.category === activeTab);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="pb-24 sm:pb-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Privacy Highlight Banner */}
      <div className="mb-10 p-6 rounded-3xl bg-white border border-[#E5E5E7] flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-xs">
        <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-bold text-[#1D1D1F]">
            Data Privacy Guarantee: Compliant with RA 10173
          </h3>
          <p className="text-sm text-[#6E6E73] leading-relaxed">
            All attendance ledgers are encrypted and restricted strictly to authorized event directors, HR administrators, or designated supervisors.
          </p>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        {(["All", "Privacy", "Technical", "Deployment"] as const).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === category
                ? "bg-[#1D1D1F] text-white shadow-xs"
                : "bg-white text-[#6E6E73] hover:text-[#1D1D1F] border border-[#E5E5E7]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E5E5E7] overflow-hidden transition-all shadow-xs"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#FAFAFA] transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#007AFF]">
                    {faq.category}
                  </span>
                  <span className="block text-base sm:text-lg font-bold text-[#1D1D1F]">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`w-8 h-8 rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#1D1D1F] transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 bg-[#EBF4FF] text-[#0066CC]" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#6E6E73] leading-relaxed border-t border-[#F5F5F7]">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA on FAQ page */}
      <div className="mt-16 pt-12 border-t border-[#E5E5E7] text-center space-y-4">
        <h3 className="text-xl font-bold text-[#1D1D1F]">
          Have more questions about deployment for your team or organization?
        </h3>
        <p className="text-sm text-[#6E6E73] max-w-md mx-auto">
          Explore the live features showcase or walk through the 3-step check-in process.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1D1D1F] hover:bg-black rounded-full shadow-sm hover:shadow transition-all"
          >
            <span>Explore Features</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#1D1D1F] bg-white hover:bg-[#F5F5F7] border border-[#E5E5E7] rounded-full transition-colors"
          >
            <span>See How It Works</span>
            <ArrowRight className="w-4 h-4 text-[#6E6E73]" />
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
