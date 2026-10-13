import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Zap, 
  Users, 
  Activity, 
  Clock, 
  FileSpreadsheet, 
  TrendingUp, 
  WifiOff, 
  Smartphone,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Features | KlentroQR",
  description:
    "Explore Klentro's complete mobile attendance features: instant student QR code scanning, live section rosters, automated Excel exports, and offline reliability.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
      <Navbar />

      <main className="flex-1">
        {/* Top Header Section (Tarsi Style - Compact & Clean) */}
        <section className="pt-6 pb-2 sm:pt-8 sm:pb-3 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <ScrollReveal delay={0}>
            {/* Section Kicker */}
            <div>
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
                FEATURES
              </span>
            </div>

            {/* Main Section Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.08] mt-3">
              Everything you need to run your attendance.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl font-normal text-[#6E6E73] leading-relaxed max-w-2xl mx-auto mt-3">
              Klentro started as a way to log attendance in seconds. It grew into a full classroom and campus attendance ecosystem, covering dynamic QR passes, real-time rosters, automated exports, and student records, without ever slowing you down.
            </p>
          </ScrollReveal>
        </section>

        {/* =========================================================================
            FEATURE 1: SEE IT CLEARLY (Image LEFT, Content RIGHT) - NO LINE DIVIDERS, COMPACT
        ========================================================================= */}
        <section className="pt-2 pb-4 sm:pt-3 sm:pb-6 bg-[#FFFFFF]">
          <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Upright Phone Mockup */}
              <ScrollReveal delay={0} className="lg:col-span-5 flex items-center justify-center">
                <div className="relative w-full max-w-[250px] sm:max-w-[280px] aspect-[373/668] flex items-center justify-center">
                  <Image
                    src="/images/KlentroQR-class-attendance.png"
                    alt="Klentro QR Mobile Attendance Check-In Screen"
                    fill
                    unoptimized
                    className="object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)]"
                    priority
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
              </ScrollReveal>

              {/* Right Column: Copy & Mini Feature Cards */}
              <ScrollReveal delay={100} className="lg:col-span-7 space-y-5 text-left">
                <div>
                  <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
                    SEE IT CLEARLY
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.12]">
                  Your whole class attendance, on one screen.
                </h2>

                <p className="text-base sm:text-lg font-normal text-[#6E6E73] leading-relaxed max-w-xl">
                  Daily logs, time-in records, section masterlists, and absent summaries, tracked together rather than scattered across paper sheets.
                </p>

                {/* 2 Side-by-Side Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#F9F9FB] rounded-2xl p-5 border border-[#E5E5E7] shadow-xs space-y-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shadow-xs">
                      <Zap className="w-4 h-4 text-[#007AFF]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1D1D1F]">
                        Log in seconds
                      </h3>
                      <p className="text-xs sm:text-sm font-normal text-[#6E6E73] mt-1 leading-relaxed">
                        Scan student QR passes with instant camera decode, timestamp verification, and sound cues. Fast enough for 50-student classes.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F9F9FB] rounded-2xl p-5 border border-[#E5E5E7] shadow-xs space-y-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shadow-xs">
                      <Users className="w-4 h-4 text-[#007AFF]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1D1D1F]">
                        Every section together
                      </h3>
                      <p className="text-xs sm:text-sm font-normal text-[#6E6E73] mt-1 leading-relaxed">
                        Class sections, student IDs, and department rosters stay organized and in sync as students scan in.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* =========================================================================
            FEATURE 2: REAL-TIME TRACKING (Content LEFT, Image RIGHT) - NO DIVIDERS, COMPACT
        ========================================================================= */}
        <section className="pt-2 pb-4 sm:pt-3 sm:pb-6 bg-[#FFFFFF]">
          <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Copy & Mini Feature Cards */}
              <ScrollReveal delay={100} className="lg:col-span-7 space-y-5 text-left order-2 lg:order-1">
                <div>
                  <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
                    REAL-TIME ROSTERS
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.12]">
                  Know who is present before the lecture begins.
                </h2>

                <p className="text-base sm:text-lg font-normal text-[#6E6E73] leading-relaxed max-w-xl">
                  Every scan registers immediately in the classroom roster. Instructors and event organizers can monitor arrivals live without interrupting instruction for roll calls.
                </p>

                {/* 2 Side-by-Side Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#F9F9FB] rounded-2xl p-5 border border-[#E5E5E7] shadow-xs space-y-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shadow-xs">
                      <Activity className="w-4 h-4 text-[#007AFF]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1D1D1F]">
                        Instant live sync
                      </h3>
                      <p className="text-xs sm:text-sm font-normal text-[#6E6E73] mt-1 leading-relaxed">
                        Device check-ins sync to the cloud instantaneously, giving instructors an accurate view of room capacity and arrivals.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F9F9FB] rounded-2xl p-5 border border-[#E5E5E7] shadow-xs space-y-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shadow-xs">
                      <Clock className="w-4 h-4 text-[#007AFF]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1D1D1F]">
                        Automatic late thresholds
                      </h3>
                      <p className="text-xs sm:text-sm font-normal text-[#6E6E73] mt-1 leading-relaxed">
                        Define custom grace periods per subject; late arrivals are automatically tagged and flagged with exact timestamps.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Column: Upright/Angled Mockup */}
              <ScrollReveal delay={0} className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
                <div className="relative w-full max-w-[250px] sm:max-w-[280px] aspect-[373/668] flex items-center justify-center">
                  <Image
                    src="/images/KlentroQR-present.png"
                    alt="Klentro Real-time Attendance Dashboard"
                    fill
                    unoptimized
                    className="object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)]"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* =========================================================================
            FEATURE 3: AUTOMATED REPORTS & EXPORTS (Image LEFT, Content RIGHT) - NO DIVIDERS, COMPACT
        ========================================================================= */}
        <section className="pt-2 pb-4 sm:pt-3 sm:pb-6 bg-[#FFFFFF]">
          <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Data & Analytics Illustration */}
              <ScrollReveal delay={0} className="lg:col-span-5 flex items-center justify-center">
                <div className="relative w-full max-w-[250px] sm:max-w-[280px] aspect-[373/668] flex items-center justify-center">
                  <Image
                    src="/images/KlentroQR-export.png"
                    alt="Klentro Attendance Data and CSV Export"
                    fill
                    unoptimized
                    className="object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)]"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
              </ScrollReveal>

              {/* Right Column: Copy & Mini Feature Cards */}
              <ScrollReveal delay={100} className="lg:col-span-7 space-y-5 text-left">
                <div>
                  <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
                    AUTOMATED REPORTS
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.12]">
                  One-click exports for grades and school audits.
                </h2>

                <p className="text-base sm:text-lg font-normal text-[#6E6E73] leading-relaxed max-w-xl">
                  Forget spending hours tallying tick marks on manual sheets. Klentro compiles daily, weekly, and semestral attendance into spreadsheet-ready formats instantly.
                </p>

                {/* 2 Side-by-Side Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#F9F9FB] rounded-2xl p-5 border border-[#E5E5E7] shadow-xs space-y-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shadow-xs">
                      <FileSpreadsheet className="w-4 h-4 text-[#007AFF]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1D1D1F]">
                        Excel & CSV export
                      </h3>
                      <p className="text-xs sm:text-sm font-normal text-[#6E6E73] mt-1 leading-relaxed">
                        Download complete attendance sheets pre-formatted with student ID, name, section, date, and exact time-in.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F9F9FB] rounded-2xl p-5 border border-[#E5E5E7] shadow-xs space-y-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shadow-xs">
                      <TrendingUp className="w-4 h-4 text-[#007AFF]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1D1D1F]">
                        Summary statistics
                      </h3>
                      <p className="text-xs sm:text-sm font-normal text-[#6E6E73] mt-1 leading-relaxed">
                        Calculate overall attendance percentages and automatically flag students at risk of excessive absences.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* =========================================================================
            FEATURE 4: OFFLINE & CAMPUS REALITY (Content LEFT, Image RIGHT) - NO DIVIDERS, COMPACT
        ========================================================================= */}
        <section className="pt-2 pb-6 sm:pt-3 sm:pb-8 bg-[#FFFFFF]">
          <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Copy & Mini Feature Cards */}
              <ScrollReveal delay={100} className="lg:col-span-7 space-y-5 text-left order-2 lg:order-1">
                <div>
                  <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
                    OFFLINE & RELIABLE
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.12]">
                  Zero bottlenecks, even when campus Wi-Fi drops.
                </h2>

                <p className="text-base sm:text-lg font-normal text-[#6E6E73] leading-relaxed max-w-xl">
                  Campuses often have dead zones in basements and auditoriums. Klentro is engineered offline-first so class sessions and event check-ins never stall.
                </p>

                {/* 2 Side-by-Side Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#F9F9FB] rounded-2xl p-5 border border-[#E5E5E7] shadow-xs space-y-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shadow-xs">
                      <WifiOff className="w-4 h-4 text-[#007AFF]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1D1D1F]">
                        Offline scan queueing
                      </h3>
                      <p className="text-xs sm:text-sm font-normal text-[#6E6E73] mt-1 leading-relaxed">
                        Scans continue smoothly without internet. All check-in timestamps are locally verified and synced once reconnected.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F9F9FB] rounded-2xl p-5 border border-[#E5E5E7] shadow-xs space-y-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shadow-xs">
                      <Smartphone className="w-4 h-4 text-[#007AFF]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1D1D1F]">
                        Universal phone scanning
                      </h3>
                      <p className="text-xs sm:text-sm font-normal text-[#6E6E73] mt-1 leading-relaxed">
                        Use any iOS or Android phone or tablet camera for fast check-in without specialized barcode reader hardware.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Column: Checking Illustration Mockup */}
              <ScrollReveal delay={0} className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
                <div className="relative w-full max-w-[250px] sm:max-w-[280px] aspect-[373/668] flex items-center justify-center">
                  <Image
                    src="/images/KlentroQR-offline.png"
                    alt="Klentro Fast Check-in Screen"
                    fill
                    unoptimized
                    className="object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)]"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* =========================================================================
            BOTTOM NAVIGATION CTA - CLEAN, NO LINE DIVIDER
        ========================================================================= */}
        <section className="pt-12 pb-20 bg-[#FFFFFF] text-center">
          <ScrollReveal delay={0} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D1D1F]">
              Ready to modernize your classroom attendance?
            </h2>
            <p className="text-base sm:text-lg text-[#6E6E73] max-w-xl mx-auto">
              Explore the 3-step student check-in workflow or return to the main landing page.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Link
                href="/how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#007AFF] hover:bg-[#0066CC] active:scale-98 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <span>Review 3-Step Workflow</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-[#1D1D1F] bg-[#F5F5F7] hover:bg-[#E5E5E7] border border-[#E5E5E7] rounded-full transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-[#6E6E73]" />
                <span>Return to Home</span>
              </Link>
            </div>
          </ScrollReveal>
        </section>

      </main>

      <Footer />
    </div>
  );
}
