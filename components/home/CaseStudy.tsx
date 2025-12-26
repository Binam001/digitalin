import { whatWeDoLists } from "@/constants";
import React from "react";
import HoverText from "../HoverText";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { motion } from "framer-motion";

const CaseStudy = () => {
  return (
    <section className="w-screen my-28 bg-background">
      <div className="w-full flex justify-center mb-8">
        <p className="text-5xl font-[Poppins-ExtraBold] uppercase">
          Our Services
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {whatWeDoLists.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              className={`relative group rounded-2xl overflow-hidden will-change-transform ${
                item.id % 2 === 0 ? "lg:relative lg:top-1/3" : ""
              }`}
              initial={{
                x: isEven ? -120 : 120,
                rotate: isEven ? -12 : 12,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                rotate: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                // 🔥 key change
                once: false,
                margin: "-80px",
              }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl h-72 w-full grayscale group-hover:grayscale-0 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 pointer-events-none" />
              </div>

              <div className="absolute inset-0 flex flex-col items-end justify-between p-4">
                <div className="text-xl lg:text-3xl font-semibold w-[45%] text-right uppercase">
                  {item.title}
                </div>

                <InteractiveHoverButton
                  text="Explore"
                  className="border-foreground"
                  dotClassName="bg-foreground group-hover:bg-primary duration-500"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudy;
