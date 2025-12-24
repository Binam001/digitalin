"use client";

import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import React, { useState, useRef, useCallback, useEffect } from "react";
import HoverText from "./HoverText";

interface ImageData {
  id: number;
  title: string;
  href: string;
  src: string;
  gradient: string;
}

const images: ImageData[] = [
  {
    id: 1,
    title: "Digital Strategy",
    href: "#",
    src: "/images/home/digital-strategy.jpg",
    gradient:
      "bg-gradient-to-b from-transparent via-gray-300/20 to-transparent",
  },
  {
    id: 2,
    title: "Branding",
    href: "#",
    src: "/images/home/orange-hat-2.jpg",
    gradient:
      "bg-gradient-to-b from-transparent via-orange-300/20 to-transparent",
  },
  {
    id: 3,
    title: "Advertising",
    href: "#",
    src: "/images/home/advertising.jpg",
    gradient:
      "bg-gradient-to-b from-transparent via-blue-300/10 to-transparent",
  },
  {
    id: 4,
    title: "User Experience",
    href: "#",
    src: "/images/home/ux.png",
    gradient: "bg-gradient-to-r from-transparent via-black/10 to-transparent",
  },
  {
    id: 5,
    title: "Digital Marketing",
    href: "#",
    src: "/images/home/digital-marketing.jpg",
    gradient:
      "bg-gradient-to-b from-transparent via-blue-400/20 to-transparent",
  },
  {
    id: 6,
    title: "Media Production",
    href: "#",
    src: "/images/home/media-production.jpg",
    gradient:
      "bg-gradient-to-b from-transparent via-gray-200/20 to-transparent",
  },
];

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

const HoverImageReveal = React.forwardRef<HTMLDivElement, ComponentProps>(
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
    const [activeImage, setActiveImage] = useState<ImageData | null>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(0.5);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const requestRef = useRef<number | null>(null);
    const prevCursorPosition = useRef({ x: 0, y: 0 });

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
      (image: ImageData) => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        if (activeImage !== image) {
          setActiveImage(image);
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
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setActiveImage(null);
      }, 300);
    }, []);

    const variantClasses = {
      default:
        "dark:bg-gradient-to-b from-black from-10% to-gray-950 to-100% bg-gray-100",
      "blue-theme":
        "dark:bg-gradient-to-b from-blue-900 from-10% to-blue-950 to-100% bg-blue-100",
      "green-theme":
        "dark:bg-gradient-to-b from-green-900 from-10% to-green-950 to-100% bg-green-100",
    };

    const sizeClasses = {
      default: "p-4 text-xl sm:text-2xl md:text-5xl",
      compact: "p-2 text-lg sm:text-xl md:text-4xl",
      expanded: "p-6 text-2xl sm:text-3xl md:text-6xl",
    };

    const h2SizeClasses = {
      default: "text-xl sm:text-2xl md:text-5xl",
      compact: "text-lg sm:text-xl md:text-4xl",
      expanded: "text-2xl sm:text-3xl md:text-6xl",
    };

    const commonClasses = cn(
      "relative w-full min-h-fit",
      variantClasses[variant],
      className
    );

    if (asChild) {
      return React.isValidElement(children) ? (
        React.cloneElement(children as React.ReactElement<any>, {
          ref,
          //@ts-ignore
          className: cn(children.props.className, commonClasses),
          ...props,
        })
      ) : (
        <div ref={ref} className={commonClasses} {...props}>
          {children}
        </div>
      );
    }

    return (
      <div className="">
        <div className="w-full flex justify-center -mb-12 z-60 relative">
          <HoverText text="What We Do" type="title" />
        </div>
        <div
          ref={ref}
          className={cn(
            "relative py-24 grid grid-cols-2 gap-x-8 bg-background z-50"
          )}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          {/* Background Gradients */}
          {images.map((image) => (
            <div
              key={`bg-${image.id}`}
              className={cn(
                "absolute inset-0 transition-opacity duration-500 ease-in-out",
                image.gradient,
                activeImage?.id === image.id ? "opacity-100" : "opacity-0"
              )}
              style={{ gridColumn: "1 / -1" }} // Span across all grid columns
            />
          ))}

          {images.map((image) => (
            <div
              key={image.id}
              className={cn(
                "cursor-pointer relative sm:flex items-center",
                image.id % 2 === 0
                  ? "sm:justify-start text-left"
                  : "sm:justify-end text-right"
              )}
              onMouseEnter={() => handleImageHover(image)}
            >
              {!isDesktop && (
                <img
                  src={image.src}
                  className="sm:w-32 sm:h-20 w-full h-52 object-cover rounded-md"
                  alt="mobileImg"
                />
              )}
              <h2
                className={cn(
                  `text-5xl sm:py-6 py-2 leading-[100%] relative flex items-center gap-8`,
                  activeImage?.id === image.id
                    ? "mix-blend-difference z-20 text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                )}
              >
                {image.title}
                <span
                  className={`font-[Poppins-Light] text-foreground/50 ${
                    image.id % 2 !== 0 ? "block" : "hidden"
                  }`}
                >
                  /
                </span>
                <span
                  className={`absolute top-4 text-base font-light text-foreground/50 ${
                    image.id % 2 === 0 ? "-right-5" : "right-8"
                  }`}
                >
                  0{image.id}
                </span>
              </h2>
            </div>
          ))}
          {isDesktop && activeImage && (
            <img
              src={activeImage.src}
              alt={activeImage.title}
              className={`fixed object-cover pointer-events-none z-10 w-[300px] h-[400px] rounded-lg`}
              style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
                transform: `translate(-50%, -50%) scale(${scale})`,
                opacity: opacity,
              }}
            />
          )}
        </div>
      </div>
    );
  }
);

HoverImageReveal.displayName = "HoverImageReveal";

export default HoverImageReveal;
