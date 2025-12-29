"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const awardLists = [
  {
    id: 1,
    title: "Promotional Champaign of the Year",
    sponsor: "Pepsi More Fizz More Swag Content",
    image: "/images/awards/award.png",
  },
  {
    id: 2,
    title: "Promotional Champaign of the Year",
    sponsor: "Pepsi More Fizz More Swag Content",
    image: "/images/awards/award.png",
  },
  {
    id: 3,
    title: "Promotional Champaign of the Year",
    sponsor: "Pepsi More Fizz More Swag Content",
    image: "/images/awards/award.png",
  },
  {
    id: 4,
    title: "Promotional Champaign of the Year",
    sponsor: "Pepsi More Fizz More Swag Content",
    image: "/images/awards/award.png",
  },
  {
    id: 5,
    title: "Promotional Champaign of the Year",
    sponsor: "Pepsi More Fizz More Swag Content",
    image: "/images/awards/award.png",
  },
  {
    id: 6,
    title: "Promotional Champaign of the Year",
    sponsor: "Pepsi More Fizz More Swag Content",
    image: "/images/awards/award.png",
  },
];

const AwardSection = () => {
  const columnRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Get all items in the second column (indices 1, 4 in a 3-column grid)
    const secondColumnItems = columnRefs.current.filter(
      (item, i) => i % 3 === 1 && item !== null
    );

    // Create parallax effect for second column
    secondColumnItems.forEach((item) => {
      gsap.to(item, {
        yPercent: 15, // Move down by 15% of its height
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom", // Start when top of element hits bottom of viewport
          end: "bottom top", // End when bottom of element hits top of viewport
          scrub: 1.5, // Smooth scrubbing, takes 1.5 seconds to "catch up"
        },
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="min-h-screen py-20">
      <div className="mx-auto grid w-fit grid-cols-3 gap-x-8 gap-y-8 px-8">
        {awardLists.map((award, index) => (
          <div
            key={award.id}
            ref={(el) => {
              columnRefs.current[index] = el;
            }}
            className={`w-60 h-80 ${award.id === 2 ? "-mt-8" : ""}`}
          >
            <img
              src={award.image}
              alt={award.title}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardSection;
