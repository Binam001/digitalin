"use client";

import { ImageSlideShow } from "@/components/framer-thumbnail-carousel";
import Blog from "@/components/home/Blog";
import BrainParticles from "@/components/home/BrainParticles";
import Brands from "@/components/home/Brands";
import CaseStudy from "@/components/home/CaseStudy";
import FloatingInput from "@/components/home/FloatingInput";
import { Gallery4 } from "@/components/home/gallery4";
import HeroSection from "@/components/home/HeroSection";
import HorizontalScroll from "@/components/home/HorizontalScroll";
import MarqueeExpand from "@/components/home/MarqueeExpand";
import TextFlip from "@/components/home/TextFlip";
import WhatWeDo from "@/components/home/WhatWeDo";
import HoverImageReveal from "@/components/image-reveal";
import AdsViewer from "@/components/portfolio/AdsViewer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    gsap.to("#imageSlideShow", {
      opacity: 0,
      // filter: "blur(5px)",
      scrollTrigger: {
        trigger: "#imageSlideShow",
        start: "center center",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);
  return (
    <div className="w-screen relative bg-background">
      {/* <HeroSection /> */}
      <div id="imageSlideShow" className="h-screen fixed inset-0">
        {/* <ImageSlideShow /> */}
        {/* <BrainParticles /> */}
        <HeroSection />
      </div>
      <div className="h-dvh" />
      <div className="relative z-20">
        <TextFlip />
      </div>

      {/* <HoverImageReveal /> */}
      {/* <CaseStudy /> */}
      <WhatWeDo />
      <Gallery4 />
      {/* <AdsViewer />
      <div className="h-dvh"></div> */}
      {/* <MarqueeExpand /> */}
      {/* <HorizontalScroll /> */}
      <Brands />
      <Blog />
      {/* <FloatingInput /> */}
    </div>
  );
}
