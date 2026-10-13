"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const CARDS = [
  {
    image: "/images/KlentroQR-checking.png",
    title: "Fast Check-in with QR Code",
    desc: "Simply scan your unique QR code using any smartphone or camera scanner for instant, queue-free attendance.",
  },
  {
    image: "/images/KlentroQR-dashboard.png",
    title: "Real-time Attendance Tracking",
    desc: "Every check-in is automatically recorded and synced to the system in real time for effortless live monitoring.",
  },
  {
    image: "/images/KlentroQR-data.jpg",
    title: "Effortless Management & Reports",
    desc: "Generate and export comprehensive attendance records and logs for classes, offices, or events in a single click.",
  },
];

export default function HighlightsBar() {
  return (
    <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 bg-[#F5F5F7]">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-2xl lg:max-w-none mx-auto">
          {CARDS.map((card, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E5E7] shadow-sm flex flex-col justify-start h-full">
                {/* Illustration Image Container */}
                <div className="relative w-full h-[180px] sm:h-[200px] md:h-[150px] lg:h-[200px] xl:h-[220px] rounded-2xl overflow-hidden flex items-center justify-center mb-4 sm:mb-5 bg-[#F9F9FB]/60">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    unoptimized
                    className="object-contain p-2 drop-shadow-[0_8px_16px_rgba(0,0,0,0.10)]"
                    priority
                  />
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl md:text-[17px] lg:text-xl font-bold text-[#1D1D1F] tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-[13px] lg:text-sm font-normal text-[#6E6E73] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
