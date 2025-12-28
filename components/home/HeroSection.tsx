import React from "react";
import Particles from "../Particles";

const HeroSection = () => {
  return (
    <div className="overflow-x-hidden h-dvh w-screen relative">
      <div className="w-full md:w-[90%] mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <h1 className="text-2xl lg:text-7xl text-center font-[Poppins-ExtraBold] text-stroke">
          Accelerating <span className="text-stroke-primary">Brands</span>{" "}
          Through the{" "}
          <span className="text-stroke-primary">Digital Galaxy.</span>
        </h1>
      </div>
      <div
        className="z-40"
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/home/galaxy.mp4" type="video/mp4" />
        </video>

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
