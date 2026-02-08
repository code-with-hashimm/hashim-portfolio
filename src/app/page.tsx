import { BackgroundBeams } from "@/components/ui/background-beams";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TechStackSection } from "@/components/TechStackSection";
import { StickyHeader } from "@/components/ScrollProgress";
import { GlobalDebugPanel } from "@/components/GlobalDebugPanel";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import ProjectList from "@/components/ProjectList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background relative">
      {/* Preloader */}
      <Preloader />

      {/* Navbar */}
      <Navbar />

      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <BackgroundBeams />
      </div>

      {/* Global Sticky Header */}
      <StickyHeader />

      {/* Global Debug Panel */}
      <GlobalDebugPanel />

      {/* Scrollable Content */}
      <div className="relative z-10">
        <section className="h-screen">
          <HeroSection />
        </section>
        <AboutSection />
        <TechStackSection />
        <ProjectList />
        <Footer />
      </div>
    </div>
  );
}





