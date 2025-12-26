const WhoWeAre = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="">
        {/* Section Header */}
        <div className="w-[70%] justify-self-end mb-20">
          <div className="">
            <span className="text-primary text-sm tracking-[0.3em] uppercase">
              01 / Who We Are
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.9]">
              A COLLECTIVE OF
              <span className="block text-primary">CREATIVE MINDS</span>
              BASED IN NEPAL
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div className="w-[70%] justify-self-end">
          <div className="h-px bg-foreground/30 mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our team blends creativity and strategy to craft innovative
            campaigns and engaging content. Using the latest tools and a
            collaborative mindset, we turn ideas into impactful digital
            experiences that help brands stand out.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Recognized as one of the leading advertising agencies in Nepal,
            DigitalIn delivers result-driven solutions powered by the latest
            digital marketing innovations, helping brands stay ahead and connect
            with the right audience.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-24 bg-foreground/30">
          {[
            { number: "200+", label: "Projects" },
            { number: "50+", label: "Clients" },
            { number: "15", label: "Creatives" },
            { number: "8", label: "Awards" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-background p-8 group hover:bg-primary transition-colors duration-500 text-center"
            >
              <span className="text-6xl lg:text-8xl font-display text-primary group-hover:text-primary-foreground transition-colors duration-500">
                {stat.number}
              </span>
              <p className="text-muted-foreground text-sm tracking-widest uppercase mt-4 group-hover:text-primary-foreground/70 transition-colors duration-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
