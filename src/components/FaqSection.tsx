"use client";

import { useState } from "react";
import { ChevronDown, ShieldCheck, Lock, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: "Privacy" | "Technical" | "Deployment";
}

const FAQS: FaqItem[] = [
  {
    category: "Privacy",
    question: "Does Klentro collect or store personal attendee or employee records?",
    answer: "No. Klentro is architected with strict data minimization principles. Attendance records remain entirely within your organization's control. There are no third-party trackers, no data brokers, and no commercial profiling. In the local interactive demo, all records remain confined to temporary browser memory and reset upon reload.",
  },
  {
    category: "Privacy",
    question: "How does the system adhere to the Philippine Data Privacy Act (RA 10173)?",
    answer: "All attendee, employee, and participant identifiers are cryptographically hashed and signed before embedding into QR payloads. Access to raw attendance ledgers is role-gated strictly to authorized event leads, department heads, HR managers, or faculty leads, satisfying data minimization and proportionality requirements.",
  },
  {
    category: "Technical",
    question: "What hardware or equipment is required to scan attendance passes?",
    answer: "Klentro is 100% universal and hardware-free. Any modern iOS or Android smartphone or tablet can be used as a high-speed scanner utilizing its built-in camera. For high-volume entrance gates, conference halls, or office kiosks, standard USB and Bluetooth 2D barcode scanners are also supported.",
  },
  {
    category: "Technical",
    question: "Can the system operate if internet connection drops or in remote venues?",
    answer: "Yes. Klentro features an offline-first scanning engine. QR code validation happens locally on-device in under 200ms without requiring Wi-Fi or cellular data. Scanned timestamps are safely cached in encrypted local storage and automatically synchronize to your central ledger the moment connectivity is restored.",
  },
  {
    category: "Deployment",
    question: "Who can use Klentro, and what formats are supported for exporting records?",
    answer: "Klentro is universally built for academic classrooms, corporate offices, summits, seminars, workshops, and private organizations. Attendance logs export in 1-click to pre-formatted Microsoft Excel (.xlsx) and universal CSV spreadsheets for seamless payroll, HR, and grading integrations.",
  },
  {
    category: "Deployment",
    question: "Can attendees or staff bypass attendance by sharing QR code screenshots?",
    answer: "No. Klentro incorporates anti-proxy safeguards including dynamic rolling token validation, single-scan session expiration, and rapid timestamp correlation to prevent buddy-punching, screenshot sharing, or duplicate pass check-ins.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F5F5F7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5E7] text-xs font-semibold text-[#0066CC]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
            Data Privacy, Security & Universal Deployment
          </h2>
          <p className="text-base text-[#6E6E73] leading-relaxed max-w-2xl mx-auto">
            Essential answers for event organizers, HR leaders, educators, and enterprise teams regarding security, compliance, offline reliability, and universal setup.
          </p>
        </div>

        {/* Privacy Highlight Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-white border border-[#E5E5E7] flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm font-semibold text-[#1D1D1F]">
              Security Commitment: Zero Cloud Tracking in Demo
            </h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Any information entered into this interactive simulator remains confined to temporary client memory. Zero attendee identifiers, corporate records, or telemetry leave your machine.
            </p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
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
                  <span className="text-base font-semibold text-[#1D1D1F]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#1D1D1F] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 bg-[#EBF4FF] text-[#0066CC]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#6E6E73] leading-relaxed border-t border-[#F5F5F7] animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#0066CC]">
                      <Lock className="w-3 h-3" />
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
