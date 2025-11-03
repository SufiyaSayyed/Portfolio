import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillSection from "@/components/SkillSection";
import ConnectSection from "@/components/ConnectSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden min-h-screen">
        <HeroSection />
        <ProjectSection />
        <ExperienceSection />
        <SkillSection />
        <ConnectSection />
      </main>
    </>
  );
}
