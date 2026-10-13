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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CARDS.map((card, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E5E7] shadow-sm flex flex-col justify-start h-full">
                {/* Illustration Image Container */}
                <div className="relative w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden flex items-center justify-center mb-5 bg-[#F9F9FB]/60">
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
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#1D1D1F] tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm font-normal text-[#6E6E73] leading-relaxed">
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
