"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { toZonedTime } from "date-fns-tz";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility for Tailwind classes ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AnalogClockProps {
  timezone?: string;
  faceText?: string;
  label?: string;
  className?: string;
}

const AnalogClock: React.FC<AnalogClockProps> = ({
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone,
  faceText = "STAYFOCUSED.",
  label = "DIGITALIN",
  className,
}) => {
  const [date, setDate] = useState<Date | null>(null);

  // --- Refs to track continuous rotation ---
  // These prevent the "rewind" bug by keeping track of how many full circles we've made
  const secOffset = useRef(0);
  const prevSec = useRef(0);

  const minOffset = useRef(0);
  const prevMin = useRef(0);

  const hourOffset = useRef(0);
  const prevHour = useRef(0);

  useEffect(() => {
    // Initial hydration
    const now = new Date();
    const zoned = toZonedTime(now, timezone);
    setDate(zoned);

    // Initialize refs to current time to prevent initial spin
    prevSec.current = zoned.getSeconds();
    prevMin.current = zoned.getMinutes();
    prevHour.current = zoned.getHours();

    const timer = setInterval(() => {
      const now = new Date();
      const zonedDate = toZonedTime(now, timezone);
      setDate(zonedDate);
    }, 1000);
    return () => clearInterval(timer);
  }, [timezone]);

  if (!date) return null;

  // --- Continuous Rotation Logic ---
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const hours12 = hours % 12 || 12;

  // 1. Calculate Seconds
  // If current second is significantly smaller than previous, we wrapped (e.g., 59 -> 0)
  if (prevSec.current > 45 && seconds < 15) {
    secOffset.current += 360;
  }
  prevSec.current = seconds;
  const secDeg = seconds * 6 + secOffset.current;

  // 2. Calculate Minutes (similar logic)
  if (prevMin.current > 45 && minutes < 15) {
    minOffset.current += 360;
  }
  prevMin.current = minutes;
  // Add seconds fraction for smooth movement (optional, remove seconds part for step movement)
  const minDeg = minutes * 6 + seconds * 0.1 + minOffset.current;

  // 3. Calculate Hours
  // 12-hour wrap detection
  if (prevHour.current > 10 && hours < 2) {
    hourOffset.current += 360;
  }
  prevHour.current = hours;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5 + hourOffset.current;

  // --- Face Generation ---
  const cleanText = faceText.padEnd(12, " ").slice(0, 12).toUpperCase();
  const chars = cleanText.split("");

  const clockItems = Array.from({ length: 12 }, (_, i) => {
    const num = i + 1;
    const charIndex = num === 12 ? 0 : num;
    return { num, char: chars[charIndex] || "•" };
  });

  return (
    <div
      className={cn(
        "relative flex items-center justify-center p-10",
        className
      )}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      <div className="relative w-80 h-80 rounded-full border-[6px] border-primary bg-[#0a0a0a] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center">
        {/* Ticks */}
        {Array.from({ length: 60 }).map((_, i) => {
          const isMajor = i % 5 === 0;
          return (
            <div
              key={i}
              className={cn(
                "absolute w-0.5 bg-white left-1/2 top-0 origin-bottom transform -translate-x-1/2",
                isMajor ? "h-3 bg-[#735749]" : "h-1.5 opacity-40"
              )}
              style={{
                height: isMajor ? "10px" : "5px",
                transform: `rotate(${i * 6}deg) translateY(4px)`,
                transformOrigin: "50% 155px",
              }}
            />
          );
        })}

        {/* Characters */}
        {clockItems.map(({ num, char }) => {
          const angle = num * 30;
          const radius = 120;
          const isCurrentHour = hours12 === num;

          return (
            <div
              key={num}
              className="absolute text-2xl font-medium text-neutral-400"
              style={{
                transform: `rotate(${angle}deg) translate(0, -${radius}px) rotate(-${angle}deg)`,
                left: "calc(50% - 1rem)",
                top: "calc(50% - 1.5rem)",
                width: "2rem",
                textAlign: "center",
              }}
            >
              <motion.span
                layout
                key={isCurrentHour ? "num" : "char"}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  color: isCurrentHour ? "#ffffff" : "#9ca3af",
                }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "block",
                  isCurrentHour &&
                    "font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                )}
              >
                {/* {isCurrentHour ? num : char} */}
                {char}
              </motion.span>
            </div>
          );
        })}

        {/* Labels */}
        <div className="absolute top-[25%] text-neutral-500 text-xs tracking-[0.2em] font-light uppercase opacity-80">
          {label}
        </div>
        <div className="absolute bottom-[25%] text-neutral-600 text-[10px] tracking-widest font-mono uppercase">
          {timezone.split("/")[1]?.replace("_", " ") || "LOCAL"}
        </div>

        {/* --- HANDS --- */}

        {/* Hour Hand */}
        <motion.div
          className="absolute w-1.5 h-20 bg-primary rounded-full z-10 left-1/2 bottom-1/2 origin-bottom -translate-x-1/2 shadow-lg"
          animate={{ rotate: hourDeg }}
          transition={{ ease: "linear", duration: 0.4 }}
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        />

        {/* Minute Hand */}
        <motion.div
          className="absolute w-1 h-28 bg-[#B36A46] rounded-full z-20 left-1/2 bottom-1/2 origin-bottom -translate-x-1/2 shadow-lg mix-blend-screen"
          animate={{ rotate: minDeg }}
          transition={{ ease: "linear", duration: 0.4 }}
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        />

        {/* Second Hand */}
        <motion.div
          className="absolute w-0.5 h-32 bg-white rounded-full z-30 left-1/2 bottom-1/2 origin-bottom -translate-x-1/2"
          animate={{ rotate: secDeg }}
          transition={{
            ease: "linear",
            duration: 1, // Match the interval for smooth sweep
          }}
          style={{ height: "140px", transformOrigin: "50% 140px" }}
        >
          <div className="absolute w-1 h-8 bg-white top-full left-1/2 -translate-x-1/2 rounded-full" />
        </motion.div>

        {/* Center Cap */}
        <div className="absolute w-4 h-4 bg-[#fefce8] border-2 border-[#fb923c] rounded-full z-40 shadow-md"></div>
        <div className="absolute w-1 h-1 bg-[#fb923c] rounded-full z-50"></div>
      </div>
    </div>
  );
};

export default AnalogClock;
