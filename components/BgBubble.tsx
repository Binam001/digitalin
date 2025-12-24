"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BgBubble = () => {
  const bubble1Ref = useRef<HTMLDivElement>(null);
  const bubble2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateBubble = (bubble: HTMLDivElement) => {
      const randomX = () => gsap.utils.random(-30, 30);
      const randomY = () => gsap.utils.random(-30, 30);
      const randomDuration = () => gsap.utils.random(8, 15);

      const animate = () => {
        gsap.to(bubble, {
          x: randomX() + "%",
          y: randomY() + "%",
          duration: randomDuration(),
          ease: "sine.inOut",
          onComplete: animate,
        });
      };

      animate();
    };

    if (bubble1Ref.current) animateBubble(bubble1Ref.current);
    if (bubble2Ref.current) animateBubble(bubble2Ref.current);

    return () => {
      gsap.killTweensOf([bubble1Ref.current, bubble2Ref.current]);
    };
  }, []);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bubble 1 */}
        <div
          ref={bubble2Ref}
          className="absolute w-[300px] h-[200px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
            filter: "blur(10px)",
            top: "0%",
            left: "50%",
          }}
        />
        {/* Bubble 2 */}
        <div
          ref={bubble2Ref}
          className="absolute w-[300px] h-[300px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
            filter: "blur(10px)",
            bottom: "0%",
            right: "60%",
          }}
        />
      </div>
    </>
  );
};

export default BgBubble;
