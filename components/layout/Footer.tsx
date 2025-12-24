import Link from "next/link";
import AnalogClock from "../footer/AnalogClock";
import HoverText from "../HoverText";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { contactLists, socialLinkLists } from "@/constants";
import { Icon } from "@iconify/react";
import Noise from "../Noise";
// import { useMediaQuery } from "react-responsive";

const Footer = () => {
  // const isMobile = useMediaQuery({ maxWidth: 425 });
  return (
    <footer className="flex flex-col items-center pt-16 w-screen px-4 md:px-8 lg:px-16 bg-foreground/80 relative min-h-screen">
      {/* {!isMobile && <Noise className="z-80" />} */}
      <Noise className="z-80" />
      <div className="flex flex-col items-center gap-8">
        <div className="space-y-8 text-center text-background">
          <p>Ideas or Ads?</p>
          <HoverText text="Let's Launch." className="text-4xl font-semibold" />
        </div>
        <AnalogClock />
        <div className="text-background">
          <p>We guessed you're in Nepal?</p>
        </div>
        <Link href="/contact">
          <InteractiveHoverButton
            text="Contact Us"
            className="text-foreground"
          />
        </Link>
        <HoverText text="DIGITALIN" type="footer" className="leading-[0.7]" />
      </div>

      <div className="w-screen py-8 z-40 bg-background">
        <div className="px-4 md:px-8 lg:px-16 space-y-8 text-sm">
          <div className="flex items-center justify-between w-full">
            <div className="grid grid-cols-2 gap-y-4">
              {contactLists.map((contactItem) => (
                <Link
                  key={contactItem.id}
                  href={contactItem.link}
                  className="flex items-center gap-1 hover:text-primary transition-all duration-300 w-fit"
                >
                  <Icon icon={contactItem.icon} className="size-5" />
                  {contactItem.desc}
                </Link>
              ))}
            </div>
            {/* <div className="space-y-4">
              <div className="space-x-8">
                <Link href="mailto:connect@digitalin.com.np">
                  connect@digitalin.com.np
                </Link>
                <Link href="tel:+9779704593302">+977 9704593302</Link>
              </div>
              <div className="">
                <span>Pattipa Marg Uttar Baghdol, Lalitpur, Nepal</span>
              </div>
            </div> */}

            <div className="flex items-center gap-4">
              {socialLinkLists.map((socialLinkItem) => (
                <Link key={socialLinkItem.id} href={socialLinkItem.href}>
                  <Icon
                    icon={socialLinkItem.icon}
                    className="size-6 hover:text-primary hover:scale-[1.3] transition-all duration-300"
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
