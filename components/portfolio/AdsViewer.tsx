"use client";

import { Group } from "three";
import { Canvas } from "@react-three/fiber";
// import clsx from "clsx";
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
import HoverText from "../HoverText";

gsap.registerPlugin(ScrollTrigger);

const ModelScroll = () => {
  const groupRef = useRef<Group>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const { setTexture } = useLaptopStore();

  //preload all feature videos during component mount
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement("video");

      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });
      v.load();
    });
  }, []);

  useGSAP(() => {
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    //sync the feature content
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    //3D spin
    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    //content & texture sync
    timeline
      .call(() => setTexture("/videos/portfolio/mountain-dew.mp4"))
      .to(".box1", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/portfolio/pepsi.mp4"))
      .to(".box2", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/portfolio/mountain-dew.mp4"))
      .to(".box3", { opacity: 1, y: 0 });

    // .call(() => setTexture("./videos/feature-4.mp4"))
    // .to(".box4", { opacity: 1, y: 0 })

    // .call(() => setTexture("./videos/feature-5.mp4"))
    // .to(".box5", { opacity: 1, y: 0 });
  }, []);

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
        <LaptopModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

const AdsViewer = () => {
  return (
    <section
      id="features"
      className="w-screen h-screen flex flex-col items-center justify-center relative"
    >
      <h2>
        <HoverText
          text="Explore the campaigns we've brought to life"
          className="text-4xl"
        />
      </h2>

      <Canvas id="f-canvas" camera={{}}>
        <StudioLights />
        <ambientLight intensity={0.5} />

        <ModelScroll />
      </Canvas>

      <div className="absolute top-1/4 z-40 w-full h-full bg-ambe-300">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={cn(
              "box",
              `box${feature.id}`,
              "absolute w-[40%] px-4 md:px-8 lg:px-16",
              `${feature.id % 2 === 0 ? "right-0" : "left-0"}`,
              feature.styles
            )}
          >
            {/* <img src={feature.icon} alt={feature.highlight} /> */}
            <p className="flex flex-col">
              <span className="text-primary text-2xl font-semibold mb-4">
                {feature.highlight}
              </span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdsViewer;
