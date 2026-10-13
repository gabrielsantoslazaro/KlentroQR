"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Features", href: "/features" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "Guide", href: "/guide" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#F5F5F7]/95 border-b border-[#E5E5E7]/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group">
            <Image
              src="/images/KlentroQR-logo.png"
              alt="KlentroQR Logo"
              width={56}
              height={56}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-105 transition-transform shrink-0"
              priority
            />
            <span className="font-extrabold text-2xl sm:text-[26px] tracking-tight text-[#1D1D1F]">
              Klentro<span className="text-[#007AFF]">QR</span>
            </span>
          </Link>

          {/* Desktop Navigation Links (Tarsi Style with Active Location Indicator) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors py-1 ${
                    isActive
                      ? "text-[#1D1D1F] font-bold"
                      : "text-[#6E6E73] font-medium hover:text-[#1D1D1F]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Tarsi-style Solid Dark Pill CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/features"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#1D1D1F] hover:bg-black active:scale-98 rounded-full shadow-sm hover:shadow transition-all"
            >
              Explore Klentro
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1D1D1F] hover:bg-[#E5E5E7] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E5E7] bg-[#FFFFFF] px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1 pt-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-[#F5F5F7] text-[#1D1D1F] font-bold"
                      : "text-[#6E6E73] font-medium hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/features"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#1D1D1F] hover:bg-black rounded-full shadow-sm"
              >
                <span>Explore Klentro</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
