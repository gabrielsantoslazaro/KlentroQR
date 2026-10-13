import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqClientContent from "./FaqClientContent";

export const metadata: Metadata = {
  title: "FAQ & Privacy | Klentro QR Attendance System",
  description:
    "Find answers to frequently asked questions about the Klentro QR Attendance System: data privacy compliance (RA 10173), offline camera scanning, hardware requirements, and CSV reports.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F7] text-[#1D1D1F]">
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#007AFF]">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight text-[#1D1D1F] leading-[1.06]">
            Privacy, security & technical specifications.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl font-normal text-[#6E6E73] leading-relaxed max-w-2xl mx-auto">
            Essential answers for event organizers, HR leaders, academic faculty, and enterprise teams regarding security, compliance with RA 10173, and offline scanning capabilities.
          </p>
        </section>

        {/* FAQ Accordion Component */}
        <FaqClientContent />
      </main>

      <Footer />
    </div>
  );
}
