import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

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
            const minScale = window.innerWidth <= 1000 ? 0.3 : 0.1;
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
        className="services relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {[
          {
            id: 1,
            title: "What We Do",
            image: "/images/WhatWeDo/WhatWeDo1.svg",
          },
          {
            id: 2,
            title: "What We Do",
            image: "/images/WhatWeDo/WhatWeDo2.svg",
          },
          {
            id: 3,
            title: "What We Do",
            image: "/images/WhatWeDo/WhatWeDo1.svg",
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

      <section className="services-copy relative w-screen h-[50vh] mt-[155dvh] p-8 flex items-center text-center">
        <h1 className="animate-text text-4xl font-semibold text-center w-full md:w-[70%] mx-auto">
          We are a world-class team creating innovative advertising, marketing,
          and social media solutions for growing brands.
        </h1>
      </section>
    </div>
  );
};

export default WhatWeDo;
