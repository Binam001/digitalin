import React from "react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import Link from "next/link";
import Orb from "../Orb";
import { Icon } from "@iconify/react";

const HeroSection = () => {
  return (
    <div className="overflow-x-hidden h-dvh w-screen relative">
      <div className="w-full h-2/3 mx-auto absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col justify-between items-center pointer-events-none">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl lg:text-7xl text-center font-semibold">
            Welcome to Digital<span className="text-primary">In</span>
          </h1>
          <p className="w-1/2 text-center">
            We transform human thought into strategic advertising that captures
            attention and drives results
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm">Scroll Down</p>
          <div className="animate-bounce">
            <Icon icon="mynaui:arrow-long-down" className="size-6" />
          </div>
        </div>
      </div>
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />
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
