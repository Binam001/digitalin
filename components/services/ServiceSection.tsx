"use client";

import { CSSProperties, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whatWeDoLists } from "@/constants";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import BgBubble from "../BgBubble";
import HoverText from "../HoverText";

gsap.registerPlugin(ScrollTrigger);

// Work data with different background colors
const works = [
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
    bgTo: "hsl(24 0% 100%)",
  },
];

const ServiceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const workScrollRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const imagesRef = useRef<HTMLDivElement[]>([]);
  const textsRef = useRef<HTMLElement[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bg = bgRef.current;
      const stage = stageRef.current;
      const scrollEl = workScrollRef.current;

      if (!bg || !stage || !scrollEl) return;

      // Initial states: only the first work is visible
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
          end: () => `+=${window.innerHeight * (works.length - 1)}`,
          scrub: 1,
          pin: stage,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      for (let i = 0; i < works.length - 1; i++) {
        const at = i * step;
        const currentImage = imagesRef.current[i];
        const nextImage = imagesRef.current[i + 1];
        const currentText = textsRef.current[i];
        const nextText = textsRef.current[i + 1];
        const nextWork = works[i + 1];

        // Background gradient blends via CSS variables (smoothly interpolated)
        tl.to(
          bg,
          {
            "--work-from": nextWork.bgFrom,
            "--work-to": nextWork.bgTo,
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
      <div
        ref={bgRef}
        className="fixed inset-0 z-0"
        style={{
          ...({
            "--work-from": works[0].bgFrom,
            "--work-to": works[0].bgTo,
          } as CSSProperties),
          background:
            "linear-gradient(180deg, var(--work-from) 0%, var(--work-to) 100%)",
        }}
      />

      {/* Noise overlay */}
      {/* <div className="fixed inset-0 z-[1] pointer-events-none noise opacity-30" /> */}

      {/* Hero Section */}
      <header className="relative z-10 h-screen flex items-center justify-center bg-background">
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
      </header>

      {/* Scroll-driven work showcase */}
      <main className="relative z-10">
        <section
          ref={workScrollRef}
          className="relative"
          style={{ height: `${works.length * 100}vh` }}
          aria-label="Work projects"
        >
          {/* Pinned stage (everything happens here) */}
          <div
            ref={stageRef}
            className="relative h-screen w-full overflow-hidden"
          >
            {whatWeDoLists.map((work, index) => (
              <div key={work.id} className="absolute inset-0">
                {/* Image */}
                <div
                  ref={(el) => addToImagesRef(el, index)}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] max-w-4xl"
                >
                  <div className="absolute inset-0 border border-foreground/10" />
                  <img
                    src={work.image}
                    alt={`${work.title} project image`}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  {/* <div className="absolute -top-8 -left-8 text-[20vw] leading-none text-foreground/5 pointer-events-none select-none">
                    0{work.id}
                  </div> */}
                </div>

                {/* Text */}
                <article
                  ref={(el) => addToTextsRef(el, index)}
                  className="absolute h-[60vh] w-full top-[20%] z-20 flex flex-col justify-between"
                >
                  {/* <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-4">
                    {work.subtitle}
                  </span> */}
                  <h2 className="text-2xl md:text-4xl lg:text-5xl text-primary leading-none mb-4">
                    {/* {work.title} */}
                    {work.title.split(" ").map((word, index) => (
                      <span key={index} className="block">
                        {word}
                      </span>
                    ))}
                  </h2>
                  <div className="flex justify-between">
                    <button className="mt-8 group inline-flex items-center gap-4 text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors duration-300">
                      View Project
                      <span className="w-12 h-px bg-foreground group-hover:w-20 group-hover:bg-primary transition-all duration-300" />
                    </button>
                    <p className="justify-self-en text-sm md:text-base leading-relaxed max-w-sm line-clamp-4">
                      {work.desc}
                    </p>
                  </div>
                </article>

                {/* Project number indicator */}
                {/* <aside className="absolute right-8 md:right-16 lg:right-24 bottom-24 md:bottom-32 z-20">
                  <div className="flex flex-col items-end">
                    <span className="text-7xl md:text-9xl text-foreground/10">
                      0{work.id}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-foreground/40">
                      / 0{works.length}
                    </span>
                  </div>
                </aside> */}
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
            {/* <a
              href="/contact"
              className="inline-flex items-center gap-4 px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300"
            >
              Start a Project
              <span className="w-8 h-[1px] bg-primary-foreground" />
            </a> */}
            <InteractiveHoverButton text="START A PROJECT" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServiceSection;
