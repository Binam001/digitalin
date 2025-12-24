"use client";

import BgBubble from "../BgBubble";
import HoverText from "../HoverText";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden w-screen">
      <header className="relative z-10 h-screen flex items-center justify-center bg-background">
        <BgBubble />
        <div className="w-full flex flex-col items-center justify-center gap-8">
          <HoverText
            text="Insights and Ideas Shaping Modern Advertising"
            type="title"
            className="flex justify-center"
          />
          <p className="text-lg uppercase tracking-[0.3em] text-foreground/60 w-[70%] text-center">
            Explore expert insights and creative ideas driving today's
            advertising landscape.
          </p>
        </div>
      </header>
    </section>
  );
};

export default HeroSection;
