"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-2 sm:pt-4 lg:pt-0 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-[#F5F5F7]">
      {/* Subtle ambient light gradient centered */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="w-[750px] h-[500px] bg-gradient-to-tr from-[#007AFF]/10 via-[#BFDBFE]/20 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      {/* Perfectly balanced container - phone on top on mobile/tablet, right on laptop/desktop */}
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-14 items-center justify-center">
          
          {/* Phone Mockup Column: FIRST on mobile & tablet, SECOND on desktop */}
          <div className="order-1 lg:order-2 flex items-center justify-center relative pt-6 sm:pt-9 md:pt-10 lg:pt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[460px] xl:max-w-[530px] flex items-center justify-center">
              
              {/* Phone Mockup with smooth gentle straightening & zoom-in, with bottom fade on mobile/tablet */}
              <div className="relative w-full h-[380px] sm:h-[430px] md:h-[480px] lg:h-[560px] xl:h-[660px] 2xl:h-[700px] flex items-center justify-center cursor-default transition-all duration-500 ease-out hover:-rotate-[6.7deg] hover:scale-[1.06] group z-10 max-lg:[mask-image:linear-gradient(to_bottom,black_62%,transparent_98%)] max-lg:[-webkit-mask-image:linear-gradient(to_bottom,black_62%,transparent_98%)]">
                <Image
                  src="/images/KlentroQR-preview.png"
                  alt="Klentro QR Mobile Attendance Check-In Screen"
                  fill
                  unoptimized
                  className="object-contain select-none pointer-events-none drop-shadow-[0_14px_28px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out group-hover:drop-shadow-[0_22px_40px_rgba(0,0,0,0.16)]"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 530px"
                />
              </div>

              {/* Seamless bottom fade gradient overlay matching background */}
              <div 
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 sm:h-36 md:h-40 bg-gradient-to-t from-[#F5F5F7] via-[#F5F5F7]/70 to-transparent pointer-events-none z-20 lg:hidden" 
              />

            </div>
          </div>

          {/* Copy Column: SECOND on mobile/tablet, FIRST on laptop/desktop */}
          <div className="order-2 lg:order-1 space-y-5 sm:space-y-6 text-center lg:text-left lg:pl-4 xl:pl-8 pt-0 sm:pt-2 md:pt-4 lg:pt-6 xl:pt-12">
            
            {/* Top Kicker Label */}
            <div>
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
                UNIVERSAL QR ATTENDANCE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[54px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.1] sm:leading-[1.08]">
              Know who&apos;s checked in with a single scan.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-base lg:text-lg font-normal text-[#6E6E73] leading-relaxed max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0">
              Log attendance in seconds, eliminate paper sheets, and manage verified records. 
              Klentro delivers fast, accurate, and contactless check-ins for classrooms, workplaces, and events right from your mobile app.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <Link
                href="/features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 text-base font-semibold text-white bg-[#007AFF] hover:bg-[#0066CC] active:scale-98 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#demo-video"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-base font-semibold text-[#1D1D1F] bg-[#FFFFFF] hover:bg-[#F5F5F7] border border-[#E5E5E7] rounded-full transition-colors shadow-xs group"
              >
                <Play className="w-4 h-4 text-[#007AFF] fill-[#007AFF] group-hover:scale-110 transition-transform" />
                <span>Watch 10s Demo</span>
              </a>
            </div>

            {/* Clean Note */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-[#1D1D1F]">
              <span className="w-2 h-2 rounded-full bg-[#007AFF] inline-block" />
              <span className="text-[#007AFF] font-bold">100% Paperless</span>
              <span className="text-[#6E6E73]">for classrooms, offices & events.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
