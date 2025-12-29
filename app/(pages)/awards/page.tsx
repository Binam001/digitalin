import AwardSection from "@/components/awards/AwardSection";
import AwardTimeline from "@/components/awards/AwardTimeline";
import HeroSection from "@/components/awards/HeroSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <AwardSection />
      <AwardTimeline />
    </div>
  );
};

export default page;
