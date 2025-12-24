import React from "react";
import BgBubble from "../BgBubble";
import HoverText from "../HoverText";

const HeroSection = () => {
  return (
    <div>
      <header className="relative z-10 h-screen flex items-center justify-center bg-background">
        <BgBubble />
        <div className="w-full flex flex-col items-center justify-center gap-8">
          <HoverText text="The Future of Advertising" type="title" />
          <p className="text-lg uppercase tracking-[0.3em] text-foreground/60 w-[70%] text-center">
            Explore the latest advertising, marketing, and creative trends
            driving brand growth in the digital world.
          </p>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
