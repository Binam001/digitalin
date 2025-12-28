const OurMission = () => {
  return (
    <section className="flex items-center mb-8">
      <div className="">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <span className="text-primary text-sm tracking-[0.3em] uppercase">
              03 / Our Mission
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl lg:text-7xl lg:leading-[0.95] mb-12">
              <span className="text-primary"> BRANDS</span>, THAT STAND OUT,
              <span className="text-primary"> STRATEGIES </span>,THAT DELIVER,
              <span className="text-primary"> STORIES</span> THAT STICK.
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  num: "01",
                  title: "Creativity",
                  desc: "Innovative ideas that capture audience attention",
                },
                {
                  num: "02",
                  title: "Strategy",
                  desc: "Smart planning to achieve real results",
                },
                {
                  num: "03",
                  title: "Execution",
                  desc: "Turning concepts into impactful digital experiences",
                },
              ].map((item, index) => (
                <div key={index} className="group">
                  <span className="text-primary text-4xl">{item.num}</span>
                  <h3 className="font-display text-2xl mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cream-foreground/60 text-sm">
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
