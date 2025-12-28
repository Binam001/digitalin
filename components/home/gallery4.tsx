"use client";

import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
// import {
//   Carousel,
//   CarouselApi,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import { whatWeDoLists } from "@/constants";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { whatWeDoLists } from "@/constants";
import Link from "next/link";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

const images = [
  { id: 1, image: "/images/ads/ads1.jpg" },
  { id: 2, image: "/images/ads/ads2.jpg" },
  { id: 3, image: "/images/ads/ads3.jpg" },
  { id: 4, image: "/images/ads/ads4.webp" },
  { id: 5, image: "/images/ads/ads5.webp" },
  { id: 6, image: "/images/ads/ads1.jpg" },
  { id: 7, image: "/images/ads/ads2.jpg" },
  { id: 8, image: "/images/ads/ads3.jpg" },
];

const Gallery4 = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [groupedItems, setGroupedItems] = useState<any[][]>([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any | null>(
    null
  );
  // const isMobile = window.innerWidth <= 768;
  const isMobile = useMediaQuery({ maxWidth: 430 });
  const isTablet = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    // const itemsPerSlide = 3; // 2 rows * 3 columns
    const itemsPerSlide = isMobile ? 1 : isTablet ? 2 : 8;
    const result = [];
    for (let i = 0; i < images.length; i += itemsPerSlide) {
      result.push(images.slice(i, i + itemsPerSlide));
    }
    setGroupedItems(result);
  }, []);

  const getGridCols = (index: number) => {
    if (index === groupedItems.length - 1) {
      const lastGroupSize = groupedItems[index].length;
      if (lastGroupSize <= 3) return `lg:grid-cols-${lastGroupSize}`;
    }
    return "lg:grid-cols-3";
  };

  const getInitials = (name: string) => {
    if (!name) return "";
    const nameParts = name.trim().split(" ");
    if (nameParts.length === 1 && nameParts[0]) {
      return nameParts[0].charAt(0).toUpperCase();
    }
    if (
      nameParts.length > 1 &&
      nameParts[0] &&
      nameParts[nameParts.length - 1]
    ) {
      const firstNameInitial = nameParts[0].charAt(0);
      const lastNameInitial = nameParts[nameParts.length - 1].charAt(0);
      return `${firstNameInitial}${lastNameInitial}`.toUpperCase();
    }
    return "";
  };
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="w-screen min-h-screen flex flex-col items-center justify-center">
      <div className="w-full select-none relative space-y-8">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            carouselApi?.scrollPrev();
          }}
          disabled={!canScrollPrev}
          className="disabled:pointer-events-auto rounded-full bg-primary hover:bg-primary/70 absolute top-1/2 -left-4 -translate-y-1/2 z-10"
        >
          <ArrowLeft className="size-5 text-white" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            carouselApi?.scrollNext();
          }}
          disabled={!canScrollNext}
          className="disabled:pointer-events-auto rounded-full bg-primary hover:bg-primary/70 absolute top-1/2 -right-4 -translate-y-1/2 z-10"
        >
          <ArrowRight className="size-5 text-white" />
        </Button>
        <h1 className="text-2xl lg:text-5xl font-[Poppins-ExtraBold] uppercase my-8 text-center">
          Our Portfolio
        </h1>
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              // No specific breakpoints needed here as we control slides manually
            },
          }}
        >
          <CarouselContent>
            {groupedItems.map((group, index) => (
              <CarouselItem key={index}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full`}
                >
                  {group.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-lg flex flex-col items-center gap-4 h-110 overflow-hidden"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="relative h-full w-full">
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Link href="/portfolio" className="flex justify-center">
          <InteractiveHoverButton text="View More" />
        </Link>
      </div>
    </section>
  );
};

export { Gallery4 };
