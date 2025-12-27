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
      // Return early if ref is not yet assigned (though useGSAP usually handles this)
      if (!container.current) return;

      // 2. Type the array as HTMLElement[] so .style or GSAP properties are recognized
      const headers = gsap.utils.toArray<HTMLElement>(".services-header");

      // Ensure headers exist before animating to avoid "undefined" errors
      if (headers.length < 3) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "top 10%",
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

      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: () => `+=${window.innerHeight * 2}`,
        pin: true,
        scrub: 1,
        pinSpacing: false,
        // 3. Type 'self' as ScrollTrigger
        onUpdate: (self: globalThis.ScrollTrigger) => {
          const progress = self.progress;

          if (progress <= 0.5) {
            const yProgress = progress / 0.5;

            gsap.set(headers[0], { yPercent: yProgress * 100 });
            gsap.set(headers[2], { yPercent: yProgress * -100 });

            // 4. Type the individual header in the loop
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
    },
    { scope: container }
  );
  return (
    <div>
      <section
        ref={container}
        className="services relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden z-20"
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

      {/* <section className="services-copy relative w-screen h-[50vh] mt-[155dvh] p-8 flex items-center text-center">
        <h1 className="animate-text text-4xl font-semibold text-center w-full md:w-[70%] mx-auto">
          We are a world-class team creating innovative advertising, marketing,
          and social media solutions for growing brands.
        </h1>
      </section> */}
      <section className="w-screen my-28 bg-background mt-[160dvh]">
        {/* <div className="w-full flex justify-center mb-8">
          <p className="text-5xl font-[Poppins-ExtraBold] uppercase">
            Our Services
          </p>
        </div> */}

        <div className="grid grid-cols-2 gap-8">
          {whatWeDoLists.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                className={`relative group rounded-2xl overflow-hidden will-change-transform ${
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
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-2xl h-80 w-full grayscale group-hover:grayscale-0 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 pointer-events-none" />
                </div>

                <div className="absolute inset-0 flex flex-col items-end justify-between p-4">
                  <div className="text-xl lg:text-3xl font-semibold w-[45%] text-right uppercase">
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
