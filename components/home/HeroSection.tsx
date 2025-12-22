import React from "react";
import Galaxy from "../Galaxy";

const HeroSection = () => {
  return (
    <div className="overflow-x-hidden h-dvh w-screen relative">
      <Galaxy
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={240}
      />
    </div>
  );
};

export default HeroSection;
