"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  animate,
} from "motion/react";
import HoverText from "./HoverText";

export const items = [
  {
    id: 1,
    url: "/images/home/unique-orange-hat.png",
    title: "Best Digital Agency in Nepal",
    desc: "Welcome to Digitalin the best digital marketing agency in Nepal",
  },
  {
    id: 2,
    url: "/images/home/statue.png",
    title: "Creativity Meets Innovation",
    desc: "Where Creativity & Innovation never stop!",
  },
  {
    id: 3,
    url: "/images/home/lonely-tree.png",
    title: "Smart Digital Solutions",
    desc: "We provide the best digital services",
  },
];

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 35;
const GAP_PX = 2;
const MARGIN_PX = 2;

export function ImageSlideShow() {
  const [index, setIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      });
    }
  }, [index, x, isDragging]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && !isHovered) {
        setIndex((i) => (i === items.length - 1 ? 0 : i + 1));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isDragging, isHovered]);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="flex flex-col gap-3">
        {/* Main Carousel */}
        <div
          className="relative overflow-hidden"
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex"
            drag="x"
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              const containerWidth = containerRef.current?.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = index;

              // If fast swipe, use velocity
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1;
              }
              // Otherwise use offset threshold (30% of container width)
              else if (Math.abs(offset) > containerWidth * 0.3) {
                newIndex = offset > 0 ? index - 1 : index + 1;
              }

              // Clamp index
              newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
              setIndex(newIndex);
            }}
            style={{ x }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="relative shrink-0 w-screen h-screen"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
                <div className="absolute inset-0 w-full h-full bg-black/50"></div>
                <div className="absolute bottom-1/2 left-20 text-foreground">
                  <div className="flex gap-4 w-full">
                    <p className="mt-2">/0{item.id}</p>
                    <div className="w-[60%]">
                      <HoverText
                        text={item.title}
                        className="font-[Poppins-ExtraBold] text-6xl uppercase"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-12 left-28 flex items-center gap-4 text-foreground">
            <motion.button
              onClick={() =>
                setIndex((i) => (i === 0 ? items.length - 1 : i - 1))
              }
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform z-10 hover:scale-110 hover:opacity-100 opacity-70 cursor-pointer"
            >
              Prev
            </motion.button>
            <span>/</span>
            {/* Next Button */}
            <motion.button
              onClick={() =>
                setIndex((i) => (i === items.length - 1 ? 0 : i + 1))
              }
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform z-10 hover:scale-110 hover:opacity-100 opacity-70 cursor-pointer"
            >
              Next
            </motion.button>
          </div>
        </div>

        {/* <Thumbnails index={index} setIndex={setIndex} /> */}
      </div>
    </div>
  );
}

function Thumbnails({
  index,
  setIndex,
}: {
  index: number;
  setIndex: (index: number) => void;
}) {
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0;
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
      }

      scrollPosition += MARGIN_PX;

      const containerWidth = thumbnailsRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
      scrollPosition -= centerOffset;

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className="overflow-x-auto scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="flex gap-1 h-20 pb-2" style={{ width: "fit-content" }}>
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? "active" : "inactive"}
            variants={{
              active: {
                width: FULL_WIDTH_PX,
                marginLeft: MARGIN_PX,
                marginRight: MARGIN_PX,
              },
              inactive: {
                width: COLLAPSED_WIDTH_PX,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative shrink-0 h-full overflow-hidden"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover pointer-events-none select-none"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
