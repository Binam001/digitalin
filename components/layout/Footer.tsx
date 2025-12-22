import Link from "next/link";
import AnalogClock from "../footer/AnalogClock";
import HoverText from "../HoverText";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 mt-16">
      <div className="space-y-8 text-center">
        <p>Ideas or Ads?</p>
        <HoverText text="Let's Launch." className="text-4xl font-semibold" />
      </div>
      <AnalogClock />
      <div className="">
        <p>We guessed you're in Nepal?</p>
      </div>
      <Link href="/contact">
        <InteractiveHoverButton text="Contact Us" />
      </Link>
      <HoverText
        text="DIGITALIN"
        className="text-[200px] font-[Poppins-ExtraBold] font-extrabold tracking-wider"
      />
    </footer>
  );
};

export default Footer;
