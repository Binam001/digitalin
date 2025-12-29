"use client";

import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useTransition } from "../context/TransitionContext";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);
  const previousPathname = useRef<string | null>(null);
  const { getEntryAnimations } = useTransition();

  // Routes to exclude from page transitions
  const excludedRoutes = ["/services"]; // Add your service page route here
  const shouldAnimate = !excludedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Initial setup
  useEffect(() => {
    if (overlayRef.current) {
      gsap.set(overlayRef.current, {
        y: "-100%",
        rotation: 0,
        scale: 1,
        transformOrigin: "top right",
      });
    }
  }, []);

  // Play entry animation when pathname changes
  useEffect(() => {
    if (previousPathname.current === pathname) return;

    // Only play entry animation if current route should be animated
    if (shouldAnimate) {
      playEntryAnimation();
    }
    previousPathname.current = pathname;
  }, [pathname, shouldAnimate]);

  const playEntryAnimation = () => {
    const entryAnimationsFn = getEntryAnimations();

    const entryTl = gsap.timeline({
      onComplete: () => {
        isTransitioning.current = false;
      },
    });

    // Animate overlay out (rotating and moving up)
    entryTl.to(overlayRef.current, {
      y: "-100%",
      rotation: 30,
      scale: 0.5,
      duration: 0.8,
      ease: "power2.inOut",
    });

    // Animate page content in (from rotated position to normal)
    entryTl.fromTo(
      ".page-content",
      {
        rotation: 30,
        y: "-20%",
        opacity: 0,
        scale: 0.5,
        transformOrigin: "top right",
      },
      {
        rotation: 0,
        y: "0%",
        opacity: 1,
        scale: 1,
        transformOrigin: "center center",
        duration: 0.8,
        ease: "power2.inOut",
        clearProps: "all",
      },
      "<"
    );

    // Add custom animations if provided
    if (entryAnimationsFn) {
      if (entryAnimationsFn.length > 0) {
        const pageTl = gsap.timeline();
        const timelineFn = entryAnimationsFn as (
          tl: gsap.core.Timeline
        ) => void;
        timelineFn(pageTl);
        entryTl.add(pageTl, "-=0.3");
      } else {
        const freeFn = entryAnimationsFn as () => void;
        entryTl.call(
          () => {
            freeFn();
          },
          [],
          "-=0.3"
        );
      }
    }

    entryTl.play();
  };

  const exitPage = (url: string) => {
    // Check if target route should be animated
    const targetShouldAnimate = !excludedRoutes.some((route) =>
      url.startsWith(route)
    );

    // If neither current nor target should animate, just navigate
    if (!shouldAnimate && !targetShouldAnimate) {
      router.push(url);
      isTransitioning.current = false;
      return;
    }

    const exitTl = gsap.timeline({
      onComplete: () => {
        router.push(url);
      },
    });

    // Rotate and move page content up/out
    exitTl.to(".page-content", {
      rotation: 30,
      y: "-20%",
      opacity: 0,
      scale: 0.5,
      transformOrigin: "top right",
      duration: 0.8,
      ease: "power2.inOut",
    });

    // Animate overlay to cover screen (coming from top right with rotation)
    exitTl.fromTo(
      overlayRef.current,
      {
        y: "-100%",
        rotation: 30,
        scale: 0.5,
      },
      {
        y: "0%",
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.inOut",
      },
      "-=0.6"
    );

    exitTl.play();
  };

  // Handle link clicks with event delegation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        'a[href^="/"]'
      ) as HTMLAnchorElement;

      if (!target) return;

      const href = target.getAttribute("href");

      if (href && href.startsWith("/")) {
        const url = new URL(href, window.location.origin);
        if (url.pathname !== pathname && !isTransitioning.current) {
          e.preventDefault();
          isTransitioning.current = true;
          exitPage(href);
        }
      }
    };

    // Use event delegation on document
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="transition-overlay fixed top-0 left-0 z-50 h-screen w-screen bg-background pointer-events-none"
        style={{ transformOrigin: "top right" }}
      ></div>
      {children}
    </>
  );
};

export default PageTransition;
