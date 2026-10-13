import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  BadgeCheck, 
  Scan, 
  FileSpreadsheet, 
  ArrowRight, 
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works | Klentro QR Attendance System",
  description:
    "See how Klentro simplifies attendance in 3 simple steps: generate verified QR passes, scan via mobile camera, and export Excel rosters.",
};

const DETAILED_STEPS = [
  {
    stepNumber: "01",
    kicker: "STEP 1: PASS GENERATION",
    title: "Generate Unique QR Attendance Passes",
    subtitle: "Every participant, employee, or student receives a tamper-resistant digital pass tied to their verified ID and organization roster.",
    image: "/KlentroQR-preview.png",
    imageAspect: "aspect-[1040/1600]",
    maxImageW: "max-w-[320px]",
    highlights: [
      "Access on mobile phone or print directly onto physical attendee badges",
      "Cryptographically signed payload prevents fake screenshot replication",
      "Includes affiliation, section/department, and verified photo avatar",
    ],
  },
  {
    stepNumber: "02",
    kicker: "STEP 2: RAPID SCANNING",
    title: "Sub-Second Mobile Camera Scan",
    subtitle: "Check-in coordinators, managers, or faculty point their phone camera at the attendee's pass. Scans decode in under 200 milliseconds.",
    image: "/KlentroQR-checking.png",
    imageAspect: "aspect-[4/3]",
    maxImageW: "max-w-[420px]",
    highlights: [
      "Instant sound chime and green confirmation banner on scan",
      "Accurate arrival timestamp tagged immediately to live record",
      "Works 100% offline in remote venues, basements, and Wi-Fi dead zones",
    ],
  },
  {
    stepNumber: "03",
    kicker: "STEP 3: REAL-TIME ROSTERS & EXPORTS",
    title: "Live Dashboard & One-Click CSV Export",
    subtitle: "Attendance updates live. Coordinators can view present, late, and capacity tallies before exporting directly to Excel.",
    image: "/KlentroQR-data.jpg",
    imageAspect: "aspect-[4/3]",
    maxImageW: "max-w-[420px]",
    highlights: [
      "Instant Excel & CSV download formatted ready for HRIS, payroll, or grading",
      "Automatic tardiness and capacity detection based on session start time",
      "Zero paper sheets, zero lost clipboards, zero manual tallying delays",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <section className="pt-8 pb-4 sm:pt-10 sm:pb-6 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div>
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
              WORKFLOW & ARCHITECTURE
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.06]">
            3 simple steps from the front door to Excel export.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl font-normal text-[#6E6E73] leading-relaxed max-w-2xl mx-auto">
            Engineered to eliminate paper sign-in sheets, doorway bottlenecks, and proxy check-ins across offices, conference halls, seminars, and classrooms.
          </p>
        </section>

        {/* Seamless Steps Showcase without panel divider lines */}
        <div className="space-y-4 sm:space-y-8">
          {DETAILED_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <section
                key={step.stepNumber}
                className="py-6 sm:py-10 bg-[#FFFFFF]"
              >
                <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    
                    {/* Visual Mockup */}
                    <div
                      className={`lg:col-span-5 flex items-center justify-center ${
                        isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                      }`}
                    >
                      <div className={`relative w-full ${step.maxImageW} ${step.imageAspect} flex items-center justify-center`}>
                        {step.imageAspect === "aspect-[1040/1600]" ? (
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            unoptimized
                            className="object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)]"
                            priority={idx === 0}
                            sizes="(max-width: 768px) 100vw, 360px"
                          />
                        ) : (
                          <div className="relative w-full h-full rounded-3xl bg-[#F9F9FB] p-4 flex items-center justify-center overflow-hidden shadow-sm">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                              <Image
                                src={step.image}
                                alt={step.title}
                                fill
                                unoptimized
                                className="object-contain p-3"
                                sizes="(max-width: 768px) 100vw, 420px"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Step Information & Highlights */}
                    <div
                      className={`lg:col-span-7 space-y-5 text-left ${
                        isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-2xl bg-[#007AFF] text-white font-extrabold text-base flex items-center justify-center shadow-xs">
                          {step.stepNumber}
                        </span>
                        <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
                          {step.kicker}
                        </span>
                      </div>

                      <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.12]">
                        {step.title}
                      </h2>

                      <p className="text-base sm:text-lg font-normal text-[#6E6E73] leading-relaxed max-w-xl">
                        {step.subtitle}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-3 pt-2">
                        {step.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm sm:text-base text-[#1D1D1F] font-medium leading-relaxed">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom CTA without divider line */}
        <section className="py-16 sm:py-20 bg-[#FFFFFF] text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D1D1F]">
              Ready to explore all system features?
            </h2>
            <p className="text-base sm:text-lg text-[#6E6E73] max-w-xl mx-auto">
              Check out the detailed feature showcase or review frequently asked questions on privacy and security.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#1D1D1F] hover:bg-black rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/faq"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-[#1D1D1F] bg-[#F5F5F7] hover:bg-[#E5E5E7] border border-[#E5E5E7] rounded-full transition-colors"
              >
                <span>View FAQ</span>
                <ArrowRight className="w-4 h-4 text-[#6E6E73]" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
