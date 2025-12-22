"use client";

import { whatWeDoLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const isLargeDevice = useMediaQuery({ minWidth: 770 });

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!isLargeDevice || !containerRef.current || !sectionRef.current)
        return;

      const container = containerRef.current;

      const scrollAmount = container.scrollWidth - window.innerWidth + 150;

      const tween = gsap.to(container, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollAmount}`,
          scrub: 1,
          pin: true,
          // anticipatePin: 1,
          // invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { dependencies: [isLargeDevice] }
  );

  return (
    <section
      ref={sectionRef}
      className="w-screen min-h-screen overflow-hidden bg-foreground text-background flex items-center"
    >
      <div ref={containerRef} className="flex gap-24 cardContainer">
        {whatWeDoLists.map((item) => (
          <div key={item.id} className="Card shrink-0 space-y-4">
            <div className="relative w-max">
              <p className="text-3xl">{item.title}</p>
              <span className="absolute -top-2 -right-4 text-sm text-background/50">
                0{item.id}
              </span>
            </div>

            <div className="flex gap-8 overflow-hidden">
              <div className="w-[400px] h-full shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-[400px] shrink-0">
                <p className="line-clamp-4">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScroll;
