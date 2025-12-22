import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ElementDimensions {
  width: number;
  height: number;
}

const FloatingInput = () => {
  useGSAP(() => {
    const features = document.querySelectorAll(".feature");
    const featureBgs = document.querySelectorAll(".feature-bg");

    const featureStartPositions = [
      { top: 25, left: 15 },
      { top: 12.5, left: 50 },
      { top: 22.5, left: 75 },
      { top: 40, left: 82.5 },
      { top: 50, left: 20 },
      { top: 80, left: 20 },
      { top: 75, left: 75 },
    ];

    features.forEach((feature, index) => {
      const featurePos = featureStartPositions[index];
      gsap.set(feature, {
        top: `${featurePos.top}%`,
        left: `${featurePos.left}%`,
      });
    });

    const featureStartDimensions: ElementDimensions[] = [];
    featureBgs.forEach((bg) => {
      const rect = bg.getBoundingClientRect();
      featureStartDimensions.push({
        width: rect.width,
        height: rect.height,
      });
    });

    const remInPixels = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const targetWidth = 3 * remInPixels;
    const targetHeight = 3 * remInPixels;

    const getSearchBarFinalWidth = () => {
      return window.innerWidth < 1000 ? 20 : 25;
    };

    let searchBarFinalWidth = getSearchBarFinalWidth();

    window.addEventListener("resize", () => {
      searchBarFinalWidth = getSearchBarFinalWidth();
      ScrollTrigger.refresh();
    });

    ScrollTrigger.create({
      trigger: ".spotlight",
      start: "start",
      end: `+=${window.innerWidth * 1.5}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        if (progress <= 0.3333) {
          const spotlightHeaderProgress = progress / 0.3333;
          gsap.set(".spotlight-content", {
            y: `${-100 * spotlightHeaderProgress}%`,
          });
        } else {
          gsap.set(".spotlight-content", {
            y: "-100%",
          });
        }

        if (progress >= 0 && progress <= 0.5) {
          const featureProgress = progress / 0.5;

          features.forEach((feature, index) => {
            const original = featureStartPositions[index];
            const currentTop =
              original.top + (50 - original.top) * featureProgress;
            const currentLeft =
              original.left + (50 - original.left) * featureProgress;

            gsap.set(feature, {
              top: `${currentTop}%`,
              left: `${currentLeft}%`,
            });
          });

          featureBgs.forEach((bg, index) => {
            const featureDim = featureStartDimensions[index];

            const currentWidth =
              featureDim.width +
              (targetWidth - featureDim.width) * featureProgress;

            const currentHeight =
              featureDim.height +
              (targetHeight - featureDim.height) * featureProgress;

            const currentBorderRadius = 3 + (25 - 0.5) * featureProgress;

            const currentBorderWidth = 0.125 + (0.35 - 0.125) * featureProgress;

            gsap.set(bg, {
              width: `${currentWidth}px`,
              height: `${currentHeight}px`,
              borderRadius: `${currentBorderRadius}rem`,
              borderWidth: `${currentBorderWidth}rem`,
            });
          });

          if (progress >= 0 && progress <= 0.1) {
            const featureTextProgress = progress / 0.1;
            gsap.set(".feature-content", {
              opacity: 1 - featureTextProgress,
            });
          } else if (progress > 0.1) {
            gsap.set(".feature-content", {
              opacity: 0,
            });
          }
        }

        if (progress >= 0.5) {
          gsap.set(".features", {
            opacity: 0,
          });
        } else {
          gsap.set(".features", {
            opacity: 1,
          });
        }
        if (progress >= 0.5) {
          gsap.set(".search-bar", {
            opacity: 1,
          });
        } else {
          gsap.set(".search-bar", {
            opacity: 0,
          });
        }

        if (progress >= 0.5 && progress <= 0.75) {
          const searchBarProgress = (progress - 0.5) / 0.25;

          const width = 3 + (searchBarFinalWidth - 3) * searchBarProgress;
          const height = 3;

          const translateY = 350 * searchBarProgress;

          gsap.set(".search-bar", {
            width: `${width}rem`,
            height: `${height}rem`,
            transform: `translate(-50%, ${translateY}%)`,
          });

          gsap.set(".search-bar p", {
            opacity: 0,
          });
        } else if (progress > 0.75) {
          gsap.set(".search-bar", {
            width: `${searchBarFinalWidth}rem`,
            height: "3rem",
            transform: "translate(-50%, 350%)",
          });
        }

        if (progress >= 0.75) {
          const finalHeaderProgress = (progress - 0.75) / 0.25;

          gsap.set(".search-bar p", {
            opacity: finalHeaderProgress,
          });

          gsap.set(".header-content", {
            y: -50 + 50 * finalHeaderProgress,
            opacity: finalHeaderProgress,
          });
        } else {
          gsap.set(".search-bar p", {
            opacity: 0,
          });

          gsap.set(".header-content", {
            y: -50,
            opacity: 0,
          });
        }
      },
    });
  });
  return (
    <>
      <div className="mb-16">
        {/* <section className="intro">
          <h1 className="w-full lg:w-1/2">Where systems move with intention</h1>
        </section> */}

        <section className="spotlight">
          <div className="spotlight-content -ml-4 md:-ml-8 lg:-ml-16">
            <div className="spotlight-bg">
              <img
                src="/images/mountain-dew-1.png"
                alt="mountain dew"
                className="w-full h-[100vh] object-cover"
              />
            </div>
            {/* <h1 className="w-full lg:w-1/2">
              Information flow best through intentional design
            </h1> */}
          </div>
          <div className="header -ml-4 md:-ml-8 lg:-ml-16">
            <div className="header-content w-full lg:w-2/3 flex flex-col items-center text-center gap-8 will-change-transform transform -translate-y-25 opacity-0">
              <h1>Find what matters through intelligent design</h1>
              <p>
                Turn ideas into impact. Share your{" "}
                <span className="text-primary">email</span> and let's build
                something powerful together.
              </p>
            </div>
          </div>

          <div className="features">
            {[
              { id: 1, tags: "Digital Marketing" },
              { id: 2, tags: "Advertising Agency" },
              { id: 3, tags: "Brand Strategy" },
              { id: 4, tags: "Creative Campaigns" },
              { id: 5, tags: "Social Media Marketing" },
              { id: 6, tags: "SEO & Growth" },
              { id: 7, tags: "Performance Marketing" },
            ].map((item) => (
              <div key={item.id} className="feature">
                <div className="feature-bg"></div>
                <div className="feature-content">
                  <p>{item.tags}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="search-bar">
            <p>Find the unseen link</p>
          </div> */}
          <input
            type="text"
            placeholder="Email"
            className="search-bar focus:outline-none px-8 text-xl"
          />
        </section>

        {/* <section className="outro">
          <h1 className="w-full lg:w-1/2">Where systems move with intention</h1>
        </section> */}
      </div>
      <style jsx>{`
        h1 {
          text-align: center;
          font-size: 5rem;
          line-height: 0.9;
        }
        p {
          font-size: 1rem;
          line-height: 1;
        }
        section {
          position: relative;
          width: 100%;
          height: 100svh;
          overflow: hidden;
        }
        .intro,
        .outro {
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .spotlight-content,
        .header {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          will-change: transform;
        }
        .spotlight-bg {
          position: absolute;
          transform: scale(0.8);
          opacity: 0.25;
        }
        .feature {
          position: absolute;
          width: max-content;
          height: max-content;
          padding: 1rem 1.5rem;
          transform: translate(-50%, -50%);
          will-change: top, left;
        }
        .feature-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background-color: black;
          border: 0.125rem solid #f26622;
          border-radius: 0.5rem;
          will-transform: width, height, border-radius, border-width;
        }
        .feature-content {
          position: relative;
          will-change: opacity;
        }
        .feature-content p {
          text-transform: uppercase;
          font-size: 0.85rem;
          line-height: 1;
        }
        .search-bar {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 3rem;
          height: 3rem;
          border-radius: 25rem;
          border: 0.2rem solid #f26622;
          background-color: black;
          opacity: 0;
          display: flex;
          align-items: center;
          will-change: opacity, width, height, transform;
        }

        .search-bar p {
          position: relative;
          opacity: 0;
          transform: translateX(2rem);
          will-change: opacity;
        }

        @media (max-width: 1000px) {
          h1 {
            font-size: 2.5rem;
          }
          .spotlight-bg {
            transform: scale(2);
          }
          .feature {
            padding: 1rem;
          }
          .feature-content p {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingInput;
