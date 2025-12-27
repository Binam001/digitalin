import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Link from "next/link";

// Generate months for a given year
const getMonthsForYear = (year: number) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  const numberOfMonths = year === currentYear ? currentMonth + 1 : 12;

  return Array.from({ length: numberOfMonths }, (_, monthIndex) => ({
    label: new Date(year, monthIndex, 1).toLocaleString("default", {
      month: "short",
    }),
    month: monthIndex,
    year,
  }));
};

const categoryLists = [
  { id: 1, title: "Content Marketing", link: "#" },
  { id: 2, title: "Digital Marketing", link: "#" },
  { id: 3, title: "Digital Media Trend Reports", link: "#" },
  { id: 4, title: "e-Commerce Strategies", link: "#" },
  { id: 5, title: "Email Marketing", link: "#" },
  { id: 6, title: "Emerging Technologies in Marketing", link: "#" },
  { id: 7, title: "Local SEO Strategies", link: "#" },
  { id: 8, title: "Online Advertising", link: "#" },
  { id: 9, title: "Search Engine Optimization", link: "#" },
  { id: 10, title: "Social Media Marketing", link: "#" },
  { id: 11, title: "Web Design & UX", link: "#" },
];

const RightSection = () => {
  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear - 1];
  const [openYear, setOpenYear] = useState<number | null>(currentYear);

  const toggleYear = (year: number) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <div className="sticky top-1/3 w-[30%] h-fit rounded-lg border border-foreground/30 p-4 space-y-8">
      {/* Search */}
      <div>
        <p className="text-lg text-primary font-semibold">Search for Trends</p>
        <div className="relative">
          <input
            type="text"
            className="border border-foreground/30 rounded-md w-full p-2 mt-1 text-foreground/50 focus:outline-none"
            placeholder="Search for Trends"
          />
          <Icon
            icon="iconoir:search"
            className="size-5 absolute top-1/2 -translate-y-1/2 right-2 text-foreground/50"
          />
        </div>
      </div>

      {/* Months Section */}
      <div>
        <p className="text-lg text-primary font-semibold">
          Digital Media Trend Reports
        </p>

        {/* Loop over years */}
        {years.map((year) => {
          const months = getMonthsForYear(year);
          const isOpen = openYear === year;
          return (
            <div key={year} className="mt-4">
              {/* Year Label */}
              <div
                onClick={() => toggleYear(year)}
                className="w-full flex justify-between items-center text-lg font-semibold text-foreground"
              >
                <span>{year}</span>
                <Icon
                  icon="iconamoon:arrow-down-2-light"
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Months */}
              {isOpen && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {months.map(({ label, month }) => (
                    <span
                      key={`${year}-${month}`}
                      className="px-3 py-1 rounded-md bg-foreground/10 text-sm hover:bg-primary transition"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Category */}
      <div className="">
        <p className="text-lg text-primary font-semibold">Categories</p>
        <div className="flex flex-col mt-1">
          {categoryLists.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="py-1.5 text-sm border-b border-background hover:text-primary hover:border-primary w-fit transition-all duration-300"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSection;
