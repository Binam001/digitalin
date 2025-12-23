import { whatWeDoLists } from "@/constants";
import React from "react";
import HoverText from "../HoverText";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CaseStudy = () => {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".case-card").forEach((el, index) => {
      const isEven = index % 2 === 0;

      gsap.fromTo(
        el,
        {
          xPercent: isEven ? -100 : 100,
          rotation: isEven ? -30 : 30,
          force3D: true,
        },
        {
          xPercent: 0,
          rotation: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 40%",
            scrub: true, // smoother than numeric scrub
          },
        }
      );
    });
  });

  return (
    <section className="w-screen my-24">
      <div className="w-full flex justify-center my-8">
        <HoverText text="Our Case Study" className="text-4xl font-bold" />
      </div>
      <div className="grid grid-cols-2 gap-8">
        {whatWeDoLists.map((item) => (
          <div
            className={`case-card relative group rounded-2xl transition-all duration-500 ease-in-out overflow-hidden will-change-transform ${
              item.id % 2 === 0 ? "lg:relative lg:top-1/3 evenCard" : "oddCard"
            }`}
            key={item.id}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-2xl h-72 w-full grayscale group-hover:grayscale-0 transition duration-500"
              />
              <div className="absolute inset-0 w-full h-full bg-black/50 pointer-events-none"></div>
            </div>

            <div className="absolute inset-0 flex flex-col items-end justify-between p-4">
              <div className="text-xl md:text-xl lg:text-3xl font-semibold w-[45%] text-right uppercase">
                {item.title}
              </div>

              <div className="group/button justify-self-end">
                <InteractiveHoverButton
                  text="Explore"
                  className="border-foreground"
                  dotClassName="bg-foreground group-hover/button:bg-primary duration-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
