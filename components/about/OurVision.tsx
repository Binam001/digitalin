import HoverText from "../HoverText";

const OurVision = () => {
  return (
    <section className="bg-background relative overflow-hidden px-0">
      {/* Vision */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="relative order-2 lg:order-1">
          <img
            src="/images/about/vision-img.jpg"
            alt="Vision"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-8 lg:p-16 xl:p-24 order-1 lg:order-2">
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-8">
            02 / Our Vision
          </span>

          <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-8 text-foreground uppercase flex flex-col">
            Leading the
            <span className="text-primary">Creative</span>
            <span className="text-primary">Revolution</span>
          </h2>

          <p className="text-lg leading-relaxed max-w-lg">
            To be the catalyst of digital transformation for businesses and
            brands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
