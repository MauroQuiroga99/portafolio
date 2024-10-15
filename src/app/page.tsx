import AboutSection from "app/components/AboutSection";
import NavBar from "app/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen   bg-gray-800  w-full">
      <div className="mt-5">
        <NavBar />
      </div>
      <div className="">
        <AboutSection />
      </div>
    </div>
  );
}
