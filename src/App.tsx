import "./App.css";
import ConnectSection from "./components/ConnectSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Navbar from "./components/ui/navbar";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ConnectSection />
    </div>
  );
}

export default App;
