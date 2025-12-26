import { ourWorkLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, Flip);

// const images = [
//   {
//     id: 1,
//     title: "image 1",
//     image: "/images/portfolio/Comedy-Base-Camp-02.webp",
//   },
//   { id: 2, title: "image 2", image: "/images/portfolio/Dare-to-win-2.webp" },
//   { id: 3, title: "image 3", image: "/images/portfolio/dew-friend.png" },
//   { id: 4, title: "image 4", image: "/images/portfolio/Dove-1.webp" },
//   { id: 5, title: "image 5", image: "/images/portfolio/Dew-Roadies-2.webp" },
//   { id: 6, title: "image 6", image: "/images/portfolio/Happydent.webp" },
//   { id: 7, title: "image 7", image: "/images/portfolio/Sunsilk.webp" },
//   {
//     id: 8,
//     title: "image 8",
//     image: "/images/portfolio/Pepsi-More-Fizz-Thematic-Campaign-1.webp",
//   },
//   { id: 9, title: "image 9", image: "/images/portfolio/Play-in-Style.webp" },
//   {
//     id: 10,
//     title: "image 10",
//     image: "/images/portfolio/Pepsi-Refreshing-Utsav-Offer.png",
//   },
//   { id: 11, title: "image 11", image: "/images/portfolio/pepsi-tiktok.webp" },
// ];

const MarqueeExpand = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Marquee Animation
      gsap.to(".marquee-images", {
        scrollTrigger: {
          trigger: ".marquee",
          start: "top bottom",
          end: "top top",
          scrub: 1, // Reduced scrub for snappier feel
          onUpdate: (self) => {
            const progress = self.progress;
            const xPosition = -75 + progress * 25;
            gsap.set(".marquee-images", {
              x: `${xPosition}%`,
            });
          },
        },
      });

      let pinnedMarqueeImgClone: HTMLElement | null = null;

      // 2. Clone Helper
      function createPinnedMarqueeImgClone() {
        if (pinnedMarqueeImgClone) return;

        const originalMarqueeImg = document.querySelector(".marquee-img.pin");
        if (!originalMarqueeImg) return;

        const rect = originalMarqueeImg.getBoundingClientRect();

        pinnedMarqueeImgClone = originalMarqueeImg.cloneNode(
          true
        ) as HTMLElement;

        gsap.set(pinnedMarqueeImgClone, {
          position: "fixed",
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
          transform: "rotate(-6deg)",
          pointerEvents: "none",
          zIndex: 100,
        });

        document.body.appendChild(pinnedMarqueeImgClone);
        gsap.set(originalMarqueeImg, { opacity: 0 });
      }

      function removePinnedMarqueeImgClone() {
        if (pinnedMarqueeImgClone) {
          pinnedMarqueeImgClone.remove();
          pinnedMarqueeImgClone = null;
        }
        const originalMarqueeImg = document.querySelector(".marquee-img.pin");
        if (originalMarqueeImg) {
          gsap.set(originalMarqueeImg, { opacity: 1 });
        }
      }

      let flipCtx: gsap.core.Timeline | undefined;

      ScrollTrigger.create({
        trigger: ".horizontal-scroll",
        start: "top 30%",
        // Reduced from * 5 to * 3.5 to make scrolling faster
        end: () => `+=${window.innerHeight * 1}`,
        pin: true,
        scrub: true,
        onEnter: () => {
          createPinnedMarqueeImgClone();

          if (!pinnedMarqueeImgClone) return;

          const state = Flip.getState(pinnedMarqueeImgClone);

          // Target the inner container (with padding) instead of full wrapper
          const spacerInner = document.querySelector(
            ".horizontal-spacer-inner"
          ) as HTMLElement;
          if (spacerInner) {
            spacerInner.innerHTML = "";
            spacerInner.appendChild(pinnedMarqueeImgClone);
          }

          gsap.set(pinnedMarqueeImgClone, {
            position: "relative",
            width: "100%", // This now fills the PADDED container, not the screen
            height: "100%",
            top: "auto",
            left: "auto",
            transform: "none",
            zIndex: "auto",
            opacity: 1,
            objectFit: "cover", // Ensures image looks good in the new box
          });

          flipCtx = Flip.from(state, {
            duration: 1,
            ease: "power1.inOut", // Smoother ease
            scale: true,
            absolute: true,
            paused: true,
          });
        },
        onLeaveBack: () => {
          if (flipCtx) flipCtx.kill();
          removePinnedMarqueeImgClone();
          gsap.set(".horizontal-scroll-wrapper", { x: "0%" });
        },
        onUpdate: (self) => {
          const progress = self.progress;

          // Reduced flip duration from 0.15 to 0.05 (5% of scroll)
          // This makes the expansion happen almost immediately
          const flipEnd = 0.05;

          if (progress <= flipEnd && flipCtx) {
            const flipProgress = progress / flipEnd;
            flipCtx.progress(flipProgress);
          } else if (flipCtx) {
            if (flipCtx.progress() !== 1) flipCtx.progress(1);
          }

          if (progress > flipEnd) {
            const scrollProgress = (progress - flipEnd) / (1 - flipEnd);
            const xMove = -50 * scrollProgress;
            gsap.set(".horizontal-scroll-wrapper", {
              x: `${xMove}%`,
            });
          }
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="container-box relative w-screen h-full">
      <section className="marquee relative w-full h-[50dvh]">
        <div className="marquee-wrapper absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-6 w-[300%] lg:w-[75%] h-full">
          <div className="marquee-images top-1/2 left-1/2 transform translate-x-1/2 -translate-y-1/2 w-[200%] h-full flex justify-between items-center gap-4 will-change-transform">
            {ourWorkLists.map((image) => (
              <img
                key={image.id}
                src={image.image}
                alt={image.title}
                className={`marquee-img w-1/2 h-1/2 object-cover flex-1 aspect-5/3 ${
                  image.id === 5 && "pin"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="horizontal-scroll relative w-full h-[50dvh]">
        <div className="horizontal-scroll-wrapper relative w-[100%] flex will-change-transform">
          {/* Added Padding (p-12) to this spacer wrapper */}
          <div className="horizontal-slide horizontal-spacer flex-1 flex p-8 gap-4">
            {/* Added an inner container to act as the frame bounds */}
            <div className="horizontal-spacer-inner w-[50vw] h-[35dvh] relative">
              {/* Image will be injected here and fill THIS box, not the screen */}
            </div>
            <p className="flex items-center w-[75%]">
              The mountains are calling, and the adrenaline is rising. In a land
              where adventure is in our DNA, Mountain Dew stands as the ultimate
              fuel for those who refuse to back down.
            </p>
          </div>

          <div className="horizontal-slide w-[60vw] h-[50dvh] flex gap-8 p-8">
            <div className="w-[60vw] h-[35vh] col flex justify-center items-center">
              <img
                src="/images/portfolio/Pepsi-More-Fizz-Thematic-Campaign-1.webp"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col flex justify-center items-center w-full">
              <p className="">
                Our latest creative for Pepsi Nepal highlights the crisp,
                carbonated kick that cuts through the spice and doubles the
                delight. Because let's be honest: a meal without a cold Pepsi
                isn't a meal—it's just a snack.
              </p>
            </div>
          </div>

          {/* <div className="horizontal-slide w-[60vw] h-[50dvh] flex gap-8 p-8">

            <div className="w-[60vw] h-[35vh] col flex justify-center items-center">
              <img
                src="/images/portfolio/Sunsilk.webp"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col flex justify-center items-center w-full">
              <p className="">
                With every wash, unlock hair that's as bold and resilient as you
                are. Don't just follow the trends—set them. Because when your
                hair shines, you shine.
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default MarqueeExpand;
