"use client";

import Image from "next/image";
import { Zap, Users } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="pt-10 pb-16 lg:pt-14 lg:pb-20 bg-[#FFFFFF] border-b border-[#E5E5E7]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-14">
        
        {/* Top Header Section (Tarsi Style) */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Section Kicker */}
          <div>
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
              FEATURES
            </span>
          </div>

          {/* Main Section Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.08]">
            Everything you need to run your attendance.
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-normal text-[#6E6E73] leading-relaxed max-w-2xl mx-auto">
            Klentro started as a way to log attendance in seconds. It grew into a full classroom and campus attendance ecosystem, covering dynamic QR passes, real-time rosters, automated exports, and student records, without ever slowing you down.
          </p>
        </div>

        {/* Two-Column Feature Showcase Panel (Tarsi Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Upright Phone Mockup */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[373/668] flex items-center justify-center">
              <Image
                src="/images/KlentroQR-class-attendance.png"
                alt="Klentro QR Mobile Attendance Check-In Screen"
                fill
                unoptimized
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.14)]"
                priority
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
          </div>

          {/* Right Column: Copy & Mini Feature Cards */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Kicker */}
            <div>
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
                SEE IT CLEARLY
              </span>
            </div>

            {/* Headline */}
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.12]">
              Your whole class attendance, on one screen.
            </h3>

            {/* Paragraph */}
            <p className="text-base sm:text-lg font-normal text-[#6E6E73] leading-relaxed max-w-xl">
              Daily logs, time-in records, section masterlists, and absent summaries, tracked together rather than scattered across paper sheets.
            </p>

            {/* Two Side-by-Side Cards (Tarsi Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-3">
              
              {/* Card 1 */}
              <div className="bg-[#F9F9FB] rounded-2xl p-6 border border-[#E5E5E7] shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#007AFF]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1D1D1F]">
                    Log in seconds
                  </h4>
                  <p className="text-xs sm:text-sm font-normal text-[#6E6E73] mt-1.5 leading-relaxed">
                    Scan student QR passes with instant camera decode, timestamp verification, and sound cues.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#F9F9FB] rounded-2xl p-6 border border-[#E5E5E7] shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#007AFF]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1D1D1F]">
                    Every section together
                  </h4>
                  <p className="text-xs sm:text-sm font-normal text-[#6E6E73] mt-1.5 leading-relaxed">
                    Class sections, student IDs, and department rosters stay organized and in sync.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
