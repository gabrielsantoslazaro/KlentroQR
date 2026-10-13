"use client";

import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    role: "Academic Perspective",
    name: "Engr. Rafael Mendoza",
    title: "University Instructor & Department Chair",
    initials: "RM",
    bgColor: "bg-[#BFDBFE]",
    textColor: "text-[#1E40AF]",
    quote: "The 10 to 15 minutes we used to lose calling student names every morning is completely recovered for lecture time. Generating the semestral attendance summary directly to Excel makes grade submission painless.",
  },
  {
    role: "Workplace & Operations",
    name: "Patricia Gomez",
    title: "HR & Office Operations Lead",
    initials: "PG",
    bgColor: "bg-[#BBF7D0]",
    textColor: "text-[#166534]",
    quote: "We replaced our slow biometric fingerprint scanner with Klentro QR badges. Employees scan in with their phones within one second, completely eliminating line congestion during morning shift arrivals.",
  },
  {
    role: "Conferences & Events",
    name: "Mark Dela Cruz",
    title: "Summit Director, Tech Assembly PH",
    initials: "MD",
    bgColor: "bg-[#FED7AA]",
    textColor: "text-[#9A3412]",
    quote: "During our annual conference with over 600 attendees, four staff members were scanning at different entrance gates simultaneously. The attendee roster synced in real time with zero duplicate entries.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div>
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
              REAL FEEDBACK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.12]">
            Loved by educators, teams, and organizers.
          </h2>
          <p className="text-base text-[#6E6E73] leading-relaxed">
            Discover how diverse organizations rely on Klentro for fast, reliable, and queue-free attendance tracking.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-[#E5E5E7] shadow-lg shadow-black/[0.03] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#E5E5E7]" />
                </div>

                <p className="text-sm text-[#1D1D1F] leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#F5F5F7] flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${item.bgColor} ${item.textColor} font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}
                >
                  {item.initials}
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-bold text-[#1D1D1F]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#6E6E73]">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
