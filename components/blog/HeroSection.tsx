const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden w-screen">
      <header className="relative z-10 h-screen flex items-center justify-center bg-background">
        <div className="w-full flex flex-col items-center justify-center gap-8">
          <h1 className="text-2xl lg:text-5xl font-[Poppins-ExtraBold] text-center uppercase">
            Insights and Ideas Shaping Modern Advertising
          </h1>
          <p className="text-lg text-foreground/60 w-[70%] text-center">
            Explore expert insights and creative ideas driving today's
            advertising landscape.
          </p>
        </div>
      </header>
    </section>
  );
};

export default HeroSection;
