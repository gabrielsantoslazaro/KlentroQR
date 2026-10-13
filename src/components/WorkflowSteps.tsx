import { BadgeCheck, Scan, FileDown, ArrowRight } from "lucide-react";

const STEPS = [
  {
    stepNumber: "01",
    title: "Generate Student QR Pass",
    desc: "Every enrolled student receives a unique digital badge containing their verified Student ID and Academic Section. Accessible on mobile or printed onto ID cards.",
    icon: BadgeCheck,
    badge: "Digital or Printed",
  },
  {
    stepNumber: "02",
    title: "Rapid Kiosk or Tablet Scan",
    desc: "Students present their QR code to the entrance tablet or class officer's device. No shared pens, no clipboard bottleneck, and zero physical paper waste.",
    icon: Scan,
    badge: "Sub-Second Log",
  },
  {
    stepNumber: "03",
    title: "Automated Roster & CSV Export",
    desc: "Attendance entries are instantly recorded with precise timestamps. Professors can download the complete masterlist into Excel with a single click.",
    icon: FileDown,
    badge: "Excel-Ready File",
  },
];

export default function WorkflowSteps() {
  return (
    <section id="workflow" className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F7] border border-[#E5E5E7] text-xs font-semibold text-[#0066CC]">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
            3 Simple Steps From Entry to Export
          </h2>
          <p className="text-base text-[#6E6E73] leading-relaxed">
            Engineered to make attendance logging fast, modern, and queue-free across offices, conferences, seminars, and campuses.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#F5F5F7] rounded-3xl p-7 border border-[#E5E5E7] hover:border-[#BFDBFE] transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-[#007AFF] tracking-tight">
                      {step.stepNumber}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white text-[#1D1D1F] border border-[#E5E5E7]">
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E5E7] text-[#007AFF] flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#1D1D1F]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#6E6E73] mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#0066CC]">
                  <span>Frictionless and intuitive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
