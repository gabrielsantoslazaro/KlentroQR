"use client";

import { Zap, Trees, Clock, WifiOff } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const STATS = [
  {
    icon: Zap,
    value: "< 1s",
    label: "Scan Speed",
    description: "Sub-second camera detection and instant chime confirmation.",
  },
  {
    icon: Trees,
    value: "100%",
    label: "Paperless",
    description: "Completely eliminates lost sheets, pens, and paper waste.",
  },
  {
    icon: Clock,
    value: "0 min",
    label: "Roll Call Delays",
    description: "No lecture time lost to manual names calling.",
  },
  {
    icon: WifiOff,
    value: "Offline",
    label: "Campus Reliability",
    description: "Caches locally and syncs automatically when reconnected.",
  },
];

export default function MetricsCounter() {
  return (
    <section className="py-8 sm:py-12 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 80}>
                <div className="bg-white rounded-2xl p-5 border border-[#E5E5E7] shadow-xs flex flex-col items-start text-left space-y-3 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F5F7] border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center shadow-xs">
                    <Icon className="w-5 h-5 text-[#007AFF]" />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D1D1F]">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#007AFF] mt-1">
                      {stat.label}
                    </div>
                    <p className="text-xs text-[#6E6E73] mt-1 leading-relaxed max-w-[220px]">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
