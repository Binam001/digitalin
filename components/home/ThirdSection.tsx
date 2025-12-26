import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import HoverText from "../HoverText";

gsap.registerPlugin(ScrollTrigger);

const ThirdSection = () => {
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
      className="w-screen h-screen flex flex-col justify-center gap-8 bg-background z-10"
    >
      <div className="absolute inset-0 flex items-center">
        <img
          src="/images/home/unique-orange-hat.png"
          alt="unique orange hat"
          className="brightness-50 h-screen w-screen object-cover"
        />
      </div>
      <motion.h1
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-7xl font-bold flex items-center gap-4"
      >
        {/* <HoverText text="And" />
        <HoverText text="attention" className="text-primary" />
        <HoverText text="sells products." /> */}
        <p>
          And <span className="text-primary">attention</span> sells products.
        </p>
      </motion.h1>
    </section>
  );
};

export default ThirdSection;
