import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing | KlentroQR",
  description:
    "Transparent pricing plans for Klentro QR Attendance System. Free plan for individual teachers and small teams, Pro and Enterprise plans for campuses and corporate offices.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F7] text-[#1D1D1F]">
      <Navbar />
      <main className="flex-1">
        <PricingClient />
      </main>
      <Footer />
    </div>
  );
}
