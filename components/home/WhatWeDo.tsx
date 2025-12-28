import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { whatWeDoLists } from "@/constants";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const headers = gsap.utils.toArray<HTMLElement>(".services-header");

      if (headers.length < 3) return;

      // Clear any existing ScrollTriggers to prevent conflicts
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container.current) {
          trigger.kill();
        }
      });

      const isMobile = window.innerWidth < 768;

      // Initial slide-in animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: isMobile ? "top 80%" : "top bottom",
          end: isMobile ? "top 50%" : "top 10%",
          scrub: 1,
        },
      });

      tl.fromTo(
        [headers[0], headers[2]],
        { xPercent: 100 },
        { xPercent: 0, ease: "none" },
        0
      ).fromTo(
        headers[1],
        { xPercent: -100 },
        { xPercent: 0, ease: "none" },
        0
      );

      // Pin and scale animation
      ScrollTrigger.create({
        trigger: container.current,
        start: isMobile ? "top center" : "top top",
        end: () => `+=${window.innerHeight * (isMobile ? 1 : 1)}`,
        pin: true,
        scrub: 1,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self: globalThis.ScrollTrigger) => {
          const progress = self.progress;

          if (progress <= 0.5) {
            const yProgress = progress / 0.5;

            gsap.set(headers[0], { yPercent: yProgress * 100 });
            gsap.set(headers[2], { yPercent: yProgress * -100 });

            headers.forEach((header: HTMLElement) =>
              gsap.set(header, { scale: 1 })
            );
          } else {
            gsap.set(headers[0], { yPercent: 100 });
            gsap.set(headers[2], { yPercent: -100 });

            const scaleProgress = (progress - 0.5) / 0.5;
            const minScale = window.innerWidth <= 1000 ? 0.5 : 0.3;
            const scale = 1 - scaleProgress * (1 - minScale);

            headers.forEach((header: HTMLElement) =>
              gsap.set(header, { scale: scale })
            );
          }
        },
      });

      // Refresh on resize
      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: container, dependencies: [] }
  );

  return (
    <div>
      <section
        ref={container}
        className="services relative w-screen h-fit flex flex-col items-center justify-center overflow-hidden z-20"
      >
        {[
          {
            id: 1,
            title: "What We Do",
            image: "/images/whatWeDo/WhatWeDo2.svg",
          },
          {
            id: 2,
            title: "What We Do",
            image: "/images/whatWeDo/WhatWeDo1.svg",
          },
          {
            id: 3,
            title: "What We Do",
            image: "/images/whatWeDo/WhatWeDo2.svg",
          },
        ].map((item) => (
          <div
            key={item.id}
            className="services-header relative w-full will-change-transform"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </section>
      <section className="w-screen bg-background -mt-8 lg:-mt-32">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
          {whatWeDoLists.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                className={`relative h-60 lg:h-80 group rounded-2xl border-2 border-foreground/30 overflow-hidden will-change-transform flex items-center ${
                  item.id % 2 === 0 ? "lg:relative lg:top-1/3" : ""
                }`}
                initial={{
                  x: isEven ? -120 : 120,
                  rotate: isEven ? -12 : 12,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  rotate: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: false,
                  margin: "-80px",
                }}
              >
                <div className="relative w-[60%]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-2xl size-[80%] mx-auto object-contain grayscale group-hover:grayscale-0 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition duration-500 pointer-events-none" />
                </div>

                <div className="absolute inset-0 flex flex-col items-end justify-between p-4">
                  <div className="text-xl lg:text-3xl font-semibold w-[45%] text-right text-foreground/30 group-hover:text-foreground uppercase transition duration-500">
                    {item.title}
                  </div>

                  <InteractiveHoverButton
                    text="Explore"
                    className="border-foreground"
                    dotClassName="bg-foreground group-hover:bg-primary duration-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
