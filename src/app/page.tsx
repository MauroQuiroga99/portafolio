import AboutSection from "app/components/AboutSection";
import CertificationsSection from "app/components/CertificationsSection";
import ContactSection from "app/components/ContactSection";
import NavBar from "app/components/NavBar";
import ProyectsSection from "app/components/ProyectsSection";
import SkillsSection from "app/components/SkillsSection";

export default function Home() {
  return (
    <div className="  flex flex-col min-h-screen font-roboto bg-gray-800 ">
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
        <div className="">
          <CertificationsSection />
        </div>
        <div className="">
          <ProyectsSection />
        </div>
        <div className="">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
