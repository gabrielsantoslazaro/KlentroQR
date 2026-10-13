import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuideClient from "./GuideClient";

export const metadata: Metadata = {
  title: "User Guide | KlentroQR",
  description:
    "Step-by-step user guide for Klentro QR Attendance System. Learn how to create rosters, generate student QR passes, scan passes with your mobile camera, and export attendance to Excel.",
};

export default function GuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F7] text-[#1D1D1F]">
      <Navbar />
      <main className="flex-1">
        <GuideClient />
      </main>
      <Footer />
    </div>
  );
}
