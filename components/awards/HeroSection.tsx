import React from "react";

const HeroSection = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center gap-8">
      <p className="text-3xl lg:text-7xl">
        Award-winning <br /> Digital Agency
      </p>
      <div className="">
        <img
          src="/images/awards/agency-of-the-year.png"
          alt="agency of the year"
          className="invert w-40"
        />
      </div>
    </section>
  );
};

export default HeroSection;
