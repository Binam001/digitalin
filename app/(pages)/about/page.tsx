import HeroSection from "@/components/about/HeroSection";
import OurMission from "@/components/about/OurMission";
import OurTeam from "@/components/about/OurTeam";
import OurVision from "@/components/about/OurVision";
import WhoWeAre from "@/components/about/WhoWeAre";

const page = () => {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <OurVision />
      <OurMission />
      <OurTeam />
    </div>
  );
};

export default page;
