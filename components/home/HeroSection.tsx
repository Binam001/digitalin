import React from "react";
import Particles from "../Particles";
import { DotScreenShader } from "../dot-shader-background";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="overflow-x-hidden h-dvh w-screen relative">
      <div className="w-full md:w-[90%] h-full mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-evenly items-center z-50">
        <h1 className="text-2xl lg:text-7xl text-center font-[Poppins-ExtraBold]">
          Accelerating <span className="text-primary">Brands</span> Through the{" "}
          <span className="text-primary">Digital Galaxy.</span>
        </h1>

        <Link href="#text-flip">
          <InteractiveHoverButton text="Explore More" className="w-fit" />
        </Link>
      </div>
      <DotScreenShader />
      {/* <div
        className="z-40"
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
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
      </div> */}
    </div>
  );
};

export default HeroSection;
