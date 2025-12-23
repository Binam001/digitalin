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
            className={`flex ${
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, ea officiis. Quasi quisquam, consectetur nulla quas
                repellendus obcaecati at exercitationem cumque similique placeat
                asperiores ex fugiat nobis, voluptatem omnis magni.
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .clip-image {
          transition: clip-path 0.5s ease;
          overflow: hidden;
        }

        /* Even cards */
        .clip-image.even {
          clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
        }

        .clip-image.even:hover {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        /* Odd cards */
        .clip-image.odd {
          clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
        }

        .clip-image.odd:hover {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        /* Optional image scaling */
        .clip-image img {
          transition: transform 0.5s ease;
        }

        .clip-image:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default OurWork;
