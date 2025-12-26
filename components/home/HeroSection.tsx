import React from "react";
import Particles from "../Particles";

const HeroSection = () => {
  return (
    <div className="overflow-x-hidden h-dvh w-screen relative">
      <div className="w-[90%] mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-7xl text-center font-[Poppins-ExtraBold]">
          Accelerating Brands Through the Digital Galaxy.
        </h1>
      </div>
      <div
        className="z-80"
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </div>
  );
};

export default HeroSection;
