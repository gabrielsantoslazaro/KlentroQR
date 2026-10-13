"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1F] text-[#A1A1AA] pt-16 pb-12 sm:pt-20 sm:pb-16 border-t border-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Brand & Universal Description */}
          <div className="lg:col-span-6 space-y-5">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-1.5 sm:gap-2 group">
              <Image
                src="/images/KlentroQR-logo.png"
                alt="KlentroQR Logo"
                width={56}
                height={56}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-105 transition-transform shrink-0"
              />
              <span className="font-extrabold text-2xl sm:text-[26px] tracking-tight text-white">
                Klentro<span className="text-[#007AFF]">QR</span>
              </span>
            </Link>

            {/* Description */}
            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-md">
              The universal smart QR attendance system built for classrooms, workplaces, and events. Log attendance in seconds, eliminate paper sheets, and manage verified records on your phone, offline, with no account needed.
            </p>
          </div>

          {/* Right Columns: Quick Links (Navbar pages) & Legal */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:gap-14">
            
            {/* Column 1: QUICK LINKS (All Navbar Links) */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#71717A]">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/features" className="text-[#A1A1AA] hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="text-[#A1A1AA] hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-[#A1A1AA] hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/guide" className="text-[#A1A1AA] hover:text-white transition-colors">
                    Guide
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-[#A1A1AA] hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: LEGAL */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#71717A]">
                Legal
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/terms-of-use" className="text-[#A1A1AA] hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-[#A1A1AA] hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Credits Divider */}
        <div className="mt-14 pt-8 border-t border-white/10 flex items-center justify-center text-xs text-[#71717A]">
          <div className="flex items-center gap-1.5 text-center">
            <span>© 2026 Klentro QR Attendance System.</span>
            <span>•</span>
            <span>All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
