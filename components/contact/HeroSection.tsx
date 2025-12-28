import React from "react";

const HeroSection = () => {
  return (
    <div className="h-screen w-screen relative flex flex-col justify-center md:justify-start pb-24 lg:pb-0 lg:pt-24">
      <div className="absolute bottom-0 w-screen h-1/3 lg:h-2/3">
        <img
          src="/images/contact/hand-touch.webp"
          alt="hand touch"
          className="w-full h-full"
        />
      </div>

      <div className="text-center space-y-8">
        <p className="text-5xl font-[Poppins-ExtraBold] uppercase">
          Let's <span className="text-primary">Connect</span>
        </p>
        <p className="w-2/3 lg:w-1/3 mx-auto">
          From the streets of Kathmandu to the global stage, we help brands
          scale mountains. Reach out to our base camp.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
