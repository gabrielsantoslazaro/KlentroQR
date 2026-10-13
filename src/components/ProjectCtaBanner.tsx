import Link from "next/link";
import { QrCode, ArrowUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ProjectCtaBanner() {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal delay={0}>
          <div className="relative rounded-3xl bg-[#1D1D1F] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
            {/* Subtle glow circle */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 bg-[#007AFF]/25 rounded-full blur-3xl"
            />

            <div className="relative z-10 max-w-2xl space-y-6">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-md border border-white/15">
                <span>Built for Teams, Classrooms & Event Organizers</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Ready to make attendance fast, accurate, and paperless?
              </h2>

              <p className="text-base sm:text-lg text-[#AAAAAA] leading-relaxed">
                Experience fast, contactless attendance on your mobile device. 
                Scan attendee QR passes and generate instant attendance reports with zero hassle across any organization.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#007AFF] hover:bg-[#0066CC] active:scale-98 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  <QrCode className="w-5 h-5" />
                  <span>Explore Features</span>
                </Link>

                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
                >
                  <span>Review How It Works</span>
                  <ArrowUp className="w-4 h-4 rotate-45" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
