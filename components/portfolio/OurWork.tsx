"use client";

import { ourWorkLists } from "@/constants";
import React from "react";

const OurWork = () => {
  return (
    <section>
      <div className="">
        {ourWorkLists.map((item) => (
          <div
            key={item.id}
            className={`work-card flex ${
              item.id % 2 === 0 ? "flex-row" : "flex-row-reverse bg-primary"
            }`}
          >
            <div
              className={`w-[55%] clip-image ${
                item.id % 2 === 0 ? "even" : "odd"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[45%] flex flex-col justify-center p-4">
              <p className="uppercase text-2xl">{item.title}</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore dolores corrupti quia repellat, vero vitae velit nemo,
                vel quas beatae error esse molestias explicabo mollitia rerum
                hic. Placeat, dignissimos harum?
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .work-card {
          cursor: pointer;
        }

        /* Shared */
        .clip-image {
          overflow: hidden;
          transition: clip-path 0.6s ease;
        }

        /* Even cards */
        .clip-image.even {
          clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
        }

        .work-card:hover .clip-image.even {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        /* Odd cards */
        .clip-image.odd {
          clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
        }

        .work-card:hover .clip-image.odd {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        /* Image scale */
        .clip-image img {
          transition: transform 0.6s ease;
        }

        .work-card:hover .clip-image img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default OurWork;
