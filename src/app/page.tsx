import AboutSection from "app/components/AboutSection";
import NavBar from "app/components/NavBar";
import SkillsSection from "app/components/SkillsSection";

export default function Home() {
  return (
    <div className="  flex flex-col min-h-screen font-mono bg-gray-800 ">
      <div className="w-full max-w-[800px] mx-auto px-4">
        <div className="mt-5 ">
          <NavBar />
        </div>
        <div className="">
          <AboutSection />
        </div>
        <div className="">
          <SkillsSection />
        </div>
      </div>
    </div>
  );
}
