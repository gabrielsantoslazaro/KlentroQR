import type { Metadata } from "next";
import Link from "next/link";
import { 
  Scale, 
  FileText, 
  ShieldAlert, 
  CheckCircle2, 
  Database, 
  Gavel, 
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms of Use | KlentroQR",
  description:
    "Official Terms of Use for Klentro QR Attendance System. Outlining acceptable use, anti-proxy verification standards, roster ownership, and legal compliance under Philippine law.",
};

const SECTIONS = [
  {
    id: "acceptance",
    number: "01",
    icon: Scale,
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the Klentro web application, camera scanning tools, QR badge generator, or attendance management dashboards (collectively referred to as the 'Service'), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.",
      "If you are using Klentro on behalf of an educational institution (college, university, high school), a corporate company, or an event organizing committee, you represent and warrant that you have the authority to bind that entity to these terms.",
    ],
  },
  {
    id: "acceptable-use",
    number: "02",
    icon: ShieldAlert,
    title: "Acceptable Use & Anti-Proxy Attendance Rules",
    content: [
      "Klentro is engineered to provide fair, authentic, and fast attendance tracking. The following activities are strictly prohibited:",
      "• Attendance Falsification & Proxy Clock-Ins: Generating duplicate QR codes, sharing QR badge screenshots to clock in for absent peers, or falsifying arrival timestamps.",
      "• Tampering & Reverse Engineering: Attempting to bypass cryptographic signature verification, tampering with scanner camera payloads, or probing internal system vulnerabilities.",
      "• Unauthorized Bulk Scraping: Using automated bots, crawlers, or unauthorized scripts to extract roster information or attendance ledgers.",
      "Violations may result in immediate suspension of access and reporting to the relevant academic dean's office or organizational administration.",
    ],
  },
  {
    id: "roster-ownership",
    number: "03",
    icon: Database,
    title: "Roster Ownership & Data Responsibility",
    content: [
      "Instructors, event coordinators, and organizational administrators retain 100% legal ownership of their uploaded rosters, attendee names, and generated attendance sheets.",
      "Klentro operates strictly as a data processor. We do not claim ownership of, sell, or commercialize any roster records uploaded to the platform.",
      "You are responsible for ensuring that you have obtained lawful consent from students, staff, or guests before uploading their personal details into the roster system.",
    ],
  },
  {
    id: "offline-storage",
    number: "04",
    icon: HardDriveIcon,
    title: "Offline Mode & Local Device Storage",
    content: [
      "Klentro offers offline-first scanning capabilities. During offline operation, attendance logs and camera scan records are securely stored within your local web browser's encrypted sandbox storage (IndexedDB / LocalStorage).",
      "You are responsible for safeguarding the scanning device (smartphone or tablet) during offline sessions and syncing or exporting records prior to clearing browser site data.",
    ],
  },
  {
    id: "availability",
    number: "05",
    icon: Clock,
    title: "Service Availability & Modifications",
    content: [
      "We strive to maintain 99.9% uptime for cloud-enabled features. However, Klentro is provided on an 'as is' and 'as available' basis.",
      "Scheduled maintenance, server upgrades, or unexpected third-party telecommunication network interruptions in the Philippines may temporarily affect cloud synchronization, though offline scanning remains active on client devices.",
      "We reserve the right to improve, add, or discontinue features with reasonable notice to active users.",
    ],
  },
  {
    id: "governing-law",
    number: "06",
    icon: Gavel,
    title: "Governing Law & Philippine Jurisdiction",
    content: [
      "These Terms of Use shall be governed by, interpreted, and construed in accordance with the laws of the Republic of the Philippines.",
      "This includes, but is not limited to, Republic Act No. 10175 (Cybercrime Prevention Act of 2012) and Republic Act No. 8792 (Electronic Commerce Act of 2000).",
      "Any dispute arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts of the Philippines.",
    ],
  },
];

function HardDriveIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Database {...props} />;
}

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F7] text-[#1D1D1F]">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero Section */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <ScrollReveal delay={0}>
            <div>
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
                LEGAL & OPERATIONAL GUIDELINES
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.08] mt-3">
              Terms of Use
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-normal text-[#6E6E73] leading-relaxed max-w-2xl mx-auto mt-3">
              Please read these terms carefully before deploying Klentro for your academic classroom, campus event, or corporate workplace.
            </p>

            <div className="pt-3 flex items-center justify-center gap-2 text-xs font-medium text-[#6E6E73]">
              <span>Last Updated: October 2026</span>
              <span>•</span>
              <span>Republic of the Philippines</span>
            </div>
          </ScrollReveal>
        </section>

        {/* Quick Highlights Summary Card */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <ScrollReveal delay={0}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E5E7] shadow-lg shadow-black/[0.03] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#007AFF] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-[#007AFF]" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#1D1D1F]">
                    Summary for Instructors & Attendees
                  </h2>
                  <p className="text-xs text-[#6E6E73]">
                    A plain-language snapshot of our operational standards:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-[#E5E5E7] space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1D1D1F]">
                    <CheckCircle2 className="w-4 h-4 text-[#007AFF]" />
                    <span>Your Data Belongs to You</span>
                  </div>
                  <p className="text-xs text-[#6E6E73] leading-relaxed">
                    We never sell, rent, or commercialize student or employee attendance rosters.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-[#E5E5E7] space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1D1D1F]">
                    <ShieldCheck className="w-4 h-4 text-[#007AFF]" />
                    <span>Zero Proxy Attendance</span>
                  </div>
                  <p className="text-xs text-[#6E6E73] leading-relaxed">
                    Sharing or screenshotting passes to fake check-ins is strictly prohibited by our system rules.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-[#E5E5E7] space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1D1D1F]">
                    <Building2 className="w-4 h-4 text-[#8B5CF6]" />
                    <span>Universal Deployment</span>
                  </div>
                  <p className="text-xs text-[#6E6E73] leading-relaxed">
                    Designed for classrooms, corporate workplaces, conferences, and seminars across the Philippines.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Numbered Legal Terms Panels */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pb-20 sm:pb-28">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <ScrollReveal key={section.id} delay={0}>
                <div
                  id={section.id}
                  className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E5E5E7] shadow-lg shadow-black/[0.03] space-y-5 transition-all hover:shadow-xl"
                >
                  <div className="flex items-center gap-3.5 pb-4 border-b border-[#F5F5F7]">
                    <span className="w-10 h-10 rounded-2xl bg-[#007AFF] text-white font-extrabold text-sm flex items-center justify-center shadow-xs shrink-0">
                      {section.number}
                    </span>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                        {section.title}
                      </h2>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#F5F5F7] border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#007AFF]" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {section.content.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-xs sm:text-sm text-[#4B5563] leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}

          {/* Footer Callout to Privacy Policy */}
          <ScrollReveal delay={0}>
            <div className="bg-white rounded-3xl p-8 border border-[#E5E5E7] shadow-sm text-center space-y-4">
              <h3 className="text-lg font-bold text-[#1D1D1F]">
                Looking for our Data Privacy Policy & RA 10173 details?
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E73] max-w-xl mx-auto">
                Learn how we protect student and employee records, our zero third-party tracking pledge, and how to request complete data deletion.
              </p>
              <div className="pt-2">
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D1D1F] text-white hover:bg-black font-semibold text-sm transition-all"
                >
                  <span>Read Full Privacy Policy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
