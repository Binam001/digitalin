"use client";

import { trendLists } from "@/constants";
import Link from "next/link";
import HoverText from "../HoverText";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import RightSection from "./RightSection";

const BlogSection = () => {
  return (
    <div id="trendSection" className="px-4 md:px-8 lg:px-16">
      <div className="mb-4">
        <div className="w-full flex justify-center mb-8">
          <HoverText text="Trends" type="title" />
        </div>
        <div className="flex gap-4">
          {/* left section */}
          <div className="space-y-4 w-[70%]">
            {trendLists.map((trend) => (
              <div
                key={trend.id}
                className={`group h-fit relative rounded-lg border border-foreground/30 p-4 flex flex-col gap-2`}
              >
                <div className="flex justify-between">
                  <p className="text-lg text-primary font-semibold">
                    {trend.title}
                  </p>
                  <Link
                    href={trend.slug ? `/trends/${trend.slug}` : "#"}
                    className="text-sm"
                  >
                    <InteractiveHoverButton
                      text="Read More"
                      className="border-foreground/30"
                      dotClassName="bg-foreground/30"
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative w-[30%] h-full rounded-md overflow-hidden">
                    <img
                      src={trend.image}
                      alt={trend.title}
                      className="w-full h-full object-cover rounded-md group-hover:scale-[1.05] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 w-full h-full bg-linear-to-b from-black/70 via-transparent to-black/70 duration-300 transition-colors rounded-md" />
                  </div>
                  <div className="w-[70%] space-y-4">
                    {/* <p className="text-lg text-primary font-semibold">
                    {trend.title}
                  </p> */}
                    <p className="line-clamp-6 text-sm">{trend.desc}</p>
                  </div>
                </div>
              </div>
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
