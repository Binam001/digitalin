import HoverText from "../HoverText";

const OurVision = () => {
  return (
    <section className="bg-cream relative overflow-hidden px-0">
      {/* Vision */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="relative order-2 lg:order-1">
          <img
            src="/images/about/vision-img.jpg"
            alt="Vision"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-cream via-transparent to-transparent lg:bg-linear-to-l" />
        </div>

        <div className="flex flex-col justify-center p-8 lg:p-16 xl:p-24 order-1 lg:order-2">
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-8">
            02 / Our Vision
          </span>

          <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-8 text-background uppercase">
            Leading the
            <HoverText text="Creative" className="block text-primary" />
            <HoverText text="Revolution" className="block text-primary" />
          </h2>

          <div className="h-0.5 bg-cream-foreground/20 mb-8 max-w-sm" />

          <p className="text-lg text-background leading-relaxed max-w-lg">
            To be the catalyst of digital transformation for businesses and
            brands.
          </p>

          {/* <div className="flex gap-4 mt-12">
            <span className="text-[200px] lg:text-[280px]  leading-none absolute -bottom-20 right-0 select-none">
              V
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default OurVision;
