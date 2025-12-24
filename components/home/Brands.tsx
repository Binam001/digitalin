import React from "react";
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "../lightswind/3d-scroll-trigger";
import { brandsALists, brandsBLists } from "@/constants";
import { img } from "framer-motion/client";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import Link from "next/link";
import HoverText from "../HoverText";
const Brands = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center gap-4">
      <div className="w-full flex justify-center mb-8">
        <HoverText text="We've Worked With" type="title" />
      </div>
      <ThreeDScrollTriggerContainer>
        <ThreeDScrollTriggerRow baseVelocity={10} direction={1}>
          {brandsALists.map((brandsAItem) => (
            <div key={brandsAItem.id} className="px-4">
              <img src={brandsAItem.image} alt={brandsAItem.title} />
            </div>
          ))}
        </ThreeDScrollTriggerRow>
        <ThreeDScrollTriggerRow baseVelocity={10} direction={-1}>
          {brandsBLists.map((brandsBItem) => (
            <div key={brandsBItem.id} className="px-4">
              <img src={brandsBItem.image} alt={brandsBItem.title} />
            </div>
          ))}
        </ThreeDScrollTriggerRow>
      </ThreeDScrollTriggerContainer>

      <div className="flex justify-center">
        <Link href="/brands">
          <InteractiveHoverButton text="View More" />
        </Link>
      </div>
    </div>
  );
};

export default Brands;
