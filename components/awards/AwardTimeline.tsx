// component.tsx
"use client";

import { MoveUpRight } from "lucide-react";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import { awardLists } from "@/constants";

// Update interface to match your awardLists structure
interface AwardData {
  id: number;
  year: number;
  title: string;
  sponsor: string;
  image: string;
}

// Inlined useMediaQuery hook to resolve import issue
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia(query);
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };
      setMatches(mediaQueryList.matches);
      mediaQueryList.addEventListener("change", listener);
      return () => mediaQueryList.removeEventListener("change", listener);
    }
  }, [query]);

  return matches;
};

export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "blue-theme" | "green-theme";
  size?: "default" | "compact" | "expanded";
  asChild?: boolean;
}

const AwardTimeline = React.forwardRef<HTMLDivElement, ComponentProps>(
  (
    {
      variant = "default",
      size = "default",
      asChild,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const [activeImage, setActiveImage] = useState<AwardData | null>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(0.5);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const requestRef = useRef<number | null>(null);
    const prevCursorPosition = useRef({ x: 0, y: 0 });
    const parallaxImageRef = useRef<HTMLImageElement>(null);
    const [parallaxOffset, setParallaxOffset] = useState(0);

    const handleMouseMove = useCallback((e: MouseEvent) => {
      const { clientX, clientY } = e;
      const dx = clientX - prevCursorPosition.current.x;
      const dy = clientY - prevCursorPosition.current.y;

      const easeAmount = 0.2;
      const newX = prevCursorPosition.current.x + dx * easeAmount;
      const newY = prevCursorPosition.current.y + dy * easeAmount;

      setCursorPosition({ x: newX, y: newY });
      prevCursorPosition.current = { x: newX, y: newY };
    }, []);

    useEffect(() => {
      const updateCursorPosition = (e: MouseEvent) => {
        if (requestRef.current) return;
        requestRef.current = requestAnimationFrame(() => {
          handleMouseMove(e);
          requestRef.current = null;
        });
      };

      window.addEventListener("mousemove", updateCursorPosition);
      return () => {
        window.removeEventListener("mousemove", updateCursorPosition);
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
      };
    }, [handleMouseMove]);

    const handleImageHover = useCallback(
      (image: AwardData) => {
        if (activeImage !== image) {
          setActiveImage(image);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setOpacity(1);
            setScale(1);
          }, 50);
        } else {
          setOpacity(1);
          setScale(1);
        }
      },
      [activeImage]
    );

    const handleMouseLeave = useCallback(() => {
      setOpacity(0);
      setScale(0.5);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActiveImage(null);
      }, 300);
    }, []);

    // Parallax scroll effect
    useEffect(() => {
      const handleScroll = () => {
        if (parallaxImageRef.current) {
          const rect = parallaxImageRef.current.getBoundingClientRect();
          const scrolled = window.scrollY;
          const imageTop = rect.top + scrolled;
          const windowHeight = window.innerHeight;

          // Calculate parallax offset when image is in viewport
          if (rect.top < windowHeight && rect.bottom > 0) {
            const offset = (scrolled - imageTop + windowHeight / 2) * 0.3;
            setParallaxOffset(offset);
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial calculation

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sizeClasses = {
      default: "p-4 text-xl sm:text-2xl md:text-5xl",
      compact: "p-2 text-lg sm:text-xl md:text-4xl",
      expanded: "p-6 text-2xl sm:text-3xl md:text-6xl",
    };

    const commonClasses = cn("relative w-full min-h-fit", className);

    if (asChild) {
      return React.isValidElement(children) ? (
        React.cloneElement(children as React.ReactElement<any>, {
          ref,
          className: cn((children as any).props.className, commonClasses),
          ...props,
        })
      ) : (
        <div ref={ref} className={commonClasses} {...props}>
          {children}
        </div>
      );
    }

    return (
      <section
        ref={ref}
        className="w-9/12 mx-auto mt-16"
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div className="flex items-center justify-between gap-8 mb-16">
          <p className="text-2xl lg:text-4xl">
            Nominated as Agency of the Year amongst best Digital Agencies.
          </p>
          <div className="">
            <p className="text-6xl font-bold">20+</p>
            <p className="text-sm mt-2">
              National Digital Innovation Awards won since 2022 — and counting.
            </p>
          </div>
        </div>

        <div className="relativeleft-1/2 right-1/2 -mx-[20vw] w-screen h-[80vh] mb-16 overflow-hidden">
          <div className="w-[70%] h-full overflow-hidden">
            <img
              ref={parallaxImageRef}
              src="/images/awards/Award-01-1.webp"
              alt="award"
              className="w-full h-full object-cover"
              style={{
                transform: `translateY(${parallaxOffset}px)`,
                transition: "transform 0.1s ease-out",
              }}
            />
          </div>
        </div>

        <div className="space-y-4">
          {awardLists.map((award) => (
            <div
              key={award.id}
              className={cn(
                "cursor-pointer relative flex items-center justify-between gap-4 py-4 border-b border-foreground/20",
                sizeClasses[size]
              )}
              onMouseEnter={() => handleImageHover(award)}
            >
              {!isDesktop && (
                <img
                  src={award.image}
                  className="w-full h-40 object-cover rounded-md mb-2"
                  alt={award.title}
                />
              )}
              <div className="flex-1">
                <h2
                  className={cn(
                    "text-base font-medium",
                    activeImage?.id === award.id
                      ? "mix-blend-difference z-20 text-primary"
                      : "text-gray-700 dark:text-foreground/80"
                  )}
                >
                  {award.sponsor}
                </h2>
              </div>
              <div className="">
                <h2
                  className={cn(
                    "text-sm",
                    activeImage?.id === award.id
                      ? "mix-blend-difference z-20 text-primary"
                      : "text-gray-700 dark:text-foreground/50"
                  )}
                >
                  {award.title}
                </h2>
              </div>
              <div
                className={`h-px bg-primary absolute bottom-0 left-0 transition-all duration-300 ease-linear ${
                  activeImage?.id === award.id ? "w-full" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>

        {isDesktop && activeImage && (
          <img
            src={activeImage.image}
            alt={activeImage.title}
            className="fixed dark:bg-gray-950 bg-white object-cover pointer-events-none z-10 w-[250px] h-[300px] rounded-lg shadow-xl"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: opacity,
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          />
        )}
      </section>
    );
  }
);

AwardTimeline.displayName = "AwardTimeline";

export default AwardTimeline;
