"use client";

import { Icon } from "@iconify/react";
import React, { use, useEffect, useState } from "react";
import { brainSvg } from "./brainSvg";
import { useMediaQuery } from "react-responsive";

// TypeScript declaration for tsParticles
declare global {
  interface Window {
    tsParticles: any;
  }
}

const BrainParticles: React.FC = () => {
  const isTablet = useMediaQuery({ maxWidth: 767 });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted && !isTablet) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/tsparticles@1.43.1/tsparticles.min.js";
      script.async = true;

      script.onload = () => {
        if (window.tsParticles) {
          window.tsParticles.load("tsparticles", {
            detectRetina: false,
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 80,
                  duration: 2,
                  opacity: 1,
                  size: 6,
                },
              },
            },
            particles: {
              color: {
                value: "#f26622",
              },
              links: {
                blink: false,
                color: "#fff",
                consent: false,
                distance: 40,
                enable: true,
                opacity: 0.3,
                width: 0.5,
              },
              move: {
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                bounce: false,
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: false,
                  area: 2000,
                },
                limit: 0,
                value: 400,
              },
              opacity: {
                animation: {
                  enable: false,
                  minimumValue: 0.05,
                  speed: 2,
                  sync: false,
                },
                random: false,
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                animation: {
                  enable: false,
                  minimumValue: 0.1,
                  speed: 40,
                  sync: false,
                },
                random: false,
                value: 0.5,
              },
            },
            polygon: {
              draw: {
                enable: false,
                lineColor: "#ffffff",
                lineWidth: 0.5,
              },
              move: {
                radius: 20,
              },
              position: {
                x: 30,
                y: 30,
              },
              inlineArrangement: "equidistant",
              scale: 5,
              type: "inline",
              data: brainSvg,
            },
          });
        }
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [hasMounted, isTablet]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {hasMounted && !isTablet && (
        <div className="absolute inset-0 h-full w-full">
          <div
            id="tsparticles"
            className="absolute top-0 w-full h-full bg-background overflow-hidden"
          />
        </div>
      )}

      <div className="w-full h-2/3 mx-auto absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col justify-between items-center pointer-events-none">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl lg:text-7xl text-center font-semibold">
            Welcome to Digital<span className="text-primary">In</span>
          </h1>
          <p className="w-1/2 text-center">
            We transform human thought into strategic advertising that captures
            attention and drives results
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm">Scroll Down</p>
          <div className="animate-bounce">
            <Icon icon="mynaui:arrow-long-down" className="size-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainParticles;
