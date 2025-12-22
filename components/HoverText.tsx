"use client";

import { motion, useAnimation } from "framer-motion";

interface MotionTextProps {
  text: string;
  className?: string;
}

const randomColor = () => `hsl(${Math.floor(Math.random() * 360)}, 80%, 55%)`;
const randomRotation = () => Math.floor(Math.random() * 12) - 6;

export default function HoverText({ text, className = "" }: MotionTextProps) {
  return (
    <div className={`flex ${className}`}>
      {text.split("").map((char, i) => {
        const isO = char.toLowerCase() === "o";
        const letterControls = useAnimation();
        const imageControls = useAnimation();

        return (
          <motion.span
            key={i}
            className="relative inline-block leading-none"
            // onHoverStart={() => {
            //   if (isO) {
            //     letterControls.start({ opacity: 0 });
            //     imageControls.start({ opacity: 1 });
            //   }
            // }}
            // onHoverEnd={() => {
            //   if (isO) {
            //     letterControls.start({ opacity: 1 });
            //     imageControls.start({ opacity: 0 });
            //   }
            // }}
            whileHover={{
              rotate: randomRotation(),
              scale: 1.2,
            }}
            transition={{ duration: 0.2 }}
          >
            {/* Sizer Span to maintain width */}
            <span className="invisible leading-none">
              {char === " " ? "\u00A0" : char}
            </span>

            {/* Letter */}
            <motion.span
              className="absolute top-0 left-0"
              whileHover={{
                color: randomColor(),
                fontFamily: "Poppins-Light",
                fontWeight: 100,
              }}
              animate={isO ? letterControls : undefined}
              initial={{ opacity: 1 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>

            {/* Apple Image */}
            {/* {isO && (
              <motion.img
                src="/images/apple.png"
                alt="Apple"
                className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={imageControls}
                transition={{ duration: 0.15 }}
              />
            )} */}
          </motion.span>
        );
      })}
    </div>
  );
}
