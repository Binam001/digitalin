import Link from "next/link";
import AnalogClock from "../footer/AnalogClock";
import HoverText from "../HoverText";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { contactLists, socialLinkLists } from "@/constants";
import { Icon } from "@iconify/react";
// import { useMediaQuery } from "react-responsive";

const Footer = () => {
  // const isMobile = useMediaQuery({ maxWidth: 425 });
  return (
    <footer className="flex flex-col items-center w-screen px-4 md:px-8 lg:px-16 bg-background relative">
      <div className="flex flex-col items-center gap-4">
        <div className="space-y-4 text-center">
          {/* <p>Ideas or Ads?</p> */}
          {/* <HoverText text="Let's Launch." className="text-4xl font-semibold" /> */}
        </div>
        {/* <AnalogClock /> */}
        {/* <div className="text-background">
          <p>We guessed you're in Nepal?</p>
        </div> */}
        {/* <Link href="/contact">
          <InteractiveHoverButton
            text="Contact Us"
            className="text-foreground"
          />
        </Link> */}
        <div className="">
          {/* <HoverText text="DIGITALIN" type="footer" className="leading-[0.7]" /> */}
          <p className="text-[200px] font-[Poppins-ExtraBold] tracking-wider">
            DIGITALIN
          </p>
        </div>
      </div>

      <div className="w-screen py-4 z-40 bg-background">
        <div className="px-4 md:px-8 lg:px-16 space-y-8 text-sm">
          <hr className="h-px w-full text-foreground/30" />
          <div className="flex justify-between w-full">
            <div className="">
              {/* <HoverText text="Contact Us" type="subTitle" /> */}
              <p className="text-lg text-primary font-semibold">Contact Us</p>
              <div className="flex flex-col gap-y-4 mt-4">
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
            </div>

            <div className="">
              <div className="justify-self-end">
                {/* <HoverText text="Stay Connected" type="subTitle" /> */}
                <p className="text-lg text-primary font-semibold">
                  Stay Connected
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4">
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
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs">© Copyright 2025 DigitalIn</span>
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
