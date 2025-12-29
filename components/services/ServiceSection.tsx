"use client";

import { CSSProperties, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceLists, whatWeDoLists } from "@/constants";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import HoverText from "../HoverText";

gsap.registerPlugin(ScrollTrigger);

// Work data with different background colors
const services = [
  {
    id: 1,
    bgFrom: "hsl(0, 0%, 8%)",
    bgTo: "hsl(0, 0%, 8%)",
  },
  {
    id: 2,
    bgFrom: "hsl(24 76.2% 24.7%)",
    bgTo: "hsl(24 14.3% 6.9%)",
  },
  {
    id: 3,
    bgFrom: "hsl(24 14.3% 6.9%)",
    bgTo: "hsl(24 76.2% 24.7%)",
  },
  {
    id: 4,
    bgFrom: "hsl(24 76.2% 24.7%)",
    bgTo: "hsl(24 14.3% 6.9%)",
  },
  {
    id: 5,
    bgFrom: "hsl(24 14.3% 6.9%)",
    bgTo: "hsl(24 76.2% 24.7%)",
  },
  {
    id: 6,
    bgFrom: "hsl(24 76.2% 24.7%)",
    bgTo: "hsl(24 14.3% 6.9%)",
  },
  {
    id: 7,
    bgFrom: "hsl(24 14.3% 6.9%)",
    bgTo: "hsl(24 76.2% 24.7%)",
  },
  {
    id: 8,
    bgFrom: "hsl(24 76.2% 24.7%)",
    bgTo: "hsl(24 14.3% 6.9%)",
  },
  {
    id: 9,
    bgFrom: "hsl(24 14.3% 6.9%)",
    bgTo: "hsl(24 0% 100%)",
  },
];

const ServiceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const serviceScrollRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const imagesRef = useRef<HTMLDivElement[]>([]);
  const textsRef = useRef<HTMLElement[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bg = bgRef.current;
      const stage = stageRef.current;
      const scrollEl = serviceScrollRef.current;

      if (!bg || !stage || !scrollEl) return;

      // Initial states: only the first service is visible
      imagesRef.current.forEach((img, i) => {
        gsap.set(img, {
          transformOrigin: "center center",
          scale: i === 0 ? 1 : 0,
          opacity: i === 0 ? 1 : 0,
        });
      });

      textsRef.current.forEach((text, i) => {
        gsap.set(text, {
          yPercent: i === 0 ? 0 : 18,
          opacity: i === 0 ? 1 : 0,
        });
      });

      const step = 1;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollEl,
          start: "top top",
          end: () => `+=${window.innerHeight * (services.length - 1)}`,
          scrub: 1,
          pin: stage,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      for (let i = 0; i < services.length - 1; i++) {
        const at = i * step;
        const currentImage = imagesRef.current[i];
        const nextImage = imagesRef.current[i + 1];
        const currentText = textsRef.current[i];
        const nextText = textsRef.current[i + 1];
        const nextWork = services[i + 1];

        // Background gradient blends via CSS variables (smoothly interpolated)
        tl.to(
          bg,
          {
            "--service-from": nextWork.bgFrom,
            "--service-to": nextWork.bgTo,
            duration: step,
            ease: "none",
          } as gsap.TweenVars,
          at
        );

        // Images crossfade/scale from the exact center of the screen
        tl.to(
          currentImage,
          {
            scale: 0,
            opacity: 0,
            duration: step,
            ease: "power2.inOut",
          },
          at
        );
        tl.fromTo(
          nextImage,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: step, ease: "power2.inOut" },
          at
        );

        // Text slides up and the next text comes in
        tl.to(
          currentText,
          {
            yPercent: -18,
            opacity: 0,
            duration: step * 0.9,
            ease: "power2.out",
          },
          at
        );
        tl.fromTo(
          nextText,
          { yPercent: 18, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: step * 0.9, ease: "power2.out" },
          at + step * 0.1
        );
      }

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToImagesRef = (el: HTMLDivElement | null, index: number) => {
    if (el) imagesRef.current[index] = el;
  };

  const addToTextsRef = (el: HTMLElement | null, index: number) => {
    if (el) textsRef.current[index] = el;
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Background layer */}
      <div ref={bgRef} className="fixed inset-0 z-0 bg-background" />
      {/* Hero Section */}
      {/* <header className="relative z-10 h-screen flex items-center justify-center bg-background">
        <div className="w-full flex flex-col items-center justify-center gap-8">
          <HoverText
            text="Built to Perform, Designed to Impress"
            type="title"
          />
          <p className="text-lg uppercase tracking-[0.3em] text-foreground/60 w-[70%] text-center">
            Delivering high-impact advertising services that drive growth and
            results.
          </p>
        </div>
      </header> */}

      {/* Scroll-driven service showcase */}
      <main className="relative z-10">
        <section
          ref={serviceScrollRef}
          className="relative"
          style={{ height: `${services.length * 100}vh` }}
          aria-label="Work projects"
        >
          {/* Pinned stage (everything happens here) */}
          <div
            ref={stageRef}
            className="relative h-screen w-full overflow-hidden"
          >
            {serviceLists.map((service, index) => (
              <div key={service.id} className="absolute inset-0">
                {/* Image */}
                <div
                  ref={(el) => addToImagesRef(el, index)}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] max-w-4xl"
                >
                  <img
                    src={service.image}
                    alt={`${service.title} project image`}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-all duration-700 brightness-75"
                  />
                </div>

                {/* count */}
                {/* <div
                  ref={(el) => addToTextsRef(el, index)}
                  className="absolute bottom-1/3 left-10 text-2xl"
                >
                  {service.id}
                </div> */}

                {/* Text */}
                <article
                  ref={(el) => addToTextsRef(el, index)}
                  className="absolute h-full w-full top-[0%] z-20 flex flex-col justify-between py-16"
                >
                  <h2 className="text-2xl md:text-4xl lg:text-5xl text-primary leading-none mb-4">
                    {service.title.split(" ").map((word, index) => (
                      <span key={index} className="block">
                        {word}
                      </span>
                    ))}
                  </h2>
                  {/* <div
                    // ref={(el) => addToTextsRef(el, index)}
                    className="absolute bottom-1/3 left-10 text-2xl"
                  >
                    {service.id}/{serviceLists.length}
                  </div> */}
                  <div className="flex justify-center">
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed max-w-3xl line-clamp-4">
                      {service.desc}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="relative z-10 h-screen flex items-center justify-center">
          <div className="text-center px-8">
            <h2 className="text-5xl md:text-7xl lg:text-8xl text-foreground leading-none mb-8">
              LET&apos;S CREATE
              <br />
              <span className="text-stroke-primary">TOGETHER</span>
            </h2>
            <InteractiveHoverButton text="START A PROJECT" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServiceSection;
