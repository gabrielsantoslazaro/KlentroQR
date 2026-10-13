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
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group">
            <Image
              src="/images/KlentroQR-logo.png"
              alt="KlentroQR Logo"
              width={56}
              height={56}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-105 transition-transform shrink-0"
              priority
            />
            <span className="font-extrabold text-xl sm:text-2xl lg:text-[26px] tracking-tight text-[#1D1D1F]">
              Klentro<span className="text-[#007AFF]">QR</span>
            </span>
          </Link>

          {/* Desktop & Laptop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm">
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

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/features"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#1D1D1F] hover:bg-black active:scale-98 rounded-full shadow-sm hover:shadow transition-all"
            >
              Explore Klentro
            </Link>
          </div>

          {/* Tablet & Mobile Right Action Group (Prevents cramping on iPad 768px-1023px) */}
          <div className="flex lg:hidden items-center gap-2.5 sm:gap-3">
            <Link
              href="/features"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-semibold text-white bg-[#1D1D1F] hover:bg-black active:scale-98 rounded-full shadow-xs transition-all"
            >
              Explore Klentro
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-2xl bg-[#E5E5E7]/70 flex items-center justify-center text-[#1D1D1F] hover:bg-[#E5E5E7] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Tablet & Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E5E5E7] bg-[#FFFFFF] px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1 pt-2 max-w-xl mx-auto">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-base transition-colors ${
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
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-medium text-white bg-[#1D1D1F] hover:bg-black rounded-full shadow-sm"
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
