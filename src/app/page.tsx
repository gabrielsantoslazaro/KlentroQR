import Navbar from "@/components/Navbar";
import HeroWithLiveDemo from "@/components/HeroWithLiveDemo";
import HighlightsBar from "@/components/HighlightsBar";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import AppShowcaseCarousel from "@/components/AppShowcaseCarousel";
import ComparisonSection from "@/components/ComparisonSection";
import UseCasesSection from "@/components/UseCasesSection";
import ProblemsSolvedSection from "@/components/ProblemsSolvedSection";
import ProjectCtaBanner from "@/components/ProjectCtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F7] text-[#1D1D1F]">
      <Navbar />
      <main className="flex-1">
        <HeroWithLiveDemo />
        <HighlightsBar />
        <VideoShowcaseSection />
        <AppShowcaseCarousel />
        <ComparisonSection />
        <UseCasesSection />
        <ProblemsSolvedSection />
        <ProjectCtaBanner />
      </main>
      <Footer />
    </div>
  );
}
