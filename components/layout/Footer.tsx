import Link from "next/link";
import AnalogClock from "../footer/AnalogClock";
import HoverText from "../HoverText";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { socialLinkLists } from "@/constants";
import { Icon } from "@iconify/react";
import Noise from "../Noise";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 pt-16 w-screen px-4 md:px-8 lg:px-16 bg-foreground relative">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <div className="space-y-8 text-center text-background">
        <p>Ideas or Ads?</p>
        <HoverText text="Let's Launch." className="text-4xl font-semibold" />
      </div>
      <AnalogClock />
      <div className="text-background">
        <p>We guessed you're in Nepal?</p>
      </div>
      <Link href="/contact">
        <InteractiveHoverButton text="Contact Us" className="text-foreground" />
      </Link>
      <HoverText
        text="DIGITALIN"
        className="text-[200px] font-[Poppins-ExtraBold] tracking-wider text-background"
      />

      <div className="w-screen py-8 z-40 bg-background">
        <div className="px-4 md:px-8 lg:px-16 space-y-8">
          <div className="flex items-center justify-between w-full">
            <div className="space-x-8">
              <Link href="#" className="text-primary">
                Email Us
              </Link>
              <Link href="#">Call</Link>
            </div>

            <div className="flex items-center gap-4">
              {socialLinkLists.map((socialLinkItem) => (
                <Link key={socialLinkItem.id} href={socialLinkItem.href}>
                  <Icon
                    icon={socialLinkItem.icon}
                    className="size-6 hover:text-primary"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-x-8">
              <Link
                href="#"
                className="border-b hover:text-primary hover:border-b-2"
              >
                Terms & Conditions
              </Link>
              <Link
                href="#"
                className="border-b hover:text-primary hover:border-b-2"
              >
                Privacy Policy
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs whitespace-nowrap">
                Design & Developed by
              </span>
              <Link
                href="https://webxnepal.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/webx-logo.png" alt="webx logo" className="w-12" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
