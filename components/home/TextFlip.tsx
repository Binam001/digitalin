import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const TextFlip: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const texts = [
    <>
      We don't <span className="text-primary">sell </span>products
    </>,
    <>
      We sell <span className="text-primary">attention</span>
    </>,
    <>
      And attention
      <span className="text-primary"> sells products</span>.
    </>,
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      Math.floor(latest * texts.length),
      texts.length - 1
    );

    if (newIndex !== currentIndex) {
      setDirection(newIndex > currentIndex ? 1 : -1);
      setCurrentIndex(newIndex);
    }
  });

  const pinHeight = `${texts.length * 100}vh`;

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "150%" : "-150%",
      opacity: 1,
    }),
    center: {
      y: "0%",
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? "-150%" : "150%",
      opacity: 1,
    }),
  };

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-screen bg-background"
        style={{ height: pinHeight }}
      >
        <div className="sticky top-0 left-0 h-screen w-screen flex flex-col justify-center overflow-hidden">
          <div className="absolute right-0 top-0 h-[120vh] w-1/2">
            <video
              src="/videos/home/video1.mp4"
              className="h-full w-full object-right pointer-events-none"
              autoPlay
              loop
              muted
              controls={false}
              playsInline
              suppressHydrationWarning
            />
          </div>
          <div className="relative h-20 flex items-center px-4 md:px-8 lg:px-16 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.8,
                  // ease: [0.25, 0.1, 0.25, 1],
                }}
                className="w-full absolute"
              >
                <h1 className="text-3xl lg:text-7xl font-bold text-foreground whitespace-nowrap">
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
