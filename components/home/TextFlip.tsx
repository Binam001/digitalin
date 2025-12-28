import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const TextFlip: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const isTransitioningRef = useRef(false);

  const texts = [
    "We don't sell products",
    "We sell attention",
    "And attention sells products.",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();

      // Only trigger when the container is in view
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const currentScrollY = window.scrollY;
        const scrollDirection =
          currentScrollY > lastScrollY.current ? "down" : "up";

        if (isTransitioningRef.current) {
          lastScrollY.current = currentScrollY;
          return;
        }

        const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);

        // Trigger transition on significant scroll (threshold)
        if (scrollDelta > 50) {
          if (scrollDirection === "down" && currentIndex < texts.length - 1) {
            isTransitioningRef.current = true;
            setCurrentIndex((prev) => prev + 1);

            setTimeout(() => {
              isTransitioningRef.current = false;
            }, 800);
          } else if (scrollDirection === "up" && currentIndex > 0) {
            isTransitioningRef.current = true;
            setCurrentIndex((prev) => prev - 1);

            setTimeout(() => {
              isTransitioningRef.current = false;
            }, 800);
          }

          lastScrollY.current = currentScrollY;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex, texts.length]);

  // Calculate the height needed for pinning effect (viewport height * number of texts)
  const pinHeight = `${texts.length * 100}vh`;

  return (
    <>
      {/* Pinned section container */}
      <section
        ref={containerRef}
        className="relative w-screen bg-background"
        style={{ height: pinHeight }}
      >
        {/* Sticky/Fixed content */}
        <div
          ref={stickyRef}
          className="sticky top-0 left-0 h-screen w-screen flex flex-col justify-center overflow-hidden"
        >
          <div className="absolute right-0 top-0 h-[120vh] w-1/2">
            <video
              src="/videos/home/video1.mp4"
              className="h-full w-full object-right"
              autoPlay
              loop
              muted
              suppressHydrationWarning
            />
          </div>
          <div
            className="relative h-40 flex items-center"
            style={{ perspective: "1200px" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <h1 className="text-3xl lg:text-7xl font-bold text-foreground">
                  {texts[currentIndex]}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextFlip;
