import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "../lightswind/3d-scroll-trigger";
import { brandsALists, brandsBLists } from "@/constants";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import Link from "next/link";
const Brands = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center gap-16">
      <div className="w-full flex justify-center mb-8">
        <p className="text-2xl lg:text-5xl font-[Poppins-ExtraBold] uppercase">
          We've Worked With
        </p>
      </div>
      <ThreeDScrollTriggerContainer>
        <ThreeDScrollTriggerRow baseVelocity={5} direction={1}>
          {brandsALists.map((brandsAItem) => (
            <div key={brandsAItem.id} className="px-4">
              <img
                src={brandsAItem.image}
                alt={brandsAItem.title}
                className="w-2/3"
              />
            </div>
          ))}
        </ThreeDScrollTriggerRow>
        <ThreeDScrollTriggerRow baseVelocity={5} direction={-1}>
          {brandsBLists.map((brandsBItem) => (
            <div key={brandsBItem.id} className="px-4">
              <img
                src={brandsBItem.image}
                alt={brandsBItem.title}
                className="w-2/3"
              />
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
