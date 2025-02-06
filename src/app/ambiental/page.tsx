import AboutSectionE from "app/components/ambiental/AboutSectionE";
import CertificationsSectionE from "app/components/ambiental/CertificationsSectionE";
import NavBarE from "app/components/ambiental/NavBarE";
import ProyectsSectionE from "app/components/ambiental/ProyectsSectionE";
import SkillsSectionE from "app/components/ambiental/SkillsSectionE";
import ContactSection from "app/components/ContactSection";

export default function Home() {
  return (
    <div className="  flex flex-col min-h-screen font-roboto bg-gray-800 ">
      <div className="w-full max-w-[800px] mx-auto px-4">
        <div className="mt-5 ">
          <NavBarE />
        </div>
        <div className="">
          <AboutSectionE />
        </div>
        <div className="">
          <SkillsSectionE />
        </div>
        <div className="">
          <CertificationsSectionE />
        </div>
        <div className="">
          <ProyectsSectionE />
        </div>
        <div className="">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
