"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  UserPlus, 
  QrCode, 
  Camera, 
  FileSpreadsheet, 
  WifiOff, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  CheckSquare,
  Square,
  HelpCircle,
  Copy,
  Check,
  GraduationCap,
  Briefcase,
  Users
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function GuideClient() {
  const [activeTab, setActiveTab] = useState<"all" | "schools" | "events" | "offices">("all");
  const [copiedCsv, setCopiedCsv] = useState(false);

  // Interactive pre-flight checklist state (all default to unchecked)
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Import your attendee roster CSV (Student ID, Name, Section/Dept)", checked: false },
    { id: 2, text: "Generate and distribute individual digital QR passes or print ID badges", checked: false },
    { id: 3, text: "Open Klentro scanner on your smartphone and grant camera permission", checked: false },
    { id: 4, text: "Run a test scan with one badge to verify audio chime confirmation", checked: false },
    { id: 5, text: "Conduct live check-ins at entrance gate and download final Excel report", checked: false },
  ]);

  const toggleCheck = (id: number) => {
    setChecklist(prev =>
      prev.map(item => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const completedCount = checklist.filter(i => i.checked).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  const copyCsvTemplate = () => {
    const csvContent = `ID_Number,Full_Name,Department_or_Section,Email\n2026-00101,Juan Dela Cruz,BSIT 4-A,juan@student.edu.ph\n2026-00102,Maria Clara Santos,BSIT 4-A,maria@student.edu.ph\n2026-00103,Mark Anthony Reyes,BSIT 4-A,mark@student.edu.ph`;
    navigator.clipboard.writeText(csvContent);
    setCopiedCsv(true);
    setTimeout(() => setCopiedCsv(false), 2000);
  };

  const steps = [
    {
      step: "01",
      title: "Create Your Roster & Masterlist",
      tagline: "Set up the attendees you want to track in under 2 minutes.",
      icon: UserPlus,
      instruction: "Organize your attendees before your class session, corporate shift, or seminar begins.",
      details: [
        "Single Entry: Type attendee names and ID numbers one by one directly in the app.",
        "Bulk CSV Import: Drag and drop an existing Excel or Google Sheets roster (.csv) to load hundreds in seconds.",
        "Set Custom Cutoffs: Define grace periods (e.g. arrivals after 15 minutes marked as 'Late').",
      ],
      tip: "You can reuse the same roster across multiple sessions or entire semesters without re-uploading.",
    },
    {
      step: "02",
      title: "Generate & Distribute QR Passes",
      tagline: "Every attendee receives a cryptographically unique attendance pass.",
      icon: QrCode,
      instruction: "Klentro issues verified passes that can be shown digitally on smartphones or printed on physical ID cards.",
      details: [
        "Digital Passes: Send one-click links via email, campus portal, or Messenger group chats.",
        "Offline Ready: Attendees can save their QR badge to their phone photo gallery or Apple/Google Wallet.",
        "Anti-Proxy Tokens: Dynamic cryptographic signatures prevent students from sharing screenshot clones.",
      ],
      tip: "Printed passes laminated on student or employee ID lanyards scan just as fast as smartphone screens.",
    },
    {
      step: "03",
      title: "Scan Attendees at the Door",
      tagline: "Sub-second camera detection keeps doorway entry rapid and queue-free.",
      icon: Camera,
      instruction: "Open the Klentro scanner on any smartphone, tablet, or mounted laptop webcam.",
      details: [
        "Point your camera at the pass from 6 to 12 inches away—detection occurs in under 200 milliseconds.",
        "Instant audio chime and emerald screen flash confirm a valid check-in.",
        "Exact time-in timestamps and arrival status (On-Time or Late) are automatically recorded.",
      ],
      tip: "No Wi-Fi? Klentro works completely offline, storing verified check-ins locally until internet resumes.",
    },
    {
      step: "04",
      title: "Monitor Live Attendance & Export Reports",
      tagline: "Real-time attendee counts and 1-click Excel spreadsheet downloads.",
      icon: FileSpreadsheet,
      instruction: "View who has checked in while your session is active, then export finalized logs whenever you're ready.",
      details: [
        "Check live room capacity, present tallies, and unexcused absences on the live counter.",
        "Click 'Export CSV' or 'Export Excel' to download pre-formatted attendance ledgers.",
        "Spreadsheet ledgers include attendee ID, full name, exact timestamp, and late/present status.",
      ],
      tip: "Exports are formatted for direct copy-pasting into university registrar systems or corporate payroll sheets.",
    },
  ];

  const bestPractices = [
    {
      icon: WifiOff,
      title: "Offline Scanning Advice",
      desc: "If you're in a campus basement or venue with spotty Wi-Fi, simply keep scanning. All timestamps remain 100% accurate and will sync automatically once connected.",
    },
    {
      icon: Lightbulb,
      title: "Glare & Screen Brightness",
      desc: "For attendees with high screen brightness or reflective screen protectors, tilt the scanning camera slightly at a 30 to 45-degree angle rather than directly perpendicular.",
    },
    {
      icon: ShieldCheck,
      title: "Camera Permissions",
      desc: "When launching the scanner for the first time, tap 'Allow' on the browser camera prompt. Klentro never records video footage or uploads photos.",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Header Section */}
      <section className="pt-16 sm:pt-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <ScrollReveal delay={0}>
          <div>
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
              OFFICIAL SYSTEM MANUAL & GUIDE
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.08] mt-3">
            How to use the Klentro app.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl font-normal text-[#6E6E73] leading-relaxed max-w-2xl mx-auto mt-3">
            A step-by-step user manual covering roster creation, pass distribution, doorway camera scanning, and Excel data export.
          </p>

          {/* Quick Role Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#1D1D1F] text-white shadow-xs"
                  : "bg-white text-[#6E6E73] border border-[#E5E5E7] hover:text-[#1D1D1F]"
              }`}
            >
              Universal Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("schools")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "schools"
                  ? "bg-[#007AFF] text-white shadow-xs"
                  : "bg-white text-[#6E6E73] border border-[#E5E5E7] hover:text-[#1D1D1F]"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Classrooms & Campuses</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("events")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "events"
                  ? "bg-[#007AFF] text-white shadow-xs"
                  : "bg-white text-[#6E6E73] border border-[#E5E5E7] hover:text-[#1D1D1F]"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Seminars & Events</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("offices")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "offices"
                  ? "bg-[#007AFF] text-white shadow-xs"
                  : "bg-white text-[#6E6E73] border border-[#E5E5E7] hover:text-[#1D1D1F]"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Offices & Workplaces</span>
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* Interactive Pre-Flight Checklist Panel */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0}>
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E5E5E7] shadow-lg shadow-black/[0.03] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F5F5F7]">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#007AFF]">
                  INTERACTIVE CHECKLIST
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                  Organizer Pre-Session Checklist
                </h2>
                <p className="text-xs sm:text-sm text-[#6E6E73]">
                  Check off tasks as you prepare your session to ensure zero friction at the door.
                </p>
              </div>

              {/* Progress Badge */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="text-right">
                  <span className="text-xs font-bold text-[#1D1D1F] block">
                    {completedCount} of {checklist.length} Complete
                  </span>
                  <span className="text-[11px] text-[#6E6E73]">
                    {progressPercent}% Ready
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center font-bold text-sm text-[#007AFF]">
                  {progressPercent}%
                </div>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3">
              {checklist.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleCheck(item.id)}
                  className={`w-full flex items-start gap-3.5 p-3.5 rounded-2xl text-left transition-all cursor-pointer ${
                    item.checked
                      ? "bg-[#EFF6FF]/70 border border-[#BFDBFE] text-[#1D1D1F]"
                      : "bg-[#F9F9FB] border border-[#E5E5E7] hover:bg-[#F5F5F7] text-[#4B5563]"
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {item.checked ? (
                      <CheckCircle2 className="w-5 h-5 text-[#007AFF]" />
                    ) : (
                      <Square className="w-5 h-5 text-[#9CA3AF]" />
                    )}
                  </div>
                  <span className={`text-xs sm:text-sm leading-relaxed ${item.checked ? "line-through text-[#6B7280]" : "font-medium"}`}>
                    {item.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Numbered Steps Showcase */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={idx} delay={idx * 60}>
              <div
                className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E5E5E7] shadow-lg shadow-black/[0.03] space-y-6"
              >
                {/* Step Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#F5F5F7]">
                  <div className="flex items-center gap-3.5">
                    <span className="w-10 h-10 rounded-2xl bg-[#007AFF] text-white font-extrabold text-base flex items-center justify-center shadow-xs shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                        {item.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#6E6E73] mt-0.5">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#F5F5F7] border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#007AFF]" />
                  </div>
                </div>

                {/* Step Instructions */}
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-[#1D1D1F] font-medium leading-relaxed">
                    {item.instruction}
                  </p>

                  <div className="space-y-2.5 pl-1">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                        <span className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Step 1 Bonus: Copyable CSV Template */}
                  {item.step === "01" && (
                    <div className="mt-4 p-4 rounded-2xl bg-[#1D1D1F] text-white space-y-2">
                      <div className="flex items-center justify-between text-xs text-[#A1A1AA]">
                        <span className="font-mono uppercase tracking-wider text-[11px] text-[#007AFF]">
                          Recommended CSV Roster Schema
                        </span>
                        <button
                          type="button"
                          onClick={copyCsvTemplate}
                          className="inline-flex items-center gap-1 text-xs text-white hover:text-[#007AFF] transition-colors cursor-pointer"
                        >
                          {copiedCsv ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedCsv ? "Copied!" : "Copy CSV Header"}</span>
                        </button>
                      </div>
                      <code className="block text-xs font-mono text-[#D4D4D8] overflow-x-auto whitespace-pre py-1">
                        ID_Number,Full_Name,Department_or_Section,Email
                      </code>
                    </div>
                  )}
                </div>

                {/* Pro Tip Box */}
                <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-[#E5E5E7] flex items-start gap-3">
                  <Lightbulb className="w-4 h-4 text-[#007AFF] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#6E6E73] leading-relaxed">
                    <strong className="text-[#1D1D1F]">Pro Tip:</strong> {item.tip}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>

      {/* Best Practices & Troubleshooting Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <ScrollReveal delay={0}>
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#007AFF]">
              TROUBLESHOOTING & BEST PRACTICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F]">
              Tips for smooth day-to-day operation.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-2xl lg:max-w-none mx-auto">
          {bestPractices.map((tip, idx) => {
            const Icon = tip.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 80} className="h-full">
                <div
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E5E7] shadow-xs flex flex-col justify-between space-y-4 h-full"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#007AFF] flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5 text-[#007AFF]" />
                    </div>
                    <h3 className="text-base font-bold text-[#1D1D1F]">
                      {tip.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Navigation CTA */}
        <ScrollReveal delay={0}>
          <div className="mt-12 p-8 rounded-3xl bg-white border border-[#E5E5E7] shadow-lg shadow-black/[0.03] text-center space-y-4">
            <h3 className="text-xl font-bold text-[#1D1D1F]">
              Ready to try the system out?
            </h3>
            <p className="text-sm text-[#6E6E73] max-w-md mx-auto">
              Explore the full feature list, check our transparent pricing, or return to the overview page.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#007AFF] hover:bg-[#0066CC] rounded-full shadow-xs transition-all"
              >
                <span>View Pricing Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#1D1D1F] bg-[#F5F5F7] hover:bg-[#E5E5E7] border border-[#E5E5E7] rounded-full transition-colors"
              >
                <span>Explore Features</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
