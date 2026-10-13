import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KlentroQR",
  description:
    "A modern, contactless QR attendance platform for schools, workplaces, and events. Sub-second scanning, live rosters, and 1-click CSV export.",
  icons: {
    icon: "/images/KlentroQR-logo.png",
    shortcut: "/images/KlentroQR-logo.png",
    apple: "/images/KlentroQR-logo.png",
  },
  keywords: [
    "QR Attendance",
    "Universal Attendance System",
    "Workplace QR Scanner",
    "School Attendance Tracker",
    "Event Check-In QR",
    "Klentro QR",
  ],
  authors: [{ name: "Klentro Development Team" }],
  openGraph: {
    title: "KlentroQR",
    description:
      "Frictionless attendance tracking powered by QR technology. Real-time verification, offline reliability, and 1-click CSV export for teams, classrooms, and events.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${inter.className} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#F5F5F7] text-[#1D1D1F] selection:bg-[#007AFF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
