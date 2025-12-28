"use client";

import { ImageSlideShow } from "@/components/framer-thumbnail-carousel";
import Brands from "@/components/home/Brands";
import CaseStudy from "@/components/home/CaseStudy";
import FloatingInput from "@/components/home/FloatingInput";
import HeroSection from "@/components/home/HeroSection";
// import HeroSection from "@/components/home/HeroSection";
import HorizontalScroll from "@/components/home/HorizontalScroll";
import Introduction from "@/components/home/Introduction";
import MarqueeExpand from "@/components/home/MarqueeExpand";
import SecondSection from "@/components/home/SecondSection";
import TextFlip from "@/components/home/TextFlip";
import ThirdSection from "@/components/home/ThirdSection";
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
        <HeroSection />
      </div>
      <div className="h-dvh" />
      <div className="relative z-20">
        <TextFlip />
        {/* <Introduction />
        <SecondSection />
        <ThirdSection /> */}
      </div>

      <HoverImageReveal />
      {/* <CaseStudy /> */}
      <WhatWeDo />
      <AdsViewer />
      <div className="h-dvh"></div>
      {/* <MarqueeExpand /> */}
      {/* <HorizontalScroll /> */}
      <Brands />
      {/* <FloatingInput /> */}
    </div>
  );
}
