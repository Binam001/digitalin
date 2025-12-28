import React from "react";
import Particles from "../Particles";

const HeroSection = () => {
  return (
    <div className="overflow-x-hidden h-dvh w-screen relative">
      <div className="w-full md:w-[90%] mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <h1 className="text-2xl lg:text-7xl text-center font-[Poppins-ExtraBold]">
          Accelerating Brands Through the Digital Galaxy.
        </h1>
      </div>
      <div
        className="z-40 bg-[url('/images/home/galaxy.jpg')] bg-cover bg-center bg-no-repeat"
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
        <div className="absolute inset-0 bg-black/60 w-full h-full pointer-events-none"></div>
      </div>
    </div>
  );
};

export default HeroSection;
