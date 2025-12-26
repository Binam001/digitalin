import React from "react";
import Galaxy from "../Galaxy";

const HeroSection = () => {
  return (
    <div className="overflow-x-hidden h-dvh w-screen relative">
      <div className="w-[90%] mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-7xl text-center">
          Accelerating Brands Through the Digital Galaxy.
        </h1>
      </div>
      <Galaxy
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.2}
        saturation={0}
        hueShift={240}
        speed={0.5}
        repulsionStrength={0.5}
        twinkleIntensity={0.15}
      />
    </div>
  );
};

export default HeroSection;
