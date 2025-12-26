import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import HoverText from "../HoverText";

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(sectionRef.current, {
        opacity: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-screen h-screen flex flex-col justify-center gap-8 bg-background z-10 relative"
    >
      <div className="absolute right-0 top-0 h-[120vh] w-1/2">
        <video
          src="/videos/home/video1.mp4"
          className="h-full w-full object-right"
          autoPlay
          loop
          muted
        />
      </div>
      <motion.h1
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-7xl font-bold"
      >
        {/* <HoverText text="We don't sell products" /> */}
        <p>We don't sell products</p>
      </motion.h1>
    </section>
  );
};

export default Introduction;
