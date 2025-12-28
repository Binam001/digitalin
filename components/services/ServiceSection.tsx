"use client";

import { CSSProperties, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceLists, whatWeDoLists } from "@/constants";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import BgBubble from "../BgBubble";
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
      <div ref={bgRef} className="fixed inset-0 z-0" />
      {/* <header className="relative z-10 h-screen flex items-center justify-center bg-background">
        <BgBubble />
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
          className="relative px-0"
          style={{ height: `${services.length * 100}vh` }}
          aria-label="Work projects"
        >
          {/* Pinned stage (everything happens here) */}
          <div
            ref={stageRef}
            className="relative h-screen w-full overflow-hidden"
          >
            {/* Image layer - behind text */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              {serviceLists.map((service, index) => (
                <div
                  key={`img-${service.id}`}
                  ref={(el) => addToImagesRef(el, index)}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-all duration-700 brightness-25"
                  />
                </div>
              ))}
            </div>

            {/* Text layer - above images, interactive */}
            <div className="absolute inset-0 z-10">
              {serviceLists.map((service, index) => (
                <article
                  key={`text-${service.id}`}
                  ref={(el) => addToTextsRef(el, index)}
                  className="absolute h-full w-full top-0 flex flex-col justify-between py-16 px-4 md:px-8 lg:px-16 pointer-events-none"
                >
                  <h2 className="text-2xl md:text-4xl lg:text-5xl text-primary leading-none mb-4 pointer-events-auto">
                    {service.title.split(" ").map((word, wordIndex) => (
                      <span key={wordIndex} className="block">
                        <HoverText text={word} type="title" />
                      </span>
                    ))}
                  </h2>
                  <div className="flex flex-col items-center justify-center gap-4 pointer-events-auto">
                    <p className="md:text-lg lg:text-2xl text-foreground/70">
                      {service.desc}
                    </p>
                    <InteractiveHoverButton
                      text="Make Inquiry"
                      className="w-fit"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServiceSection;
