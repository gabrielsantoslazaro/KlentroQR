"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-0 pb-14 lg:pb-20 overflow-hidden bg-[#F5F5F7]">
      {/* Subtle ambient light gradient centered */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="w-[750px] h-[500px] bg-gradient-to-tr from-[#007AFF]/10 via-[#BFDBFE]/20 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      {/* Perfectly balanced 50/50 container shifted rightward to center */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center justify-center">
          
          {/* Left Column: Shifted to the right and pushed down slightly */}
          <div className="space-y-6 text-center lg:text-left lg:pl-8 xl:pl-10 pt-6 sm:pt-8 lg:pt-14">
            
            {/* Top Kicker Label */}
            <div>
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
                UNIVERSAL QR ATTENDANCE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.08]">
              Know who&apos;s checked in with a single scan.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg font-normal text-[#6E6E73] leading-relaxed max-w-lg mx-auto lg:mx-0">
              Log attendance in seconds, eliminate paper sheets, and manage verified records. 
              Klentro delivers fast, accurate, and contactless check-ins for classrooms, workplaces, and events right from your mobile app.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <Link
                href="/features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#1D1D1F] hover:bg-black active:scale-98 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#demo-video"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-[#1D1D1F] bg-[#FFFFFF] hover:bg-[#F5F5F7] border border-[#E5E5E7] rounded-full transition-colors shadow-xs group"
              >
                <Play className="w-4 h-4 text-[#007AFF] fill-[#007AFF] group-hover:scale-110 transition-transform" />
                <span>Watch 10s Demo</span>
              </a>
            </div>

            {/* Clean Note */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-[#1D1D1F]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block" />
              <span className="text-[#007AFF] font-bold">100% Paperless</span>
              <span className="text-[#6E6E73]">for classrooms, offices & events.</span>
            </div>

          </div>

          {/* Right Column: Phone Mockup */}
          <div className="flex items-center justify-center lg:justify-center relative">
            <div className="relative w-full max-w-[480px] sm:max-w-[530px] flex items-center justify-center">
              
              {/* Phone Mockup with smooth gentle straightening & zoom-in */}
              <div className="relative w-full h-[560px] sm:h-[650px] lg:h-[690px] flex items-center justify-center cursor-default transition-all duration-500 ease-out hover:-rotate-[6.7deg] hover:scale-[1.06] group z-10">
                <Image
                  src="/KlentroQR-preview.png"
                  alt="Klentro QR Mobile Attendance Check-In Screen"
                  fill
                  unoptimized
                  className="object-contain select-none pointer-events-none drop-shadow-[0_14px_28px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out group-hover:drop-shadow-[0_22px_40px_rgba(0,0,0,0.16)]"
                  priority
                  sizes="(max-width: 768px) 100vw, 530px"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
