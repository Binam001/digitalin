"use client";

import { motion, useAnimation } from "framer-motion";

interface MotionTextProps {
  text: string;
  className?: string;
  type?: "sm" | "md" | "lg" | "title" | "footer";
}

const randomColor = () => `#f26622`;
// const randomColor = () => `hsl(${Math.floor(Math.random() * 360)}, 80%, 55%)`;
const randomRotation = () => Math.floor(Math.random() * 12) - 6;

export default function HoverText({
  text,
  className = "",
  type = "md",
}: MotionTextProps) {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-4xl md:text-6xl",
    lg: "text-6xl md:text-8xl",
    title: "text-5xl font-[Poppins-ExtraBold] uppercase",
    footer:
      "text-[200px] font-[Poppins-ExtraBold] tracking-wider text-background",
  };
  const words = text.split(" ");
  return (
    <div className={`flex flex-wrap ${sizeClasses[type]} ${className}`}>
      {words.map((word, i) => (
        <div key={i} className="flex">
          {word.split("").map((char, j) => {
            const isO = char.toLowerCase() === "o";
            const letterControls = useAnimation();
            const imageControls = useAnimation();

            return (
              <motion.span
                key={j}
                className="relative"
                whileHover={{
                  rotate: randomRotation(),
                  scale: 1.2,
                }}
                transition={{ duration: 0.2 }}
              >
                <span className="invisible">
                  {char === " " ? "\u00A0" : char}
                </span>
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
              </motion.span>
            );
          })}
          {i < words.length - 1 && (
            <motion.span className="relative">
              <span className="invisible">&nbsp;</span>
              <span className="absolute top-0 left-0">&nbsp;</span>
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
}
