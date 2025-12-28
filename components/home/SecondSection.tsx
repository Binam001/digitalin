import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import HoverText from "../HoverText";

gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
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
      className="w-screen h-screen flex flex-col justify-center gap-8 bg-primary z-10"
    >
      {/* <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 lg:not-last:right-16 flex items-center">
        <img
          src="/images/home/target.png"
          alt="target"
          className="w-1/2 h-1/2 object-cover"
        />
      </div> */}
      <motion.h1
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-2xl lg:text-7xl font-bold text-center"
      >
        {/* <HoverText text="We sell attention" /> */}
        <p>We sell attention</p>
      </motion.h1>
    </section>
  );
};

export default SecondSection;
