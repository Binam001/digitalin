"use client";

import { Group } from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import StudioLights from "../three/StudioLights";
import { features, featureSequence } from "@/constants";
import useLaptopStore from "@/store";
import LaptopModel from "./Laptop";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

gsap.registerPlugin(ScrollTrigger);

const ModelScroll = () => {
  const groupRef = useRef<Group>(null);
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const { setTexture } = useLaptopStore();

  // Preload all feature videos with error handling
  useEffect(() => {
    const preloadPromises = featureSequence.map((feature) => {
      return new Promise((resolve, reject) => {
        const v = document.createElement("video");

        Object.assign(v, {
          src: feature.videoPath,
          muted: true,
          playsInline: true,
          preload: "auto",
          crossOrigin: "anonymous",
        });

        v.addEventListener("loadeddata", () => resolve(feature.videoPath));
        v.addEventListener("error", (e) => {
          reject(new Error(`Video load failed: ${feature.videoPath}`));
        });

        v.load();
      });
    });

    Promise.allSettled(preloadPromises);
  }, []);

  useGSAP(() => {
    if (!groupRef.current) {
      return;
    }

    try {
      const modelTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#f-canvas",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#f-canvas",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Set initial position: Feature 1 has text on left, model on right
      gsap.set(groupRef.current.position, { x: `${isTablet ? 0 : 2}` });

      // Show first feature immediately
      gsap.set(".box1", { opacity: 1, y: 0 });

      // Zigzag model position animation with full 360° rotation for each transition
      modelTimeline
        // Feature 1 → 2: Model moves from right to left
        .to(groupRef.current.position, {
          x: `${isTablet ? 0 : -2}`,
          ease: "power2.inOut",
        })
        .to(
          groupRef.current.rotation,
          {
            y: Math.PI * 2, // Full 360° rotation
            ease: "power2.inOut",
          },
          "<"
        )

        // Feature 2 → 3: Model moves from left to right
        .to(groupRef.current.position, {
          x: `${isTablet ? 0 : 2}`,
          ease: "power2.inOut",
        })
        .to(
          groupRef.current.rotation,
          {
            y: Math.PI * 4, // Another 360° rotation
            ease: "power2.inOut",
          },
          "<"
        );

      // Content & texture sync with error handling
      // First texture is set immediately (no animation needed for box1 since it's already visible)
      timeline
        .call(() => {
          try {
            setTexture("/videos/portfolio/mountain-dew.mp4");
          } catch (e) {
            // Silent error handling
          }
        })

        // Add delay before second texture to give it space
        .to({}, { duration: 1 }) // Spacer
        .call(() => {
          try {
            setTexture("/videos/portfolio/pepsi.mp4");
          } catch (e) {
            // Silent error handling
          }
        })
        .to(".box2", { opacity: 1, y: 0, duration: 0.5 })

        // Add delay before third texture
        .to({}, { duration: 1 }) // Spacer
        .call(() => {
          try {
            setTexture("/videos/portfolio/happydent.mp4");
          } catch (e) {
            // Silent error handling
          }
        })
        .to(".box3", { opacity: 1, y: 0, duration: 0.5 });
    } catch (error) {
      // Silent error handling
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setTexture]);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-3xl whitespace-nowrap">
              Ads Loading...
            </h1>
          </Html>
        }
      >
        <LaptopModel scale={isTablet ? 0.03 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

const AdsViewer = () => {
  return (
    <section
      id="features"
      className="w-screen h-screen flex flex-col items-center relative"
    >
      <div className="mt-24">
        <p className="text-2xl lg:text-4xl text-center lg:text-left font-semibold">
          Explore the campaigns we've brought to life
        </p>
      </div>

      <Canvas id="f-canvas" camera={{}}>
        <StudioLights />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>

      <div className="absolute top-1/4 lg:top-1/3 z-40 w-full h-full">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={cn(
              "box",
              `box${feature.id}`,
              "absolute w-full lg:w-[40%] px-4 md:px-8 lg:px-16 opacity-0",
              `${feature.id % 2 === 0 ? "right-0" : "left-0"}`,
              feature.styles
            )}
          >
            <p className="flex flex-col">
              <span className="text-primary lg:text-2xl font-semibold mb-4">
                {feature.title}
              </span>
              {feature.desc}
            </p>
          </div>
        ))}
        {/* <InteractiveHoverButton text="View More" /> */}
      </div>

      <div className="">
        {/* <InteractiveHoverButton text="View More" /> */}
      </div>
    </section>
  );
};

export default AdsViewer;
