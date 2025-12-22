import HeroSection from "@/components/about/HeroSection";
import OurMission from "@/components/about/OurMission";
import OurVision from "@/components/about/OurVision";
import WhoWeAre from "@/components/about/WhoWeAre";

const page = () => {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <OurVision />
      <OurMission />
    </div>
  );
};

export default page;
