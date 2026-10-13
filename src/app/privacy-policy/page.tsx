import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  Trash2, 
  Camera, 
  FileSpreadsheet, 
  HardDrive, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  UserCheck
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy & RA 10173 Compliance | Klentro QR Attendance System",
  description:
    "Klentro Privacy Policy in full compliance with the Philippine Data Privacy Act of 2012 (RA 10173). Learn how attendee records are encrypted, processed offline, and how to exercise your rights to data erasure.",
};

const PRIVACY_PILLARS = [
  {
    icon: ShieldCheck,
    title: "RA 10173 Compliant",
    desc: "Strictly aligns with the National Privacy Commission (NPC) statutory mandates in the Philippines.",
  },
  {
    icon: Lock,
    title: "Zero Third-Party Selling",
    desc: "We never monetize, sell, or disclose student or employee attendance ledgers to external ad brokers.",
  },
  {
    icon: EyeOff,
    title: "No Biometrics or Face Rec",
    desc: "Camera feeds are processed locally in real-time. No photo captures, video streams, or facial scans are retained.",
  },
  {
    icon: Trash2,
    title: "Full Right to Erasure",
    desc: "Administrators and attendees can permanently purge session data and roster profiles at any time.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F7] text-[#1D1D1F]">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero Section */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div>
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
              PHILIPPINE DATA PRIVACY ACT COMPLIANCE
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.08]">
            Privacy Policy
          </h1>

          <p className="text-base sm:text-lg lg:text-xl font-normal text-[#6E6E73] leading-relaxed max-w-2xl mx-auto">
            Your privacy is our core engineering principle. Discover how Klentro protects personal attendance records under Republic Act No. 10173.
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-medium text-[#6E6E73]">
            <span>Effective: October 2026</span>
            <span>•</span>
            <span>National Privacy Commission (NPC) Guidelines</span>
          </div>
        </section>

        {/* 4 Pillars Grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRIVACY_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-[#E5E5E7] shadow-lg shadow-black/[0.03] space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#007AFF] flex items-center justify-center shadow-xs">
                    <Icon className="w-5 h-5 text-[#007AFF]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1D1D1F]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#6E6E73] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Comprehensive Privacy Panels */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pb-20 sm:pb-28">
          
          {/* Section 1: Data Collection & Minimization */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E5E5E7] shadow-lg shadow-black/[0.03] space-y-5">
            <div className="flex items-center gap-3.5 pb-4 border-b border-[#F5F5F7]">
              <span className="w-10 h-10 rounded-2xl bg-[#007AFF] text-white font-extrabold text-sm flex items-center justify-center shadow-xs shrink-0">
                01
              </span>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                  Data We Collect & Strict Minimization
                </h2>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#F5F5F7] border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shrink-0">
                <FileSpreadsheet className="w-5 h-5 text-[#007AFF]" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              In accordance with the principle of <em>Data Minimization</em> under RA 10173, Klentro collects only the minimum necessary information required to record attendance:
            </p>

            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-[#E5E5E7] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#10B981] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  What We Store for Attendance
                </span>
                <ul className="text-xs sm:text-sm text-[#4B5563] space-y-1.5 pl-6 list-disc">
                  <li><strong>Attendee Identification:</strong> Student/Employee ID Number and Full Name provided by the instructor or organizer.</li>
                  <li><strong>Section/Classification:</strong> Academic course code, student section, or corporate department.</li>
                  <li><strong>Time-in / Time-out Stamp:</strong> Exact date and timestamp when the QR code was scanned.</li>
                  <li><strong>Session Status:</strong> Whether the attendee arrived on time, late, or was marked excused.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-[#FEF2F2] border border-[#FECACA] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#EF4444] flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-[#EF4444]" />
                  What We NEVER Collect or Store
                </span>
                <ul className="text-xs sm:text-sm text-[#991B1B] space-y-1.5 pl-6 list-disc">
                  <li><strong>No Camera Photos or Video:</strong> The device camera feed is analyzed in volatile browser RAM to detect the QR pattern and discarded immediately. No photos or video recordings are saved.</li>
                  <li><strong>No Facial Biometrics:</strong> We do not perform facial recognition or facial vector tracking.</li>
                  <li><strong>No GPS Coordinates:</strong> We do not track continuous GPS location or background device movement.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: Camera Access & Local Sandbox */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E5E5E7] shadow-lg shadow-black/[0.03] space-y-5">
            <div className="flex items-center gap-3.5 pb-4 border-b border-[#F5F5F7]">
              <span className="w-10 h-10 rounded-2xl bg-[#007AFF] text-white font-extrabold text-sm flex items-center justify-center shadow-xs shrink-0">
                02
              </span>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                  Camera Permissions & On-Device Processing
                </h2>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#F5F5F7] border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shrink-0">
                <Camera className="w-5 h-5 text-[#007AFF]" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              When an instructor or event scanner opens the scanner interface, the browser prompts for permission to access the video camera. Here is how that stream is handled:
            </p>

            <ul className="text-xs sm:text-sm text-[#4B5563] space-y-2.5 pl-6 list-disc">
              <li><strong>In-Memory Processing:</strong> Frames captured by the camera are drawn onto a temporary HTML5 canvas for QR barcode matrix decoding.</li>
              <li><strong>Zero External Streaming:</strong> The camera stream is never transmitted over the internet or uploaded to any cloud server.</li>
              <li><strong>Revocable Permissions:</strong> You can revoke camera permissions at any time via your browser settings without affecting past CSV attendance exports.</li>
            </ul>
          </div>

          {/* Section 3: Philippine RA 10173 Rights */}
          <div id="ra10173" className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E5E5E7] shadow-lg shadow-black/[0.03] space-y-5">
            <div className="flex items-center gap-3.5 pb-4 border-b border-[#F5F5F7]">
              <span className="w-10 h-10 rounded-2xl bg-[#007AFF] text-white font-extrabold text-sm flex items-center justify-center shadow-xs shrink-0">
                03
              </span>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                  Your Rights Under RA 10173 (Data Privacy Act of 2012)
                </h2>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#F5F5F7] border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#007AFF]" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              As a data subject in the Philippines, you are protected by statutory rights guaranteed under Republic Act No. 10173. Klentro upholds these rights unconditionally:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-[#E5E5E7] space-y-1">
                <span className="text-xs font-bold text-[#1D1D1F] block">1. Right to be Informed</span>
                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  You have the right to know how your attendance logs are collected, processed, and stored.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-[#E5E5E7] space-y-1">
                <span className="text-xs font-bold text-[#1D1D1F] block">2. Right to Access</span>
                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  Attendees may request a copy of their attendance timestamps and present/late status from their organization.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-[#E5E5E7] space-y-1">
                <span className="text-xs font-bold text-[#1D1D1F] block">3. Right to Rectification</span>
                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  If an arrival was incorrectly logged, organizers can immediately correct the record within the dashboard.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-[#E5E5E7] space-y-1">
                <span className="text-xs font-bold text-[#1D1D1F] block">4. Right to Erasure / Blocking</span>
                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  You have the right to request the permanent deletion of your profile and records upon term completion.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Data Retention & Right to Deletion */}
          <div id="data-deletion" className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E5E5E7] shadow-lg shadow-black/[0.03] space-y-5">
            <div className="flex items-center gap-3.5 pb-4 border-b border-[#F5F5F7]">
              <span className="w-10 h-10 rounded-2xl bg-[#007AFF] text-white font-extrabold text-sm flex items-center justify-center shadow-xs shrink-0">
                04
              </span>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                  Data Retention & How to Delete Your Data
                </h2>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#F5F5F7] border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shrink-0">
                <Trash2 className="w-5 h-5 text-[#007AFF]" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              We believe data should not outlive its practical purpose. You maintain full sovereignty over your stored records:
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-[#E5E5E7] space-y-2">
                <span className="text-xs font-bold text-[#1D1D1F] block">
                  Self-Service 1-Click Session Purge:
                </span>
                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  Instructors and organizers can permanently delete any roster, session ledger, or class log directly from the app interface by clicking &ldquo;Clear Session Logs&rdquo; or clearing their browser cache.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-[#E5E5E7] space-y-2">
                <span className="text-xs font-bold text-[#1D1D1F] block">
                  Formal Erasure Request:
                </span>
                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  For institutions using cloud sync, send a data erasure request to our compliance desk. All corresponding student and employee records are wiped within 48 business hours with an audit certificate.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Contact Data Protection Officer */}
          <div className="bg-white rounded-3xl p-8 border border-[#E5E5E7] shadow-sm text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#007AFF] flex items-center justify-center mx-auto shadow-xs">
              <Mail className="w-6 h-6 text-[#007AFF]" />
            </div>
            <h3 className="text-xl font-bold text-[#1D1D1F]">
              Have a Question for Our Data Protection Officer?
            </h3>
            <p className="text-xs sm:text-sm text-[#6E6E73] max-w-lg mx-auto leading-relaxed">
              For privacy inquiries, National Privacy Commission inquiries, or institutional compliance audits, contact our compliance team directly.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D1D1F] text-white hover:bg-black font-semibold text-sm transition-all"
              >
                <span>View Security FAQ</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/terms-of-use"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E5E5E7] border border-[#E5E5E7] font-semibold text-sm transition-colors"
              >
                <span>Terms of Use</span>
              </Link>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
