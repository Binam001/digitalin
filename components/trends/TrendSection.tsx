"use client";

import { trendLists } from "@/constants";
import Link from "next/link";
import HoverText from "../HoverText";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import RightSection from "./RightSection";
import { Icon } from "@iconify/react";

const BlogSection = () => {
  return (
    <div
      id="trendSection"
      className="px-4 md:px-8 lg:px-16 bg-background pt-24"
    >
      <div className="mb-4">
        <div className="w-full flex justify-center mb-8">
          <HoverText text="Trends" type="title" />
        </div>
        <div className="flex gap-4 relative">
          {/* left section */}
          <div className="w-[70%] h-full grid grid-cols-3 gap-4">
            {trendLists.map((trend) => (
              <Link
                href={trend.slug ? `/trends/${trend.slug}` : "#"}
                key={trend.id}
                className="border border-foreground/30 p-4 rounded-lg flex flex-col justify-between gap-2 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="">
                  <p className="group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {trend.title}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-foreground/50">5m read time</p>
                  <img
                    src={trend.image}
                    alt={trend.title}
                    className="h-36 object-cover rounded-md group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="flex justify-between text-foreground/70">
                  <div className="flex items-center gap-1">
                    <Icon icon="mdi:eye-outline" className="size-5" />
                    <span className="text-xs">4M</span>
                  </div>
                  <Icon icon="mdi:share" className="size-6" />
                </div>
              </Link>
            ))}
          </div>

          {/* right section */}
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
