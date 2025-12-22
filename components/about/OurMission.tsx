import React from "react";

const OurMission = () => {
  return (
    <section className="">
      <div className="py-24 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
              03 / Our Mission
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-12">
              EMPOWER BRANDS WITH STRATEGIES THAT
              <span className="text-primary"> DISRUPT</span>, STORIES THAT
              <span className="text-primary"> RESONATE</span>, AND DESIGNS THAT
              <span className="text-primary"> CONVERT</span>.
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  num: "01",
                  title: "Disrupt",
                  desc: "Challenge the status quo with bold thinking",
                },
                {
                  num: "02",
                  title: "Connect",
                  desc: "Build authentic relationships with audiences",
                },
                {
                  num: "03",
                  title: "Grow",
                  desc: "Drive measurable results that matter",
                },
              ].map((item, index) => (
                <div key={index} className="group">
                  <span className="text-primary text-4xl">{item.num}</span>
                  <h3 className="font-display text-2xl mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cream-foreground/60 font-body text-sm">
                    {item.desc}
                  </p>
                  <div className="h-0.5 bg-cream-foreground/10 mt-6 group-hover:bg-primary transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
