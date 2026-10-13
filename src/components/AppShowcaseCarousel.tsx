"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const CARDS = [
  {
    id: 1,
    title: "Scan in Seconds",
    desc: "Sub-second camera detection for classrooms, offices & events",
    image: "/images/KlentroQR-card1.jpg",
  },
  {
    id: 2,
    title: "Real-time Tracking",
    desc: "Live present tallies, late alerts, and room capacity",
    image: "/images/KlentroQR-card2.jpg",
  },
  {
    id: 3,
    title: "Cryptographic Passes",
    desc: "Tamper-proof badges that prevent proxy signing & screenshot sharing",
    image: "/images/KlentroQR-card3.jpg",
  },
  {
    id: 4,
    title: "1-Click Reports",
    desc: "Instant pre-formatted Excel and CSV attendance ledgers",
    image: "/images/KlentroQR-card4.jpg",
  },
  {
    id: 5,
    title: "100% Offline Mode",
    desc: "Zero Wi-Fi required. Scans cache locally and sync automatically",
    image: "/images/KlentroQR-card5.jpg",
  },
];

// Two identical halves of 10 cards each (4 sets total) for a 100% seamless, continuous loop
const SET_OF_TEN = [...CARDS, ...CARDS];
const MARQUEE_CARDS = [
  ...SET_OF_TEN.map((c, i) => ({ ...c, loopKey: `h1-${i}-${c.id}` })),
  ...SET_OF_TEN.map((c, i) => ({ ...c, loopKey: `h2-${i}-${c.id}` })),
];

export default function AppShowcaseCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();
    const speed = 55; // 55 pixels per second: steady, silky-smooth non-stop glide

    const loop = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      const track = trackRef.current;
      if (track) {
        // Continuous non-stop glide (does NOT stop on hover)
        posRef.current += speed * delta;

        // Seamless infinite loop wrap-around
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0 && posRef.current >= halfWidth) {
          posRef.current -= halfWidth;
        }

        track.style.transform = `translate3d(-${posRef.current}px, 0, 0)`;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="py-4 sm:py-6 bg-[#F5F5F7] overflow-hidden select-none">
      <div className="w-full overflow-hidden pointer-events-none">
        <div
          ref={trackRef}
          className="flex items-stretch gap-3.5 sm:gap-4 px-3"
          style={{ width: "max-content", willChange: "transform" }}
        >
          {MARQUEE_CARDS.map((card, idx) => (
            <div
              key={card.loopKey}
              className="shrink-0 w-[195px] sm:w-[220px] md:w-[245px] rounded-[24px] overflow-hidden bg-[#1D1D1F] border border-[#E5E5E7] shadow-sm"
            >
              <div className="relative aspect-[9/16] w-full bg-[#1D1D1F]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 195px, (max-width: 768px) 220px, 245px"
                  className="object-cover"
                  priority={idx < 5}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
